import {
  baseUrl,
  beautyPages,
  coffeePages,
  mainPages,
  wfhPages,
  type SitemapEntry,
} from '@/lib/sitemap-data'

export type SiteSectionKey =
  | 'beauty'
  | 'coffee'
  | 'finance-software'
  | 'health-fitness'
  | 'home-kitchen'
  | 'tech'
  | 'wfh'

export type SectionLink = {
  href: string
  title: string
}

export type SiteSection = {
  key: SiteSectionKey
  href: `/${SiteSectionKey}`
  title: string
  description: string
}

export const siteSections: SiteSection[] = [
  {
    key: 'beauty',
    href: '/beauty',
    title: 'Beauty',
    description: 'Ingredient comparisons, beauty-device matchups, and routine-buying guides.',
  },
  {
    key: 'coffee',
    href: '/coffee',
    title: 'Coffee',
    description: 'Espresso, grinder, kettle, and brewer comparisons built around specs and workflow.',
  },
  {
    key: 'finance-software',
    href: '/finance-software',
    title: 'Finance & Software',
    description: 'Budgeting, privacy, and software buying guides as this section expands.',
  },
  {
    key: 'health-fitness',
    href: '/health-fitness',
    title: 'Health & Fitness',
    description: 'Fitness gear and training-product guides for clearer, more confident buying decisions.',
  },
  {
    key: 'home-kitchen',
    href: '/home-kitchen',
    title: 'Home & Kitchen',
    description: 'Appliances, dorm setups, countertop tools, and kitchen comparison pages.',
  },
  {
    key: 'tech',
    href: '/tech',
    title: 'Tech',
    description: 'Laptop, monitor, earbuds, and keyboard recommendations for high-intent buyers.',
  },
  {
    key: 'wfh',
    href: '/wfh',
    title: 'WFH',
    description: 'Ergonomic chairs, desks, monitor arms, and calmer home-office setup guides.',
  },
]

function toPath(entry: SitemapEntry) {
  return entry.url.replace(baseUrl, '') || '/'
}

function titleFromPath(pathname: string) {
  return pathname
    .split('/')
    .filter(Boolean)
    .pop()
    ?.split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ') ?? pathname
}

function buildLinks(entries: SitemapEntry[], hubPath: string) {
  return entries
    .map((entry) => toPath(entry))
    .filter((pathname) => pathname !== hubPath)
    .map((href) => ({ href, title: titleFromPath(href) }))
}

const sectionArticleLinks: Record<SiteSectionKey, SectionLink[]> = {
  beauty: buildLinks(beautyPages, '/beauty'),
  coffee: buildLinks(coffeePages, '/coffee'),
  'finance-software': [],
  'health-fitness': [],
  'home-kitchen': buildLinks(
    mainPages.filter((entry) => toPath(entry).startsWith('/home-kitchen/')),
    '/home-kitchen'
  ),
  tech: buildLinks(
    mainPages.filter((entry) => toPath(entry).startsWith('/tech/')),
    '/tech'
  ),
  wfh: buildLinks(wfhPages, '/wfh'),
}

export function getSectionArticleLinks(section: SiteSectionKey) {
  return sectionArticleLinks[section]
}

export function getSectionFromPathname(pathname: string): SiteSectionKey | null {
  const match = siteSections.find(
    (section) => pathname === section.href || pathname.startsWith(`${section.href}/`)
  )

  return match?.key ?? null
}
