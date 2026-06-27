import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'

const pageUrl = 'https://bestpickzone.com/books/best-historical-fiction-books-2026'
const heroImage =
  'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80'

const picks = [
  {
    title: 'Wolf Hall',
    author: 'Hilary Mantel',
    label: 'Best if you want the literary summit',
    description:
      'Hilary Mantel turns Thomas Cromwell into one of the most vivid political minds in modern historical fiction. The novel is dense, intelligent, and intensely alive to power, language, class, and danger inside Henry VIII’s England. It is not the easiest starting point on this list, but for readers who want historical fiction that feels fully literary and psychologically exact, it is still one of the biggest achievements in the genre.',
  },
  {
    title: 'Pachinko',
    author: 'Min Jin Lee',
    label: 'Best broad recommendation for most readers',
    description:
      'Pachinko follows a Korean family across generations as they move through occupation, migration, poverty, discrimination, and survival in Korea and Japan. What makes it work so well for a broad audience is that it is sweeping without becoming cold. Min Jin Lee gives the novel real historical weight, but she never lets the family’s emotional clarity disappear beneath the scale.',
  },
  {
    title: 'The Pillars of the Earth',
    author: 'Ken Follett',
    label: 'Best page-turning epic',
    description:
      'Ken Follett writes historical fiction with the engine of a commercial thriller, and this is still his clearest giant-scale example. Set around the building of a cathedral in twelfth-century England, the novel stacks ambition, faith, class struggle, violence, architecture, and revenge into a book that is very long but rarely inert. If you want an immersive brick that still moves, this is the pick.',
  },
  {
    title: 'The Nightingale',
    author: 'Kristin Hannah',
    label: 'Best emotional WWII-adjacent crossover',
    description:
      'Kristin Hannah’s novel follows two sisters in France during World War II and is built to deliver emotional immediacy rather than cool historical distance. It is one of the strongest crossover recommendations on the list because readers who do not normally think of themselves as historical-fiction readers often still connect with it. The appeal comes from family strain, courage, sacrifice, and very accessible emotional pacing.',
  },
  {
    title: 'The Alice Network',
    author: 'Kate Quinn',
    label: 'Best for readers who want espionage inside historical fiction',
    description:
      'Kate Quinn combines the pleasures of spy fiction with dual-timeline historical storytelling, linking a female spy network in World War I with a post-World War II search story. It is a strong choice for readers who want codes, secrets, mission energy, and women operating under pressure without giving up the emotional rewards of historical fiction. It reads faster than some of the heavier literary entries here, but it still has real historical bite.',
  },
] as const

function amazonLink(title: string, author: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`
}

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best Historical Fiction Books 2026',
  description:
    'Best historical fiction books to read in 2026, now with fuller book descriptions and added context on why Pachinko is such an important novel.',
  alternates: { canonical: pageUrl },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  category: 'books' })

export default function HistoricalFiction2026Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
        Best Historical Fiction Books To Read In 2026
      </h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        The best historical fiction book to read in 2026 for most people is <strong>Pachinko</strong>
        because it balances scope, accessibility, and emotional seriousness better than almost
        anything else in the category. If you want the most acclaimed craft-first answer, start with
        <strong> Wolf Hall</strong>. If you want sheer page-turning momentum in a giant historical
        canvas, start with <strong>The Pillars of the Earth</strong>.
      </p>
      <img
        src={heroImage}
        alt="Classic hardback historical fiction novels arranged beautifully alongside historic maps and traditional writing instruments."
        className="mb-6 w-full rounded-xl shadow-sm"
      />
      <p className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and
        price can change, so confirm before purchasing.
      </p>

      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Which historical fiction books are the best fit in 2026?
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
                    className="font-semibold text-amber-700"
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
          What kind of historical fiction should you choose in 2026?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Choose by reading experience, not just era. <em>Wolf Hall</em> is for readers who want
          political consciousness and prose density. <em>Pachinko</em> is for readers who want a
          family saga that never loses emotional clarity. <em>The Pillars of the Earth</em> is for
          readers who want a brick that still behaves like commercial fiction. <em>The Nightingale</em>
          {' '}is for readers who want fast emotional access rather than a seminar in statecraft.
        </p>
        <p className="leading-relaxed text-gray-700">
          The best lists in this category are not really about declaring one era better than another.
          They are about matching mood, scale, and reading appetite. Some historical fiction is built
          for sentence-level admiration. Some is built for immersion. Some is built for tears. The
          best recommendation depends on which version of history you want to inhabit.
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              {pick.label}
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              <strong>Author:</strong> {pick.author}
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">{pick.description}</p>
            <a
              href={href}
              target="_blank"
              rel="noopener nofollow"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-amber-600 px-6 py-3 text-base font-bold text-white transition hover:bg-amber-500"
            >
              Click Here to Buy on Amazon
            </a>
          </section>
        )
      })}

      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Why is Pachinko so interesting as a historical novel?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          <strong>Pachinko</strong> is interesting because it tells a history many mainstream readers
          do not know well: the experience of Koreans living in Japan across the twentieth century,
          including colonization, migration, labor, poverty, exclusion, and the long afterlife of
          being treated as socially permanent outsiders. The novel moves across generations, which lets
          it show how historical injustice does not stay trapped inside one dramatic moment. It becomes
          inheritance.
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          It is also one of the best examples of historical fiction doing something more than costume
          drama. Min Jin Lee uses family structure to explain history emotionally. You feel what policy,
          prejudice, and displacement do to marriages, children, ambition, and everyday dignity. That
          is why the book lingers. It is not only informative. It is humane.
        </p>
        <p className="leading-relaxed text-gray-700">
          If you are deciding between history and more literary-fiction crossover, compare this with{' '}
          <strong>
            <a href="/books/genre-fiction/best-history-books-for-beginners">
              best history books for beginners
            </a>
          </strong>{' '}
          and{' '}
          <strong>
            <a href="/books/genre-fiction/best-world-war-ii-books">
              best books about World War II
            </a>
          </strong>
          .
        </p>
      </section>
    </main>
  )
}
