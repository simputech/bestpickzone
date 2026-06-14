import { buildSitemapXml, coffeePages } from '@/lib/sitemap-data'

export async function GET() {
  return new Response(buildSitemapXml(coffeePages), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
