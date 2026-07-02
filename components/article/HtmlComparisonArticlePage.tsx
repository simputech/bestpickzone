import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'

export type HtmlComparisonArticle = {
  slug: string
  silo: 'coffee' | 'beauty' | 'wfh'
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  twitterTitle: string
  twitterDescription: string
  heroImage?: {
    src: string
    alt: string
    width: number
    height: number
  }
  bodyHtml: string
}

const siloLabels: Record<HtmlComparisonArticle['silo'], string> = {
  coffee: 'Coffee',
  beauty: 'Beauty',
  wfh: 'WFH',
}

export default function HtmlComparisonArticlePage({ article }: { article: HtmlComparisonArticle }) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <BreadcrumbJsonLd
        trail={[
          { name: 'Home', path: '/' },
          { name: siloLabels[article.silo], path: `/${article.silo}` },
          { name: article.title },
        ]}
      />
      <nav className="mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-amber-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/${article.silo}`} className="hover:text-amber-700">
          {siloLabels[article.silo]}
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-gray-800">{article.title}</span>
      </nav>

      <article className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Product Comparison</p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">{article.title}</h1>
        {article.heroImage ? (
          <img
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            width={article.heroImage.width}
            height={article.heroImage.height}
            className="mb-8 w-full rounded-2xl border border-gray-200 object-cover shadow-sm"
          />
        ) : null}
        <div className="comparison-html text-gray-700" dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
      </article>
    </main>
  )
}
