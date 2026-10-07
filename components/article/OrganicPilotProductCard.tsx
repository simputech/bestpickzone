import { searchAmazonProduct } from '@/lib/amazon-creators-api'

const TEST_TAG = 'grandparentsgift-20'

function trackedAmazonUrl(rawUrl: string | undefined, query: string) {
  const fallback = `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${TEST_TAG}`
  if (!rawUrl) return fallback
  try {
    const url = new URL(rawUrl)
    if (url.protocol !== 'https:' || !/(^|\\.)amazon\\.com$/.test(url.hostname)) return fallback
    url.searchParams.set('tag', TEST_TAG)
    return url.toString()
  } catch { return fallback }
}

export default async function OrganicPilotProductCard({ query, label }: { query: string; label: string }) {
  const item = await searchAmazonProduct(query)
  const href = trackedAmazonUrl(item?.detailPageURL, query)
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5" data-organic-pilot="grandparentsgift-20" data-amazon-source={item ? 'creators-api' : 'fallback'}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-900">Amazon product • affiliate link</p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        {item?.imageUrl ? <img src={item.imageUrl} alt={item.title || label} width={150} height={150} loading="lazy" className="h-36 w-36 shrink-0 object-contain" /> : <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-xl bg-white p-3 text-center text-sm text-gray-500">See product on Amazon</div>}
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-gray-900">{item?.title || label}</h3>
          <p className="mt-2 text-sm text-gray-700">{item?.price || 'Check Amazon for current price and availability'}</p>
          <a href={href} target="_blank" rel="sponsored noopener noreferrer" className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-bold text-gray-900 hover:bg-amber-300">View on Amazon</a>
          <p className="mt-2 text-xs text-gray-600">{item ? 'Product details supplied by Amazon.' : 'Amazon search link; exact product not verified.'}</p>
        </div>
      </div>
    </div>
  )
}
