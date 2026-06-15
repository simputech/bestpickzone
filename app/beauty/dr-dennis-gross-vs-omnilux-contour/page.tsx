import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/beauty/dr-dennis-gross-vs-omnilux-contour'

const article = loadRawHtmlArticle(
  'app/beauty/dr-dennis-gross-vs-omnilux-contour/article-source.html',
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
