import { articleCommerce } from '@/lib/article-commerce'
import { getAmazonBooks, getAmazonBooksByTitle, searchAmazonProduct } from '@/lib/amazon-creators-api'
import AmazonProductCard from './AmazonProductCard'
import AmazonBookCard from './AmazonBookCard'
import AmazonContentDisclaimer from './AmazonContentDisclaimer'

export default async function ArticleAmazonProducts({ path }: { path: string }) {
  const config = articleCommerce[path]
  if (!config) return null
  const partnerTag = config.partnerTag || process.env.AMAZON_ASSOCIATE_TAG?.trim() || process.env.NEXT_PUBLIC_AMAZON_TRACKING_ID?.trim() || 'althcu-20'
  const picks = config.products || []
  const products = await Promise.all(picks.map(({ query, ...expected }) => searchAmazonProduct(query, { ...expected, partnerTag })))
  const exactBooks = (config.books || []).flatMap(book => book.asin ? [{ ...book, asin: book.asin }] : [])
  const searchedBooks = (config.books || []).filter(book => !book.asin)
  const bookProducts = { ...(exactBooks.length ? await getAmazonBooks(exactBooks, { partnerTag }) : {}), ...(searchedBooks.length ? await getAmazonBooksByTitle(searchedBooks, { partnerTag }) : {}) }
  return <section className="my-8 rounded-[2rem] border border-amber-200 bg-white p-5 md:p-7" aria-label="Amazon options for this guide" data-creator-rollout-batch={config.batch} data-creator-article-path={path} data-organic-pilot={config.partnerTag === 'grandparentsgift-20' ? config.partnerTag : undefined}>
    <h2 className="text-2xl font-bold text-gray-900">Check the options discussed in this guide</h2>
    <p className="mb-5 mt-3 leading-relaxed text-gray-700">These affiliate links are for the named products, not a separate ranking. Match the variant and compatibility advice above before buying. When Amazon cannot verify a matching listing, we show a clearly labeled search link instead.</p>
    <div className="grid gap-4">
      {picks.map((pick, index) => <AmazonProductCard key={pick.label} item={products[index]} label={pick.label} query={pick.query} partnerTag={partnerTag} placement={`${path.split('/').pop()}-product-${index + 1}`} note={pick.note} />)}
      {(config.books || []).map((book, index) => bookProducts[book.title]
        ? <AmazonBookCard key={book.title} item={bookProducts[book.title]} trackingId={`${path.split('/').pop()}-book-${index + 1}`} />
        : <AmazonProductCard key={book.title} item={null} label={`${book.title} by ${book.author}`} query={`${book.title} ${book.author}`} partnerTag={partnerTag} placement={`${path.split('/').pop()}-book-${index + 1}`} />)}
    </div>
    <AmazonContentDisclaimer />
  </section>
}
