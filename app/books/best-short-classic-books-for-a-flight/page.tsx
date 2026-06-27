import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'

const pageUrl = 'https://bestpickzone.com/books/best-short-classic-books-for-a-flight'
const heroImage =
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'

const picks = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    label: 'Best overall flight classic',
    fit: 'Readers who want glamour, sharp prose, and a novel that feels complete without needing a huge time commitment.',
    description:
      'Nick Carraway arrives on Long Island and gets pulled into the shimmering orbit of Jay Gatsby, a self-made man whose parties, mystique, and devotion to Daisy Buchanan conceal a much sadder emotional engine. The plot is simple enough to survive interruptions, but the book never feels slight. Every chapter keeps returning to longing, reinvention, class performance, and the American habit of confusing beauty with destiny.',
    authorContext:
      'Fitzgerald wrote with an unusual mix of elegance and damage. He is still the great novelist of American glamour gone hollow, and Gatsby remains the cleanest example of his ability to make style itself feel tragic.',
    flightWhy:
      'It is short, vivid, and easy to re-enter after pauses. Even if a flight gets broken up by boarding, snacks, or gate delays, the book’s scenes are memorable enough that you do not lose the thread.',
  },
  {
    title: 'The Stranger',
    author: 'Albert Camus',
    label: 'Best if you want philosophical cool and speed',
    fit: 'Readers who want something clean, unsettling, and intellectually charged without a lot of narrative sprawl.',
    description:
      'Camus opens with one of the most famous detached voices in twentieth-century literature and never lets it become comfortable. Meursault’s emotional distance, the murder at the center of the novel, and the courtroom logic that follows create a book that is both story and philosophical provocation. It moves quickly, but it keeps deepening after the fact because the question is not only what happens, but what sort of person the world can tolerate.',
    authorContext:
      'Camus sits near the center of modern existential literature, but The Stranger works even for readers who do not care about philosophy as a category. His gift here is compression: the ideas do not sit on top of the novel, they move through it.',
    flightWhy:
      'The sentences are spare, the structure is tight, and the book creates immediate forward pull. It is ideal if you want something serious that still reads quickly in transit.',
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    label: 'Best emotional punch in a small page count',
    fit: 'Readers who want a complete emotional experience in very few pages and do not mind a heartbreaking finish.',
    description:
      'George and Lennie drift through Depression-era California looking for work and holding onto a shared dream of land, shelter, and dignity. The novel is small in scale but enormous in emotional force because Steinbeck never writes their hope as decorative innocence. He writes it as something structurally fragile from the beginning. That is why the ending lands so hard. You feel the whole American pressure system around them long before the final blow arrives.',
    authorContext:
      'Steinbeck was one of the great American writers of labor, class, and ordinary human endurance. Even in this compressed novel, his gift for plainspoken moral weight is obvious.',
    flightWhy:
      'It is brief enough to finish on a short flight and emotionally direct enough that you never have to struggle to get back into its rhythm after an interruption.',
  },
  {
    title: 'The Metamorphosis',
    author: 'Franz Kafka',
    label: 'Best if you want unsettling strangeness',
    fit: 'Readers who want something genuinely weird, symbolic, and memorable without needing a long read.',
    description:
      'Gregor Samsa wakes to find himself transformed into a giant insect, but the lasting shock of the novella is not the premise alone. It is the speed with which family obligation, shame, utility, and rejection reorganize themselves around the transformation. Kafka turns absurdity into a way of seeing ordinary social cruelty more clearly. That is why the novella feels both bizarre and brutally recognizable.',
    authorContext:
      'Kafka’s influence is so large that “Kafkaesque” became its own adjective, but The Metamorphosis is still the easiest way to understand why. He had a rare ability to make bureaucratic and domestic dread feel surreal without becoming abstract.',
    flightWhy:
      'If you want a plane read that feels intellectually alive and impossible to confuse with anything else, this is the pick. Its premise is unforgettable, which makes it easy to resume mid-flight if needed.',
  },
  {
    title: 'A Room with a View',
    author: 'E. M. Forster',
    label: 'Best if you want something lighter and elegant',
    fit: 'Readers who want wit, romance, travel atmosphere, and a classic that feels graceful rather than punishing.',
    description:
      'Lucy Honeychurch travels to Italy, encounters a freer emotional world than the one waiting for her back in England, and has to decide what kind of life she is actually willing to claim. The novel has charm, but it is not empty charm. Forster uses drawing rooms, holidays, and social conventions to ask serious questions about repression, sincerity, and the costs of choosing safety over aliveness.',
    authorContext:
      'Forster is one of the great novelists of social pressure and inner awakening. His books often look refined on the surface while quietly dismantling the moral stiffness of the world around them.',
    flightWhy:
      'It works beautifully on a flight because it is emotionally bright, scene-driven, and easy to carry in your head. It feels like a real literary experience without demanding heavy concentration from beginning to end.',
  },
] as const

function amazonLink(title: string, author: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`
}

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best Short Classic Books For A Flight',
  description:
    'Best short classic books for a flight, with fuller story descriptions, writer background, and the smartest picks for different reading moods.',
  alternates: { canonical: pageUrl },
}, { category: 'books' })

export default function ShortClassicsFlightPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
        Best Short Classic Books For A Flight
      </h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        The best short classic book for a flight is <strong>The Great Gatsby</strong> because it is
        brief, vivid, and easy to re-enter after interruptions while still feeling like a full literary
        experience. If you want something colder and more philosophical, start with{' '}
        <strong>The Stranger</strong>. If you want the strongest emotional hit in the fewest pages,
        choose <strong>Of Mice and Men</strong>.
      </p>
      <img
        src={heroImage}
        alt="A neat travel luggage configuration showing lightweight pocket classic books and travel gear packed for a flight."
        className="mb-6 w-full rounded-xl shadow-sm"
      />
      <p className="mb-8 rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm leading-relaxed text-yellow-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and
        price can change, so confirm before purchasing.
      </p>

      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Which short classic books work best on a flight?
        </h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-3 py-3 font-semibold">Book</th>
              <th className="px-3 py-3 font-semibold">Author</th>
              <th className="px-3 py-3 font-semibold">Best For</th>
              <th className="px-3 py-3 font-semibold">Amazon</th>
            </tr>
          </thead>
          <tbody>
            {picks.map((pick) => (
              <tr key={pick.title} className="border-b border-gray-100 align-top">
                <td className="px-3 py-3 font-semibold text-gray-900">{pick.title}</td>
                <td className="px-3 py-3 text-gray-700">{pick.author}</td>
                <td className="px-3 py-3 text-gray-700">{pick.label}</td>
                <td className="px-3 py-3">
                  <a
                    href={amazonLink(pick.title, pick.author)}
                    target="_blank"
                    rel="noopener nofollow"
                    className="font-semibold text-yellow-700"
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
          What makes a classic work especially well on a flight?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          You need compression, clean re-entry, and enough sentence-level appeal that airport
          interruptions do not break the book’s spell. The best flight classics are not merely short.
          They are portable in attention terms. Gatsby can survive drink-cart interruptions. The
          Stranger can survive gate delays. A very long Victorian novel usually cannot.
        </p>
        <p className="leading-relaxed text-gray-700">
          The other thing that matters is closure. A good flight book gives you either a complete
          experience in one sitting or a structure so clean that stopping and restarting never feels
          like work. That is where these books outperform longer classics that may be greater in the
          abstract but much worse in transit.
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-700">
              {pick.label}
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">{pick.description}</p>
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-yellow-100 bg-yellow-50 p-4">
                <h3 className="mb-2 text-lg font-bold text-gray-900">About the writer</h3>
                <p className="text-sm leading-relaxed text-gray-700">{pick.authorContext}</p>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Why it works on a flight</h3>
                <p className="text-sm leading-relaxed text-gray-700">{pick.flightWhy}</p>
              </div>
            </div>
            <p className="mb-4 leading-relaxed text-gray-700">
              Best for <strong>{pick.fit.toLowerCase()}</strong>
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener nofollow"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-yellow-600 px-6 py-3 text-base font-bold text-white transition hover:bg-yellow-500"
            >
              Click Here to Buy on Amazon
            </a>
          </section>
        )
      })}

      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Should you pick a short classic instead of a contemporary novel for travel?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          If your goal is pure ease, not always. But short classics are often better than people
          remember at giving you a full emotional or intellectual experience in limited time. They are
          compact because the writing has already done the sorting. You are getting the book after the
          bloat has been burned off.
        </p>
        <p className="leading-relaxed text-gray-700">
          If this is really a travel-mood question rather than a classics question, pair it with{' '}
          <strong>
            <a href="/books/genre-fiction/best-beach-reads">best beach reads</a>
          </strong>{' '}
          and{' '}
          <strong>
            <a href="/books/books-like-it-ends-with-us">books like It Ends With Us</a>
          </strong>{' '}
          if you want something more contemporary instead.
        </p>
      </section>
    </main>
  )
}
