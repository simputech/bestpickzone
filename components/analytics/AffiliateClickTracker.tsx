'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/components/analytics/GoogleAnalyticsEvents'

type AffiliatePlatform = 'amazon' | 'ebay' | null

const handledAffiliateEvents = new WeakSet<Event>()

function getAffiliatePlatform(href: string): AffiliatePlatform {
  try {
    const url = new URL(href)
    const host = url.hostname.toLowerCase()

    if ((host === 'amazon.com' || host.endsWith('.amazon.com')) && url.searchParams.get('tag') === 'althcu-20') {
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

function getLinkType(link: HTMLAnchorElement) {
  if (link.dataset.affiliateLinkType) return link.dataset.affiliateLinkType
  if (link.closest('table')) return 'table'
  if (link.closest('[class*="card"], [class*="Card"]')) return 'card'
  if (link.matches('[role="button"]') || /\b(btn|button|bg-yellow|bg-amber|bg-sky)\b/.test(link.className)) {
    return 'button'
  }
  return 'inline'
}

function getProductTitle(link: HTMLAnchorElement, affiliatePlatform: Exclude<AffiliatePlatform, null>) {
  if (link.dataset.affiliateProduct) return link.dataset.affiliateProduct

  const card = link.closest('section, article, [class*="card"], [class*="Card"]')
  const heading = card?.querySelector('h2, h3, h4')?.textContent?.trim()
  return heading || link.getAttribute('aria-label') || link.textContent?.trim() || `${affiliatePlatform} link`
}

function getPlacement(link: HTMLAnchorElement) {
  if (link.dataset.affiliatePlacement) return link.dataset.affiliatePlacement
  return link.closest('section, article')?.id || 'article-body'
}

export default function AffiliateClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (handledAffiliateEvents.has(event)) return

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

      handledAffiliateEvents.add(event)

      const payload = {
        event_category: 'affiliate',
        affiliate_platform: affiliatePlatform,
        affiliate_tracking_id: getAffiliateTrackingId(link.href),
        destination_host: new URL(link.href).hostname.toLowerCase(),
        content_slug: link.dataset.contentSlug || window.location.pathname.replace(/^\/+|\/+$/g, '') || 'home',
        cta_placement: getPlacement(link),
        product_title: getProductTitle(link, affiliatePlatform),
        link_type: getLinkType(link),
        page_path: window.location.pathname,
        transport_type: 'beacon',
      }

      trackEvent('affiliate_click', payload)
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  return null
}
