'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function isTrackedAmazonLink(href: string) {
  return href.includes('amazon.com') && href.includes('tag=althcu-20')
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

      if (!isTrackedAmazonLink(link.href) || typeof window.gtag !== 'function') {
        return
      }

      window.gtag('event', 'amazon_click', {
        event_category: 'affiliate',
        event_label: link.href,
        link_url: link.href,
        link_text: link.textContent?.trim() || 'Amazon link',
        page_location: window.location.href,
        page_path: window.location.pathname,
        transport_type: 'beacon',
      })
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  return null
}
