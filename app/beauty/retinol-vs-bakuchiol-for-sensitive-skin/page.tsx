import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/beauty/retinol-vs-bakuchiol-for-sensitive-skin'

const article = loadRawHtmlArticle(
  'app/beauty/retinol-vs-bakuchiol-for-sensitive-skin/article-source.html',
  pageUrl
)

export const metadata: Metadata = withSeo(withArticleMetadataDefaults(article.metadata, { modifiedTime: '2026-10-18', url: pageUrl }), "/beauty/retinol-vs-bakuchiol-for-sensitive-skin")

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: article.rawCss }} />
      <div dangerouslySetInnerHTML={{ __html: article.rawHtml }} />
    </>
  )
}
