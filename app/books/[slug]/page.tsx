import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getArticleBySlug,
  getAllSlugs,
  getArticlesByCategory,
  getArticlesBySlugs,
} from '@/lib/books-data';
import {
  buildBookFitParagraph,
  buildBookTradeoffParagraph,
  buildCategoryContext,
  buildDirectAnswerDetail,
  buildReaderSignals,
  buildVerdictBridge,
  verificationLabel,
} from '@/lib/book-article-enrichment';
import { ARTICLE_REFRESH_DATE, withArticleMetadataDefaults } from '@/lib/article-metadata';
import { buildAffiliateTrackingId, getAffiliateUrlWithTracking } from '@/lib/affiliate-links';
import { getReadingTime, formatReadingTime } from '@/lib/reading-time';
import { getSpanishUrlForEnglishPath } from '@/lib/spanish-site-data';
import BookCTA from '@/components/article/BookCTA';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface Props {
  params: { slug: string };
}

const categoryThemeMap = {
  author: {
    badge: 'text-amber-700',
    badgeBg: 'bg-amber-100',
    hero: 'from-amber-50 via-white to-rose-50',
    cardBorder: 'border-amber-200',
    accent: 'text-amber-700',
    surface: 'bg-amber-50',
  },
  genre: {
    badge: 'text-violet-700',
    badgeBg: 'bg-violet-100',
    hero: 'from-violet-50 via-white to-fuchsia-50',
    cardBorder: 'border-violet-200',
    accent: 'text-violet-700',
    surface: 'bg-violet-50',
  },
  'self-help': {
    badge: 'text-emerald-700',
    badgeBg: 'bg-emerald-100',
    hero: 'from-emerald-50 via-white to-teal-50',
    cardBorder: 'border-emerald-200',
    accent: 'text-emerald-700',
    surface: 'bg-emerald-50',
  },
  'kids-ya': {
    badge: 'text-sky-700',
    badgeBg: 'bg-sky-100',
    hero: 'from-sky-50 via-white to-cyan-50',
    cardBorder: 'border-sky-200',
    accent: 'text-sky-700',
    surface: 'bg-sky-50',
  },
  'reader-intent': {
    badge: 'text-rose-700',
    badgeBg: 'bg-rose-100',
    hero: 'from-rose-50 via-white to-orange-50',
    cardBorder: 'border-rose-200',
    accent: 'text-rose-700',
    surface: 'bg-rose-50',
  },
} as const;

const priorityAuthorGuides = [
  { slug: 'best-james-clear-books', label: 'Best James Clear books guide' },
  { slug: 'best-james-patterson-books', label: 'Best James Patterson books guide' },
  { slug: 'best-brene-brown-books', label: 'Best Brene Brown books guide' },
  { slug: 'best-jk-rowling-books', label: 'Best J.K. Rowling books guide' },
  { slug: 'best-john-grisham-books', label: 'Best John Grisham books guide' },
  { slug: 'best-nora-roberts-books', label: 'Best Nora Roberts books guide' },
  { slug: 'best-neil-gaiman-books', label: 'Best Neil Gaiman books guide' },
  { slug: 'best-george-orwell-books', label: 'Best George Orwell books guide' },
  { slug: 'best-haruki-murakami-books', label: 'Best Haruki Murakami books guide' },
  { slug: 'best-toni-morrison-books', label: 'Best Toni Morrison books guide' },
] as const;

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  const canonicalUrl = `https://bestpickzone.com/books/${article.slug}`;
  const spanishUrl = getSpanishUrlForEnglishPath(`/books/${article.slug}`);

  return withArticleMetadataDefaults({
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: spanishUrl
        ? {
            en: canonicalUrl,
            es: spanishUrl,
          }
        : undefined,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: canonicalUrl,
      type: 'article',
      publishedTime: article.publishedDate,
    },
  }, {
    url: canonicalUrl,
    category:
      article.category === 'author'
        ? 'authors'
        : article.category === 'genre'
          ? 'genre-fiction'
          : article.category === 'self-help'
            ? 'self-help'
          : article.category === 'kids-ya'
              ? 'kids-and-ya'
              : 'reader-picks',
    publishedTime: article.publishedDate,
    section: article.categoryLabel,
    keywords: [...(article.metadataKeywords ?? []), ...article.books.slice(0, 4).map((book) => book.title)],
    tags: [...(article.metadataKeywords ?? []).slice(0, 3), ...article.books.slice(0, 6).map((book) => book.title)],
  });
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  const theme = categoryThemeMap[article.category];
  const defaultAffiliatePlatform = article.affiliatePlatform ?? 'amazon';
  const disclosure =
    article.affiliateDisclosure ??
    'Affiliate disclosure: BestPickZone participates in the Amazon Services LLC Associates Program. When you purchase through links on this page, we may earn a commission at no extra cost to you. Recommendations are based on reader fit, book quality, and editorial analysis — not commission rates.';
  const topPick = article.books[0];
  const alternatePick = article.books[1];
  const visualMapBooks = article.books.slice(0, 4);
  const readerSignals = buildReaderSignals(article);
  const categoryContext = buildCategoryContext(article);
  const directAnswerDetail = buildDirectAnswerDetail(article);
  const verifiedAsOf = verificationLabel(article.publishedDate);

  const fullText = [
    article.intro,
    categoryContext,
    directAnswerDetail,
    ...article.books.map((b) => `${b.title} ${b.description} ${b.bestFor} ${b.skipIf}`),
    ...article.buyingGuide.map((g) => `${g.title} ${g.text}`),
    ...article.faqs.map((f) => `${f.question} ${f.answer}`),
    article.verdict,
  ].join(' ');

  const readingMinutes = getReadingTime(fullText);
  const readingTimeLabel = formatReadingTime(readingMinutes);

  const curatedRelated = getArticlesBySlugs(article.relatedSlugs).filter((a) => a.slug !== article.slug);
  const fallbackRelated = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug && !article.relatedSlugs.includes(a.slug))
    .slice(0, 5 - curatedRelated.length);
  const related = [...curatedRelated, ...fallbackRelated].slice(0, 5);
  const moreAuthorGuides = priorityAuthorGuides.filter((guide) => guide.slug !== article.slug).slice(0, 6);
  const getTrackedBookUrl = (book: (typeof article.books)[number], placement: string) => {
    const platform = book.affiliatePlatform ?? defaultAffiliatePlatform;
    const baseUrl =
      book.affiliateUrl ??
      `https://www.amazon.com/s?k=${encodeURIComponent(book.amazonSearchQuery)}&tag=althcu-20`;

    return getAffiliateUrlWithTracking(
      baseUrl,
      platform,
      buildAffiliateTrackingId(article.slug, book.title, placement)
    );
  };
  const renderLinkedBookTitle = (
    book: (typeof article.books)[number],
    placement: string,
    className: string
  ) => (
    <a
      href={getTrackedBookUrl(book, placement)}
      target="_blank"
      rel="noopener nofollow sponsored"
      className={`${className} hover:underline`}
    >
      {book.title}
    </a>
  );
  const sectionLinks = [
    { href: '#direct-answer', label: 'Direct answer' },
    { href: '#quick-picks', label: 'Quick picks' },
    { href: '#visual-map', label: 'Visual map' },
    { href: '#full-reviews', label: 'Full reviews' },
    { href: '#how-to-choose', label: 'How to choose' },
    { href: '#faq', label: 'FAQ' },
  ];

  // JSON-LD schemas
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate ?? ARTICLE_REFRESH_DATE,
    author: { '@type': 'Organization', name: 'BestPickZone' },
    publisher: {
      '@type': 'Organization',
      name: 'BestPickZone',
      url: 'https://bestpickzone.com',
    },
    isPartOf: {
      '@type': 'WebSite',
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
        <header className={`mb-8 rounded-[28px] border ${theme.cardBorder} bg-gradient-to-br ${theme.hero} p-6 md:p-8`}>
          <p
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${theme.badgeBg} ${theme.badge} mb-4`}
          >
            <Link href={article.categoryHref} className="hover:underline">
              {article.categoryLabel}
            </Link>
          </p>
          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4 md:text-4xl">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span>
              Updated:{' '}
              {new Date(article.updatedDate ?? article.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>·</span>
            <span>{readingTimeLabel}</span>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">{article.intro}</p>
        </header>

        {/* Affiliate Disclosure */}
        <div className="affiliate-disclosure mb-8">
          <p className="text-sm leading-relaxed text-gray-600">
            {disclosure}
          </p>
        </div>

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">How to use this guide</h2>
          <p className="text-gray-700 leading-relaxed">{categoryContext}</p>
        </section>

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            In this guide
          </p>
          <div className="flex flex-wrap gap-2">
            {sectionLinks.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className={`rounded-full border ${theme.cardBorder} px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </section>

        <section id="direct-answer" className={`mb-10 rounded-3xl border ${theme.cardBorder} ${theme.surface} p-6`}>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Direct answer</h2>
          <p className="mb-5 text-gray-700 leading-relaxed">
            If you want the shortest possible answer to <strong>{article.title.toLowerCase()}</strong>,
            start with <strong>{topPick.title}</strong>. It is the clearest fit for readers who want{' '}
            <strong>{topPick.bestFor.toLowerCase()}</strong>. If that does not sound like you, the best
            alternate starting point is <strong>{alternatePick?.title}</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">{directAnswerDetail}</p>
          <BookCTA
            title={topPick.title}
            author={topPick.author}
            affiliateUrl={topPick.affiliateUrl}
            affiliateLabel={`Check ${topPick.title} on Amazon`}
            affiliatePlatform={topPick.affiliatePlatform ?? defaultAffiliatePlatform}
            trackingId={buildAffiliateTrackingId(article.slug, topPick.title, 'direct-answer')}
          />
          <div id="quick-picks" className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/70 bg-white p-4 shadow-sm">
              <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                Best overall pick
              </p>
              <h3 className="text-lg font-bold text-gray-900">{topPick.title}</h3>
              <p className="mb-2 text-sm text-gray-500">by {topPick.author}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{topPick.description}</p>
            </div>
            {alternatePick && (
              <div className="rounded-2xl border border-white/70 bg-white p-4 shadow-sm">
                <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] ${theme.accent}`}>
                  Best alternate
                </p>
                <h3 className="text-lg font-bold text-gray-900">{alternatePick.title}</h3>
                <p className="mb-2 text-sm text-gray-500">by {alternatePick.author}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{alternatePick.description}</p>
              </div>
            )}
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          {readerSignals.map((signal) => (
            <div key={signal.title} className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.18em] ${theme.accent}`}>
                Reader fit
              </p>
              <h2 className="mb-2 text-lg font-bold text-gray-900">{signal.title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">{signal.text}</p>
            </div>
          ))}
        </section>

        <section id="visual-map" className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Visual map: which book fits which reader?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {visualMapBooks.map((book, index) => (
              <div
                key={book.title}
                className={`rounded-3xl border ${theme.cardBorder} bg-white p-5 shadow-sm`}
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${theme.badgeBg} ${theme.badge} text-sm font-bold`}>
                    {index + 1}
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    {book.bestFor}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {renderLinkedBookTitle(book, 'visual-map-title', 'text-gray-900')}
                </h3>
                <p className="mb-2 text-sm text-gray-500">by {book.author}</p>
                <p className="mb-3 text-sm text-gray-700 leading-relaxed">{book.description}</p>
                <p className="text-sm text-gray-500">
                  <strong>Skip this if:</strong> {book.skipIf}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="mb-10 overflow-x-auto">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Quick comparison</h2>
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
                    {renderLinkedBookTitle(book, 'comparison-title', 'font-semibold text-gray-900')}
                    <br />
                    <span className="text-gray-500 text-xs">by {book.author}</span>
                  </td>
                  <td className="p-3 text-gray-600">{book.bestFor}</td>
                  <td className="p-3">
                    <a
                      href={getTrackedBookUrl(book, 'comparison-table')}
                      target="_blank"
                      rel="noopener nofollow sponsored"
                      className={`inline-flex min-h-[44px] items-center rounded-lg px-3 py-2 text-xs font-semibold ${
                        (book.affiliatePlatform ?? defaultAffiliatePlatform) === 'ebay'
                          ? 'bg-sky-600 text-white hover:bg-sky-500'
                          : 'btn-amazon'
                      }`}
                    >
                      {(book.affiliatePlatform ?? defaultAffiliatePlatform) === 'ebay'
                        ? 'See current eBay listings'
                        : 'See current availability'}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Individual Book Reviews */}
        <section id="full-reviews" className="mb-10">
          <h2 className="article-h2 mb-6 text-2xl font-bold text-gray-900">Full reviews</h2>
          {article.books.map((book, i) => (
            <div
              key={i}
              className="card-hover bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="article-h3 text-xl font-bold text-gray-900">
                    <span className="mr-1">{i + 1}.</span>
                    {renderLinkedBookTitle(book, 'full-review-title', 'text-gray-900')}
                  </h3>
                  <p className="text-gray-500 text-sm">by {book.author}</p>
                </div>
                <span className="reader-badge shrink-0">{book.bestFor}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">{book.description}</p>
              <p className="mb-3 text-gray-700 leading-relaxed">
                {buildBookFitParagraph(article, book, i)}
              </p>
              <p className="skip-if text-sm text-gray-500 mb-4">
                <strong>Skip this if:</strong> {book.skipIf}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                {buildBookTradeoffParagraph(book)}
              </p>
              <BookCTA
                title={book.title}
                author={book.author}
                affiliateUrl={book.affiliateUrl}
                affiliateLabel={book.affiliateLabel}
                affiliatePlatform={book.affiliatePlatform ?? defaultAffiliatePlatform}
                trackingId={buildAffiliateTrackingId(article.slug, book.title, 'full-review')}
              />
            </div>
          ))}
        </section>

        {/* Buying Guide */}
        {article.buyingGuide.length > 0 && (
          <section id="how-to-choose" className="mb-10">
            <h2 className="article-h2 mb-3 text-2xl font-bold text-gray-900">
              How to choose the right book from this list
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              The fastest way to use this page is to match the book to your actual reading mood,
              not to the broad category. These notes are where the tradeoffs usually become clear.
            </p>
            <div className="space-y-5">
              {article.buyingGuide.map((item, i) => (
                <div key={i}>
                  <h3 className="article-h3 mb-1 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {article.faqs.length > 0 && (
          <section id="faq" className="mb-10">
            <h2 className="article-h2 mb-6 text-2xl font-bold text-gray-900">
              Frequently asked questions
            </h2>
            <div className="space-y-5">
              {article.faqs.map((faq, i) => (
                <div key={i} className="border-l-4 border-yellow-400 pl-4">
                  <h3 className="article-h3 mb-1 text-base font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mb-10 rounded-3xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-gray-900">Verification note</h2>
          <p className="verification-note text-sm leading-relaxed text-gray-600">
            Titles, authors, publication details, and availability were verified against Amazon and
            public bibliographic sources as of {verifiedAsOf}. Availability, editions, and prices
            can change — confirm before purchasing.
          </p>
        </section>

        {article.sources && article.sources.length > 0 && (
          <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-gray-900">Sources and editorial scope</h2>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              We checked the title, series position, and premise against the official sources below on{' '}
              {verifiedAsOf}. Reader-fit recommendations are editorial judgments, and availability can change.
            </p>
            <ul className="space-y-2">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Verdict */}
        <section className="mb-10">
          <div className="verdict-box bg-yellow-50 border border-yellow-300 rounded-xl p-6">
            <h2 className="mb-3 text-xl font-bold text-gray-900">Our verdict</h2>
            <p className="text-gray-700 leading-relaxed">{article.verdict}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{buildVerdictBridge(article)}</p>
          </div>
        </section>

        {article.category === 'author' && (
          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="mb-3 text-xl font-bold text-gray-900">More author guides</h2>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              If you are comparing major authors rather than choosing a single book, these related author roundups
              are strong next clicks and important crawl paths inside the BestPickZone author section.
            </p>
            <ul className="grid gap-2 md:grid-cols-2">
              {moreAuthorGuides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/books/${guide.slug}`}
                    className="block rounded-2xl border border-amber-100 bg-white px-4 py-3 text-sm font-medium text-gray-800 transition hover:border-amber-200 hover:text-blue-700"
                  >
                    {guide.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Related reading</h2>
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
