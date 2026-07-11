import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const CANONICAL_HOST = 'bestpickzone.com'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  if (host.startsWith('www.')) {
    const url = new URL(request.url)
    url.protocol = 'https:'
    url.host = CANONICAL_HOST
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
