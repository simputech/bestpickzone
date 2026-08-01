import type { Metadata } from 'next'
import Link from 'next/link'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/books/genre-fiction/best-legal-thriller-books'
const publishedDate = '2026-08-01'
const updatedDate = '2026-08-01'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Genre Fiction', href: '/books/genre-fiction' },
  { label: 'Best Legal Thriller Books' },
]

const picks = [
  {
    slot: 'Best Overall',
    slotColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    title: 'The Firm',
    author: 'John Grisham',
    meta: 'Fastest start · conspiracy-leaning legal thriller · best first Grisham for most readers',
    summary:
      'The Firm is still the safest first legal thriller recommendation because it turns billable-hour anxiety into straight-up survival suspense. Mitch McDeere thinks he landed the dream Memphis law job, then slowly realizes the salary, perks, and polished culture are all part of a trap. That setup gives Grisham his cleanest machine: enough legal texture to feel specific, enough danger to keep the pages moving, and almost no wasted motion.',
    pros: [
      'Immediate premise that explains itself in one sentence',
      'Strong crossover fit for readers who like thrillers more than courtroom procedure',
      'Still the easiest legal-thriller gateway for people who want speed first',
    ],
    cons: [
      'Less morally layered than the best courtroom-driven legal novels',
      'Readers looking for long trial scenes may want something more litigation-heavy',
    ],
    skip:
      'you want your legal thriller to stay mostly inside the courtroom instead of shifting into conspiracy and pursuit mode.',
  },
  {
    slot: 'Best Courtroom Classic',
    slotColor: 'bg-blue-100 text-blue-800 border border-blue-300',
    title: 'Presumed Innocent',
    author: 'Scott Turow',
    meta: 'The genre benchmark for prosecution, evidence, and doubt',
    summary:
      'Presumed Innocent works because the legal system is not just background color. It is the engine of the book. Rusty Sabich, a prosecutor accused of murder, has to navigate professional humiliation, procedural detail, and the slow corrosion of certainty as the case tightens around him. If your idea of a great legal thriller is seeing how evidence, ego, and institutional relationships grind against each other, this is the classic.',
    pros: [
      'Deeper courtroom and prosecution texture than most commercial thrillers',
      'Excellent if you want legal process to matter, not just decorate the plot',
      'The central uncertainty keeps its force even if you know the book is famous',
    ],
    cons: [
      'More patient and procedural than a Grisham-style page-turner',
      'Its strengths are precision and pressure, not flashy set pieces',
    ],
    skip:
      'you need constant chapter-end adrenaline and do not enjoy prosecutorial detail or slower courtroom buildup.',
  },
  {
    slot: 'Best Moral Weight',
    slotColor: 'bg-red-100 text-red-800 border border-red-300',
    title: 'A Time to Kill',
    author: 'John Grisham',
    meta: 'Heavier Southern courtroom novel with more emotional cost',
    summary:
      'A Time to Kill is the Grisham recommendation for readers who want more than propulsion. The book centers on Jake Brigance defending a Black father in Mississippi after an act of retaliatory violence, and the legal stakes are inseparable from race, town pressure, fear, and public spectacle. It is less slick than The Firm and more demanding emotionally, which is exactly why many readers end up thinking it is the better novel.',
    pros: [
      'Stronger moral and emotional weight than Grisham’s pure chase novels',
      'Excellent choice if you want courtroom conflict tied to community pressure',
      'Jake Brigance is a better anchor than readers often expect from commercial fiction',
    ],
    cons: [
      'Longer and more intense than the easiest-entry books on this list',
      'The subject matter is much heavier than “weekend thriller” framing suggests',
    ],
    skip:
      'you want a breezier legal thriller and are not in the mood for race, violence, and courtroom pressure with real emotional weight.',
  },
  {
    slot: 'Best Modern Starter',
    slotColor: 'bg-green-100 text-green-800 border border-green-300',
    title: 'The Lincoln Lawyer',
    author: 'Michael Connelly',
    meta: 'Defense-side momentum with a sharper modern-commercial feel',
    summary:
      'The Lincoln Lawyer is the best modern on-ramp if you want a legal thriller that moves like contemporary crime fiction. Mickey Haller works out of his car, hustles clients with different levels of guilt, and feels like someone navigating the system from the defense side rather than standing above it. Connelly’s gift is making professional competence readable. You keep turning pages because Haller always seems one smart decision away from control and one bad fact away from collapse.',
    pros: [
      'Very easy handoff for readers who already like crime novels and detectives',
      'Defense-lawyer perspective gives it a different energy than prosecutor-heavy books',
      'Strong balance of courtroom tension and off-court investigation',
    ],
    cons: [
      'Less literary than Turow and less morally bruising than A Time to Kill',
      'Readers who dislike slick commercial pacing may find it too streamlined',
    ],
    skip:
      'you want dense institutional prose and the slow-burn gravity of an older courtroom classic.',
  },
  {
    slot: 'Best Family-Pressure Pick',
    slotColor: 'bg-amber-100 text-amber-800 border border-amber-300',
    title: 'Defending Jacob',
    author: 'William Landay',
    meta: 'Best if you want legal suspense fused with family dread',
    summary:
      'Defending Jacob is the legal thriller to choose when you want the law to expose a family rather than just solve a case. An assistant district attorney’s son is accused of killing a classmate, and the book gets its force from what prosecution logic does to parental loyalty, marriage, and self-deception. It is less about loving the justice system and more about watching it turn intimate relationships into evidence.',
    pros: [
      'Excellent if you want emotional pressure as much as procedural suspense',
      'Family perspective differentiates it from more purely professional legal thrillers',
      'Strong fit for readers who like psychological thrillers but want more structure',
    ],
    cons: [
      'Less courtroom-forward than the title may lead some readers to expect',
      'Readers wanting a clean legal hero may find the emotional messiness the whole point',
    ],
    skip:
      'you want a pure lawyer-versus-system book and do not want family anxiety to dominate the reading experience.',
  },
]

const faqs = [
  {
    q: 'What is the best legal thriller for most readers?',
    a: 'The Firm is still the safest first pick because the premise is immediate, the danger escalates quickly, and you do not need to enjoy detailed courtroom procedure to get hooked. If you specifically want courtroom realism, start with Presumed Innocent instead.',
  },
  {
    q: 'Which legal thriller is best if I want actual courtroom tension?',
    a: 'Presumed Innocent is the best courtroom-first answer on this list. A Time to Kill is also strong, but it leans more heavily into community pressure and moral conflict while Presumed Innocent keeps more of its force inside prosecutorial logic, evidence, and trial dynamics.',
  },
  {
    q: 'Should I start with John Grisham or Scott Turow?',
    a: 'Start with John Grisham if you want cleaner momentum and easier commercial readability. Start with Scott Turow if you want sharper legal texture, more ambiguity, and a book that feels less like a thriller machine and more like a case slowly tightening around everyone involved.',
  },
  {
    q: 'What if I usually read crime novels, not legal fiction?',
    a: 'The Lincoln Lawyer is the easiest bridge because Michael Connelly writes with the same procedural momentum that makes his crime fiction work. It feels closer to a criminal-case novel with legal intelligence than to a heavy courtroom classic.',
  },
]

const articleText = `${picks
  .map(
    (pick) =>
      `${pick.title} ${pick.author} ${pick.summary} ${pick.pros.join(' ')} ${pick.cons.join(' ')} ${pick.skip}`,
  )
  .join(' ')} ${faqs.map((faq) => `${faq.q} ${faq.a}`).join(' ')}`

const readingTime = getReadingTime(articleText)

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best Legal Thriller Books',
    description:
      'The best legal thriller books ranked by reader fit, including The Firm, Presumed Innocent, A Time to Kill, The Lincoln Lawyer, and Defending Jacob.',
    alternates: { canonical: pageUrl },
    openGraph: {
      title: 'Best Legal Thriller Books',
      description:
        'A stronger legal-thriller guide ranked by courtroom realism, momentum, and reader fit.',
      url: pageUrl,
      type: 'article',
    },
  },
  {
    category: 'genre-fiction',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Books',
  },
)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Legal Thriller Books',
  description:
    'The best legal thriller books ranked by courtroom realism, momentum, and reader fit.',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: publishedDate,
  dateModified: updatedDate,
  mainEntityOfPage: pageUrl,
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

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: picks.map((pick, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Book',
      name: pick.title,
      author: { '@type': 'Person', name: pick.author },
      description: pick.summary,
    },
  })),
}

export default function BestLegalThrillerBooksPage() {
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

      <main className="mx-auto max-w-3xl px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mb-2 mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-600">
          <span>{formatReadingTime(readingTime)}</span>
          <span>·</span>
          <span className="rounded border border-blue-200 bg-blue-50 px-2 py-0.5 text-blue-800">
            Drafted: August 2026
          </span>
        </div>

        <div className="mb-6 rounded border-l-4 border-amber-400 bg-amber-50 p-3 text-sm text-amber-900">
          <strong>FTC disclosure:</strong> BestPickZone may earn a commission when you buy
          through Amazon links on this page, at no extra cost to you.
        </div>

        <h1
          className="mb-4 text-4xl font-bold text-gray-900"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Best Legal Thriller Books
        </h1>

        <p className="mb-4 text-lg text-gray-800">
          <em>The Firm</em> is the best legal thriller for most readers because it gives
          you the part people usually want first: a law job that becomes a trap, a young
          lawyer who realizes the system around him is rigged, and enough legal detail to
          feel specific without slowing the story down into homework. If you want sharper
          courtroom realism, though, <em>Presumed Innocent</em> is the better first move.
        </p>
        <p className="mb-4 text-lg text-gray-800">
          That split matters. Some readers mean courtroom pressure when they search
          &quot;best legal thriller books.&quot; Others mean page-turning conspiracy with lawyers
          in the middle of it. This list separates those lanes so you can choose the right
          kind of legal suspense instead of just the most famous title.
        </p>
        <p className="mb-8 text-sm italic text-gray-600">
          This draft is organized around reader fit, not bestseller rank.
        </p>

        <section className="mb-10">
          <h2
            className="mb-4 text-2xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Quick Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="border-b border-gray-200 p-3">Book</th>
                  <th className="border-b border-gray-200 p-3">Author</th>
                  <th className="border-b border-gray-200 p-3">Best For</th>
                </tr>
              </thead>
              <tbody>
                {picks.map((pick, index) => (
                  <tr key={pick.title} className={index === 0 ? 'bg-yellow-50' : 'bg-white'}>
                    <td className="border-b border-gray-100 p-3 font-semibold">{pick.title}</td>
                    <td className="border-b border-gray-100 p-3">{pick.author}</td>
                    <td className="border-b border-gray-100 p-3">{pick.slot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2
            className="mb-6 text-2xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            The Picks
          </h2>
          {picks.map((pick) => (
            <article
              key={pick.title}
              className="mb-10 border-b border-gray-200 pb-10 last:border-0"
            >
              <span
                className={`mb-2 inline-block rounded px-2 py-1 text-xs font-semibold ${pick.slotColor}`}
              >
                {pick.slot}
              </span>
              <h3
                className="mb-1 text-2xl font-bold text-gray-900"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {pick.title}
              </h3>
              <p className="mb-1 font-medium text-gray-700">by {pick.author}</p>
              <p className="mb-4 text-sm text-gray-500">{pick.meta}</p>
              <p className="mb-4 text-gray-800">{pick.summary}</p>

              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded border border-green-200 bg-green-50 p-4">
                  <p className="mb-2 text-sm font-semibold text-green-900">Why it works</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-green-900">
                    {pick.pros.map((pro) => (
                      <li key={pro}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded border border-red-200 bg-red-50 p-4">
                  <p className="mb-2 text-sm font-semibold text-red-900">Tradeoffs</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-red-900">
                    {pick.cons.map((con) => (
                      <li key={con}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-4 rounded border-l-4 border-amber-400 bg-amber-50 p-3 text-sm text-amber-900">
                <strong>Skip this if</strong> {pick.skip}
              </div>

              <BookCTA
                title={pick.title}
                author={pick.author}
                affiliateLabel="Click Here to Buy on Amazon"
              />
            </article>
          ))}
        </section>

        <section className="mb-10">
          <h2
            className="mb-4 text-2xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            How to Pick the Right Legal Thriller
          </h2>
          <p className="mb-4 text-gray-800">
            <strong>Decide whether you want law or momentum.</strong> If you want the law
            itself to do the heavy lifting, start with <em>Presumed Innocent</em>. If you
            want a faster commercial engine with legal flavor, start with <em>The Firm</em>{' '}
            or <em>The Lincoln Lawyer</em>.
          </p>
          <p className="mb-4 text-gray-800">
            <strong>Use emotional tolerance as a filter.</strong> <em>A Time to Kill</em>{' '}
            is the strongest choice here for readers who want moral seriousness, but it is
            also the heaviest. <em>Defending Jacob</em> is the right move if family dread is
            what hooks you. Those are both excellent books, but neither is the breeziest
            weekend read.
          </p>
          <p className="text-gray-800">
            If you already know you like Grisham, the natural follow-up is our{' '}
            <Link href="/books/best-john-grisham-books" className="text-blue-700 underline">
              best John Grisham books
            </Link>{' '}
            guide. If legal suspense is just one stop inside a broader thriller mood, the{' '}
            <Link
              href="/books/genre-fiction/best-spy-thriller-books"
              className="text-blue-700 underline"
            >
              best spy thriller books
            </Link>{' '}
            page and our{' '}
            <Link
              href="/books/best-psychological-thrillers-with-mind-bending-twists"
              className="text-blue-700 underline"
            >
              best psychological thrillers with mind-bending twists
            </Link>{' '}
            page are the next best internal paths.
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="mb-4 text-2xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          {faqs.map((faq) => (
            <div key={faq.q} className="mb-5">
              <p className="mb-1 font-semibold text-gray-900">{faq.q}</p>
              <p className="text-gray-800">{faq.a}</p>
            </div>
          ))}
        </section>

        <section className="mb-10">
          <div className="rounded-lg border-2 border-yellow-300 bg-yellow-50 p-6">
            <h2
              className="mb-3 text-2xl font-bold"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Final Verdict
            </h2>
            <p className="mb-2 text-gray-900">
              <strong>Best overall:</strong> <em>The Firm</em> for sheer readability and
              easiest entry.
            </p>
            <p className="mb-2 text-gray-900">
              <strong>Best courtroom classic:</strong> <em>Presumed Innocent</em> if you
              want law, evidence, and doubt to be the real attraction.
            </p>
            <p className="mb-2 text-gray-900">
              <strong>Best heavy-hitter:</strong> <em>A Time to Kill</em> if you want moral
              pressure, not just suspense.
            </p>
            <p className="mb-4 text-gray-900">
              <strong>Best modern bridge from crime fiction:</strong> <em>The Lincoln Lawyer</em>.
            </p>
            <BookCTA
              title="The Firm"
              author="John Grisham"
              affiliateLabel="Click Here to Buy on Amazon"
            />
          </div>
        </section>

        <section>
          <h2
            className="mb-4 text-2xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Related Reading
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Link
              href="/books/best-john-grisham-books"
              className="block rounded border border-gray-200 p-3 text-blue-700 hover:border-gray-400 hover:underline"
            >
              Best John Grisham Books
            </Link>
            <Link
              href="/books/genre-fiction/best-spy-thriller-books"
              className="block rounded border border-gray-200 p-3 text-blue-700 hover:border-gray-400 hover:underline"
            >
              Best Spy Thriller Books
            </Link>
            <Link
              href="/books/best-psychological-thrillers-with-mind-bending-twists"
              className="block rounded border border-gray-200 p-3 text-blue-700 hover:border-gray-400 hover:underline"
            >
              Best Psychological Thrillers With Mind-Bending Twists
            </Link>
            <Link
              href="/books/genre-fiction"
              className="block rounded border border-gray-200 p-3 text-blue-700 hover:border-gray-400 hover:underline"
            >
              Browse all genre fiction guides
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
