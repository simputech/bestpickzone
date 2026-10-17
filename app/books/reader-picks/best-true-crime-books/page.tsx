import RawHtmlCommerceArticle from '@/components/article/RawHtmlCommerceArticle'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

export const dynamic = 'force-dynamic'

const pageUrl = 'https://bestpickzone.com/books/reader-picks/best-true-crime-books'

const article = loadRawHtmlArticle('app/books/reader-picks/best-true-crime-books/article-source.html', pageUrl)

export const metadata: Metadata = withSeo(article.metadata, "/books/reader-picks/best-true-crime-books")

export default function Page() {
  return <RawHtmlCommerceArticle article={article} path="/books/reader-picks/best-true-crime-books" />
}
