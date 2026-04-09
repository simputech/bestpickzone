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
          <h1
            className="text-4xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Reader-Intent Book Lists
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Sometimes you don't know the genre you want — you know the situation. You're
            packing for a beach trip, you're hosting a book club, you want something you can
            finish in one afternoon, or you're looking for the exact kind of book you can
            give to someone who claims they don't like reading. This collection of 30
            reader-intent lists is built for exactly those moments. Every guide starts with
            who it's designed for and ends with a clear verdict, so you can get to your next
            great book in minutes instead of hours.
          </p>
        </header>

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
