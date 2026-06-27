import type { Metadata } from 'next'

import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/books/lord-of-the-rings-vs-harry-potter'
const publishedDate = '2026-06-14'
const updatedDate = '2026-06-26'

const article = loadRawHtmlArticle('app/books/lord-of-the-rings-vs-harry-potter/article-source.html', pageUrl)

export const metadata: Metadata = withArticleMetadataDefaults(article.metadata, {
  category: 'books',
  publishedTime: publishedDate,
  modifiedTime: updatedDate,
  section: 'Books',
  url: pageUrl,
})

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: article.rawCss }} />
      <div dangerouslySetInnerHTML={{ __html: article.rawHtml }} />
    </>
  )
}
