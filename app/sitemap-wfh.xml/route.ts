import { buildSitemapXml, wfhPages } from '@/lib/sitemap-data'

export async function GET() {
  return new Response(buildSitemapXml(wfhPages), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
