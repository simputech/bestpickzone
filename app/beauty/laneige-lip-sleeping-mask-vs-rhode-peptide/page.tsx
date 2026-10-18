import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import RawHtmlCommerceArticle from '@/components/article/RawHtmlCommerceArticle'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

export const dynamic = 'force-dynamic'

const pageUrl = 'https://bestpickzone.com/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide'

const article = loadRawHtmlArticle(
  'app/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide/article-source.html',
  pageUrl
)

export const metadata: Metadata = withSeo(withArticleMetadataDefaults(article.metadata, { modifiedTime: '2026-10-18', url: pageUrl }), "/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide")

export default function Page() {
  return <RawHtmlCommerceArticle article={article} path="/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide" />
}
