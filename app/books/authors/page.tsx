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

export default function AuthorsHubPage() {
  const articles = getArticlesByCategory('author');

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
