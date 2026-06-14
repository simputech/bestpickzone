import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/best-cozy-mystery-series-to-read'
const heroImage =
  'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&fit=crop&w=800&q=80'

export const metadata: Metadata = {
  title: 'Best Cozy Mystery Series To Read',
  description:
    'Best cozy mystery series to read if you want recurring sleuths, low-gore murders, and strong series comfort.',
  alternates: { canonical: pageUrl },
}

export default function CozyMysterySeriesPage() {
  const picks = [
    ['Still Life', 'Louise Penny', 'Best literary cozy-adjacent series'],
    ['Chocolate Chip Cookie Murder', 'Joanne Fluke', 'Best food-cozy gateway'],
    ['The Thursday Murder Club', 'Richard Osman', 'Best witty modern ensemble'],
    ['A Morbid Taste for Bones', 'Ellis Peters', 'Best historical cozy series entry'],
    ['The No. 1 Ladies’ Detective Agency', 'Alexander McCall Smith', 'Best gentle mystery comfort read'],
  ] as const
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Best Cozy Mystery Series To Read</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        The best cozy mystery series to read first is <strong>Still Life</strong> if you want warmth,
        intelligence, and a village you will actually want to revisit. If you want something breezier,
        more culinary, and openly comfort-first, start with <strong>Chocolate Chip Cookie Murder</strong>.
        If you want a newer series with sharper comic timing, go to <strong>The Thursday Murder Club</strong>.
      </p>
      <img src={heroImage} alt="A comforting indoor scene of cozy mystery paperbacks resting next to a warm beverage and soft winter blanket." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-relaxed text-emerald-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Which cozy mystery series should you start with first?</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Series opener</th><th className="px-3 py-3 font-semibold">Best For</th><th className="px-3 py-3 font-semibold">Amazon</th></tr></thead>
          <tbody>
            {picks.map(([title, author, fit]) => (
              <tr key={title} className="border-b border-gray-100">
                <td className="px-3 py-3 font-semibold">{title}</td>
                <td className="px-3 py-3 text-gray-700">{fit}</td>
                <td className="px-3 py-3"><a href={`https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="font-semibold text-emerald-700">Find on Amazon</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">What makes a cozy mystery series worth sticking with?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Recurring community matters more than body count. The strongest cozy series give you a place,
          a social circle, and a sleuth whose company is as valuable as the puzzle itself. That is why
          village texture, side-character chemistry, and tonal steadiness matter more here than shock value.
        </p>
        <p className="leading-relaxed text-gray-700">
          If you want the broader detective-series landscape, pair this with
          <strong> <a href="/books/best-mystery-series">best mystery series</a></strong>. If you want
          something more classic and formal, add
          <strong> <a href="/books/agatha-christie-hercule-poirot-in-order">Hercule Poirot in order</a></strong>.
        </p>
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Still Life Louise Penny')}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-base font-bold text-white transition hover:bg-emerald-500">
          Click Here to Buy on Amazon
        </a>
      </section>
    </main>
  )
}
