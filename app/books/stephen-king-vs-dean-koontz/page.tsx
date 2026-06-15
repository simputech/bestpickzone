import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/books/stephen-king-vs-dean-koontz'

const article = loadRawHtmlArticle('app/books/stephen-king-vs-dean-koontz/article-source.html', pageUrl)

export const metadata: Metadata = article.metadata

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: article.rawCss }} />
      <div dangerouslySetInnerHTML={{ __html: article.rawHtml }} />
    </>
  )
}
