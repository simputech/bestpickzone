import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesByCategory } from '@/lib/books-data';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Best Genre Fiction Books — Thrillers, Fantasy, Romance & More | BestPickZone',
  description:
    'The best books in every fiction genre: psychological thrillers, fantasy series, dark romance, cozy mysteries, historical fiction, sci-fi, horror, and more.',
  alternates: { canonical: 'https://bestpickzone.com/books/genre-fiction' },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Genre Fiction' },
];

export default function GenreFictionHubPage() {
  const articles = getArticlesByCategory('genre');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Best Genre Fiction Books',
    description: 'Curated book guides for every fiction genre.',
    url: 'https://bestpickzone.com/books/genre-fiction',
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
            Best Genre Fiction Books
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Genre fiction is where most readers live — and for good reason. Whether you crave
            a psychological thriller that keeps you up past midnight, an immersive fantasy
            series you can disappear into for weeks, or a dark romance that breaks your heart
            in the best possible way, we've built a complete guide for every genre. Each list
            below is organized by what different readers will enjoy most, with honest "skip
            this if" advice to help you choose wisely.
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
