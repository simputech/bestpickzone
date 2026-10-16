import { getAmazonBooks, searchAmazonProduct } from '@/lib/amazon-creators-api'
import AmazonBookCard from './AmazonBookCard'
import AmazonProductCard from './AmazonProductCard'
import AmazonContentDisclaimer from './AmazonContentDisclaimer'

const TEST_TAG = 'grandparentsgift-20'

export default async function OrganicPilotProductCard({ query, label, asin, author }: { query: string; label: string; asin?: string; author?: string }) {
  // Request the pilot tag from Amazon itself. Preserve the vended URL unchanged.
  const book = asin && author ? (await getAmazonBooks([{ asin, title: label, author }], { partnerTag: TEST_TAG }))[label] : null
  const item = author ? null : await searchAmazonProduct(query, { partnerTag: TEST_TAG })
  return <div data-organic-pilot={TEST_TAG}>
    {book ? <AmazonBookCard item={book} trackingId="organic-pilot" /> : <AmazonProductCard item={item} label={label} query={query} partnerTag={TEST_TAG} placement="organic-pilot" />}
    <AmazonContentDisclaimer />
  </div>
}
