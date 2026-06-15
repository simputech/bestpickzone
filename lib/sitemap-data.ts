import { articlesData } from '@/lib/books-data'
import { beautyComparisonArticles, coffeeComparisonArticles, wfhComparisonArticles } from '@/lib/comparison-html-articles'

export const baseUrl = 'https://bestpickzone.com'

export type SitemapEntry = {
  url: string
  lastModified: string
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly'
  priority: number
}

export const techSlugs: { slug: string; date: string }[] = [
  { slug: 'best-laptops-for-college-students', date: '2026-04-09' },
  { slug: 'airpods-pro-vs-sony-wf-1000xm5', date: '2026-04-09' },
  { slug: 'best-budget-monitors', date: '2026-04-09' },
  { slug: 'best-wireless-earbuds', date: '2026-04-09' },
  { slug: 'best-mechanical-keyboards', date: '2026-04-09' },
]

export const standaloneBookPages: SitemapEntry[] = [
  { url: `${baseUrl}/books`, lastModified: '2026-06-13', changeFrequency: 'weekly', priority: 0.95 },
  { url: `${baseUrl}/books/authors`, lastModified: '2026-04-20', changeFrequency: 'weekly', priority: 0.9 },
  { url: `${baseUrl}/books/genre-fiction`, lastModified: '2026-06-13', changeFrequency: 'weekly', priority: 0.9 },
  { url: `${baseUrl}/books/self-help`, lastModified: '2026-06-13', changeFrequency: 'weekly', priority: 0.9 },
  { url: `${baseUrl}/books/kids-and-ya`, lastModified: '2026-06-13', changeFrequency: 'weekly', priority: 0.9 },
  { url: `${baseUrl}/books/reader-picks`, lastModified: '2026-04-20', changeFrequency: 'weekly', priority: 0.9 },
  { url: `${baseUrl}/books/best-stephen-king-books`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/haruki-murakami-reading-order`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/books-like-it-ends-with-us`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-spy-thrillers-realistic`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/agatha-christie-hercule-poirot-in-order`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-brandon-sanderson-cosmere-order`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/books-like-verity-psychological-thrillers`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-cozy-mystery-series-to-read`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/colleen-hoover-books-ranked-worst-to-best`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-sci-fi-doorstoppers-epic-space-opera`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/cormac-mccarthy-where-to-start`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-historical-fiction-books-2026`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/books-like-fourth-wing-fantasy-romance`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-cyberpunk-novels-all-time`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/lord-of-the-rings-vs-harry-potter`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/stephen-king-vs-dean-koontz`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/agatha-christie-vs-arthur-conan-doyle`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/hemingway-vs-fitzgerald`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/taylor-jenkins-reid-books-in-order`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-psychological-thrillers-with-mind-bending-twists`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/books-like-dune-hard-sci-fi`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-urban-fantasy-series-completed`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/fredrik-backman-books-ranked`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-short-classic-books-for-a-flight`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/kids-and-ya/best-2026-summer-reading-for-12-year-old-girls`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/kids-and-ya/best-2026-summer-reading-for-high-school-students`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/kids-and-ya/best-books-for-12-year-old-boys-summer-2026`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-spy-thriller-books`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-new-spy-thriller-books-2026`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-world-war-ii-books`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-cold-war-thriller-books`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-military-fiction-books`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-history-books-for-beginners`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/devils-guard-review`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/authors/best-alex-michaelides-books`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/authors/best-lee-child-books`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/authors/best-patrick-radden-keefe-books`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/reader-picks/best-new-books-april-2026`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/reader-picks/best-new-books-june-2026`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/reader-picks/best-books-like-da-vinci-code`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/reader-picks/best-action-adventure-books-for-men`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/reader-picks/best-books-for-people-who-dont-like-reading`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/self-help/best-self-help-books-2026`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/self-help/best-personal-finance-books-young-adults`, lastModified: '2026-04-20', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/self-help/best-book-to-learn-scrum`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/self-help/best-comptia-security-plus-books-2026`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.85 },
]

export const mainPages: SitemapEntry[] = [
  { url: `${baseUrl}/`, lastModified: '2026-06-14', changeFrequency: 'weekly', priority: 1.0 },
  { url: `${baseUrl}/tech`, lastModified: '2026-06-13', changeFrequency: 'weekly', priority: 0.9 },
  { url: `${baseUrl}/home-kitchen`, lastModified: '2026-06-14', changeFrequency: 'weekly', priority: 0.8 },
  { url: `${baseUrl}/finance-software`, lastModified: '2026-04-09', changeFrequency: 'weekly', priority: 0.75 },
  { url: `${baseUrl}/health-fitness`, lastModified: '2026-04-09', changeFrequency: 'weekly', priority: 0.75 },
  { url: `${baseUrl}/home-kitchen/oxo-vs-chefn-corn-stripper`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/oxo-vs-fullstar-avocado-slicer`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-solar-powered-attic-fans`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-kids-fort-for-girls-2026`, lastModified: '2026-06-13', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/instant-pot-vs-ninja-foodi`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-robot-vacuums`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-coffee-makers-under-100`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-air-fryers`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.8 },
  ...techSlugs.map(({ slug, date }) => ({
    url: `${baseUrl}/tech/${slug}`,
    lastModified: date,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  })),
]

export const beautyPages: SitemapEntry[] = [
  { url: `${baseUrl}/beauty`, lastModified: '2026-06-14', changeFrequency: 'weekly', priority: 0.92 },
  ...beautyComparisonArticles.map((article) => ({
    url: `${baseUrl}/beauty/${article.slug}`,
    lastModified: '2026-06-14',
    changeFrequency: 'monthly' as const,
    priority: 0.88,
  })),
]

export const coffeePages: SitemapEntry[] = [
  { url: `${baseUrl}/coffee`, lastModified: '2026-06-14', changeFrequency: 'weekly', priority: 0.92 },
  { url: `${baseUrl}/coffee/breville-bambino-plus-vs-gaggia-classic-pro`, lastModified: '2026-06-14', changeFrequency: 'monthly', priority: 0.88 },
  ...coffeeComparisonArticles.map((article) => ({
    url: `${baseUrl}/coffee/${article.slug}`,
    lastModified: '2026-06-14',
    changeFrequency: 'monthly' as const,
    priority: 0.88,
  })),
]

export const wfhPages: SitemapEntry[] = [
  { url: `${baseUrl}/wfh`, lastModified: '2026-06-14', changeFrequency: 'weekly', priority: 0.92 },
  ...wfhComparisonArticles.map((article) => ({
    url: `${baseUrl}/wfh/${article.slug}`,
    lastModified: '2026-06-14',
    changeFrequency: 'monthly' as const,
    priority: 0.88,
  })),
]

export const booksPages: SitemapEntry[] = [
  ...standaloneBookPages,
  ...articlesData.map((article) => ({
    url: `${baseUrl}/books/${article.slug}`,
    lastModified: article.publishedDate || '2026-04-09',
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  })),
]

export function buildSitemapXml(entries: SitemapEntry[]) {
  const items = entries
    .map(
      (entry) => `<url><loc>${entry.url}</loc><lastmod>${entry.lastModified}</lastmod><changefreq>${entry.changeFrequency}</changefreq><priority>${entry.priority.toFixed(1)}</priority></url>`
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}</urlset>`
}

export function buildSitemapIndexXml() {
  const sitemaps = [
    `${baseUrl}/sitemap-main.xml`,
    `${baseUrl}/sitemap-books.xml`,
    `${baseUrl}/sitemap-beauty.xml`,
    `${baseUrl}/sitemap-coffee.xml`,
    `${baseUrl}/sitemap-wfh.xml`,
  ]
    .map((url) => `<sitemap><loc>${url}</loc><lastmod>2026-06-14</lastmod></sitemap>`)
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps}</sitemapindex>`
}
