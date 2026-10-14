import { authorRankingMetadata } from '@/components/article/AuthorRankingArticlePage'
import AmazonAuthorRankingArticlePage from '@/components/article/AmazonAuthorRankingArticlePage'
import article from '@/content/author-rankings/best-gillian-flynn-books.json'

export const metadata = authorRankingMetadata(article)
export const dynamic = 'force-dynamic'

// Editions resolved through Amazon Creators API on October 14, 2026; revalidated at runtime.
const editions = {
  'Gone Girl': '0307588378',
  'Sharp Objects': '0307341550',
  'Dark Places': '0307341577',
  'The Grownup': '0804188971',
}

export default function Page() {
  return <AmazonAuthorRankingArticlePage article={article} editions={editions} />
}
