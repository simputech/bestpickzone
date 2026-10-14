import AuthorRankingArticlePage, { authorRankingMetadata } from '@/components/article/AuthorRankingArticlePage'
import article from '@/content/author-rankings/best-shari-lapena-books.json'

export const metadata = authorRankingMetadata(article)

export default function Page() {
  return <AuthorRankingArticlePage article={article} />
}
