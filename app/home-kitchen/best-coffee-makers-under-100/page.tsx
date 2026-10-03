import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'

import { loadRawHtmlArticle } from '@/lib/raw-html-article'

const pageUrl = 'https://bestpickzone.com/home-kitchen/best-coffee-makers-under-100'

const article = loadRawHtmlArticle(
  'app/home-kitchen/best-coffee-makers-under-100/article-source.html',
  pageUrl
)

export const metadata: Metadata = withSeo(article.metadata, "/home-kitchen/best-coffee-makers-under-100")

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: article.rawCss }} />
      <div dangerouslySetInnerHTML={{ __html: article.rawHtml }} />
    </>
  )
}
