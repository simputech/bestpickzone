import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import { getArticlesByCategory } from '@/lib/books-data'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ItemListJsonLd from '@/components/seo/ItemListJsonLd'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best Genre Fiction Books — Thrillers, Fantasy, Romance & More | BestPickZone',
  description:
    'The best books in every fiction genre: psychological thrillers, fantasy series, dark romance, cozy mysteries, historical fiction, sci-fi, horror, and more.',
  alternates: { canonical: 'https://bestpickzone.com/books/genre-fiction' },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  category: 'genre-fiction' })

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Genre Fiction' },
]

export default function GenreFictionHubPage() {
  const articles = getArticlesByCategory('genre')
  const editorSpotlights = [
    {
      href: '/books/genre-fiction/best-civil-war-soldier-memoirs',
      title: 'Best Civil War Soldier Memoirs',
      text: 'A first-hand Civil War reading guide ranked around authenticity, voice, and whether you want battlefield drama or camp-life detail.',
    },
    {
      href: '/books/best-historical-fiction-books-2026',
      title: 'Best Historical Fiction Books In 2026',
      text: 'A stronger current-year historical-fiction guide built around reading mood, not just era labels.',
    },
    {
      href: '/books/genre-fiction/best-historical-fiction-books',
      title: 'Best Historical Fiction Books',
      text: 'A broader evergreen historical-fiction guide arranged by reader type instead of publication year.',
    },
    {
      href: '/books/genre-fiction/best-historical-epics-2026',
      title: 'Best Historical Epics to Read in 2026',
      text: 'A heavier long-form historical-fiction page for readers choosing between Follett, Clavell, Verghese, and other big-commitment epics.',
    },
    {
      href: '/books/genre-fiction/best-wwii-novels-2026',
      title: 'Best WWII Novels to Read in 2026',
      text: 'A start-here WWII fiction page ranked by emotional weight, prose style, and the kind of reader each novel fits best.',
    },
    {
      href: '/books/books-like-fourth-wing-fantasy-romance',
      title: 'Books Like Fourth Wing',
      text: 'A romantasy readalike page for readers chasing dragon-school pressure, trials, and dangerous attraction.',
    },
    {
      href: '/books/top-fantasy-romance-novels',
      title: 'Top Fantasy Romance Novels to Read in 2026',
      text: 'A broader romantasy listicle built for readers deciding between ACOTAR, Fourth Wing, vampire picks, fairytale picks, and the best 2026 release.',
    },
    {
      href: '/books/best-cyberpunk-novels-all-time',
      title: 'Best Cyberpunk Novels Of All Time',
      text: 'A tighter neon-and-corporate-rot page for readers who want the genre’s foundational books.',
    },
    {
      href: '/books/best-psychological-thrillers-with-mind-bending-twists',
      title: 'Best Psychological Thrillers With Mind-Bending Twists',
      text: 'A twist-first thriller page for readers who care about destabilizing reveals that still hold up afterward.',
    },
    {
      href: '/books/books-like-dune-hard-sci-fi',
      title: 'Books Like Dune',
      text: 'A hard-sci-fi readalike page built around imperial politics, ecology, and system-scale thinking.',
    },
    {
      href: '/books/best-urban-fantasy-series-completed',
      title: 'Best Completed Urban Fantasy Series',
      text: 'A finished-series guide for readers who want payoff, not another endless urban-fantasy commitment.',
    },
    {
      href: '/books/best-spy-thrillers-realistic',
      title: 'Best Realistic Spy Thrillers',
      text: 'A cleaner espionage page for readers who want tradecraft, bureaucracy, and institutional rot over action-fantasy spy fiction.',
    },
    {
      href: '/books/best-cozy-mystery-series-to-read',
      title: 'Best Cozy Mystery Series To Read',
      text: 'A series-first companion for readers who want comfort, recurring sleuths, and lower-gore mystery momentum.',
    },
    {
      href: '/books/best-sci-fi-doorstoppers-epic-space-opera',
      title: 'Best Sci-Fi Doorstoppers and Epic Space Opera',
      text: 'A giant-book guide for readers who want scale, politics, and fleet-level science-fiction sprawl.',
    },
    {
      href: '/books/genre-fiction/devils-guard-review',
      title: "Devil's Guard Review",
      text: 'A tighter single-book review for readers searching the WWII-to-Indochina angle specifically.',
    },
    {
      href: '/books/genre-fiction/best-world-war-ii-books',
      title: 'Best Books About World War II',
      text: 'The better first stop if you want the strongest WWII books overall before chasing cult titles.',
    },
    {
      href: '/books/genre-fiction/best-military-fiction-books',
      title: 'Best Military Fiction Books',
      text: 'A more genre-wide path when intensity and combat storytelling matter more than one specific title.',
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Best Genre Fiction Books',
    description: 'Curated book guides for every fiction genre.',
    url: 'https://bestpickzone.com/books/genre-fiction',
    publisher: { '@type': 'Organization', name: 'BestPickZone' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />
        <ItemListJsonLd
          name="Genre Fiction Book Guides"
          items={articles.map((article) => ({ name: article.title, path: `/books/${article.slug}` }))}
        />

        <header className="mb-10">
          <h1
            className="mb-4 text-4xl font-extrabold text-gray-900"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Best Genre Fiction Books
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Genre fiction is where most readers live — and for good reason. Whether you crave
            a psychological thriller that keeps you up past midnight, an immersive fantasy
            series you can disappear into for weeks, or a dark romance that breaks your heart
            in the best possible way, we&apos;ve built a complete guide for every genre. Each
            list below is organized by what different readers will enjoy most, with honest
            &quot;skip this if&quot; advice to help you choose wisely.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/books/${article.slug}`}
              className="card-hover block rounded-xl border border-gray-200 bg-white p-5 shadow-sm no-underline"
            >
              <h2
                className="mb-2 text-lg font-bold text-gray-900"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {article.title}
              </h2>
              <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                {article.metaDescription}
              </p>
              <span className="mt-3 block text-sm font-semibold text-blue-600">
                Read guide →
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-12 rounded-[28px] border border-stone-200 bg-gradient-to-br from-stone-100 via-white to-amber-50 p-6 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
            Genre spotlight
          </p>
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            Standalone genre pages worth crawling next
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {editorSpotlights.map((spotlight) => (
              <Link
                key={spotlight.href}
                href={spotlight.href}
                className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">{spotlight.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{spotlight.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <Link href="/books" className="text-sm font-medium text-blue-600 hover:underline">
            ← Back to All Books
          </Link>
        </div>
      </main>
    </>
  )
}
