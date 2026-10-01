import type { Metadata } from 'next'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'
const pageUrl = 'https://bestpickzone.com/books/best-mark-manson-books'
const article = loadRawHtmlArticle('app/books/best-mark-manson-books/article-source.html', pageUrl)
export const metadata: Metadata = {
  ...article.metadata,
  title: { absolute: "Mark Manson Books: What to Read First | BestPickZone" },
  openGraph: { ...article.metadata.openGraph, type: 'article', modifiedTime: '2026-09-30T12:00:00-04:00' },
}
export default function Page() {
  return <><style dangerouslySetInnerHTML={{ __html: article.rawCss }} /><div dangerouslySetInnerHTML={{ __html: article.rawHtml }} /></>
}
