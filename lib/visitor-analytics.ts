export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
export type GtagEventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
    __BPZ_DISABLE_ANALYTICS__?: boolean
    __bpzAnalyticsInitialized?: boolean
  }
}

/** Explicit monitoring opt-out; no geographic or user-agent heuristics. */
export function visitorAnalyticsAllowed() {
  if (typeof window === 'undefined') return false
  if (window.location.hostname !== 'bestpickzone.com' || window.location.protocol !== 'https:') return false
  if (window.__BPZ_DISABLE_ANALYTICS__ || window.navigator.webdriver) return false
  const optedOut = new URLSearchParams(window.location.search).get('bpz_analytics') === 'off'
  try {
    if (optedOut) window.sessionStorage.setItem('bpz_analytics', 'off')
    if (window.sessionStorage.getItem('bpz_analytics') === 'off') return false
  } catch {
    // Storage may be unavailable; the URL and explicit window flag still work.
  }
  return !optedOut
}

export function initializeAnalytics(production: boolean) {
  if (!production || !GA_MEASUREMENT_ID || !visitorAnalyticsAllowed() || window.__bpzAnalyticsInitialized) return
  window.__bpzAnalyticsInitialized = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function (...args: unknown[]) { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  // Enhanced Measurement history tracking is enabled on the production stream.
  // It is the sole page-view owner, including SPA navigation and back/forward.
  window.gtag('config', GA_MEASUREMENT_ID)
  const script = document.createElement('script')
  script.id = 'bpz-google-analytics'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

export function trackEvent(action: string, params: GtagEventParams = {}) {
  if (!visitorAnalyticsAllowed() || !window.__bpzAnalyticsInitialized || typeof window.gtag !== 'function') return
  window.gtag('event', action, params)
}
