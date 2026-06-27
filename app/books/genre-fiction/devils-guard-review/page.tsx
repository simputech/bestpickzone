import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: "Devil's Guard Review: Best WWII and Vietnam War Book?",
  description:
    "A direct Devil's Guard review for readers searching for the best WWII and Vietnam book: what the novel-memoir hybrid does well, where it is controversial, and who should skip it.",
  alternates: {
    canonical: 'https://bestpickzone.com/books/genre-fiction/devils-guard-review',
  },
  openGraph: {
    title: "Devil's Guard Review: Best WWII and Vietnam War Book?",
    description:
      "An honest Devil's Guard review with clear verdict logic, controversy notes, and related WWII and military reading paths.",
    url: 'https://bestpickzone.com/books/genre-fiction/devils-guard-review',
    type: 'article',
  },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  category: 'genre-fiction' })

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Genre Fiction', href: '/books/genre-fiction' },
  { label: "Devil's Guard Review" },
]

const faqs = [
  {
    q: "Is Devil's Guard the best WWII and Vietnam war book to start with?",
    a: "No, not for most readers. If you want the best first WWII book, start with a cleaner, better-sourced recommendation such as the books in our Best Books About World War II guide. Devil's Guard is strongest for readers specifically looking for a dark French Foreign Legion narrative that bridges the aftermath of World War II and the Indochina war.",
  },
  {
    q: "What kind of book is Devil's Guard?",
    a: "It is usually shelved as a war memoir or military classic, but it reads with the velocity and grim color of pulp military fiction. That hybrid quality is exactly why some readers love it and why others distrust it.",
  },
  {
    q: 'Who should skip Devil&apos;s Guard?',
    a: "Skip it if you need transparent sourcing, polished historical framing, or a morally guided reading experience. The book's draw is the brutal point of view and march-like momentum, not careful contextual scholarship.",
  },
  {
    q: 'How long is Devil&apos;s Guard?',
    a: "The commonly available Dell/Delta paperback editions are 336 pages, which makes it shorter than many WWII doorstoppers. The reading commitment is moderate, but the tone is much harsher than the page count suggests.",
  },
]

const relatedGuides = [
  {
    href: '/books/genre-fiction/best-world-war-ii-books',
    title: 'Best Books About World War II',
    text: 'A better starting point if you want the strongest WWII books overall before chasing cult titles.',
  },
  {
    href: '/books/genre-fiction/best-military-fiction-books',
    title: 'Best Military Fiction Books',
    text: 'Useful if what you really want is combat intensity, voice, and moral pressure rather than historical argument.',
  },
  {
    href: '/books/genre-fiction/best-history-books-for-beginners',
    title: 'Best History Books for Beginners',
    text: 'The safer path if you want context before reading a darker, more controversial war narrative.',
  },
  {
    href: '/books/genre-fiction/best-cold-war-thriller-books',
    title: 'Best Cold War Thriller Books',
    text: 'Good next move if you like geopolitical tension but want stronger plotting and cleaner editorial framing.',
  },
]

const reviewSections = [
  {
    title: 'What the book is actually doing',
    text: "Devil's Guard is built around a hard-edged premise: former German soldiers, including ex-SS men, reappear in the French Foreign Legion and fight in Indochina. George Robert Elford's book is remembered less for polished prose than for raw movement, battlefield ugliness, and the lurid feeling that postwar Europe did not actually end so much as spill into another war zone. If you read it expecting a standard campaign history, the book will feel unstable. If you read it as a cult war narrative about violent men carrying one war into another, its appeal becomes easier to understand.",
  },
  {
    title: 'Why readers still search for it',
    text: "The search intent around Devil's Guard is usually not “best military memoir” in general. It is narrower: readers want a single book that feels like a bridge between World War II fallout and the violence of Indochina, and they want it told from inside the machine rather than from a historian's lectern. That is the gap the book fills. It is fast, nasty, and specific in the way many cleaned-up war histories are not.",
  },
  {
    title: 'The tradeoff you need to accept',
    text: "This is not the book to choose if trust in factual scaffolding is your top priority. The appeal of Devil's Guard and the suspicion around it are tangled together. Even readers who admire it often do so because it feels forbidden, half-documented, and too ugly to have been designed by a normal publishing committee. That can produce fascination, but it is not the same thing as clean reliability.",
  },
] as const

const articleText = `
Devil's Guard George Robert Elford Dell 336 pages August 10 1988 French Foreign Legion Indochina.
${reviewSections.map((section) => `${section.title} ${section.text}`).join(' ')}
${faqs.map((faq) => `${faq.q} ${faq.a}`).join(' ')}
`

const readingTime = getReadingTime(articleText)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Devil's Guard Review: Is It the Best WWII and Vietnam War Book?",
  description:
    "An honest review of Devil's Guard, with a direct verdict on who should read it and who should choose a more reliable WWII book first.",
  datePublished: '2026-06-13',
  dateModified: '2026-06-26',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: { '@type': 'Organization', name: 'BestPickZone' },
  mainEntityOfPage: 'https://bestpickzone.com/books/genre-fiction/devils-guard-review',
}

const bookSchema = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: "Devil's Guard",
  author: {
    '@type': 'Person',
    name: 'George Robert Elford',
  },
  datePublished: '1988-08-10',
  numberOfPages: 336,
  bookFormat: 'Paperback',
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

export default function DevilsGuardReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="mx-auto max-w-4xl px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        <header className="mb-10 overflow-hidden rounded-[32px] border border-stone-300 bg-gradient-to-br from-stone-100 via-white to-amber-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-stone-800 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-white">
              Single-Book Review
            </span>
            <span>{formatReadingTime(readingTime)}</span>
            <span>Published June 13, 2026</span>
            <span>336 pages</span>
          </div>
          <h1 className="mb-4 max-w-3xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Devil&apos;s Guard Review: Is It the Best WWII and Vietnam War Book?
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
            <em>Devil&apos;s Guard</em> is not the best first World War II book for most
            readers, but it is one of the most memorable for readers chasing a grim
            bridge between Europe&apos;s war wreckage and the violence of Indochina. It is
            strongest for people who want a French Foreign Legion book with speed,
            menace, and a cult reputation. If you need transparent sourcing or a cleaner
            historical foundation, start somewhere else.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            Title, author, page count, publication date, and availability were checked
            against Amazon in June 2026. The book&apos;s reputation includes long-running
            debate about how literally it should be read, and this review treats that as
            part of the buying decision rather than hiding it.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Best for
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Cult war-book readers</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Readers who care as much about intensity and voice as about clean historiography.
            </p>
          </div>
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Biggest caveat
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Contested trust level</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              This is not the book to choose if your main goal is stable, classroom-clean sourcing.
            </p>
          </div>
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700">
              Skip this if
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">You want a safe first pick</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Better first routes are our broader WWII and military-fiction guides.
            </p>
          </div>
        </section>

        <section className="mb-12 overflow-hidden rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Visual map
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Why this book keeps getting searched decades later
            </h2>
          </div>
          <svg viewBox="0 0 920 280" className="w-full" role="img" aria-label="Timeline map for Devil's Guard">
            <circle cx="120" cy="140" r="52" fill="#e7e5e4" />
            <circle cx="356" cy="140" r="52" fill="#fde68a" />
            <circle cx="592" cy="140" r="52" fill="#fed7aa" />
            <circle cx="800" cy="140" r="52" fill="#fecaca" />
            <path d="M172 140 H304" stroke="#94a3b8" strokeWidth="5" />
            <path d="M408 140 H540" stroke="#94a3b8" strokeWidth="5" />
            <path d="M644 140 H748" stroke="#94a3b8" strokeWidth="5" />
            <text x="78" y="132" fill="#0f172a" fontSize="18" fontWeight="700">WWII</text>
            <text x="48" y="158" fill="#334155" fontSize="15">European collapse</text>
            <text x="308" y="132" fill="#0f172a" fontSize="18" fontWeight="700">Aftermath</text>
            <text x="283" y="158" fill="#334155" fontSize="15">Displaced soldiers</text>
            <text x="548" y="132" fill="#0f172a" fontSize="18" fontWeight="700">Legion</text>
            <text x="515" y="158" fill="#334155" fontSize="15">French Foreign Legion</text>
            <text x="748" y="132" fill="#0f172a" fontSize="18" fontWeight="700">Indochina</text>
            <text x="721" y="158" fill="#334155" fontSize="15">Violence follows east</text>
            <text x="124" y="42" fill="#334155" fontSize="15">What makes the book unusual is not style alone.</text>
            <text x="124" y="64" fill="#334155" fontSize="15">It compresses multiple wars into one dark momentum line.</text>
          </svg>
        </section>

        <section className="mb-12 space-y-5">
          {reviewSections.map((section) => (
            <article key={section.title} className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-2xl font-bold text-gray-900">{section.title}</h2>
              <p className="text-base leading-relaxed text-gray-700">{section.text}</p>
            </article>
          ))}
        </section>

        <section className="mb-12 rounded-[32px] border border-stone-200 bg-stone-50 p-6 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
            Verdict
          </p>
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Buy it if you want a brutal French Foreign Legion cult classic, not a clean starter history
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-700">
            The right reader for <em>Devil&apos;s Guard</em> is someone who already knows the
            big-picture history and wants a nastier, stranger war book with a reputation.
            The wrong reader is someone asking for the single best WWII and Vietnam war
            book because they need reliability first. For that reader, this book is a
            side road, not the road.
          </p>
          <BookCTA title="Devil's Guard" author="George Robert Elford" />
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
