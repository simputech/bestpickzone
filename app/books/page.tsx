import type { Metadata } from 'next';
import Link from 'next/link';
import { articlesData } from '@/lib/books-data';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Best Book Recommendations 2026 | BestPickZone',
  description:
    'Expert book recommendations across every genre — author spotlights, genre fiction, self-help, kids & YA, and curated reader lists. Find your next great read at BestPickZone.',
  alternates: { canonical: 'https://bestpickzone.com/books' },
};

const categories = [
  {
    label: 'By Author',
    href: '/books/authors',
    description:
      'Deep-dives into the best works from Stephen King, Colleen Hoover, James Clear, and 12 more beloved authors.',
    emoji: '✍️',
    count: 15,
  },
  {
    label: 'Genre Fiction',
    href: '/books/genre-fiction',
    description:
      'From psychological thrillers to cozy mysteries and dark romance — the definitive genre fiction guides.',
    emoji: '📚',
    count: 20,
  },
  {
    label: 'Self-Help & Non-Fiction',
    href: '/books/self-help',
    description:
      'Habit-building, leadership, personal finance, mindfulness, and every other life-improving non-fiction category.',
    emoji: '🧠',
    count: 20,
  },
  {
    label: 'Kids & Young Adult',
    href: '/books/kids-and-ya',
    description:
      'Picture books, middle-grade series, YA fantasy, and the best books for reluctant readers of every age.',
    emoji: '🌟',
    count: 15,
  },
  {
    label: 'Reader-Intent Lists',
    href: '/books/reader-picks',
    description:
      "Books for the beach, book clubs, one-sitting reads, and every 'I want something like...' list you've been searching for.",
    emoji: '🎯',
    count: 30,
  },
];

const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Books' }];

export default function BooksHubPage() {
  const authorArticles = articlesData.filter((a) => a.category === 'author');
  const genreArticles = articlesData.filter((a) => a.category === 'genre');
  const selfHelpArticles = articlesData.filter((a) => a.category === 'self-help');
  const kidsArticles = articlesData.filter((a) => a.category === 'kids-ya');
  const readerArticles = articlesData.filter((a) => a.category === 'reader-intent');

  const allCategories = [
    { key: 'author', label: 'By Author', href: '/books/authors', articles: authorArticles },
    { key: 'genre', label: 'Genre Fiction', href: '/books/genre-fiction', articles: genreArticles },
    { key: 'self-help', label: 'Self-Help & Non-Fiction', href: '/books/self-help', articles: selfHelpArticles },
    { key: 'kids-ya', label: 'Kids & Young Adult', href: '/books/kids-and-ya', articles: kidsArticles },
    { key: 'reader-intent', label: 'Reader-Intent Lists', href: '/books/reader-picks', articles: readerArticles },
  ];

  const booksHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Best Book Recommendations 2026',
    description:
      'Expert book recommendations across every genre at BestPickZone.',
    url: 'https://bestpickzone.com/books',
    publisher: { '@type': 'Organization', name: 'BestPickZone' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(booksHubSchema) }}
      />

      <main className="max-w-5xl mx-auto px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        <header className="mb-10">
          <h1
            className="text-4xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Best Book Recommendations
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            Finding your next great read shouldn't take hours of scrolling. BestPickZone cuts
            through the noise with honest, research-backed book lists covering every genre,
            reading level, and mood. Whether you want the best Stephen King thriller, a
            self-help book that actually changes your habits, or something for a reluctant
            reader in your life — you'll find a well-curated list below. All {articlesData.length} guides are
            updated regularly and every recommendation links directly to Amazon for easy buying.
          </p>
        </header>

        {/* Category Cards */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="card-hover bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col gap-3 no-underline"
            >
              <div className="text-3xl">{cat.emoji}</div>
              <h2
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {cat.label}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{cat.description}</p>
              <span className="text-sm font-semibold text-blue-600">{cat.count} guides →</span>
            </Link>
          ))}
        </section>

        {/* All Articles by Category */}
        {allCategories.map((cat) => (
          <section key={cat.key} className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h2
                className="text-2xl font-bold text-gray-900"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {cat.label}
              </h2>
              <Link
                href={cat.href}
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                View all →
              </Link>
            </div>
            <ul className="grid md:grid-cols-2 gap-2">
              {cat.articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/books/${article.slug}`}
                    className="text-gray-800 hover:text-blue-600 hover:underline text-sm font-medium leading-relaxed block py-1"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </>
  );
}
