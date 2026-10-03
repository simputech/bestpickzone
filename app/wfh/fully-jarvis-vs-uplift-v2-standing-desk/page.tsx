import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/wfh/fully-jarvis-vs-uplift-v2-standing-desk'

const article = loadRawHtmlArticle('app/wfh/fully-jarvis-vs-uplift-v2-standing-desk/article-source.html', pageUrl)

export const metadata: Metadata = withSeo(article.metadata, "/wfh/fully-jarvis-vs-uplift-v2-standing-desk")

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: article.rawCss }} />
      <div dangerouslySetInnerHTML={{ __html: article.rawHtml }} />
    </>
  )
}
