import { buildSitemapXml, mainPages } from '@/lib/sitemap-data'

export async function GET() {
  return new Response(buildSitemapXml(mainPages), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
