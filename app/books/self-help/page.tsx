import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticlesByCategory } from '@/lib/books-data';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Best Self-Help & Non-Fiction Books 2026 | BestPickZone',
  description:
    'The best self-help and non-fiction books on habits, leadership, personal finance, mindfulness, psychology, biographies, and more. Honest picks that actually deliver.',
  alternates: { canonical: 'https://bestpickzone.com/books/self-help' },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Self-Help & Non-Fiction' },
];

export default function SelfHelpHubPage() {
  const articles = getArticlesByCategory('self-help');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Best Self-Help & Non-Fiction Books',
    description: 'Curated guides for the best self-help and non-fiction books.',
    url: 'https://bestpickzone.com/books/self-help',
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
            Best Self-Help &amp; Non-Fiction Books
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            The self-help section is full of books that promise everything and deliver little.
            Our guides cut through the noise to surface the books that have genuinely changed
            readers' lives — covering habits, productivity, leadership, personal finance,
            stoicism, relationships, creativity, and every other category that matters when
            you're trying to grow. We also cover narrative non-fiction including the best
            biographies, history books, science writing, and travel narratives. Every pick
            includes honest context about who it's for and who should skip it.
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
