'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

function trackPageView(url: string) {
  if (!measurementId || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', 'page_view', {
    page_path: url,
    page_title: document.title,
    page_location: window.location.href,
  })
}

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  // gtag's initial config sends the first page_view itself; this effect only
  // covers client-side route changes, where gtag is guaranteed to be loaded.
  const isInitialLoad = useRef(true)

  useEffect(() => {
    if (!pathname) {
      return
    }

    if (isInitialLoad.current) {
      isInitialLoad.current = false
      return
    }

    const query = searchParams?.toString()
    const url = query ? `${pathname}?${query}` : pathname
    trackPageView(url)
  }, [pathname, searchParams])

  if (!measurementId) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  )
}
