import AuthorRankingArticlePage, { type AuthorRankingArticle } from './AuthorRankingArticlePage'
import { getAmazonBooks } from '@/lib/amazon-creators-api'

export default async function AmazonAuthorRankingArticlePage({ article, editions }: { article: AuthorRankingArticle; editions: Record<string, string> }) {
  const requests = article.books.flatMap(book => editions[book.title] ? [{ asin: editions[book.title], title: book.title, author: article.author }] : [])
  const bookProducts = await getAmazonBooks(requests)
  return <AuthorRankingArticlePage article={article} bookProducts={bookProducts} />
}
