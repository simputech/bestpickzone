import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/best-sci-fi-doorstoppers-epic-space-opera'
const heroImage =
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80'

export const metadata: Metadata = {
  title: 'Best Sci-Fi Doorstoppers Epic Space Opera',
  description:
    'Best sci-fi doorstoppers and epic space opera books for readers who want scale, politics, and massive page counts.',
  alternates: { canonical: pageUrl },
}

export default function SpaceOperaDoorstoppersPage() {
  const picks = [
    ['Dune', 'Frank Herbert', 'Best all-around epic starting point'],
    ['Leviathan Wakes', 'James S. A. Corey', 'Best modern series gateway'],
    ['Pandora’s Star', 'Peter F. Hamilton', 'Best if you want true giant-scale sprawl'],
    ['A Fire Upon the Deep', 'Vernor Vinge', 'Best if ideas matter as much as fleet drama'],
    ['The Reality Dysfunction', 'Peter F. Hamilton', 'Best for maximalist readers only'],
  ] as const
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Best Sci-Fi Doorstoppers And Epic Space Opera</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        If you want the best sci-fi doorstopper that still works as a first major commitment, start
        with <strong>Dune</strong>. If you want a more modern and faster-moving series opener, go
        with <strong>Leviathan Wakes</strong>. If your actual goal is “give me the biggest possible
        interstellar sprawl,” that is when you reach for <strong>Pandora’s Star</strong>.
      </p>
      <img src={heroImage} alt="An array of massive space opera novels and heavy, high-page-count science fiction doorstopper books." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-8 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm leading-relaxed text-blue-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Which epic space opera doorstopper should you start with?</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Book</th><th className="px-3 py-3 font-semibold">Best For</th><th className="px-3 py-3 font-semibold">Amazon</th></tr></thead>
          <tbody>
            {picks.map(([title, author, fit]) => (
              <tr key={title} className="border-b border-gray-100"><td className="px-3 py-3 font-semibold">{title}</td><td className="px-3 py-3 text-gray-700">{fit}</td><td className="px-3 py-3"><a href={`https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="font-semibold text-blue-700">Find on Amazon</a></td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">What separates a great sci-fi doorstopper from a merely long one?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Scale alone is not enough. The best giant space-opera books keep finding new forms of pressure:
          political fracture, scientific revelation, military escalation, ideological conflict, or a world model
          that gets stranger the deeper you go. If the book is only long, it turns into labor. If the scale is doing
          narrative work, the page count starts to feel like oxygen instead of drag.
        </p>
        <p className="leading-relaxed text-gray-700">
          For a broader science-fiction lane, pair this with
          <strong> <a href="/books/best-science-fiction-books">best science fiction books</a></strong>.
          If fantasy-doorstopper stamina is also your thing, move across to
          <strong> <a href="/books/best-fantasy-series-for-adults">best fantasy series for adults</a></strong>.
        </p>
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Dune Frank Herbert')}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-base font-bold text-white transition hover:bg-blue-600">
          Click Here to Buy on Amazon
        </a>
      </section>
    </main>
  )
}
