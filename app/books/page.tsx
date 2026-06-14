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

const authorGuideSlugs = [
  'best-stephen-king-books',
  'best-colleen-hoover-books',
  'best-james-clear-books',
  'best-malcolm-gladwell-books',
  'best-james-patterson-books',
  'best-brene-brown-books',
  'best-mark-manson-books',
  'best-haruki-murakami-books',
  'best-george-orwell-books',
  'best-toni-morrison-books',
  'best-john-grisham-books',
  'best-nora-roberts-books',
  'best-neil-gaiman-books',
  'best-dan-brown-books',
  'best-jk-rowling-books',
] as const;

const priorityAuthorGuides = [
  { slug: 'best-james-clear-books', label: 'James Clear books guide' },
  { slug: 'best-james-patterson-books', label: 'James Patterson books guide' },
  { slug: 'best-brene-brown-books', label: 'Brene Brown books guide' },
  { slug: 'best-jk-rowling-books', label: 'J.K. Rowling books guide' },
  { slug: 'best-john-grisham-books', label: 'John Grisham books guide' },
  { slug: 'best-nora-roberts-books', label: 'Nora Roberts books guide' },
  { slug: 'best-neil-gaiman-books', label: 'Neil Gaiman books guide' },
  { slug: 'best-george-orwell-books', label: 'George Orwell books guide' },
  { slug: 'best-haruki-murakami-books', label: 'Haruki Murakami books guide' },
  { slug: 'best-toni-morrison-books', label: 'Toni Morrison books guide' },
] as const;

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

  const featuredGuides = [
  {
    title: 'Haruki Murakami Reading Order',
    href: '/books/haruki-murakami-reading-order',
    note: 'Useful when you want a curated path into Murakami instead of blindly following publication order.',
  },
  {
    title: 'Best Book Club Books',
    href: '/books/best-book-club-books',
    note: 'Good when your group wants a book that will actually create disagreement and discussion.',
    },
    {
      title: 'Best Self-Help Books',
      href: '/books/best-self-help-books',
      note: 'A cleaner starting point than scrolling bestseller lists full of recycled habit advice.',
    },
    {
      title: 'Best Books of All Time',
      href: '/books/best-books-of-all-time',
      note: 'For readers who want a canon list with honest tradeoffs instead of prestige-name dumping.',
    },
  ];

  const quickStartPaths = [
    {
      title: 'Need one sure recommendation',
      text: 'Start with the guide that matches your actual reading problem, not the broadest bestseller query. That usually means self-help, book club, or all-time favorites first.',
    },
    {
      title: 'Shopping for a child or teen',
      text: 'Go straight to Kids & Young Adult. Those pages are organized around age, confidence, and reader temperament instead of generic age-band filler.',
    },
    {
      title: 'Want a page-turner, not homework',
      text: 'Genre Fiction and Reader-Intent lists are the fastest path when you want momentum, strong mood fit, and cleaner tradeoffs between options.',
    },
  ];

  const allAuthorGuides = authorGuideSlugs
    .map((slug) => authorArticles.find((article) => article.slug === slug))
    .filter((article): article is (typeof authorArticles)[number] => Boolean(article));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(booksHubSchema) }}
      />

      <main className="max-w-5xl mx-auto px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900">Best Book Recommendations</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            BestPickZone is built for readers who already know what they do not want: padded listicles,
            generic bestseller summaries, and “for everyone” recommendations that fit no one in particular.
            Every guide here starts with a direct answer, then narrows the list by reader type, mood, and
            tradeoff. If you want the fastest path to a good next read, start with the featured guides below
            or jump into the category that matches what you are shopping for.
          </p>
        </header>

        <section className="mb-14 rounded-[28px] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Best Place To Start
              </p>
              <h2 className="text-2xl font-bold text-gray-900">Three guides that show how this site works</h2>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-700 shadow-sm">
              {articlesData.length} total guides
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">{guide.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{guide.note}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14 grid gap-4 md:grid-cols-3">
          {quickStartPaths.map((path) => (
            <div key={path.title} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Quick Path</p>
              <h2 className="mb-2 text-lg font-bold text-gray-900">{path.title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">{path.text}</p>
            </div>
          ))}
        </section>

        <section className="mb-14 rounded-[28px] border border-amber-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Priority Crawl Paths
              </p>
              <h2 className="text-2xl font-bold text-gray-900">Priority author guides to crawl next</h2>
            </div>
            <Link href="/books/authors" className="text-sm font-semibold text-blue-600 hover:underline">
              View all author roundups →
            </Link>
          </div>
          <p className="mb-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            These author roundups are important crawl targets for the next indexing pass. Each link below points
            directly to a full author guide on BestPickZone&apos;s bare-domain canonical URL structure.
          </p>
          <div className="grid gap-2 md:grid-cols-2">
            {priorityAuthorGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/books/${guide.slug}`}
                className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm font-medium text-gray-800 transition hover:border-amber-200 hover:text-blue-700"
              >
                {guide.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Category Cards */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="card-hover bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col gap-3 no-underline"
            >
              <div className="text-3xl">{cat.emoji}</div>
              <h2 className="text-xl font-bold text-gray-900">{cat.label}</h2>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{cat.description}</p>
              <span className="text-sm font-semibold text-blue-600">{cat.count} guides →</span>
            </Link>
          ))}
        </section>

        <section className="mb-14 rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">How These Book Guides Are Built</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Answer first, then narrow</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Each page is designed to answer the main search intent quickly, name the best overall pick,
                and then split the rest of the list by reader type, mood, age, or difficulty.
              </p>
            </div>
            <div className="rounded-3xl bg-gray-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Useful over performative</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                The goal is not to stuff every famous title into one page. It is to help you leave with the
                right next book and enough context to know why it fits.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14 rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">All 15 Author Roundups</h2>
          <p className="mb-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            If you are browsing by author rather than genre, these internal links cover every author roundup currently
            published on the site, from major thriller names to literary and self-help figures.
          </p>
          <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {allAuthorGuides.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/books/${article.slug}`}
                  className="block rounded-2xl border border-gray-100 px-4 py-3 text-sm font-medium text-gray-800 transition hover:border-gray-200 hover:text-blue-700"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* All Articles by Category */}
        {allCategories.map((cat) => (
          <section key={cat.key} className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold text-gray-900">{cat.label}</h2>
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
