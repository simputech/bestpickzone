import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best Books for 12-Year-Old Boys Summer 2026',
  description:
    'The best books for 12-year-old boys in summer 2026, ranked by reader fit: Holes, Hatchet, The Lightning Thief, The Crossover, and The Wild Robot.',
  alternates: {
    canonical:
      'https://bestpickzone.com/books/kids-and-ya/best-books-for-12-year-old-boys-summer-2026',
  },
  openGraph: {
    title: 'Best Books for 12-Year-Old Boys Summer 2026',
    description:
      'A summer 2026 guide for 12-year-old boys with clear winner logic, honest tradeoffs, and Amazon links for every pick.',
    url: 'https://bestpickzone.com/books/kids-and-ya/best-books-for-12-year-old-boys-summer-2026',
    type: 'article',
  },
}, { category: 'kids-and-ya' })

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Kids & Young Adult', href: '/books/kids-and-ya' },
  { label: 'Best Books for 12-Year-Old Boys Summer 2026' },
]

const books = [
  {
    title: 'Holes',
    author: 'Louis Sachar',
    bestFor: 'Best overall summer read for most 12-year-old boys',
    meta: '1998 · 272 pages · Realistic adventure / mystery',
    whyItWins:
      'It solves the biggest summer-reading problem at this age: getting a kid to keep turning pages without feeling like he is being assigned virtue.',
    skipIf:
      'Skip this if the reader only wants dragons, magic systems, or nonstop action. The hook here is plotting, payoffs, and voice rather than fantasy spectacle.',
    description:
      'Holes is the best books-for-12-year-old-boys summer 2026 pick because it is fast, funny, and structurally smarter than most middle grade adventure novels. Stanley Yelnats gets sent to Camp Green Lake, where the boys are forced to dig holes every day under a punishment system that slowly reveals itself as a treasure hunt, a family curse story, and a friendship novel all at once. Sachar writes in short, clean chapters that create momentum without flattening the story. This is the book to hand a kid who says he does not want anything childish but also does not want a dense classic.',
  },
  {
    title: 'Hatchet',
    author: 'Gary Paulsen',
    bestFor: 'Best survival story',
    meta: '1987 · 208 pages · Wilderness survival',
    whyItWins:
      'Almost no middle grade novel is better at making competence feel earned rather than magically granted.',
    skipIf:
      'Skip this if the reader wants a cast of funny friends or constant dialogue. Brian spends most of the book alone, and that solitude is the whole point.',
    description:
      'Hatchet remains one of the strongest summer books for 12-year-old boys because it respects the fantasy of self-reliance without turning it into cartoon heroism. Brian survives a plane crash in the Canadian wilderness with a single hatchet and has to learn, mistake by mistake, what keeps a person alive. Paulsen does not romanticize the work: the berries are wrong, the shelter is inadequate, the fear is embarrassing, and progress comes slowly. For boys drawn to survival YouTube, camping, or outdoors stories, this is still the cleanest entry point.',
  },
  {
    title: 'The Lightning Thief',
    author: 'Rick Riordan',
    bestFor: 'Best series starter',
    meta: '2005 · 384 pages · Mythology adventure',
    whyItWins:
      'If the goal is not one good book but a whole reading streak, this is the easiest launch point on the list.',
    skipIf:
      'Skip this if the reader is already tired of mythological monsters, prophecy plots, or school-to-secret-world setups. The pleasures here are energy and humor, not novelty.',
    description:
      'The Lightning Thief works especially well for 12-year-old boys who want a book with motion, jokes, and immediate next-book momentum. Percy Jackson discovers he is a demigod, gets pulled into a theft he did not commit, and heads into a cross-country quest with Annabeth and Grover. Riordan understands chapter endings better than almost anyone writing for this age band: nearly every section closes with a reason to keep going. It also helps that Percy is funny without being smug and insecure without being passive.',
  },
  {
    title: 'The Crossover',
    author: 'Kwame Alexander',
    bestFor: 'Best for sports-minded or reluctant readers',
    meta: '2014 · 256 pages · Novel in verse',
    whyItWins:
      'It gives a 12-year-old a full emotional story while looking physically less intimidating than a standard prose novel.',
    skipIf:
      'Skip this if the reader hates basketball and refuses anything written in verse. The form is a strength, but it is still a visible style choice.',
    description:
      'The Crossover is the smartest recommendation when a 12-year-old boy wants something current-feeling, emotional, and finishable in a few sittings. Josh Bell narrates the rise and strain of a basketball season, his relationship with his twin brother, and a family story that turns heavier than the book first appears. Because Alexander writes in verse, the pages move quickly, but the rhythm does real storytelling work rather than functioning as a gimmick. This is one of the safest picks for a boy who has athletic interests but does not think of himself as a reader.',
  },
  {
    title: 'The Wild Robot',
    author: 'Peter Brown',
    bestFor: 'Best read-aloud or family crossover pick',
    meta: '2016 · 320 pages · Science fiction / nature fable',
    whyItWins:
      'It balances machine curiosity, animal behavior, and genuine tenderness without ever turning syrupy.',
    skipIf:
      'Skip this if the reader wants gritty realism or older YA intensity. This book aims for wonder and emotional clarity, not edge.',
    description:
      'The Wild Robot is the right summer pick for boys who like science, animals, or stories that feel cinematic without becoming noisy. Roz, a robot washed onto an island, has to learn how its ecosystem works and eventually becomes responsible for more life than it expected. Brown keeps the prose simple enough for independent middle grade readers but layered enough that parents and teachers do not feel they are reading down. It is also one of the strongest bridge books between family read-aloud and true solo reading.',
  },
] as const

const faqs = [
  {
    q: 'What is the best book for a 12-year-old boy to read in summer 2026?',
    a: 'Holes by Louis Sachar is the best all-purpose pick because it moves quickly, feels smart rather than preachy, and works for both strong readers and boys who only read when the plot is really pulling them along. Hatchet is the better choice if the reader specifically wants survival and outdoor problem-solving.',
  },
  {
    q: 'What if the 12-year-old boy says he hates reading?',
    a: 'Start with The Crossover if he likes sports or with Holes if he likes mystery and humor. Both remove the “this looks like school” feeling that makes many summer books fail before page 20. The Lightning Thief is the next step if you want to hook him into a series.',
  },
  {
    q: 'Are these books only for boys?',
    a: 'No. These are strong books for many 11- to 13-year-old readers. This page is targeted to the search query “best books for 12 year old boys summer 2026,” but the actual recommendations are based on reading fit, pace, and interest patterns rather than stereotypes.',
  },
  {
    q: 'Which book on this list is best for an advanced reader?',
    a: 'Holes is the most structurally rewarding, because the way Sachar ties the timelines and payoffs together gets better the more attention a reader pays. The Wild Robot is the better advanced pick if the reader likes quieter books with more thematic reflection.',
  },
]

const relatedGuides = [
  {
    href: '/books/kids-and-ya/best-2026-summer-reading-for-12-year-old-girls',
    title: 'Best 2026 Summer Reading for 12-Year-Old Girls',
    text: 'A parallel age-specific guide with stronger coming-of-age and voice-driven picks.',
  },
  {
    href: '/books/kids-and-ya/best-2026-summer-reading-for-high-school-students',
    title: 'Best 2026 Summer Reading for High School Students',
    text: 'Useful when the reader is already aging into heavier themes and longer books.',
  },
  {
    href: '/books/best-books-for-reluctant-readers',
    title: 'Best Books for Reluctant Readers',
    text: 'Better fit if the main issue is resistance rather than age.',
  },
  {
    href: '/books/best-fantasy-books-for-teens',
    title: 'Best Fantasy Books for Teens',
    text: 'A good next step after Percy Jackson for kids who want bigger worlds and longer series.',
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
  headline: 'Best Books for 12-Year-Old Boys Summer 2026',
  description:
    'The best books for 12-year-old boys in summer 2026, ranked by reading fit, pacing, and honest tradeoffs.',
  datePublished: '2026-06-13',
  dateModified: '2026-06-26',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: { '@type': 'Organization', name: 'BestPickZone' },
  mainEntityOfPage:
    'https://bestpickzone.com/books/kids-and-ya/best-books-for-12-year-old-boys-summer-2026',
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

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Books for 12-Year-Old Boys Summer 2026',
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

export default function BestBooksFor12YearOldBoysPage() {
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

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        <header className="mb-10 overflow-hidden rounded-[32px] border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-amber-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-sky-100 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-sky-700">
              Summer Reading
            </span>
            <span>{formatReadingTime(readingTime)}</span>
            <span>Published June 13, 2026</span>
            <span>For ages 11-13</span>
          </div>
          <h1 className="mb-4 max-w-4xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Best Books for 12-Year-Old Boys Summer 2026
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
            The best book for a 12-year-old boy in summer 2026 is <em>Holes</em> by
            Louis Sachar. It is the rare middle grade novel that feels fun first and
            clever second, which is exactly why boys who claim they are “not readers”
            often finish it. If he wants survival, start with <em>Hatchet</em>. If the
            goal is launching a whole series, hand him <em>The Lightning Thief</em>.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            Titles, authors, and availability were verified against Amazon as of June
            2026. Availability can change, so confirm before purchasing.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Best overall
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Holes</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The safest high-hit-rate pick for plot, humor, and page-turning momentum.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Best adventure
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Hatchet</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Still the best pure survival book at this age when self-reliance is the draw.
            </p>
          </div>
          <div className="rounded-3xl border border-violet-200 bg-violet-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
              Best series start
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">The Lightning Thief</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The easiest pick when you want one good summer book to become five more.
            </p>
          </div>
        </section>

        <section className="mb-12 overflow-hidden rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Visual map
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Match the book to the kind of reader in front of you
            </h2>
          </div>
          <svg viewBox="0 0 920 320" className="w-full" role="img" aria-label="Reading fit map for 12-year-old boys">
            <rect x="20" y="36" width="180" height="88" rx="24" fill="#e0f2fe" />
            <rect x="240" y="36" width="180" height="88" rx="24" fill="#fef3c7" />
            <rect x="460" y="36" width="180" height="88" rx="24" fill="#dcfce7" />
            <rect x="680" y="36" width="220" height="88" rx="24" fill="#ede9fe" />
            <rect x="130" y="192" width="180" height="88" rx="24" fill="#fee2e2" />
            <rect x="380" y="192" width="180" height="88" rx="24" fill="#dbeafe" />
            <rect x="630" y="192" width="180" height="88" rx="24" fill="#ecfccb" />
            <path d="M200 80 H240" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8 8" />
            <path d="M420 80 H460" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8 8" />
            <path d="M640 80 H680" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8 8" />
            <path d="M510 124 V192" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8 8" />
            <path d="M260 124 V192" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8 8" />
            <path d="M760 124 V192" stroke="#94a3b8" strokeWidth="4" strokeDasharray="8 8" />
            <text x="54" y="68" fill="#0f172a" fontSize="18" fontWeight="700">Wants humor + mystery</text>
            <text x="54" y="96" fill="#334155" fontSize="16">Start with Holes</text>
            <text x="274" y="68" fill="#0f172a" fontSize="18" fontWeight="700">Wants pure survival</text>
            <text x="274" y="96" fill="#334155" fontSize="16">Start with Hatchet</text>
            <text x="494" y="68" fill="#0f172a" fontSize="18" fontWeight="700">Needs a series</text>
            <text x="494" y="96" fill="#334155" fontSize="16">Start with Percy Jackson</text>
            <text x="714" y="68" fill="#0f172a" fontSize="18" fontWeight="700">Needs quick page wins</text>
            <text x="714" y="96" fill="#334155" fontSize="16">Start with The Crossover</text>
            <text x="164" y="226" fill="#0f172a" fontSize="18" fontWeight="700">Already reads well</text>
            <text x="164" y="254" fill="#334155" fontSize="16">Holes holds up best</text>
            <text x="412" y="226" fill="#0f172a" fontSize="18" fontWeight="700">Likes tech + animals</text>
            <text x="412" y="254" fill="#334155" fontSize="16">Try The Wild Robot</text>
            <text x="664" y="226" fill="#0f172a" fontSize="18" fontWeight="700">Need family read-aloud</text>
            <text x="664" y="254" fill="#334155" fontSize="16">The Wild Robot wins again</text>
          </svg>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            Best books for 12-year-old boys, ranked by reader fit
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
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                    {book.bestFor}
                  </span>
                  <span className="text-sm text-gray-500">{book.meta}</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {book.title} by {book.author}
                </h3>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                  Why it works
                </p>
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
                <BookCTA title={book.title} author={book.author} />
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[32px] border border-amber-200 bg-amber-50 p-6 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Start here
          </p>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            If you only buy one, make it <em>Holes</em>
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-700">
            <em>Holes</em> is the strongest single recommendation because it works across the
            widest range of 12-year-old boys: athletic kids, funny kids, quiet kids, kids
            who like puzzle payoffs, and kids who are skeptical of books that feel too
            earnest. It is specific, weird, and satisfying in a way that survives rereading.
          </p>
          <BookCTA title="Holes" author="Louis Sachar" />
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
