import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'
import ArticleAmazonProducts from '@/components/article/ArticleAmazonProducts'

export const dynamic = 'force-dynamic'

const pageUrl = 'https://bestpickzone.com/beauty/dr-dennis-gross-vs-omnilux-contour'
const publishedDate = '2026-06-15'
const updatedDate = '2026-10-16'

const article = loadRawHtmlArticle(
  'app/beauty/dr-dennis-gross-vs-omnilux-contour/article-source.html',
  pageUrl
)

export const metadata: Metadata = withSeo(withArticleMetadataDefaults(article.metadata, {
  category: 'beauty',
  publishedTime: publishedDate,
  modifiedTime: updatedDate,
  section: 'Beauty',
  url: pageUrl,
}), "/beauty/dr-dennis-gross-vs-omnilux-contour")

export default function Page() {
  // Insert commerce after the complete editorial article but before its local footer.
  const footerStart = article.rawHtml.indexOf('<footer')
  const beforeFooter = footerStart < 0 ? article.rawHtml : article.rawHtml.slice(0, footerStart)
  const footer = footerStart < 0 ? '' : article.rawHtml.slice(footerStart)
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: article.rawCss }} />
      <div dangerouslySetInnerHTML={{ __html: beforeFooter }} />
      <div className="mx-auto max-w-5xl px-4 pb-10">
        <ArticleAmazonProducts path="/beauty/dr-dennis-gross-vs-omnilux-contour" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: footer }} />
    </>
  )
}
