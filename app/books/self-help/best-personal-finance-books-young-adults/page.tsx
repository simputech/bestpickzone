import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best Personal Finance Books for Young Adults — Matched to Your Situation',
  description:
    'Five personal finance books matched to where you actually are: Housel for mindset, Sethi for a 6-week action plan, Ramsey for debt, Collins for investing, Kiyosaki for framework. Each with a skip-this-if.',
  alternates: {
    canonical: 'https://bestpickzone.com/books/self-help/best-personal-finance-books-young-adults',
  },
  openGraph: {
    title: 'Best Personal Finance Books for Young Adults',
    description:
      'Psychology of Money, I Will Teach You to Be Rich, Total Money Makeover, Simple Path to Wealth, Rich Dad Poor Dad — mapped to specific financial starting points.',
    url: 'https://bestpickzone.com/books/self-help/best-personal-finance-books-young-adults',
    siteName: 'BestPickZone',
    type: 'article',
  },
}, { category: 'self-help' })

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Self-Help', href: '/books/self-help' },
  { label: 'Best Personal Finance Books for Young Adults' },
]

const picks = [
  {
    slot: 'Best Overall',
    slotColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    meta: '2020 · 256 pages · Paperback, Kindle, Audible',
    summary:
      "Housel structures the book as 20 short essays, each making a distinct argument about how humans relate to money. The essays are independently readable — you can start anywhere — but build a coherent framework for understanding why smart people make bad financial decisions and what the behavioral patterns of long-term wealth actually look like.",
    pros: [
      '4.7-star average on Amazon across 80,000+ reviews — one of the most consistently praised finance books published in recent years',
      "Short chapters (10–15 minutes each) work well for readers who don't finish long books",
      'The compound interest chapter alone — which reframes long time horizons as the primary wealth-building variable — is worth the cover price',
      'Kindle edition under $15; Audible edition under 6 hours',
    ],
    cons: [
      'No budgeting templates, no account setup instructions, no step-by-step action plan',
      'Some essays cover similar ground from different angles — a few feel repetitive on a cover-to-cover read',
    ],
    skip: 'you need an action plan right now. Read Sethi first, then return to Housel for the framework that makes the actions stick.',
  },
  {
    slot: 'Best Practical Starter',
    slotColor: 'bg-green-100 text-green-800 border border-green-300',
    title: 'I Will Teach You to Be Rich',
    author: 'Ramit Sethi',
    meta: '2019 (2nd ed.) · 352 pages · Paperback, Kindle, Audible',
    summary:
      "Sethi's book is a 6-week action plan for automating your finances: setting up the right accounts, automating savings and investment contributions, negotiating bills, and building a system that requires minimal ongoing maintenance. The tone is direct and slightly combative — Sethi has no patience for financial advice that makes people feel guilty without giving them a plan.",
    pros: [
      'Specific to young adults — written for people with entry-level salaries, student debt, and no financial foundation',
      'The automation framework is genuinely transformative: readers report setting it up once and not touching it again',
      'The credit card optimization section alone has saved readers thousands in fees and earned significant rewards',
      'Updated 2019 edition reflects current account types and fintech options',
    ],
    cons: [
      'Some advice (particularly around credit cards) requires discipline that not all readers have initially',
      "Sethi's confident tone can read as arrogant to some readers",
    ],
    skip: "you have significant debt that requires a payoff plan before investing — start with Ramsey's Total Money Makeover first.",
  },
  {
    slot: 'Best for Debt',
    slotColor: 'bg-red-100 text-red-800 border border-red-300',
    title: 'The Total Money Makeover',
    author: 'Dave Ramsey',
    meta: '2013 (classic ed.) · 272 pages · Paperback, Kindle, Audible',
    summary:
      'Ramsey\'s "baby steps" system — a specific, ordered sequence for eliminating debt and building wealth — is the most effective framework for readers who are starting with significant financial stress. The debt snowball method (paying minimum on everything, then throwing all available money at the smallest debt first) is psychologically effective even if it\'s not mathematically optimal, because it builds momentum.',
    pros: [
      'The most action-oriented book on the list — readers know exactly what to do after each chapter',
      "Works for readers with very low income — Ramsey's system is built for people without margin",
      'Multiple Amazon reviews document readers eliminating $20,000–$100,000 in debt using this method',
    ],
    cons: [
      "Ramsey's zero-debt stance on mortgages and his advice against credit cards is contested by other financial advisors",
      "The religious framing in some editions isn't for every reader",
      'The investing advice in later chapters is less sophisticated than Collins or Housel',
    ],
    skip: "you have minimal debt and a stable income. In that case, Sethi's automation framework is more relevant.",
  },
  {
    slot: 'Best Long-Term Investing',
    slotColor: 'bg-blue-100 text-blue-800 border border-blue-300',
    title: 'The Simple Path to Wealth',
    author: 'JL Collins',
    meta: '2016 · 286 pages · Paperback, Kindle, Audible',
    summary:
      "Collins argues for a single investment strategy — low-cost total market index funds, specifically VTSAX — and explains in clear language why it outperforms active management, individual stock picking, and most managed funds over a 20–30 year horizon. The book is based on a series of letters Collins wrote to his daughter explaining how money works.",
    pros: [
      'The most honest book on this list about what investment advice is actually worth following',
      'The "F-you money" framework — building enough financial margin to make independent decisions — is useful regardless of investment strategy',
      'Index fund thesis is supported by decades of data; Vanguard and Fidelity equivalent funds achieve the same result',
    ],
    cons: [
      'Narrower in scope than other books here — investing only, no budgeting or debt framework',
      'Assumes a stable income and existing emergency fund; not the right starting point for readers without those',
    ],
    skip: "you have debt or no emergency fund. Read Ramsey or Sethi first, then return to Collins when you're ready to invest.",
  },
  {
    slot: 'Best Mindset Foundation',
    slotColor: 'bg-purple-100 text-purple-800 border border-purple-300',
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    meta: '1997 · 336 pages · Paperback, Kindle, Audible',
    summary:
      "Kiyosaki's book — still one of the best-selling personal finance books 25 years after publication — makes a single core argument: the middle class works for money, wealthy people make money work for them. The book is more parable than practical guide, following Kiyosaki's childhood observations of two father figures with different relationships to money.",
    pros: [
      'The asset vs. liability framework (assets put money in your pocket; liabilities take it out) is genuinely useful as a mental model',
      'Short and fast — most readers finish in a weekend',
      'The mindset shift it produces is reported by many readers as a meaningful turning point',
    ],
    cons: [
      "Kiyosaki's specific investment advice (real estate, starting businesses) is not practical for most young adults",
      'Several financial claims are contested; this is a mindset book, not a how-to guide',
      'Best read as an introduction to financial thinking, not as actionable advice',
    ],
    skip: "you need a practical action plan — Sethi or Ramsey will serve you better. Read this one for the framework, then execute with someone else's plan.",
  },
]

const faqs = [
  {
    q: "What's the single best personal finance book for a 22-year-old with student debt?",
    a: 'The Total Money Makeover by Dave Ramsey if the debt feels overwhelming; I Will Teach You to Be Rich by Sethi if the debt is manageable and you want a complete financial system. Read one, not both — start executing before adding more input.',
  },
  {
    q: 'Is Rich Dad Poor Dad actually good financial advice?',
    a: 'The mindset framework is valuable; the specific investment advice is not universally applicable and has been contested by certified financial planners. Read it for the asset/liability mental model, not for a how-to plan.',
  },
  {
    q: 'At what age should you start thinking about investing?',
    a: "Immediately upon having income — even small contributions to a 401(k) during your first job benefit from decades of compound growth. Collins's Simple Path to Wealth explains the math clearly. The cost of waiting five years to invest is greater than most people realize.",
  },
  {
    q: 'Should I read the audiobook or the print edition?',
    a: "Housel's Psychology of Money and Sethi's book both have strong Audible editions that work well during commutes. For Ramsey's baby steps and Collins's specific investment tactics, the print or Kindle version is easier to refer back to. Start with audio for mindset books, print for action plans.",
  },
]

const articleText = `${picks
  .map(
    (p) =>
      `${p.title} ${p.author} ${p.summary} ${p.pros.join(' ')} ${p.cons.join(' ')} ${p.skip}`,
  )
  .join(' ')} ${faqs.map((f) => `${f.q} ${f.a}`).join(' ')}`
const readingTime = getReadingTime(articleText)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Personal Finance Books for Young Adults',
  description:
    'Five personal finance books matched to specific financial starting points — mindset, action plan, debt payoff, long-term investing, and framework.',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: '2026-04-20',
  dateModified: '2026-06-26',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://bestpickzone.com/books/self-help/best-personal-finance-books-young-adults',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: picks.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${p.title} by ${p.author}`,
    description: p.summary,
  })),
}

export default function Page() {
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

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mt-4 mb-2">
          <span>{formatReadingTime(readingTime)}</span>
          <span>·</span>
          <span className="bg-green-50 text-green-800 border border-green-200 px-2 py-0.5 rounded">
            Last verified: April 2026
          </span>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 text-amber-900 text-sm p-3 rounded mb-6">
          <strong>FTC disclosure:</strong> BestPickZone is a participant in the Amazon
          Services LLC Associates Program. As an Amazon Associate we earn from qualifying
          purchases. Nothing in this article is financial advice. Prices and availability
          are accurate as of the "last verified" date above.
        </div>

        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Best Personal Finance Books for Young Adults
        </h1>

        <p className="text-lg text-gray-800 mb-4">
          <em>The Psychology of Money</em> by Morgan Housel is the best personal finance
          book for young adults who want to understand why they make the financial
          decisions they make before trying to optimize them. Housel's argument — that
          financial outcomes are driven more by behavior than knowledge — reframes the
          entire subject in a way that makes the practical advice in every other book on
          this list easier to apply.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          It's the right starting point for 22–30 year olds who have some income and some
          financial anxiety but aren't yet sure what they're doing wrong. The tradeoff:{' '}
          <em>The Psychology of Money</em> is a mindset book, not an action plan. If you
          need specific steps for paying off debt or starting a 401(k), Ramit Sethi's{' '}
          <em>I Will Teach You to Be Rich</em> is more immediately practical.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          Below we've also picked the best book for eliminating debt, the best long-term
          investing guide, and the best pick for readers who need to start from zero
          with no financial knowledge at all.
        </p>
        <p className="text-sm text-gray-600 italic mb-8">
          Prices verified against Amazon as of April 2026.
        </p>

        {/* Quick Comparison Table */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Quick Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="p-3 border-b border-gray-200">Book</th>
                  <th className="p-3 border-b border-gray-200">Author</th>
                  <th className="p-3 border-b border-gray-200">Best For</th>
                </tr>
              </thead>
              <tbody>
                {picks.map((p, i) => (
                  <tr
                    key={p.title}
                    className={i === 0 ? 'bg-yellow-50' : 'bg-white'}
                  >
                    <td className="p-3 border-b border-gray-100 font-semibold">
                      {p.title}
                    </td>
                    <td className="p-3 border-b border-gray-100">{p.author}</td>
                    <td className="p-3 border-b border-gray-100">{p.slot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The Picks */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            The Picks
          </h2>
          {picks.map((p) => (
            <article
              key={p.title}
              className="mb-10 pb-10 border-b border-gray-200 last:border-0"
            >
              <span
                className={`inline-block text-xs font-semibold px-2 py-1 rounded mb-2 ${p.slotColor}`}
              >
                {p.slot}
              </span>
              <h3
                className="text-2xl font-bold mb-1"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {p.title}
              </h3>
              <p className="text-gray-700 font-medium mb-1">by {p.author}</p>
              <p className="text-sm text-gray-500 mb-4">{p.meta}</p>
              <p className="text-gray-800 mb-4">{p.summary}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded">
                  <p className="text-sm font-semibold text-green-900 mb-2">Pros</p>
                  <ul className="list-disc pl-5 text-sm text-green-900 space-y-1">
                    {p.pros.map((pro) => (
                      <li key={pro}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <p className="text-sm font-semibold text-red-900 mb-2">Cons</p>
                  <ul className="list-disc pl-5 text-sm text-red-900 space-y-1">
                    {p.cons.map((con) => (
                      <li key={con}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded mb-4 text-sm text-amber-900">
                <strong>Skip this if</strong> {p.skip}
              </div>
              <BookCTA title={p.title} author={p.author} />
            </article>
          ))}
        </section>

        {/* Buying Guide */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Buying Guide
          </h2>
          <p className="text-gray-800 mb-4">
            <strong>Match the book to your current situation.</strong> Debt → Ramsey
            first. No debt, no investment system → Sethi. Have an investment account but
            no framework → Housel. Ready to invest seriously → Collins. Want to
            understand money before doing anything → Kiyosaki, then Housel.
          </p>
          <p className="text-gray-800 mb-4">
            <strong>Don't read all of them at once.</strong> Pick one, apply it for 90
            days, then reassess. The single biggest mistake in personal finance reading
            is accumulating frameworks without executing any of them.
          </p>
          <p className="text-gray-800 mb-4">
            <strong>Audiobooks work well for this category.</strong> Housel's{' '}
            <em>Psychology of Money</em> and Sethi's book both have strong Audible
            editions. If you commute, finance audiobooks during commute time is a
            high-leverage use of that window.
          </p>
          <p className="text-gray-800">
            For more self-help reading that compounds with the habits these books build,
            see our{' '}
            <Link
              href="/books/self-help/best-self-help-books-2026"
              className="text-blue-700 underline"
            >
              best self-help books to read in 2026
            </Link>{' '}
            and our deep dive on{' '}
            <Link
              href="/books/authors/best-james-clear-books"
              className="text-blue-700 underline"
            >
              James Clear's best books
            </Link>{' '}
            on habit formation.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          {faqs.map((f) => (
            <div key={f.q} className="mb-5">
              <p className="font-semibold text-gray-900 mb-1">{f.q}</p>
              <p className="text-gray-800">{f.a}</p>
            </div>
          ))}
        </section>

        {/* Final Verdict */}
        <section className="mb-10">
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
            <h2
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Final Verdict
            </h2>
            <p className="text-gray-900 mb-2">
              <strong>Best overall:</strong> <em>The Psychology of Money</em> — the
              framework that makes every other book on this list easier to apply.
            </p>
            <p className="text-gray-900 mb-2">
              <strong>Best action plan:</strong> <em>I Will Teach You to Be Rich</em> —
              the most practical starting point for readers who want to execute
              immediately.
            </p>
            <p className="text-gray-900 mb-2">
              <strong>Best for debt:</strong> <em>The Total Money Makeover</em> — the
              most battle-tested system for eliminating debt.
            </p>
            <p className="text-gray-900 mb-4">
              <strong>Best investing guide:</strong> <em>The Simple Path to Wealth</em> —
              the most honest, data-supported investing framework available.
            </p>
            <BookCTA title="The Psychology of Money" author="Morgan Housel" />
          </div>
        </section>

        {/* Related Reading */}
        <section>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Related Reading
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/books/self-help/best-self-help-books-2026"
              className="block border border-gray-200 hover:border-gray-400 rounded p-3 text-blue-700 hover:underline"
            >
              Best Self-Help Books to Read in 2026
            </Link>
            <Link
              href="/books/authors/best-james-clear-books"
              className="block border border-gray-200 hover:border-gray-400 rounded p-3 text-blue-700 hover:underline"
            >
              Best James Clear Books
            </Link>
            <Link
              href="/books/self-help"
              className="block border border-gray-200 hover:border-gray-400 rounded p-3 text-blue-700 hover:underline"
            >
              Browse all self-help books
            </Link>
            <Link
              href="/books/reader-picks/best-new-books-april-2026"
              className="block border border-gray-200 hover:border-gray-400 rounded p-3 text-blue-700 hover:underline"
            >
              Best New Books: April 2026
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
