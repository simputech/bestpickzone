import { buyingGuides, guideDate } from './buying-guide-data'
import { articlesData, getBookPath } from '@/lib/books-data'
import { beautyComparisonArticles, coffeeComparisonArticles, wfhComparisonArticles } from '@/lib/comparison-html-articles'

export const baseUrl = 'https://bestpickzone.com'
export const contentRefreshDate = '2026-07-01'

function latestDate(first: string, second: string) {
  return first > second ? first : second
}

export type SitemapEntry = {
  url: string
  lastModified: string
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly'
  priority: number
}

export const techSlugs: { slug: string; date: string }[] = [
  { slug: 'best-laptops-for-college-students', date: contentRefreshDate },
  { slug: 'airpods-pro-vs-sony-wf-1000xm5', date: contentRefreshDate },
  { slug: 'best-budget-monitors', date: contentRefreshDate },
  { slug: 'best-wireless-earbuds', date: contentRefreshDate },
  { slug: 'best-mechanical-keyboards', date: contentRefreshDate },
]

export const standaloneBookPages: SitemapEntry[] = [
  { url: `${baseUrl}/books`, lastModified: contentRefreshDate, changeFrequency: 'weekly', priority: 0.95 },
  { url: `${baseUrl}/books/authors`, lastModified: contentRefreshDate, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${baseUrl}/books/genre-fiction`, lastModified: contentRefreshDate, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${baseUrl}/books/self-help`, lastModified: contentRefreshDate, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${baseUrl}/books/kids-and-ya`, lastModified: contentRefreshDate, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${baseUrl}/books/reader-picks`, lastModified: contentRefreshDate, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${baseUrl}/books/best-stephen-king-books`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/haruki-murakami-reading-order`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/books-like-it-ends-with-us`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-spy-thrillers-realistic`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/agatha-christie-hercule-poirot-in-order`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-brandon-sanderson-cosmere-order`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/books-like-verity-psychological-thrillers`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-cozy-mystery-series-to-read`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-sci-fi-doorstoppers-epic-space-opera`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/cormac-mccarthy-where-to-start`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-historical-fiction-books-2026`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/books-like-fourth-wing-fantasy-romance`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-cyberpunk-novels-all-time`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/lord-of-the-rings-vs-harry-potter`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/stephen-king-vs-dean-koontz`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/agatha-christie-vs-arthur-conan-doyle`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/hemingway-vs-fitzgerald`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/taylor-jenkins-reid-books-in-order`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-psychological-thrillers-with-mind-bending-twists`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/books-like-dune-hard-sci-fi`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-urban-fantasy-series-completed`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/fredrik-backman-books-ranked`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/best-short-classic-books-for-a-flight`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/top-fantasy-romance-novels`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/books/genre-fiction/best-historical-epics-2026`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-historical-fiction-books`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-civil-war-soldier-memoirs`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-wwii-novels-2026`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/self-help/best-james-clear-books`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/reader-picks/best-true-crime-books`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/kids-and-ya/best-2026-summer-reading-for-12-year-old-girls`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/kids-and-ya/best-2026-summer-reading-for-high-school-students`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/kids-and-ya/best-books-for-12-year-old-boys-summer-2026`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-spy-thriller-books`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-new-spy-thriller-books-2026`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-world-war-ii-books`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-cold-war-thriller-books`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-military-fiction-books`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-history-books-for-beginners`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/devils-guard-review`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/genre-fiction/best-legal-thriller-books`, lastModified: '2026-08-01', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/authors/authors-like-colleen-hoover`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/authors/best-alex-michaelides-books`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/authors/best-lee-child-books`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/authors/best-patrick-radden-keefe-books`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/reader-picks/best-new-books-april-2026`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/reader-picks/best-new-books-june-2026`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/reader-picks/best-fall-reads-2026`, lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/reader-picks/best-books-like-da-vinci-code`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/reader-picks/best-action-adventure-books-for-men`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/reader-picks/best-books-for-people-who-dont-like-reading`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/self-help/best-self-help-books-2026`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/self-help/best-personal-finance-books-young-adults`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/self-help/best-book-to-learn-scrum`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/books/self-help/best-comptia-security-plus-books-2026`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.85 },
]

export const mainPages: SitemapEntry[] = [
  { url: `${baseUrl}/home-kitchen/best-kitchenaid-attachments-worth-buying`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/ooni-vs-gozney-best-outdoor-pizza-oven`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-pet-travel-products`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-air-fryer-accessories`, lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-car-cleaning-products`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/is-ge-opal-2-0-nugget-ice-maker-worth-it`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-products-for-your-backyard`, lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-products-for-your-dorm-room`, lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-picnic-essentials`, lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.8 },
  ...buyingGuides.filter(g => (g.silo === 'mahjong' || g.silo === 'home-kitchen')).map(g => ({ url: `${baseUrl}/${g.silo}/${g.slug}`, lastModified: g.date ?? guideDate, changeFrequency: 'monthly' as const, priority: 0.85 })),
  { url: `${baseUrl}/`, lastModified: contentRefreshDate, changeFrequency: 'weekly', priority: 1.0 },
  { url: `${baseUrl}/tech`, lastModified: contentRefreshDate, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${baseUrl}/home-kitchen`, lastModified: contentRefreshDate, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${baseUrl}/finance-software`, lastModified: contentRefreshDate, changeFrequency: 'weekly', priority: 0.75 },
  { url: `${baseUrl}/health-fitness`, lastModified: contentRefreshDate, changeFrequency: 'weekly', priority: 0.75 },
  { url: `${baseUrl}/mahjong`, lastModified: guideDate, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${baseUrl}/mahjong/best-mahjong-sets-for-beginners`, lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/mahjong/best-american-mahjong-sets-on-amazon`, lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/mahjong/best-travel-mahjong-sets`, lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/mahjong/best-mahjong-cards`, lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/mahjong/best-mahjong-accessories`, lastModified: guideDate, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/mahjong/how-to-choose-a-mahjong-set`, lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/mahjong/best-book-to-learn-mahjong`, lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/mahjong/mahjong-set-vs-mahjong-card`, lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/home-kitchen/best-dorm-room-essentials`, lastModified: '2026-07-07', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/home-kitchen/best-study-desk-essentials`, lastModified: '2026-07-07', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/home-kitchen/best-productivity-products-for-students`, lastModified: '2026-07-07', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/home-kitchen/best-tech-for-college-students`, lastModified: '2026-07-07', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/home-kitchen/best-back-to-school-gadgets`, lastModified: '2026-07-07', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/home-kitchen/best-dorm-organization-products`, lastModified: '2026-07-07', changeFrequency: 'monthly', priority: 0.85 },
  { url: `${baseUrl}/home-kitchen/oxo-vs-chefn-corn-stripper`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/oxo-vs-fullstar-avocado-slicer`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-solar-powered-attic-fans`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-kids-fort-for-girls-2026`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/instant-pot-vs-ninja-foodi`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-robot-vacuums`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-coffee-makers-under-100`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-air-fryers`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-halloween-candy-deals-on-amazon`, lastModified: '2026-09-19', changeFrequency: 'weekly', priority: 0.85 },
  { url: `${baseUrl}/home-kitchen/best-fall-clothes-for-couples`, lastModified: '2026-09-19', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/home-kitchen/best-vintage-countertop-milkshake-machines-ebay`, lastModified: '2026-07-06', changeFrequency: 'monthly', priority: 0.8 },
  ...techSlugs.map(({ slug, date }) => ({
    url: `${baseUrl}/tech/${slug}`,
    lastModified: date,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  })),
]

export const beautyPages: SitemapEntry[] = [
  { url: `${baseUrl}/beauty/dyson-airwrap-vs-shark-flexstyle-for-fine-flat-hair`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/beauty/best-led-mask-for-melasma-and-hyperpigmentation`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/beauty/is-omnilux-contour-worth-it`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/beauty/nuface-trinity-plus-vs-foreo-bear-2-vs-myolift-qt`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/beauty`, lastModified: contentRefreshDate, changeFrequency: 'weekly', priority: 0.92 },
  { url: `${baseUrl}/beauty/vitamin-c-vs-niacinamide`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/beauty/retinol-vs-bakuchiol-for-sensitive-skin`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/beauty/salicylic-acid-vs-benzoyl-peroxide`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/beauty/dr-dennis-gross-vs-omnilux-contour`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  ...beautyComparisonArticles.map((article) => ({
    url: `${baseUrl}/beauty/${article.slug}`,
    lastModified: contentRefreshDate,
    changeFrequency: 'monthly' as const,
    priority: 0.88,
  })),
]

export const coffeePages: SitemapEntry[] = [
  { url: `${baseUrl}/coffee/complete-small-kitchen-home-coffee-bar-setup`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/coffee/best-gaggia-classic-pro-upgrades`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/coffee/what-to-buy-with-your-breville-bambino-plus`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  ...buyingGuides.filter(g => g.silo === 'coffee').map(g => ({ url: `${baseUrl}/${g.silo}/${g.slug}`, lastModified: g.date ?? guideDate, changeFrequency: 'monthly' as const, priority: 0.85 })),
  { url: `${baseUrl}/coffee`, lastModified: guideDate, changeFrequency: 'weekly', priority: 0.92 },
  { url: `${baseUrl}/coffee/best-vintage-coffee-grinders-ebay`, lastModified: '2026-07-06', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/coffee/breville-bambino-plus-vs-gaggia-classic-pro`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  ...coffeeComparisonArticles.map((article) => ({
    url: `${baseUrl}/coffee/${article.slug}`,
    lastModified: article.slug === 'baratza-encore-esp-vs-fellow-opus-2' ? '2026-09-19' : contentRefreshDate,
    changeFrequency: 'monthly' as const,
    priority: 0.88,
  })),
]

export const wfhPages: SitemapEntry[] = [
  { url: `${baseUrl}/wfh/best-ergonomic-chairs-for-sciatica-and-lower-back-pain`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/wfh/standing-desk-setup-for-dual-monitor-ultrawide-workflow`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/wfh/ultimate-kitchen-table-home-office-setup`, lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.8 },
  ...buyingGuides.filter(g => g.silo === 'wfh').map(g => ({ url: `${baseUrl}/${g.silo}/${g.slug}`, lastModified: g.date ?? guideDate, changeFrequency: 'monthly' as const, priority: 0.85 })),
  { url: `${baseUrl}/wfh`, lastModified: guideDate, changeFrequency: 'weekly', priority: 0.92 },
  { url: `${baseUrl}/wfh/best-products-for-your-home-office`, lastModified: '2026-07-07', changeFrequency: 'monthly', priority: 0.9 },
  { url: `${baseUrl}/wfh/best-used-herman-miller-aeron-chairs-ebay`, lastModified: '2026-07-06', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/wfh/best-portable-monitors-under-100-ebay`, lastModified: '2026-07-06', changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/wfh/secretlab-titan-evo-vs-ergotune-supreme`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/wfh/autonomous-ergochair-pro-vs-hinomi-h1-pro`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/wfh/purple-royal-seat-cushion-vs-cushion-lab`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/wfh/fully-jarvis-vs-uplift-v2-standing-desk`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  { url: `${baseUrl}/wfh/ergotron-lx-vs-amazon-basics-monitor-arm`, lastModified: contentRefreshDate, changeFrequency: 'monthly', priority: 0.88 },
  ...wfhComparisonArticles.filter(article => !buyingGuides.some(g => g.silo === 'wfh' && g.slug === article.slug)).map((article) => ({
    url: `${baseUrl}/wfh/${article.slug}`,
    lastModified: contentRefreshDate,
    changeFrequency: 'monthly' as const,
    priority: 0.88,
  })),
]

export const booksPages: SitemapEntry[] = [
  ...buyingGuides.filter(g => g.silo === 'books').map(g => ({ url: `${baseUrl}/${g.silo}/${g.slug}`, lastModified: g.date ?? guideDate, changeFrequency: 'monthly' as const, priority: 0.85 })),
  ...standaloneBookPages,
  ...articlesData.map((article) => ({
    url: `${baseUrl}${getBookPath(article.slug)}`,
    lastModified: latestDate(article.publishedDate, contentRefreshDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  })),
]

export function buildSitemapXml(entries: SitemapEntry[]) {
  const canonicalEntries = new Map<string, SitemapEntry>()
  for (const entry of entries) {
    const url = new URL(entry.url)
    if (url.origin !== baseUrl || url.search || url.hash) {
      throw new Error(`Invalid sitemap URL: ${entry.url}`)
    }
    const existing = canonicalEntries.get(entry.url)
    if (!existing || entry.lastModified > existing.lastModified) canonicalEntries.set(entry.url, entry)
  }
  const items = [...canonicalEntries.values()]
    .map(
      (entry) => `<url><loc>${entry.url}</loc><lastmod>${entry.lastModified}</lastmod><changefreq>${entry.changeFrequency}</changefreq><priority>${entry.priority.toFixed(1)}</priority></url>`
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}</urlset>`
}

export function buildSitemapIndexXml() {
  const sitemaps = [
    { url: `${baseUrl}/sitemap-main.xml`, lastModified: mainPages.reduce((latest, entry) => latestDate(latest, entry.lastModified), contentRefreshDate) },
    { url: `${baseUrl}/sitemap-books.xml`, lastModified: booksPages.reduce((latest, entry) => latestDate(latest, entry.lastModified), contentRefreshDate) },
    { url: `${baseUrl}/sitemap-beauty.xml`, lastModified: beautyPages.reduce((latest, entry) => latestDate(latest, entry.lastModified), contentRefreshDate) },
    { url: `${baseUrl}/sitemap-coffee.xml`, lastModified: coffeePages.reduce((latest, entry) => latestDate(latest, entry.lastModified), contentRefreshDate) },
    { url: `${baseUrl}/sitemap-wfh.xml`, lastModified: wfhPages.reduce((latest, entry) => latestDate(latest, entry.lastModified), contentRefreshDate) },
    { url: `${baseUrl}/sitemap-es.xml`, lastModified: '2026-07-07' },
  ]
    .map(
      (sitemap) =>
        `<sitemap><loc>${sitemap.url}</loc><lastmod>${sitemap.lastModified}</lastmod></sitemap>`
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps}</sitemapindex>`
}
