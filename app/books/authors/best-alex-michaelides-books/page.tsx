import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = {
  title: 'Best Alex Michaelides Books',
  description:
    'The best Alex Michaelides books, ranked by reader fit: where to start, which one is moodiest, and which novel to skip first.',
  alternates: {
    canonical: 'https://bestpickzone.com/books/authors/best-alex-michaelides-books',
  },
  openGraph: {
    title: 'Best Alex Michaelides Books',
    description:
      'Start with The Silent Patient, pivot to The Fury for a sharper performance-heavy mystery, and save The Maidens for readers who want atmosphere over clean logic.',
    url: 'https://bestpickzone.com/books/authors/best-alex-michaelides-books',
    siteName: 'BestPickZone',
    type: 'article',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Author Roundups', href: '/books/authors' },
  { label: 'Best Alex Michaelides Books' },
]

const books = [
  {
    rank: 1,
    title: 'The Silent Patient',
    subtitle: 'Best Overall and Best Place to Start',
    author: 'Alex Michaelides',
    badge: 'Start Here',
    badgeClass: 'border border-emerald-300 bg-emerald-100 text-emerald-900',
    meta: 'Celadon Books · 304 pages · published February 5, 2019',
    vibe: 'Fast, twist-first psychological thriller with the cleanest hook',
    bestFor:
      'Readers who want the Alex Michaelides book with the strongest elevator pitch and the most dependable page-turning momentum',
    whyItWins:
      'It is still the clearest expression of what made him a phenomenon: a premise you can explain in one sentence, a sharp forward drive, and a final stretch designed for readers who like feeling the floor drop out beneath them.',
    description:
      'The Silent Patient remains the best Alex Michaelides book because it gives new readers the purest version of his strengths without asking them to buy into his mannerisms first. Alicia Berenson shoots her husband and then stops speaking; Theo Faber becomes obsessed with uncovering why. That setup is almost unfairly efficient. It creates immediate curiosity, and Michaelides knows how to keep feeding that curiosity with short scenes, withheld information, and a persistent sense that everyone on the page is telling a partial story. If you mainly read thrillers for propulsion, architecture, and the pleasure of a big reveal landing on time, this is the safest and strongest entry point.',
    skipIf:
      'Skip this if you mostly care about emotional realism or deep psychological complexity. The book is built to move and surprise more than to linger in ambiguity.',
  },
  {
    rank: 2,
    title: 'The Fury',
    subtitle: 'Best If You Want the Most Stylish Book',
    author: 'Alex Michaelides',
    badge: 'Most Playful',
    badgeClass: 'border border-sky-300 bg-sky-100 text-sky-900',
    meta: 'Celadon Books · 320 pages · published January 16, 2024',
    vibe: 'Meta, performative island mystery with a meaner sense of fun',
    bestFor:
      'Readers who liked the twist mechanics of The Silent Patient but want something more self-aware, theatrical, and voice-driven',
    whyItWins:
      'The Fury is the Alex Michaelides novel that feels most consciously written as entertainment. The narration is showier, the social world is glossier, and the whole book behaves more like a staged performance than a sealed case file.',
    description:
      'Set around a private Greek island, a celebrity friend group, and a murder filtered through Elliot Chase\'s slippery storytelling, The Fury is Michaelides at his most performative. That is both its appeal and its risk. If The Silent Patient is the clean commercial machine, The Fury is the flashier book that wants you to notice the storyteller doing the storytelling. For some readers that makes it the most fun Alex Michaelides book because the voice has more bite, the social dynamics have more venom, and the glamour gives the whole thing a different texture from standard domestic thrillers. It is not his best book overall, but it may be the one some thriller readers enjoy the most.',
    skipIf:
      'Skip this if you hate narrators who posture, tease, and manipulate the reader overtly. The book leans into performance on purpose.',
  },
  {
    rank: 3,
    title: 'The Maidens',
    subtitle: 'Best for Gothic Campus Mood, but the One to Save for Later',
    author: 'Alex Michaelides',
    badge: 'Skip First',
    badgeClass: 'border border-violet-300 bg-violet-100 text-violet-900',
    meta: 'Celadon Books · 336 pages · published June 15, 2021',
    vibe: 'Dark academia, Greek myth, grief, obsession, and more atmosphere than snap',
    bestFor:
      'Readers who want Cambridge cloisters, cultish student energy, and a thriller that sells mood before it sells precision',
    whyItWins:
      'When it works, it works because Michaelides merges his fascination with classic tragedy and damaged psyches into a very specific dark-academia package.',
    description:
      'The Maidens is the most divisive Alex Michaelides novel and that is exactly why it belongs in third place instead of first. Mariana Andros investigates the murder of a student at Cambridge and becomes convinced that a charismatic professor and his all-female circle are at the center of something rotten. The book has the strongest atmospheric identity in Michaelides\' catalog: Greek myth references, old-college melancholy, ritualized charisma, and a lingering sense of grief. But it is also the book most likely to frustrate readers who came for the crisp puzzle-engine of The Silent Patient. Read it when you want mood, obsession, and a slightly feverish campus-thriller texture more than airtight logic.',
    skipIf:
      'Skip this first if your main reason for reading Alex Michaelides is “I want the tightest thriller he wrote.” Start with The Silent Patient instead.',
  },
] as const

const quickAnswers = [
  {
    label: 'Best overall',
    answer: 'The Silent Patient',
    author: 'Alex Michaelides',
    text: 'The easiest recommendation because the premise lands instantly and the pacing stays locked in.',
  },
  {
    label: 'Best mood pick',
    answer: 'The Maidens',
    author: 'Alex Michaelides',
    text: 'The one for readers who care more about eerie atmosphere, academia, and obsession than mechanical neatness.',
  },
  {
    label: 'Most fun after book one',
    answer: 'The Fury',
    author: 'Alex Michaelides',
    text: 'The best second stop if you want something glossier, more playful, and more openly manipulative.',
  },
]

function getAmazonSearchUrl(title: string, author: string) {
  const query = encodeURIComponent(`${title} ${author}`)
  return `https://www.amazon.com/s?k=${query}&tag=althcu-20`
}

const faqs = [
  {
    q: 'What is the best Alex Michaelides book to read first?',
    a: 'The Silent Patient. It has the strongest hook, the least friction for new readers, and the cleanest example of how Michaelides structures suspense around withheld information and a final reveal.',
  },
  {
    q: 'Is The Fury better than The Silent Patient?',
    a: 'For most readers, no. The Fury is more stylish and more openly playful with narration, but The Silent Patient is still the more complete recommendation because its premise is stronger and its suspense engine is cleaner.',
  },
  {
    q: 'Which Alex Michaelides book has the most dark-academia feel?',
    a: 'The Maidens. It is the clear pick if you want Cambridge, Greek mythology, cultish student-group energy, and a more atmospheric psychological-thriller mood.',
  },
  {
    q: 'Which Alex Michaelides book should I skip first?',
    a: 'Skip The Maidens first if you are new to him. It has a strong mood and some passionate defenders, but it is the least reliable recommendation for someone who mainly wants the author at his sharpest.',
  },
]

const relatedGuides = [
  {
    href: '/books/genre-fiction',
    title: 'Genre Fiction Guides',
    text: 'The broader shelf if Alex Michaelides is pushing you deeper into thriller and suspense reading.',
  },
  {
    href: '/books/reader-picks/best-books-for-people-who-dont-like-reading',
    title: 'Best Books for People Who Don’t Like Reading',
    text: 'A strong next click for fast-moving fiction with immediate hooks and low startup friction.',
  },
  {
    href: '/books/best-book-club-books',
    title: 'Best Book Club Books',
    text: 'Useful if you want the kind of twist-heavy novels that generate instant post-finish discussion.',
  },
  {
    href: '/books/best-books-of-all-time',
    title: 'Best Books of All Time',
    text: 'A wider reading path when you want to compare thriller favorites against the bigger canon.',
  },
]

const articleText = `
${books.map((book) => `${book.title} ${book.subtitle} ${book.bestFor} ${book.whyItWins} ${book.description} ${book.skipIf}`).join(' ')}
${faqs.map((faq) => `${faq.q} ${faq.a}`).join(' ')}
`

const readingTime = getReadingTime(articleText)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Alex Michaelides Books',
  description:
    'Where to start with Alex Michaelides, which novel fits which reader mood, and which book to save for later.',
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: { '@type': 'Organization', name: 'BestPickZone' },
  mainEntityOfPage: 'https://bestpickzone.com/books/authors/best-alex-michaelides-books',
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Alex Michaelides Books',
  itemListElement: books.map((book) => ({
    '@type': 'ListItem',
    position: book.rank,
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

export default function BestAlexMichaelidesBooksPage() {
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

        <header className="mb-10 overflow-hidden rounded-[36px] border border-cyan-200 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(125,211,252,0.18),_transparent_30%),linear-gradient(135deg,#f8fafc_0%,#ffffff_45%,#ecfeff_100%)] p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-slate-900 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-white">
              Thriller Author Guide
            </span>
            <span>{formatReadingTime(readingTime)}</span>
            <span>Published June 13, 2026</span>
            <span>Last verified June 2026</span>
          </div>
          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <h1 className="mb-4 max-w-4xl text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                Best Alex Michaelides Books
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
                The best Alex Michaelides book is <em>The Silent Patient</em>. It is the
                cleanest starting point, the strongest single recommendation, and still the
                book that best explains why his name became shorthand for fast, twist-heavy
                psychological thrillers. If you want something glossier and more openly
                theatrical, move to <em>The Fury</em> next. If you specifically want dark
                academia, grief, and Greek-myth atmosphere, save <em>The Maidens</em> for
                that mood rather than reading it first.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/80 bg-white/85 p-5 shadow-lg backdrop-blur">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
                One-Glance Reading Path
              </p>
              <ol className="space-y-3 text-sm text-slate-700">
                <li className="rounded-2xl border border-cyan-100 bg-cyan-50 px-4 py-3">
                  <strong className="text-slate-900">1. Start with The Silent Patient</strong>
                  <br />
                  Best hook, least friction, strongest first impression.
                </li>
                <li className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3">
                  <strong className="text-slate-900">2. Go to The Fury</strong>
                  <br />
                  Better if you want voice, glamour, and a more playful narrator.
                </li>
                <li className="rounded-2xl border border-violet-100 bg-violet-50 px-4 py-3">
                  <strong className="text-slate-900">3. Save The Maidens for mood</strong>
                  <br />
                  Read when you want campus obsession and mythic atmosphere.
                </li>
              </ol>
            </div>
          </div>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          {quickAnswers.map((item) => (
            <div
              key={item.label}
              className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </p>
              <h2 className="mb-2 text-2xl font-bold text-slate-950">{item.answer}</h2>
              <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
              <Link
                href={getAmazonSearchUrl(item.answer, item.author)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-bold text-amber-700 transition-colors hover:text-amber-800"
              >
                Click here to find on Amazon
              </Link>
            </div>
          ))}
        </section>

        <section className="mb-10 overflow-hidden rounded-[34px] border border-slate-200 bg-slate-950 text-white shadow-sm">
          <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
            <div className="p-6 md:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Visual Map
              </p>
              <h2 className="mb-4 text-3xl font-bold">Which Alex Michaelides book fits your thriller mood?</h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300">
                His catalog is small, but the reading experience shifts more than the book count
                suggests. One novel is the pure hook machine, one is the glossy performer, and one
                is the mood-heavy campus book. The map below is meant to help with fit, not prove
                one universal ranking.
              </p>
            </div>

            <div className="bg-[linear-gradient(180deg,#082f49_0%,#0f172a_100%)] p-4 md:p-6">
              <svg viewBox="0 0 560 340" className="h-full w-full" role="img" aria-label="Map comparing Alex Michaelides books by atmosphere and twist intensity">
                <rect x="40" y="24" width="480" height="260" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />
                <line x1="84" y1="246" x2="490" y2="246" stroke="rgba(255,255,255,0.2)" />
                <line x1="84" y1="246" x2="84" y2="56" stroke="rgba(255,255,255,0.2)" />
                <text x="96" y="42" fill="#bae6fd" fontSize="14" fontWeight="700">
                  More atmosphere / mood
                </text>
                <text x="344" y="274" fill="#bae6fd" fontSize="14" fontWeight="700">
                  More overt twist energy
                </text>

                <circle cx="394" cy="136" r="44" fill="#22c55e" opacity="0.92" />
                <text x="394" y="132" textAnchor="middle" fill="#04130a" fontSize="14" fontWeight="800">
                  Silent
                </text>
                <text x="394" y="149" textAnchor="middle" fill="#04130a" fontSize="14" fontWeight="800">
                  Patient
                </text>

                <circle cx="446" cy="174" r="36" fill="#38bdf8" opacity="0.95" />
                <text x="446" y="179" textAnchor="middle" fill="#082032" fontSize="14" fontWeight="800">
                  Fury
                </text>

                <circle cx="202" cy="96" r="40" fill="#c084fc" opacity="0.95" />
                <text x="202" y="92" textAnchor="middle" fill="#21063b" fontSize="14" fontWeight="800">
                  The
                </text>
                <text x="202" y="109" textAnchor="middle" fill="#21063b" fontSize="14" fontWeight="800">
                  Maidens
                </text>

                <text x="352" y="52" fill="#e2e8f0" fontSize="12">Balanced</text>
                <text x="438" y="224" fill="#e2e8f0" fontSize="12">Glossy + playful</text>
                <text x="126" y="82" fill="#e2e8f0" fontSize="12">Dark academia</text>
              </svg>
            </div>
          </div>
        </section>

        <section className="mb-10 space-y-6">
          {books.map((book) => (
            <article
              key={book.title}
              className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid gap-0 md:grid-cols-[0.86fr_1.14fr]">
                <div className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#eff6ff_100%)] p-6 md:border-b-0 md:border-r md:p-7">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                      #{book.rank}
                    </span>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${book.badgeClass}`}>
                      {book.badge}
                    </span>
                  </div>
                  <h2 className="mb-2 text-3xl font-extrabold leading-tight text-slate-950">
                    {book.title}
                  </h2>
                  <p className="mb-3 text-base font-semibold text-cyan-800">{book.subtitle}</p>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">{book.meta}</p>

                  <div className="space-y-3 rounded-[24px] border border-white bg-white/90 p-4 shadow-sm">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Thriller vibe
                      </p>
                      <p className="text-sm leading-relaxed text-slate-700">{book.vibe}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Best for
                      </p>
                      <p className="text-sm leading-relaxed text-slate-700">{book.bestFor}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Why it ranks here
                      </p>
                      <p className="text-sm leading-relaxed text-slate-700">{book.whyItWins}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <p className="mb-4 text-base leading-8 text-slate-700">{book.description}</p>
                  <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900">
                    <strong>Skip this if:</strong> {book.skipIf}
                  </p>
                  <BookCTA title={book.title} author={book.author} />
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mb-10 rounded-[34px] border border-cyan-200 bg-[linear-gradient(135deg,#ecfeff_0%,#ffffff_45%,#f8fafc_100%)] p-6 shadow-sm md:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Verification Note
          </p>
          <h2 className="mb-4 text-3xl font-bold text-slate-950">What this page is doing differently</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <p className="text-sm leading-7 text-slate-700">
              Alex Michaelides has a small verified catalog, so this page is not pretending there
              are ten equally meaningful books to rank. It is built around the actual choice a
              searcher has to make: start with the blockbuster, go to the more theatrical island
              puzzle, or pick the dark-academia option for atmosphere.
            </p>
            <p className="text-sm leading-7 text-slate-700">
              Titles, publication dates, and availability were verified against Alex Michaelides&apos;
              official site, Macmillan/Celadon title pages, and Amazon in June 2026. Availability
              can change, so confirm before purchasing.
            </p>
          </div>
        </section>

        <section className="mb-10 rounded-[34px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            FAQ
          </p>
          <h2 className="mb-6 text-3xl font-bold text-slate-950">Alex Michaelides questions readers actually ask</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="mb-2 text-lg font-bold text-slate-950">{faq.q}</h3>
                <p className="text-sm leading-7 text-slate-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Related Reading
          </p>
          <h2 className="mb-4 text-3xl font-bold text-slate-950">Keep the cluster moving</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-bold text-slate-950">{guide.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{guide.text}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
