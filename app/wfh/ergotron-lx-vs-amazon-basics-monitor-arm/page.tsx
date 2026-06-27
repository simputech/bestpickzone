import type { Metadata } from 'next'

import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/wfh/ergotron-lx-vs-amazon-basics-monitor-arm'
const publishedDate = '2026-06-18'
const updatedDate = '2026-06-26'

const article = loadRawHtmlArticle('app/wfh/ergotron-lx-vs-amazon-basics-monitor-arm/article-source.html', pageUrl)

export const metadata: Metadata = withArticleMetadataDefaults(article.metadata, {
  category: 'wfh',
  publishedTime: publishedDate,
  modifiedTime: updatedDate,
  section: 'Work From Home',
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
