import type { AmazonCreatorItem } from '@/lib/amazon-creators-api'
import AmazonProductImage from './AmazonProductImage'

export default function AmazonProductCard({ item, label, query, partnerTag, placement, note }: { item: AmazonCreatorItem | null; label: string; query: string; partnerTag: string; placement: string; note?: string }) {
  const href = item?.detailPageURL || `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${encodeURIComponent(partnerTag)}`
  const linkProps = { href, target: '_blank', rel: 'sponsored nofollow noopener noreferrer', 'data-affiliate-placement': placement, 'data-product-name': label }
  return <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5" data-amazon-source={item ? 'creators-api' : 'fallback'} data-amazon-asin={item?.asin} data-amazon-fetched-at={item?.fetchedAt}>
    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-900">{item ? 'Amazon product' : 'Amazon search'} · affiliate link</p>
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
      {item?.imageUrl && <a {...linkProps} className="shrink-0 rounded-lg bg-white p-3" aria-label={`View ${label} on Amazon`}><AmazonProductImage src={item.imageUrl} alt={item.title || label} width={item.imageWidth} height={item.imageHeight} /></a>}
      <div className="min-w-0 w-full flex-1">
        <h3 className="break-words text-lg font-bold text-gray-900"><a {...linkProps} className="underline decoration-amber-400 underline-offset-4">{item?.title || label}</a></h3>
        {note && <p className="mt-2 text-sm leading-relaxed text-gray-700">{note}</p>}
        <p className="mt-3 text-sm text-gray-700">Check Amazon for the current price, exact variant, seller and availability.</p>
        <a {...linkProps} className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-amber-400 px-5 py-3 text-center font-bold text-gray-900 hover:bg-amber-300">{item ? 'View this item on Amazon' : 'Search Amazon for this item'}</a>
        <p className="mt-2 text-xs text-gray-600">{item ? 'Product details and image supplied by Amazon.' : 'A matching listing could not be verified. This link opens search results, not a confirmed product.'}</p>
      </div>
    </div>
  </div>
}
