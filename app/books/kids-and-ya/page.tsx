import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import { getArticlesByCategory } from '@/lib/books-data'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best Kids & Young Adult Books 2026 — Series, Picture Books & YA | BestPickZone',
  description:
    'The best books for kids and teens: picture books, middle-grade series, YA fantasy, YA romance, reluctant reader picks, and more. Age-matched recommendations parents and kids trust.',
  alternates: { canonical: 'https://bestpickzone.com/books/kids-and-ya' },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  category: 'kids-and-ya' })

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Kids & Young Adult' },
]

export default function KidsYAHubPage() {
  const articles = getArticlesByCategory('kids-ya')
  const featured = articles.slice(0, 3)
  const summerReadingSpotlight = {
    href: '/books/kids-and-ya/best-books-for-12-year-old-boys-summer-2026',
    title: 'Best Books for 12-Year-Old Boys Summer 2026',
    text: 'A high-intent summer reading page built around reader fit: adventure, survival, series momentum, reluctant-reader options, and a clear best overall winner.',
  }
  const summerEditorsPicks = [
    {
      href: '/books/kids-and-ya/best-books-for-12-year-old-boys-summer-2026',
      title: 'Best Books for 12-Year-Old Boys Summer 2026',
      text: 'Age-specific summer reading built for boys who need momentum, not generic age-band filler.',
    },
    {
      href: '/books/kids-and-ya/best-2026-summer-reading-for-12-year-old-girls',
      title: 'Best 2026 Summer Reading for 12-Year-Old Girls',
      text: 'Voice-driven, adventure-ready, and honest about which readers should skip each pick.',
    },
    {
      href: '/books/kids-and-ya/best-2026-summer-reading-for-high-school-students',
      title: 'Best 2026 Summer Reading for High School Students',
      text: 'A more mature reading path for older students or advanced younger readers.',
    },
  ]
  const shopperNotes = [
    {
      title: 'Age matters, but confidence matters too',
      text: 'A strong age match can still miss if the child is tired of long pages, heavy text blocks, or books that feel like school.',
    },
    {
      title: 'Series often beat standalones',
      text: 'When a child finally connects with a book, the best next move is usually keeping them inside that reading streak rather than restarting with something totally new.',
    },
    {
      title: 'Visual reading still counts',
      text: 'Graphic novels, illustrated fiction, and hybrid formats are often the smartest doorway for reluctant or developing readers.',
    },
  ]
  const buyerIntentClusters = [
    {
      title: 'Fast wins for reluctant readers',
      text: 'These pages are better when the goal is finishing a book, building confidence, and keeping the reading streak alive.',
      links: [
        { href: '/books/best-books-for-reluctant-readers', label: 'Best Books for Reluctant Readers' },
        { href: '/books/best-books-for-people-who-dont-like-reading', label: 'Best Books for People Who Do Not Like Reading' },
        { href: '/books/best-kids-book-series', label: 'Best Kids Book Series' },
      ],
    },
    {
      title: 'Age-targeted family shopping',
      text: 'Useful when the buyer already knows the age band and needs cleaner recommendations than a giant generic children’s list.',
      links: [
        { href: '/books/best-bedtime-books-for-toddlers', label: 'Best Bedtime Books for Toddlers' },
        { href: '/books/best-books-for-boys-ages-8-12', label: 'Best Books for Boys Ages 8-12' },
        { href: '/books/best-books-for-girls-ages-8-12', label: 'Best Books for Girls Ages 8-12' },
      ],
    },
    {
      title: 'Older kids and teen crossover readers',
      text: 'These are the better paths when the reader wants series momentum, fantasy worlds, or more mature coming-of-age themes.',
      links: [
        { href: '/books/best-fantasy-books-for-teens', label: 'Best Fantasy Books for Teens' },
        { href: '/books/best-middle-grade-books', label: 'Best Middle Grade Books' },
        { href: '/books/best-ya-coming-of-age-books', label: 'Best YA Coming-of-Age Books' },
      ],
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Best Kids & Young Adult Books',
    description: 'Curated book guides for children and young adult readers.',
    url: 'https://bestpickzone.com/books/kids-and-ya',
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

        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
            Best Kids &amp; Young Adult Books
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Parents and teachers rarely need “the best kids books” in the abstract. They need
            the right book for a specific age, attention span, and reading problem. This section
            is built around that reality: reluctant readers, bedtime books, middle-grade series,
            YA fantasy, and the categories that actually come up when you are trying to match a
            child with the next book they will finish.
          </p>
        </header>

        <section className="mb-12 rounded-[28px] border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Parent Shortlist
          </p>
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            Strong starting points by age and reading confidence
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((article) => (
              <Link
                key={article.slug}
                href={`/books/${article.slug}`}
                className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">{article.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{article.metaDescription}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[28px] border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-6 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
            Summer editorial picks
          </p>
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            Three summer-reading guides worth crawling first
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {summerEditorsPicks.map((pick) => (
              <Link
                key={pick.href}
                href={pick.href}
                className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">{pick.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{pick.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[28px] border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-sm">
          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
                New editorial spotlight
              </p>
              <h2 className="mb-3 text-2xl font-bold text-gray-900">
                {summerReadingSpotlight.title}
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-gray-700">
                {summerReadingSpotlight.text}
              </p>
            </div>
            <div>
              <Link
                href={summerReadingSpotlight.href}
                className="inline-flex rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Read the summer guide
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12 grid gap-4 md:grid-cols-3">
          {shopperNotes.map((note) => (
            <div
              key={note.title}
              className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                What Helps
              </p>
              <h2 className="mb-2 text-lg font-bold text-gray-900">{note.title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">{note.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/books/${article.slug}`}
              className="card-hover block rounded-xl border border-gray-200 bg-white p-5 shadow-sm no-underline"
            >
              <h2 className="mb-2 text-lg font-bold text-gray-900">{article.title}</h2>
              <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                {article.metaDescription}
              </p>
              <span className="mt-3 block text-sm font-semibold text-blue-600">
                Read guide →
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-12 rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            What You Will Find In This Section
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-600">
            These guides cover picture books, early readers, middle-grade series, YA fantasy,
            coming-of-age novels, STEM picks, reluctant-reader pathways, and age-specific lists
            for boys and girls. The goal is to make this section feel more like a smart
            children&apos;s books desk than a thin directory of titles.
          </p>
        </section>

        <section className="mt-12 rounded-[28px] border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Browse by the child in front of you</h2>
          <p className="mb-5 max-w-3xl text-sm leading-relaxed text-gray-600">
            The most useful kids-book pages are the ones that respect how differently children read. These internal
            paths are organized around real shopping situations instead of one-size-fits-all children&apos;s-book advice.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {buyerIntentClusters.map((cluster) => (
              <div key={cluster.title} className="rounded-3xl border border-white bg-white p-5 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-gray-900">{cluster.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">{cluster.text}</p>
                <ul className="space-y-2">
                  {cluster.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm font-medium text-blue-600 hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
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
