import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/home-kitchen/instant-pot-vs-ninja-foodi'

const article = loadRawHtmlArticle(
  'app/home-kitchen/instant-pot-vs-ninja-foodi/article-source.html',
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
