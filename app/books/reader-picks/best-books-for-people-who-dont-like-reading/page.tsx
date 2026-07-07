import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'
import { getSpanishUrlForEnglishPath } from '@/lib/spanish-site-data'

const pageUrl = 'https://bestpickzone.com/books/reader-picks/best-books-for-people-who-dont-like-reading'
const spanishUrl = getSpanishUrlForEnglishPath(pageUrl)

export const metadata: Metadata = withArticleMetadataDefaults({
  title: "Best Books for People Who Don't Like Reading — Ranked by Why They Work",
  description:
    "If you don't like reading, the issue is usually the book — not you. These five picks (The Martian, Old Man and the Sea, Born a Crime, Educated, Killing Floor) are matched to the specific reason reluctant readers bounce off most books.",
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
    title: "Best Books for People Who Don't Like Reading",
    description:
      'Five books diagnosed by why they work for reluctant readers — problem-solving structure, short length, audio-first, true story, pure momentum.',
    url: pageUrl,
    siteName: 'BestPickZone',
    type: 'article',
  },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  category: 'reader-picks' })

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Reader Picks', href: '/books/reader-picks' },
  { label: "Best Books for People Who Don't Like Reading" },
]

const picks = [
  {
    slot: 'Best Overall',
    slotColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    title: 'The Martian',
    author: 'Andy Weir',
    meta: '2011 · 369 pages · Paperback, Kindle, Audible',
    summary:
      "Mark Watney is alone on Mars with enough food for 31 days and no way to communicate with Earth. He has to grow food, fix broken equipment, and figure out how to survive for four years until the next mission arrives. Weir wrote this as hard science — the botany, chemistry, and orbital mechanics are based on real NASA documentation — but Watney's voice is so immediate and so funny that the technical content reads like entertainment rather than homework.",
    pros: [
      'First-person journal format makes the protagonist feel like someone talking to you, not a character in a book',
      'Short chapters — most under 10 pages — with natural stopping points',
      "Genuinely funny; Watney's running commentary on his situation produces actual laughs",
      'The film is excellent, but the book has three times the problem-solving content',
    ],
    cons: [
      'The science content is dense in places — readers who skim it miss important plot context',
      'Some chapters switch to Earth POV, which breaks the momentum for readers locked into the Mars storyline',
    ],
    skip: "you want interpersonal drama. There's essentially one character on stage for most of the book.",
  },
  {
    slot: 'Best Short Book',
    slotColor: 'bg-green-100 text-green-800 border border-green-300',
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway',
    meta: '1952 · 127 pages · Paperback, Kindle, Audible',
    summary:
      'An old Cuban fisherman goes out alone and hooks the largest marlin he has ever seen. The book is 127 pages. Hemingway wrote it in eight weeks and won the Nobel Prize partly on its strength. The prose is stripped to the minimum — no sentence contains a word that isn\'t earning its place.',
    pros: [
      '127 pages — the shortest major American novel worth reading',
      'The Hemingway style (short sentences, no excess) reads faster than it looks on the page',
      'The subject matter (fishing, endurance, age) is accessible without any literary background',
    ],
    cons: [
      "The allegorical dimension (the fish, the struggle, what it means) rewards attention but isn't necessary for a first read",
      'Some readers find the minimal plot too thin at full novel length even at 127 pages',
    ],
    skip: "you need plot momentum and forward action — Hemingway is interested in a man's internal experience, not what happens next.",
  },
  {
    slot: 'Best Audio-First',
    slotColor: 'bg-blue-100 text-blue-800 border border-blue-300',
    title: 'Born a Crime',
    author: 'Trevor Noah',
    meta: '2016 · 304 pages · Paperback, Kindle, Audible',
    summary:
      'Noah grew up in apartheid and post-apartheid South Africa as the mixed-race son of a Black Zulu mother and a white Swiss father — a child whose existence was literally illegal under apartheid law. Born a Crime is his memoir, narrated in the audiobook by Noah himself. The audio version is the superior format — Noah is a stand-up comedian, and his delivery adds timing and texture the page can\'t capture.',
    pros: [
      'Narrated by Noah himself — among the highest-rated celebrity memoirs in audio',
      'South African historical context is explained as you go — no prior knowledge required',
      'Each chapter is essentially a standalone story; you can listen in non-consecutive sessions without losing the thread',
    ],
    cons: [
      "The print version loses significant value compared to audio — if you're going to read this, listen to it",
      "Some chapters are heavier than others; the chapters about his mother's abuse are genuinely difficult",
    ],
    skip: 'you specifically want fiction. Born a Crime is memoir; the events are documented, not invented.',
  },
  {
    slot: 'Best True Story',
    slotColor: 'bg-amber-100 text-amber-800 border border-amber-300',
    title: 'Educated',
    author: 'Tara Westover',
    meta: '2018 · 334 pages · Paperback, Kindle, Audible',
    summary:
      "Westover grew up in a survivalist family in rural Idaho with no formal education — she didn't enter a school until she was 17 and taught herself enough to earn a PhD from Cambridge. Educated is her memoir. The story is so specific and so unlikely that it reads with the forward momentum of fiction; the \"did this actually happen?\" quality drives continuous reading.",
    pros: [
      '4.7-star average on Amazon across 130,000+ reviews — one of the most broadly praised memoirs of the past decade',
      'The specific detail of growing up in a non-mainstream religious household makes the world fully realized without world-building effort from the reader',
      "The questions it raises (how do we know what we know? how do families distort reality?) apply directly to readers' own lives",
    ],
    cons: [
      'The family dynamic is disturbing in places — abuse is present and described specifically',
      "The ending is not fully resolved — Westover's relationship with her family remains complicated",
    ],
    skip: "you need narrative resolution. Westover's story doesn't have a clean ending because it's ongoing.",
  },
  {
    slot: 'Best Pure Momentum',
    slotColor: 'bg-red-100 text-red-800 border border-red-300',
    title: 'Killing Floor (Jack Reacher Book 1)',
    author: 'Lee Child',
    meta: '1997 · 536 pages · Paperback, Kindle, Audible',
    summary:
      "If you've seen action movies and wished the protagonist were smarter about what he was doing, Killing Floor is what you're looking for. Jack Reacher — ex-military police, enormous, no phone, no permanent address — gets off a bus in rural Georgia and ends up dismantling a criminal operation with the systematic thoroughness of a professional. Child's chapter structure is designed for momentum: rarely more than 4–5 pages, always ending at the next decision point.",
    pros: [
      "Dick Hill's Audible narration is exceptional — one of the best genre audiobook performances available",
      'The short chapter structure means every session ends at a natural stopping point',
      '29 novels in the series if you want to continue indefinitely',
    ],
    cons: [
      "Reacher's invulnerability is a genre convention, not a realistic portrayal — readers who need grounded protagonists will notice",
    ],
    skip: 'you want character complexity and moral ambiguity — Reacher is a power fantasy, deliberately.',
  },
]

const faqs = [
  {
    q: "What's the single book most likely to make a non-reader enjoy reading?",
    a: 'The Martian for most people. Killing Floor for people who watch action movies. Born a Crime in audio for people who prefer spoken content. The right answer depends on why you don\'t like reading — which is why the diagnostic approach in the buying guide above matters more than picking the "easiest" book.',
  },
  {
    q: 'How short is the shortest book on this list?',
    a: 'The Old Man and the Sea at 127 pages. At an average reading pace, that\'s 3–4 hours of reading. Most people can finish it over a weekend without rearranging their schedule.',
  },
  {
    q: 'Is audiobook "cheating"?',
    a: 'No — audiobooks engage the same story comprehension processes as reading. The distinction between reading the words and hearing them is irrelevant to whether you\'re engaging with the content. Several studies suggest audiobook listeners retain content at equivalent rates to print readers.',
  },
  {
    q: 'Should I start with fiction or non-fiction?',
    a: 'If "fiction feels fake" is the reason you bounced off books, start with Born a Crime or Educated — both documented true stories with the forward momentum of novels. If you liked sci-fi films or video games, start with The Martian. If you like action movies, start with Killing Floor.',
  },
]

const articleText = `${picks
  .map(
    (p) =>
      `${p.title} ${p.author} ${p.summary} ${p.pros.join(' ')} ${p.cons.join(' ')} ${p.skip}`,
  )
  .join(' ')} ${faqs.map((f) => `${f.q} ${f.a}`).join(' ')}`
const readingTime = getReadingTime(articleText)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Best Books for People Who Don't Like Reading",
  description:
    "Five books matched to the specific reason each works for reluctant readers — problem-solving structure, short length, audio-first, true story, pure momentum.",
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: '2026-04-20',
  dateModified: '2026-06-26',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id':
      'https://bestpickzone.com/books/reader-picks/best-books-for-people-who-dont-like-reading',
  },
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
    name: `${p.title} by ${p.author}`,
    description: p.summary,
  })),
}

export default function Page() {
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

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mt-4 mb-2">
          <span>{formatReadingTime(readingTime)}</span>
          <span>·</span>
          <span className="bg-green-50 text-green-800 border border-green-200 px-2 py-0.5 rounded">
            Last verified: April 2026
          </span>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 text-amber-900 text-sm p-3 rounded mb-6">
          <strong>FTC disclosure:</strong> BestPickZone is a participant in the Amazon
          Services LLC Associates Program. As an Amazon Associate we earn from qualifying
          purchases. Prices and availability are accurate as of the "last verified" date
          above.
        </div>

        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Best Books for People Who Don't Like Reading
        </h1>

        <p className="text-lg text-gray-800 mb-4">
          <em>The Martian</em> by Andy Weir is the best book for people who don't like
          reading — not because it's easy, but because it's structured like something you
          already like. An astronaut stranded on Mars has to solve a series of
          engineering problems to survive. Each problem is a chapter. Each solution
          creates a new problem. It reads like a video game walkthrough written by
          someone funny.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          The reason most people don't like reading is that they haven't found books
          structured the way their brain works. <em>The Martian</em> works for
          problem-solvers. <em>Killing Floor</em> works for people who like action
          movies. <em>Born a Crime</em> works for people who prefer podcasts to books.
          Below we've matched each pick to the specific reason it works for reluctant
          readers — not just what kind of book it is, but why it's different from the
          books that lost you before.
        </p>
        <p className="text-sm text-gray-600 italic mb-8">
          Prices verified against Amazon as of April 2026.
        </p>

        {/* Quick Comparison Table */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Quick Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="p-3 border-b border-gray-200">Book</th>
                  <th className="p-3 border-b border-gray-200">Author</th>
                  <th className="p-3 border-b border-gray-200">Best For</th>
                </tr>
              </thead>
              <tbody>
                {picks.map((p, i) => (
                  <tr
                    key={p.title}
                    className={i === 0 ? 'bg-yellow-50' : 'bg-white'}
                  >
                    <td className="p-3 border-b border-gray-100 font-semibold">
                      {p.title}
                    </td>
                    <td className="p-3 border-b border-gray-100">{p.author}</td>
                    <td className="p-3 border-b border-gray-100">{p.slot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The Picks */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            The Picks
          </h2>
          {picks.map((p) => (
            <article
              key={p.title}
              className="mb-10 pb-10 border-b border-gray-200 last:border-0"
            >
              <span
                className={`inline-block text-xs font-semibold px-2 py-1 rounded mb-2 ${p.slotColor}`}
              >
                {p.slot}
              </span>
              <h3
                className="text-2xl font-bold mb-1"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {p.title}
              </h3>
              <p className="text-gray-700 font-medium mb-1">by {p.author}</p>
              <p className="text-sm text-gray-500 mb-4">{p.meta}</p>
              <p className="text-gray-800 mb-4">{p.summary}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded">
                  <p className="text-sm font-semibold text-green-900 mb-2">Pros</p>
                  <ul className="list-disc pl-5 text-sm text-green-900 space-y-1">
                    {p.pros.map((pro) => (
                      <li key={pro}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 p-4 rounded">
                  <p className="text-sm font-semibold text-red-900 mb-2">Cons</p>
                  <ul className="list-disc pl-5 text-sm text-red-900 space-y-1">
                    {p.cons.map((con) => (
                      <li key={con}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded mb-4 text-sm text-amber-900">
                <strong>Skip this if</strong> {p.skip}
              </div>
              <BookCTA title={p.title} author={p.author} />
            </article>
          ))}
        </section>

        {/* Buying Guide */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Buying Guide
          </h2>
          <p className="text-gray-800 mb-4">
            <strong>Diagnose why you don't like reading before you choose.</strong> The
            reason matters more than the genre. "I get bored" → <em>The Martian</em> or{' '}
            <em>Killing Floor</em> (no slow sections). "I can't focus" →{' '}
            <em>Born a Crime</em> in audio format (no focus required beyond what podcasts
            demand). "I never finish books" → <em>The Old Man and the Sea</em> (127 pages
            — two evenings maximum). "Fiction feels fake" → <em>Educated</em> or{' '}
            <em>Born a Crime</em> (both documented real events).
          </p>
          <p className="text-gray-800 mb-4">
            <strong>Try audio first.</strong> The number of people who "don't like
            reading" but would enjoy audiobooks is significant. If you've never tried
            Audible, the <em>Born a Crime</em> audiobook is the best test case — if you
            enjoy that, you enjoy books.
          </p>
          <p className="text-gray-800 mb-4">
            <strong>If the first pick doesn't land, try the opposite kind.</strong> If
            you bounced off <em>The Martian</em>, the issue is probably that you don't
            want technical problem-solving — switch to <em>Killing Floor</em> for pure
            kinetic action. If <em>Killing Floor</em> feels empty, try{' '}
            <em>Educated</em> for documented stakes. The diagnostic matters.
          </p>
          <p className="text-gray-800">
            If <em>Killing Floor</em> hooks you, our{' '}
            <Link
              href="/books/reader-picks/best-action-adventure-books-for-men"
              className="text-blue-700 underline"
            >
              best action adventure books for men
            </Link>{' '}
            guide is the natural next stop. For more curated lists by mood and occasion,
            browse the{' '}
            <Link href="/books/reader-picks" className="text-blue-700 underline">
              reader picks hub
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          {faqs.map((f) => (
            <div key={f.q} className="mb-5">
              <p className="font-semibold text-gray-900 mb-1">{f.q}</p>
              <p className="text-gray-800">{f.a}</p>
            </div>
          ))}
        </section>

        {/* Final Verdict */}
        <section className="mb-10">
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
            <h2
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Final Verdict
            </h2>
            <p className="text-gray-900 mb-2">
              <strong>Best overall:</strong> <em>The Martian</em> — works for people who
              like problem-solving, science, or anything involving figuring things out.
            </p>
            <p className="text-gray-900 mb-2">
              <strong>Best short commitment:</strong> <em>The Old Man and the Sea</em> —
              127 pages, Nobel Prize, two evenings.
            </p>
            <p className="text-gray-900 mb-2">
              <strong>Best audio experience:</strong> <em>Born a Crime</em> — if you
              listen to podcasts, you'll finish this.
            </p>
            <p className="text-gray-900 mb-2">
              <strong>Best true story:</strong> <em>Educated</em> — reads like fiction;
              every unbelievable part is documented.
            </p>
            <p className="text-gray-900 mb-4">
              <strong>Best for action movie fans:</strong> <em>Killing Floor</em> — 29
              books waiting if you finish the first one.
            </p>
            <BookCTA title="The Martian" author="Andy Weir" />
          </div>
        </section>

        {/* Related Reading */}
        <section>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Related Reading
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/books/reader-picks/best-action-adventure-books-for-men"
              className="block border border-gray-200 hover:border-gray-400 rounded p-3 text-blue-700 hover:underline"
            >
              Best Action Adventure Books for Men
            </Link>
            <Link
              href="/books/genre-fiction/best-spy-thriller-books"
              className="block border border-gray-200 hover:border-gray-400 rounded p-3 text-blue-700 hover:underline"
            >
              Best Spy Thriller Books of All Time
            </Link>
            <Link
              href="/books/genre-fiction/best-military-fiction-books"
              className="block border border-gray-200 hover:border-gray-400 rounded p-3 text-blue-700 hover:underline"
            >
              Best Military Fiction Books
            </Link>
            <Link
              href="/books/reader-picks"
              className="block border border-gray-200 hover:border-gray-400 rounded p-3 text-blue-700 hover:underline"
            >
              Browse all reader picks
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
