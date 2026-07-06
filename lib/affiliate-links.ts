function sanitizeTrackingPart(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function buildAffiliateTrackingId(...parts: string[]) {
  return parts
    .map(sanitizeTrackingPart)
    .filter(Boolean)
    .join('-')
    .slice(0, 100)
}

export function decorateEbayAffiliateUrl(url: string, trackingId: string) {
  const parsed = new URL(url)
  parsed.searchParams.set('customid', trackingId)
  return parsed.toString()
}

export function getAffiliateUrlWithTracking(
  url: string,
  platform: 'amazon' | 'ebay' | undefined,
  trackingId: string
) {
  if (platform === 'ebay' && url.includes('ebay.com')) {
    return decorateEbayAffiliateUrl(url, trackingId)
  }

  return url
}
