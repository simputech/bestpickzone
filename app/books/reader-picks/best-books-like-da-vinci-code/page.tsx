import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best Books Like The Da Vinci Code — Ranked with Winner Logic',
  description:
    "If you loved The Da Vinci Code, these are the best follow-up reads: Eco's Name of the Rose, Berry's Cotton Malone series, Mosse's Labyrinth, Kostova's The Historian, and Caldwell/Thomason's Rule of Four — each with a skip-this-if recommendation.",
  alternates: {
    canonical: 'https://bestpickzone.com/books/reader-picks/best-books-like-da-vinci-code',
  },
  openGraph: {
    title: 'Best Books Like The Da Vinci Code',
    description:
      'Five historical-conspiracy thrillers ranked with explicit winner logic — Eco, Berry, Mosse, Kostova, Caldwell & Thomason.',
    url: 'https://bestpickzone.com/books/reader-picks/best-books-like-da-vinci-code',
    siteName: 'BestPickZone',
    type: 'article',
  },
}, { category: 'reader-picks' })

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Reader Picks', href: '/books/reader-picks' },
  { label: 'Best Books Like The Da Vinci Code' },
]

const picks = [
  {
    slot: 'Best Overall',
    slotColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    title: 'The Name of the Rose',
    author: 'Umberto Eco',
    meta: '1980 · 502 pages · Paperback, Kindle, Audible',
    summary:
      "A 14th-century Franciscan friar and his novice arrive at an Italian Benedictine abbey to attend a theological debate; they stay to investigate a series of murders. The friar, William of Baskerville, is explicitly modeled on Sherlock Holmes — the deductive method applied to medieval theology. Eco was a medieval semiotics professor; the historical detail is meticulous and never stops feeling like discovery.",
    pros: [
      'The intellectual satisfaction of solving a mystery that operates at multiple levels simultaneously — textual, historical, theological',
      "Eco's prose (translated from Italian) has a density and precision that Brown's doesn't approach",
      "The final reveal is more disturbing and more earned than The Da Vinci Code's",
      'The 1986 Sean Connery film is excellent — book and film complement each other',
    ],
    cons: [
      'The Latin passages in the first 50 pages are untranslated — this is deliberate and passes',
      'Significantly slower than Brown — 502 pages at a literary pace',
    ],
    skip: "you want Brown's chapter-every-ten-minutes momentum. This requires more patience and pays off proportionally.",
  },
  {
    slot: 'Best Pacing Match',
    slotColor: 'bg-red-100 text-red-800 border border-red-300',
    title: 'The Amber Room (Cotton Malone Book 1)',
    author: 'Steve Berry',
    meta: '2003 · 464 pages · Paperback, Kindle, Audible',
    summary:
      "Berry's Cotton Malone series is the closest structural match to Dan Brown available — retired Justice Department operative, historical mystery, global settings, chapters that end on cliffhangers. Berry's research is extensive: each novel is followed by an author's note distinguishing fact from fiction, which readers consistently cite as one of the series' distinctive pleasures.",
    pros: [
      "The fastest pacing on this list — Berry's chapter structure is explicitly designed for \"one more chapter\" momentum",
      '17 novels in the series with consistent quality',
      'The historical mysteries are well-researched — Berry consults historians and visits locations',
      'Strong Audible editions for the commute audience',
    ],
    cons: [
      'The protagonist is a more conventional action hero than Langdon — less intellectual, more physical',
      'Some readers find the chapter-ending cliffhangers formulaic across multiple books',
    ],
    skip: "you want literary ambition. Berry is the best in the category he's working in; that category is page-turner, not literary fiction.",
  },
  {
    slot: 'Best Historical Conspiracy',
    slotColor: 'bg-amber-100 text-amber-800 border border-amber-300',
    title: 'Labyrinth',
    author: 'Kate Mosse',
    meta: '2005 · 515 pages · Paperback, Kindle, Audible',
    summary:
      "Mosse's Labyrinth interweaves two timelines — a woman in present-day France who discovers a cave containing medieval artifacts, and the story of those artifacts' origin in 13th-century Languedoc during the Cathar crusade. The Cathar heresy and its suppression by the Catholic Church provides a historical backdrop as rich as anything in Brown, and Mosse's research is more rigorous.",
    pros: [
      'Two-timeline structure creates genuine suspense in both directions',
      'The Cathar history is genuinely fascinating and rarely covered in popular fiction',
      'Strong female protagonists in both timelines',
      'Series of three novels if you want to continue',
    ],
    cons: [
      'Long (515 pages) and the dual timeline requires tracking two sets of characters',
      'Some readers find the modern thriller elements less convincing than the historical sections',
    ],
    skip: 'you want a single timeline and a single protagonist. Mosse requires commitment to two separate stories.',
  },
  {
    slot: 'Most Literary',
    slotColor: 'bg-purple-100 text-purple-800 border border-purple-300',
    title: 'The Historian',
    author: 'Elizabeth Kostova',
    meta: '2005 · 642 pages · Paperback, Kindle, Audible',
    summary:
      "The Historian is structured as nested letters and journals — a daughter reading her father's account of his search for Dracula, which is also an account of the historical Vlad the Impaler and the Ottoman Empire's expansion into Eastern Europe. The historical research is genuinely extraordinary. Kostova spent 10 years writing the novel and visited every location the book describes.",
    pros: [
      'The historical layers (1970s Cold War Eastern Europe, 1950s academic Europe, 15th-century Ottoman history) reward patient reading',
      'The mystery is original — Kostova is not retelling Bram Stoker but building a genuinely new mythology on top of the historical record',
      '642 pages that feel like an investment rather than a slog',
    ],
    cons: [
      "Very long and deliberately slow — the opposite of Brown's pacing",
      'The Dracula framing may mislead readers expecting a horror novel; this is historical literary fiction with supernatural elements',
    ],
    skip: 'you want Brown-speed pacing. This is a 15–20 hour reading experience.',
  },
  {
    slot: 'Best Middle Ground',
    slotColor: 'bg-green-100 text-green-800 border border-green-300',
    title: 'The Rule of Four',
    author: 'Ian Caldwell and Dustin Thomason',
    meta: '2004 · 384 pages · Paperback, Kindle, Audible',
    summary:
      'Two Princeton students become obsessed with decoding a mysterious 15th-century text called the Hypnerotomachia Poliphili — a real text that has puzzled scholars for 500 years. The Rule of Four is frequently called "the thinking person\'s Da Vinci Code" — it has Brown\'s momentum and the historical mystery premise, but the character relationships are more carefully drawn.',
    pros: [
      "The campus setting creates an intimate scale that Brown's global settings don't — the mystery feels personal",
      'The Hypnerotomachia Poliphili is a real text; the historical context is accurate',
      'Faster than Eco, more literary than Brown — the closest thing on this list to a middle ground',
    ],
    cons: [
      'The character drama (friendship tensions among the students) sometimes slows the mystery momentum',
      'A single standalone — no series to continue if you want more',
    ],
    skip: 'you want action sequences and global settings. This is a contained, intellectual mystery.',
  },
]

const faqs = [
  {
    q: "What's the closest book to The Da Vinci Code in pacing and structure?",
    a: "Steve Berry's Cotton Malone series — specifically The Amber Room. Berry's chapter structure, global settings, and historical-mystery format are the closest available match to Brown's formula.",
  },
  {
    q: "Is The Name of the Rose actually readable if you're not an academic?",
    a: 'Yes — Eco wrote it specifically to be readable by general audiences, and the medieval setting and detective structure carry a general reader through the denser passages. The first 50 pages are the most demanding; most readers report it becomes compulsive by chapter three.',
  },
  {
    q: 'Are there any female-led versions of this type of thriller?',
    a: "Labyrinth by Kate Mosse has two female protagonists. The Historian has a female narrator. Both are closer to Brown's template than most female-led literary thrillers.",
  },
  {
    q: 'Should I just read more Dan Brown first?',
    a: "If you haven't read Angels & Demons, Inferno, and Origin, those are the immediate next step before branching out. Each is structurally identical to The Da Vinci Code — same protagonist, same puzzle-and-chase structure — but the historical content is distinct.",
  },
]

const articleText = `
${picks.map((p) => `${p.title} ${p.author} ${p.summary} ${p.pros.join(' ')} ${p.cons.join(' ')} Skip this if ${p.skip}`).join(' ')}
${faqs.map((f) => `${f.q} ${f.a}`).join(' ')}
`
const readingTime = getReadingTime(articleText)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Books Like The Da Vinci Code',
  description:
    'Five historical-conspiracy thrillers that match or exceed The Da Vinci Code, ranked with honest winner logic and skip-this-if guidance per pick.',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: '2026-04-20',
  dateModified: '2026-06-26',
  mainEntityOfPage:
    'https://bestpickzone.com/books/reader-picks/best-books-like-da-vinci-code',
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
    item: {
      '@type': 'Book',
      name: p.title,
      author: { '@type': 'Person', name: p.author },
      description: p.summary,
    },
  })),
}

export default function BestBooksLikeDaVinciCodePage() {
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

        <div className="text-xs text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
          <span>{formatReadingTime(readingTime)}</span>
          <span>·</span>
          <span>Last verified: April 2026</span>
          <span>·</span>
          <span>
            Affiliate disclosure: BestPickZone earns a commission on qualifying Amazon
            purchases made through our links, at no extra cost to you.
          </span>
        </div>

        <h1
          className="text-4xl font-extrabold text-gray-900 mb-5 leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Best Books Like The Da Vinci Code
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="text-lg leading-relaxed">
            The best book for readers who loved <em>The Da Vinci Code</em> is{' '}
            <em>The Name of the Rose</em> by Umberto Eco — a medieval mystery set in
            an Italian monastery where monks are dying in patterns that correspond to
            the Book of Revelation. If what drew you to Brown was the sense that
            history contains hidden layers and that following the intellectual trail
            is the whole point of reading, Eco does everything Brown does at a higher
            level of craft.
          </p>
          <p className="leading-relaxed">
            The tradeoff is pace: <em>The Name of the Rose</em> is more demanding
            than Brown. If you want Da Vinci Code speed in a different setting, Steve
            Berry&apos;s Cotton Malone series or Kate Mosse&apos;s <em>Labyrinth</em>{' '}
            are closer matches. Below we&apos;ve also picked the best modern
            conspiracy thriller, the most literary entry, and the best middle ground
            for readers who want Brown&apos;s momentum with more carefully drawn
            characters.
          </p>
          <p className="text-sm text-gray-500 italic">
            Specs and prices verified against Amazon as of April 2026. Prices change —
            confirm before purchasing.
          </p>
        </div>

        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Quick Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 font-semibold">Book</th>
                  <th className="px-4 py-3 font-semibold">Author</th>
                  <th className="px-4 py-3 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {picks.map((p, i) => (
                  <tr key={i} className={i === 0 ? 'bg-yellow-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {i === 0 && <span className="text-yellow-600 mr-1">★</span>}
                      {p.title}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{p.author}</td>
                    <td className="px-4 py-3 text-gray-600">{p.slot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            The Picks
          </h2>
          <div className="space-y-10">
            {picks.map((p, i) => (
              <article
                key={i}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="mb-3">
                    <span
                      className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${p.slotColor}`}
                    >
                      {p.slot}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {p.title} — {p.author}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{p.meta}</p>
                  </div>
                  <p className="text-gray-700 mb-5 leading-relaxed">{p.summary}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <p className="text-sm font-semibold text-green-700 mb-2">✓ Pros</p>
                      <ul className="space-y-1.5">
                        {p.pros.map((pro, j) => (
                          <li key={j} className="text-sm text-gray-700 flex gap-2">
                            <span className="text-green-500 mt-0.5 shrink-0">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-red-600 mb-2">✗ Cons</p>
                      <ul className="space-y-1.5">
                        {p.cons.map((con, j) => (
                          <li key={j} className="text-sm text-gray-700 flex gap-2">
                            <span className="text-red-400 mt-0.5 shrink-0">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-300 rounded-r-lg px-4 py-3 mb-5">
                    <p className="text-sm text-amber-900">
                      <strong>Skip this if</strong> {p.skip}
                    </p>
                  </div>

                  <BookCTA title={p.title} author={p.author} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Buying Guide
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              <strong>
                What specifically did you love about The Da Vinci Code?
              </strong>{' '}
              The answer determines which book on this list is right for you. The
              historical conspiracy angle → <em>Name of the Rose</em> or{' '}
              <em>Labyrinth</em>. The pacing → Cotton Malone series. The academic
              protagonist solving a puzzle → <em>The Rule of Four</em>. The sweep of
              multiple countries and centuries → <em>The Historian</em>.
            </p>
            <p>
              <strong>
                Stay in the Robert Langdon universe first if you haven&apos;t.
              </strong>{' '}
              If you haven&apos;t read <em>Angels &amp; Demons</em>,{' '}
              <em>Inferno</em>, and <em>Origin</em>, those are the immediate next
              step before branching out. Each is structurally identical to{' '}
              <em>The Da Vinci Code</em> — same protagonist, same
              puzzle-and-chase structure — but the historical content is distinct.
            </p>
            <p>
              <strong>Want more non-fiction history?</strong> Our guide to the{' '}
              <Link
                href="/books/genre-fiction/best-history-books-for-beginners"
                className="text-blue-600 hover:underline font-medium"
              >
                best history books for beginners
              </Link>{' '}
              gives you Harari, Larson, and Beard — the non-fiction counterpart to
              the historical thrillers above.
            </p>
            <p>
              <strong>Want espionage instead?</strong> Our{' '}
              <Link
                href="/books/genre-fiction/best-spy-thriller-books"
                className="text-blue-600 hover:underline font-medium"
              >
                best spy thriller books of all time
              </Link>{' '}
              guide covers the thriller tradition Brown&apos;s template borrows
              from.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div key={i} className="border-l-4 border-blue-200 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">{f.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Final Verdict
          </h2>
          <div className="space-y-2.5 text-sm text-gray-800">
            <p>
              <strong>Best overall:</strong> <em>The Name of the Rose</em> — does
              everything Brown does at a higher level of craft.
            </p>
            <p>
              <strong>Best pacing match:</strong> Cotton Malone series (
              <em>The Amber Room</em>) — Brown speed, different settings, extensive
              series.
            </p>
            <p>
              <strong>Best historical depth:</strong> <em>Labyrinth</em> — the
              richest historical backdrop on the list.
            </p>
            <p>
              <strong>Most literary:</strong> <em>The Historian</em> — extraordinary
              research, slower pace, proportionally larger payoff.
            </p>
            <p>
              <strong>Best middle ground:</strong> <em>The Rule of Four</em> —
              faster than Eco, more carefully written than Brown.
            </p>
          </div>
          <div className="mt-5">
            <BookCTA title="The Name of the Rose" author="Umberto Eco" />
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/books/genre-fiction/best-history-books-for-beginners"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best History Books for Beginners
              </p>
              <p className="text-xs text-gray-500 mt-1">
                The non-fiction counterpart — Harari, Larson, Beard →
              </p>
            </Link>
            <Link
              href="/books/genre-fiction/best-spy-thriller-books"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best Spy Thriller Books of All Time
              </p>
              <p className="text-xs text-gray-500 mt-1">
                The espionage tradition Brown borrows from →
              </p>
            </Link>
            <Link
              href="/books/reader-picks/best-action-adventure-books-for-men"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best Action Adventure Books for Men
              </p>
              <p className="text-xs text-gray-500 mt-1">
                If you want plot momentum over historical mystery →
              </p>
            </Link>
            <Link
              href="/books/reader-picks"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Browse All Reader Picks
              </p>
              <p className="text-xs text-gray-500 mt-1">
                More "books like…" and reader-intent guides →
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
