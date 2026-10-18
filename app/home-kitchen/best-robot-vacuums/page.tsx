import RawHtmlCommerceArticle from '@/components/article/RawHtmlCommerceArticle'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'
export const dynamic = 'force-dynamic'
const path = '/home-kitchen/best-robot-vacuums'
const article = loadRawHtmlArticle('app/home-kitchen/best-robot-vacuums/article-source.html', `https://bestpickzone.com${path}`)
export const metadata: Metadata = withSeo(article.metadata, path)
export default function Page() { return <RawHtmlCommerceArticle article={article} path={path} /> }
