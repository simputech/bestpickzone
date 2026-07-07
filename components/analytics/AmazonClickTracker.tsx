'use client'

import { useEffect } from 'react'
import {
  ATTRIBUTION_COOKIE_NAME,
  isGoogleAdsAttribution,
  parseStoredAttribution,
} from '@/lib/attribution'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

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

function getCookie(name: string) {
  const cookies = document.cookie ? document.cookie.split('; ') : []
  const match = cookies.find((cookie) => cookie.startsWith(`${name}=`))
  return match ? match.slice(name.length + 1) : undefined
}

export default function AmazonClickTracker() {
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
      const affiliateTrackingId = getAffiliateTrackingId(link.href)
      const attribution = parseStoredAttribution(getCookie(ATTRIBUTION_COOKIE_NAME))
      const googleAdsVisitor = isGoogleAdsAttribution(attribution)

      if (!affiliatePlatform || typeof window.gtag !== 'function') {
        return
      }

      const payload = {
        event_category: 'affiliate',
        affiliate_platform: affiliatePlatform,
        affiliate_tracking_id: affiliateTrackingId,
        event_label: link.href,
        link_url: link.href,
        link_text: link.textContent?.trim() || `${affiliatePlatform} link`,
        page_location: window.location.href,
        page_path: window.location.pathname,
        traffic_source: attribution?.source,
        traffic_medium: attribution?.medium,
        traffic_campaign: attribution?.campaign,
        traffic_term: attribution?.term,
        traffic_content: attribution?.content,
        google_click_id: attribution?.gclid,
        attribution_landing_path: attribution?.landingPath,
        attribution_captured_at: attribution?.capturedAt,
        is_google_ads_visitor: googleAdsVisitor,
        transport_type: 'beacon',
      }

      window.gtag('event', 'affiliate_click', payload)
      window.gtag('event', `${affiliatePlatform}_click`, payload)

      if (googleAdsVisitor) {
        window.gtag('event', 'affiliate_click_from_google_ads', payload)

        if (affiliatePlatform === 'amazon') {
          window.gtag('event', 'amazon_click_from_google_ads', payload)
        }
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  return null
}
