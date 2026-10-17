import RawHtmlCommerceArticle from '@/components/article/RawHtmlCommerceArticle'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'

export const dynamic = 'force-dynamic'

const pageUrl = 'https://bestpickzone.com/books/agatha-christie-vs-arthur-conan-doyle'
const publishedDate = '2026-06-14'
const updatedDate = '2026-06-26'

const article = loadRawHtmlArticle(
  'app/books/agatha-christie-vs-arthur-conan-doyle/article-source.html',
  pageUrl
)

export const metadata: Metadata = withSeo(withArticleMetadataDefaults(article.metadata, {
  category: 'books',
  publishedTime: publishedDate,
  modifiedTime: updatedDate,
  section: 'Books',
  url: pageUrl,
}), "/books/agatha-christie-vs-arthur-conan-doyle")

export default function Page() {
  return <RawHtmlCommerceArticle article={article} path="/books/agatha-christie-vs-arthur-conan-doyle" />
}
