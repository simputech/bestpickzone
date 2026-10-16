import AuthorRankingArticlePage, { type AuthorRankingArticle } from './AuthorRankingArticlePage'
import { getAmazonBooks, getAmazonBooksByTitle } from '@/lib/amazon-creators-api'

export default async function AmazonAuthorRankingArticlePage({ article, editions }: { article: AuthorRankingArticle; editions?: Record<string, string> }) {
  const requests = article.books.map(book => ({ title: book.title, author: article.author }))
  const bookProducts = editions
    ? await getAmazonBooks(requests.flatMap(book => editions[book.title] ? [{ ...book, asin: editions[book.title] }] : []))
    : await getAmazonBooksByTitle(requests)
  return <AuthorRankingArticlePage article={article} bookProducts={bookProducts} />
}
