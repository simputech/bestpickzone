import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/best-urban-fantasy-series-completed'
const heroImage =
  'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80'

export const metadata: Metadata = {
  title: 'Best Urban Fantasy Series Completed',
  description:
    'Best completed urban fantasy series for readers who want the payoff of a finished world instead of an endless wait.',
  alternates: { canonical: pageUrl },
}

export default function UrbanFantasyCompletedPage() {
  const picks = [
    ['Kate Daniels', 'Ilona Andrews', 'Best all-around completed urban fantasy'],
    ['The October Daye books', 'Seanan McGuire', 'Best if fae politics matter more than punch'],
    ['The Hollows', 'Kim Harrison', 'Best witch-and-city long-run payoff'],
    ['The Fever series', 'Karen Marie Moning', 'Best if you want darker romance pressure'],
    ['The Others', 'Anne Bishop', 'Best if you want a less standard urban-fantasy ecosystem'],
  ] as const
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Best Completed Urban Fantasy Series</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        The best completed urban fantasy series for most readers is <strong>Kate Daniels</strong> because it gives you city-scale magic,
        series escalation, humor, action, and real payoff without leaving you trapped in unfinished limbo. If you want darker romance pressure,
        go to <strong>The Fever series</strong>. If you want witchy ensemble energy, <strong>The Hollows</strong> is the better pick.
      </p>
      <img src={heroImage} alt="An array of urban fantasy series paperbacks set against a moody, blurred city night backdrop." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-8 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3 text-sm leading-relaxed text-purple-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Which completed urban fantasy series are worth starting now?</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Series</th><th className="px-3 py-3 font-semibold">Best For</th><th className="px-3 py-3 font-semibold">Amazon</th></tr></thead>
          <tbody>
            {picks.map(([title, author, fit]) => (
              <tr key={title} className="border-b border-gray-100"><td className="px-3 py-3 font-semibold">{title}</td><td className="px-3 py-3 text-gray-700">{fit}</td><td className="px-3 py-3"><a href={`https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="font-semibold text-purple-700">Find on Amazon</a></td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Why does completed status matter so much in urban fantasy?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Because urban fantasy is built on escalation: city mythology, relationship shifts, faction politics, and power-growth arcs.
          A finished series lets you buy into that expansion knowing there is an end point instead of another soft cliff.
        </p>
        <p className="leading-relaxed text-gray-700">
          If broader fantasy is what you want, compare this with
          <strong> <a href="/books/best-fantasy-series-for-adults">best fantasy series for adults</a></strong>
          and <strong><a href="/books/books-like-fourth-wing-fantasy-romance">books like Fourth Wing</a></strong>.
        </p>
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Magic Bites Ilona Andrews')}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-purple-600 px-6 py-3 text-base font-bold text-white transition hover:bg-purple-500">
          Click Here to Buy on Amazon
        </a>
      </section>
    </main>
  )
}
