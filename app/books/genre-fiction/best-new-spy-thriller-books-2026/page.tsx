import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'
const pageUrl = 'https://bestpickzone.com/books/genre-fiction/best-new-spy-thriller-books-2026'
const article = loadRawHtmlArticle('app/books/genre-fiction/best-new-spy-thriller-books-2026/article-source.html', pageUrl)
export const metadata: Metadata = withSeo({
  ...article.metadata,
  openGraph: { ...article.metadata.openGraph, type: 'article', modifiedTime: '2026-09-30T12:00:00-04:00' },
}, "/books/genre-fiction/best-new-spy-thriller-books-2026")
export default function Page() {
  return <><style dangerouslySetInnerHTML={{ __html: article.rawCss }} /><div dangerouslySetInnerHTML={{ __html: article.rawHtml }} /></>
}
