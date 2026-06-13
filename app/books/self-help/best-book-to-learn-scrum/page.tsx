import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = {
  title: 'Best Book to Learn Scrum',
  description:
    'The best book to learn Scrum is Essential Scrum if you want one paid book, but the official Scrum Guide should be your first read. Here is how the top Scrum books split by reader type.',
  alternates: {
    canonical: 'https://bestpickzone.com/books/self-help/best-book-to-learn-scrum',
  },
  openGraph: {
    title: 'Best Book to Learn Scrum',
    description:
      'A practical guide to the best Scrum books for beginners, Scrum Masters, and teams trying to fix weak implementations.',
    url: 'https://bestpickzone.com/books/self-help/best-book-to-learn-scrum',
    type: 'article',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Self-Help & Non-Fiction', href: '/books/self-help' },
  { label: 'Best Book to Learn Scrum' },
]

const books = [
  {
    title: 'Essential Scrum',
    author: 'Kenneth Rubin',
    bestFor: 'Best overall paid book to learn Scrum',
    meta: '2012 · 496 pages · Deep practical reference',
    whyItWins:
      'It is the best single book to buy when you want the framework, vocabulary, roles, events, and implementation details in one place without bouncing among blog posts.',
    skipIf:
      'Skip this if you want something extremely short or motivational. Essential Scrum is a real desk reference, not a breezy airport-business read.',
    description:
      'Essential Scrum by Kenneth Rubin is the best book to learn Scrum for most buyers because it does the hard middle job well: more useful than the official guide alone, but still organized around Scrum itself rather than around generic agile culture. Rubin explains roles, artifacts, estimation, planning, backlog refinement, and release thinking in a way that helps both new practitioners and managers who need the same language. If you only buy one Scrum book, this is the one that most often keeps paying off after the first read.',
  },
  {
    title: 'The Scrum Guide',
    author: 'Ken Schwaber and Jeff Sutherland',
    bestFor: 'Best first read before spending money',
    meta: '2020 revision · Official guide · Short and free',
    whyItWins:
      'It is the source text. Any Scrum book that conflicts with it is asking you to learn someone else&apos;s local variation first.',
    skipIf:
      'Skip this as your only resource if you need examples, edge cases, or help translating official language into day-to-day team behavior.',
    description:
      'The Scrum Guide is not the best paid book to learn Scrum, but it is the first thing you should read because it defines Scrum as the framework&apos;s creators describe it. It is brief, highly compressed, and sometimes frustratingly abstract for beginners, which is exactly why it works best as a foundation rather than as a stand-alone learning path. Read it first, then let a fuller book explain how the rules behave in real teams.',
  },
  {
    title: 'Scrum Mastery',
    author: 'Geoff Watts',
    bestFor: 'Best for aspiring or active Scrum Masters',
    meta: '2013 · 276 pages · Role-focused practical guide',
    whyItWins:
      'It focuses on the part of Scrum that many books under-teach: how the servant-leadership role actually looks when a team is messy, uneven, political, or stuck.',
    skipIf:
      'Skip this if you are not in or near the Scrum Master role and simply need the framework basics first. Read Essential Scrum before this one.',
    description:
      'Scrum Mastery is the book to buy after you understand the Scrum framework but still do not feel confident facilitating it. Geoff Watts spends less time re-defining Scrum and more time showing what a strong Scrum Master notices, protects, and improves. That makes it much more useful for real delivery work than books that stay at the level of ceremonies and slogans.',
  },
  {
    title: 'Fixing Your Scrum',
    author: 'Todd Miller and Ryan Ripley',
    bestFor: 'Best troubleshooting book for teams already doing Scrum badly',
    meta: '2024 · Practical problem-solving guide',
    whyItWins:
      'It is built around actual failure patterns instead of pretending every team starts with a clean slate and supportive leadership.',
    skipIf:
      'Skip this if your team has not yet learned the baseline Scrum model. It works best after the vocabulary is already in place.',
    description:
      'Fixing Your Scrum is the best choice for teams who say they “do Scrum” but live inside zombie standups, blurry Product Owner decisions, and sprints that feel like renamed task lists. Miller and Ripley write for the reality that weak Scrum implementations are usually social and structural problems, not just terminology problems. That makes this a better second or third book than a first one.',
  },
  {
    title: 'Scrum: The Art of Doing Twice the Work in Half the Time',
    author: 'Jeff Sutherland and J.J. Sutherland',
    bestFor: 'Best for executives or skeptics who need the case for Scrum',
    meta: '2014 · 256 pages · Business-facing narrative',
    whyItWins:
      'It explains why Scrum matters in plain business language and stories, which is often what wins over leaders who will never read a framework manual.',
    skipIf:
      'Skip this if you need mechanics more than inspiration. It sells the why of Scrum much better than it teaches the exact how.',
    description:
      'Scrum by Jeff and J.J. Sutherland is the easiest book on this list to hand a manager, founder, or stakeholder who wants to understand why teams adopt Scrum in the first place. It is more narrative and more evangelical than the other books here, which is both its strength and its limit. Read it when you need buy-in, not when you need detailed implementation guidance.',
  },
] as const

const faqs = [
  {
    q: 'What is the best book to learn Scrum if I only buy one?',
    a: 'Essential Scrum by Kenneth Rubin is the best single book to buy because it combines framework clarity with enough implementation detail to stay useful after the first week. The official Scrum Guide should still be your first read, but Essential Scrum is the best one-book purchase.',
  },
  {
    q: 'Should I read the Scrum Guide before any other Scrum book?',
    a: 'Yes. The Scrum Guide is short, official, and sets the baseline. The reason many people bounce off it is not that it is bad, but that it is compressed. Read it first, then use a fuller book like Essential Scrum to unpack the terms and decisions.',
  },
  {
    q: 'What is the best Scrum book for Scrum Masters specifically?',
    a: 'Scrum Mastery by Geoff Watts is the strongest role-specific choice because it focuses on coaching behavior, servant leadership, and the practical tension points of the role instead of just repeating the framework definitions.',
  },
  {
    q: 'What if my team already uses Scrum but it feels broken?',
    a: 'Go to Fixing Your Scrum. It is designed for teams that already have ceremonies on the calendar but still feel confused, performative, or stuck. That is a different problem than not knowing Scrum at all.',
  },
]

const relatedGuides = [
  {
    href: '/books/self-help/best-self-help-books-2026',
    title: 'Best Self-Help Books to Read in 2026',
    text: 'A broader non-fiction guide when you want behavior change, productivity, or mindset books outside Scrum.',
  },
  {
    href: '/books/best-books-on-habits-and-productivity',
    title: 'Best Books on Habits and Productivity',
    text: 'Useful if your actual problem is execution rhythm rather than Scrum knowledge.',
  },
  {
    href: '/books/best-business-books',
    title: 'Best Business Books',
    text: 'A stronger next stop when you are buying for a manager or founder, not a delivery team.',
  },
  {
    href: '/books/best-books-on-psychology',
    title: 'Best Books on Psychology',
    text: 'Helpful when the bottleneck is people dynamics, motivation, or decision-making rather than framework mechanics.',
  },
]

const articleText = `
${books.map((book) => `${book.title} ${book.author} ${book.bestFor} ${book.whyItWins} ${book.skipIf} ${book.description}`).join(' ')}
${faqs.map((faq) => `${faq.q} ${faq.a}`).join(' ')}
`

const readingTime = getReadingTime(articleText)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Book to Learn Scrum',
  description:
    'A practical ranking of the best Scrum books for beginners, Scrum Masters, executives, and teams trying to fix weak Scrum.',
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: { '@type': 'Organization', name: 'BestPickZone' },
  mainEntityOfPage: 'https://bestpickzone.com/books/self-help/best-book-to-learn-scrum',
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Book to Learn Scrum',
  itemListElement: books.map((book, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Book',
      name: book.title,
      author: { '@type': 'Person', name: book.author },
      description: book.description,
    },
  })),
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function BestBookToLearnScrumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        <header className="mb-10 overflow-hidden rounded-[32px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-emerald-100 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Agile Books
            </span>
            <span>{formatReadingTime(readingTime)}</span>
            <span>Published June 13, 2026</span>
            <span>Last verified June 2026</span>
          </div>
          <h1 className="mb-4 max-w-4xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Best Book to Learn Scrum
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
            The best book to learn Scrum is <em>Essential Scrum</em> if you want one
            paid book that is actually useful after day one. The official{' '}
            <em>Scrum Guide</em> should still be your first read because it defines the
            framework, but it is too compressed to carry most beginners by itself. Below
            is the cleaner split: best overall book, best first read, best Scrum Master
            book, best troubleshooting book, and the one to hand skeptical leaders.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            Titles, authors, publication details, and availability were verified against
            Amazon and official Scrum sources in June 2026.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Best paid book
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Essential Scrum</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The most complete single purchase for people who want to learn Scrum properly.
            </p>
          </div>
          <div className="rounded-3xl border border-sky-200 bg-sky-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Best first read
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">The Scrum Guide</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Short, official, and essential before anyone teaches you their version of Scrum.
            </p>
          </div>
          <div className="rounded-3xl border border-violet-200 bg-violet-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
              Best role book
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Scrum Mastery</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Best if you are the person who actually has to make Scrum work in a team.
            </p>
          </div>
        </section>

        <section className="mb-12 overflow-hidden rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Visual map
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Which Scrum book matches your actual problem?
            </h2>
          </div>
          <svg viewBox="0 0 920 320" className="w-full" role="img" aria-label="Scrum book fit map">
            <rect x="40" y="40" width="240" height="90" rx="26" fill="#fef3c7" />
            <rect x="340" y="40" width="240" height="90" rx="26" fill="#dbeafe" />
            <rect x="640" y="40" width="240" height="90" rx="26" fill="#ede9fe" />
            <rect x="190" y="190" width="240" height="90" rx="26" fill="#dcfce7" />
            <rect x="500" y="190" width="240" height="90" rx="26" fill="#fee2e2" />
            <path d="M280 84 H340" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8 8" />
            <path d="M580 84 H640" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8 8" />
            <path d="M460 130 V190" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8 8" />
            <text x="72" y="76" fill="#0f172a" fontSize="18" fontWeight="700">Need one book to buy</text>
            <text x="72" y="104" fill="#334155" fontSize="16">Choose Essential Scrum</text>
            <text x="374" y="76" fill="#0f172a" fontSize="18" fontWeight="700">Need the official baseline</text>
            <text x="374" y="104" fill="#334155" fontSize="16">Read The Scrum Guide</text>
            <text x="676" y="76" fill="#0f172a" fontSize="18" fontWeight="700">You are the Scrum Master</text>
            <text x="676" y="104" fill="#334155" fontSize="16">Read Scrum Mastery</text>
            <text x="218" y="226" fill="#0f172a" fontSize="18" fontWeight="700">Your team is faking Scrum</text>
            <text x="218" y="254" fill="#334155" fontSize="16">Read Fixing Your Scrum</text>
            <text x="540" y="226" fill="#0f172a" fontSize="18" fontWeight="700">Leaders need convincing</text>
            <text x="540" y="254" fill="#334155" fontSize="16">Hand them Scrum</text>
          </svg>
        </section>

        <section className="mb-12 rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Read the official source first
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-700">
            Before you buy anything, read the official Scrum Guide once all the way
            through. It is free, short, and important because it defines Scrum as Ken
            Schwaber and Jeff Sutherland describe it. Then come back and buy the book
            that matches the problem you actually have.
          </p>
          <Link
            href="https://scrumguides.org/scrum-guide.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Read the official Scrum Guide
          </Link>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            Best Scrum books, ranked by what they help with
          </h2>
          <div className="space-y-6">
            {books.map((book, index) => (
              <article
                key={book.title}
                className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    #{index + 1}
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                    {book.bestFor}
                  </span>
                  <span className="text-sm text-gray-500">{book.meta}</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {book.title} by {book.author}
                </h3>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  {book.whyItWins}
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  {book.description}
                </p>
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-700">
                    Skip this if
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-rose-900">{book.skipIf}</p>
                </div>
                {book.title === 'The Scrum Guide' ? (
                  <div className="mt-4">
                    <Link
                      href="https://scrumguides.org/scrum-guide.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
                    >
                      Read the official guide free
                    </Link>
                  </div>
                ) : (
                  <BookCTA title={book.title} author={book.author} />
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[32px] border border-amber-200 bg-amber-50 p-6 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Start here
          </p>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Buy <em>Essential Scrum</em>, but only after you read the official guide
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-700">
            That combination gives you the cleanest learning path. The Scrum Guide keeps
            the definition straight. <em>Essential Scrum</em> makes it usable.
          </p>
          <BookCTA title="Essential Scrum" author="Kenneth Rubin" />
        </section>

        <section className="mb-12 rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">Related reading</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">{guide.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{guide.text}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
