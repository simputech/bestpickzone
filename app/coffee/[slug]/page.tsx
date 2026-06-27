import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import HtmlComparisonArticlePage from '@/components/article/HtmlComparisonArticlePage'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { coffeeComparisonArticles } from '@/lib/comparison-html-articles'

type Params = { slug: string }

function getArticle(slug: string) {
  return coffeeComparisonArticles.find((article) => article.slug === slug)
}

export function generateStaticParams() {
  return coffeeComparisonArticles.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = getArticle(params.slug)

  if (!article) {
    return {}
  }

  const pageUrl = `https://bestpickzone.com/coffee/${article.slug}`

  return withArticleMetadataDefaults({
    title: article.title,
    description: article.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: article.ogTitle,
      description: article.ogDescription,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.twitterTitle,
      description: article.twitterDescription,
    },
  }, {
  publishedTime: '2026-01-01T00:00:00Z',
  url: pageUrl, category: 'coffee', section: 'Coffee' })
}

export default function CoffeeComparisonArticlePage({ params }: { params: Params }) {
  const article = getArticle(params.slug)

  if (!article) {
    notFound()
  }

  return <HtmlComparisonArticlePage article={article} />
}
