import RawHtmlCommerceArticle from '@/components/article/RawHtmlCommerceArticle'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'
export const dynamic = 'force-dynamic'
const path = '/wfh/purple-royal-seat-cushion-vs-cushion-lab'
const article = loadRawHtmlArticle('app/wfh/purple-royal-seat-cushion-vs-cushion-lab/article-source.html', `https://bestpickzone.com${path}`)
export const metadata: Metadata = withSeo(withArticleMetadataDefaults(article.metadata, { category: 'wfh', url: `https://bestpickzone.com${path}`, modifiedTime: '2026-10-18' }), path)
export default function Page() { return <RawHtmlCommerceArticle article={article} path={path} /> }
