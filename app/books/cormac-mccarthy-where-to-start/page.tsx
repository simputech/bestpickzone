import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/cormac-mccarthy-where-to-start'
const heroImage =
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80'

const picks = [
  {
    title: 'No Country for Old Men',
    label: 'Best starting point for most readers',
    fit: 'Readers who want McCarthy’s violence, fatalism, and stripped-down authority without starting at maximum stylistic difficulty.',
    skipIf:
      'Skip this only if you are specifically coming for borderland myth and apocalyptic density rather than a cleaner thriller frame.',
    text: "No Country for Old Men is the best place to start because it shows what makes McCarthy unmistakable without demanding that you decode his full biblical register first. Sheriff Bell, Llewelyn Moss, and Anton Chigurh give you a lean three-vector structure: hunted man, relentless force, and aging witness who senses that the world is becoming less legible. The prose is sparse but not impenetrable, and the violence lands because McCarthy never treats it as spectacle. If you respond to the rhythm here, you can decide whether to move darker, stranger, or larger next.",
  },
  {
    title: 'The Road',
    label: 'Best if you want emotional devastation first',
    fit: 'Readers who want the shortest route into McCarthy’s stripped language and moral bleakness through a parent-child bond.',
    skipIf:
      'Skip this first if child-endangerment narratives hit too hard or if you want plot breadth instead of compression.',
    text: "The Road works because its post-apocalyptic shell is not the real reason people remember it. The real force is the father-son dynamic and the question of what tenderness can still mean when almost every supporting human presence has collapsed into threat. It is one of the easiest McCarthy books to read in sentence-by-sentence terms and one of the hardest emotionally. Many readers start here because the premise is clear, but it is not the best first pick if you want to see his full tonal range rather than his cleanest emotional knife.",
  },
  {
    title: 'Blood Meridian',
    label: 'Best once you know you want the deep end',
    fit: 'Readers who already trust McCarthy and want the most extreme version of his language, violence, and historical-cosmic scale.',
    skipIf:
      'Skip this first if you are still deciding whether you even like McCarthy at all.',
    text: "Blood Meridian is the masterpiece answer and the wrong first answer for most people. The kid, the Glanton gang, and Judge Holden move through scalp-hunting violence in a book that feels less like a conventional novel than an infernal scripture. The syntax is denser, the bloodshed is relentless, and the moral atmosphere is almost airless. If you start here and love it, fine. If you start here and bounce, that does not mean McCarthy is not for you. It may just mean you began with the book that asks the most.",
  },
  {
    title: 'All the Pretty Horses',
    label: 'Best if you want the lyrical western first',
    fit: 'Readers who want beauty, landscape, and youth rather than immediate nihilistic crush.',
    skipIf:
      'Skip this first if you are here specifically for McCarthy’s darkest and most brutal register.',
    text: "All the Pretty Horses gives you young John Grady Cole crossing into Mexico, romantic illusion colliding with reality, and some of McCarthy’s most gorgeous open-country prose. It is still recognizably his world, but the book lets you feel movement, yearning, and grace before it fully tightens the fatal machinery. This is a better first pick than Blood Meridian for readers who love western atmosphere and want to see whether McCarthy’s lyricism speaks to them before they confront his harsher metaphysics.",
  },
] as const

function amazonLink(title: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} Cormac McCarthy`)}&tag=althcu-20`
}

export const metadata: Metadata = {
  title: 'Cormac McCarthy Where To Start',
  description:
    'Where to start with Cormac McCarthy, with the best first book, what to save for later, and direct Amazon links.',
  alternates: { canonical: pageUrl },
}

export default function CormacPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Cormac McCarthy: Where To Start</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        If you are wondering where to start with Cormac McCarthy, begin with <strong>No Country for Old Men</strong>.
        It gives you the moral cold, the violence, the authority, and the unmistakable cadence without asking
        you to start at his most difficult setting. If you want the most emotional route, choose <strong>The Road</strong>.
        If you already know you want the most extreme version of him, then and only then start with <strong>Blood Meridian</strong>.
      </p>
      <img src={heroImage} alt="Stark minimalist lighting illuminating dark literary fiction and post-apocalyptic novels on a raw concrete surface." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-8 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-relaxed text-stone-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Which Cormac McCarthy book should you read first?</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Book</th><th className="px-3 py-3 font-semibold">Best For</th><th className="px-3 py-3 font-semibold">Amazon</th></tr></thead>
          <tbody>
            {picks.map((pick) => (
              <tr key={pick.title} className="border-b border-gray-100">
                <td className="px-3 py-3 font-semibold">{pick.title}</td>
                <td className="px-3 py-3 text-gray-700">{pick.label}</td>
                <td className="px-3 py-3"><a href={amazonLink(pick.title)} target="_blank" rel="noopener nofollow" className="font-semibold text-stone-700">Find on Amazon</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {picks.map((pick) => (
        <section key={pick.title} className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {pick.title === 'No Country for Old Men' && 'Why is No Country for Old Men the best Cormac McCarthy starting point?'}
            {pick.title === 'The Road' && 'Should The Road be your first Cormac McCarthy book if you want the emotional route?'}
            {pick.title === 'Blood Meridian' && 'Why should Blood Meridian usually wait until later?'}
            {pick.title === 'All the Pretty Horses' && 'When is All the Pretty Horses the better first McCarthy choice?'}
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            <a href={amazonLink(pick.title)} target="_blank" rel="noopener nofollow"><strong>{pick.title}</strong></a>{' '}
            is the best McCarthy recommendation for <strong>{pick.fit.toLowerCase()}</strong>.
          </p>
          <a href={amazonLink(pick.title)} target="_blank" rel="noopener nofollow">
            <img src={`https://dummyimage.com/320x480/efece6/1f2937.png&text=${encodeURIComponent(pick.title)}`} alt={`${pick.title} by Cormac McCarthy cover-style recommendation image`} className="mb-4 w-full max-w-[260px] rounded-xl border border-gray-200" />
          </a>
          <p className="mb-4 leading-relaxed text-gray-700">{pick.text}</p>
          <table className="mb-4 w-full border-collapse text-left text-sm">
            <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Why Read It</th><th className="px-3 py-3 font-semibold">Why Wait</th></tr></thead>
            <tbody><tr><td className="px-3 py-3 text-gray-700"><ul><li>{pick.fit}</li></ul></td><td className="px-3 py-3 text-gray-700"><ul><li>{pick.skipIf}</li></ul></td></tr></tbody>
          </table>
          <p className="mb-4 text-amber-900"><strong>Skip this if:</strong> {pick.skipIf}</p>
          <a href={amazonLink(pick.title)} target="_blank" rel="noopener nofollow" className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-stone-700 px-6 py-3 text-base font-bold text-white transition hover:bg-stone-600">Click Here to Buy on Amazon</a>
        </section>
      ))}
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">What should you read after your first Cormac McCarthy novel?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          If you start with No Country, go to The Road for a tighter emotional register or All the Pretty Horses for more lyric sweep.
          If you start with The Road and love the stripped style, then Blood Meridian becomes easier to approach because you already trust the voice.
        </p>
        <p className="leading-relaxed text-gray-700">
          For adjacent long-read energy, pair this with <strong><a href="/books/best-books-for-people-who-dont-like-reading">best books for people who do not like reading</a></strong>
          if you want cleaner momentum, or <strong><a href="/books/best-literary-fiction">best literary fiction</a></strong> if you want more demanding prose-forward work.
          For bibliography details, Vintage's <a href="https://www.penguinrandomhouse.com/authors/43014/cormac-mccarthy/" target="_blank" rel="noopener nofollow">Cormac McCarthy author page</a> is a reliable reference.
        </p>
      </section>
    </main>
  )
}
