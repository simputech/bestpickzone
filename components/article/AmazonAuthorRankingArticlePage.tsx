import AuthorRankingArticlePage, { type AuthorRankingArticle } from './AuthorRankingArticlePage'
import { getAmazonBooks, getAmazonBooksByTitle } from '@/lib/amazon-creators-api'

export default async function AmazonAuthorRankingArticlePage({ article, editions }: { article: AuthorRankingArticle; editions?: Record<string, string> }) {
  // A partial map pins only verified editions, not the entire author's catalog.
  const requests = Array.from(new Map(article.books.map(book => [book.title, { title: book.title, author: article.author }])).values())
  const pinned = requests.flatMap(book => editions?.[book.title] ? [{ ...book, asin: editions[book.title] }] : [])
  const unpinned = requests.filter(book => !editions?.[book.title])
  const [exactProducts, discoveredProducts] = await Promise.all([
    pinned.length ? getAmazonBooks(pinned) : Promise.resolve({}),
    unpinned.length ? getAmazonBooksByTitle(unpinned) : Promise.resolve({}),
  ])
  const bookProducts = { ...discoveredProducts, ...exactProducts }
  return <AuthorRankingArticlePage article={article} bookProducts={bookProducts} />
}
