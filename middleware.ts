import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  ATTRIBUTION_COOKIE_NAME,
  parseStoredAttribution,
  serializeStoredAttribution,
  type StoredAttribution,
} from '@/lib/attribution'

const ATTRIBUTION_COOKIE_MAX_AGE = 60 * 60 * 24 * 30
const CANONICAL_HOST = 'bestpickzone.com'

function buildAttributionFromRequest(request: NextRequest): StoredAttribution | null {
  const searchParams = request.nextUrl.searchParams
  const gclid = searchParams.get('gclid') ?? undefined
  const source = searchParams.get('utm_source') ?? undefined
  const medium = searchParams.get('utm_medium') ?? undefined
  const campaign = searchParams.get('utm_campaign') ?? undefined
  const term = searchParams.get('utm_term') ?? undefined
  const content = searchParams.get('utm_content') ?? undefined

  if (!gclid && !source && !medium && !campaign && !term && !content) {
    return null
  }

  return {
    source,
    medium,
    campaign,
    term,
    content,
    gclid,
    landingPath: `${request.nextUrl.pathname}${request.nextUrl.search}`,
    capturedAt: new Date().toISOString(),
  }
}

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  if (host.startsWith('www.')) {
    const url = new URL(request.url)
    url.protocol = 'https:'
    url.host = CANONICAL_HOST
    return NextResponse.redirect(url, 301)
  }

  const response = NextResponse.next()
  const incomingAttribution = buildAttributionFromRequest(request)

  if (incomingAttribution) {
    const currentCookie = request.cookies.get(ATTRIBUTION_COOKIE_NAME)?.value
    const currentAttribution = parseStoredAttribution(currentCookie)
    const mergedAttribution = {
      ...currentAttribution,
      ...incomingAttribution,
    }

    response.cookies.set(ATTRIBUTION_COOKIE_NAME, serializeStoredAttribution(mergedAttribution), {
      httpOnly: false,
      sameSite: 'lax',
      secure: true,
      path: '/',
      maxAge: ATTRIBUTION_COOKIE_MAX_AGE,
    })
  }

  return response
}

export const config = {
  matcher: '/:path*',
}
