import type { Metadata } from 'next'

export const ARTICLE_REFRESH_DATE = '2026-07-01'

const CATEGORY_OG_IMAGE: Record<string, string> = {
  books: 'https://bestpickzone.com/og-books.png',
  'genre-fiction': 'https://bestpickzone.com/og-books.png',
  authors: 'https://bestpickzone.com/og-books.png',
  'reader-picks': 'https://bestpickzone.com/og-books.png',
  'self-help': 'https://bestpickzone.com/og-books.png',
  'kids-and-ya': 'https://bestpickzone.com/og-books.png',
  'home-kitchen': 'https://bestpickzone.com/og-home-kitchen.png',
  'health-fitness': 'https://bestpickzone.com/og-health-fitness.png',
  'finance-software': 'https://bestpickzone.com/og-finance-software.png',
  beauty: 'https://bestpickzone.com/og-beauty.png',
  coffee: 'https://bestpickzone.com/og-coffee.png',
  wfh: 'https://bestpickzone.com/og-wfh.png',
}

const DEFAULT_OG_IMAGE = 'https://bestpickzone.com/og-default.png'

type ArticleMetadataOptions = {
  authorName?: string
  category?: string
  keywords?: string[]
  modifiedTime?: string
  metadataType?: 'article' | 'website'
  publishedTime?: string
  section?: string
  tags?: string[]
  url?: string
}

function normalizePhrase(value: string) {
  return value
    .toLowerCase()
    .replace(/['".,:;!?()]/g, '')
    .replace(/&/g, ' and ')
    .replace(/\s+/g, ' ')
    .trim()
}

function titleToString(title: Metadata['title']) {
  if (typeof title === 'string') {
    return title
  }

  if (title && typeof title === 'object' && 'absolute' in title && typeof title.absolute === 'string') {
    return title.absolute
  }

  return ''
}

function descriptionToString(description: Metadata['description']) {
  return typeof description === 'string' ? description : ''
}

function canonicalToString(metadata: Metadata, fallbackUrl?: string) {
  const canonical = metadata.alternates?.canonical

  if (typeof canonical === 'string') {
    return canonical
  }

  if (canonical instanceof URL) {
    return canonical.toString()
  }

  return fallbackUrl
}

function buildDefaultKeywords(title: string, category?: string, extraKeywords: string[] = []) {
  const yearlessTitle = normalizePhrase(title.replace(/\b20\d{2}\b/g, '').replace(/\s+/g, ' '))
  const normalizedTitle = normalizePhrase(title)
  const keywords = new Set<string>()

  if (normalizedTitle) {
    keywords.add(normalizedTitle)
  }

  if (yearlessTitle && yearlessTitle !== normalizedTitle) {
    keywords.add(yearlessTitle)
  }

  if (normalizedTitle.includes('self-help')) {
    keywords.add(normalizedTitle.replace(/self-help/g, 'self help'))
  }

  if (normalizedTitle.includes('self help')) {
    keywords.add(normalizedTitle.replace(/self help/g, 'self-help'))
  }

  if (category === 'books') {
    keywords.add('best books')
    keywords.add('book recommendations')
    keywords.add('books to read')
  }

  if (category === 'authors') {
    keywords.add('author reading guide')
    keywords.add('best author books')
  }

  if (category === 'genre-fiction') {
    keywords.add('genre fiction books')
    keywords.add('fiction book recommendations')
  }

  if (category === 'self-help') {
    keywords.add('self-help books')
    keywords.add('self help books')
    keywords.add('personal development books')
  }

  if (category === 'kids-and-ya') {
    keywords.add('kids books')
    keywords.add('young adult books')
  }

  if (category === 'reader-picks') {
    keywords.add('popular books')
    keywords.add('reader picks books')
  }

  if (category === 'beauty') {
    keywords.add('beauty product comparison')
    keywords.add('skincare comparison')
  }

  if (category === 'coffee') {
    keywords.add('coffee gear comparison')
    keywords.add('coffee buying guide')
  }

  if (category === 'wfh') {
    keywords.add('work from home gear')
    keywords.add('office setup comparison')
  }

  if (category === 'home-kitchen') {
    keywords.add('home kitchen buying guide')
    keywords.add('kitchen product comparison')
  }

  for (const keyword of extraKeywords) {
    const normalizedKeyword = normalizePhrase(keyword)
    if (normalizedKeyword) {
      keywords.add(normalizedKeyword)
    }
  }

  return Array.from(keywords)
}

export function withArticleMetadataDefaults(
  metadata: Metadata,
  options: ArticleMetadataOptions = {}
): Metadata {
  const title = titleToString(metadata.title)
  const description = descriptionToString(metadata.description)
  const url = canonicalToString(metadata, options.url)
  const keywords = metadata.keywords ?? buildDefaultKeywords(title, options.category, options.keywords)
  const authorName = options.authorName ?? 'BestPickZone Editorial Team'
  const modifiedTime = options.modifiedTime ?? ARTICLE_REFRESH_DATE
  const existingOpenGraphType =
    metadata.openGraph && 'type' in metadata.openGraph ? metadata.openGraph.type : undefined
  const metadataType = options.metadataType ?? existingOpenGraphType ?? 'article'
  const openGraphTitle =
    typeof metadata.openGraph?.title === 'string' ? metadata.openGraph.title : title
  const openGraphDescription =
    typeof metadata.openGraph?.description === 'string'
      ? metadata.openGraph.description
      : description
  const ogImage = (options.category && CATEGORY_OG_IMAGE[options.category]) ?? DEFAULT_OG_IMAGE

  return {
    ...metadata,
    authors: metadata.authors ?? [{ name: authorName }],
    creator: metadata.creator ?? authorName,
    publisher: metadata.publisher ?? 'BestPickZone',
    category: metadata.category ?? options.category,
    keywords,
    robots: metadata.robots ?? {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      ...metadata.openGraph,
      siteName: 'BestPickZone',
      type: metadataType,
      url,
      title: openGraphTitle,
      description: openGraphDescription,
      images: metadata.openGraph?.images ?? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: openGraphTitle,
        },
      ],
      publishedTime: metadataType === 'article' ? options.publishedTime : undefined,
      modifiedTime: metadataType === 'article' ? modifiedTime : undefined,
      section: metadataType === 'article' ? (options.section ?? options.category) : undefined,
      tags:
        metadataType === 'article'
          ? options.tags ?? (Array.isArray(keywords) ? keywords.slice(0, 8) : undefined)
          : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphTitle,
      description: openGraphDescription,
      images: metadata.twitter?.images ?? [ogImage],
      ...metadata.twitter,
    },
  }
}
