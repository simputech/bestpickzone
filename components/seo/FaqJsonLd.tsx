export type FaqPair = {
  question: string
  answer: string
}

export function buildFaqJsonLd(faqs: FaqPair[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

function stripHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// Handles the two FAQ markup patterns used across the site:
// 1. <details><summary>Q</summary> ...answer... </details>
// 2. <h3>Frequently asked questions</h3> followed by <p><strong>Q</strong> A</p> blocks
export function extractFaqPairs(html: string): FaqPair[] {
  const pairs: FaqPair[] = []

  for (const match of html.matchAll(/<details[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/gi)) {
    const question = stripHtml(match[1])
    const answer = stripHtml(match[2])
    if (question && answer) {
      pairs.push({ question, answer })
    }
  }

  if (pairs.length > 0) {
    return pairs
  }

  const faqHeading = html.match(/<h[23][^>]*>\s*(?:FAQs?|Frequently asked questions)\s*<\/h[23]>/i)
  if (faqHeading) {
    const rest = html.slice(faqHeading.index! + faqHeading[0].length)
    for (const match of rest.matchAll(/<p[^>]*>\s*<strong[^>]*>([\s\S]*?)<\/strong>([\s\S]*?)<\/p>/gi)) {
      const question = stripHtml(match[1])
      const answer = stripHtml(match[2])
      if (question.endsWith('?') && answer) {
        pairs.push({ question, answer })
      }
    }
  }

  return pairs
}

export default function FaqJsonLd({ faqs }: { faqs: FaqPair[] }) {
  if (faqs.length === 0) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd(faqs)) }}
    />
  )
}
