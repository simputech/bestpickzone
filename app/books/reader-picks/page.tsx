import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesByCategory } from '@/lib/books-data';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Reader-Intent Book Lists — Beach Reads, Book Clubs, One-Sitting Reads & More | BestPickZone',
  description:
    'Curated book lists for every reading mood and situation: beach reads, book club picks, one-sitting reads, audiobooks, feel-good books, and 25 more intent-based lists.',
  alternates: { canonical: 'https://bestpickzone.com/books/reader-picks' },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Reader-Intent Lists' },
];

export default function ReaderPicksHubPage() {
  const articles = getArticlesByCategory('reader-intent');
  const featured = articles
    .filter((article) =>
      ['best-book-club-books', 'best-audiobooks-on-audible', 'best-books-of-all-time'].includes(article.slug)
    );
  const newReleaseSpotlights = [
    {
      href: '/books/reader-picks/best-true-crime-books',
      title: 'Best True Crime Books',
      text: 'A stronger true-crime path arranged by reader intention: literary classic, investigative epic, insider account, and victim-centered reporting.',
    },
    {
      href: '/books/best-short-classic-books-for-a-flight',
      title: 'Best Short Classic Books for a Flight',
      text: 'A travel-specific classics page for readers who want something serious that still fits airport attention spans.',
    },
    {
      href: '/books/books-like-it-ends-with-us',
      title: 'Books Like It Ends With Us',
      text: 'A dedicated emotional-fiction readalike page for readers who want more than a generic BookTok romance list.',
    },
    {
      href: '/books/reader-picks/best-new-books-june-2026',
      title: 'Best New Books in June 2026',
      text: 'A stronger current-month guide for readers who care about fresh releases, not just evergreen lists.',
    },
    {
      href: '/books/reader-picks/best-new-books-april-2026',
      title: 'Best New Books in April 2026',
      text: 'Useful for comparing the spring release stack against June’s lineup.',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Reader-Intent Book Lists',
    description: 'Book lists organized by reader mood, situation, and intent.',
    url: 'https://bestpickzone.com/books/reader-picks',
    publisher: { '@type': 'Organization', name: 'BestPickZone' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900">Reader-Intent Book Lists</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            These are the lists people usually search for when genre is not the real question.
            You already know the occasion: book club, beach trip, audiobook commute, reluctant
            reader, one-sitting page-turner, or “I want something like Harry Potter.” Each guide
            is meant to solve that exact reading problem quickly, with a clear winner and honest
            caveats instead of a bloated pile of twenty interchangeable picks.
          </p>
        </header>

        <section className="mb-12 rounded-[28px] border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-orange-50 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700">
            Most Useful First Clicks
          </p>
          <h2 className="mb-5 text-2xl font-bold text-gray-900">Three intent pages readers usually need first</h2>
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

        <section className="mb-12 rounded-[28px] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-yellow-50 p-6 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            New release guides
          </p>
          <h2 className="mb-5 text-2xl font-bold text-gray-900">Month-by-month release pages with stronger freshness signals</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {newReleaseSpotlights.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">{guide.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{guide.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/books/${article.slug}`}
              className="card-hover bg-white rounded-xl border border-gray-200 p-5 shadow-sm no-underline block"
            >
              <h2 className="mb-2 text-lg font-bold text-gray-900">{article.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                {article.metaDescription}
              </p>
              <span className="text-sm font-semibold text-blue-600 mt-3 block">
                Read guide →
              </span>
            </Link>
          ))}
     