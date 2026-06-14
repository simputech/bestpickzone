import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/best-short-classic-books-for-a-flight'
const heroImage =
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'

export const metadata: Metadata = {
  title: 'Best Short Classic Books For A Flight',
  description:
    'Best short classic books for a flight if you want a portable, satisfying, serious read that fits travel attention spans.',
  alternates: { canonical: pageUrl },
}

export default function ShortClassicsFlightPage() {
  const picks = [
    ['The Great Gatsby', 'F. Scott Fitzgerald', 'Best overall flight classic'],
    ['The Stranger', 'Albert Camus', 'Best if you want philosophical cool and speed'],
    ['Of Mice and Men', 'John Steinbeck', 'Best emotional punch in a small page count'],
    ['The Metamorphosis', 'Franz Kafka', 'Best if you want unsettling strangeness'],
    ['A Room with a View', 'E. M. Forster', 'Best if you want something lighter and elegant'],
  ] as const
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Best Short Classic Books For A Flight</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        The best short classic book for a flight is <strong>The Great Gatsby</strong> because it is brief, vivid, and easy to re-enter after interruptions.
        If you want something colder and more philosophical, start with <strong>The Stranger</strong>. If you want the strongest emotional hit in the fewest pages,
        choose <strong>Of Mice and Men</strong>.
      </p>
      <img src={heroImage} alt="A neat travel luggage configuration showing lightweight pocket classic books and travel gear packed for a flight." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-8 rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm leading-relaxed text-yellow-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Which short classic books work best on a flight?</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Book</th><th className="px-3 py-3 font-semibold">Best For</th><th className="px-3 py-3 font-semibold">Amazon</th></tr></thead>
          <tbody>
            {picks.map(([title, author, fit]) => (
              <tr key={title} className="border-b border-gray-100"><td className="px-3 py-3 font-semibold">{title}</td><td className="px-3 py-3 text-gray-700">{fit}</td><td className="px-3 py-3"><a href={`https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="font-semibold text-yellow-700">Find on Amazon</a></td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">What makes a classic work especially well on a flight?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          You need compression, clean re-entry, and enough sentence-level appeal that airport interruptions do not break the book’s spell.
          The best flight classics are not merely short. They are portable in attention terms. Gatsby can survive drink-cart interruptions. The Stranger can survive gate delays.
          A very long Victorian novel usually cannot.
        </p>
        <p className="leading-relaxed text-gray-700">
          If this is really a travel-mood question rather than a classics question, pair it with
          <strong> <a href="/books/genre-fiction/best-beach-reads">best beach reads</a></strong> and
          <strong> <a href="/books/books-like-it-ends-with-us">books like It Ends With Us</a></strong> if you want something contemporary instead.
        </p>
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('The Great Gatsby F. Scott Fitzgerald')}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-yellow-600 px-6 py-3 text-base font-bold text-white transition hover:bg-yellow-500">
          Click Here to Buy on Amazon
        </a>
      </section>
    </main>
  )
}
