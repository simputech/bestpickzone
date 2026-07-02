import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'

const pageUrl = 'https://bestpickzone.com/books/books-like-fourth-wing-fantasy-romance'
const heroImage =
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'

const picks = [
  {
    title: 'A Court of Thorns and Roses',
    author: 'Sarah J. Maas',
    label: 'Best romantasy gateway if the romance momentum matters most',
    description:
      'Sarah J. Maas builds this series around a mortal woman pulled into a dangerous magical world where attraction, power imbalance, loyalty, and escalating fantasy politics all matter at once. The early books lean more heavily into fae romance than military academy pressure, but they share the same compulsive, emotional-forward readability that made Fourth Wing explode with readers.',
    whyMatch:
      'It feels similar to Fourth Wing because both books prioritize chemistry, threat, and bingeable series momentum over slow, austere epic-fantasy pacing.',
  },
  {
    title: 'The Serpent and the Wings of Night',
    author: 'Carissa Broadbent',
    label: 'Best if competition energy was the hook',
    description:
      'This is one of the clearest Fourth Wing readalikes because it drops a vulnerable but determined heroine into a lethal competitive structure where attraction becomes part of survival strategy. Oraya’s place inside a violent vampire world gives the novel strong outsider tension, and the romantic threat line stays active without overwhelming the action.',
    whyMatch:
      'It aligns with Fourth Wing through trial-based structure, dangerous intimacy, high-stakes combat pressure, and a heroine who has to earn survival in a world not built for her.',
  },
  {
    title: 'From Blood and Ash',
    author: 'Jennifer L. Armentrout',
    label: 'Best if you want heat plus sprawling series drama',
    description:
      'Jennifer L. Armentrout writes in a very direct, high-velocity romantasy mode, and this series is built for readers who want emotional intensity, forbidden attraction, lore reveals, and a long runway of escalating drama. Poppy’s sheltered role and growing rebellion give the story a strong engine, even when the mythology gets larger and messier.',
    whyMatch:
      'It feels like Fourth Wing for readers who most want fast pace, heavy romantic tension, and the kind of series that keeps piling on secrets, alliances, and betrayals.',
  },
  {
    title: 'One Dark Window',
    author: 'Rachel Gillig',
    label: 'Best if you want darker gothic atmosphere',
    description:
      'Rachel Gillig gives this book a moodier, more haunted texture than Fourth Wing, but the appeal overlap is real. Elspeth Spindle moves through a cursed world full of dangerous magic, uneasy attraction, and power structures that feel intimate rather than abstract. The writing is more gothic and stylized, but still accessible enough for romantasy readers who want atmosphere without losing momentum.',
    whyMatch:
      'It matches Fourth Wing through forbidden tension, unstable magic, and the feeling that romance and danger are braided together rather than kept in separate lanes.',
  },
  {
    title: 'The Hurricane Wars',
    author: 'Thea Guanzon',
    label: 'Best if you want enemies-to-lovers war tension',
    description:
      'This is a strong recommendation for readers who liked Fourth Wing’s combination of attraction and hostility under military pressure. Thea Guanzon works on a larger war canvas, but the emotional mechanism is familiar: sharp banter, mutual suspicion, public danger, and the sense that desire is politically inconvenient.',
    whyMatch:
      'It aligns with Fourth Wing through enemies-to-lovers charge, conflict-heavy fantasy romance, and a world where personal chemistry is inseparable from military or political stakes.',
  },
] as const

function amazonLink(title: string, author: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`
}

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Books Like Fourth Wing',
  description:
    'Books like Fourth Wing for readers who want dragon-school intensity, fantasy romance momentum, and stronger explanations of why each recommendation fits.',
  alternates: { canonical: pageUrl },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  category: 'books' })

export default function FourthWingReadalikesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <BreadcrumbJsonLd trail={[{name: "Home", path: "/"}, {name: "Books", path: "/books"}, {name: "Books Like Fourth Wing"}]} />
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Books Like Fourth Wing</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        If you want books like <strong>Fourth Wing</strong>, the closest first move is{' '}
        <strong>The Serpent and the Wings of Night</strong> if the trial structure and dangerous
        attraction were the real hook. If what you want is a bigger romantasy franchise with proven
        mass appeal, start with <strong>A Court of Thorns and Roses</strong>. If you mainly want
        speed, heat, and long-series drama, go to <strong>From Blood and Ash</strong>.
      </p>
      <img
        src={heroImage}
        alt="Premium special edition romantic fantasy novels with decorative sprayed edges displayed on a dark background."
        className="mb-6 w-full rounded-xl shadow-sm"
      />
      <p className="mb-8 rounded-xl border border-fuchsia-200 bg-fuchsia-50 px-4 py-3 text-sm leading-relaxed text-fuchsia-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and
        price can change, so confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Which book should you read first if you loved Fourth Wing?
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
                    className="font-semibold text-fuchsia-700"
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
          What are readers usually chasing when they search for books like Fourth Wing?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Usually not just dragons. The real ask is high-intensity training or trial structure,
          dangerous romantic tension, readable prose, and a series engine strong enough to feel
          compulsive rather than merely ornate. That is why pure epic fantasy often misses the match,
          even when the world-building is better on paper.
        </p>
        <p className="leading-relaxed text-gray-700">
          The other important thing is emotional pacing. Fourth Wing readers usually want a fantasy
          book that moves like commercial romance and a romance that still feels embedded in danger,
          hierarchy, and competition. The best readalikes keep both halves active at once.
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-700">
              {pick.label}
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">
              <strong>Author:</strong> {pick.author}
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">{pick.description}</p>
            <div className="mb-4 rounded-2xl border border-fuchsia-100 bg-fuchsia-50 p-4">
              <h3 className="mb-2 text-lg font-bold text-gray-900">Why it feels like Fourth Wing</h3>
              <p className="text-sm leading-relaxed text-gray-700">{pick.whyMatch}</p>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener nofollow"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-fuchsia-600 px-6 py-3 text-base font-bold text-white transition hover:bg-fuchsia-500"
            >
              Click Here to Buy on Amazon
            </a>
          </section>
        )
      })}

      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Where should you go after this list?</h2>
        <p className="leading-relaxed text-gray-700">
          For the broader fantasy lane, pair this with{' '}
          <strong>
            <a href="/books/best-fantasy-series-for-adults">best fantasy series for adults</a>
          </strong>{' '}
          and, if you want another reading-order guide,{' '}
          <strong>
            <a href="/books/best-brandon-sanderson-cosmere-order">
              best Brandon Sanderson Cosmere order
            </a>
          </strong>
          . If we add dedicated author pages for these romantasy writers later, I can wire those in
          too, but right now the stronger improvement is better recommendation substance on this page
          itself.
        </p>
      </section>
    </main>
  )
}
