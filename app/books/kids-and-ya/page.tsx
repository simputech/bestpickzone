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
  const featured = articles.slice(0, 3);
  const shopperNotes = [
    {
      title: 'Age matters, but confidence matters too',
      text: 'A strong age match can still miss if the child is tired of long pages, heavy text blocks, or books that feel like school.',
    },
    {
      title: 'Series often beat standalones',
      text: 'When a child finally connects with a book, the best next move is usually keeping them inside that reading streak rather than restarting with something totally new.',
    },
    {
      title: 'Visual reading still counts',
      text: 'Graphic novels, illustrated fiction, and hybrid formats are often the smartest doorway for reluctant or developing readers.',
    },
  ];

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
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900">Best Kids &amp; Young Adult Books</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Parents and teachers rarely need “the best kids books” in the abstract. They need the
            right book for a specific age, attention span, and reading problem. This section is built
            around that reality: reluctant readers, bedtime books, middle-grade series, YA fantasy,
            and the categories that actually come up when you are trying to match a child with the
            next book they will finish.
          </p>
        </header>

        <section className="mb-12 rounded-[28px] border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Parent Shortlist
          </p>
          <h2 className="mb-5 text-2xl font-bold text-gray-900">Strong starting points by age and reading confidence</h2>
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
          {shopperNotes.map((note) => (
            <div key={note.title} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">What Helps</p>
              <h2 className="mb-2 text-lg font-bold text-gray-900">{note.title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">{note.text}</p>
            </div>
          ))}
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
          <h2 className="mb-3 text-2xl font-bold text-gray-900">What You Will Find In This Section</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-600">
            These guides cover picture books, early readers, middle-grade series, YA fantasy, coming-of-age novels,
            STEM picks, reluctant-reader pathways, and age-specific lists for boys and girls. The goal is to make this
            section feel more like a smart children&apos;s books desk than a thin directory of titles.
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
