import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide'

const article = loadRawHtmlArticle(
  'app/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide/article-source.html',
  pageUrl
)

export const metadata: Metadata = withSeo(article.metadata, "/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide")

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: article.rawCss }} />
      <div dangerouslySetInnerHTML={{ __html: article.rawHtml }} />
    </>
  )
}
