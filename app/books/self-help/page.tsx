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
  const featured = articles
    .filter((article) =>
      ['best-self-help-books', 'best-books-on-habits-and-productivity', 'best-books-on-psychology'].includes(
        article.slug
      )
    );
  const buyingPaths = [
    {
      title: 'Fixing routines',
      text: 'Start with habits, productivity, or psychology before buying a general self-help title that may be too broad for the problem you are actually trying to solve.',
    },
    {
      title: 'Looking for meaning, not efficiency',
      text: 'Philosophy, memoir-adjacent self-help, and mental-model books usually do more than tactical productivity when the real issue is drift or burnout.',
    },
    {
      title: 'Shopping for a life stage problem',
      text: 'Money, parenting, relationships, and mental health each reward specialized books more than one-size-fits-all motivation titles.',
    },
  ];
  const editorialSpotlights = [
    {
      href: '/books/self-help/best-book-to-learn-scrum',
      title: 'Best Book to Learn Scrum',
      text: 'A sharper answer for agile learners who need the right book by role, not a vague reading list.',
    },
    {
      href: '/books/self-help/best-comptia-security-plus-books-2026',
      title: 'Best CompTIA Security+ Books for 2026',
      text: 'A certification-prep buying guide built around the current SY0-701 exam, not outdated editions.',
    },
    {
      href: '/books/self-help/best-self-help-books-2026',
      title: 'Best Self-Help Books to Read in 2026',
      text: 'The broader gateway page when the problem is personal change rather than professional upskilling.',
    },
  ];

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
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900">Best Self-Help &amp; Non-Fiction Books</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Most self-help categories are crowded with books that repeat the same advice in
            slightly different language. This section exists to separate the books that changed
            the conversation from the books that simply sold well. Use it when you want a sharper
            answer than “read Atomic Habits” and need to know whether you actually need habits,
            psychology, leadership, money, relationships, or memoir.
          </p>
        </header>

        <section className="mb-12 rounded-[28px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Start Here
          </p>
          <h2 className="mb-5 text-2xl font-bold text-gray-900">Three guides that answer the biggest self-help intents</h2>
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

        <section className="mb-12 grid gap-4 md:grid-cols-3">
          {buyingPaths.map((path) => (
            <div key={path.title} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Best Use</p>
              <h2 className="mb-2 text-lg font-bold text-gray-900">{path.title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">{path.text}</p>
            </div>
          ))}
        </section>

        <section className="mb-12 rounded-[28px] border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 p-6 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            New specialist guides
          </p>
          <h2 className="mb-5 text-2xl font-bold text-gray-900">Career and process books with clearer search intent</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {editorialSpotlights.map((spotlight) => (
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
        </section>

        <section className="mt-12 rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">What Makes A Useful Self-Help Guide</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-600">
            The strongest books in this section are here because they solve a specific problem cleanly, not because
            they dominated a bestseller list. Some help you change behavior, some help you understand your mind, and
            some help you survive hard seasons without drifting into generic motivational filler.
          </p>
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
