import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/books-like-dune-hard-sci-fi'
const heroImage =
  'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80'

const picks = [
  {
    title: 'Hyperion',
    author: 'Dan Simmons',
    label: 'Best if you want literary scale plus many voices',
    description:
      'Hyperion is one of the strongest recommendations for Dune readers who care about scale, atmosphere, and the feeling that a whole civilization is pressing in from the edges of the page. Instead of centering one dynastic line the way Dune does, it uses a pilgrimage structure and multiple voices, but the result is similar in the ways that matter: huge background history, religious pressure, destiny questions, and a world that feels old enough to have scar tissue.',
    whyMatch:
      'It aligns with Dune because both books treat science fiction as civilizational literature, not just adventure plotting. You are reading systems, belief, and historical momentum as much as plot.',
  },
  {
    title: 'A Memory Called Empire',
    author: 'Arkady Martine',
    label: 'Best if imperial politics were the hook',
    description:
      'If what you loved most in Dune was the political intelligence, court maneuvering, and the pressure of being a smaller figure inside a much larger imperial machine, this is the cleanest next pick. Mahit Dzmare arrives inside the Teixcalaanli Empire as both diplomat and outsider, and the novel gets a lot of power from making culture itself feel strategic. It is less mythic than Dune, but it is very strong on empire, status, performance, and how language and power braid together.',
    whyMatch:
      'It matches Dune through imperial tension, political calculation, and the way a protagonist has to survive inside a system bigger than personal desire.',
  },
  {
    title: 'Foundation',
    author: 'Isaac Asimov',
    label: 'Best if civilizational strategy matters more than atmosphere',
    description:
      'Foundation is the better recommendation for readers whose favorite part of Dune was not the desert imagery or messianic intensity but the sense of long-range historical engineering. Hari Seldon’s psychohistory turns civilization itself into the main scale of the story. The emotional texture is cooler than Dune, and the prose is much less lush, but the shared appeal is obvious: both books ask what happens when enormous systems can be predicted, manipulated, or redirected by rare minds.',
    whyMatch:
      'It aligns with Dune because both novels care about history as a force field and about how elite knowledge can change the future of whole societies.',
  },
  {
    title: 'The Left Hand of Darkness',
    author: 'Ursula K. Le Guin',
    label: 'Best if anthropology and politics matter most',
    description:
      'Le Guin is the right turn if Dune made you want more political thought and more culture-level depth, but not necessarily more militarized scale. Genly Ai’s mission on Gethen unfolds through diplomacy, misunderstanding, and the challenge of crossing not just geography but worldview. The book is quieter than Dune and less invested in propulsive empire drama, yet it shares the same respect for world-making as an intellectual act.',
    whyMatch:
      'It matches Dune through serious political imagination, cultural systems, and the sense that environment and society shape consciousness in ways the plot cannot ignore.',
  },
  {
    title: 'Children of Time',
    author: 'Adrian Tchaikovsky',
    label: 'Best if evolution and system-design fascinate you',
    description:
      'Children of Time is the best follow-up for readers who loved Dune as a systems novel. Tchaikovsky is less interested in messianic politics and more interested in evolutionary design, competing intelligences, and how entire species-level stories can feel emotionally legible. The scale is vast, the ideas are serious, and the book trusts readers to enjoy watching a world-model unfold over time.',
    whyMatch:
      'It aligns with Dune because both books reward readers who like ecology, adaptation, and the feeling that a speculative world has rules deeper than the immediate plot.',
  },
] as const

function amazonLink(title: string, author: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`
}

export const metadata: Metadata = {
  title: 'Books Like Dune',
  description:
    'Books like Dune for readers who want political scale, ecology, empire, and science fiction with real civilizational depth.',
  alternates: { canonical: pageUrl },
}

export default function BooksLikeDunePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Books Like Dune</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        If you want books like <strong>Dune</strong>, start with{' '}
        <strong>A Memory Called Empire</strong> if imperial politics and court tension were the main
        draw. If you want another giant-architecture science-fiction experience, choose{' '}
        <strong>Hyperion</strong>. If what you really want is hard-system thinking at civilizational
        scale, <strong>Foundation</strong> is the more direct next step.
      </p>
      <img
        src={heroImage}
        alt="Epic hard science fiction novels and space exploration guides arranged on a minimalist desert sandstone surface."
        className="mb-6 w-full rounded-xl shadow-sm"
      />
      <p className="mb-8 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm leading-relaxed text-blue-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and
        price can change, so confirm before purchasing.
      </p>

      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          What makes Dune such a great book in the first place?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Dune works because it is not only a space epic. It is also a political novel, an ecological
          novel, a religious novel, and a book about power concentrating around myth. Frank Herbert
          built Arrakis so thoroughly that the planet feels like a living pressure system rather than a
          backdrop. The spice economy, the Fremen way of life, the imperial houses, and Paul Atreides’
          rise all fit together as one structure. That level of integration is rare. Readers do not
          just admire Dune for having ideas. They admire it because the ideas are embedded in the world.
        </p>
        <p className="leading-relaxed text-gray-700">
          It also helps that Dune keeps rewarding rereading. The first pass often lands as a survival
          and power story. Later passes tend to bring out the warnings inside it: the danger of
          charismatic leaders, the distortions of prophecy, and the cost of turning people into symbols.
        </p>
      </section>

      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">A few useful Dune facts</h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Author:</strong> Dune was written by <strong>Frank Herbert</strong>.
          </li>
          <li>
            <strong>Publication year:</strong> The novel was first published in <strong>1965</strong>.
          </li>
          <li>
            <strong>Awards:</strong> It shared the first <strong>Nebula Award for Best Novel</strong>
            {' '}and also won the <strong>1966 Hugo Award</strong>.
          </li>
          <li>
            <strong>Why it still matters:</strong> It helped define the high-intelligence end of
            science fiction, where ecology, politics, religion, and empire all matter as much as plot.
          </li>
        </ul>
      </section>

      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Which hard sci-fi books are the best follow-ups to Dune?
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
          What are you really looking for when you ask for books like Dune?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Usually not just “desert planets.” The stronger match signals are political theology,
          ecological system-building, dynastic pressure, imperial struggle, and the sense that
          individuals are moving inside a history larger than themselves. That is why some military
          space opera misses the match while quieter political science fiction succeeds.
        </p>
        <p className="leading-relaxed text-gray-700">
          In other words, the best Dune readalikes do not need to copy Arrakis. They need to share the
          seriousness of the world-model.
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
            <p className="mb-4 leading-relaxed text-gray-700">
              <strong>Author:</strong> {pick.author}
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">{pick.description}</p>
            <div className="mb-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <h3 className="mb-2 text-lg font-bold text-gray-900">Why it aligns with Dune</h3>
              <p className="text-sm leading-relaxed text-gray-700">{pick.whyMatch}</p>
            </div>
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
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Where should you go after this list?</h2>
        <p className="leading-relaxed text-gray-700">
          For the broader giant-book cluster, pair this with{' '}
          <strong>
            <a href="/books/best-sci-fi-doorstoppers-epic-space-opera">
              best sci-fi doorstoppers and epic space opera
            </a>
          </strong>{' '}
          and{' '}
          <strong>
            <a href="/books/best-science-fiction-books">best science fiction books</a>
          </strong>
          . If what you really learned from Dune is that you like world-scale systems more than battles,
          politics-forward science fiction is usually the better next lane than generic action-heavy
          space opera.
        </p>
      </section>
    </main>
  )
}
