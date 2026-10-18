import RawHtmlCommerceArticle from '@/components/article/RawHtmlCommerceArticle'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'
export const dynamic = 'force-dynamic'
const path = '/beauty/nuface-trinity-plus-vs-foreo-bear-2-vs-myolift-qt'
const article = loadRawHtmlArticle('app/beauty/nuface-trinity-plus-vs-foreo-bear-2-vs-myolift-qt/article-source.html', `https://bestpickzone.com${path}`)
export const metadata: Metadata = withSeo(withArticleMetadataDefaults(article.metadata, { category: 'beauty', url: `https://bestpickzone.com${path}`, publishedTime: '2026-07-11', modifiedTime: '2026-10-18' }), path)
export default function Page() { return <RawHtmlCommerceArticle article={article} path={path} /> }
