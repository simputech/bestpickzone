import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import RawHtmlCommerceArticle from '@/components/article/RawHtmlCommerceArticle'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

export const dynamic = 'force-dynamic'

const pageUrl = 'https://bestpickzone.com/books/genre-fiction/best-historical-fiction-books'

const article = loadRawHtmlArticle('app/books/genre-fiction/best-historical-fiction-books/article-source.html', pageUrl)

export const metadata: Metadata = withSeo(withArticleMetadataDefaults(article.metadata, { modifiedTime: '2026-10-18', url: pageUrl }), "/books/genre-fiction/best-historical-fiction-books")

export default function Page() {
  return <RawHtmlCommerceArticle article={article} path="/books/genre-fiction/best-historical-fiction-books" />
}
