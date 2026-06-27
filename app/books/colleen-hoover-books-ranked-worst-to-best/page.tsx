import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'

const pageUrl = 'https://bestpickzone.com/books/colleen-hoover-books-ranked-worst-to-best'
const heroImage =
  'https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?auto=format&fit=crop&w=800&q=80'

const picks = [
  {
    rank: '5',
    title: 'Confess',
    label: 'Most skippable first read',
    reason: 'Works better once you already know you like Hoover’s voice than as the book that explains the phenomenon.',
    description:
      'Confess has loyal defenders, but it is the weakest of this group as a first recommendation because it feels less representative of the things readers usually come to Hoover for. The emotional secrets are there, and the romantic pull is real, but it does not hit the same commercial sweet spot as her best-known books. It is the kind of novel completionists often enjoy more than newcomers do.',
    bestFor:
      'Readers already committed to working through the catalog who want another emotional-contemporary setup after the obvious headliners.',
  },
  {
    rank: '4',
    title: 'November 9',
    label: 'Best lighter mainstream entry',
    reason: 'Readable, emotional, and very “Hoover,” but less durable than the top three.',
    description:
      'November 9 is one of the easiest Hoover books to sell because it is structured for momentum. The annual-meeting premise is built to keep pages turning, and the book is emotionally direct in the way her readers tend to like. What keeps it out of the top tier is that it feels more engineered than deep. It works, but it does not linger the same way her strongest books do.',
    bestFor:
      'Readers who want a fast contemporary-romance gateway and do not mind a slightly more high-concept setup.',
  },
  {
    rank: '3',
    title: 'Reminders of Him',
    label: 'Best redemption-driven emotional novel',
    reason: 'One of Hoover’s warmest and most human books, especially for readers who want grief and forgiveness over thriller shock.',
    description:
      'This is the Hoover book I would hand to readers who do not want Verity-style darkness and do not need the full cultural discourse around It Ends With Us. Kenna’s attempt to rebuild a life after prison gives the novel emotional seriousness that feels earned rather than merely manipulative. It still has Hoover’s direct prose and high readability, but the deeper appeal here is compassion under social judgment.',
    bestFor:
      'Readers who want an emotional contemporary with grief, second chances, and a more mature moral center.',
  },
  {
    rank: '2',
    title: 'Verity',
    label: 'Best thriller crossover pick',
    reason: 'The most compulsive Hoover binge-read for people who may not even think of themselves as romance readers.',
    description:
      'Verity is not number one only because it is not the best all-purpose introduction to Hoover’s catalog. It is, however, probably the easiest to inhale. The manuscript device, taboo energy, domestic dread, and openly manipulative pace make it one of the strongest crossover books for thriller readers. If what you want is the “I finished it at 2 a.m.” version of Hoover, this is the answer.',
    bestFor:
      'Readers who want dark marriage suspense, taboo energy, and a compulsive page-turner over a more traditional romance experience.',
  },
  {
    rank: '1',
    title: 'It Ends With Us',
    label: 'Best overall starting point',
    reason: 'The book where Hoover’s readability, emotional directness, and commercial reach all line up at once.',
    description:
      'It Ends With Us stays number one because it best explains why Colleen Hoover became a phenomenon in the first place. It is accessible, emotionally immediate, and built around a conflict that expanded far beyond book culture. The novel is imperfect, and people can reasonably argue about its framing, but as a market-defining, conversation-shaping, easy-to-recommend gateway, it still sits above the rest.',
    bestFor:
      'Readers who want the clearest picture of Hoover’s mainstream appeal and the book most likely to explain the entire discourse around her name.',
  },
] as const

function amazonLink(title: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} Colleen Hoover`)}&tag=althcu-20`
}

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Colleen Hoover Books Ranked Worst To Best',
  description:
    'Colleen Hoover books ranked worst to best with honest reasons, a real start-here recommendation, and direct Amazon links.',
  alternates: { canonical: pageUrl },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  category: 'books' })

export default function CoHoRankedPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
        Colleen Hoover Books Ranked Worst To Best
      </h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        If you want the short version, <strong>It Ends With Us</strong> is still the best overall
        Colleen Hoover starting point, while <strong>Verity</strong> is the best pick for readers who
        want the thriller side of her appeal. <strong>Confess</strong> lands last here not because it
        is unreadable, but because it is the least useful book to hand someone who is asking why Hoover
        became such a massive commercial force.
      </p>
      <img
        src={heroImage}
        alt="A systematic grid array of popular contemporary romance novels ranked and labeled with editorial notes."
        className="mb-6 w-full rounded-xl shadow-sm"
      />
      <p className="mb-8 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-relaxed text-rose-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and
        price can change, so confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          How should you rank Colleen Hoover books from worst to best?
        </h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-3 py-3 font-semibold">Rank</th>
              <th className="px-3 py-3 font-semibold">Book</th>
              <th className="px-3 py-3 font-semibold">Why it lands here</th>
            </tr>
          </thead>
          <tbody>
            {picks.map((pick) => (
              <tr key={pick.title} className="border-b border-gray-100 align-top">
                <td className="px-3 py-3 font-semibold">{pick.rank}</td>
                <td className="px-3 py-3 font-semibold text-gray-900">{pick.title}</td>
                <td className="px-3 py-3 text-gray-700">{pick.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          What makes a Colleen Hoover book rank higher than another one?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          With Hoover, the ranking question is not really about prose elegance. It is about conversion:
          which book turns the highest number of curious readers into people who suddenly understand the
          obsession. The winners are the books where her directness, emotional intensity, and page-turning
          instinct all line up at once. Lower-ranked titles may still have devoted fans, but they are
          less representative or less memorable as a first recommendation.
        </p>
        <p className="leading-relaxed text-gray-700">
          That is why this list values usefulness over completism. The goal is not to flatten taste.
          It is to help a new reader pick the right first Hoover book instead of wandering in through
          a weaker entry and assuming the rest of the catalog works the same way.
        </p>
      </section>
      {picks.map((pick) => {
        const href = amazonLink(pick.title)
        return (
          <section
            key={pick.title}
            className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              #{pick.rank}: {pick.title}
            </h2>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-rose-700">
              {pick.label}
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">{pick.description}</p>
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Why it ranks here</h3>
                <p className="text-sm leading-relaxed text-gray-700">{pick.reason}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Best for</h3>
                <p className="text-sm leading-relaxed text-gray-700">{pick.bestFor}</p>
              </div>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener nofollow"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-rose-600 px-6 py-3 text-base font-bold text-white transition hover:bg-rose-500"
            >
              Click Here to Buy on Amazon
            </a>
          </section>
        )
      })}
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Which Colleen Hoover book should you start with first?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Start with <a href={amazonLink('It Ends With Us')} target="_blank" rel="noopener nofollow"><strong>It Ends With Us</strong></a>{' '}
          if you want the book that best explains Hoover’s mainstream reach. Start with{' '}
          <a href={amazonLink('Verity')} target="_blank" rel="noopener nofollow"><strong>Verity</strong></a>{' '}
          if what you really want is a compulsive dark thriller and not a contemporary-romance path.
        </p>
        <p className="leading-relaxed text-gray-700">
          For the broader lane, pair this page with{' '}
          <strong>
            <a href="/books/best-colleen-hoover-books">best Colleen Hoover books</a>
          </strong>{' '}
          and{' '}
          <strong>
            <a href="/books/books-like-it-ends-with-us">books like It Ends With Us</a>
          </strong>
          . If you liked Hoover specifically for the taboo-thriller side, jump next to{' '}
          <strong>
            <a href="/books/books-like-verity-psychological-thrillers">books like Verity</a>
          </strong>
          .
        </p>
      </section>
    </main>
  )
}
