import RawHtmlCommerceArticle from '@/components/article/RawHtmlCommerceArticle'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'
export const dynamic = 'force-dynamic'
const path = '/home-kitchen/oxo-vs-fullstar-avocado-slicer'
const article = loadRawHtmlArticle('app/home-kitchen/oxo-vs-fullstar-avocado-slicer/article-source.html', `https://bestpickzone.com${path}`)
export const metadata: Metadata = withSeo(withArticleMetadataDefaults(article.metadata, { category: 'home-kitchen', url: `https://bestpickzone.com${path}`, publishedTime: '2026-06-14', modifiedTime: '2026-10-18' }), path)
export default function Page() { return <RawHtmlCommerceArticle article={article} path={path} /> }
