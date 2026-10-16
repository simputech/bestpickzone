/** Pure, fail-closed checks shared by Creators API lookups and offline tests. */
export type AmazonProductRequest = {
  query: string
  asin?: string
  expectedTitle?: string
  brand?: string
  model?: string
  /** Requires returned model or item-part-number to equal this family or continue at a separator. */
  modelPrefix?: string
  searchIndex?: string
  requiredTitleTerms?: string[]
  forbiddenTitleTerms?: string[]
  /** Only honored with a curated ASIN, explicit brand and discriminating required title terms. */
  allowAccessory?: boolean
}

export type AmazonCreatorItem = {
  asin: string
  detailPageURL: string
  title: string
  imageUrl: string
  imageWidth: number
  imageHeight: number
  fetchedAt: string
  /** Offers are deliberately not requested; legacy cards should use their price fallback. */
  price?: never
}

type DisplayValue = { displayValue?: string }
export type AmazonProductResponseItem = {
  asin?: string
  detailPageURL?: string
  images?: { primary?: {
    medium?: { url?: string; width?: number; height?: number }
    large?: { url?: string; width?: number; height?: number }
  } }
  itemInfo?: {
    title?: DisplayValue
    byLineInfo?: { brand?: DisplayValue; manufacturer?: DisplayValue }
    manufactureInfo?: { model?: DisplayValue; itemPartNumber?: DisplayValue }
  }
}

export function normalizeAmazonText(value: string) {
  return value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/([a-z])\+/g, '$1 plus ').replace(/[^a-z0-9]+/g, ' ').trim()
}

function containsWords(value: string, expected: string) {
  const actual = new Set(normalizeAmazonText(value).split(' '))
  const wanted = normalizeAmazonText(expected).split(' ').filter(Boolean)
  return wanted.length > 0 && wanted.every(word => actual.has(word))
}

function containsPhrase(value: string, expected: string) {
  const phrase = normalizeAmazonText(expected)
  return Boolean(phrase) && ` ${normalizeAmazonText(value)} `.includes(` ${phrase} `)
}

export function isAmazonProductUrl(raw: string | undefined, asin: string, partnerTag: string, marketplace: string) {
  if (!raw || !/^[A-Z0-9]{10}$/.test(asin)) return false
  try {
    const url = new URL(raw)
    // Keep every Amazon-vended parameter; validation must never rewrite attribution.
    return url.protocol === 'https:' && url.hostname === marketplace && !url.port && !url.username && !url.password &&
      /^\/(?:[^/]+\/)?dp\/[A-Z0-9]{10}\/?$/.test(url.pathname) &&
      url.pathname.split('/').filter(Boolean).at(-1) === asin &&
      url.searchParams.getAll('tag').length === 1 && url.searchParams.get('tag') === partnerTag
  } catch { return false }
}

export function isAmazonImageUrl(raw: string | undefined) {
  if (!raw) return false
  try {
    const url = new URL(raw)
    return url.protocol === 'https:' && url.hostname === 'm.media-amazon.com' && !url.port && !url.username && !url.password &&
      url.pathname.startsWith('/images/')
  } catch { return false }
}

const UNREQUESTED_CONDITIONS = /\b(renewed|refurbished|pre owned|used|bundle|bundled)\b/g
const ACCESSORY_WORDS = /\b(accessories|accessory|replacement|compatible|refill)\b/g
const VARIANT_WORDS = ['plus', 'mini', 'ultra', 'max', 'lite', 'se', 'xl']

export function matchAmazonProduct(
  item: AmazonProductResponseItem,
  expected: AmazonProductRequest,
  partnerTag: string,
  marketplace: string,
  fetchedAt: string,
): AmazonCreatorItem | null {
  if (!item || typeof item !== 'object') return null
  const title = item.itemInfo?.title?.displayValue
  const asin = item.asin
  const image = item.images?.primary?.large ?? item.images?.primary?.medium
  if (typeof title !== 'string' || !title || typeof asin !== 'string' || typeof image?.url !== 'string' || !Number.isFinite(image.width) || !Number.isFinite(image.height) ||
    !image.width || image.width < 1 || !image.height || image.height < 1) return null
  if (expected.asin && asin !== expected.asin) return null
  if (!isAmazonProductUrl(item.detailPageURL, asin, partnerTag, marketplace) || !isAmazonImageUrl(image.url)) return null

  const expectedTitle = expected.expectedTitle?.trim() || expected.query.trim()
  const pinnedIdentity = Boolean(expected.asin && expected.brand && expected.requiredTitleTerms?.length)
  if (!expectedTitle || (!pinnedIdentity && !containsWords(title, expectedTitle))) return null
  if (expected.requiredTitleTerms?.some(term => !containsPhrase(title, term))) return null
  if (expected.forbiddenTitleTerms?.some(term => containsPhrase(title, term))) return null

  const brand = item.itemInfo?.byLineInfo?.brand?.displayValue
  // For discovery, an actual brand field must agree with the requested identity.
  // A category-only query ("wireless keyboard") must remain an honest search link.
  if (!expected.asin && (typeof brand !== 'string' || !brand || (!expected.brand && !containsPhrase(expectedTitle, brand)))) return null
  if (expected.brand && (typeof brand !== 'string' || !brand || normalizeAmazonText(brand) !== normalizeAmazonText(expected.brand))) return null
  if (expected.model || expected.modelPrefix) {
    const model = item.itemInfo?.manufactureInfo
    const identifiers = [model?.model?.displayValue, model?.itemPartNumber?.displayValue].filter((value): value is string => typeof value === 'string' && Boolean(value))
    if (expected.model) {
      const expectedModel = normalizeAmazonText(expected.model)
      if (!identifiers.some(value => normalizeAmazonText(value) === expectedModel)) return null
    }
    if (expected.modelPrefix) {
      const prefix = normalizeAmazonText(expected.modelPrefix)
      if (!prefix || !identifiers.some(value => {
        const identifier = normalizeAmazonText(value)
        return identifier === prefix || identifier.startsWith(`${prefix} `)
      })) return null
    }
  }

  const normalizedTitle = normalizeAmazonText(title)
  const normalizedExpected = normalizeAmazonText(expectedTitle)
  // Avoid a compatible accessory, used listing, bundle or adjacent model variant.
  for (const condition of normalizedTitle.match(UNREQUESTED_CONDITIONS) ?? []) {
    if (!containsPhrase(normalizedExpected, condition)) return null
  }
  if (!(expected.allowAccessory && pinnedIdentity)) {
    for (const word of normalizedTitle.match(ACCESSORY_WORDS) ?? []) {
      if (!containsPhrase(normalizedExpected, word)) return null
    }
    if (/\b(compatible with|for use with|fits)\b/.test(normalizedTitle)) return null
  }
  if (!expected.asin && VARIANT_WORDS.some(word => containsPhrase(normalizedTitle, word) && !containsPhrase(normalizedExpected, word))) return null
  if (!expected.asin && /\bfor\b/.test(normalizedTitle) && brand && !containsPhrase(title.split(/\bfor\b/i)[0], brand)) return null

  return { asin, title, detailPageURL: item.detailPageURL!, imageUrl: image.url, imageWidth: image.width, imageHeight: image.height, fetchedAt }
}

/** Multiple color/edition/model results are not permission to choose an arbitrary first result. */
export function selectAmazonProduct(
  items: AmazonProductResponseItem[],
  expected: AmazonProductRequest,
  partnerTag: string,
  marketplace: string,
  fetchedAt: string,
): AmazonCreatorItem | null {
  const matches = new Map<string, AmazonCreatorItem>()
  for (const item of items) {
    try {
      const match = matchAmazonProduct(item, expected, partnerTag, marketplace, fetchedAt)
      if (match) matches.set(match.asin, match)
    } catch { /* Malformed catalog entries are not verified products. */ }
  }
  return matches.size === 1 ? Array.from(matches.values())[0] : null
}
