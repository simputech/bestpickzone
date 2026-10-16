import 'server-only'

import { unstable_noStore as noStore } from 'next/cache'
import { matchAmazonBook, type AmazonBookItem, type AmazonBookRequest, type AmazonBookResponseItem } from './amazon-book-match'
import { isAmazonImageUrl, isAmazonProductUrl, selectAmazonProduct, type AmazonCreatorItem, type AmazonProductRequest, type AmazonProductResponseItem, type AmazonProductMismatchReason } from './amazon-product-match'
import { AmazonMemoryCache, AmazonRequestGate, amazonRetryDelay } from './amazon-creators-runtime'

export type { AmazonCreatorItem, AmazonProductRequest } from './amazon-product-match'
export type AmazonLookupOptions = { partnerTag?: string }
export type AmazonProductOptions = AmazonLookupOptions & Omit<AmazonProductRequest, 'query'>
export type AmazonBookTitleRequest = { title: string; author: string }

type CreatorsApiTokenResponse = { access_token?: string; expires_in?: number }
type CreatorsApiConfig = {
  clientId: string
  clientSecret: string
  credentialVersion: '3.1' | '3.2' | '3.3'
  marketplace: string
  partnerTag: string
}
type CatalogResponse = {
  searchResult?: { items?: AmazonProductResponseItem[] }
  itemsResult?: { items?: AmazonProductResponseItem[] }
}

const API_BASE_URL = 'https://creatorsapi.amazon'
const DEFAULT_MARKETPLACE = 'www.amazon.com'
const DEFAULT_PARTNER_TAG = 'althcu-20'
const TOKEN_EXPIRY_SAFETY_MS = 60_000
const PRODUCT_CACHE_MS = 6 * 60 * 60 * 1000
const NEGATIVE_CACHE_MS = 60_000
const BOOK_RESOURCES = ['images.primary.large', 'itemInfo.title', 'itemInfo.byLineInfo', 'itemInfo.classifications', 'itemInfo.contentInfo']
// No offers/availability resources: the UI does not show or cache volatile prices.
const PRODUCT_RESOURCES = ['images.primary.large', 'itemInfo.title', 'itemInfo.byLineInfo', 'itemInfo.manufactureInfo']
const MARKETPLACES = new Set([
  'www.amazon.com', 'www.amazon.ca', 'www.amazon.com.mx', 'www.amazon.com.br', 'www.amazon.co.uk',
  'www.amazon.de', 'www.amazon.fr', 'www.amazon.it', 'www.amazon.es', 'www.amazon.nl', 'www.amazon.com.be',
  'www.amazon.eg', 'www.amazon.in', 'www.amazon.ie', 'www.amazon.pl', 'www.amazon.sa', 'www.amazon.se',
  'www.amazon.com.tr', 'www.amazon.ae', 'www.amazon.co.jp', 'www.amazon.sg', 'www.amazon.com.au',
])
const TOKEN_ENDPOINTS = {
  '3.1': 'https://api.amazon.com/auth/o2/token',
  '3.2': 'https://api.amazon.co.uk/auth/o2/token',
  '3.3': 'https://api.amazon.co.jp/auth/o2/token',
} as const

let tokenCache: { key: string; value: string; expiresAt: number } | null = null
let pendingToken: { key: string; request: Promise<string> } | null = null
let tokenFailureUntil = 0
const requestGate = new AmazonRequestGate()
const productCache = new AmazonMemoryCache<AmazonCreatorItem | null>()
const bookCache = new AmazonMemoryCache<AmazonBookItem | null>()
const pendingProducts = new Map<string, Promise<AmazonCreatorItem | null>>()
const pendingBooks = new Map<string, Promise<AmazonBookItem | null>>()
const pendingBookBatches = new Map<string, Promise<Record<string, AmazonBookItem>>>()

function creatorsApiConfig(options: AmazonLookupOptions = {}): CreatorsApiConfig | null {
  if (!options || typeof options !== 'object' || (options.partnerTag !== undefined && typeof options.partnerTag !== 'string')) return null
  const clientId = process.env.AMAZON_CREATORS_API_CLIENT_ID?.trim()
  const clientSecret = process.env.AMAZON_CREATORS_API_CLIENT_SECRET?.trim()
  const credentialVersion = process.env.AMAZON_CREATORS_API_CREDENTIAL_VERSION?.trim() || '3.1'
  const marketplace = process.env.AMAZON_MARKETPLACE?.trim() || DEFAULT_MARKETPLACE
  const partnerTag = options.partnerTag !== undefined ? options.partnerTag.trim() : (
    process.env.AMAZON_ASSOCIATE_TAG?.trim() || process.env.NEXT_PUBLIC_AMAZON_TRACKING_ID?.trim() || DEFAULT_PARTNER_TAG
  )
  if (!clientId || !clientSecret || !['3.1', '3.2', '3.3'].includes(credentialVersion) ||
    !MARKETPLACES.has(marketplace) || !/^[A-Za-z0-9-]{1,64}$/.test(partnerTag)) return null
  return { clientId, clientSecret, credentialVersion: credentialVersion as CreatorsApiConfig['credentialVersion'], marketplace, partnerTag }
}

export function isAmazonCreatorsApiConfigured() {
  return Boolean(creatorsApiConfig())
}

async function getAccessToken(config: CreatorsApiConfig): Promise<string> {
  const key = JSON.stringify([config.clientId, config.credentialVersion])
  if (tokenCache?.key === key && tokenCache.expiresAt > Date.now()) return tokenCache.value
  if (pendingToken?.key === key) return pendingToken.request
  if (tokenFailureUntil > Date.now()) throw new Error('Amazon authentication is temporarily unavailable')

  const request = (async () => {
    try {
      const response = await fetch(TOKEN_ENDPOINTS[config.credentialVersion], {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grant_type: 'client_credentials', client_id: config.clientId, client_secret: config.clientSecret, scope: 'creatorsapi::default' }),
        cache: 'no-store',
        redirect: 'error',
        signal: AbortSignal.timeout(5000),
      })
      if (!response.ok) throw new Error(`Amazon authentication failed (HTTP ${response.status})`)
      const token = await response.json() as CreatorsApiTokenResponse
      if (typeof token.access_token !== 'string' || !token.access_token ||
        (token.expires_in !== undefined && (!Number.isFinite(token.expires_in) || token.expires_in <= 0))) {
        throw new Error('Amazon authentication returned an invalid token')
      }
      // Never extend a short-lived token beyond the lifetime returned by Amazon.
      const lifetime = (token.expires_in ?? 3600) * 1000
      tokenCache = { key, value: token.access_token, expiresAt: Date.now() + lifetime - Math.min(TOKEN_EXPIRY_SAFETY_MS, lifetime / 10) }
      tokenFailureUntil = 0
      return token.access_token
    } catch {
      tokenFailureUntil = Date.now() + NEGATIVE_CACHE_MS
      // Do not log request/response bodies, credential values, tokens or raw errors.
      throw new Error('Amazon authentication is temporarily unavailable')
    }
  })()
  pendingToken = { key, request }
  try { return await request } finally { if (pendingToken?.request === request) pendingToken = null }
}

async function requestCatalog(config: CreatorsApiConfig, operation: 'searchItems' | 'getItems', parameters: Record<string, unknown>): Promise<CatalogResponse | null> {
  try {
    const accessToken = await getAccessToken(config)
    if (!await requestGate.acquire()) return null
    const response = await fetch(`${API_BASE_URL}/catalog/v1/${operation}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json', 'x-marketplace': config.marketplace },
      body: JSON.stringify({ ...parameters, marketplace: config.marketplace, partnerTag: config.partnerTag }),
      cache: 'no-store',
      redirect: 'error',
      signal: AbortSignal.timeout(8000),
    })
    if (!response.ok) {
      if (response.status === 429) requestGate.pause(amazonRetryDelay(response.headers.get('Retry-After')))
      else if (response.status === 401 || response.status === 403) {
        tokenCache = null
        requestGate.pause(60_000)
      } else if (response.status >= 500) requestGate.pause(30_000)
      console.warn(`Amazon Creators API ${operation} failed (HTTP ${response.status}); using unverified search links.`)
      return null
    }
    return await response.json() as CatalogResponse
  } catch {
    console.warn('Amazon Creators API is unavailable; using unverified search links.')
    return null
  }
}

function requestKey(config: CreatorsApiConfig, kind: string, request: unknown) {
  return JSON.stringify([config.marketplace, config.partnerTag, config.credentialVersion, kind, request])
}

/** Prefer curated ASINs. Discovery requires brand/title agreement and one unambiguous result. */
export async function searchAmazonProduct(query: string, options: AmazonProductOptions = {}): Promise<AmazonCreatorItem | null> {
  // Also opt out on cache hits/missing configuration: API data must never enter static HTML or ISR.
  noStore()
  const config = creatorsApiConfig(options)
  if (typeof query !== 'string') return null
  const normalizedQuery = query.trim().replace(/\s+/g, ' ')
  if (!config || !normalizedQuery || normalizedQuery.length > 512 || (options.asin && !/^[A-Z0-9]{10}$/.test(options.asin))) return null
  const { partnerTag: _partnerTag, ...identity } = options
  const expected: AmazonProductRequest = { ...identity, query: normalizedQuery }
  const key = requestKey(config, 'product-v3', expected)
  const cached = productCache.get(key)
  if (cached !== undefined) return cached
  const pending = pendingProducts.get(key)
  if (pending) return pending

  const request = (async () => {
    const payload = await requestCatalog(config, expected.asin ? 'getItems' : 'searchItems', expected.asin ? {
      itemIds: [expected.asin], itemIdType: 'ASIN', resources: PRODUCT_RESOURCES,
    } : {
      keywords: normalizedQuery, itemCount: 10, resources: PRODUCT_RESOURCES,
      ...(expected.brand ? { brand: expected.brand } : {}),
      ...(expected.searchIndex ? { searchIndex: expected.searchIndex } : {}),
    })
    const candidates = expected.asin ? payload?.itemsResult?.items : payload?.searchResult?.items
    const reasons = new Set<AmazonProductMismatchReason | 'catalog_unavailable' | 'invalid_items_container'>()
    const item = Array.isArray(candidates) ? selectAmazonProduct(candidates, expected, config.partnerTag, config.marketplace, new Date().toISOString(), reason => reasons.add(reason)) : null
    if (!item) {
      if (!payload) reasons.add('catalog_unavailable')
      else if (candidates === undefined) reasons.add('no_candidates')
      else if (!Array.isArray(candidates)) reasons.add('invalid_items_container')
      // One diagnostic per cache miss. Only source-authored request identifiers, counts and
      // fixed enums are logged; never returned titles, brands, URLs, ASINs or raw payloads.
      console.warn(`Amazon Creators API product fallback: ${JSON.stringify({
        ...(expected.asin ? { expectedAsin: expected.asin } : { query: normalizedQuery }),
        candidateCount: Array.isArray(candidates) ? candidates.length : 0,
        reasons: Array.from(reasons).sort(),
      })}`)
    }
    productCache.set(key, item, item ? PRODUCT_CACHE_MS : NEGATIVE_CACHE_MS)
    return item
  })().finally(() => pendingProducts.delete(key))
  pendingProducts.set(key, request)
  return request
}

export async function lookupAmazonProduct(request: AmazonProductRequest, options: AmazonLookupOptions = {}) {
  if (!request || typeof request !== 'object') { noStore(); return null }
  const { query, ...identity } = request
  return searchAmazonProduct(query, { ...identity, ...options })
}

function safelyMatchBook(candidate: AmazonBookResponseItem, expected: AmazonBookRequest, partnerTag: string, fetchedAt: string) {
  try {
    const item = matchAmazonBook(candidate, expected, partnerTag, fetchedAt)
    return item && isAmazonProductUrl(item.detailPageURL, item.asin, partnerTag, DEFAULT_MARKETPLACE) &&
      isAmazonImageUrl(item.imageUrl) && Number.isFinite(item.imageWidth) && Number.isFinite(item.imageHeight) ? item : null
  } catch { return null }
}

function validBookRequest(book: AmazonBookTitleRequest) {
  return Boolean(book && typeof book === 'object' && typeof book.title === 'string' && typeof book.author === 'string' &&
    book.title.trim() && book.author.trim() && book.title.length <= 300 && book.author.length <= 200)
}

/** Resolve a known work, not a merely related result; multiple valid English print editions are acceptable. */
export async function getAmazonBooksByTitle(books: AmazonBookTitleRequest[], options: AmazonLookupOptions = {}): Promise<Record<string, AmazonBookItem>> {
  noStore()
  const config = creatorsApiConfig(options)
  // Existing book validation is deliberately US-only. Never relabel a foreign edition.
  if (!config || config.marketplace !== DEFAULT_MARKETPLACE || !Array.isArray(books) || !books.length || books.length > 20) return {}
  const results = await Promise.all(books.filter(validBookRequest).map(async book => {
    const key = requestKey(config, 'book-title-v1', book)
    const cached = bookCache.get(key)
    if (cached !== undefined) return [book.title, cached] as const
    const pending = pendingBooks.get(key)
    if (pending) return [book.title, await pending] as const
    const request = (async () => {
      const payload = await requestCatalog(config, 'searchItems', {
        keywords: `${book.title} ${book.author}`, author: book.author,
        searchIndex: 'Books', itemCount: 10, resources: BOOK_RESOURCES,
      })
      const candidates = payload?.searchResult?.items
      const fetchedAt = new Date().toISOString()
      const matches = Array.isArray(candidates) ? (candidates as AmazonBookResponseItem[]).flatMap(candidate => {
        if (!candidate?.asin) return []
        const match = safelyMatchBook(candidate, { ...book, asin: candidate.asin }, config.partnerTag, fetchedAt)
        return match ? [match] : []
      }) : []
      // Deterministic format/ASIN ordering, rather than trusting search rank as editorial judgement.
      matches.sort((a, b) => Number(a.binding !== 'Paperback') - Number(b.binding !== 'Paperback') || a.asin.localeCompare(b.asin))
      const item = matches[0] ?? null
      bookCache.set(key, item, item ? PRODUCT_CACHE_MS : NEGATIVE_CACHE_MS)
      return item
    })().finally(() => pendingBooks.delete(key))
    pendingBooks.set(key, request)
    return [book.title, await request] as const
  }))
  return Object.fromEntries(results.filter((entry): entry is readonly [string, AmazonBookItem] => Boolean(entry[1])))
}

/** Batch exact editions in groups of ten (Amazon's GetItems maximum), with per-work cache reuse. */
export async function getAmazonBooks(books: AmazonBookRequest[], options: AmazonLookupOptions = {}): Promise<Record<string, AmazonBookItem>> {
  noStore()
  const config = creatorsApiConfig(options)
  if (!config || config.marketplace !== DEFAULT_MARKETPLACE || !Array.isArray(books) || !books.length || books.length > 100) return {}
  const validBooks = books.filter(book => validBookRequest(book) && /^[A-Z0-9]{10}$/.test(book.asin))
  const matched: Record<string, AmazonBookItem> = {}
  const missing: AmazonBookRequest[] = []
  for (const book of validBooks) {
    const cached = bookCache.get(requestKey(config, 'book-asin-v2', book))
    if (cached === undefined) missing.push(book)
    else if (cached) matched[book.title] = cached
  }
  for (let offset = 0; offset < missing.length; offset += 10) {
    const batch = missing.slice(offset, offset + 10)
    const batchKey = requestKey(config, 'book-batch-v2', batch)
    let pending = pendingBookBatches.get(batchKey)
    if (!pending) {
      pending = (async () => {
        const payload = await requestCatalog(config, 'getItems', {
          itemIds: Array.from(new Set(batch.map(book => book.asin))), itemIdType: 'ASIN', resources: BOOK_RESOURCES,
        })
        const candidates = payload?.itemsResult?.items
        const fetchedAt = new Date().toISOString()
        const items: Record<string, AmazonBookItem> = {}
        for (const expected of batch) {
          const candidate = Array.isArray(candidates) ? (candidates as AmazonBookResponseItem[]).find(item => item?.asin === expected.asin) : undefined
          const item = candidate ? safelyMatchBook(candidate, expected, config.partnerTag, fetchedAt) : null
          bookCache.set(requestKey(config, 'book-asin-v2', expected), item, item ? PRODUCT_CACHE_MS : NEGATIVE_CACHE_MS)
          if (item) items[expected.title] = item
        }
        return items
      })().finally(() => pendingBookBatches.delete(batchKey))
      pendingBookBatches.set(batchKey, pending)
    }
    Object.assign(matched, await pending)
  }
  return matched
}
