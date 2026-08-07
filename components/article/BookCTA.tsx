import Link from 'next/link'
import { getAffiliateUrlWithTracking } from '@/lib/affiliate-links'

interface BookCTAProps {
  title: string
  author: string
  affiliateUrl?: string
  affiliateLabel?: string
  affiliatePlatform?: 'amazon' | 'ebay'
  trackingId?: string
  ctaLabel?: string
}

export default function BookCTA({
  title,
  author,
  affiliateUrl,
  affiliateLabel,
  affiliatePlatform = 'amazon',
  trackingId,
  ctaLabel,
}: BookCTAProps) {
  const query = encodeURIComponent(`${title} ${author}`)
  const baseUrl = affiliateUrl ?? `https://www.amazon.com/s?k=${query}&tag=althcu-20`
  const url = trackingId
    ? getAffiliateUrlWithTracking(baseUrl, affiliatePlatform, trackingId)
    : baseUrl
  const label =
    ctaLabel ??
    affiliateLabel ??
    (affiliatePlatform === 'ebay'
      ? `Check current eBay listings for ${title}`
      : `See formats and current price for ${title} on Amazon`)
  const className =
    affiliatePlatform === 'ebay'
      ? 'inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-base font-bold text-white transition-colors min-h-[44px] w-full hover:bg-sky-500 sm:w-auto'
      : 'inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-base font-bold text-gray-900 transition-colors min-h-[44px] w-full hover:bg-yellow-300 sm:w-auto'

  return (
    <div className="my-4">
      <Link
        href={url}
        target="_blank"
        rel="noopener nofollow sponsored"
        data-affiliate-placement={trackingId}
        className={className}
      >
        <span>{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
          />
          <path
            fillRule="evenodd"
            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
          />
        </svg>
      </Link>
    </div>
  )
}
