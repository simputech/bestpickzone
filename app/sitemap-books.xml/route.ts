import { booksPages, buildSitemapXml } from '@/lib/sitemap-data'

export async function GET() {
  return new Response(buildSitemapXml(booksPages), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
