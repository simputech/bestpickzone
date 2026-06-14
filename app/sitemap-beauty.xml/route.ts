import { beautyPages, buildSitemapXml } from '@/lib/sitemap-data'

export async function GET() {
  return new Response(buildSitemapXml(beautyPages), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
