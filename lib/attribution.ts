export const ATTRIBUTION_COOKIE_NAME = 'bpz_attr'

export type StoredAttribution = {
  source?: string
  medium?: string
  campaign?: string
  term?: string
  content?: string
  gclid?: string
  landingPath?: string
  capturedAt?: string
}

export function isGoogleAdsAttribution(attribution: StoredAttribution | null) {
  if (!attribution) {
    return false
  }

  if (attribution.gclid) {
    return true
  }

  const source = attribution.source?.toLowerCase()
  const medium = attribution.medium?.toLowerCase()

  return source === 'google' && ['cpc', 'ppc', 'paid', 'paidsearch'].includes(medium ?? '')
}

export function parseStoredAttribution(value: string | undefined | null): StoredAttribution | null {
  if (!value) {
    return null
  }

  try {
    return JSON.parse(decodeURIComponent(value)) as StoredAttribution
  } catch {
    return null
  }
}

export function serializeStoredAttribution(attribution: StoredAttribution) {
  return encodeURIComponent(JSON.stringify(attribution))
}

