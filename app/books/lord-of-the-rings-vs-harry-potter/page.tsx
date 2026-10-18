import RawHtmlCommerceArticle from '@/components/article/RawHtmlCommerceArticle'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'

export const dynamic = 'force-dynamic'

const pageUrl = 'https://bestpickzone.com/books/lord-of-the-rings-vs-harry-potter'
const publishedDate = '2026-06-14'
const updatedDate = '2026-10-18'

const article = loadRawHtmlArticle('app/books/lord-of-the-rings-vs-harry-potter/article-source.html', pageUrl)

export const metadata: Metadata = withSeo(withArticleMetadataDefaults(article.metadata, {
  category: 'books',
  publishedTime: publishedDate,
  modifiedTime: updatedDate,
  section: 'Books',
  url: pageUrl,
}), "/books/lord-of-the-rings-vs-harry-potter")

export default function Page() {
  return <RawHtmlCommerceArticle article={article} path="/books/lord-of-the-rings-vs-harry-potter" />
}
