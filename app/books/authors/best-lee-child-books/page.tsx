import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = {
  title: 'Best Lee Child Books in Order — Jack Reacher Reading Guide (2026)',
  description:
    "Where to start the Jack Reacher series and what to read next: Killing Floor, One Shot, 61 Hours, and the honest verdict on the Andrew Child continuation novels. All 29 books covered.",
  alternates: {
    canonical: 'https://bestpickzone.com/books/authors/best-lee-child-books',
  },
  openGraph: {
    title: 'Best Lee Child Books in Order — Jack Reacher Reading Guide',
    description:
      "Where to start the Reacher series and what to read next — with honest framing of the Andrew Child continuation era.",
    url: 'https://bestpickzone.com/books/authors/best-lee-child-books',
    siteName: 'BestPickZone',
    type: 'article',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Author Roundups', href: '/books/authors' },
  { label: 'Best Lee Child Books' },
]

const picks = [
  {
    slot: 'Where to Start (Book 1)',
    slotColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    title: 'Killing Floor',
    author: 'Lee Child',
    meta: 'Published 1997 · Jack Reacher Book 1 · Paperback, Kindle, Audible (narrated by Dick Hill)',
    summary:
      "The series opener remains the most viscerally satisfying Reacher novel. Reacher gets off a bus in a small Georgia town, gets arrested for a murder he didn't commit, and systematically destroys everyone responsible. Child's plotting is extraordinarily tight — every scene exists for a reason, every detail pays off. The Georgia small-town setting, the corrupt law enforcement, the escalating body count — it's all here, fully formed, in the first novel. Reacher as a concept is established completely in the first 50 pages: tall, combat-trained, nomadic, no phone, no fixed address, no tolerance for injustice.",
    pros: [
      "The perfect template for everything that follows — if you don't love this one, the series isn't for you",
      'Multiple Amazon reviewers cite this as the book that made them a reader',
      'Audible edition narrated by Dick Hill is one of the best genre audiobook performances available',
    ],
    cons: [
      "The villain's motivation has a slight implausibility at scale — Child sacrifices some realism for momentum",
    ],
    skip: "you're sensitive to graphic violence in small-town crime settings — Child doesn't soften it, and this entry is closer to the bone than some later Reacher books.",
  },
  {
    slot: 'Best Single Novel (Book 9)',
    slotColor: 'bg-blue-100 text-blue-800 border border-blue-300',
    title: 'One Shot',
    author: 'Lee Child',
    meta: 'Published 2005 · Jack Reacher Book 9 · Basis for the Tom Cruise Jack Reacher film',
    summary:
      "One Shot is the tightest, most mechanically perfect Reacher novel in the series — the one Child chose for film adaptation. A sniper kills five people in a public square; the evidence points to a single suspect who asks only for Reacher. What follows is a precision exercise in thriller construction. Child's plotting is always clean, but One Shot achieves something close to formal perfection: every clue is fair, every development earned, the resolution genuinely surprising despite the transparency of the setup.",
    pros: [
      'Works perfectly as a standalone — no prior Reacher knowledge required',
      'The film adaptation is faithful enough that book and film can be experienced in either order',
      "The pacing is faster than Killing Floor — Child's craft visibly improved by Book 9",
    ],
    cons: [
      'The Tom Cruise casting caused backlash from readers who have a specific image of Reacher; worth noting that the film itself is very good regardless',
    ],
    skip: 'you want the full series character arc. This novel deliberately functions outside the continuity; it does not reward reading it for series progression.',
  },
  {
    slot: 'Best Ticking-Clock Entry (Book 14)',
    slotColor: 'bg-red-100 text-red-800 border border-red-300',
    title: '61 Hours',
    author: 'Lee Child',
    meta: 'Published 2010 · Jack Reacher Book 14 · Pairs with Worth Dying For (Book 15)',
    summary:
      "61 Hours follows Reacher stranded in a South Dakota town during a blizzard, protecting a witness while a professional killer moves toward them. The ticking-clock structure is Child's best — the countdown format creates momentum that doesn't let up. It ends on a cliffhanger that resolves in Worth Dying For (Book 15); for that reason, buy both before you start.",
    pros: [
      'The weather-isolation setting is distinctive — different from the small-town crime settings of earlier novels',
      "The countdown structure is Child's most effective pacing device",
      'A genuine cliffhanger ending that makes Book 15 feel essential rather than optional',
    ],
    cons: [
      'Ends on a cliffhanger — readers who need closure will want Book 15 immediately',
    ],
    skip: 'you dislike cliffhangers and are unwilling to buy Book 15 alongside. Start with Killing Floor or One Shot instead.',
  },
  {
    slot: 'The Andrew Child Era',
    slotColor: 'bg-purple-100 text-purple-800 border border-purple-300',
    title: 'Better Off Dead',
    author: 'Lee Child & Andrew Child',
    meta: 'Published 2021 · Jack Reacher Book 26 · Lee/Andrew collaboration — bridges the two authors',
    summary:
      "Andrew Child (Lee Child's brother) took over the series in 2020, writing solo from Book 27 (No Plan B) and collaborating on Books 25–26. Better Off Dead is the collaboration that bridges the two authors. The transition is smoother than most readers anticipated — Reacher's voice is consistent, the plotting maintains the series standard, and the premise quality hasn't declined.",
    pros: [
      'The series continues at full quality — no drop-off in core plotting mechanics',
      "Andrew Child has stated his intention to maintain the series' established tone and avoid retconning earlier characterization",
      'Collaboration format of Book 26 is a useful stepping stone before the solo Andrew Child novels',
    ],
    cons: [
      "The voice is slightly different — some longtime fans detect a tonal shift even when they can't articulate it specifically",
      "Readers starting with Andrew Child's books and then going backward to Lee Child's may notice the shift in reverse",
    ],
    skip: "you're a purist about series authorship. The Andrew Child voice shift is real, even if subtle. Purists should stop at Blue Moon (Book 24) and treat the series as complete there.",
  },
]

const faqs = [
  {
    q: 'How many Jack Reacher books are there?',
    a: '29 novels as of 2026, spanning 1997 (Killing Floor) through the current Andrew Child continuation. Lee Child wrote solo through Book 24 (Blue Moon, 2019), collaborated with Andrew Child on Books 25–26, and Andrew Child has written solo from Book 27 (No Plan B) onward.',
  },
  {
    q: 'Do I need to read Jack Reacher books in order?',
    a: "No — Child designed each novel to stand alone. Killing Floor is the best starting point for character establishment, but One Shot works equally well as a first read. After the first three novels (Killing Floor, Die Trying, Tripwire), order doesn't significantly affect enjoyment.",
  },
  {
    q: 'Is the Jack Reacher TV series (Amazon Prime) faithful to the books?',
    a: "The Amazon Prime series (Alan Ritchson) is more faithful to the books than the Tom Cruise films — Ritchson's physical size matches Child's description, and the Killing Floor adaptation in Season 1 follows the novel closely. Season 2 adapts Bad Luck and Trouble (Book 11). Book readers report the Prime series captures the character better than the film adaptations did.",
  },
  {
    q: 'Which Lee Child books should I skip?',
    a: 'No Reacher novel is actively bad, but some are mid-tier. Make Me (Book 20) and Past Tense (Book 23) are often cited as weaker compared to earlier novels. If you only read 5 Reacher books in your life, skip those and go with Killing Floor (1), One Shot (9), 61 Hours/Worth Dying For (14/15), and Night School (21).',
  },
  {
    q: "What's the best Reacher audiobook?",
    a: "Dick Hill's narration of the early novels (Killing Floor through Make Me) is the gold standard for the series — one of the most widely praised audiobook performances in genre fiction. Scott Brick has narrated more recent novels; his performance is strong but reader preference among Reacher audio fans skews heavily toward Dick Hill.",
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
  headline: 'Best Lee Child Books in Order',
  description:
    'Where to start the Jack Reacher series and what to read next, with honest framing of the Andrew Child continuation era.',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: '2026-04-19',
  dateModified: '2026-04-19',
  mainEntityOfPage: 'https://bestpickzone.com/books/authors/best-lee-child-books',
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

export default function BestLeeChildBooksPage() {
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
          Best Lee Child Books in Order
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="text-lg leading-relaxed">
            The best Lee Child book to start with is <em>Killing Floor</em> — the first
            Jack Reacher novel, published in 1997, and still the strongest entry point in
            a series that now spans 29 novels. Reacher gets off a bus in a small Georgia
            town, gets arrested for a murder he didn&apos;t commit, and systematically
            destroys everyone responsible. It hooks on page one.
          </p>
          <p className="leading-relaxed">
            If you&apos;ve already read <em>Killing Floor</em> and want to know what
            comes next: read <em>Die Trying</em>, then <em>Tripwire</em>, in order — the
            first three form a loose character arc worth following in sequence. After
            that, the novels work in any order. The tradeoff: Lee Child retired from
            writing Reacher in 2020 and his brother Andrew Child has continued the
            series. The quality is maintained; the voice is slightly different.
          </p>
          <p className="text-sm text-gray-500 italic">
            Prices verified against Amazon.com as of April 2026.
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
                  <th className="px-4 py-3 font-semibold">Series #</th>
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
                    <td className="px-4 py-3 text-gray-700">{p.slot}</td>
                    <td className="px-4 py-3 text-gray-600">{p.author}</td>
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
            Recommended Reading Order
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              <strong>New readers:</strong> Start with <em>Killing Floor</em> (1). If you
              love it, read <em>Die Trying</em> (2) and <em>Tripwire</em> (3) in order —
              they form a loose arc. Then read in any order.
            </p>
            <p>
              <strong>One-book test:</strong> <em>One Shot</em> (9) if you want to test
              the series with the best standalone entry before committing to the full
              sequence.
            </p>
            <p>
              <strong>Series completionists:</strong> Publication order is fine — Child
              designed each novel to work independently. Reading order doesn&apos;t
              affect enjoyment significantly after the first three.
            </p>
            <p>
              <strong>Andrew Child transition:</strong> Start at <em>No Plan B</em> (27)
              for the solo Andrew Child era. <em>Better Off Dead</em> (26) is the
              collaboration that bridges the two authors — recommended as the stepping
              stone before the solo continuation novels.
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
              <strong>Best first Reacher novel:</strong> <em>Killing Floor</em> — the
              series origin, still the most viscerally satisfying entry.
            </p>
            <p>
              <strong>Best standalone:</strong> <em>One Shot</em> — Child&apos;s most
              mechanically perfect novel, adapted faithfully for film.
            </p>
            <p>
              <strong>Best ticking-clock entry:</strong> <em>61 Hours</em> — buy it with{' '}
              <em>Worth Dying For</em> before you start.
            </p>
            <p>
              <strong>Best Andrew Child era start:</strong> <em>No Plan B</em> — the
              cleanest entry into the continuation series.
            </p>
          </div>
          <div className="mt-5">
            <BookCTA title="Killing Floor" author="Lee Child" />
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/books/reader-picks/best-action-adventure-books-for-men"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best Action Adventure Books for Men
              </p>
              <p className="text-xs text-gray-500 mt-1">
                More books in the Reacher register →
              </p>
            </Link>
            <Link
              href="/books/genre-fiction/best-military-fiction-books"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best Military Fiction Books
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Reacher is ex-military — these extend that thread →
              </p>
            </Link>
            <Link
              href="/books/genre-fiction/best-new-spy-thriller-books-2026"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best New Spy Thriller Books 2026
              </p>
              <p className="text-xs text-gray-500 mt-1">
                If you&apos;ve finished Reacher and want espionage →
              </p>
            </Link>
            <Link
              href="/books/authors"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">Browse All Author Guides</p>
              <p className="text-xs text-gray-500 mt-1">
                Stephen King, Patterson, Brown, and more →
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
