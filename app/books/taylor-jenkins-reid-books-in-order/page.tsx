import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/taylor-jenkins-reid-books-in-order'
const heroImage =
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80'

export const metadata: Metadata = {
  title: 'Taylor Jenkins Reid Books In Order',
  description:
    'Taylor Jenkins Reid books in order, plus the best starting point if you want the strongest first experience.',
  alternates: { canonical: pageUrl },
}

export default function TJRBooksInOrderPage() {
  const picks = [
    ['1', 'Maybe in Another Life', 'Best early emotional-contemporary entry'],
    ['2', 'One True Loves', 'Best if relationship what-if stakes appeal first'],
    ['3', 'The Seven Husbands of Evelyn Hugo', 'Best breakout entry point'],
    ['4', 'Daisy Jones & The Six', 'Best if oral-history momentum is your thing'],
    ['5', 'Malibu Rising', 'Best if you want family-drama crossover next'],
    ['6', 'Carrie Soto Is Back', 'Best once you want the comeback-sports angle'],
  ] as const
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Taylor Jenkins Reid Books In Order</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        The simplest Taylor Jenkins Reid books-in-order answer is to follow publication order, but the better reader answer is to start
        with <strong>The Seven Husbands of Evelyn Hugo</strong> unless you are specifically chasing her earlier contemporary-romance phase first.
        It is the clearest proof of what she does best: voice, glamour, emotional withholding, and character mythology built for binge reading.
      </p>
      <img src={heroImage} alt="A bright, sunny flatlay profile of contemporary historical pop-fiction novels and summer paperbacks." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-8 rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm leading-relaxed text-pink-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">What is the best Taylor Jenkins Reid reading order?</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Step</th><th className="px-3 py-3 font-semibold">Book</th><th className="px-3 py-3 font-semibold">Why Here</th></tr></thead>
          <tbody>
            {picks.map(([a,b,c]) => (
              <tr key={b} className="border-b border-gray-100"><td className="px-3 py-3 font-semibold">{a}</td><td className="px-3 py-3 font-semibold">{b}</td><td className="px-3 py-3 text-gray-700">{c}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Should you actually start Taylor Jenkins Reid with Evelyn Hugo instead of book one?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Yes, for most readers. Publication order shows her development, but Evelyn Hugo is the book that most efficiently communicates the appeal:
          old-Hollywood mystique, controlled revelation, emotional manipulation in the good commercial-fiction sense, and a protagonist big enough to carry myth.
        </p>
        <p className="leading-relaxed text-gray-700">
          If you want a broader summer-readable lane around her books, pair this with
          <strong> <a href="/books/genre-fiction/best-beach-reads">best beach reads</a></strong>
          and <strong><a href="/books/best-historical-fiction-books-2026">best historical fiction books in 2026</a></strong>.
        </p>
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('The Seven Husbands of Evelyn Hugo Taylor Jenkins Reid')}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-pink-600 px-6 py-3 text-base font-bold text-white transition hover:bg-pink-500">
          Click Here to Buy on Amazon
        </a>
      </section>
    </main>
  )
}
