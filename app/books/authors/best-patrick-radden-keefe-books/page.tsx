import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = {
  title: 'Best Patrick Radden Keefe Books',
  description:
    'The best Patrick Radden Keefe books, ranked by reader intent: Say Nothing, Empire of Pain, Rogues, London Falling, The Snakehead, and where Chatter fits.',
  alternates: {
    canonical: 'https://bestpickzone.com/books/authors/best-patrick-radden-keefe-books',
  },
  openGraph: {
    title: 'Best Patrick Radden Keefe Books',
    description:
      'Where to start with Patrick Radden Keefe, what to read next, and which book to skip first depending on whether you want crime, power, politics, or shorter pieces.',
    url: 'https://bestpickzone.com/books/authors/best-patrick-radden-keefe-books',
    siteName: 'BestPickZone',
    type: 'article',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Author Roundups', href: '/books/authors' },
  { label: 'Best Patrick Radden Keefe Books' },
]

const books = [
  {
    rank: 1,
    title: 'Say Nothing',
    subtitle: 'A True Story of Murder and Memory in Northern Ireland',
    author: 'Patrick Radden Keefe',
    badge: 'Best Overall',
    badgeClass: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    meta: 'Doubleday hardcover 2019 · 464 pages · Vintage paperback 2020 · 560 pages',
    bestFor: 'Readers who want the strongest single example of Keefe\'s narrative method',
    whyItWins:
      'It is the book where his reporting, pacing, moral complexity, and large-historical-frame storytelling all lock together at the highest level.',
    description:
      'Say Nothing is the best Patrick Radden Keefe book because it solves the hardest problem in narrative nonfiction: turning a politically dense, morally compromised conflict into a story that still reads with momentum. The book uses the 1972 disappearance of Jean McConville as a prism for the Troubles in Northern Ireland, but it is not a single-case true-crime book in disguise. It is also a study of memory, silence, radicalization, loyalty, and what people do after violence stops but does not end. For most readers, this is the right first Keefe because it is both his most acclaimed and his most complete.',
    skipIf:
      'Skip this if you want a breezier first experience of Keefe or if you are not ready for a book that asks you to keep multiple people, factions, and decades in your head at once.',
  },
  {
    rank: 2,
    title: 'Empire of Pain',
    subtitle: 'The Secret History of the Sackler Dynasty',
    author: 'Patrick Radden Keefe',
    badge: 'Best Starting Point for U.S. Readers',
    badgeClass: 'bg-red-100 text-red-800 border border-red-300',
    meta: 'Doubleday hardcover 2021 · 560 pages · Vintage paperback 2022 · 640 pages',
    bestFor: 'Readers who want family dynasties, institutional corruption, and modern American consequences',
    whyItWins:
      'If Say Nothing is Keefe\'s most complete achievement, Empire of Pain is the easiest book to recommend cold because the stakes are immediate and the social machinery is recognizable.',
    description:
      'Empire of Pain traces three generations of the Sackler family and the fortune that eventually fused philanthropy, status laundering, and OxyContin into one of the ugliest American power stories of the last half-century. The book works because Keefe does not treat the Sacklers as cartoon villains or as neutral corporate abstractions. He shows them as a dynasty built through ambition, secrecy, vanity, and ruthless insulation from consequence. This is the Patrick Radden Keefe book for readers who want boardrooms, legal warfare, prestige institutions, and a case study in how elite reputation management actually works.',
    skipIf:
      'Skip this if you mainly want a lean crime narrative. This book is broader, slower, and more dynastic than The Snakehead or London Falling.',
  },
  {
    rank: 3,
    title: 'Rogues',
    subtitle: 'True Stories of Grifters, Killers, Rebels and Crooks',
    author: 'Patrick Radden Keefe',
    badge: 'Best If You Want Variety',
    badgeClass: 'bg-blue-100 text-blue-800 border border-blue-300',
    meta: 'Doubleday collection 2022 · Vintage paperback 2023 · 368 pages',
    bestFor: 'Readers who want Keefe in shorter bursts before committing to a 500-page investigation',
    whyItWins:
      'It is the cleanest way to see how wide his subject range is without losing the voice that makes his long books work.',
    description:
      'Rogues collects twelve of Keefe\'s New Yorker pieces, which means it is structurally different from the other books here: more modular, less cumulative, and much easier to dip in and out of. That is not a weakness. It is the best Patrick Radden Keefe book for readers who want con artists, smugglers, arms dealers, money laundering, Anthony Bourdain in Vietnam, and moral weirdness without having to live inside one system for three hundred pages. The collection also makes something visible that single-topic books can hide: his recurring fascinations with denial, charisma, illicit networks, and the blur between legal and illegal worlds.',
    skipIf:
      'Skip this if you want one deep immersion rather than twelve mini-immersions. The collection form is the point, and some readers will always prefer a single arc.',
  },
  {
    rank: 4,
    title: 'London Falling',
    subtitle: "A Mysterious Death in a Gilded City and a Family's Search for Truth",
    author: 'Patrick Radden Keefe',
    badge: 'Best New Book',
    badgeClass: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
    meta: 'Doubleday 2026 · 384 pages',
    bestFor: 'Readers who want his newest reporting and a more direct investigative hook',
    whyItWins:
      'It is his most obviously propulsive premise: a dead nineteen-year-old, a fabricated oligarch heir identity, and a family trying to understand the city beneath London wealth.',
    description:
      'London Falling begins with the death of Zac Brettler and then opens outward into a much stranger book about class performance, criminal adjacency, parental grief, and a London system that appears elegant from street level and diseased from beneath. Compared with Empire of Pain, this is a more direct investigative engine. Compared with Say Nothing, it is less historically panoramic and more immediate. That makes it an appealing first or second Keefe for readers who want the best of his page-turning qualities without starting with his densest historical material.',
    skipIf:
      'Skip this if what you want most from Keefe is a fully era-defining book rather than a very strong recent one. Say Nothing and Empire of Pain still feel larger.',
  },
  {
    rank: 5,
    title: 'The Snakehead',
    subtitle: 'An Epic Tale of the Chinatown Underworld and the American Dream',
    author: 'Patrick Radden Keefe',
    badge: 'Best Underread Pick',
    badgeClass: 'bg-violet-100 text-violet-800 border border-violet-300',
    meta: 'Riverhead/Doubleday release 2009 · Vintage paperback 2010 · 432 pages',
    bestFor: 'Readers who want immigrant underworld reporting with the closest thing Keefe has to a true-crime epic',
    whyItWins:
      'It is the book most likely to surprise people who only know him from the bigger recent bestsellers.',
    description:
      'The Snakehead follows the world around Sister Ping and the smuggling networks that moved people from China into the United States, turning immigration desperation, fraud, violence, and underground economies into one sprawling crime story. This is the Patrick Radden Keefe pick for readers who want organized systems, not just singular villains. It is also probably the most under-discussed book in his catalog relative to how satisfying it is. If you respond to nonfiction that feels like a long-form criminal panorama, this may outrank Rogues for you.',
    skipIf:
      'Skip this if the immigration-policy layer sounds more like homework than narrative fuel. The book is never dry, but it is more systems-heavy than London Falling.',
  },
  {
    rank: 6,
    title: 'Chatter',
    subtitle: 'Dispatches from the Secret World of Global Eavesdropping',
    author: 'Patrick Radden Keefe',
    badge: 'Skip First',
    badgeClass: 'bg-slate-100 text-slate-800 border border-slate-300',
    meta: 'Random House 2006 · 336 pages',
    bestFor: 'Readers already interested in surveillance, intelligence oversight, and Keefe\'s early voice',
    whyItWins:
      'As a debut, it already shows his appetite for secret systems and institutional evasions.',
    description:
      'Chatter is not a bad book, but it is the wrong place for most readers to start. It looks at global eavesdropping, intelligence networks, and privacy-state tradeoffs through the mystery of Echelon and related surveillance architecture. The reporting instincts are there, and it remains useful for readers specifically interested in intelligence history. But the book does not yet have the narrative confidence or human density of his later best work. It is best approached as catalog completion or subject-matter interest, not as the doorway into Patrick Radden Keefe.',
    skipIf:
      'Skip this if you are simply asking “what is the best Patrick Radden Keefe book?” because almost every other answer on this page is stronger.',
  },
] as const

const faqs = [
  {
    q: 'What is the best Patrick Radden Keefe book to start with?',
    a: 'Start with Say Nothing if you want his strongest overall book and do not mind a larger historical frame. Start with Empire of Pain if you want a more contemporary American story with dynastic power, institutions, and the opioid crisis at the center.',
  },
  {
    q: 'Which Patrick Radden Keefe book reads most like a thriller?',
    a: 'London Falling is the most immediately thriller-like in setup, but The Snakehead is the better answer if you want a full criminal-system story. Say Nothing also reads with suspense, but its ambition is much broader than a thriller alone.',
  },
  {
    q: 'Is Rogues a good first Patrick Radden Keefe book?',
    a: 'Yes, if you want to test the voice before committing to one of the larger books. It is especially good for readers who like long-form magazine journalism and want a collection rather than a single sustained narrative.',
  },
  {
    q: 'Which Patrick Radden Keefe book should I skip first?',
    a: 'Chatter. It is worth reading if surveillance and intelligence oversight are already subjects you care about, but it is not the book that best represents why Patrick Radden Keefe became one of the major nonfiction writers of his generation.',
  },
]

const relatedGuides = [
  {
    href: '/books/genre-fiction/best-history-books-for-beginners',
    title: 'Best History Books for Beginners',
    text: 'A useful next click if Patrick Radden Keefe is leading you toward narrative nonfiction with historical force.',
  },
  {
    href: '/books/reader-picks/best-new-books-june-2026',
    title: 'Best New Books in June 2026',
    text: 'The fresh-release guide that also includes London Falling in the 2026 release conversation.',
  },
  {
    href: '/books/best-book-club-books',
    title: 'Best Book Club Books',
    text: 'Helpful if you are choosing between Little Wonder-style discussion books and heavier nonfiction like Say Nothing.',
  },
  {
    href: '/books/best-books-of-all-time',
    title: 'Best Books of All Time',
    text: 'A broader reading path when you are ready to step beyond one author and compare shelves.',
  },
]

const articleText = `
${books.map((book) => `${book.title} ${book.subtitle} ${book.author} ${book.bestFor} ${book.whyItWins} ${book.description} ${book.skipIf}`).join(' ')}
${faqs.map((faq) => `${faq.q} ${faq.a}`).join(' ')}
`

const readingTime = getReadingTime(articleText)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Patrick Radden Keefe Books',
  description:
    'Where to start with Patrick Radden Keefe, what to read next, and which book to skip first depending on reader intent.',
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: { '@type': 'Organization', name: 'BestPickZone' },
  mainEntityOfPage:
    'https://bestpickzone.com/books/authors/best-patrick-radden-keefe-books',
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Patrick Radden Keefe Books',
  itemListElement: books.map((book) => ({
    '@type': 'ListItem',
    position: book.rank,
    item: {
      '@type': 'Book',
      name: book.title,
      author: { '@type': 'Person', name: book.author },
      description: book.description,
    },
  })),
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

export default function BestPatrickRaddenKeefeBooksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        <header className="mb-10 overflow-hidden rounded-[36px] border border-stone-300 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.16),_transparent_34%),linear-gradient(135deg,#fafaf9_0%,#ffffff_48%,#f5f5f4_100%)] p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-stone-900 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-white">
              Author Guide
            </span>
            <span>{formatReadingTime(readingTime)}</span>
            <span>Published June 13, 2026</span>
            <span>Last verified June 2026</span>
          </div>
          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <h1 className="mb-4 max-w-4xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                Best Patrick Radden Keefe Books
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
                The best Patrick Radden Keefe book is <em>Say Nothing</em>. It is the
                fullest expression of what he does better than almost anyone writing
                narrative nonfiction right now: turn secretive systems, damaged memory,
                political violence, and moral compromise into something gripping without
                flattening any of it. If you want a more immediate American entry point,
                start with <em>Empire of Pain</em>. If you want the most flexible first
                purchase, start with <em>Rogues</em>.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
                Books, publication details, and availability were verified against
                Patrick Radden Keefe&apos;s official site, Penguin Random House, and Amazon
                in June 2026. This page does not pretend every book fits every reader;
                the goal is to match the right Keefe book to the actual reason you want
                to read him.
              </p>
            </div>

            <div className="rounded-[28px] border border-stone-200 bg-white/90 p-5 shadow-sm">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
                Start Here
              </p>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">One-page reading path</h2>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="rounded-2xl bg-amber-50 p-4">
                  <p className="font-semibold text-amber-900">Want the best overall book?</p>
                  <p className="mt-1">Read <em>Say Nothing</em>.</p>
                </div>
                <div className="rounded-2xl bg-rose-50 p-4">
                  <p className="font-semibold text-rose-900">Want the strongest U.S. power story?</p>
                  <p className="mt-1">Read <em>Empire of Pain</em>.</p>
                </div>
                <div className="rounded-2xl bg-sky-50 p-4">
                  <p className="font-semibold text-sky-900">Want a sampler before a commitment?</p>
                  <p className="mt-1">Read <em>Rogues</em>.</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="font-semibold text-slate-900">Want to skip the wrong first book?</p>
                  <p className="mt-1">Do not start with <em>Chatter</em>.</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="investigation-map"
          className="mb-12 overflow-hidden rounded-[34px] border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Investigation Map
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Where each Keefe book sits: history, power, crime, and accessibility
            </h2>
          </div>
          <svg viewBox="0 0 980 460" className="w-full" role="img" aria-label="Patrick Radden Keefe books plotted by accessibility and scope">
            <rect x="90" y="40" width="760" height="320" rx="28" fill="#fafaf9" stroke="#d6d3d1" strokeWidth="2" />
            <line x1="140" y1="310" x2="800" y2="310" stroke="#a8a29e" strokeWidth="3" />
            <line x1="160" y1="330" x2="160" y2="90" stroke="#a8a29e" strokeWidth="3" />
            <text x="370" y="352" fill="#44403c" fontSize="17" fontWeight="700">More accessible / easier first read →</text>
            <text x="34" y="235" fill="#44403c" fontSize="17" fontWeight="700" transform="rotate(-90 34 235)">↑ Bigger historical / institutional scope</text>

            <circle cx="520" cy="120" r="46" fill="#fde68a" />
            <text x="476" y="116" fill="#111827" fontSize="16" fontWeight="700">Say</text>
            <text x="469" y="138" fill="#111827" fontSize="16" fontWeight="700">Nothing</text>

            <circle cx="635" cy="148" r="40" fill="#fecaca" />
            <text x="593" y="144" fill="#111827" fontSize="15" fontWeight="700">Empire of</text>
            <text x="612" y="166" fill="#111827" fontSize="15" fontWeight="700">Pain</text>

            <circle cx="705" cy="230" r="34" fill="#bfdbfe" />
            <text x="676" y="234" fill="#111827" fontSize="15" fontWeight="700">Rogues</text>

            <circle cx="760" cy="275" r="32" fill="#bbf7d0" />
            <text x="719" y="280" fill="#111827" fontSize="14" fontWeight="700">London Falling</text>

            <circle cx="430" cy="240" r="34" fill="#ddd6fe" />
            <text x="389" y="244" fill="#111827" fontSize="14" fontWeight="700">The Snakehead</text>

            <circle cx="285" cy="280" r="28" fill="#e7e5e4" />
            <text x="258" y="284" fill="#111827" fontSize="14" fontWeight="700">Chatter</text>

            <text x="730" y="74" fill="#57534e" fontSize="14">Higher up = bigger system book</text>
            <text x="690" y="390" fill="#57534e" fontSize="14">Further right = easier start for most readers</text>
          </svg>
        </section>

        <section className="mb-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Best Overall
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Say Nothing</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The most complete Keefe book, and the one least likely to disappoint a serious nonfiction reader.
            </p>
          </div>
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700">
              Best U.S. Entry Point
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Empire of Pain</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The strongest first recommendation for readers who care more about modern power than Irish history.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              Skip First
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Chatter</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Worth reading later, but it does not show the fully evolved version of why he matters.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Ranked Shelf
              </p>
              <h2 className="text-2xl font-bold text-gray-900">
                Best Patrick Radden Keefe books, ranked with start-here logic
              </h2>
            </div>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
              6 books
            </span>
          </div>

          <div className="space-y-6">
            {books.map((book) => (
              <article
                key={book.title}
                className="overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-sm"
              >
                <div className="grid gap-0 md:grid-cols-[0.28fr_0.72fr]">
                  <div className="border-b border-gray-200 bg-stone-50 p-5 md:border-b-0 md:border-r">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                        #{book.rank}
                      </span>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${book.badgeClass}`}>
                        {book.badge}
                      </span>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">{book.title}</h3>
                    <p className="mb-3 text-sm font-medium text-gray-600">{book.subtitle}</p>
                    <p className="text-sm text-gray-500">{book.meta}</p>

                    <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-stone-600">
                        Best For
                      </p>
                      <p className="text-sm leading-relaxed text-gray-700">{book.bestFor}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                      Why it lands
                    </p>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                      {book.whyItWins}
                    </p>
                    <p className="mb-5 text-base leading-relaxed text-gray-700">
                      {book.description}
                    </p>

                    <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-700">
                        Skip this if
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-rose-900">{book.skipIf}</p>
                    </div>

                    <BookCTA title={book.title} author={book.author} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[34px] border border-stone-200 bg-[linear-gradient(135deg,#ffffff_0%,#f5f5f4_100%)] p-6 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
            Reading Route
          </p>
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            Three smart ways into Patrick Radden Keefe
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-gray-900">The prestige route</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                <em>Say Nothing</em> → <em>Empire of Pain</em> → <em>London Falling</em>.
                Best if you want the major books first.
              </p>
            </div>
            <div className="rounded-3xl border border-white bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-gray-900">The easiest route</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                <em>Rogues</em> → <em>Empire of Pain</em> → <em>Say Nothing</em>.
                Best if you want to earn the larger commitments gradually.
              </p>
            </div>
            <div className="rounded-3xl border border-white bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-gray-900">The underworld route</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                <em>The Snakehead</em> → <em>London Falling</em> → <em>Rogues</em>.
                Best if crime networks are the real attraction.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-[30px] border border-gray-200 bg-white p-6 shadow-sm">
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
