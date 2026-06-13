import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesByCategory } from '@/lib/books-data';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Best Books by Author — Stephen King, Colleen Hoover & More | BestPickZone',
  description:
    "Author-by-author reading guides covering Stephen King, Colleen Hoover, James Clear, Malcolm Gladwell, and 11 more. Find the best books from your favorite author.",
  alternates: { canonical: 'https://bestpickzone.com/books/authors' },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'By Author' },
];

const priorityAuthorGuideSlugs = [
  'best-james-clear-books',
  'best-james-patterson-books',
  'best-brene-brown-books',
  'best-jk-rowling-books',
  'best-john-grisham-books',
  'best-nora-roberts-books',
  'best-neil-gaiman-books',
  'best-george-orwell-books',
  'best-haruki-murakami-books',
  'best-toni-morrison-books',
] as const;

const standaloneAuthorSpotlights = [
  {
    href: '/books/authors/best-patrick-radden-keefe-books',
    title: 'Best Patrick Radden Keefe Books',
    text: 'A richer standalone nonfiction author guide with start-here logic, investigative maps, and clear book-by-book tradeoffs.',
  },
  {
    href: '/books/authors/best-lee-child-books',
    title: 'Best Lee Child Books in Order',
    text: 'The strongest currently published standalone guide in this section for series-entry logic and what to skip.',
  },
];

export default function AuthorsHubPage() {
  const articles = getArticlesByCategory('author');
  const priorityArticles = priorityAuthorGuideSlugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article): article is (typeof articles)[number] => Boolean(article));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Best Books by Author',
    description: 'Curated reading guides for the world\'s most popular authors.',
    url: 'https://bestpickzone.com/books/authors',
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
          <h1
            className="text-4xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Best Books by Author
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Not sure where to start with a new author? Each guide below covers the essential
            reads — ranked by quality, accessibility, and what kind of reader will love them
            most. We cover Stephen King's scariest page-turners, Colleen Hoover's most
            emotional romances, James Clear's productivity framework, and 12 more household
            names. Every recommendation includes an honest "skip this if" note so you never
            waste time on the wrong book.
          </p>
        </header>

        <section className="mb-10 rounded-[28px] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Priority Author Roundups
          </p>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Author guides we want crawled and indexed next</h2>
          <p className="mb-5 text-sm leading-relaxed text-gray-600">
            These links point directly to the priority author pages that need stronger crawl paths from the author hub.
            The anchor text is intentionally descriptive so search engines and readers can both understand what each page covers.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {priorityArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/books/${article.slug}`}
                className="rounded-2xl border border-white bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:text-blue-700"
              >
                {article.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-[28px] border border-stone-200 bg-gradient-to-br from-stone-100 via-white to-yellow-50 p-6 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
            Standalone Author Guides
          </p>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Richer editorial pages outside the generic author grid</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {standaloneAuthorSpotlights.map((guide) => (
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
              <h2
                className="text-lg font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                {article.metaDescription}
              </p>
              <span className="text-sm font-semibold text-blue-600 mt-3 block">
                Read guide →
              </span>
            </Link>
          ))}
        </section>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <Link href="/books" className="text-blue-600 hover:underline text-sm font-medium">
            ← Back to All Books
          </Link>
        </div>
      </main>
    </>
  );
}
