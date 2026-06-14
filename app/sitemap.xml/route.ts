import { buildSitemapIndexXml } from '@/lib/sitemap-data'

export async function GET() {
  return new Response(buildSitemapIndexXml(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
