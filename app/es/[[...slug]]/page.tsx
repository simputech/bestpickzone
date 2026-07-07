import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { buildAffiliateTrackingId, getAffiliateUrlWithTracking } from '@/lib/affiliate-links'
import {
  getSpanishArticle,
  getSpanishArticleRecommendations,
  getSpanishArticlesBySection,
  getSpanishRelatedArticles,
  getSpanishStaticPaths,
  spanishSectionMap,
  spanishSections,
} from '@/lib/spanish-site-data'

type Props = {
  params: { slug?: string[] }
}

const homeUrl = 'https://bestpickzone.com/es'

function buildPath(segments?: string[]) {
  return segments?.join('/') ?? ''
}

function titleCaseDate(dateString: string) {
  return new Intl.DateTimeFormat('es', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${dateString}T00:00:00Z`))
}

function buildRecommendationUrl(
  article: NonNullable<ReturnType<typeof getSpanishArticle>>,
  title: string,
  recommendation: ReturnType<typeof getSpanishArticleRecommendations>[number]
) {
  const trackingId = buildAffiliateTrackingId('es', article.section, article.slug, title)

  if (recommendation.affiliateUrl) {
    return getAffiliateUrlWithTracking(
      recommendation.affiliateUrl,
      recommendation.affiliatePlatform,
      trackingId
    )
  }

  const query = recommendation.query ?? title
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=althcu-20`
}

export function generateStaticParams() {
  return getSpanishStaticPaths().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const path = buildPath(params.slug)

  if (!path) {
    return withArticleMetadataDefaults(
      {
        title: 'BestPickZone En Espanol',
        description:
          'La version en espanol de BestPickZone con guias de compra, oficinas en casa, tecnologia, hogar y recomendaciones de lectura.',
        alternates: {
          canonical: homeUrl,
          languages: {
            en: 'https://bestpickzone.com',
            es: homeUrl,
          },
        },
      },
      {
        category: 'wfh',
        metadataType: 'website',
        url: homeUrl,
      }
    )
  }

  const section = params.slug?.[0]
  if (params.slug?.length === 1 && section && section in spanishSectionMap) {
    const sectionData = spanishSectionMap[section as keyof typeof spanishSectionMap]
    return withArticleMetadataDefaults(
      {
        title: `${sectionData.title} En Espanol`,
        description: sectionData.description,
        alternates: {
          canonical: `${homeUrl}/${sectionData.slug}`,
          languages: {
            en: `https://bestpickzone.com${sectionData.englishPath}`,
            es: `${homeUrl}/${sectionData.slug}`,
          },
        },
      },
      {
        category: 'wfh',
        metadataType: 'website',
        url: `${homeUrl}/${sectionData.slug}`,
      }
    )
  }

  if (params.slug?.length === 2 && section) {
    const article = getSpanishArticle(section, params.slug[1])
    if (!article) return {}

    const url = `${homeUrl}/${article.section}/${article.slug}`
    return withArticleMetadataDefaults(
      {
        title: article.title,
        description: article.metaDescription,
        alternates: {
          canonical: url,
          languages: {
            en: `https://bestpickzone.com${article.englishPath}`,
            es: url,
          },
        },
        openGraph: {
          title: article.title,
          description: article.metaDescription,
          url,
          type: 'article',
        },
      },
      {
        category:
          article.section === 'libros'
            ? 'books'
            : article.section === 'tecnologia'
              ? 'tech'
              : article.section === 'hogar-cocina'
                ? 'home-kitchen'
                : 'wfh',
        publishedTime: `${article.publishedDate}T00:00:00Z`,
        modifiedTime: `${article.updatedDate}T00:00:00Z`,
        section: spanishSectionMap[article.section].title,
        url,
        tags: [article.title, spanishSectionMap[article.section].title, 'BestPickZone en espanol'],
      }
    )
  }

  return {}
}

function SpanishHomePage() {
  return (
    <main lang="es" className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-[2rem] border border-amber-200 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_48%,#eff6ff_100%)] px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">BestPickZone En Espanol</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          Guias de compra y lectura en espanol, organizadas para decidir mas rapido.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          Esta seccion reune nuestras traducciones prioritarias para oficina en casa, tecnologia, hogar y libros.
          La idea no es traducir por traducir, sino publicar las paginas que tienen mas potencial real para
          buscarse, compartirse y convertir bien.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {spanishSections.map((section) => (
            <Link
              key={section.slug}
              href={`/es/${section.slug}`}
              className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 transition hover:text-amber-700"
            >
              {section.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {spanishSections.map((section) => {
          const items = getSpanishArticlesBySection(section.slug).slice(0, 6)
          return (
            <div key={section.slug} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900">{section.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-700">{section.description}</p>
              <div className="mt-5 space-y-3">
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/es/${item.section}/${item.slug}`}
                    className="block rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-amber-50"
                  >
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.dek}</p>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}

function SpanishSectionPage({ sectionSlug }: { sectionSlug: keyof typeof spanishSectionMap }) {
  const section = spanishSectionMap[sectionSlug]
  const items = getSpanishArticlesBySection(sectionSlug)

  return (
    <main lang="es" className="mx-auto max-w-5xl px-4 py-10">
      <Breadcrumb items={[{ label: 'Inicio', href: '/es' }, { label: section.title }]} />
      <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Seccion En Espanol</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">{section.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">{section.description}</p>
        <a
          href={`https://bestpickzone.com${section.englishPath}`}
          className="mt-5 inline-flex rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
        >
          Ver la seccion en ingles
        </a>
      </section>

      <section className="mt-10 space-y-5">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/es/${item.section}/${item.slug}`}
            className="block rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-300 hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Actualizado {titleCaseDate(item.updatedDate)}
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-900">{item.title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-700">{item.dek}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}

function SpanishArticlePage({ article }: { article: NonNullable<ReturnType<typeof getSpanishArticle>> }) {
  const related = getSpanishRelatedArticles(article)
  const section = spanishSectionMap[article.section]
  const recommendations = getSpanishArticleRecommendations(article)

  return (
    <main lang="es" className="mx-auto max-w-5xl px-4 py-10">
      <Breadcrumb
        items={[
          { label: 'Inicio', href: '/es' },
          { label: section.title, href: `/es/${section.slug}` },
          { label: article.title },
        ]}
      />

      <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">{section.title}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{article.dek}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-slate-50 px-4 py-2 ring-1 ring-slate-200">
            Publicado {titleCaseDate(article.publishedDate)}
          </span>
          <span className="rounded-full bg-slate-50 px-4 py-2 ring-1 ring-slate-200">
            Actualizado {titleCaseDate(article.updatedDate)}
          </span>
          <a
            href={`https://bestpickzone.com${article.englishPath}`}
            className="rounded-full bg-amber-50 px-4 py-2 font-semibold text-amber-800 ring-1 ring-amber-200 transition hover:bg-amber-100"
          >
            Ver version en ingles
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>{article.intro}</p>
            <p>{article.perspective}</p>
          </div>
          <div className="rounded-[1.75rem] bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Respuesta Rapida</p>
            <p className="mt-3 text-base leading-7 text-slate-700">{article.metaDescription}</p>
          </div>
        </div>
      </article>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Puntos clave</h2>
          <ul className="mt-5 space-y-4">
            {article.keyPoints.map((point) => (
              <li key={point} className="flex gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-amber-600">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fff7ed_100%)] p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Como empezar o comprar mejor</h2>
          <ul className="mt-5 space-y-4">
            {article.buyingTips.map((tip) => (
              <li key={tip} className="flex gap-3 text-base leading-7 text-slate-700">
                <span className="mt-1 text-amber-600">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {recommendations.length > 0 ? (
        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Recomendaciones</p>
              <h2 className="mt-2 text-2xl font-black text-slate-900">
                Productos y libros para comprar desde esta guia
              </h2>
            </div>
            <a
              href={`https://bestpickzone.com${article.englishPath}`}
              className="rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              Ver la lista completa en ingles
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {recommendations.map((recommendation) => {
              const href = buildRecommendationUrl(article, recommendation.title, recommendation)

              return (
                <div
                  key={`${recommendation.title}-${recommendation.affiliateLabel ?? recommendation.query ?? 'amazon'}`}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-xl font-black text-slate-900">{recommendation.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-700">{recommendation.description}</p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className={`mt-4 inline-flex rounded-full px-4 py-3 text-sm font-semibold transition ${
                      recommendation.affiliatePlatform === 'ebay'
                        ? 'bg-sky-600 text-white hover:bg-sky-500'
                        : 'bg-yellow-400 text-slate-900 hover:bg-yellow-300'
                    }`}
                  >
                    {recommendation.affiliateLabel ??
                      (recommendation.affiliatePlatform === 'ebay'
                        ? 'Ver opciones en eBay'
                        : 'Ver en Amazon')}
                  </a>
                </div>
              )
            })}
          </div>
        </section>
      ) : null}

      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-slate-100">
        <h2 className="text-2xl font-black">Tambien te puede interesar</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/es/${item.section}/${item.slug}`}
              className="rounded-3xl bg-slate-800 p-4 transition hover:bg-slate-700"
            >
              <p className="font-semibold">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.dek}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default function SpanishCatchAllPage({ params }: Props) {
  const segments = params.slug ?? []

  if (segments.length === 0) {
    return <SpanishHomePage />
  }

  if (segments.length === 1) {
    const sectionSlug = segments[0]
    if (!(sectionSlug in spanishSectionMap)) notFound()
    return <SpanishSectionPage sectionSlug={sectionSlug as keyof typeof spanishSectionMap} />
  }

  if (segments.length === 2) {
    const article = getSpanishArticle(segments[0], segments[1])
    if (!article) notFound()
    return <SpanishArticlePage article={article} />
  }

  notFound()
}
