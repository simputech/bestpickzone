'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/components/analytics/GoogleAnalyticsEvents'

type AffiliatePlatform = 'amazon' | 'ebay' | null

function getAffiliatePlatform(href: string): AffiliatePlatform {
  try {
    const url = new URL(href)
    const host = url.hostname.toLowerCase()

    // Older HTML comparisons use bestpickzone-20; newer React articles use althcu-20.
    if (
      (host === 'amazon.com' || host.endsWith('.amazon.com')) &&
      ['althcu-20', 'bestpickzone-20', 'fitnessbankd-20'].includes(url.searchParams.get('tag') ?? '')
    ) {
      return 'amazon'
    }

    if ((host === 'ebay.com' || host.endsWith('.ebay.com')) && url.searchParams.get('campid') === '5339164184') {
      return 'ebay'
    }
  } catch {
    return null
  }

  return null
}

function getAffiliateTrackingId(href: string) {
  try {
    const url = new URL(href)
    return url.searchParams.get('customid') || undefined
  } catch {
    return undefined
  }
}

let subscribers = 0
let removeListeners: (() => void) | undefined

export function subscribeToAffiliateClicks() {
  subscribers += 1
  if (subscribers === 1) {
    const handleClick = (event: MouseEvent) => {
      // Primary/keyboard activation and middle-click are separate native events.
      if ((event.type === 'click' && event.button !== 0) || (event.type === 'auxclick' && event.button !== 1)) return
      const target = event.target

      if (!(target instanceof Element)) {
        return
      }

      const link = target.closest('a[href]')

      if (!(link instanceof HTMLAnchorElement)) {
        return
      }

      const affiliatePlatform = getAffiliatePlatform(link.href)

      if (!affiliatePlatform) {
        return
      }

      const payload = {
        event_category: 'affiliate',
        affiliate_network: affiliatePlatform,
        affiliate_platform: affiliatePlatform,
        destination_domain: new URL(link.href).hostname,
        affiliate_tracking_id: link.dataset.affiliatePlacement || getAffiliateTrackingId(link.href),
        event_label: link.href,
        link_url: link.href,
        link_text: link.textContent?.trim() || `${affiliatePlatform} link`,
        page_path: window.location.pathname,
        page_location: window.location.href,
        article_slug: window.location.pathname.split('/').filter(Boolean).pop(),
        product_name: link.dataset.productName || new URL(link.href).searchParams.get('k') || link.textContent?.trim(),
        product_category: link.dataset.productCategory || window.location.pathname.split('/').filter(Boolean)[0],
        transport_type: 'beacon',
      }

      trackEvent('affiliate_click', payload)
    }

    document.addEventListener('click', handleClick, true)
    document.addEventListener('auxclick', handleClick, true)

    removeListeners = () => {
      document.removeEventListener('click', handleClick, true)
      document.removeEventListener('auxclick', handleClick, true)
    }
  }
  let released = false
  return () => {
    if (released) return
    released = true
    subscribers -= 1
    if (!subscribers) { removeListeners?.(); removeListeners = undefined }
  }
}

export default function AffiliateClickTracker() {
  useEffect(subscribeToAffiliateClicks, [])

  return null
}
