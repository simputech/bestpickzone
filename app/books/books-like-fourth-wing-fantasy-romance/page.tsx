import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/books-like-fourth-wing-fantasy-romance'
const heroImage =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'

export const metadata: Metadata = {
  title: 'Books Like Fourth Wing',
  description:
    'Books like Fourth Wing for readers who want dragon-school intensity, fantasy romance momentum, and addictive series energy.',
  alternates: { canonical: pageUrl },
}

export default function FourthWingReadalikesPage() {
  const picks = [
    ['A Court of Thorns and Roses', 'Sarah J. Maas', 'Best romantasy gateway if the romance momentum matters most'],
    ['The Serpent and the Wings of Night', 'Carissa Broadbent', 'Best if competition energy was the hook'],
    ['From Blood and Ash', 'Jennifer L. Armentrout', 'Best if you want heat plus sprawling series drama'],
    ['One Dark Window', 'Rachel Gillig', 'Best if you want darker gothic atmosphere'],
    ['The Hurricane Wars', 'Thea Guanzon', 'Best if you want enemies-to-lovers war tension'],
  ] as const
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Books Like Fourth Wing</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        If you want books like <strong>Fourth Wing</strong>, the closest first move is <strong>The Serpent and the Wings of Night</strong>
        if the trial structure and dangerous attraction were the real hook. If what you want is a bigger romantasy franchise with proven
        mass appeal, start with <strong>A Court of Thorns and Roses</strong>. If you mainly want speed, heat, and long-series drama, go to
        <strong> From Blood and Ash</strong>.
      </p>
      <img src={heroImage} alt="Premium special edition romantic fantasy novels with decorative sprayed edges displayed on a dark background." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-8 rounded-xl border border-fuchsia-200 bg-fuchsia-50 px-4 py-3 text-sm leading-relaxed text-fuchsia-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Which book should you read first if you loved Fourth Wing?</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Book</th><th className="px-3 py-3 font-semibold">Best For</th><th className="px-3 py-3 font-semibold">Amazon</th></tr></thead>
          <tbody>
            {picks.map(([title, author, fit]) => (
              <tr key={title} className="border-b border-gray-100"><td className="px-3 py-3 font-semibold">{title}</td><td className="px-3 py-3 text-gray-700">{fit}</td><td className="px-3 py-3"><a href={`https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="font-semibold text-fuchsia-700">Find on Amazon</a></td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">What are readers usually chasing when they search for books like Fourth Wing?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Usually not just dragons. The real ask is high-intensity training or trial structure, dangerous romantic tension, readable prose,
          and a series engine strong enough to feel compulsive rather than merely ornate. That is why pure epic fantasy often misses the match,
          even when the world-building is better on paper.
        </p>
        <p className="leading-relaxed text-gray-700">
          For the broader fantasy lane, pair this with
          <strong> <a href="/books/best-fantasy-series-for-adults">best fantasy series for adults</a></strong>
          and, if you want another reading-order guide, <strong><a href="/books/best-brandon-sanderson-cosmere-order">best Brandon Sanderson Cosmere order</a></strong>.
        </p>
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('The Serpent and the Wings of Night Carissa Broadbent')}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-fuchsia-600 px-6 py-3 text-base font-bold text-white transition hover:bg-fuchsia-500">
          Click Here to Buy on Amazon
        </a>
      </section>
    </main>
  )
}
