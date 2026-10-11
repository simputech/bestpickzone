export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
export type GtagEventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
    __BPZ_DISABLE_ANALYTICS__?: boolean
    __bpzAnalyticsInitialized?: boolean
    __bpzAnalyticsConsentBlocked?: boolean
    [key: `ga-disable-${string}`]: boolean | undefined
  }
}

const CONSENT_KEY = 'bpz_analytics_consent'

export function readAnalyticsConsent(): 'granted' | 'denied' | null {
  if (typeof window === 'undefined') return null
  try {
    const consent = window.localStorage.getItem(CONSENT_KEY)
    return consent === 'granted' || consent === 'denied' ? consent : null
  } catch { return null }
}

/** Keep the existing storage contract; failed writes must never reuse an old grant. */
export function saveAnalyticsConsent(allow: boolean): boolean {
  const consent = allow ? 'granted' : 'denied'
  let saved = false
  try {
    window.localStorage.setItem(CONSENT_KEY, consent)
    saved = window.localStorage.getItem(CONSENT_KEY) === consent
  } catch { /* Fail closed, including browsers that can read but cannot write. */ }
  window.__bpzAnalyticsConsentBlocked = !saved || !allow
  // Stop an already-loaded GA instance immediately, before the revocation reload.
  if (GA_MEASUREMENT_ID) window[`ga-disable-${GA_MEASUREMENT_ID}`] = !saved || !allow
  return saved
}

/** Explicit monitoring opt-out; no geographic or user-agent heuristics. */
export function visitorAnalyticsAllowed() {
  if (typeof window === 'undefined') return false
  if (window.location.hostname !== 'bestpickzone.com' || window.location.protocol !== 'https:') return false
  if (window.__BPZ_DISABLE_ANALYTICS__ || window.__bpzAnalyticsConsentBlocked || window.navigator.webdriver) return false
  const optedOut = new URLSearchParams(window.location.search).get('bpz_analytics') === 'off'
  try {
    if (window.localStorage.getItem('bpz_analytics_consent') !== 'granted') return false
    if (optedOut) window.sessionStorage.setItem('bpz_analytics', 'off')
    if (window.sessionStorage.getItem('bpz_analytics') === 'off') return false
  } catch {
    return false
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
