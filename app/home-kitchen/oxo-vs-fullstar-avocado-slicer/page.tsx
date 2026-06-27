import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import CommerceShowdownArticlePage from '@/components/article/CommerceShowdownArticlePage'
import { avocadoShowdownArticle } from '@/lib/home-kitchen-showdowns'

const article = avocadoShowdownArticle
const pageUrl = `https://bestpickzone.com/home-kitchen/${article.slug}`

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  datePublished: article.publishedDate,
  dateModified: article.updatedDate,
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: { '@type': 'Organization', name: 'BestPickZone' },
  mainEntityOfPage: pageUrl,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: article.faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export const metadata: Metadata = withArticleMetadataDefaults({
  title: article.title,
  description: article.description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `${article.title}: Which One Is Better?`,
    description: article.description,
    url: pageUrl,
    type: 'article',
  },
}, { category: 'home-kitchen' })

export default function OxoVsFullstarAvocadoSlicerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CommerceShowdownArticlePage article={article} />
    </>
  )
}
