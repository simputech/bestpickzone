import type { AmazonBookItem } from '@/lib/amazon-book-match'
import AmazonProductImage from './AmazonProductImage'

export default function AmazonBookCard({ item, trackingId }: { item: AmazonBookItem; trackingId: string }) {
  const linkProps = {
    href: item.detailPageURL,
    target: '_blank',
    rel: 'sponsored nofollow noopener noreferrer',
    'data-affiliate-placement': trackingId,
    'data-product-name': item.title,
    'data-product-category': 'books',
  }

  return (
    <div className="my-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6" data-amazon-source="creators-api" data-amazon-asin={item.asin} data-amazon-fetched-at={item.fetchedAt}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-amber-900">Featured Amazon edition · affiliate links</p>
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
        <a {...linkProps} className="shrink-0 rounded-lg bg-white p-3" aria-label={`View ${item.title} on Amazon`}>
          {/* Amazon hosts the original image; preserve its proportions and do not proxy/cache it. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <AmazonProductImage src={item.imageUrl} alt={`${item.title} book cover`} width={item.imageWidth} height={item.imageHeight} className="h-48 w-36 object-contain" />
        </a>
        <div className="min-w-0 w-full flex-1">
          <h3 className="break-words text-xl font-bold leading-snug text-gray-900"><a {...linkProps} className="underline decoration-amber-400 underline-offset-4">{item.title}</a></h3>
          <p className="mt-2 text-sm text-gray-700">{item.author}</p>
          <p className="mt-2 text-sm font-semibold text-gray-800">{item.binding} · {item.language}</p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">Check Amazon for the current price, availability and other editions.</p>
          <a {...linkProps} className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-amber-400 px-5 py-3 text-center font-bold text-gray-900 hover:bg-amber-300 sm:w-auto">View this edition on Amazon</a>
          <p className="mt-3 text-xs text-gray-600">Edition details and cover supplied by Amazon.</p>
        </div>
      </div>
    </div>
  )
}
