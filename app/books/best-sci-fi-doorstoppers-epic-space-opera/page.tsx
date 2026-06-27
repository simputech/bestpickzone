import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'

const pageUrl = 'https://bestpickzone.com/books/best-sci-fi-doorstoppers-epic-space-opera'
const heroImage =
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80'

const picks = [
  {
    title: 'Dune',
    author: 'Frank Herbert',
    label: 'Best all-around starting point',
    fit: 'Readers who want politics, prophecy, ecology, and a classic that still feels immense without becoming unreadable.',
    description:
      'Dune is still the safest recommendation because it balances scale with shape. Arrakis feels huge, but the story itself stays legible through Paul, Jessica, the Atreides fall, and the struggle over spice and power. It gives you dynastic politics, worldbuilding density, and philosophical ambition without demanding that you already enjoy fourteen-volume commitment culture. For many readers, it is the ideal first “big sci-fi” because it feels serious, strange, and canonical all at once.',
    whyRead:
      'It proves what a doorstopper is supposed to do: use length to deepen a world rather than simply stretching one plot longer.',
    skipIf:
      'Skip this first only if you know you dislike prophecy-heavy mythmaking and want something more contemporary in voice.',
  },
  {
    title: 'Leviathan Wakes',
    author: 'James S. A. Corey',
    label: 'Best modern gateway',
    fit: 'Readers who want a faster, more cinematic entry into space opera without giving up political scale.',
    description:
      'Leviathan Wakes is the best recommendation for readers who say they want epic scale but are nervous about older, denser classics. The alternating detective and ship-crew structure gives the book immediate traction. Earth, Mars, and the Belt all feel politically distinct, the prose moves, and the wider-series promise is obvious without overwhelming the first volume. It is long enough to feel substantial and modern enough to convert readers who do not want their gateway book to feel like homework.',
    whyRead:
      'It brings huge-world appetite together with bingeable pacing, which is why it works so well as an entry point.',
    skipIf:
      'Skip this if you specifically want the most literary or idea-forward option rather than the most accessible one.',
  },
  {
    title: 'Pandora’s Star',
    author: 'Peter F. Hamilton',
    label: 'Best giant-scale sprawl pick',
    fit: 'Readers who truly mean enormous when they say enormous and want interstellar civilization, multiple threads, and lots of runway.',
    description:
      'Pandora’s Star is what you hand to someone whose request is not “best long sci-fi novel,” but “give me something massive.” Hamilton loves infrastructure, wormhole civilization, sprawling casts, and the pleasure of seeing an entire future system operate. The size is the point. When it works, it feels like you are inhabiting a civilization rather than merely reading a plot. That makes it exhilarating for the right reader and exhausting for the wrong one.',
    whyRead:
      'It is one of the purest “I want a giant universe to live inside for a while” recommendations in the lane.',
    skipIf:
      'Skip this if narrative economy matters to you more than scale and world-detail abundance.',
  },
  {
    title: 'A Fire Upon the Deep',
    author: 'Vernor Vinge',
    label: 'Best idea-dense space opera',
    fit: 'Readers who want conceptually strange science fiction where cosmology and intelligence itself feel up for grabs.',
    description:
      'A Fire Upon the Deep earns its place because it expands the mental horizon of the category. The Zones of Thought concept alone gives the book a scale that is not just military or geographic, but civilizational and epistemic. It is still adventurous and dramatic, but the deeper pleasure comes from how strange and alive the universe feels. Readers who want a giant book that also stretches the idea of what science fiction can imagine tend to rank this one very high.',
    whyRead:
      'It gives you grandeur through ideas, not only page count or fleets.',
    skipIf:
      'Skip this if you want the cleanest emotional through-line and the least conceptual friction.',
  },
  {
    title: 'The Reality Dysfunction',
    author: 'Peter F. Hamilton',
    label: 'Best maximalist commitment pick',
    fit: 'Readers who are not scared by bloat, multiple factions, and an author who genuinely wants to give you too much on purpose.',
    description:
      'This is not the recommendation for every reader, but it absolutely belongs on a serious doorstopper list because it represents the maximalist wing of the genre. The Night’s Dawn setup is huge, messy, ambitious, and often intoxicating if you are the kind of reader who wants abundance over neatness. If you love being submerged in a gigantic speculative system with several competing pressures at once, it can be a feast. If you do not, it can feel like punishment.',
    whyRead:
      'It is for readers who want the genre turned all the way up and are willing to trade discipline for excess.',
    skipIf:
      'Skip this if you are looking for the most elegant or tightly controlled choice on the list.',
  },
] as const

function amazonLink(title: string, author: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`
}

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best Sci-Fi Doorstoppers And Epic Space Opera',
  description:
    'Best sci-fi doorstoppers and epic space opera books for readers who want serious scale, politics, and immersive long-form storytelling.',
  alternates: { canonical: pageUrl },
}, { category: 'books' })

export default function SpaceOperaDoorstoppersPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
        Best Sci-Fi Doorstoppers And Epic Space Opera
      </h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        If you want the best sci-fi doorstopper that still works as a first major commitment, start
        with <strong>Dune</strong>. If you want a more modern and faster-moving gateway, go with{' '}
        <strong>Leviathan Wakes</strong>. If your actual request is “give me the biggest possible
        interstellar sprawl,” that is when you reach for <strong>Pandora’s Star</strong>.
      </p>
      <img
        src={heroImage}
        alt="An array of massive space opera novels and heavy, high-page-count science fiction doorstopper books."
        className="mb-6 w-full rounded-xl shadow-sm"
      />
      <p className="mb-8 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm leading-relaxed text-blue-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and
        price can change, so confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Which epic space opera doorstopper should you start with?
        </h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-3 py-3 font-semibold">Book</th>
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
                    className="font-semibold text-blue-700"
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
          What separates a great sci-fi doorstopper from a merely long one?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Scale alone is not enough. The best giant science-fiction novels keep generating new forms
          of pressure as they expand: political fracture, scientific revelation, religious conflict,
          alien otherness, institutional breakdown, or technological awe. If the page count only adds
          repetition, the book becomes labor. If the scale keeps changing the stakes, the length starts
          to feel like oxygen.
        </p>
        <p className="leading-relaxed text-gray-700">
          That is why these books are not interchangeable. Some are ideal first doorstoppers. Others
          are better once you already know you enjoy the form. Recommendation quality here depends on
          matching the reader’s appetite, not merely naming famous long books.
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              {pick.label}
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">{pick.description}</p>
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Why read it</h3>
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
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-base font-bold text-white transition hover:bg-blue-600"
            >
              Click Here to Buy on Amazon
            </a>
          </section>
        )
      })}
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Where should you go after this list?
        </h2>
        <p className="leading-relaxed text-gray-700">
          If you want the broader science-fiction lane, pair this page with{' '}
          <strong>
            <a href="/books/best-science-fiction-books">best science fiction books</a>
          </strong>
          . If your reading appetite crosses over into equally massive fantasy, move next to{' '}
          <strong>
            <a href="/books/best-fantasy-series-for-adults">best fantasy series for adults</a>
          </strong>
          . Readers who discover they prefer political or idea-dense science fiction over pure bulk can
          then narrow further from there.
        </p>
      </section>
    </main>
  )
}
