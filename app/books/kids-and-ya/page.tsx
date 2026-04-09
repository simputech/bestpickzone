import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesByCategory } from '@/lib/books-data';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Best Kids & Young Adult Books 2026 — Series, Picture Books & YA | BestPickZone',
  description:
    'The best books for kids and teens: picture books, middle-grade series, YA fantasy, YA romance, reluctant reader picks, and more. Age-matched recommendations parents and kids trust.',
  alternates: { canonical: 'https://bestpickzone.com/books/kids-and-ya' },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Kids & Young Adult' },
];

export default function KidsYAHubPage() {
  const articles = getArticlesByCategory('kids-ya');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Best Kids & Young Adult Books',
    description: 'Curated book guides for children and young adult readers.',
    url: 'https://bestpickzone.com/books/kids-and-ya',
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
            Best Kids &amp; Young Adult Books
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Finding the right book for a young reader is one of the most rewarding things you
            can do — and one of the trickiest. Our guides cover every age from toddler
            picture books all the way through young adult, organized by the reading level,
            interest, and challenge each child needs. Whether you're searching for a series
            that hooks a reluctant reader, a STEM book that sparks genuine curiosity, or a
            YA fantasy series a teen will read in a weekend, we've built a precise guide for
            it. All picks include honest notes about what kind of reader they're ideal for.
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
