import RawHtmlCommerceArticle from '@/components/article/RawHtmlCommerceArticle'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

export const dynamic = 'force-dynamic'

const pageUrl = 'https://bestpickzone.com/home-kitchen/best-air-fryers'

const article = loadRawHtmlArticle('app/home-kitchen/best-air-fryers/article-source.html', pageUrl)

export const metadata: Metadata = withSeo(article.metadata, "/home-kitchen/best-air-fryers")

export default function Page() {
  return <RawHtmlCommerceArticle article={article} path="/home-kitchen/best-air-fryers" />
}
