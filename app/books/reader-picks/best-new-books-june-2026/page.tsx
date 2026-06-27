import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: "Best New Books in June 2026 — This Month's Standout Releases",
  description:
    "The best new books published in June 2026, ranked with winner logic: The Shampoo Effect, Little Wonder, A Pair of Aces, and The Housewives Underground.",
  alternates: {
    canonical: 'https://bestpickzone.com/books/reader-picks/best-new-books-june-2026',
  },
  openGraph: {
    title: 'Best New Books in June 2026',
    description:
      "June 2026's strongest new releases ranked with editorial winner logic, honest caveats, and clear reader-fit recommendations.",
    url: 'https://bestpickzone.com/books/reader-picks/best-new-books-june-2026',
    siteName: 'BestPickZone',
    type: 'article',
  },
}, { category: 'reader-picks' })

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Reader-Intent Lists', href: '/books/reader-picks' },
  { label: 'Best New Books June 2026' },
]

const picks = [
  {
    slot: 'Best Overall',
    slotColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    title: 'The Shampoo Effect',
    author: 'Jenny Jackson',
    pubDate: 'June 30, 2026',
    publisher: 'Pamela Dorman Books',
    pages: '352 pages (hardcover)',
    formats: 'Hardcover, Kindle, Audible',
    summary:
      "Jenny Jackson follows Pineapple Street with a sharper, saltier summer novel about an ambitious young woman who insinuates herself into a tightly sealed seaside friend group and destabilizes marriages, loyalties, and old myths about who belongs. The pitch sounds light, but the real draw is social pressure: the book is built around class performance, aging friendships, and the panic that arrives when a supposedly fixed social hierarchy starts to move.",
    pros: [
      'The broadest appeal of any major June release on this list: summer setting, strong gossip energy, and enough emotional bite to travel beyond “vacation read” status',
      'Pamela Dorman Books publication and broad format availability make it an easy buy across hardcover, ebook, and audio readers',
      'Readers who liked Pineapple Street but wanted more heat and less polish are likely the exact audience for this one',
      'The premise is instantly explainable, which matters for recommendation culture and word-of-mouth',
    ],
    cons: [
      'If you dislike social-circle novels where status games are the plot engine, this will feel claustrophobic rather than delicious',
      'June 30 is late in the month, so readers wanting an already-discussed club pick may find the conversation still forming',
    ],
    skip: 'you want plot-first suspense or historical weight. This wins on social observation, not on body count or archival depth.',
  },
  {
    slot: 'Best for Book Clubs',
    slotColor: 'bg-purple-100 text-purple-800 border border-purple-300',
    title: 'Little Wonder',
    author: 'Sophie Chen Keller',
    pubDate: 'June 16, 2026',
    publisher: 'Ballantine Books',
    pages: '352 pages (hardcover)',
    formats: 'Hardcover, Kindle, Audible',
    summary:
      'A musically gifted boy and his mother spend years searching for one another in a modern Beijing story that leans on devotion, loss, migration, and the stubbornness of hope. The strongest early response around Little Wonder points to atmosphere and emotional reach rather than to high concept, which is exactly why it fits book clubs: there is enough craft to discuss and enough feeling to divide readers productively.',
    pros: [
      'Booklist starred review and strong advance praise suggest it has more staying power than a one-week release spike',
      'The Beijing setting and music-driven emotional structure give it a different texture from the more generic family-secrets novel',
      'Good fit for readers who want a June release that feels literary without turning arid or punishing',
      'Clean standalone appeal: no series baggage, no need for genre loyalty',
    ],
    cons: [
      'Readers looking for velocity or twist mechanics may find it too patient',
      'The emotional pitch is sincere and exposed; cynical readers may bounce if they want a cooler register',
    ],
    skip: 'you need a brisk, high-concept page-turner. This is a mood-and-emotion book first.',
  },
  {
    slot: 'Best Historical Fiction',
    slotColor: 'bg-blue-100 text-blue-800 border border-blue-300',
    title: 'A Pair of Aces',
    author: 'Marie Benedict and Victoria Christopher Murray',
    pubDate: 'June 2, 2026',
    publisher: 'Berkley',
    pages: '400 pages (hardcover)',
    formats: 'Hardcover, Kindle, Audible',
    summary:
      'Set in 1930s New York, A Pair of Aces pairs a prosecutor and a madam in a campaign to bring down Lucky Luciano. Marie Benedict and Victoria Christopher Murray have already shown they know how to write overlooked-women historical fiction that still moves like a commercial novel, and this one looks built for readers who want period detail without sacrificing pace.',
    pros: [
      "The premise is more active than many “hidden women of history” novels, which helps it land with readers who usually avoid respectable-but-static historical fiction",
      'Early endorsements emphasize pacing as much as historical detail, a good sign for general readers and book clubs',
      'Released June 2, so it is one of the easiest June books to get into readers’ hands immediately',
      'Strong fit for anyone who liked The Personal Librarian but wants more danger and less institutional polish',
    ],
    cons: [
      'If you are tired of prohibition-era mob glamour, the setup may feel familiar before the women-centered angle takes over',
      'Co-authored historical fiction can sometimes flatten into efficiency; readers who want very idiosyncratic prose may want another pick',
    ],
    skip: 'you want literary experimentation or contemporary realism. This is commercial historical fiction with propulsion.',
  },
  {
    slot: 'Best Nonfiction',
    slotColor: 'bg-green-100 text-green-800 border border-green-300',
    title: 'The Housewives Underground',
    author: 'Kaitlyn Tiffany',
    pubDate: 'June 23, 2026',
    publisher: 'Crown',
    pages: '512 pages (hardcover)',
    formats: 'Hardcover, Kindle, Audible',
    summary:
      'Kaitlyn Tiffany reconstructs the story of the women who challenged the Warren Report and helped turn the JFK assassination into America’s most durable modern mystery. What makes the book stand out is not just the subject, but the angle: this is not another broad JFK retelling, but a history of how dismissed women pushed for truth, built networks, and changed public memory.',
    pros: [
      'Publishers Weekly starred review gives it real nonfiction credibility before publication',
      'The angle is differentiated enough to escape the usual “yet another JFK book” trap',
      'At 512 pages, it signals serious reporting rather than repackaged conspiracy chatter',
      'Good June pick for readers who want nonfiction with both historical depth and clear narrative conflict',
    ],
    cons: [
      'Longer and denser than the other books here; this is the least casual pick on the page',
      'Readers uninterested in assassination history may not care enough about the frame to appreciate the reporting',
    ],
    skip: 'you want a breezy summer book. This is the most intellectually demanding title in the June stack.',
  },
] as const

function getAmazonSearchUrl(title: string, author: string) {
  const query = encodeURIComponent(`${title} ${author}`)
  return `https://www.amazon.com/s?k=${query}&tag=althcu-20`
}

const honorableMentions = [
  {
    title: 'Road Trip',
    author: 'Mary Kay Andrews',
    note:
      'Published June 2, 2026 by St. Martin\'s Press at 448 pages. Best for readers who want a true beach-bag novel with charm, movement, and a little family-friction messiness.',
  },
  {
    title: 'Slasher Summer',
    author: 'E. L. Chen',
    note:
      'Published June 23, 2026 by Crown at 304 pages. The best niche June pick if you want campy 1980s slasher energy instead of mainstream book-club polish.',
  },
]

const faqs = [
  {
    q: 'What is the best new book released in June 2026?',
    a: 'The best new book of June 2026 is The Shampoo Effect by Jenny Jackson. It has the widest crossover appeal of the month: social heat, summer atmosphere, and enough emotional friction to satisfy both vacation readers and more serious fiction readers.',
  },
  {
    q: "What's the best June 2026 book for a book club?",
    a: 'Little Wonder by Sophie Chen Keller is the strongest book-club pick because it offers setting, emotion, craft, and enough thematic material to generate discussion without becoming a homework novel. A Pair of Aces is the better choice if your group wants more pace and historical suspense.',
  },
  {
    q: 'What should I read if I want a lighter June 2026 release?',
    a: 'Start with The Shampoo Effect or Road Trip. Both are easier summer-entry books than The Housewives Underground, which is much denser and more research-driven.',
  },
  {
    q: 'Which June 2026 release here is best for nonfiction readers?',
    a: 'The Housewives Underground. It has the strongest angle and the clearest differentiator among the June nonfiction books we reviewed, especially for readers interested in media, politics, and how historical memory gets made.',
  },
  {
    q: 'Are all of these books actually June 2026 releases?',
    a: 'Yes. The books in the main ranking were verified against Amazon listings as June 2026 releases: June 2, June 16, June 23, and June 30. We excluded books that were only being promoted in June but published earlier.',
  },
]

const relatedGuides = [
  {
    href: '/books/reader-picks/best-new-books-april-2026',
    title: 'Best New Books in April 2026',
    text: 'The closest structural companion to this page if you want to compare months.',
  },
  {
    href: '/books/best-book-club-books',
    title: 'Best Book Club Books',
    text: 'A longer-term guide when you are not trying to stay tied to the current release calendar.',
  },
  {
    href: '/books/best-beach-reads',
    title: 'Best Beach Reads',
    text: 'The better next click if your June priority is mood and portability rather than release freshness.',
  },
  {
    href: '/books/best-books-of-all-time',
    title: 'Best Books of All Time',
    text: 'Useful when you decide you want quality first and recency second.',
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
  headline: 'Best New Books in June 2026',
  description:
    'The best new books published in June 2026, ranked with editorial winner logic and explicit skip-this-if recommendations.',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: '2026-06-13',
  dateModified: '2026-06-26',
  mainEntityOfPage: 'https://bestpickzone.com/books/reader-picks/best-new-books-june-2026',
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

export default function BestNewBooksJune2026Page() {
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
          <span>Last verified: June 2026</span>
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
          Best New Books in June 2026
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="text-lg leading-relaxed">
            The best new book of June 2026 is <em>The Shampoo Effect</em> by Jenny
            Jackson. It is the June release with the clearest broad-reader upside:
            summery setting, social friction, and enough sharpness to feel like more than
            a disposable vacation novel. If you want something more openly emotional and
            book-club ready, move to <em>Little Wonder</em>. If you want history with
            momentum, take <em>A Pair of Aces</em>.
          </p>
          <p className="leading-relaxed">
            June&apos;s strongest new books split into two camps: lush, reader-friendly
            fiction and heavier nonfiction with real archival weight. That means the
            month is good for readers who want range, but not great for anyone hoping for
            one obvious universal blockbuster that fits every mood.
          </p>
          <p className="leading-relaxed">
            Below we&apos;ve ranked the best overall release, the best book-club pick, the
            strongest historical-fiction title, the best nonfiction release, and two
            honorable mentions worth watching.
          </p>
          <p className="text-sm text-gray-500 italic">
            All titles, authors, publishers, page counts, and June 2026 release dates
            were verified against Amazon listings and publisher release pages in June
            2026. Prices and availability can change.
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
                  <th className="px-4 py-3 font-semibold">Find on Amazon</th>
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
                    <td className="px-4 py-3">
                      <Link
                        href={getAmazonSearchUrl(p.title, p.author)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-3 py-2 text-xs font-bold text-gray-900 transition-colors hover:bg-yellow-300"
                      >
                        Find on Amazon
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          id="visual-map"
          className="mb-12 overflow-hidden rounded-[32px] border border-gray-200 bg-[radial-gradient(circle_at_top_left,_#fff7d6_0%,_#fff2f2_35%,_#f8fbff_72%,_#ffffff_100%)] p-6 shadow-sm"
        >
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Visual map
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Which kind of June reader are you?
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              Think of this like a fast summer mood board, not a strict flowchart.
              Start with the reading mood that sounds most like you, then use the
              bonus detours if you want something lighter or bloodier.
            </p>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[12%] right-[12%] top-[94px] hidden h-px border-t-2 border-dashed border-gray-300 lg:block"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[188px] hidden h-16 -translate-x-1/2 border-l-2 border-dashed border-gray-300 lg:block"
            />

            <div className="grid gap-4 lg:grid-cols-4">
              <div className="relative rounded-[28px] border border-yellow-300 bg-yellow-100/90 p-5 shadow-[0_18px_40px_rgba(250,204,21,0.18)]">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                    ☀️
                  </span>
                  <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-800">
                    Biggest Crowd-Pleaser
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Read <em>The Shampoo Effect</em></h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Pick this if you want the June book most likely to travel from
                  beach tote to group chat to book club without losing momentum.
                </p>
              </div>

              <div className="relative rounded-[28px] border border-purple-300 bg-purple-100/90 p-5 shadow-[0_18px_40px_rgba(168,85,247,0.14)]">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                    💬
                  </span>
                  <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-purple-800">
                    Book Club Fuel
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Read <em>Little Wonder</em></h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  This is the pick for readers who want emotion, setting, and
                  enough interpretive room to argue about it afterward.
                </p>
              </div>

              <div className="relative rounded-[28px] border border-blue-300 bg-blue-100/90 p-5 shadow-[0_18px_40px_rgba(59,130,246,0.14)]">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                    ♠️
                  </span>
                  <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-800">
                    Historical Pace
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Read <em>A Pair of Aces</em></h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Go here if you want period detail, recognizable stakes, and a
                  story that moves like a commercial thriller.
                </p>
              </div>

              <div className="relative rounded-[28px] border border-green-300 bg-green-100/90 p-5 shadow-[0_18px_40px_rgba(34,197,94,0.14)]">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                    🔎
                  </span>
                  <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-green-800">
                    Real Reporting
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Read <em>The Housewives Underground</em></h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Choose this lane if you want the June book with the most
                  reporting weight and the least interest in being breezy.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 lg:mx-auto lg:max-w-3xl lg:grid-cols-2">
              <div className="rounded-[24px] border border-rose-300 bg-rose-100/90 p-5 shadow-[0_18px_36px_rgba(244,114,182,0.12)]">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
                    🏖️
                  </span>
                  <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-rose-700">
                    Lighter Detour
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Try <em>Road Trip</em> instead</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  If all of the main picks sound a little too serious, this is the
                  easier beach-bag pivot with movement, charm, and family-friction fun.
                </p>
              </div>

              <div className="rounded-[24px] border border-cyan-300 bg-cyan-100/90 p-5 shadow-[0_18px_36px_rgba(34,211,238,0.12)]">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
                    🩸
                  </span>
                  <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-800">
                    Wilder Detour
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Try <em>Slasher Summer</em> instead</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  This is the off-ramp for readers who want June to be messier,
                  campier, and a lot more gleefully bloody.
                </p>
              </div>
            </div>
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
                <div className={`px-5 py-3 text-sm font-semibold ${p.slotColor}`}>
                  {p.slot}
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {p.author} · {p.pubDate} · {p.publisher} · {p.pages}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Formats:</strong> {p.formats}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-5">{p.summary}</p>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-emerald-700 mb-3">
                        Why it made the list
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {p.pros.map((pro) => (
                          <li key={pro} className="flex gap-2">
                            <span className="text-emerald-600 mt-0.5">•</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-rose-700 mb-3">
                        Tradeoffs
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {p.cons.map((con) => (
                          <li key={con} className="flex gap-2">
                            <span className="text-rose-600 mt-0.5">•</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4">
                    <p className="text-sm">
                      <strong>Skip this if:</strong> {p.skip}
                    </p>
                  </div>

                  <BookCTA title={p.title} author={p.author} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Honorable Mentions
          </h2>
          <div className="space-y-4">
            {honorableMentions.map((book) => (
              <div key={book.title} className="rounded-2xl border border-white bg-white p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{book.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>{book.author}:</strong> {book.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[28px] border border-amber-200 bg-amber-50 p-6 shadow-sm">
          <h2
            className="text-2xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Skip the June glut this way
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            If you want one June book and do not want to overthink it, buy{' '}
            <em>The Shampoo Effect</em>. If you want the best discussion book, buy{' '}
            <em>Little Wonder</em>. If you want weight and reporting, buy{' '}
            <em>The Housewives Underground</em>. The mistake is buying all four and
            reading none of them.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Related Reading
          </h2>
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
