import fs from 'node:fs'
import path from 'node:path'

import type { Metadata } from 'next'

import { withArticleMetadataDefaults } from '@/lib/article-metadata'

type RawHtmlArticle = {
  metadata: Metadata
  rawCss: string
  rawHtml: string
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
    rawHtml,
  }
}
