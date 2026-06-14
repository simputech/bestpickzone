import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/colleen-hoover-books-ranked-worst-to-best'
const heroImage =
  'https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?auto=format&fit=crop&w=800&q=80'

export const metadata: Metadata = {
  title: 'Colleen Hoover Books Ranked Worst To Best',
  description:
    'Colleen Hoover books ranked worst to best with an honest start-here pick, skip-first advice, and direct Amazon links.',
  alternates: { canonical: pageUrl },
}

export default function CoHoRankedPage() {
  const picks = [
    ['5', 'Confess', 'Best for completionists, not the first pick'],
    ['4', 'November 9', 'Best lighter romantic entry'],
    ['3', 'Reminders of Him', 'Best redemption-driven emotional novel'],
    ['2', 'Verity', 'Best thriller crossover pick'],
    ['1', 'It Ends With Us', 'Best overall starting point'],
  ] as const
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Colleen Hoover Books Ranked Worst To Best</h1>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">How should you rank Colleen Hoover books from worst to best?</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Rank</th><th className="px-3 py-3 font-semibold">Book</th><th className="px-3 py-3 font-semibold">Reason</th></tr></thead>
          <tbody>
            {picks.map(([rank, title, reason]) => (
              <tr key={title} className="border-b border-gray-100"><td className="px-3 py-3 font-semibold">{rank}</td><td className="px-3 py-3 font-semibold">{title}</td><td className="px-3 py-3 text-gray-700">{reason}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <img src={heroImage} alt="A systematic grid array of popular contemporary romance novels ranked and labeled with editorial notes." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        <strong>It Ends With Us</strong> stays at number one because it is the book where Hoover's
        emotional directness, commercial readability, and willingness to make romance morally uncomfortable
        all line up at once. <strong>Verity</strong> is the most useful alternate pick when someone wants the
        page-turning side of Hoover without staying in standard contemporary-romance territory.
      </p>
      <p className="mb-8 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-relaxed text-rose-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Which Colleen Hoover book should you start with first?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Start with <a href={`https://www.amazon.com/s?k=${encodeURIComponent('It Ends With Us Colleen Hoover')}&tag=althcu-20`} target="_blank" rel="noopener nofollow"><strong>It Ends With Us</strong></a>
          {' '}if you want the book that best explains why Hoover became a phenomenon. Start with
          <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Verity Colleen Hoover')}&tag=althcu-20`} target="_blank" rel="noopener nofollow"><strong> Verity</strong></a>{' '}
          only if what you really want is a dark compulsive thriller.
        </p>
        <p className="leading-relaxed text-gray-700">
          For the fuller author picture, pair this ranking with
          <strong> <a href="/books/best-colleen-hoover-books">best Colleen Hoover books</a></strong>
          and <strong><a href="/books/books-like-it-ends-with-us">books like It Ends With Us</a></strong>.
        </p>
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('It Ends With Us Colleen Hoover')}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-rose-600 px-6 py-3 text-base font-bold text-white transition hover:bg-rose-500">
          Click Here to Buy on Amazon
        </a>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Which Colleen Hoover book should you skip first?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          <strong>Confess</strong> is the clearest skip-first choice. It is not bad, but it is less
          representative of what keeps Hoover readers coming back than It Ends With Us, Verity, or
          Reminders of Him. Start there only if you already know you want to work through the catalog.
        </p>
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Verity Colleen Hoover')}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-slate-700 px-6 py-3 text-base font-bold text-white transition hover:bg-slate-600">
          Click Here to Buy on Amazon
        </a>
      </section>
    </main>
  )
}
