export type AmazonBookRequest = { asin: string; title: string; author: string }

export type AmazonBookItem = {
  asin: string
  title: string
  author: string
  binding: string
  language: string
  detailPageURL: string
  imageUrl: string
  imageWidth: number
  imageHeight: number
  fetchedAt: string
}

type DisplayValue = { displayValue?: string }
export type AmazonBookResponseItem = {
  asin?: string
  detailPageURL?: string
  images?: { primary?: { large?: { url?: string; width?: number; height?: number } } }
  itemInfo?: {
    title?: DisplayValue
    byLineInfo?: { contributors?: { name?: string; roleType?: string; role?: string }[] }
    classifications?: { binding?: DisplayValue; productGroup?: DisplayValue }
    contentInfo?: { languages?: { displayValues?: { displayValue?: string; type?: string }[] } }
  }
}

function normalized(value: string) {
  return value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

function nameKey(value: string) {
  return normalized(value).split(' ').sort().join(' ')
}

// Match the requested work, not a sequel, bundle, study guide or translated edition.
export function matchAmazonBook(item: AmazonBookResponseItem, expected: AmazonBookRequest, partnerTag: string, fetchedAt: string): AmazonBookItem | null {
  const info = item.itemInfo
  const title = info?.title?.displayValue
  const binding = info?.classifications?.binding?.displayValue
  const image = item.images?.primary?.large
  const author = info?.byLineInfo?.contributors?.find(person =>
    (person.roleType?.toLowerCase() === 'author' || person.role?.toLowerCase() === 'author') &&
    person.name && nameKey(person.name) === nameKey(expected.author)
  )?.name
  const language = info?.contentInfo?.languages?.displayValues?.find(value => value.type === 'Published')?.displayValue

  if (item.asin !== expected.asin || !/^[A-Z0-9]{10}$/.test(expected.asin) || !title || !author || !binding || !image?.url) return null
  if (normalized(title.split(/[:(]/)[0]) !== normalized(expected.title)) return null
  // Inspect the entire normalized title before discarding subtitle/edition text.
  // Hyphens, Unicode punctuation and parentheses must not hide an adaptation.
  const editionTitle = normalized(title)
  // A novel's stage/screen script may credit the original novelist as author.
  // Inspect edition qualifiers without rejecting a requested work whose own title contains 'play'.
  const editionSuffix = editionTitle.slice(normalized(expected.title).length).trim()
  if (/\b(plays?|screenplays?|acting edition|stage edition|performance edition|stage script|theatre script|theater script|dramatizations?|dramatisations?|dramatized|dramatised)\b/.test(editionSuffix)) return null
  if (/\b(bundle|boxed set|box set|collection set|study guide|summary|workbook|abridged|condensed|simplified|adapted|adaptation|retold|retelling|graphic novel|graphic edition|comic|comics|manga|young readers?|younger readers?|young adult edition|junior edition|easy reader)\b/.test(editionTitle)) return null
  if (info?.classifications?.productGroup?.displayValue !== 'Book' || !['Paperback', 'Hardcover'].includes(binding) || language !== 'English') return null
  if (!image.width || !image.height || image.width < 1 || image.height < 1) return null

  try {
    const productUrl = new URL(item.detailPageURL || '')
    const imageUrl = new URL(image.url)
    if (productUrl.protocol !== 'https:' || productUrl.hostname !== 'www.amazon.com' || productUrl.username || productUrl.password) return null
    if (productUrl.pathname !== `/dp/${expected.asin}` || productUrl.searchParams.get('tag') !== partnerTag) return null
    if (imageUrl.protocol !== 'https:' || imageUrl.hostname !== 'm.media-amazon.com' || !imageUrl.pathname.startsWith('/images/')) return null
  } catch { return null }

  // Keep Amazon's vended link and image URL exactly as returned.
  return { asin: expected.asin, title, author, binding, language, detailPageURL: item.detailPageURL!, imageUrl: image.url, imageWidth: image.width, imageHeight: image.height, fetchedAt }
}
