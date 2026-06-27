import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best New Books in April 2026 — This Month\'s Standout Releases',
  description:
    'The best new books published in April 2026, ranked with winner logic: Patrick Radden Keefe\'s London Falling, Tana French\'s The Keeper, plus the strongest book club pick and debut — with clear skip-this-if guidance.',
  alternates: {
    canonical: 'https://bestpickzone.com/books/reader-picks/best-new-books-april-2026',
  },
  openGraph: {
    title: 'Best New Books in April 2026',
    description:
      'April 2026\'s strongest new releases ranked with editorial winner logic — London Falling, The Keeper, The Last Women of Warsaw, and more.',
    url: 'https://bestpickzone.com/books/reader-picks/best-new-books-april-2026',
    siteName: 'BestPickZone',
    type: 'article',
  },
}, { category: 'reader-picks' })

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Reader-Intent Lists', href: '/books/reader-picks' },
  { label: 'Best New Books April 2026' },
]

const picks = [
  {
    slot: 'Best Overall',
    slotColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    title: 'London Falling',
    author: 'Patrick Radden Keefe',
    pubDate: 'April 7, 2026',
    publisher: 'Doubleday',
    pages: '384 pages (hardcover)',
    formats: 'Hardcover, Kindle, Audible (author-narrated)',
    summary:
      "Narrative nonfiction about a 19-year-old London teenager who fell to his death after building a secret life as the fictional heir to a Russian oligarch. Keefe — author of Empire of Pain and Say Nothing — reconstructs the false identity, the businessman and gangster Zac became entangled with, the Scotland Yard investigation his parents found inadequate, and the London financial system that made it all possible, using years of interviews, court records, and documents.",
    pros: [
      'Named Most Anticipated by The New York Times, The New Yorker, The Washington Post, and TIME before publication',
      'Kirkus starred review: "a penetrating portrait" and "a potential classic about the dangerous allure of a city remade as a twenty-four-hour laundromat for dirty money"',
      'Keefe narrates the Audible edition himself — his Say Nothing audio is widely cited as exceptional; prioritize this format',
      'Reporting depth is Keefe\'s signature: he sources from living witnesses and archival material rather than speculation',
    ],
    cons: [
      '384 pages of sustained emotional weight — no lighter chapters, no structural relief from the subject matter',
      'The investigation remains partly unresolved; the ending is honest rather than tidy, which will frustrate readers who need closure',
    ],
    skip: 'you want fiction or something you can read in five-minute sessions. This requires sustained attention and emotional investment.',
  },
  {
    slot: 'Best Genre Fiction',
    slotColor: 'bg-blue-100 text-blue-800 border border-blue-300',
    title: 'The Keeper',
    author: 'Tana French',
    pubDate: 'April 2026',
    publisher: 'Viking',
    pages: 'Novel (approx. 430 pages)',
    formats: 'Hardcover, Kindle, Audible',
    summary:
      "The third and final novel in French's Cal Hooper trilogy, set in the Irish village of Ardnakelty. French has built this community across The Searcher (2020) and The Hunter (2024); The Keeper resolves the trilogy with the atmospheric precision and moral complexity her readers expect. French is the most consistently praised crime fiction writer working in English, and this is her most anticipated release in years.",
    pros: [
      'The payoff for readers who have followed the trilogy from The Searcher is proportional to the investment',
      "French's prose is literary rather than genre-functional — reads slower than a standard thriller but with significantly more resonance",
      'The village community and character relationships built across Books 1 and 2 give this finale weight that standalone crime fiction rarely achieves',
    ],
    cons: [
      'Trilogy conclusion — new French readers must start with The Searcher first',
      "French's pacing is deliberate; readers who want quick resolution will be impatient",
    ],
    skip: "you haven't read The Searcher and The Hunter first. Start there; come back to this one when you're ready.",
  },
  {
    slot: 'Best for Book Clubs',
    slotColor: 'bg-purple-100 text-purple-800 border border-purple-300',
    title: 'The Last Women of Warsaw',
    author: 'Judy Batalion',
    pubDate: 'April 2026',
    publisher: "William Morrow",
    pages: 'Narrative nonfiction',
    formats: 'Hardcover, Kindle, Audible',
    summary:
      "Batalion's follow-up to The Light of Days, her New York Times bestselling account of Jewish women resistance fighters in WWII Poland. This volume continues her project of recovering women erased from the historical record — focusing on what happened to surviving Jewish women after the war, drawing on archival research and firsthand accounts not previously available in English.",
    pros: [
      "Batalion's archival depth surfaces material not covered in mainstream WWII history",
      "Ethical questions raised — survival, memory, what 'after' means — generate substantive book club discussion",
      'Readers of The Light of Days will find this a necessary continuation; it works as a standalone as well',
    ],
    cons: [
      'Historical density requires active reading — not passive',
      'Emotionally heavy throughout; readers who want lighter April reading should look elsewhere',
    ],
    skip: 'you want fiction or a faster-paced read. This is serious narrative nonfiction.',
  },
  {
    slot: 'Best Debut',
    slotColor: 'bg-green-100 text-green-800 border border-green-300',
    title: 'The Ending Writes Itself',
    author: 'Evelyn Clarke',
    pubDate: 'April 2026',
    publisher: 'Independent literary press',
    pages: 'Debut novel',
    formats: 'Hardcover, Kindle',
    summary:
      "Six struggling writers are invited to a Scottish island by bestselling novelist Arthur Fletch. They arrive to find Fletch dead and his final novel unfinished. They have 72 hours to complete the book. A locked-room mystery with a literary meta-premise — named a Most Anticipated Book of 2026 by multiple publications.",
    pros: [
      'The premise is genuinely original within the locked-room mystery subgenre',
      'The time constraint and island isolation provide structural tension that matches the concept',
      'Generated significant pre-publication buzz; book community reception was strong',
    ],
    cons: [
      'High-concept debuts don\'t always execute the idea — verify post-publication reader reviews before buying if you\'re risk-averse',
      'The publishing industry milieu (struggling writers, literary politics) may feel insular to readers who don\'t work in or around books',
    ],
    skip: 'you want a straightforward thriller without a literary meta-layer.',
  },
]

const honorableMentions = [
  {
    title: 'The Antidote',
    author: 'Karen Russell',
    note:
      "Dust Bowl-era magical realism from the Orange Prize-shortlisted author of Swamplandia. Literary, slower-paced, for readers who want ambition over momentum.",
  },
  {
    title: 'James',
    author: 'Percival Everett (paperback release)',
    note:
      "Everett's Pulitzer-winning retelling of Huckleberry Finn from Jim's perspective drops in paperback this April. If you missed the hardcover, the reissue is the right buy.",
  },
]

const faqs = [
  {
    q: 'What is the best new book released in April 2026?',
    a: "London Falling by Patrick Radden Keefe, published April 7, 2026. Narrative nonfiction about a 19-year-old's death in London and his family's investigation into the criminal underworld his secret life had drawn him into. Named Most Anticipated by The New York Times, The New Yorker, and TIME.",
  },
  {
    q: "Is Tana French's The Keeper a standalone novel?",
    a: 'No — it concludes the Cal Hooper trilogy. Read The Searcher (2020) first, then The Hunter (2024), then The Keeper. Starting here will significantly reduce the emotional payoff of the trilogy finale.',
  },
  {
    q: "What's the best April 2026 book for a book club?",
    a: 'The Last Women of Warsaw by Judy Batalion. The historical research and ethical questions it raises generate substantive discussion, and the archival grounding gives book clubs verified historical detail to engage with rather than purely fictional scenarios.',
  },
  {
    q: 'Should I read London Falling in audio or print?',
    a: "Audio. Keefe narrates the Audible edition himself, and his Say Nothing audiobook is widely cited as one of the best nonfiction audio performances in recent years. If you alternate between formats, this is one to prioritize on audio. Print is still strong — hardcover, Kindle, and Audible are all available on Amazon at launch.",
  },
  {
    q: 'Are any of these books available in paperback yet?',
    a: "London Falling, The Keeper, The Last Women of Warsaw, and The Ending Writes Itself all released as hardcovers in April 2026. Paperback editions typically follow 9–12 months later. Percival Everett's James, listed in Honorable Mentions, is available in paperback this month.",
  },
]

const articleText = `
${picks.map((p) => `${p.title} ${p.author} ${p.summary} ${p.pros.join(' ')} ${p.cons.join(' ')} Skip this if ${p.skip}`).join(' ')}
${honorableMentions.map((h) => `${h.title} ${h.author} ${h.note}`).join(' ')}
${faqs.map((f) => `${f.q} ${f.a}`).join(' ')}
`
const readingTime = getReadingTime(articleText)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best New Books in April 2026',
  description:
    "The best new books published in April 2026, ranked with editorial winner logic and explicit skip-this-if recommendations.",
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: '2026-04-19',
  dateModified: '2026-06-26',
  mainEntityOfPage: 'https://bestpickzone.com/books/reader-picks/best-new-books-april-2026',
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

export default function BestNewBooksApril2026Page() {
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
          Best New Books in April 2026
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="text-lg leading-relaxed">
            The best new book of April 2026 is <em>London Falling</em> by Patrick Radden
            Keefe — narrative nonfiction about a 19-year-old London teenager who fell to
            his death after building a secret life posing as a Russian oligarch&apos;s heir.
            His parents discovered a son they didn&apos;t know, entangled in the city&apos;s
            criminal underworld. Keefe — author of <em>Empire of Pain</em> and{' '}
            <em>Say Nothing</em> — reconstructs it with meticulous reporting that Kirkus
            called a potential classic.
          </p>
          <p className="leading-relaxed">
            It belongs to readers who want a true story told with the precision and
            tension of literary fiction. The tradeoff is weight — this is not a light
            April read. If you want fiction, Tana French&apos;s <em>The Keeper</em>, the
            conclusion to her Cal Hooper trilogy, is the strongest genre release of the
            month.
          </p>
          <p className="leading-relaxed">
            Below we&apos;ve also picked the best book for book clubs, the best debut
            fiction, two honorable mentions, and what to skip in the April glut.
          </p>
          <p className="text-sm text-gray-500 italic">
            All titles verified against Amazon.com as of April 2026. Prices change —
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
                  <th className="px-4 py-3 font-semibold">Pub Date</th>
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
                    <td className="px-4 py-3 text-gray-700">{p.pubDate}</td>
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
                    <p className="text-sm text-gray-500 mt-1">
                      {p.pubDate} · {p.publisher} · {p.pages} · {p.formats}
                    </p>
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
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Honorable Mentions
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Two more April releases worth knowing about — strong books that didn&apos;t
            take the top slot in their category but deserve attention.
          </p>
          <div className="space-y-5">
            {honorableMentions.map((h, i) => (
              <div key={i} className="border-l-4 border-gray-200 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">
                  {h.title} — {h.author}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{h.note}</p>
                <BookCTA title={h.title} author={h.author} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-red-50 border border-red-200 rounded-xl p-6">
          <h2
            className="text-xl font-bold text-red-900 mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Skip the April Glut
          </h2>
          <p className="text-sm text-red-900 leading-relaxed mb-2">
            April is a heavy new-release month and the Amazon &quot;new books&quot; shelf
            is noisy. Two categories to avoid this month:
          </p>
          <ul className="text-sm text-red-900 list-disc pl-5 space-y-1.5 leading-relaxed">
            <li>
              <strong>Franchise continuations that rework the same plot.</strong> If a
              legacy thriller imprint is pushing the fourth or fifth book in a series and
              you already know how the author&apos;s formula ends — the April release
              isn&apos;t the one that breaks the pattern. Skip unless you&apos;re already
              inside the series.
            </li>
            <li>
              <strong>AI-generated &quot;new release&quot; bundles.</strong> Amazon&apos;s
              new-books feed increasingly surfaces low-quality compilations with April
              publication dates but unknown authors or repackaged public-domain material.
              Verify the author and publisher before buying — if it&apos;s a name you
              can&apos;t find anywhere else online, skip it.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Buying Guide: How to Choose Between April&apos;s Releases
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              <strong>April 2026 is a strong nonfiction month.</strong>{' '}
              <em>London Falling</em> is the standout release across all categories —
              Keefe&apos;s best-reviewed book since <em>Empire of Pain</em>. If you read
              one April book, read that one.
            </p>
            <p>
              <strong>Fiction is led by a trilogy conclusion.</strong>{' '}
              <em>The Keeper</em> requires reading <em>The Searcher</em> and{' '}
              <em>The Hunter</em> first. New French readers should start at the beginning
              of the trilogy before this release — the payoff only works if you&apos;ve
              been inside Ardnakelty across two novels.
            </p>
            <p>
              <strong>Format matters for <em>London Falling</em>.</strong> Keefe narrates
              the Audible edition himself. His <em>Say Nothing</em> audiobook is widely
              cited as exceptional; prioritize audio if that&apos;s your format.
            </p>
            <p>
              <strong>If you want something lighter,</strong> the heavyweight nonfiction
              and literary releases this month are not the answer. Look at our{' '}
              <Link
                href="/books/reader-picks"
                className="text-blue-600 hover:underline font-medium"
              >
                reader-intent lists
              </Link>{' '}
              for beach reads, one-sitting reads, and feel-good picks that aren&apos;t
              tied to new-release cycles.
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
              <strong>Best overall:</strong> <em>London Falling</em> (Keefe) — the most
              important release of April 2026. Buy this one first.
            </p>
            <p>
              <strong>Best genre fiction:</strong> <em>The Keeper</em> (French) — but
              read the trilogy in order.
            </p>
            <p>
              <strong>Best book club pick:</strong> <em>The Last Women of Warsaw</em>{' '}
              (Batalion) — substantive, well-researched, discussable.
            </p>
            <p>
              <strong>Best debut:</strong> <em>The Ending Writes Itself</em> (Clarke) —
              high-concept locked-room mystery.
            </p>
          </div>
          <div className="mt-5">
            <BookCTA title="London Falling" author="Patrick Radden Keefe" />
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/books/self-help/best-self-help-books-2026"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best New Self-Help Books in 2026
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Nonfiction 2026 releases worth reading →
              </p>
            </Link>
            <Link
              href="/books/genre-fiction/best-new-spy-thriller-books-2026"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best New Spy Thriller Books in 2026
              </p>
              <p className="text-xs text-gray-500 mt-1">If fiction is what you want →</p>
            </Link>
            <Link
              href="/books/genre-fiction/best-world-war-ii-books"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">Best World War II Books</p>
              <p className="text-xs text-gray-500 mt-1">
                If The Last Women of Warsaw interested you →
              </p>
            </Link>
            <Link
              href="/books/reader-picks"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Browse All Reader-Intent Lists
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Beach reads, book clubs, and more →
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
