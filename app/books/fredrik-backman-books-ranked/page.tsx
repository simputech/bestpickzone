import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/fredrik-backman-books-ranked'
const heroImage =
  'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=800&q=80'

export const metadata: Metadata = {
  title: 'Fredrik Backman Books Ranked',
  description:
    'Fredrik Backman books ranked, with the best first read and which books work best for different reader moods.',
  alternates: { canonical: pageUrl },
}

export default function BackmanRankedPage() {
  const picks = [
    ['4', 'Anxious People', 'Best crowd-pleasing ensemble'],
    ['3', 'My Grandmother Asked Me to Tell You She’s Sorry', 'Best whimsical-emotional crossover'],
    ['2', 'Beartown', 'Best if you want the heaviest and sharpest social pressure'],
    ['1', 'A Man Called Ove', 'Best overall starting point'],
  ] as const
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Fredrik Backman Books Ranked</h1>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">How should you rank Fredrik Backman books?</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Rank</th><th className="px-3 py-3 font-semibold">Book</th><th className="px-3 py-3 font-semibold">Why</th></tr></thead>
          <tbody>
            {picks.map(([rank, title, why]) => (
              <tr key={title} className="border-b border-gray-100"><td className="px-3 py-3 font-semibold">{rank}</td><td className="px-3 py-3 font-semibold">{title}</td><td className="px-3 py-3 text-gray-700">{why}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <img src={heroImage} alt="A stack of contemporary uplifting fiction and character-driven Scandinavian novels arranged cleanly on a light wood table." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        <strong>A Man Called Ove</strong> stays at number one because it is the clearest version of what Backman does best:
        abrasive first impressions, deeply human inner damage, and emotional release that feels earned instead of engineered. <strong>Beartown</strong>
        is the stronger choice only if you already know you want the heavier communal-moral version of his work.
      </p>
      <p className="mb-8 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-relaxed text-sky-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Which Fredrik Backman book should you start with first?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Start with <a href={`https://www.amazon.com/s?k=${encodeURIComponent('A Man Called Ove Fredrik Backman')}&tag=althcu-20`} target="_blank" rel="noopener nofollow"><strong>A Man Called Ove</strong></a>
          {' '}if you want the broadest recommendation. Start with <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Beartown Fredrik Backman')}&tag=althcu-20`} target="_blank" rel="noopener nofollow"><strong>Beartown</strong></a>
          {' '}if you specifically want hockey-town pressure, social complicity, and a much heavier moral climate.
        </p>
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('A Man Called Ove Fredrik Backman')}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-base font-bold text-white transition hover:bg-sky-500">
          Click Here to Buy on Amazon
        </a>
      </section>
    </main>
  )
}
