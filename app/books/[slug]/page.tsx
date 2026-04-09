import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getArticleBySlug, getAllSlugs, getArticlesByCategory } from '@/lib/books-data';
import { getReadingTime, formatReadingTime } from '@/lib/reading-time';
import BookCTA from '@/components/article/BookCTA';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://bestpickzone.com/books/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://bestpickzone.com/books/${article.slug}`,
      type: 'article',
      publishedTime: article.publishedDate,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const fullText = [
    article.intro,
    ...article.books.map((b) => `${b.title} ${b.description} ${b.bestFor} ${b.skipIf}`),
    ...article.buyingGuide.map((g) => `${g.title} ${g.text}`),
    ...article.faqs.map((f) => `${f.question} ${f.answer}`),
    article.verdict,
  ].join(' ');

  const readingMinutes = getReadingTime(fullText);
  const readingTimeLabel = formatReadingTime(readingMinutes);

  const related = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 5);

  // JSON-LD schemas
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    author: { '@type': 'Organization', name: 'BestPickZone' },
    publisher: {
      '@type': 'Organization',
      name: 'BestPickZone',
      url: 'https://bestpickzone.com',
    },
    mainEntityOfPage: `https://bestpickzone.com/books/${article.slug}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: article.title,
    numberOfItems: article.books.length,
    itemListElement: article.books.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.title,
      description: b.description,
    })),
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Books', href: '/books' },
    { label: article.categoryLabel, href: article.categoryHref },
    { label: article.title },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero */}
        <header className="mb-8">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            <Link href={article.categoryHref} className="hover:underline">
              {article.categoryLabel}
            </Link>
          </p>
          <h1
            className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {article.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span>
              Updated:{' '}
              {new Date(article.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>·</span>
            <span>{readingTimeLabel}</span>
          </div>
        </header>

        {/* Intro */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">{article.intro}</p>

        {/* Affiliate Disclosure */}
        <div className="affiliate-disclosure mb-8">
          <p className="text-sm text-gray-600">
            <strong>Disclosure:</strong> BestPickZone earns a small commission from qualifying
            Amazon purchases at no extra cost to you. We research every pick independently.
          </p>
        </div>

        {/* Quick Comparison Table */}
        <section className="mb-10 overflow-x-auto">
          <h2
            className="text-xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Quick Comparison
          </h2>
          <table className="comparison-table w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Book</th>
                <th className="p-3 text-left">Best For</th>
                <th className="p-3 text-left">Buy</th>
              </tr>
            </thead>
            <tbody>
              {article.books.map((book, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-3 font-bold text-gray-400">{i + 1}</td>
                  <td className="p-3">
                    <span className="font-semibold text-gray-900">{book.title}</span>
                    <br />
                    <span className="text-gray-500 text-xs">by {book.author}</span>
                  </td>
                  <td className="p-3 text-gray-600">{book.bestFor}</td>
                  <td className="p-3">
                    <a
                      href={`https://www.amazon.com/s?k=${encodeURIComponent(book.amazonSearchQuery)}&tag=bestpickzone-20`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-amazon text-xs px-3 py-2 inline-block"
                      style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
                    >
                      Buy on Amazon
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Individual Book Reviews */}
        <section className="mb-10">
          <h2
            className="article-h2 text-2xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Full Reviews
          </h2>
          {article.books.map((book, i) => (
            <div
              key={i}
              className="card-hover bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3
                    className="article-h3 text-xl font-bold text-gray-900"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {i + 1}. {book.title}
                  </h3>
                  <p className="text-gray-500 text-sm">by {book.author}</p>
                </div>
                <span className="reader-badge shrink-0">{book.bestFor}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">{book.description}</p>
              <p className="skip-if text-sm text-gray-500 mb-4">
                <strong>Skip this if:</strong> {book.skipIf}
              </p>
              <BookCTA title={book.title} author={book.author} />
            </div>
          ))}
        </section>

        {/* Buying Guide */}
        {article.buyingGuide.length > 0 && (
          <section className="mb-10">
            <h2
              className="article-h2 text-2xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              What to Consider Before You Buy
            </h2>
            <div className="space-y-5">
              {article.buyingGuide.map((item, i) => (
                <div key={i}>
                  <h3
                    className="article-h3 text-lg font-semibold text-gray-900 mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {article.faqs.length > 0 && (
          <section className="mb-10">
            <h2
              className="article-h2 text-2xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {article.faqs.map((faq, i) => (
                <div key={i} className="border-l-4 border-yellow-400 pl-4">
                  <h3
                    className="article-h3 text-base font-semibold text-gray-900 mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Verdict */}
        <section className="mb-10">
          <div className="verdict-box bg-yellow-50 border border-yellow-300 rounded-xl p-6">
            <h2
              className="text-xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Our Verdict
            </h2>
            <p className="text-gray-700 leading-relaxed">{article.verdict}</p>
          </div>
        </section>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mb-10">
            <h2
              className="text-xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              More in {article.categoryLabel}
            </h2>
            <ul className="space-y-2">
              {related.map((rel) => (
                <li key={rel.slug}>
                  <Link
                    href={`/books/${rel.slug}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {rel.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Back to hub */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link
            href={article.categoryHref}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            ← Back to {article.categoryLabel}
          </Link>
        </div>
      </main>
    </>
  );
}
