import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import legacyRedirects from './lib/legacy-redirects.json'

const CANONICAL_HOST = 'bestpickzone.com'
const redirects: Record<string, string> = legacyRedirects

export function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const path = url.pathname.replace(/\/+$/, '') || '/'
  const destination = redirects[path] || path
  const isWww = url.hostname === `www.${CANONICAL_HOST}`

  if (isWww || destination !== url.pathname) {
    url.pathname = destination
    if (isWww) {
      url.protocol = 'https:'
      url.host = CANONICAL_HOST
    }
    // Preserve query strings and send each alias straight to its final page.
    return NextResponse.redirect(url, isWww ? 301 : 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
