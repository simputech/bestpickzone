import { authorRankingMetadata } from '@/components/article/AuthorRankingArticlePage'
import AmazonAuthorRankingArticlePage from '@/components/article/AmazonAuthorRankingArticlePage'
import article from '@/content/author-rankings/best-shari-lapena-books.json'

export const dynamic = 'force-dynamic'

export const metadata = authorRankingMetadata(article)

export default function Page() {
  return <AmazonAuthorRankingArticlePage article={article} />
}
