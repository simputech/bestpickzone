import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const indexNowKey = '7de65818f6fb8a37e82414766984b76a'
const pageUrl = 'https://bestpickzone.com/books/genre-fiction/best-historical-fiction-series-2026'

export async function GET() {
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'bestpickzone.com',
      key: indexNowKey,
      keyLocation: `https://bestpickzone.com/${indexNowKey}.txt`,
      urlList: [pageUrl],
    }),
    cache: 'no-store',
  })

  return NextResponse.json({
    submittedUrl: pageUrl,
    indexNowStatus: response.status,
    accepted: response.status === 200 || response.status === 202,
    responseBody: await response.text(),
  })
}
