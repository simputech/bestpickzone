import fs from 'node:fs'
import path from 'node:path'
import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'

import { buyingGuides, guideDate } from './buying-guide-data'
export { buyingGuides, guideDate } from './buying-guide-data'
export function getBuyingGuide(slug: string) {
  const guide = buyingGuides.find(g => g.slug === slug)
  if (!guide) throw new Error(`Unknown buying guide: ${slug}`)
  return { ...guide, bodyHtml: fs.readFileSync(path.join(process.cwd(), 'content/buying-guides', `${slug}.html`), 'utf8') }
}
export function buyingGuideMetadata(slug: string): Metadata {
  const g = getBuyingGuide(slug)
  const url = `https://bestpickzone.com/${g.silo}/${g.slug}`
  return withArticleMetadataDefaults({ title: g.title, description: g.description, alternates: { canonical: url }, robots: { index: true, follow: true }, openGraph: { title: g.title, description: g.description, type: 'article', url } }, { category: g.silo, url, publishedTime: `${guideDate}T00:00:00Z`, modifiedTime: `${guideDate}T00:00:00Z` })
}
