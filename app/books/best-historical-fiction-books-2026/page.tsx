import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/best-historical-fiction-books-2026'
const heroImage =
  'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80'

export const metadata: Metadata = {
  title: 'Best Historical Fiction Books 2026',
  description:
    'Best historical fiction books to read in 2026, with the strongest start-here picks by mood and reader type.',
  alternates: { canonical: pageUrl },
}

export default function HistoricalFiction2026Page() {
  const picks = [
    ['Wolf Hall', 'Hilary Mantel', 'Best if you want the literary summit'],
    ['Pachinko', 'Min Jin Lee', 'Best broad recommendation for most readers'],
    ['The Pillars of the Earth', 'Ken Follett', 'Best page-turning epic'],
    ['The Nightingale', 'Kristin Hannah', 'Best emotional WWII-adjacent crossover'],
    ['The Alice Network', 'Kate Quinn', 'Best for readers who want espionage inside historical fiction'],
  ] as const
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Best Historical Fiction Books To Read In 2026</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        The best historical fiction book to read in 2026 for most people is <strong>Pachinko</strong>
        because it balances scope, accessibility, and emotional seriousness better than almost anything else in the category.
        If you want the most acclaimed craft-first answer, start with <strong>Wolf Hall</strong>. If you want
        sheer page-turning momentum in a giant historical canvas, start with <strong>The Pillars of the Earth</strong>.
      </p>
      <img src={heroImage} alt="Classic hardback historical fiction novels arranged beautifully alongside historic maps and traditional writing instruments." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Which historical fiction books are the best fit in 2026?</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Book</th><th className="px-3 py-3 font-semibold">Best For</th><th className="px-3 py-3 font-semibold">Amazon</th></tr></thead>
          <tbody>
            {picks.map(([title, author, fit]) => (
              <tr key={title} className="border-b border-gray-100"><td className="px-3 py-3 font-semibold">{title}</td><td className="px-3 py-3 text-gray-700">{fit}</td><td className="px-3 py-3"><a href={`https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="font-semibold text-amber-700">Find on Amazon</a></td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">What kind of historical fiction should you choose in 2026?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Choose by reading experience, not just era. Wolf Hall is for readers who want political consciousness and prose density.
          Pachinko is for readers who want a family saga that never loses emotional clarity. Pillars is for readers who want a brick
          that still behaves like commercial fiction. The Nightingale is for readers who want fast emotional access rather than a seminar in statecraft.
        </p>
        <p className="leading-relaxed text-gray-700">
          If you are deciding between history and more literary-fiction crossover, compare this with
          <strong> <a href="/books/genre-fiction/best-history-books-for-beginners">best history books for beginners</a></strong>
          and <strong><a href="/books/genre-fiction/best-world-war-ii-books">best books about World War II</a></strong>.
        </p>
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Pachinko Min Jin Lee')}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-amber-600 px-6 py-3 text-base font-bold text-white transition hover:bg-amber-500">
          Click Here to Buy on Amazon
        </a>
      </section>
    </main>
  )
}
