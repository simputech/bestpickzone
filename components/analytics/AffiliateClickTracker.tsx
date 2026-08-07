'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/components/analytics/GoogleAnalyticsEvents'

type AffiliatePlatform = 'amazon' | 'ebay' | null

function getAffiliatePlatform(href: string): AffiliatePlatform {
  if (href.includes('amazon.com') && href.includes('tag=althcu-20')) {
    return 'amazon'
  }

  if (href.includes('ebay.com') && href.includes('campid=5339164184')) {
    return 'ebay'
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

export default function AffiliateClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
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
        affiliate_platform: affiliatePlatform,
        affiliate_tracking_id: link.dataset.affiliatePlacement || getAffiliateTrackingId(link.href),
        event_label: link.href,
        link_url: link.href,
        link_text: link.textContent?.trim() || `${affiliatePlatform} link`,
        page_path: window.location.pathname,
        transport_type: 'beacon',
      }

      trackEvent('affiliate_click', payload)
      trackEvent(`${affiliatePlatform}_click`, payload)
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  return null
}
