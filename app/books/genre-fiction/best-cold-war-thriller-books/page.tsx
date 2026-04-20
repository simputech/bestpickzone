import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = {
  title: 'Best Cold War Thriller Books — Ranked with Winner Logic',
  description:
    "The best Cold War thrillers ever written, ranked honestly: Le Carré's Spy Who Came in from the Cold, Deighton's Ipcress File, Clancy's Hunt for Red October, McCarry's Miernik Dossier, and Matthews's Red Sparrow — each with a skip-this-if recommendation.",
  alternates: {
    canonical: 'https://bestpickzone.com/books/genre-fiction/best-cold-war-thriller-books',
  },
  openGraph: {
    title: 'Best Cold War Thriller Books',
    description:
      'Le Carré, Deighton, Clancy, McCarry, Matthews — the definitive Cold War thriller ranking with explicit winner logic.',
    url: 'https://bestpickzone.com/books/genre-fiction/best-cold-war-thriller-books',
    siteName: 'BestPickZone',
    type: 'article',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Genre Fiction', href: '/books/genre-fiction' },
  { label: 'Best Cold War Thriller Books' },
]

const picks = [
  {
    slot: 'Best Overall',
    slotColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    title: 'The Spy Who Came in from the Cold',
    author: 'John le Carré',
    meta: '1963 · 240 pages · Paperback, Kindle, Audible',
    summary:
      "Le Carré drew on his own MI6 and MI5 experience — he worked in both services before his literary career — to write a novel where the tradecraft, the institutional cynicism, and the human cost of intelligence work feel documented rather than imagined. Alec Leamas is one of the great antiheroes of genre fiction: competent, exhausted, and ultimately betrayed by the system he serves.",
    pros: [
      'Structurally perfect — Graham Greene called it the best spy novel he had ever read',
      'Short (240 pages) — reads in two sittings',
      'The moral argument (what distinguishes "our" methods from theirs?) remains entirely current',
      'Kindle edition under $10',
    ],
    cons: [
      'Deliberately ambiguous ending that some readers find unsatisfying',
      'Cold War context requires some historical familiarity — a brief Wikipedia read on the Berlin Wall helps',
    ],
    skip: 'you want action set pieces. This is a novel about institutional betrayal, not field operations.',
  },
  {
    slot: 'Best Action-Forward',
    slotColor: 'bg-red-100 text-red-800 border border-red-300',
    title: 'The Ipcress File',
    author: 'Len Deighton',
    meta: '1962 · 320 pages · Paperback, Kindle, Audible',
    summary:
      "Deighton's nameless narrator (named Harry Palmer in the film adaptations) is everything Reacher is not: working-class, sarcastic, trapped in bureaucracy, perpetually underpaid. The Cold War London setting — grimy, specific, deeply unglamorous — is as much the subject as the spy plot. Deighton invented the working-class spy novel in direct response to Fleming's fantasy of upper-class competence.",
    pros: [
      'Faster-paced than le Carré while maintaining genuine intelligence about how espionage works',
      'The Michael Caine film adaptation is excellent — book and film complement each other',
      'Dry humor throughout makes it more immediately enjoyable than most Cold War fiction',
      'Series of six novels if you want to continue with the character',
    ],
    cons: [
      'The plot is deliberately obfuscatory — Deighton withholds information from the reader along with the narrator',
      'The working-class British vernacular of the early 1960s requires occasional adjustment',
    ],
    skip: 'you need a clear protagonist motivation explained upfront — Deighton assumes readers will wait for context.',
  },
  {
    slot: 'Best American Perspective',
    slotColor: 'bg-blue-100 text-blue-800 border border-blue-300',
    title: 'The Hunt for Red October',
    author: 'Tom Clancy',
    meta: '1984 · 603 pages · Paperback, Kindle, Audible',
    summary:
      "Clancy's debut is technically a Cold War novel — published in 1984, set in the present-day Cold War — and provides the closest thing to a genuinely American answer to le Carré. Where British Cold War fiction is defined by institutional pessimism, Clancy's novel expresses institutional faith: in the Navy, in intelligence analysis, in the competence of the people doing the work.",
    pros: [
      'The technical detail (submarine systems, sonar, naval tactics) is sourced from declassified documentation and gives the novel a grounded authenticity',
      "Jack Ryan is a useful audience surrogate — an analyst rather than an operator, which means he's asking the same questions the reader is",
      'The thriller mechanics are impeccable — three parallel storylines converge with satisfying precision',
    ],
    cons: [
      'Long (603 pages) and technically dense',
      'The ideological optimism is a direct inversion of le Carré — some readers will find it naïve',
    ],
    skip: "you want moral ambiguity. Clancy's world has clear heroes and villains; that's a feature for some readers and a problem for others.",
  },
  {
    slot: 'Most Unique Structure',
    slotColor: 'bg-purple-100 text-purple-800 border border-purple-300',
    title: 'The Miernik Dossier',
    author: 'Charles McCarry',
    meta: '1973 · 304 pages · Paperback, Kindle',
    summary:
      "McCarry worked as a CIA operations officer before becoming a novelist, and The Miernik Dossier is structured as a collection of intelligence reports, surveillance transcripts, and operative journals — a format that makes it feel less like a novel than a genuine classified file. The story follows a group of intelligence officers trying to determine whether a Polish exile named Miernik is a spy. The answer is genuinely ambiguous.",
    pros: [
      'The documentary structure is unlike any other Cold War novel — feels fully authentic',
      "McCarry's operational experience means the tradecraft is accurate in ways le Carré and Deighton only approximate",
      'The ambiguity is structural, not evasive — when you finish, you debate the evidence, not the ending',
    ],
    cons: [
      'The documentary format takes 30–40 pages to settle into — initial reading is disorienting by design',
      'Less widely available than other books on this list; confirm availability before purchasing',
    ],
    skip: 'you want a conventional narrative. This is a structural experiment that pays off on completion.',
  },
  {
    slot: 'Best Modern Entry',
    slotColor: 'bg-green-100 text-green-800 border border-green-300',
    title: 'Red Sparrow',
    author: 'Jason Matthews',
    meta: '2013 · 448 pages · Paperback, Kindle, Audible',
    summary:
      "Matthews is a retired CIA operations officer, and Red Sparrow is the most technically current Cold War-adjacent thriller available — set in the present but drawing on Cold War operational doctrine that survived the Soviet Union's collapse. The dual POV (CIA officer and Russian intelligence officer) is handled with equivalent empathy for both sides, which is rare in the genre.",
    pros: [
      'The authentic tradecraft (Matthews includes actual CIA operational techniques, cleared for publication) makes the novel feel genuinely educational',
      'The Jennifer Lawrence film is a loose adaptation — the novel is significantly better and more complex',
      'Each chapter ends with a real recipe relevant to the setting — a quirk that works surprisingly well',
    ],
    cons: [
      'Some readers find the recipes disruptive to narrative momentum',
      'The romantic subplot is more prominent than in other books on this list',
    ],
    skip: 'you want a historical Cold War setting — this is contemporary espionage using Cold War methods.',
  },
]

const faqs = [
  {
    q: "Is John le Carré's work connected to real events?",
    a: 'Yes — le Carré worked in MI5 and MI6 and has confirmed that many incidents in his novels draw on real operations and real institutional dynamics, heavily fictionalized. His portrayal of Cambridge University as a recruitment ground for Soviet intelligence reflects the actual Cambridge Five spy ring (Burgess, Maclean, Philby, Blunt, Cairncross).',
  },
  {
    q: "Do I need to read le Carré's Smiley novels in order?",
    a: "The Spy Who Came in from the Cold is a standalone and the best entry point. Tinker Tailor Soldier Spy, The Honourable Schoolboy, and Smiley's People form a trilogy that works best read in sequence. Karla's Choice (2024) is a recent addition that fits between the standalone and the trilogy.",
  },
  {
    q: "What's the best Cold War thriller for readers who don't usually read spy fiction?",
    a: "Red Sparrow by Jason Matthews — it's the most accessible entry on this list, moves at the pace of a contemporary thriller, and doesn't require historical context to engage with.",
  },
  {
    q: 'Are there any Cold War thriller series worth committing to?',
    a: "Le Carré's Smiley novels (Call for the Dead through Smiley's People) and Deighton's Harry Palmer series (Ipcress through Twinkle Twinkle Little Spy) are the two best-sustained series in the subgenre. Clancy's Jack Ryan series extends well past the Cold War into the 2000s.",
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
  headline: 'Best Cold War Thriller Books',
  description:
    'The definitive ranking of the best Cold War thrillers ever written, with honest winner logic and skip-this-if guidance per pick.',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: '2026-04-19',
  dateModified: '2026-04-19',
  mainEntityOfPage:
    'https://bestpickzone.com/books/genre-fiction/best-cold-war-thriller-books',
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

export default function BestColdWarThrillerBooksPage() {
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
          Best Cold War Thriller Books
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="text-lg leading-relaxed">
            <em>The Spy Who Came in from the Cold</em> by John le Carré is the best Cold
            War thriller ever written — and one of the best novels of the 20th century
            in any genre. A British intelligence officer is sent on a final mission to
            discredit an East German intelligence chief; the operation&apos;s true shape
            only becomes clear in the devastating final chapters.
          </p>
          <p className="leading-relaxed">
            It belongs to readers who want moral complexity alongside the suspense. The
            tradeoff is pace: this is not a fast novel. If you want kinetic Cold War
            action, Len Deighton&apos;s <em>The Ipcress File</em> moves faster and is
            nearly as good. Below we&apos;ve also picked the best American-perspective
            Cold War thriller, the most structurally unique entry, and the best modern
            adaptation for readers new to the genre.
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
              <strong>Historical vs. contemporary Cold War fiction.</strong> Le Carré,
              Deighton, and McCarry write about the actual Cold War — the Berlin Wall,
              the KGB, 1950s–1980s Europe. Clancy and Matthews write about the Cold
              War&apos;s continuation in post-Soviet intelligence competition. The
              historical novels require more context; the contemporary ones are more
              immediately accessible.
            </p>
            <p>
              <strong>Le Carré or Deighton first?</strong> If you want the most literary
              experience, le Carré. If you want something faster and funnier, Deighton.
              Both are genuine classics; the choice is entirely based on what kind of
              reading experience you&apos;re looking for.
            </p>
            <p>
              <strong>Want the broader genre?</strong> Our guide to the{' '}
              <Link
                href="/books/genre-fiction/best-spy-thriller-books"
                className="text-blue-600 hover:underline font-medium"
              >
                best spy thriller books of all time
              </Link>{' '}
              covers the full canon beyond the Cold War era; the{' '}
              <Link
                href="/books/genre-fiction/best-new-spy-thriller-books-2026"
                className="text-blue-600 hover:underline font-medium"
              >
                best new spy thriller books in 2026
              </Link>{' '}
              guide covers current releases.
            </p>
            <p>
              <strong>Want historical context?</strong> Pair any of these with our
              guide to the{' '}
              <Link
                href="/books/genre-fiction/best-world-war-ii-books"
                className="text-blue-600 hover:underline font-medium"
              >
                best books about World War II
              </Link>{' '}
              — the conflict that seeded the intelligence services these novels
              depict.
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
              <strong>Best overall:</strong> <em>The Spy Who Came in from the Cold</em>{' '}
              — the definitive Cold War novel.
            </p>
            <p>
              <strong>Best action-driven:</strong> <em>The Ipcress File</em> — le
              Carré&apos;s speed, with dark humor added.
            </p>
            <p>
              <strong>Best American perspective:</strong>{' '}
              <em>The Hunt for Red October</em> — Clancy&apos;s technically precise,
              ideologically optimistic counterpoint.
            </p>
            <p>
              <strong>Most unique structure:</strong> <em>The Miernik Dossier</em> —
              for readers who want something genuinely unlike any other novel on the
              list.
            </p>
            <p>
              <strong>Best modern entry:</strong> <em>Red Sparrow</em> — the most
              accessible and most current.
            </p>
          </div>
          <div className="mt-5">
            <BookCTA
              title="The Spy Who Came in from the Cold"
              author="John le Carré"
            />
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/books/genre-fiction/best-spy-thriller-books"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best Spy Thriller Books of All Time
              </p>
              <p className="text-xs text-gray-500 mt-1">The full canon →</p>
            </Link>
            <Link
              href="/books/genre-fiction/best-new-spy-thriller-books-2026"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best New Spy Thriller Books in 2026
              </p>
              <p className="text-xs text-gray-500 mt-1">
                This year&apos;s strongest new releases →
              </p>
            </Link>
            <Link
              href="/books/genre-fiction/best-world-war-ii-books"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best Books About World War II
              </p>
              <p className="text-xs text-gray-500 mt-1">
                The conflict that seeded these intelligence services →
              </p>
            </Link>
            <Link
              href="/books/genre-fiction"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Browse All Genre Fiction Guides
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Mystery, thriller, SF, fantasy, and more →
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
