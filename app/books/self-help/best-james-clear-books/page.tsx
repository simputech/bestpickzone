import RawHtmlCommerceArticle from '@/components/article/RawHtmlCommerceArticle'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

export const dynamic = 'force-dynamic'

const pageUrl = 'https://bestpickzone.com/books/self-help/best-james-clear-books'

const article = loadRawHtmlArticle('app/books/self-help/best-james-clear-books/article-source.html', pageUrl)

export const metadata: Metadata = withSeo(article.metadata, "/books/self-help/best-james-clear-books")

export default function Page() {
  return <RawHtmlCommerceArticle article={article} path="/books/self-help/best-james-clear-books" />
}
