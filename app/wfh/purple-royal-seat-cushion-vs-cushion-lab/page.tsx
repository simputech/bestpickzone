import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/wfh/purple-royal-seat-cushion-vs-cushion-lab'

const article = loadRawHtmlArticle('app/wfh/purple-royal-seat-cushion-vs-cushion-lab/article-source.html', pageUrl)

export const metadata: Metadata = withSeo(article.metadata, "/wfh/purple-royal-seat-cushion-vs-cushion-lab")

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: article.rawCss }} />
      <div dangerouslySetInnerHTML={{ __html: article.rawHtml }} />
    </>
  )
}
