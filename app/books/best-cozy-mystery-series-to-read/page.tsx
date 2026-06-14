import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/best-cozy-mystery-series-to-read'
const heroImage =
  'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&fit=crop&w=800&q=80'

const picks = [
  {
    title: 'Still Life',
    author: 'Louise Penny',
    label: 'Best overall series starter',
    fit: 'Readers who want warmth, strong prose, village atmosphere, and a series that can grow richer over time.',
    description:
      'Still Life is the best first cozy-mystery recommendation because it delivers comfort without becoming weightless. Chief Inspector Gamache arrives in Three Pines to investigate a suspicious death, but the real hook is the community itself. Penny writes the village with affection and enough tension to keep it from feeling fake. You finish the book not only curious about the crime, but wanting to spend more time with the place and the people inside it. That is exactly what a great long-running cozy series needs to do.',
    whyRead:
      'It is cozy enough to soothe but substantial enough to satisfy readers who still want a real novel rather than a decorative formula.',
    skipIf:
      'Skip this first if you want lighter humor and less emotional depth around the crime.',
  },
  {
    title: 'Chocolate Chip Cookie Murder',
    author: 'Joanne Fluke',
    label: 'Best food-cozy gateway',
    fit: 'Readers who want recipes, bakery charm, and a series that feels openly comfort-first.',
    description:
      'Joanne Fluke understands the dessert side of the genre better than almost anyone. Hannah Swensen’s bakery setting, small-town routine, and recurring cast make the book feel like a familiar ritual even when you are just starting. The mystery is there, but the real value is the texture: food, gossip, local business, family friction, and the pleasure of dropping into a world built to be revisited. If your ideal cozy is genuinely cozy, this is an easy gateway.',
    whyRead:
      'It is one of the cleanest examples of the culinary-cozy lane and sets reader expectations immediately.',
    skipIf:
      'Skip this if recipes and food-centered scenes sound like padding rather than pleasure.',
  },
  {
    title: 'The Thursday Murder Club',
    author: 'Richard Osman',
    label: 'Best witty modern ensemble',
    fit: 'Readers who want a newer series with fast banter, emotional accessibility, and a cast that feels instantly marketable.',
    description:
      'Richard Osman’s breakout hit works because it treats its elderly amateur sleuths as smart, funny, and strategically underestimated. The retirement-village setting gives the series a built-in social ecosystem, while the humor keeps the pages moving even when the investigation is doing setup work. It is cozy, but it is not twee. There is enough melancholy underneath the jokes to keep the story human, which is a big reason so many non-cozy readers end up liking it.',
    whyRead:
      'It is the best entry for readers who think classic cozies sound appealing in theory but want a more contemporary, breezy rhythm.',
    skipIf:
      'Skip this if you want more formal clue-plot architecture and less overt charm.',
  },
  {
    title: 'A Morbid Taste for Bones',
    author: 'Ellis Peters',
    label: 'Best historical cozy starter',
    fit: 'Readers who want monastery life, medieval setting, and a series with a calmer, older-school intelligence.',
    description:
      'Brother Cadfael remains one of the great historical cozy creations because he combines herbalist knowledge, spiritual gravity, and detective patience without feeling gimmicky. The medieval setting is not mere wallpaper. It shapes motive, status, belief, and danger in every chapter. If modern cupcake-shop cozies are not your thing, this is the series that proves the subgenre can reach backward into history and still provide the same reassuring return-to-world feeling.',
    whyRead:
      'It broadens the idea of what cozy can be while keeping the core pleasures intact: place, recurring sleuth, and humane problem-solving.',
    skipIf:
      'Skip this if you want the lightest possible tone and no historical texture to learn along the way.',
  },
  {
    title: 'The No. 1 Ladies’ Detective Agency',
    author: 'Alexander McCall Smith',
    label: 'Best gentle comfort read',
    fit: 'Readers who want mystery with empathy, observation, and a calmer pace than most crime fiction.',
    description:
      'This series leans farther toward gentle detection than puzzle-box suspense, which is exactly why it has such loyal readers. Mma Ramotswe’s cases are often modest in scale, but the books are rich in character, moral texture, and social observation. If your idea of a great recurring mystery series is one that leaves you feeling steadier rather than more adrenalized, this is one of the best choices in the whole category.',
    whyRead:
      'It is comfort reading in the best sense: attentive, humane, and built around the pleasure of spending time with a wise central figure.',
    skipIf:
      'Skip this if you want murder to be the engine every time rather than a broader detective-story sensibility.',
  },
] as const

function amazonLink(title: string, author: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`
}

export const metadata: Metadata = {
  title: 'Best Cozy Mystery Series To Read',
  description:
    'Best cozy mystery series to read, including the strongest place to start for village mysteries, culinary cozies, and witty modern ensemble picks.',
  alternates: { canonical: pageUrl },
}

export default function CozyMysterySeriesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
        Best Cozy Mystery Series To Read
      </h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        The best cozy mystery series to read first is <strong>Still Life</strong> if you want warmth,
        intelligence, and a village you will actually want to revisit. If you want something breezier
        and more openly comfort-first, start with <strong>Chocolate Chip Cookie Murder</strong>. If
        you want a newer series with comic timing and quick chemistry, move to{' '}
        <strong>The Thursday Murder Club</strong>.
      </p>
      <img
        src={heroImage}
        alt="A comforting indoor scene of cozy mystery paperbacks resting next to a warm beverage and soft winter blanket."
        className="mb-6 w-full rounded-xl shadow-sm"
      />
      <p className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-relaxed text-emerald-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and
        price can change, so confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Which cozy mystery series should you start with first?
        </h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-3 py-3 font-semibold">Series opener</th>
              <th className="px-3 py-3 font-semibold">Best For</th>
              <th className="px-3 py-3 font-semibold">Amazon</th>
            </tr>
          </thead>
          <tbody>
            {picks.map((pick) => (
              <tr key={pick.title} className="border-b border-gray-100 align-top">
                <td className="px-3 py-3 font-semibold text-gray-900">{pick.title}</td>
                <td className="px-3 py-3 text-gray-700">{pick.label}</td>
                <td className="px-3 py-3">
                  <a
                    href={amazonLink(pick.title, pick.author)}
                    target="_blank"
                    rel="noopener nofollow"
                    className="font-semibold text-emerald-700"
                  >
                    Find on Amazon
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          What makes a cozy mystery series worth sticking with?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          The puzzle matters, but recurring atmosphere matters more. Great cozy series give you a
          place you want to return to, a sleuth whose company is a pleasure, and a supporting cast
          that can carry future installments without turning into cardboard. The murder is the weekly
          problem. The community is the real product.
        </p>
        <p className="leading-relaxed text-gray-700">
          That is why readers often divide on cozies that look similar on paper. One series may have
          stronger clues, but another has a better village, funnier friendships, or a central character
          you miss when the book is over. In a long-form recommendation, that difference matters more
          than a single plot summary ever can.
        </p>
      </section>
      {picks.map((pick) => {
        const href = amazonLink(pick.title, pick.author)
        return (
          <section
            key={pick.title}
            className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">{pick.title}</h2>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              {pick.label}
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">{pick.description}</p>
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Why start here</h3>
                <p className="text-sm leading-relaxed text-gray-700">{pick.whyRead}</p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Skip this if</h3>
                <p className="text-sm leading-relaxed text-gray-700">{pick.skipIf}</p>
              </div>
            </div>
            <p className="mb-4 leading-relaxed text-gray-700">
              Best for <strong>{pick.fit.toLowerCase()}</strong>
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener nofollow"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-base font-bold text-white transition hover:bg-emerald-500"
            >
              Click Here to Buy on Amazon
            </a>
          </section>
        )
      })}
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          What should you read next if you like these series?
        </h2>
        <p className="leading-relaxed text-gray-700">
          If you want the broader detective-series lane, pair this page with{' '}
          <strong>
            <a href="/books/best-mystery-series">best mystery series</a>
          </strong>
          . If you want something more classic and clue-driven, add{' '}
          <strong>
            <a href="/books/agatha-christie-hercule-poirot-in-order">
              Hercule Poirot in order
            </a>
          </strong>
          . Cozy readers who also like seasonal mood pages should eventually branch into more specific
          sub-lists, but this set is the strongest place to begin.
        </p>
      </section>
    </main>
  )
}
