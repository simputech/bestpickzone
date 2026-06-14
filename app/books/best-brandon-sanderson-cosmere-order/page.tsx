import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/best-brandon-sanderson-cosmere-order'
const heroImage =
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80'

const order = [
  ['1', 'Mistborn: The Final Empire', 'Best starting point because the magic is immediately legible and the plot moves.'],
  ['2', 'The Well of Ascension', 'Stay with Era 1 while the political consequences still feel fresh.'],
  ['3', 'The Hero of Ages', 'Finish the first trilogy before branching into the wider universe.'],
  ['4', 'Warbreaker', 'Best standalone bridge before Stormlight gets huge and reference-heavy.'],
  ['5', 'The Way of Kings', 'Start Stormlight only after you trust Sanderson with a very long runway.'],
  ['6', 'Words of Radiance', 'Read once Roshar has clicked and you want the bigger payoff.'],
  ['7', 'Mistborn Era 2', 'Best later pivot when you want a looser, funnier, more experimental tone.'],
] as const

const books = [
  {
    title: 'Mistborn: The Final Empire',
    author: 'Brandon Sanderson',
    label: 'Best first Cosmere book',
    fit: 'Readers who want the cleanest on-ramp into Sanderson without starting with a thousand-page commitment.',
    whyNow:
      'Vin, Kelsier, and the allomancy system give you the essential Sanderson experience in a compact, high-momentum shape. The heist frame keeps the book moving while the magic rules train you to read his fiction the way it wants to be read: watch the setup, trust the logic, then enjoy the payoff when pieces snap together.',
    description:
      'This is still the smartest entry point because it gives you a complete-feeling story while quietly teaching you how the Cosmere thinks. The ash-covered empire, steel-and-mist atmosphere, and rebellion plot are memorable on their own, but the real value is structural. Sanderson introduces powers one step at a time, lets the reader feel clever for keeping up, and then uses that trust to land bigger revelations later. If someone tells you they bounced off Stormlight, this is often the book that gets them back in.',
    skipIf:
      'Skip this first only if you already know you specifically want giant military fantasy, multiple armies, and the widest-possible cast right away.',
  },
  {
    title: 'The Well of Ascension',
    author: 'Brandon Sanderson',
    label: 'Best political sequel in the order',
    fit: 'Readers who liked the first Mistborn book and want to see what happens after the revolution instead of pretending victory ends the hard part.',
    whyNow:
      'Era 1 works best as a continuous read. The second book slows the action slightly and expands the politics, siege pressure, and religious uncertainty that the first novel only had room to hint at.',
    description:
      'This is the book that convinces readers Sanderson is not only good at endings. It asks what comes after the charismatic overthrow, when charismatic speeches are no longer enough and governance becomes ugly, uncertain work. Vin is still central, but the book opens the moral and strategic space around her. If you stop after book one, you get the gateway Sanderson. If you continue here, you start to understand the scale of his ambition.',
    skipIf:
      'Wait on this only if you are sampling the Cosmere without committing to a trilogy yet.',
  },
  {
    title: 'The Hero of Ages',
    author: 'Brandon Sanderson',
    label: 'Best payoff volume before you branch out',
    fit: 'Readers who want proof that the long setup was worth it and that Sanderson can cash out a world-sized puzzle cleanly.',
    whyNow:
      'The first Mistborn trilogy should be finished before you hop into other branches because so much of your understanding of Cosmere mechanics, religion, memory, and hidden structure sharpens here.',
    description:
      'The Hero of Ages is where Sanderson’s reputation for endings becomes unavoidable. Threads that felt merely atmospheric earlier suddenly matter, and the trilogy reveals how carefully it was engineered from the start. The book is apocalyptic without becoming shapeless. It keeps its emotional core on Vin, Elend, Sazed, and belief under pressure, while still delivering the kind of large-scale resolution fans talk about years later. If your plan is to read only one Sanderson trilogy, this is why people tell you not to stop at book one.',
    skipIf:
      'Do not skip it if you have already read the first two. This is the book that justifies the order.',
  },
  {
    title: 'Warbreaker',
    author: 'Brandon Sanderson',
    label: 'Best standalone bridge',
    fit: 'Readers who want a break from Mistborn’s ash-gray intensity before starting Stormlight, but still want something recognizably Cosmere.',
    whyNow:
      'Warbreaker is the ideal palette cleanser because it proves Sanderson can work in a brighter, more courtly, and more playful register while still building a rigorous magic system and rewarding attentive readers.',
    description:
      'A lot of readers treat Warbreaker like optional homework before Stormlight, but that undersells what makes it enjoyable. The color-based BioChromatic magic is tactile and easy to picture, the Siri and Vivenna contrast gives the book strong forward pull, and the political maneuvering is lighter on the surface than Mistborn while still full of hidden pressure. It also enriches later Cosmere reading in a way that feels organic rather than checklist-driven. That matters. A bridge book should refresh your enthusiasm, not feel like a chore.',
    skipIf:
      'Skip it temporarily if your only goal is to reach Stormlight as fast as possible.',
  },
  {
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    label: 'Best first Stormlight book',
    fit: 'Readers who are ready for immense worldbuilding, layered politics, and a slower opening that pays off much later.',
    whyNow:
      'This is where you go once you trust Sanderson enough to follow him through a long setup phase. Reading it after Mistborn Era 1 and Warbreaker gives you that trust plus enough Cosmere fluency that the scale feels exciting rather than alienating.',
    description:
      'The Way of Kings is often recommended because it is arguably Sanderson’s flagship achievement, but it is not his easiest sell. Kaladin’s arc is emotionally heavy, Shallan’s chapters initially feel like they belong to a different book, and Roshar asks you to absorb terminology, ecology, religion, warfare, and history at the same time. That is why order matters. Once you reach it with a little Sanderson confidence behind you, the book feels expansive and immersive instead of merely long. For many readers, this is the point where fandom turns into devotion.',
    skipIf:
      'Wait if you are still unsure whether you enjoy Sanderson’s prose, pacing, or rules-first magic style.',
  },
  {
    title: 'Words of Radiance',
    author: 'Brandon Sanderson',
    label: 'Best “now you are really in” volume',
    fit: 'Readers who liked The Way of Kings and want the sharper, more rewarding follow-up where the groundwork starts turning into propulsion.',
    whyNow:
      'This belongs immediately after The Way of Kings because Stormlight strengthens through continuity. Character investment, faction tension, and revelation all hit harder when book one is still fresh.',
    description:
      'Many fans think this is where Stormlight stops being impressive and starts being addictive. The major relationships are more alive, the action is cleaner, and the book knows when to accelerate. It keeps the same huge architecture as The Way of Kings, but the emotional and narrative movement is noticeably stronger. If book one sold you on Roshar’s potential, book two makes Roshar feel inhabited. It is the right moment to stay in Stormlight rather than bouncing back out to sample something else.',
    skipIf:
      'Only wait if The Way of Kings did not work for you. If it did, do not interrupt the momentum.',
  },
  {
    title: 'Mistborn Era 2',
    author: 'Brandon Sanderson',
    label: 'Best later tonal shift',
    fit: 'Readers who want the Cosmere to loosen up a little after the solemn grandeur of Era 1 and early Stormlight.',
    whyNow:
      'Era 2 works better once you have the emotional memory of Era 1 in your head. The contrast is part of the fun: smaller scale, more banter, stranger genre blending, and a world that has actually moved on.',
    description:
      'Wax and Wayne books are not the place to start, because part of their charm comes from feeling like a later-world answer to the myths and costs of the original trilogy. They mix western energy, detective mechanics, and Cosmere tinkering in a way that makes Sanderson feel lighter on his feet. Readers who worry the universe will become too solemn often find this subseries refreshing. It reminds you that shared-world fantasy can expand sideways as well as upward.',
    skipIf:
      'Wait if you have not finished Mistborn Era 1. The emotional and thematic echo is worth preserving.',
  },
] as const

function amazonLink(title: string, author: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`
}

export const metadata: Metadata = {
  title: 'Best Brandon Sanderson Cosmere Order',
  description:
    'Best Brandon Sanderson Cosmere order for new readers, including where to start, when to read Warbreaker, and why Stormlight should wait.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Best Brandon Sanderson Cosmere Order',
    description:
      'A smarter Cosmere reading order for new readers who want a strong first book and a path that keeps momentum high.',
    url: pageUrl,
    type: 'article',
  },
}

export default function CosmereOrderPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
        Best Brandon Sanderson Cosmere Order
      </h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        The best Brandon Sanderson Cosmere order for most new readers is{' '}
        <strong>Mistborn: The Final Empire</strong>, then the rest of Mistborn Era 1, then{' '}
        <strong>Warbreaker</strong>, then <strong>The Way of Kings</strong>. That sequence is better
        than strict publication order because it teaches you Sanderson’s payoff style early, keeps the
        reading momentum high, and saves the biggest trust ask, Stormlight, for when you already know
        this author is going to deliver.
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
            {order.map(([step, book, why]) => (
              <tr key={book} className="border-b border-gray-100 align-top">
                <td className="px-3 py-3 font-semibold">{step}</td>
                <td className="px-3 py-3 font-semibold text-gray-900">{book}</td>
                <td className="px-3 py-3 text-gray-700">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <p className="mb-8 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm leading-relaxed text-indigo-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and
        price can change, so confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Why is curated order better than publication order for the Cosmere?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Because most readers are not trying to earn a badge. They are trying to stay excited. Pure
          publication order gives you historical neatness, but it does not always give you the best
          reading experience. The Cosmere is now broad enough that the smarter question is not “what
          came out first?” but “what makes this reader want to keep going?” Starting with the strongest
          gateway book and building upward from there is simply better at turning curiosity into
          momentum.
        </p>
        <p className="leading-relaxed text-gray-700">
          The other reason curated order works is trust. Stormlight asks for a lot before it gives a
          lot. Mistborn asks for less and proves the author can land the plane. Once that trust exists,
          the gigantic books stop feeling risky and start feeling inviting.
        </p>
      </section>
      {books.map((book) => {
        const href = amazonLink(book.title, book.author)
        return (
          <section
            key={book.title}
            className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {book.title}
            </h2>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">
              {book.label}
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              <a href={href} target="_blank" rel="noopener nofollow">
                <strong>{book.title}</strong>
              </a>{' '}
              is best for <strong>{book.fit.toLowerCase()}</strong>
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">{book.description}</p>
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Why read it here</h3>
                <p className="text-sm leading-relaxed text-gray-700">{book.whyNow}</p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Skip this if</h3>
                <p className="text-sm leading-relaxed text-gray-700">{book.skipIf}</p>
              </div>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener nofollow"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-base font-bold text-white transition hover:bg-indigo-500"
            >
              Click Here to Buy on Amazon
            </a>
          </section>
        )
      })}
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          What if you only want one Brandon Sanderson series?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          If you want one complete, satisfying Sanderson experience without taking on the whole
          universe, read Mistborn Era 1 and stop there for now. It gives you his strengths in a shape
          that feels finished. If you already know you love doorstopper fantasy and want the fullest
          possible version of Sanderson, then Stormlight is the destination, but it is still not the
          best first stop for most people.
        </p>
        <p className="leading-relaxed text-gray-700">
          If fantasy recommendations are your broader lane, pair this page with{' '}
          <strong>
            <a href="/books/best-fantasy-series-for-adults">best fantasy series for adults</a>
          </strong>
          . For official bibliography context, Sanderson’s{' '}
          <a
            href="https://www.brandonsanderson.com/pages/books"
            target="_blank"
            rel="noopener nofollow"
          >
            books page
          </a>{' '}
          is the cleanest source.
        </p>
      </section>
    </main>
  )
}
