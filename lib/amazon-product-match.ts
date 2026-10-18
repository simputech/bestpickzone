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
  /** Reject these accessory nouns unless an explicit "with/includes" clause follows a complete device identity. */
  accessoryOnlyTitleTerms?: string[]
  /** Only honored with a curated ASIN, explicit brand and discriminating required title terms. */
  allowAccessory?: boolean
}

/** Diagnostics contain only fixed codes, never catalog strings or returned identifiers. */
export type AmazonProductMismatchReason =
  | 'invalid_candidate'
  | 'missing_title'
  | 'missing_asin'
  | 'missing_image'
  | 'invalid_image_dimensions'
  | 'asin_mismatch'
  | 'invalid_detail_url'
  | 'invalid_image_url'
  | 'title_mismatch'
  | 'required_title_term_missing'
  | 'forbidden_title_term'
  | 'brand_missing'
  | 'query_brand_unverified'
  | 'brand_mismatch'
  | 'model_missing'
  | 'model_mismatch'
  | 'model_prefix_mismatch'
  | 'unrequested_condition'
  | 'unrequested_accessory'
  | 'accessory_compatibility'
  | 'unrequested_variant'
  | 'ambiguous_candidates'
  | 'no_candidates'
  | 'malformed_candidate'

export type AmazonProductMismatchReporter = (reason: AmazonProductMismatchReason) => void

function reportMismatch(report: AmazonProductMismatchReporter | undefined, reason: AmazonProductMismatchReason) {
  // Optional observability must never change the matching result or throw during rendering.
  try { report?.(reason) } catch { /* Ignore diagnostic sink errors. */ }
  return null
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
  onMismatch?: AmazonProductMismatchReporter,
): AmazonCreatorItem | null {
  const reject = (reason: AmazonProductMismatchReason) => reportMismatch(onMismatch, reason)
  if (!item || typeof item !== 'object') return reject('invalid_candidate')
  const title = item.itemInfo?.title?.displayValue
  const asin = item.asin
  const image = item.images?.primary?.large ?? item.images?.primary?.medium
  if (typeof title !== 'string' || !title) return reject('missing_title')
  if (typeof asin !== 'string') return reject('missing_asin')
  if (typeof image?.url !== 'string') return reject('missing_image')
  if (!Number.isFinite(image.width) || !Number.isFinite(image.height) ||
    !image.width || image.width < 1 || !image.height || image.height < 1) return reject('invalid_image_dimensions')
  if (expected.asin && asin !== expected.asin) return reject('asin_mismatch')
  if (!isAmazonProductUrl(item.detailPageURL, asin, partnerTag, marketplace)) return reject('invalid_detail_url')
  if (!isAmazonImageUrl(image.url)) return reject('invalid_image_url')

  const expectedTitle = expected.expectedTitle?.trim() || expected.query.trim()
  const pinnedIdentity = Boolean(expected.asin && expected.brand && expected.requiredTitleTerms?.length)
  if (!expectedTitle || (!pinnedIdentity && !containsWords(title, expectedTitle))) return reject('title_mismatch')
  if (expected.requiredTitleTerms?.some(term => !containsPhrase(title, term))) return reject('required_title_term_missing')
  if (expected.forbiddenTitleTerms?.some(term => containsPhrase(title, term))) return reject('forbidden_title_term')

  const brand = item.itemInfo?.byLineInfo?.brand?.displayValue
  // For discovery, an actual brand field must agree with the requested identity.
  // A category-only query ("wireless keyboard") must remain an honest search link.
  if (!expected.asin && (typeof brand !== 'string' || !brand)) return reject('brand_missing')
  if (!expected.asin && !expected.brand && !containsPhrase(expectedTitle, brand!)) return reject('query_brand_unverified')
  if (expected.brand && (typeof brand !== 'string' || !brand)) return reject('brand_missing')
  if (expected.brand && normalizeAmazonText(brand!) !== normalizeAmazonText(expected.brand)) return reject('brand_mismatch')
  if (expected.model || expected.modelPrefix) {
    const model = item.itemInfo?.manufactureInfo
    const identifiers = [model?.model?.displayValue, model?.itemPartNumber?.displayValue].filter((value): value is string => typeof value === 'string' && Boolean(value))
    if (!identifiers.length) return reject('model_missing')
    if (expected.model) {
      const expectedModel = normalizeAmazonText(expected.model)
      if (!identifiers.some(value => normalizeAmazonText(value) === expectedModel)) return reject('model_mismatch')
    }
    if (expected.modelPrefix) {
      const prefix = normalizeAmazonText(expected.modelPrefix)
      if (!prefix || !identifiers.some(value => {
        const identifier = normalizeAmazonText(value)
        return identifier === prefix || identifier.startsWith(`${prefix} `)
      })) return reject('model_prefix_mismatch')
    }
  }

  const normalizedTitle = normalizeAmazonText(title)
  const normalizedExpected = normalizeAmazonText(expectedTitle)
  const accessoryTerms = expected.accessoryOnlyTitleTerms ?? []
  if (accessoryTerms.some(term => containsPhrase(normalizedTitle, term))) {
    const inclusion = /\b(?:with|includes|including)\b/.exec(normalizedTitle)
    const deviceTitle = inclusion ? normalizedTitle.slice(0, inclusion.index) : ''
    // A case "with a strap" is still a case. The clause before inclusion must
    // independently identify the complete device and contain no accessory noun.
    if (!inclusion || !containsWords(deviceTitle, expectedTitle) ||
      expected.requiredTitleTerms?.some(term => !containsPhrase(deviceTitle, term)) ||
      accessoryTerms.some(term => containsPhrase(deviceTitle, term)) ||
      /\b(only|without|not included|sold separately)\b/.test(normalizedTitle)) return reject('unrequested_accessory')
  }
  // Avoid a compatible accessory, used listing, bundle or adjacent model variant.
  for (const condition of normalizedTitle.match(UNREQUESTED_CONDITIONS) ?? []) {
    if (!containsPhrase(normalizedExpected, condition)) return reject('unrequested_condition')
  }
  if (!(expected.allowAccessory && pinnedIdentity)) {
    for (const word of normalizedTitle.match(ACCESSORY_WORDS) ?? []) {
      if (!containsPhrase(normalizedExpected, word)) return reject('unrequested_accessory')
    }
    if (/\b(compatible with|for use with|fits)\b/.test(normalizedTitle)) return reject('accessory_compatibility')
  }
  if (!expected.asin && VARIANT_WORDS.some(word => containsPhrase(normalizedTitle, word) && !containsPhrase(normalizedExpected, word))) return reject('unrequested_variant')
  if (!expected.asin && /\bfor\b/.test(normalizedTitle) && brand && !containsPhrase(title.split(/\bfor\b/i)[0], brand)) return reject('accessory_compatibility')

  return { asin, title, detailPageURL: item.detailPageURL!, imageUrl: image.url, imageWidth: image.width, imageHeight: image.height, fetchedAt }
}

/** Multiple color/edition/model results are not permission to choose an arbitrary first result. */
export function selectAmazonProduct(
  items: AmazonProductResponseItem[],
  expected: AmazonProductRequest,
  partnerTag: string,
  marketplace: string,
  fetchedAt: string,
  onMismatch?: AmazonProductMismatchReporter,
): AmazonCreatorItem | null {
  if (!items.length) return reportMismatch(onMismatch, 'no_candidates')
  const matches = new Map<string, AmazonCreatorItem>()
  for (const item of items) {
    try {
      const match = matchAmazonProduct(item, expected, partnerTag, marketplace, fetchedAt, onMismatch)
      if (match) matches.set(match.asin, match)
    } catch { reportMismatch(onMismatch, 'malformed_candidate') }
  }
  if (matches.size > 1) return reportMismatch(onMismatch, 'ambiguous_candidates')
  return matches.size === 1 ? Array.from(matches.values())[0] : null
}
