import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/books-like-verity-psychological-thrillers'
const heroImage =
  'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80'

export const metadata: Metadata = {
  title: 'Books Like Verity',
  description:
    'Books like Verity for readers who want manipulative psychological thrillers, dark marriage secrets, and a fast Amazon-friendly shortlist.',
  alternates: { canonical: pageUrl },
}

export default function BooksLikeVerityPage() {
  const picks = [
    ['The Wife Between Us', 'Greer Hendricks and Sarah Pekkanen', 'Best twisty marriage-misdirection follow-up'],
    ['The Last Mrs. Parrish', 'Liv Constantine', 'Best if you want social climbing plus toxic wealth'],
    ['Behind Closed Doors', 'B.A. Paris', 'Best if domestic control was the hook'],
    ['The Silent Patient', 'Alex Michaelides', 'Best if you want the cleanest one-sitting mechanism'],
    ['Gone Girl', 'Gillian Flynn', 'Best if you want the nastiest, smartest benchmark'],
  ] as const
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Books Like Verity</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        If you want books like <strong>Verity</strong>, start with <strong>The Wife Between Us</strong>
        if what you want is manipulative relationship framing, then move to <strong>Behind Closed Doors</strong>
        if the darkest domestic-control elements were the real hook. If you want the genre benchmark
        that goes beyond twist delivery and into social poison, the book to read is <strong>Gone Girl</strong>.
      </p>
      <img src={heroImage} alt="A dramatic low-light setting showcasing dark psychological thriller fiction and suspense mystery novels." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-8 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-sm leading-relaxed text-violet-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Which book should you read first if you want something most like Verity?
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">Top pick</p>
            <h3 className="mb-2 text-xl font-bold text-gray-900">The Wife Between Us</h3>
            <p className="text-sm leading-relaxed text-gray-700">Best first follow-up if you want competing narratives, relational manipulation, and a reader who is always being positioned into the wrong certainty.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">Benchmark alternative</p>
            <h3 className="mb-2 text-xl font-bold text-gray-900">Gone Girl</h3>
            <p className="text-sm leading-relaxed text-gray-700">Best if you want the most intelligent escalation of toxic-relationship suspense after Verity.</p>
          </div>
        </div>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">How do the best books like Verity compare?</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Book</th><th className="px-3 py-3 font-semibold">Best For</th><th className="px-3 py-3 font-semibold">Amazon</th></tr></thead>
          <tbody>
            {picks.map(([title, author, fit]) => (
              <tr key={title} className="border-b border-gray-100">
                <td className="px-3 py-3 font-semibold text-gray-900">{title}</td>
                <td className="px-3 py-3 text-gray-700">{fit}</td>
                <td className="px-3 py-3"><a href={`https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="font-semibold text-violet-700">Find on Amazon</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          What are you really asking for when you search for books like Verity?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Usually not “romance thriller” in the broad sense. What readers usually want is a manipulative
          first-person or close-perspective experience, a dark intimate relationship, and a book that feels
          a little lurid on purpose. That means the best readalikes are not just thrillers with a twist.
          They need emotional trespass, not merely mystery.
        </p>
        <p className="leading-relaxed text-gray-700">
          For a broader thriller lane, move to
          <strong> <a href="/books/best-psychological-thrillers-with-mind-bending-twists">best psychological thrillers with mind-bending twists</a></strong>
          or our existing <strong><a href="/books/best-psychological-thrillers">best psychological thrillers</a></strong> guide.
          For Hoover-specific context, use
          <strong> <a href="/books/books-like-it-ends-with-us">books like It Ends With Us</a></strong>
          and <strong><a href="/books/best-colleen-hoover-books">best Colleen Hoover books</a></strong>.
        </p>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Which book should you buy first if you want the closest Verity follow-up?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Start with <strong>The Wife Between Us</strong> if you want the nearest mood match, then
          move to <strong>Gone Girl</strong> if you want the smarter, meaner benchmark that deepens
          the same relationship-toxicity lane.
        </p>
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('The Wife Between Us Greer Hendricks Sarah Pekkanen')}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-violet-600 px-6 py-3 text-base font-bold text-white transition hover:bg-violet-500">
          Click Here to Buy on Amazon
        </a>
      </section>
    </main>
  )
}
