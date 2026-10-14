import { authorRankingMetadata } from '@/components/article/AuthorRankingArticlePage'
import AmazonAuthorRankingArticlePage from '@/components/article/AmazonAuthorRankingArticlePage'
import article from '@/content/author-rankings/best-freida-mcfadden-books.json'

export const metadata = authorRankingMetadata(article)
export const dynamic = 'force-dynamic'

// Editions resolved through Amazon Creators API on October 14, 2026; revalidated at runtime.
const editions = {
  'The Housemaid': '1538742578',
  'Never Lie': '1728296161',
  'The Locked Door': '1728296188',
  'The Boyfriend': '1728296226',
  'The Tenant': '1464227314',
  'The Inmate': '172829617X',
}

export default function Page() {
  return <AmazonAuthorRankingArticlePage article={article} editions={editions} />
}
