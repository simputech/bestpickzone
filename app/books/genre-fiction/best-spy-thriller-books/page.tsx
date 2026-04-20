import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = {
  title: 'Best Spy Thriller Books of All Time — Ranked with Winner Logic',
  description:
    "The best spy thrillers ever written, ranked with honest winner logic: Le Carré's The Spy Who Came in from the Cold, Clancy's Hunt for Red October, Terry Hayes's I Am Pilgrim, and more — each with a clear skip-this-if recommendation.",
  alternates: {
    canonical: 'https://bestpickzone.com/books/genre-fiction/best-spy-thriller-books',
  },
  openGraph: {
    title: 'Best Spy Thriller Books of All Time',
    description:
      'Le Carré, Clancy, Fleming, Hayes, Gerritsen — six spy thrillers that define the genre, ranked with explicit winner logic and skip-this-if guidance.',
    url: 'https://bestpickzone.com/books/genre-fiction/best-spy-thriller-books',
    siteName: 'BestPickZone',
    type: 'article',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Genre Fiction', href: '/books/genre-fiction' },
  { label: 'Best Spy Thriller Books' },
]

const picks = [
  {
    slot: 'Best Overall',
    slotColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    title: 'The Spy Who Came in from the Cold',
    author: 'John le Carré',
    meta: '1963 · 240 pages · Paperback, Kindle, Audible',
    summary:
      "Le Carré's masterpiece remains the standard against which every espionage novel is measured. Alec Leamas, a British intelligence officer, is asked to undertake one final mission — a mission whose true shape he only understands at the end. The prose is spare and exact. The tradecraft is drawn from le Carré's own MI5 and MI6 experience, which makes the institutional details feel lived-in rather than researched.",
    pros: [
      'Plot construction is nearly perfect — every scene pays off by the final chapter',
      'Moral ambiguity is specific and earned, not vague atmospheric texture',
      'Short (240 pages) — reads in two or three sittings',
      'Kindle edition under $10; paperback widely available under $15',
    ],
    cons: [
      'Pacing is deliberately slow in the first third — readers expecting immediate action will be impatient',
      'Cold War setting requires some historical context to fully appreciate the stakes',
    ],
    skip: 'you want an action-driven thriller. This is a novel about betrayal and institutional cynicism, not field operations.',
  },
  {
    slot: 'Best Action-Driven',
    slotColor: 'bg-red-100 text-red-800 border border-red-300',
    title: 'The Hunt for Red October',
    author: 'Tom Clancy',
    meta: '1984 · 603 pages · Paperback, Kindle, Audible',
    summary:
      "Clancy's debut invented the techno-thriller as a genre. A Soviet submarine commander attempts to defect to the United States; both sides are racing to find the sub first. The submarine and weapons-systems detail is sourced from declassified military publications and Clancy's own research, which gives the novel a documentary texture no subsequent imitator has matched.",
    pros: [
      'Technical detail is genuinely interesting, not padding — Clancy explains how things work in ways that serve the plot',
      'Multiple POV structure creates real tension across parallel storylines',
      'Jack Ryan is a useful, accessible protagonist for readers new to military fiction',
      'Audible edition is excellent for commuters — the naval sequences work well in audio',
    ],
    cons: [
      '603 pages — significantly longer than most books on this list',
      'The technical density can slow the first hundred pages for non-military readers',
      'Some character work is thin outside the primary cast',
    ],
    skip: "you want character-driven espionage. Clancy's strength is systems and tactics, not psychology.",
  },
  {
    slot: 'Best for New Readers',
    slotColor: 'bg-green-100 text-green-800 border border-green-300',
    title: 'I Am Pilgrim',
    author: 'Terry Hayes',
    meta: '2013 · 700+ pages · Paperback, Kindle, Audible',
    summary:
      "Hayes's debut is the most purely entertaining novel on this list — a former intelligence operative pulled back for one final case, structured as a globe-spanning thriller that moves through New York, Saudi Arabia, Turkey, and Afghanistan. The pacing is relentless from page one. Hayes spent 15 years writing this novel, and the construction shows.",
    pros: [
      '700+ pages that feel shorter than most 300-page thrillers — hard to put down',
      'Accessible without any prior knowledge of intelligence tradecraft or geopolitics',
      'Satisfying standalone — no series commitment required',
      'One of the highest-rated debut spy thrillers on Amazon; consistent 4.6-star rating across 15,000+ reviews',
    ],
    cons: [
      'Some plot conveniences in the third act that patient readers will notice',
      "The antagonist's motivation requires some suspension of disbelief",
    ],
    skip: 'you prefer morally complex, ambiguous endings — Hayes delivers a clear resolution, which is either a strength or a weakness depending on what you want.',
  },
  {
    slot: 'Best Literary / Premium Pick',
    slotColor: 'bg-purple-100 text-purple-800 border border-purple-300',
    title: 'Tinker Tailor Soldier Spy',
    author: 'John le Carré',
    meta: '1974 · 400 pages · Paperback, Kindle, Audible',
    summary:
      "Le Carré's second entry on this list because the genre simply doesn't produce work of this quality often enough to exclude it. Where The Spy Who Came in from the Cold is a tight, devastating novella, Tinker Tailor is an intricate long game — George Smiley investigating a suspected Soviet mole inside British intelligence, piecing together the truth from fragments of memory and bureaucratic detritus.",
    pros: [
      'The most intellectually satisfying spy novel ever written — the solution is fair-play and genuinely surprising',
      'Smiley is one of the great characters in 20th-century fiction',
      'The BBC adaptation (Alec Guinness) and the 2011 film (Gary Oldman) are both excellent companions — read the book first',
    ],
    cons: [
      'Demands attention — this is not a book to read passively',
      'The cast of characters is large; a character list kept nearby helps in the first 100 pages',
      'Slower burn than anything else on this list',
    ],
    skip: 'you want high-action pacing. Read I Am Pilgrim first, then return to this one when you want more depth.',
  },
  {
    slot: 'Best Modern Spy Thriller',
    slotColor: 'bg-blue-100 text-blue-800 border border-blue-300',
    title: 'The Spy Coast',
    author: 'Tess Gerritsen',
    meta: '2023 · Book 1 of the Martini Club series · Hardcover, paperback, Kindle, Audible',
    summary:
      "Gerritsen's pivot from medical thrillers to espionage delivers the most compulsively readable new spy novel in several years. A retired CIA operative living quietly in rural Maine is drawn back into operational life when a body appears on her property. The setup is familiar; the execution is sharper than most.",
    pros: [
      "Gerritsen's plotting precision from her medical thriller work transfers directly — tight, no filler chapters",
      'The rural Maine setting provides an atmosphere distinctly different from the London/Moscow/Washington axis of most spy fiction',
      'Strong female protagonist in a genre that has historically centered male leads',
      'Series opener — if you like the character, there is more coming',
    ],
    cons: [
      'Lighter on tradecraft detail than Clancy or le Carré — more thriller than espionage procedural',
      'Resolution comes slightly fast given the setup',
    ],
    skip: 'you want heavily researched military or intelligence tradecraft. This is a character-forward spy thriller, not a procedural.',
  },
  {
    slot: 'Best Classic Accessible Entry',
    slotColor: 'bg-amber-100 text-amber-800 border border-amber-300',
    title: 'From Russia with Love',
    author: 'Ian Fleming',
    meta: '1957 · 250 pages · Paperback, Kindle, Audible',
    summary:
      "Fleming's Bond novels are the origin point of popular spy fiction, and From Russia with Love is the best of them — less gadget-dependent than later entries, more grounded in actual Cold War intelligence tradecraft, and tightly plotted in a way the films never fully captured. The Soviet planning chapters, told from the antagonist's POV before Bond appears, are genuinely suspenseful.",
    pros: [
      'Fast — under 250 pages, reads in a single long session',
      'The film is excellent but the novel has a darker, more ambiguous ending',
      'Inexpensive — Kindle editions frequently under $5 on Amazon',
      "Perfect first Fleming if you've only seen the movies",
    ],
    cons: [
      'Product of its era — some dated attitudes toward women and non-Western characters',
      'Lighter on character depth than le Carré',
    ],
    skip: 'you have no patience for the genre conventions — this is the template, not a deconstruction of it.',
  },
]

const faqs = [
  {
    q: 'What is the best spy thriller for someone who has never read the genre?',
    a: 'Start with I Am Pilgrim by Terry Hayes. It requires no prior knowledge of intelligence tradecraft, moves at the pace of a film, and works as a complete standalone. If you finish it and want something with more literary weight, move to The Spy Who Came in from the Cold.',
  },
  {
    q: 'Is John le Carré hard to read?',
    a: "Le Carré requires more attention than most genre fiction — his prose is precise rather than breezy, and his plots reward patience. The Spy Who Came in from the Cold is the most accessible entry point; it's also his shortest major novel. Avoid starting with Tinker Tailor Soldier Spy if you're new to his work.",
  },
  {
    q: "What's the difference between a spy thriller and a regular thriller?",
    a: 'A spy thriller centers on intelligence operatives, tradecraft, and geopolitical stakes — the tension comes from information asymmetry and institutional betrayal as much as physical danger. A regular thriller can involve any protagonist. The overlap is significant; the distinction matters most when deciding between le Carré (pure espionage) and someone like Lee Child (action thriller with no intelligence backdrop).',
  },
  {
    q: "Are the James Bond novels worth reading if you've seen the films?",
    a: "Yes — especially Fleming's earlier novels. The films diverged significantly from the source material beginning with the Roger Moore era. From Russia with Love, Casino Royale, and The Spy Who Loved Me are meaningfully different from their film adaptations and worth reading independently.",
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
  headline: 'Best Spy Thriller Books of All Time',
  description:
    'The definitive ranking of the best spy thrillers ever written, with honest winner logic and skip-this-if guidance per pick.',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: '2026-04-19',
  dateModified: '2026-04-19',
  mainEntityOfPage:
    'https://bestpickzone.com/books/genre-fiction/best-spy-thriller-books',
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

export default function BestSpyThrillerBooksPage() {
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
          Best Spy Thriller Books of All Time
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="text-lg leading-relaxed">
            <em>The Spy Who Came in from the Cold</em> by John le Carré is the best spy
            thriller ever written — a cold, morally devastated novel about what
            intelligence work actually costs the people who do it. If you read one book
            from this list, read that one.
          </p>
          <p className="leading-relaxed">
            It&apos;s the right choice for readers who want literary weight alongside
            the suspense — le Carré&apos;s protagonist Alec Leamas is the anti-Bond,
            underpaid and disillusioned, operating in a world where winning and losing
            are nearly indistinguishable. The tradeoff: this is not a fast-paced action
            novel. If you want shootouts and chase sequences, Tom Clancy or Brad Thor
            will serve you better, and Clancy is on this list.
          </p>
          <p className="leading-relaxed">
            Below we&apos;ve also picked the best spy thriller for pure action, the best
            entry point for new readers, the best modern release, and the best if you
            want a fast classic under $5.
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
            Buying Guide: How to Choose Your First Spy Thriller
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              <strong>Action vs. Psychology — pick your priority first.</strong> The
              genre splits cleanly into action-driven (Clancy, Thor, Hayes) and
              psychologically driven (le Carré, Deighton). Both are legitimate — but
              they read like different genres. If you want plot momentum above all,
              start with <em>I Am Pilgrim</em>. If you want moral complexity, start with{' '}
              <em>The Spy Who Came in from the Cold</em>.
            </p>
            <p>
              <strong>Standalone vs. series.</strong> Le Carré&apos;s Smiley novels and
              Clancy&apos;s Jack Ryan series reward long investment. Fleming&apos;s Bond
              books work in any order. If you&apos;re not ready to commit to a series,{' '}
              <em>I Am Pilgrim</em> and <em>The Spy Who Came in from the Cold</em> are
              both standalones that require nothing before or after.
            </p>
            <p>
              <strong>Reading format matters for this genre.</strong> Spy thrillers with
              heavy tradecraft and multiple character POVs work well in print, where you
              can flip back to check a name. The more action-driven entries (
              <em>I Am Pilgrim</em>, <em>The Hunt for Red October</em>) work excellently
              in Audible — the pacing translates well to audio.
            </p>
            <p>
              <strong>Price tier.</strong> Classic titles (Fleming, early le Carré) are
              routinely available as Kindle editions under $5. Modern releases
              (Gerritsen) run $10–$15 Kindle. Clancy Kindle editions vary —{' '}
              <em>Red October</em> is frequently on sale for under $5.
            </p>
            <p>
              <strong>Want more recent releases?</strong> Our guide to the{' '}
              <Link
                href="/books/genre-fiction/best-new-spy-thriller-books-2026"
                className="text-blue-600 hover:underline font-medium"
              >
                best new spy thriller books in 2026
              </Link>{' '}
              covers this year&apos;s strongest releases; the{' '}
              <Link
                href="/books/genre-fiction/best-cold-war-thriller-books"
                className="text-blue-600 hover:underline font-medium"
              >
                best Cold War thriller books
              </Link>{' '}
              guide goes deeper on the era that still defines the genre.
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
              — the standard of the genre, perfect for readers who want literary weight
              alongside the suspense.
            </p>
            <p>
              <strong>Best for new readers:</strong> <em>I Am Pilgrim</em> — the most
              accessible, most purely entertaining entry point on the list.
            </p>
            <p>
              <strong>Best action pick:</strong> <em>The Hunt for Red October</em> —
              Clancy&apos;s debut remains the best techno-thriller ever written.
            </p>
            <p>
              <strong>Best modern release:</strong> <em>The Spy Coast</em> —
              Gerritsen&apos;s genre pivot delivers the sharpest new spy novel in years.
            </p>
            <p>
              <strong>Best budget pick:</strong> <em>From Russia with Love</em> — under
              $5 on Kindle, and the best Bond novel Fleming wrote.
            </p>
            <p className="pt-2">
              Still deciding? Buy <em>I Am Pilgrim</em> first. If you finish it and want
              something that goes deeper, <em>The Spy Who Came in from the Cold</em> is
              waiting.
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
              href="/books/genre-fiction/best-cold-war-thriller-books"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best Cold War Thriller Books
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Le Carré, Deighton, and the era that still defines the genre →
              </p>
            </Link>
            <Link
              href="/books/authors/best-lee-child-books"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best Lee Child Books in Order
              </p>
              <p className="text-xs text-gray-500 mt-1">
                If you like action thrillers alongside espionage →
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
