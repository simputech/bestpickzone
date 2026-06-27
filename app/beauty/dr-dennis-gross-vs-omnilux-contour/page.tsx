import type { Metadata } from 'next'

import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/beauty/dr-dennis-gross-vs-omnilux-contour'
const publishedDate = '2026-06-15'
const updatedDate = '2026-06-26'

const article = loadRawHtmlArticle(
  'app/beauty/dr-dennis-gross-vs-omnilux-contour/article-source.html',
  pageUrl
)

export const metadata: Metadata = withArticleMetadataDefaults(article.metadata, {
  category: 'beauty',
  publishedTime: publishedDate,
  modifiedTime: updatedDate,
  section: 'Beauty',
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
