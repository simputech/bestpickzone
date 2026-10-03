import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import HtmlComparisonArticlePage from '@/components/article/HtmlComparisonArticlePage'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { buyingGuides } from '@/lib/buying-guide-data'
import { wfhComparisonArticles } from '@/lib/comparison-html-articles'

type Params = { slug: string }

function getArticle(slug: string) {
  return wfhComparisonArticles.find((article) => article.slug === slug)
}

export function generateStaticParams() {
  return wfhComparisonArticles.filter(article => !buyingGuides.some(g => g.silo === 'wfh' && g.slug === article.slug)).map((article) => ({ slug: article.slug }))
}

function resolvePageMetadata({ params }: { params: Params }): Metadata {
  const article = getArticle(params.slug)

  if (!article) {
    return {}
  }

  const pageUrl = `https://bestpickzone.com/wfh/${article.slug}`

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
  url: pageUrl, category: 'wfh', section: 'Work From Home' })
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const resolvedParams = params;
  return withSeo(resolvePageMetadata({ params }), `/wfh/${resolvedParams.slug}`);
}

export default function WfhComparisonArticlePage({ params }: { params: Params }) {
  const article = getArticle(params.slug)

  if (!article) {
    notFound()
  }

  return <HtmlComparisonArticlePage article={article} />
}
