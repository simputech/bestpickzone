import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const CANONICAL =
  'https://bestpickzone.com/books/genre-fiction/best-civil-war-soldier-memoirs'
const PUBLISHED_DATE = '2026-07-01T00:00:00Z'
const UPDATED_DATE = '2026-07-01T00:00:00Z'

const META_DESCRIPTION =
  'The best Civil War soldier memoirs, ranked for authenticity, readability, and battlefield detail. Start with Company Aytch, then choose the strongest Union and Confederate first-hand accounts.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best Civil War Soldier Memoirs to Read in 2026 | BestPickZone',
    description: META_DESCRIPTION,
    alternates: { canonical: CANONICAL },
    keywords: [
      'civil war soldier memoirs',
      'best civil war memoirs',
      'best civil war books',
      'first hand civil war accounts',
      'civil war diaries',
      'company aytch',
      'hardtack and coffee',
      'all for the union',
      'stonewall brigade memoir',
      'union and confederate memoirs',
    ],
    openGraph: {
      url: CANONICAL,
      title: 'Best Civil War Soldier Memoirs to Read in 2026',
      description: META_DESCRIPTION,
    },
  },
  {
    category: 'genre-fiction',
    publishedTime: PUBLISHED_DATE,
    modifiedTime: UPDATED_DATE,
    section: 'Genre Fiction',
    tags: [
      'civil war books',
      'military history',
      'history books',
      'memoirs',
      'book recommendations',
    ],
  }
)

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Genre Fiction', href: '/books/genre-fiction' },
  { label: 'Best Civil War Soldier Memoirs' },
]

type Pick = {
  rank: number
  title: string
  author: string
  side: string
  years: string
  bestFor: string
  verdict: string
  review: string
  caution: string
  sources: { label: string; href: string }[]
}

const picks: Pick[] = [
  {
    rank: 1,
    title: 'Company Aytch',
    author: 'Sam R. Watkins',
    side: 'Confederate private, Army of Tennessee',
    years: '1882 memoir · public domain',
    bestFor: 'Readers who want the most vivid, quotable enlisted-man account from the Southern side.',
    verdict:
      'If you only read one Civil War memoir, start here. Watkins is funny, observant, and brutally clear about hunger, exhaustion, fear, and bad leadership.',
    review:
      'This is the rare war memoir that still feels alive on the page. Watkins can pivot from camp humor to battlefield horror in a paragraph, which is exactly why modern readers keep recommending it.',
    caution:
      'It is a late memoir, not a day-by-day wartime diary, so treat it as recollection shaped by memory rather than stenographic record.',
    sources: [
      { label: 'Read free on Project Gutenberg', href: 'https://www.gutenberg.org/ebooks/13202' },
      { label: 'Background on Sam Watkins', href: 'https://classic.tnvacation.com/civil-war/person/138/sam-watkins/' },
    ],
  },
  {
    rank: 2,
    title: 'Hardtack and Coffee',
    author: 'John D. Billings',
    side: 'Union artilleryman, Army of the Potomac',
    years: '1887 memoir · public domain',
    bestFor: 'Readers who care more about daily army life than battle-by-battle drama.',
    verdict:
      'No book on this list explains the texture of ordinary soldiering better: food, shelter, marching, camp routines, discipline, and the thousand small discomforts that make war real.',
    review:
      'Billings is less raw than Watkins, but he is unmatched on practical detail. Reenactors and military-history readers still treat it as a foundational picture of how the Union army actually functioned.',
    caution:
      'If you want a tight emotional narrative centered on one man’s growth, this can feel more observational than intimate.',
    sources: [
      { label: 'Read free on Project Gutenberg', href: 'https://www.gutenberg.org/ebooks/72532' },
    ],
  },
  {
    rank: 3,
    title: 'All for the Union',
    author: 'Elisha Hunt Rhodes',
    side: 'Union private to officer, Eastern Theater',
    years: 'Diary and letters edition',
    bestFor: 'Readers who want a true wartime voice instead of a memoir written years later.',
    verdict:
      'Rhodes gives you immediacy. Because the book draws on diary entries and letters, you feel the uncertainty of events before anyone knows how the campaign ends.',
    review:
      'This is the easiest recommendation for readers who loved Ken Burns and want one of the voices that helped define the documentary’s emotional tone.',
    caution:
      'The style is more disciplined and less colorful than Watkins or Casler, which some readers will see as a strength and others as a little restrained.',
    sources: [
      { label: 'Borrow or read on Internet Archive', href: 'https://archive.org/details/allforunionc00rhod' },
      { label: 'Library of Congress context on Rhodes', href: 'https://www.loc.gov/pictures/item/2019635483/' },
    ],
  },
  {
    rank: 4,
    title: 'The Story of a Common Soldier',
    author: 'Leander Stillwell',
    side: 'Union enlisted man, Western Theater',
    years: '1920 memoir · public domain',
    bestFor: 'Readers who want an unadorned enlisted-man account without grandstanding.',
    verdict:
      'Stillwell writes plainly, which is exactly the appeal. He is excellent on the emotional shift from teenage volunteer to seasoned veteran.',
    review:
      'This one lands especially well for readers who dislike over-written military history. It feels direct, modest, and unusually trustworthy in tone.',
    caution:
      'It is quieter than the top three and is better for patient readers than for people who need constant battlefield momentum.',
    sources: [
      { label: 'Read free on Project Gutenberg', href: 'https://www.gutenberg.org/ebooks/26561' },
      { label: 'Free audiobook on LibriVox', href: 'https://librivox.org/the-story-of-a-common-soldier-of-army-life-in-the-civil-war-1861-1865-by-leander-stillwell/' },
    ],
  },
  {
    rank: 5,
    title: 'Four Years in the Stonewall Brigade',
    author: 'John O. Casler',
    side: 'Confederate soldier, Army of Northern Virginia',
    years: '1893 memoir',
    bestFor: 'Readers who want a messier, less polished Confederate memoir with real personality.',
    verdict:
      'Casler is the pick for readers who already know the famous campaigns and want a rowdier, more candid soldier’s-eye account of marches, shortages, discipline, and survival.',
    review:
      'What makes Casler memorable is not polish but attitude. He lets the grime, opportunism, and improvisation of army life stay visible instead of sanding it down into noble myth.',
    caution:
      'This one is less beginner-friendly than Company Aytch because the narrative can feel looser and more episodic.',
    sources: [
      { label: 'Internet Archive edition', href: 'https://archive.org/details/01474842.3433.emory.edu' },
      { label: 'HistoryNet review and context', href: 'https://historynet.com/cwt-book-review-four-years-in-the-stonewall-brigade/' },
    ],
  },
]

const faqs = [
  {
    q: 'What is the best Civil War memoir to start with?',
    a: 'Start with Company Aytch if you want the most memorable voice and strongest storytelling. Start with Hardtack and Coffee if you mainly want to understand how soldiers actually lived day to day.',
  },
  {
    q: 'Are these books primary sources?',
    a: 'Yes, but in different forms. All for the Union is built from wartime diary and letter material, while the others are memoirs written after the war. That means all are first-hand accounts, but some are more immediate than others.',
  },
  {
    q: 'Should I read both Union and Confederate memoirs?',
    a: 'Yes. Reading both sides helps you compare shared soldier hardships with very different political loyalties, military cultures, and campaign experiences.',
  },
  {
    q: 'What should I read after these memoirs?',
    a: 'Pair one or two memoirs with a broader history for context, then move into adjacent BestPickZone guides like our World War II and beginner history lists if you want more military or narrative-history recommendations.',
  },
]

const articleText = `
${picks.map((pick) => `${pick.title} ${pick.author} ${pick.bestFor} ${pick.verdict} ${pick.review} ${pick.caution}`).join(' ')}
${faqs.map((faq) => `${faq.q} ${faq.a}`).join(' ')}
`

const readingTime = getReadingTime(articleText)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Civil War Soldier Memoirs to Read in 2026',
  description: META_DESCRIPTION,
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  mainEntityOfPage: CANONICAL,
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: picks.map((pick) => ({
    '@type': 'ListItem',
    position: pick.rank,
    item: {
      '@type': 'Book',
      name: pick.title,
      author: { '@type': 'Person', name: pick.author },
      description: pick.verdict,
    },
  })),
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function BestCivilWarSoldierMemoirsPage() {
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

      <main className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span>{formatReadingTime(readingTime)}</span>
          <span>·</span>
          <span>Published: July 1, 2026</span>
          <span>·</span>
          <span>Last updated: July 1, 2026</span>
          <span>·</span>
          <span>
            Affiliate disclosure: BestPickZone may earn a commission from qualifying Amazon
            purchases at no extra cost to you.
          </span>
        </div>

        <h1
          className="mb-5 text-4xl font-extrabold leading-tight text-gray-900"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Best Civil War Soldier Memoirs to Read in 2026
        </h1>

        <div className="prose prose-lg mb-8 max-w-none text-gray-700">
          <p className="text-lg leading-relaxed">
            The best Civil War memoir for most readers is <em>Company Aytch</em> by Sam
            Watkins. It has the strongest voice, the cleanest narrative momentum, and the
            most immediate sense of what enlisted men actually endured. If you want a
            more practical look at camp life than battlefield storytelling, move next to{' '}
            <em>Hardtack and Coffee</em>.
          </p>
          <p className="leading-relaxed">
            This list stays focused on first-hand soldier accounts rather than biographies
            of generals or modern secondary histories. We prioritized books that still
            read well today, represent both Union and Confederate experiences, and offer
            enough detail to feel like real life instead of polished legend.
          </p>
          <p className="leading-relaxed">
            To make the page more useful than a generic ranking, each pick below includes
            a quick review note, a clear reader fit, and at least one outbound source so
            you can inspect the public-domain text, archive copy, or historical context
            before buying.
          </p>
        </div>

        <section className="mb-12">
          <h2
            className="mb-4 text-2xl font-bold text-gray-900"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Quick Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Rank</th>
                  <th className="px-4 py-3 font-semibold">Book</th>
                  <th className="px-4 py-3 font-semibold">Best for</th>
                  <th className="px-4 py-3 font-semibold">Perspective</th>
                </tr>
              </thead>
              <tbody>
                {picks.map((pick) => (
                  <tr key={pick.title} className="border-t border-gray-200 align-top">
                    <td className="px-4 py-4 font-semibold text-gray-900">#{pick.rank}</td>
                    <td className="px-4 py-4">
                      <div className="font-semibold text-gray-900">{pick.title}</div>
                      <div className="text-gray-500">{pick.author}</div>
                    </td>
                    <td className="px-4 py-4 text-gray-700">{pick.bestFor}</td>
                    <td className="px-4 py-4 text-gray-700">{pick.side}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-10">
          {picks.map((pick) => (
            <article key={pick.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                  #{pick.rank} pick
                </span>
                <span className="text-sm text-gray-500">{pick.side}</span>
                <span className="text-sm text-gray-500">·</span>
                <span className="text-sm text-gray-500">{pick.years}</span>
              </div>

              <h2
                className="mb-2 text-2xl font-bold text-gray-900"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {pick.title} by {pick.author}
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Why it made the list:</strong> {pick.verdict}
                </p>
                <p>
                  <strong>Review note:</strong> {pick.review}
                </p>
                <p>
                  <strong>Best for:</strong> {pick.bestFor}
                </p>
                <p>
                  <strong>Know before you buy:</strong> {pick.caution}
                </p>
              </div>

              <BookCTA title={pick.title} author={pick.author} />

              <div className="mt-4 rounded-2xl bg-stone-50 p-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-stone-700">
                  Free text and source trail
                </h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  {pick.sources.map((source) => (
                    <li key={source.href}>
                      <Link
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="underline decoration-blue-300 underline-offset-4"
                      >
                        {source.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h2
            className="mb-3 text-2xl font-bold text-gray-900"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            How to read these memoirs without flattening the history
          </h2>
          <p className="mb-3 leading-relaxed text-gray-700">
            First-hand accounts are invaluable, but they are not neutral. Read them as
            witness literature shaped by memory, politics, and the limits of one
            soldier&apos;s field of view. That is exactly why pairing Union and Confederate
            voices is so useful.
          </p>
          <p className="leading-relaxed text-gray-700">
            If you want a broader runway after this page, continue with{' '}
            <Link href="/books/genre-fiction/best-history-books-for-beginners" className="text-blue-700 underline decoration-blue-300 underline-offset-4">
              our best history books for beginners guide
            </Link>{' '}
            or switch eras with{' '}
            <Link href="/books/genre-fiction/best-world-war-ii-books" className="text-blue-700 underline decoration-blue-300 underline-offset-4">
              our best World War II books list
            </Link>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2
            className="mb-4 text-2xl font-bold text-gray-900"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-gray-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{faq.q}</h3>
                <p className="leading-relaxed text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
