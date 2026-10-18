import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import FaqJsonLd, { extractFaqPairs } from '@/components/seo/FaqJsonLd'
import ArticleAmazonProducts from './ArticleAmazonProducts'

export type HtmlComparisonArticle = {
  slug: string
  silo: 'coffee' | 'beauty' | 'wfh'
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  twitterTitle: string
  twitterDescription: string
  /** Set only after a documented substantive editorial refresh. */
  modifiedDate?: string
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
  // Rebuilt articles lead with disclosure and the buying decision, not a decorative image.
  // Leave legacy ordering unchanged until that article is independently refreshed.
  const firstParagraph = article.bodyHtml.match(/^\s*(<p>[\s\S]*?<\/p>)/)?.[1] ?? ''
  const disclosure = article.modifiedDate && /affiliate disclosure/i.test(firstParagraph) ? firstParagraph : ''
  const remainingBody = disclosure ? article.bodyHtml.replace(disclosure, '').trimStart() : article.bodyHtml
  const firstSection = article.modifiedDate ? remainingBody.indexOf('<h2') : -1
  const opening = firstSection > 0 ? remainingBody.slice(0, firstSection) : ''
  const body = opening ? remainingBody.slice(firstSection) : remainingBody
  // Keyboard and mobile access must not depend on an editorial date being advanced.
  const responsiveTables = (html: string) => html
    .replace(/<table>/g, '<p class="text-sm text-gray-600 sm:hidden">Swipe or scroll the table to see all columns.</p><div role="region" aria-label="Comparison table: scroll horizontally to see all columns" tabindex="0" class="mb-8 max-w-full overflow-x-auto rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-700"><table class="min-w-[36rem]">')
    .replace(/<\/table>/g, '</table></div>')
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <BreadcrumbJsonLd
        trail={[
          { name: 'Home', path: '/' },
          { name: siloLabels[article.silo], path: `/${article.silo}` },
          { name: article.title },
        ]}
      />
      <FaqJsonLd faqs={extractFaqPairs(article.bodyHtml)} />
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
        {disclosure ? <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950" dangerouslySetInnerHTML={{ __html: disclosure }} /> : null}
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Product Comparison</p>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">{article.title}</h1>
        {article.modifiedDate ? <p className="mb-5 text-sm text-gray-600">Updated <time dateTime={article.modifiedDate}>{new Date(`${article.modifiedDate}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</time> · Researched comparison, not a hands-on test.</p> : null}
        {opening ? <div className="comparison-html text-gray-700" dangerouslySetInnerHTML={{ __html: responsiveTables(opening) }} /> : null}
        {article.heroImage ? (
          <img
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            width={article.heroImage.width}
            height={article.heroImage.height}
            className="mb-8 w-full rounded-2xl border border-gray-200 object-cover shadow-sm"
          />
        ) : null}
        <div className="comparison-html text-gray-700" dangerouslySetInnerHTML={{ __html: responsiveTables(body) }} />
        <ArticleAmazonProducts path={`/${article.silo}/${article.slug}`} />
      </article>
    </main>
  )
}
