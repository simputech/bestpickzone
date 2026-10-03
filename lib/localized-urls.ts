import { spanishArticles, spanishSections } from './spanish-site-data'

export const SITE_ORIGIN = 'https://bestpickzone.com'

// Derive both directions from the published Spanish inventory. Adding a Spanish
// page here automatically gives its English equivalent the same hreflang set.
export const localizedUrlPairs: ReadonlyArray<Readonly<{ en: string; es: string }>> = [
  { en: '/', es: '/es' },
  ...spanishSections.map((section) => ({
    en: section.englishPath,
    es: `/es/${section.slug}`,
  })),
  ...spanishArticles.map((article) => ({
    en: article.englishPath,
    es: `/es/${article.section}/${article.slug}`,
  })),
]

const pairsByPath = new Map<string, (typeof localizedUrlPairs)[number]>()
for (const pair of localizedUrlPairs) {
  for (const path of [pair.en, pair.es]) {
    if (pairsByPath.has(path)) throw new Error(`Duplicate localized URL: ${path}`)
    pairsByPath.set(path, pair)
  }
}

export function getLocalizedLanguages(urlOrPath?: string) {
  if (!urlOrPath) return undefined
  let url: URL
  try {
    url = new URL(urlOrPath, SITE_ORIGIN)
  } catch {
    return undefined
  }
  if (url.origin !== SITE_ORIGIN) return undefined
  const path = url.pathname.replace(/\/+$/, '') || '/'
  const pair = pairsByPath.get(path)
  if (!pair) return undefined

  return {
    en: new URL(pair.en, SITE_ORIGIN).href,
    es: new URL(pair.es, SITE_ORIGIN).href,
    'x-default': new URL(pair.en, SITE_ORIGIN).href,
  }
}
