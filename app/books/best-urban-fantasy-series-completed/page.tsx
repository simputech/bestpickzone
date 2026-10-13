import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'

const pageUrl = 'https://bestpickzone.com/books/best-urban-fantasy-series-completed'
const heroImage =
  'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80'

export const metadata: Metadata = withSeo(withArticleMetadataDefaults({
  title: 'Best Urban Fantasy Series Completed',
  description:
    'Best completed urban fantasy series for readers who want the payoff of a finished world instead of an endless wait.',
  alternates: { canonical: pageUrl },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  modifiedTime: '2026-10-12T00:00:00Z',
  category: 'books' }), "/books/best-urban-fantasy-series-completed")

export default function UrbanFantasyCompletedPage() {
  const picks = [
    ['Kate Daniels', 'Ilona Andrews', 'Start with the completed main arc; the wider world continues'],
    ['The October Daye books', 'Seanan McGuire', 'Ongoing: skip if a finished series is essential'],
    ['The Hollows', 'Kim Harrison', 'Ongoing: not a completed-series recommendation'],
    ['The Fever series', 'Karen Marie Moning', 'Best if you want darker romance pressure'],
    ['The Others', 'Anne Bishop', 'Best if you want a less standard urban-fantasy ecosystem'],
  ] as const
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <BreadcrumbJsonLd trail={[{name: "Home", path: "/"}, {name: "Books", path: "/books"}, {name: "Best Urban Fantasy Series Completed"}]} />
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Best Completed Urban Fantasy Series</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        Start with the <strong>Kate Daniels main series</strong> if you want an urban-fantasy arc with an identified ending:
        <em> Magic Triumphs</em> concludes that main run, while later stories continue the world.
        Buy the first book, <em>Magic Bites</em>, before committing to a set. Skip <strong>October Daye</strong> and
        <strong> The Hollows</strong> if your requirement is a completed series; both continue beyond their earlier installments.
      </p>
      <img src={heroImage} alt="An array of urban fantasy series paperbacks set against a moody, blurred city night backdrop." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-8 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3 text-sm leading-relaxed text-purple-900">
        Check the title, author, edition and current availability on Amazon. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">What is urban fantasy, and why do readers like it so much?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Urban fantasy usually takes supernatural forces like magic, fae politics, vampires, shapeshifters, witches, or hidden gods and drops them into a recognizable modern world.
          Instead of building a fully separate secondary realm from scratch, the genre lets enchantment and danger collide with cities, jobs, traffic, apartments, police work, dating, and everyday survival.
          That mix is a big part of the appeal. Readers get the momentum and familiarity of modern settings with the escalation, myth, and power-play energy of fantasy.
        </p>
        <p className="leading-relaxed text-gray-700">
          People also like urban fantasy because it tends to be highly bingeable. The best series give you a recurring city ecosystem, a protagonist who keeps growing into new levels of power or responsibility,
          and faction politics that can stretch across many books without losing the intimacy of a close-up character story. When that series is completed, the appeal gets even stronger, because you know the payoff is actually there.
        </p>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Which series fit a reader who wants an ending?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">A finished main arc is different from an author ending every story in that world. The table distinguishes the two ongoing series readers should not buy under a promise of completion. For Fever and The Others, check which arc and volumes a listing includes before purchasing a collection.</p>
        <table className="w-full border-collapse text-left text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Series</th><th className="px-3 py-3 font-semibold">Best For</th><th className="px-3 py-3 font-semibold">Amazon</th></tr></thead>
          <tbody>
            {picks.map(([title, author, fit]) => (
              <tr key={title} className="border-b border-gray-100"><td className="px-3 py-3 font-semibold">{title}</td><td className="px-3 py-3 text-gray-700">{fit}</td><td className="px-3 py-3"><a href={`https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`} target="_blank" rel="noopener nofollow sponsored" className="font-semibold text-purple-700">Find on Amazon</a></td></tr>
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
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Magic Bites Ilona Andrews')}&tag=althcu-20`} target="_blank" rel="noopener nofollow sponsored" className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-purple-600 px-6 py-3 text-base font-bold text-white transition hover:bg-purple-500">
          Compare editions and prices on Amazon
        </a>
      </section>
      <section className="mb-10 rounded-3xl border border-purple-200 bg-purple-50 p-5">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">Check the reading order before buying a set</h2>
        <p className="mb-3 leading-relaxed text-gray-700">Use the Amazon links to compare individual volumes and formats. A bundle labeled “complete” can cover only some books or one story arc. Match its contents to the author’s bibliography, and avoid buying a later volume just because its cover or price is more appealing.</p>
        <p className="text-sm leading-relaxed text-gray-700">Series-status correction checked October 12, 2026: <a className="underline" href="https://ilona-andrews.com/blog/magic-triumphs-sample-bonanza/">Ilona Andrews identifies the end of the Kate Daniels main series</a>; <a className="underline" href="https://www.seananmcguire.com/toby.php">Seanan McGuire lists the continuing October Daye books</a>; <a className="underline" href="https://www.kimharrison.net/">Kim Harrison lists further Hollows work</a>. This check does not establish current retailer stock.</p>
      </section>
    </main>
  )
}
