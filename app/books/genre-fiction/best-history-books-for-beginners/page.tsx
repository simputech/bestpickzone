import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'
import { getSpanishUrlForEnglishPath } from '@/lib/spanish-site-data'

const pageUrl = 'https://bestpickzone.com/books/genre-fiction/best-history-books-for-beginners'
const spanishUrl = getSpanishUrlForEnglishPath(pageUrl)

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best History Books for Beginners — Ranked with Winner Logic',
  description:
    "The best history books for beginners, ranked honestly: Harari's Sapiens, Larson's Devil in the White City, Beard's SPQR, Bryson's Short History, and Tuchman's Guns of August — each with a clear skip-this-if recommendation.",
  alternates: {
    canonical: pageUrl,
    languages: spanishUrl
      ? {
          en: pageUrl,
          es: spanishUrl,
        }
      : undefined,
  },
  openGraph: {
    title: 'Best History Books for Beginners',
    description:
      'Five accessible, narrative-first history books ranked with explicit winner logic — Harari, Larson, Beard, Bryson, Tuchman.',
    url: pageUrl,
    siteName: 'BestPickZone',
    type: 'article',
  },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  category: 'genre-fiction' })

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Genre Fiction', href: '/books/genre-fiction' },
  { label: 'Best History Books for Beginners' },
]

const picks = [
  {
    slot: 'Best Overall',
    slotColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    meta: '2014 · 464 pages · Paperback, Kindle, Audible',
    summary:
      "Harari's central argument — that what separates humans from other animals is our ability to believe in shared fictions (money, nations, corporations) — reframes human history as a coherent story rather than a collection of disconnected events. The structure makes the book unusually easy to read in sequence: each chapter builds on the last, and the argument accumulates rather than restarts.",
    pros: [
      "No prior history knowledge required — Harari defines every concept as it's introduced",
      'Covers more ground than any other book on this list — prehistoric humanity through the present',
      '4.6-star average on Amazon across 100,000+ reviews — one of the most consistently praised non-fiction books of the past decade',
      'Kindle edition under $15; frequently on sale',
    ],
    cons: [
      "Harari's grand claims are contested by specialists — the book is better read as an argument than a textbook",
      'Some chapters (particularly the agricultural revolution critique) require accepting a debatable premise to follow the logic',
    ],
    skip: 'you want a specific historical period rather than a sweeping overview.',
  },
  {
    slot: 'Best American History',
    slotColor: 'bg-red-100 text-red-800 border border-red-300',
    title: 'The Devil in the White City',
    author: 'Erik Larson',
    meta: '2003 · 464 pages · Paperback, Kindle, Audible',
    summary:
      "Larson interweaves two true stories: the construction of the 1893 Chicago World's Fair and the serial killer who used the fair to find victims. The history of the fair — how Chicago competed with Paris, what the architecture cost, how the electrical systems were built — is genuinely fascinating independently of the crime narrative. Larson's research is meticulous; every scene is sourced.",
    pros: [
      'Reads like a thriller despite being entirely non-fiction',
      'The architectural and industrial history of late 19th-century America is painlessly embedded in a propulsive narrative',
      'Short chapters — ideal for readers who struggle to commit to long reading sessions',
    ],
    cons: [
      'The dual narrative means neither story gets the depth it might in a dedicated book',
      'The crime elements are disturbing in places — relevant to flag for some readers',
    ],
    skip: "you want political or military history — Larson's focus is cultural and architectural.",
  },
  {
    slot: 'Best Ancient History',
    slotColor: 'bg-amber-100 text-amber-800 border border-amber-300',
    title: 'SPQR: A History of Ancient Rome',
    author: 'Mary Beard',
    meta: '2015 · 608 pages · Paperback, Kindle, Audible',
    summary:
      "Beard's history of ancient Rome is the most accessible academic history on this list. She writes with the authority of a Cambridge classicist and the directness of a journalist — her Rome is populated by real people making practical decisions, not marble statues fulfilling destiny. The book focuses on the Roman Republic rather than the Empire, which makes it a useful complement to films and TV shows that typically cover the Imperial period.",
    pros: [
      'Beard challenges popular misconceptions about Rome directly and explains why they exist',
      'Written for general readers — no Latin required, no prior classical knowledge assumed',
      '608 pages but reads faster than that count suggests',
    ],
    cons: [
      'Deliberately avoids the "great men" narrative that some readers find more engaging',
      'Covers the Republic period; readers who want Julius Caesar and later emperors will need a different book',
    ],
    skip: 'you want a narrative built around individual personalities. Beard is more interested in systems and institutions.',
  },
  {
    slot: 'Best Short Entry Point',
    slotColor: 'bg-green-100 text-green-800 border border-green-300',
    title: 'A Short History of Nearly Everything',
    author: 'Bill Bryson',
    meta: '2003 · 544 pages · Paperback, Kindle, Audible (Bryson narrates)',
    summary:
      "Bryson's book is technically science history rather than human history, but for readers who want to test whether accessible non-fiction is for them before committing to 500 pages of Harari, this is the ideal starting point. Bryson traces how scientists discovered what we know about the physical world — from the size of atoms to the age of the universe — and makes the scientists themselves as interesting as their discoveries.",
    pros: [
      "Bryson's voice is genuinely funny — one of the few popular science/history books that produces audible laughs",
      'Each chapter is essentially standalone — works well for readers who read in short sessions',
      'The Audible edition, narrated by Bryson himself, is one of the strongest audiobook productions available',
    ],
    cons: [
      'Science history rather than political or social history — may not be what readers looking for "history" expect',
      'Published in 2003; some scientific content has been updated or revised',
    ],
    skip: 'you specifically want human civilization history — Bryson is focused on scientific discovery.',
  },
  {
    slot: 'Best War History',
    slotColor: 'bg-blue-100 text-blue-800 border border-blue-300',
    title: 'The Guns of August',
    author: 'Barbara Tuchman',
    meta: '1962 · 640 pages · Paperback, Kindle, Audible',
    summary:
      "Tuchman's Pulitzer Prize-winning account of the opening month of World War I remains the best introduction to military history for non-specialists. She follows political and military leaders across multiple countries in the weeks leading to and immediately following the war's outbreak — the decisions, miscommunications, and institutional inertia that turned a regional crisis into a global catastrophe.",
    pros: [
      'Narrative history at its finest — Tuchman makes the reader feel the week-by-week escalation as it happens',
      'Pulitzer Prize winner; praised by historians and general readers alike for 60+ years',
      'The relevance to how modern crises escalate makes it feel current despite covering 1914',
    ],
    cons: [
      'Dense with names, countries, and military units — requires more active reading than Harari or Bryson',
      "Covers only the war's opening month; readers wanting the full WWI picture will need additional reading",
    ],
    skip: "you're new to military history and haven't read anything in the genre yet — start with Harari first.",
  },
]

const faqs = [
  {
    q: 'Is Sapiens accurate?',
    a: "Harari's broad strokes are well-supported; his specific claims vary in scholarly consensus. The book is best read as a framework for thinking about human history rather than a comprehensive reference. Historians have contested specific arguments, particularly around the agricultural revolution. For a beginner, the framework is more valuable than the individual claims.",
  },
  {
    q: "What's the best history book about war for beginners?",
    a: 'The Guns of August for WWI; Unbroken by Laura Hillenbrand for WWII (see our Best Books About World War II list). Both are narrative-driven and accessible without prior military history knowledge.',
  },
  {
    q: 'How long does it take to read Sapiens?',
    a: 'At an average reading pace (250–300 words per minute), Sapiens takes roughly 8–10 hours of reading time. Most readers finish it in 1–2 weeks of casual reading.',
  },
  {
    q: 'What order should I read these books in?',
    a: 'Start with Sapiens if you want the big picture, or with A Short History of Nearly Everything if you want to test accessible non-fiction with a lower page commitment. Save Tuchman for after you have at least one narrative history under your belt — it rewards prior reading.',
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
  headline: 'Best History Books for Beginners',
  description:
    'Five narrative-first history books for readers new to the genre, ranked with honest winner logic and skip-this-if guidance per pick.',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: '2026-04-20',
  dateModified: '2026-06-26',
  mainEntityOfPage:
    'https://bestpickzone.com/books/genre-fiction/best-history-books-for-beginners',
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

export default function BestHistoryBooksForBeginnersPage() {
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
          Best History Books for Beginners
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="text-lg leading-relaxed">
            <em>Sapiens: A Brief History of Humankind</em> by Yuval Noah Harari is the
            best history book for readers who have never enjoyed history. It covers
            70,000 years of human civilization in 450 pages, written in plain language
            that assumes no prior knowledge and never condescends to the reader. If
            you&apos;ve ever thought history was boring, this book will change your
            mind.
          </p>
          <p className="leading-relaxed">
            It works for readers who want the big picture before the details — Harari
            moves from the cognitive revolution through the agricultural revolution
            through industrialization without stopping to catalog dates or memorize
            kings. The tradeoff: <em>Sapiens</em> operates at altitude, which means
            specialists will find it lacks depth in any individual period. For readers
            who want that depth, Mary Beard&apos;s <em>SPQR</em> (ancient Rome) or
            Barbara Tuchman&apos;s <em>The Guns of August</em> (WWI) are the right
            next step.
          </p>
          <p className="leading-relaxed">
            Below we&apos;ve also picked the best American history for beginners, the
            best ancient history, and the best short entry point if you want to test
            whether narrative history is for you before committing to 400 pages.
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
              <strong>Narrative vs. analytical history.</strong> The books on this
              list split into two modes. Narrative history (Larson, Tuchman) reads
              like a novel — you follow people through events. Analytical history
              (Harari, Beard) makes arguments about how history works. Neither is
              harder; they&apos;re different reading experiences. If you loved{' '}
              <em>Band of Brothers</em>, you want narrative. If you enjoyed
              documentaries that explain <em>why</em> things happened, you want
              analytical.
            </p>
            <p>
              <strong>Start with what interests you.</strong> The biggest mistake
              beginners make is starting with &ldquo;important&rdquo; history rather
              than history they&apos;re curious about. Arbitrary starting points kill
              momentum. If you&apos;re interested in Rome, start with Beard. If
              you&apos;re interested in how humanity got here, start with Harari.
            </p>
            <p>
              <strong>Audiobooks work exceptionally well for history.</strong> History
              books have a natural storytelling structure that translates well to
              audio. Bryson narrates his own audiobook and it&apos;s the superior
              format. Tuchman&apos;s <em>Guns of August</em> works well with a skilled
              narrator.
            </p>
            <p>
              <strong>Want to go deeper into specific periods?</strong> Our guide to
              the{' '}
              <Link
                href="/books/genre-fiction/best-world-war-ii-books"
                className="text-blue-600 hover:underline font-medium"
              >
                best books about World War II
              </Link>{' '}
              covers the most-read 20th-century conflict; the{' '}
              <Link
                href="/books/reader-picks/best-books-like-da-vinci-code"
                className="text-blue-600 hover:underline font-medium"
              >
                best books like The Da Vinci Code
              </Link>{' '}
              guide covers history-driven fiction if you want to blend narrative and
              period detail.
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
              <strong>Best first history book:</strong> <em>Sapiens</em> — the most
              accessible, most comprehensive overview available.
            </p>
            <p>
              <strong>Best American history:</strong>{' '}
              <em>The Devil in the White City</em> — reads like a thriller.
            </p>
            <p>
              <strong>Best ancient history:</strong> <em>SPQR</em> — the most trusted
              accessible account of Rome.
            </p>
            <p>
              <strong>Best if you&apos;re not sure history is for you:</strong>{' '}
              <em>A Short History of Nearly Everything</em> — funny, short chapters,
              low commitment.
            </p>
            <p>
              <strong>Best war history:</strong> <em>The Guns of August</em> — the
              definitive WWI opening account.
            </p>
          </div>
          <div className="mt-5">
            <BookCTA
              title="Sapiens A Brief History of Humankind"
              author="Yuval Noah Harari"
            />
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/books/genre-fiction/best-world-war-ii-books"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best Books About World War II
              </p>
              <p className="text-xs text-gray-500 mt-1">
                WWII-specific fiction and narrative non-fiction →
              </p>
            </Link>
            <Link
              href="/books/reader-picks/best-books-like-da-vinci-code"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best Books Like The Da Vinci Code
              </p>
              <p className="text-xs text-gray-500 mt-1">
                History-driven thriller fiction →
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
                Combat writing as a bridge into narrative history →
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
