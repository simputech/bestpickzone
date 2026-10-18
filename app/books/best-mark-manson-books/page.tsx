import RawHtmlCommerceArticle from '@/components/article/RawHtmlCommerceArticle'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'
import { loadRawHtmlArticle } from '@/lib/raw-html-article'
export const dynamic = 'force-dynamic'

const pageUrl = 'https://bestpickzone.com/books/best-mark-manson-books'
const article = loadRawHtmlArticle('app/books/best-mark-manson-books/article-source.html', pageUrl)
export const metadata: Metadata = withSeo({
  ...article.metadata,
  title: { absolute: "Mark Manson Books: What to Read First | BestPickZone" },
  openGraph: { ...article.metadata.openGraph, type: 'article', modifiedTime: '2026-09-30T12:00:00-04:00' },
}, "/books/best-mark-manson-books")
export default function Page() {
  return <RawHtmlCommerceArticle article={article} path="/books/best-mark-manson-books" />
}
