import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/books/stephen-king-vs-dean-koontz'
const publishedDate = '2026-06-14'
const updatedDate = '2026-06-26'

const article = loadRawHtmlArticle('app/books/stephen-king-vs-dean-koontz/article-source.html', pageUrl)

export const metadata: Metadata = withSeo(withArticleMetadataDefaults(article.metadata, {
  category: 'books',
  publishedTime: publishedDate,
  modifiedTime: updatedDate,
  section: 'Books',
  url: pageUrl,
}), "/books/stephen-king-vs-dean-koontz")

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: article.rawCss }} />
      <div dangerouslySetInnerHTML={{ __html: article.rawHtml }} />
    </>
  )
}
