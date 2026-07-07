import { buildSitemapXml } from '@/lib/sitemap-data'
import { getSpanishSitemapEntries } from '@/lib/spanish-site-data'

export async function GET() {
  return new Response(buildSitemapXml(getSpanishSitemapEntries()), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
