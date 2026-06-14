import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/best-brandon-sanderson-cosmere-order'
const heroImage =
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80'

const order = [
  ['1', 'Mistborn: The Final Empire', 'Best first Cosmere novel'],
  ['2', 'The Well of Ascension', 'Continue Era 1 once you are in'],
  ['3', 'The Hero of Ages', 'Finish the first arc before expanding outward'],
  ['4', 'Warbreaker', 'Best palate-cleansing standalone before Stormlight'],
  ['5', 'The Way of Kings', 'Start Stormlight after you trust Sanderson at scale'],
  ['6', 'Words of Radiance', 'Continue Stormlight while Cosmere threads sharpen'],
  ['7', 'Mistborn Era 2', 'Return once you want a lighter, weirder post-Era-1 shift'],
] as const

function amazonLink(title: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} Brandon Sanderson`)}&tag=althcu-20`
}

export const metadata: Metadata = {
  title: 'Best Brandon Sanderson Cosmere Order',
  description:
    'Best Brandon Sanderson Cosmere order for new readers, with the smartest first book and what to save for later.',
  alternates: { canonical: pageUrl },
}

export default function CosmereOrderPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
        Best Brandon Sanderson Cosmere Order
      </h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        The best Brandon Sanderson Cosmere order for new readers is <strong>Mistborn: The Final Empire</strong>
        first, then the rest of Mistborn Era 1, then <strong>Warbreaker</strong>, then
        <strong> The Way of Kings</strong>. That order teaches you Sanderson's magic systems, payoff style,
        and Cosmere cross-threading without dropping you into maximum-scale Stormlight too early.
      </p>
      <img
        src={heroImage}
        alt="A comprehensive shelf collection of epic fantasy universe novels and thick high-fantasy series hardcovers."
        className="mb-6 w-full rounded-xl shadow-sm"
      />
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          What is the best Cosmere reading order for someone starting fresh?
        </h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-3 py-3 font-semibold">Step</th>
              <th className="px-3 py-3 font-semibold">Book</th>
              <th className="px-3 py-3 font-semibold">Why Here</th>
            </tr>
          </thead>
          <tbody>
            {order.map(([a, b, c]) => (
              <tr key={b} className="border-b border-gray-100">
                <td className="px-3 py-3 font-semibold">{a}</td>
                <td className="px-3 py-3 font-semibold">{b}</td>
                <td className="px-3 py-3 text-gray-700">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <p className="mb-8 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm leading-relaxed text-indigo-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      {[
        {
          title: 'Mistborn: The Final Empire',
          heading: 'Why is Mistborn: The Final Empire the best place to start the Cosmere?',
          text: 'Because it gives you the cleanest Sanderson tutorial without feeling like homework. The metal-based Allomancy system is easy to visualize, the heist structure creates fast momentum, and the payoff rhythm teaches you the way Sanderson likes to hide rules in plain sight and then cash them out hard.',
          skip: 'Skip this only if you already know you specifically want gigantic ensemble fantasy and have no patience for a more compact on-ramp.',
        },
        {
          title: 'Warbreaker',
          heading: 'When should you read Warbreaker in the Cosmere order?',
          text: 'Warbreaker works best after Mistborn Era 1 and before deep Stormlight because it is a standalone reset with bright color-based magic, political maneuvering, and several Cosmere connections that become more fun when recognized naturally. It also proves Sanderson can write outside the exact Mistborn register.',
          skip: 'Skip this at the very beginning if you want the fastest possible route into the flagship subseries.',
        },
        {
          title: 'The Way of Kings',
          heading: 'Why should The Way of Kings wait until later in the Cosmere order?',
          text: 'The Way of Kings is excellent, but it is a huge trust ask. You are being asked to learn Rosharan terminology, social hierarchy, multiple POVs, and a full-scale epic architecture over a very long opening ramp. Readers who already trust Sanderson’s payoff style usually stay. Readers who start here without that trust often stall.',
          skip: 'Skip this first if a thousand-page setup book sounds more intimidating than exciting.',
        },
      ].map((item) => {
        const href = amazonLink(item.title)
        return (
          <section key={item.title} className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">{item.heading}</h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              <a href={href} target="_blank" rel="noopener nofollow"><strong>{item.title}</strong></a>{' '}
              belongs in this order for a very specific reason, not because fans enjoy making the
              reading path more complicated than it needs to be.
            </p>
            <a href={href} target="_blank" rel="noopener nofollow">
              <img src={`https://dummyimage.com/320x480/e9ecff/1f2937.png&text=${encodeURIComponent(item.title)}`} alt={`${item.title} by Brandon Sanderson cover-style recommendation image`} className="mb-4 w-full max-w-[260px] rounded-xl border border-gray-200" />
            </a>
            <p className="mb-4 leading-relaxed text-gray-700">{item.text}</p>
            <table className="mb-4 w-full border-collapse text-left text-sm">
              <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Why Here</th><th className="px-3 py-3 font-semibold">Why Wait</th></tr></thead>
              <tbody><tr><td className="px-3 py-3 text-gray-700"><ul><li>{item.text}</li></ul></td><td className="px-3 py-3 text-gray-700"><ul><li>{item.skip}</li></ul></td></tr></tbody>
            </table>
            <p className="mb-4 text-amber-900"><strong>Skip this if:</strong> {item.skip}</p>
            <a href={href} target="_blank" rel="noopener nofollow" className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-bold text-white transition hover:bg-indigo-500">
              Click Here to Buy on Amazon
            </a>
          </section>
        )
      })}
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Should you read the Cosmere in publication order?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Only if you enjoy publication archaeology for its own sake. A curated order is better for
          most new readers because the point is to stay excited, not to prove loyalty to chronology.
        </p>
        <p className="leading-relaxed text-gray-700">
          If fantasy series are your broader lane, pair this with
          <strong> <a href="/books/best-fantasy-series-for-adults">best fantasy series for adults</a></strong>.
          For official book-by-book Sanderson bibliography context, use his
          <a href="https://www.brandonsanderson.com/pages/books" target="_blank" rel="noopener nofollow">
            {' '}official books page
          </a>.
        </p>
      </section>
    </main>
  )
}
