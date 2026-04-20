import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = {
  title: 'Best Books About World War II — Ranked with Winner Logic',
  description:
    "The best WWII books available now, ranked honestly: Doerr's All the Light We Cannot See, Ambrose's Band of Brothers, Wiesel's Night, Hillenbrand's Unbroken, and Zusak's The Book Thief — each with a clear skip-this-if recommendation.",
  alternates: {
    canonical: 'https://bestpickzone.com/books/genre-fiction/best-world-war-ii-books',
  },
  openGraph: {
    title: 'Best Books About World War II',
    description:
      'The definitive WWII reading list — fiction, non-fiction, memoir, Pacific, European — ranked with explicit winner logic.',
    url: 'https://bestpickzone.com/books/genre-fiction/best-world-war-ii-books',
    siteName: 'BestPickZone',
    type: 'article',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Genre Fiction', href: '/books/genre-fiction' },
  { label: 'Best Books About World War II' },
]

const picks = [
  {
    slot: 'Best Novel',
    slotColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    title: 'All the Light We Cannot See',
    author: 'Anthony Doerr',
    meta: '2014 · 544 pages · Paperback, Kindle, Audible',
    summary:
      "Marie-Laure LeBlanc, blind from age six, flees Paris with her father when the Germans occupy France. Werner Pfennig, a German orphan, is recruited into the Wehrmacht because of his radio expertise. The two storylines converge in Saint-Malo in 1944. Doerr's prose handles the convergence with extraordinary precision; the final 100 pages are among the most emotionally devastating in contemporary fiction.",
    pros: [
      'Pulitzer Prize 2015; 4.7-star average across 150,000+ Amazon reviews',
      'The dual POV structure (French victim, German soldier) forces a more complex understanding of the war than hero/villain framing allows',
      "Doerr's research extended to multiple trips to Saint-Malo and consultation with radio historians",
      'Kindle edition under $15; strong Audible edition',
    ],
    cons: [
      'The non-linear structure requires patience in the first 50 pages',
      "Some readers find the German soldier's storyline harder to engage with emotionally than Marie-Laure's",
    ],
    skip: "you want a single POV and linear timeline. The dual structure is the point — removing it would remove the novel's argument.",
  },
  {
    slot: 'Best Non-Fiction',
    slotColor: 'bg-red-100 text-red-800 border border-red-300',
    title: 'Band of Brothers',
    author: 'Stephen Ambrose',
    meta: '1992 · 336 pages · Paperback, Kindle, Audible',
    summary:
      'Ambrose interviewed surviving members of Easy Company extensively and reconstructed their experience from D-Day through V-E Day with a scene-level detail that most WWII histories lack. The HBO series (produced by Spielberg and Hanks) is among the finest television ever made; the book provides everything the series compresses.',
    pros: [
      "Ambrose's interview methodology means the account is built from first-person testimony — the decisions and emotions are reported, not reconstructed",
      'The small-unit focus (one company rather than the whole war) makes the scale of individual bravery legible',
      'Works perfectly alongside or after the HBO series — neither spoils the other',
    ],
    cons: [
      "Ambrose's sourcing has been questioned by some historians — specific quotes and scenes have been disputed",
      "The focus on Easy Company's valor can feel hagiographic in places",
    ],
    skip: 'you want a balanced account of German or civilian experience. Ambrose is firmly inside the American military perspective.',
  },
  {
    slot: 'Best Memoir',
    slotColor: 'bg-purple-100 text-purple-800 border border-purple-300',
    title: 'Night',
    author: 'Elie Wiesel',
    meta: '1960 · 120 pages · Paperback, Kindle, Audible (Marion Wiesel translation, 2006)',
    summary:
      'Wiesel was 15 years old when he and his family were deported to Auschwitz. Night is his account — spare, exact, 120 pages that contain more moral weight than most novels ten times longer. Wiesel won the Nobel Peace Prize in 1986; the Nobel Committee specifically cited Night as the document that most fully captured what the Holocaust meant at the level of an individual human life.',
    pros: [
      "The brevity is inseparable from the impact — Wiesel's restraint makes the horror more present, not less",
      'Required reading in most secondary schools for 40+ years — its moral clarity is accessible to any age',
      'The Marion Wiesel translation (2006) is the definitive English text — specifically seek this edition',
    ],
    cons: [
      'Not a book that can be read passively — demands full engagement',
      '120 pages that take longer to process than they take to read',
    ],
    skip: 'you are looking for historical context rather than personal witness. Night is testimony, not analysis.',
  },
  {
    slot: 'Best Pacific Theater',
    slotColor: 'bg-blue-100 text-blue-800 border border-blue-300',
    title: 'Unbroken',
    author: 'Laura Hillenbrand',
    meta: '2010 · 496 pages · Paperback, Kindle, Audible',
    summary:
      "Louis Zamperini — Olympic runner, bombardier, POW survivor — provides the Pacific theater's definitive survivor account. Hillenbrand's research is meticulous: 75 interviews with Zamperini across seven years, hundreds of supporting sources. The 47 days on a life raft following his plane's crash are among the most harrowing survival sequences in narrative non-fiction.",
    pros: [
      'The natural dramatic arc (athlete → soldier → POW → survivor) needs no fictional enhancement',
      "Hillenbrand's prose is invisible — the research never slows the narrative",
      'The Audible edition (Edward Herrmann) is one of the best non-fiction audiobook performances available',
    ],
    cons: [
      "The post-war section covering Zamperini's religious conversion is less gripping than the survival sequences for some readers",
      '496 pages — longer than the other non-fiction entries on this list',
    ],
    skip: "you want a strategic overview of the Pacific War. Unbroken covers one man's experience in one corner of the Pacific theater.",
  },
  {
    slot: 'Best Accessible Fiction',
    slotColor: 'bg-green-100 text-green-800 border border-green-300',
    title: 'The Book Thief',
    author: 'Markus Zusak',
    meta: '2005 · 576 pages · Paperback, Kindle, Audible',
    summary:
      "Set in a small German town during the war, narrated by Death, The Book Thief follows a young girl named Liesel Meminger who steals books and learns to read as the war tightens around her family. Zusak's narrator (Death) provides a distance from the violence that makes the novel accessible to younger readers while preserving the moral weight.",
    pros: [
      'The Death-as-narrator device creates a distinctive tonal register — not comic, not macabre, genuinely affecting',
      'The German civilian perspective is rare in popular WWII fiction — the experience of living inside a losing fascist state is rendered with specificity',
      '4.6-star average across 170,000+ Amazon reviews; one of the most broadly beloved WWII novels published in the past 20 years',
    ],
    cons: [
      'The Death narrator requires a one-chapter adjustment period',
      'Some readers find the ending predictable despite the structural innovations around it',
    ],
    skip: 'you want a combat-focused or strategic perspective. This is a civilian home-front story.',
  },
]

const faqs = [
  {
    q: "What's the best WWII book for someone who knows nothing about the war?",
    a: 'Band of Brothers — it provides tactical and strategic context embedded in a human narrative. By the time you finish, you understand D-Day, the push into Germany, and the experience of infantry combat better than most people who studied it in school.',
  },
  {
    q: 'Is The Book Thief appropriate for younger readers?',
    a: "Yes — it was originally marketed as young adult and is widely taught in middle and high schools. The violence is present but handled with restraint appropriate to the narrator (Death's perspective provides emotional distance).",
  },
  {
    q: 'What is the difference between Unbroken and Band of Brothers?',
    a: "Unbroken follows one man's experience across the Pacific theater (plane crash, life raft, POW camp). Band of Brothers follows one infantry company across the European theater (D-Day through Germany). Both are non-fiction built from first-person testimony. Unbroken is a survival story; Band of Brothers is a military unit history.",
  },
  {
    q: "What's the best WWII book for a reader who primarily wants fiction?",
    a: "Start with All the Light We Cannot See. If you want something shorter and more accessible, The Book Thief. Both are Pulitzer-level prose; both reward a patient first 50 pages.",
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
  headline: 'Best Books About World War II',
  description:
    'The definitive WWII reading list, separated into fiction and non-fiction, with honest winner logic and skip-this-if guidance per pick.',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: '2026-04-19',
  dateModified: '2026-04-19',
  mainEntityOfPage:
    'https://bestpickzone.com/books/genre-fiction/best-world-war-ii-books',
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

export default function BestWorldWarIIBooksPage() {
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
          Best Books About World War II
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="text-lg leading-relaxed">
            <em>All the Light We Cannot See</em> by Anthony Doerr is the best WWII
            novel available — a Pulitzer Prize winner that follows a blind French girl
            and a German orphan boy whose paths converge in the final days of the war.
            Doerr spent ten years writing it, and that care is visible in every
            sentence. If you read one WWII book from this list, read that one.
          </p>
          <p className="leading-relaxed">
            For non-fiction: <em>Band of Brothers</em> by Stephen Ambrose is the best
            starting point — the account of Easy Company, 506th Regiment, 101st
            Airborne from D-Day through the end of the war in Europe. The HBO series
            is faithful; the book provides significantly more tactical and human
            detail than the 10-episode adaptation could contain.
          </p>
          <p className="leading-relaxed">
            Below we&apos;ve also picked the best WWII memoir, the best Pacific
            theater account, and the best accessible fiction for readers who want a
            historical distance from the material.
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
              <strong>Fiction vs. non-fiction for WWII.</strong> Non-fiction (
              <em>Band of Brothers</em>, <em>Unbroken</em>, <em>Night</em>) provides
              verified historical detail and the moral weight of documented events.
              Fiction (<em>All the Light We Cannot See</em>, <em>The Book Thief</em>)
              provides access to perspectives — blind French girl, German orphan,
              German civilian — that the historical record doesn&apos;t preserve at
              the individual level. Both have value; the choice is what kind of
              reading experience you want.
            </p>
            <p>
              <strong>Theater matters.</strong> The European and Pacific theaters
              produced meaningfully different experiences. Most popular WWII fiction
              covers Europe. <em>Unbroken</em> is the strongest Pacific account on
              this list; <em>Band of Brothers</em> is Europe. If your interest is
              specifically the Pacific, <em>Unbroken</em> is the starting point.
            </p>
            <p>
              <strong>Want adjacent reading?</strong> Our{' '}
              <Link
                href="/books/genre-fiction/best-history-books-for-beginners"
                className="text-blue-600 hover:underline font-medium"
              >
                best history books for beginners
              </Link>{' '}
              guide covers broader 20th-century history; the{' '}
              <Link
                href="/books/genre-fiction/best-military-fiction-books"
                className="text-blue-600 hover:underline font-medium"
              >
                best military fiction books
              </Link>{' '}
              guide covers combat writing across WWI, Vietnam, and the post-9/11
              conflicts.
            </p>
            <p>
              <strong>Aftermath reading:</strong> Our{' '}
              <Link
                href="/books/genre-fiction/best-cold-war-thriller-books"
                className="text-blue-600 hover:underline font-medium"
              >
                best Cold War thriller books
              </Link>{' '}
              guide covers the intelligence conflict that emerged directly from
              WWII&apos;s conclusion.
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
              <strong>Best WWII novel:</strong> <em>All the Light We Cannot See</em> —
              ten years in the writing, Pulitzer Prize, deserves every word of praise
              it&apos;s received.
            </p>
            <p>
              <strong>Best non-fiction:</strong> <em>Band of Brothers</em> — the
              definitive small-unit combat account of the European theater.
            </p>
            <p>
              <strong>Best memoir:</strong> <em>Night</em> — 120 pages that cannot be
              skimmed.
            </p>
            <p>
              <strong>Best Pacific theater:</strong> <em>Unbroken</em> — the most
              gripping survival account in WWII non-fiction.
            </p>
            <p>
              <strong>Best accessible fiction:</strong> <em>The Book Thief</em> — the
              most broadly beloved WWII novel of the past two decades.
            </p>
          </div>
          <div className="mt-5">
            <BookCTA title="All the Light We Cannot See" author="Anthony Doerr" />
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
                Broader 20th-century and earlier history reading →
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
                Combat writing across WWI, Vietnam, and post-9/11 →
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
                The intelligence conflict that emerged from WWII →
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
