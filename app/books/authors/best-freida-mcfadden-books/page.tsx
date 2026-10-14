import AuthorRankingArticlePage, { authorRankingMetadata } from '@/components/article/AuthorRankingArticlePage'
import article from '@/content/author-rankings/best-freida-mcfadden-books.json'

export const metadata = authorRankingMetadata(article)

export default function Page() {
  return <AuthorRankingArticlePage article={article} />
}
