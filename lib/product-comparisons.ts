export type ComparisonSpecRow = {
  label: string
  productA: string
  productB: string
}

export type ComparisonFaq = {
  question: string
  answer: string
}

export type ComparisonRelatedLink = {
  href: string
  label: string
}

export type ComparisonProductSection = {
  name: string
  shortName: string
  amazonQuery: string
  verdict: string
  question: string
  snippetAnswer: string
  paragraphs: string[]
  pros: string[]
  cons: string[]
  skipIf: string
}

export type ComparisonPageData = {
  title: string
  intro: string[]
  disclosure: string
  lastVerified: string
  heroImage: {
    src: string
    alt: string
    width: number
    height: number
  }
  specs: ComparisonSpecRow[]
  productA: ComparisonProductSection
  productB: ComparisonProductSection
  faq: ComparisonFaq[]
  relatedLinks: ComparisonRelatedLink[]
  closing: {
    title: string
    paragraphs: string[]
  }
}

// Verification contract for all comparison articles:
// - Manufacturer spec pages are the source of truth for hardware specs.
// - Retailers are used for live price and availability only.
// - If a figure cannot be verified from an allowed source, do not render it.
// - Hero and section images live under /public/images/{silo}/ to avoid hotlinking.
export function amazonSearchUrl(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=althcu-20`
}
