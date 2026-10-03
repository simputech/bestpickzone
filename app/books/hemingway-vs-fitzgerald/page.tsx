import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/books/hemingway-vs-fitzgerald'

const article = loadRawHtmlArticle('app/books/hemingway-vs-fitzgerald/article-source.html', pageUrl)

export const metadata: Metadata = withSeo(article.metadata, "/books/hemingway-vs-fitzgerald")

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: article.rawCss }} />
      <div dangerouslySetInnerHTML={{ __html: article.rawHtml }} />
    </>
  )
}
