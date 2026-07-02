import fs from 'node:fs'
import path from 'node:path'

import type { Metadata } from 'next'

import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { buildBreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd'

type RawHtmlArticle = {
  metadata: Metadata
  rawCss: string
  rawHtml: string
}

const SEGMENT_LABELS: Record<string, string> = {
  books: 'Books',
  authors: 'By Author',
  'genre-fiction': 'Genre Fiction',
  'self-help': 'Self-Help',
  'kids-and-ya': 'Kids & YA',
  'reader-picks': 'Reader Picks',
  beauty: 'Beauty',
  coffee: 'Coffee',
  wfh: 'WFH',
  'home-kitchen': 'Home & Kitchen',
  tech: 'Tech',
  'finance-software': 'Finance Software',
  'health-fitness': 'Health & Fitness',
}

function buildBreadcrumbScript(pageUrl: string, title: string) {
  const segments = new URL(pageUrl).pathname.split('/').filter(Boolean)
  const trail = [{ name: 'Home', path: '/' }]
  let currentPath = ''

  for (const segment of segments.slice(0, -1)) {
    currentPath += `/${segment}`
    trail.push({ name: SEGMENT_LABELS[segment] ?? segment, path: currentPath })
  }

  trail.push({ name: title } as { name: string; path: string })

  return `<script type="application/ld+json">${JSON.stringify(buildBreadcrumbJsonLd(trail))}</script>`
}

function extractOrThrow(source: string, pattern: RegExp, label: string) {
  const match = source.match(pattern)

  if (!match?.[1]) {
    throw new Error(`Missing ${label} in raw HTML article source`)
  }

  return match[1].trim()
}

export function loadRawHtmlArticle(relativeSourcePath: string, pageUrl: string): RawHtmlArticle {
  const sourcePath = path.join(process.cwd(), relativeSourcePath)
  const source = fs.readFileSync(sourcePath, 'utf8')
  const title = extractOrThrow(source, /<title>([\s\S]*?)<\/title>/i, 'title')
  const description = extractOrThrow(
    source,
    /<meta name="description" content="([\s\S]*?)"\s*\/?>/i,
    'meta description'
  )
  const rawCss = extractOrThrow(source, /<style>([\s\S]*?)<\/style>/i, 'style block')
  const rawHtml = extractOrThrow(source, /<body[^>]*>([\s\S]*?)<\/body>/i, 'body block')
  const category =
    relativeSourcePath.startsWith('app/books/')
      ? 'books'
      : relativeSourcePath.startsWith('app/beauty/')
        ? 'beauty'
        : relativeSourcePath.startsWith('app/coffee/')
          ? 'coffee'
          : relativeSourcePath.startsWith('app/wfh/')
            ? 'wfh'
            : relativeSourcePath.startsWith('app/home-kitchen/')
              ? 'home-kitchen'
              : undefined

  return {
    metadata: withArticleMetadataDefaults({
      title,
      description,
      alternates: {
        canonical: pageUrl,
      },
      openGraph: {
        title,
        description,
        url: pageUrl,
        type: 'article',
      },
    }, { url: pageUrl, category, section: category }),
    rawCss,
    rawHtml: rawHtml + buildBreadcrumbScript(pageUrl, title.replace(/\s*[|—-]\s*BestPickZone\s*$/i, '')),
  }
}
