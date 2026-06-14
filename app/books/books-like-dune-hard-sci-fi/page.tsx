import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/books-like-dune-hard-sci-fi'
const heroImage =
  'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80'

export const metadata: Metadata = {
  title: 'Books Like Dune Hard Sci-Fi',
  description:
    'Books like Dune for readers who want hard sci-fi, political scale, ecology, and serious speculative world-building.',
  alternates: { canonical: pageUrl },
}

export default function BooksLikeDunePage() {
  const picks = [
    ['Hyperion', 'Dan Simmons', 'Best if you want literary scale plus many voices'],
    ['A Memory Called Empire', 'Arkady Martine', 'Best if imperial politics were the hook'],
    ['Foundation', 'Isaac Asimov', 'Best if civilizational strategy matters more than atmosphere'],
    ['The Left Hand of Darkness', 'Ursula K. Le Guin', 'Best if anthropology and politics matter most'],
    ['Children of Time', 'Adrian Tchaikovsky', 'Best if evolution and system-design fascinate you'],
  ] as const
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Books Like Dune</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        If you want books like <strong>Dune</strong>, start with <strong>A Memory Called Empire</strong> if imperial politics and court tension
        were the main draw. If you want another giant-architecture science-fiction experience, choose <strong>Hyperion</strong>. If what you really
        want is hard-system thinking at civilizational scale, <strong>Foundation</strong> is the more direct next step.
      </p>
      <img src={heroImage} alt="Epic hard science fiction novels and space exploration guides arranged on a minimalist desert sandstone surface." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-8 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm leading-relaxed text-blue-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Which hard sci-fi books are the best follow-ups to Dune?</h2>
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
        <h2 className="mb-4 text-2xl font-bold text-gray-900">What are you really looking for when you ask for books like Dune?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Usually not just “desert planets.” The stronger match signals are political theology, ecological system-building, dynastic pressure,
          and the sense that individuals are moving inside a history larger than themselves. That is why some military space opera fails the match
          while quieter political science fiction succeeds.
        </p>
        <p className="leading-relaxed text-gray-700">
          For the broader giant-book cluster, pair this with
          <strong> <a href="/books/best-sci-fi-doorstoppers-epic-space-opera">best sci-fi doorstoppers and epic space opera</a></strong>
          and <strong><a href="/books/best-science-fiction-books">best science fiction books</a></strong>.
        </p>
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('A Memory Called Empire Arkady Martine')}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-base font-bold text-white transition hover:bg-blue-600">
          Click Here to Buy on Amazon
        </a>
      </section>
    </main>
  )
}
