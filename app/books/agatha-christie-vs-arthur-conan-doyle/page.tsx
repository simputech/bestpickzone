import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/books/agatha-christie-vs-arthur-conan-doyle'

const article = loadRawHtmlArticle(
  'app/books/agatha-christie-vs-arthur-conan-doyle/article-source.html',
  pageUrl
)

export const metadata: Metadata = article.metadata

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: article.rawCss }} />
      <div dangerouslySetInnerHTML={{ __html: article.rawHtml }} />
    </>
  )
}
