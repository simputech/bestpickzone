import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best New Spy Thriller Books in 2026 — Ranked with Winner Logic',
  description:
    "The best new spy thrillers available in 2026, ranked with honest winner logic: Tess Gerritsen's The Spy Coast, Brad Thor's Dead Fall, Nick Harkaway's authorized Smiley novel Karla's Choice, and more — with clear skip-this-if guidance.",
  alternates: {
    canonical: 'https://bestpickzone.com/books/genre-fiction/best-new-spy-thriller-books-2026',
  },
  openGraph: {
    title: 'Best New Spy Thriller Books in 2026',
    description:
      "The strongest new spy fiction available now, ranked with editorial winner logic — The Spy Coast, Dead Fall, Karla's Choice, and Red Sparrow.",
    url: 'https://bestpickzone.com/books/genre-fiction/best-new-spy-thriller-books-2026',
    siteName: 'BestPickZone',
    type: 'article',
  },
}, { category: 'genre-fiction' })

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Genre Fiction', href: '/books/genre-fiction' },
  { label: 'Best New Spy Thriller Books 2026' },
]

const picks = [
  {
    slot: 'Best Overall',
    slotColor: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    title: 'The Spy Coast',
    author: 'Tess Gerritsen',
    meta: 'Book 1 of the Martini Club series · Hardcover, paperback, Kindle, Audible',
    summary:
      "Gerritsen's pivot from medical thrillers to espionage is the spy genre's strongest new character introduction in years. Maggie Bird — retired CIA operative, now farming oysters in rural Maine — is drawn back into operational life when a body appears on her property and people from her past begin to surface. The Maine isolation creates an atmosphere distinctly different from the London/Moscow axis of classic spy fiction.",
    pros: [
      "Gerritsen's 20+ medical thrillers give her an unusual skill set for spy fiction: tight chapter construction, no filler, clinical precision in depicting how things go wrong",
      'The rural Maine setting differentiates the novel from city-based espionage fiction — the isolation adds authentic tension',
      'Strong female protagonist in a genre that has historically centered male leads',
      'Series opener: if you like the character, more is coming',
    ],
    cons: [
      'Lighter on CIA tradecraft detail than Thor, Matthews, or le Carré — this is character-forward, not procedural',
      'The resolution arrives faster than the setup complexity warrants',
    ],
    skip: 'you want heavily researched operational tradecraft. This is a spy novel for crime fiction readers, not a procedural for intelligence enthusiasts.',
  },
  {
    slot: 'Best Action-Driven',
    slotColor: 'bg-red-100 text-red-800 border border-red-300',
    title: 'Dead Fall',
    author: 'Brad Thor',
    meta: 'Scot Harvath series · Hardcover, Kindle, Audible',
    summary:
      "The most recent Scot Harvath novel delivers the kinetic pacing and geopolitical detail Thor's series is known for. Thor's research methodology — documented access to current and former intelligence officers — gives the tradecraft a credibility that most action thriller writers don't achieve.",
    pros: [
      'The tradecraft detail is sourced from real intelligence community relationships, not invented',
      'Harvath has developed meaningfully across the series — returning readers get genuine character continuity',
      "Thor's chapter structure is designed for momentum; this is the right pick for readers who want to read fast",
    ],
    cons: [
      'The contemporary geopolitical setting will date the book faster than Cold War-era spy fiction',
      'New readers miss significant character context that series veterans take for granted',
    ],
    skip: "you prefer psychological espionage over action. Thor's strength is operational detail and forward momentum, not moral ambiguity.",
  },
  {
    slot: 'Best Slow-Burn',
    slotColor: 'bg-blue-100 text-blue-800 border border-blue-300',
    title: "Karla's Choice",
    author: 'Nick Harkaway',
    meta: "Authorized continuation of John le Carré's George Smiley universe · Paperback, Kindle, Audible",
    summary:
      "Nick Harkaway — John le Carré's son — wrote Karla's Choice as an authorized continuation of his father's George Smiley universe. Set between The Spy Who Came in from the Cold and Tinker Tailor Soldier Spy, it follows Smiley on a mission that connects the two novels. Published 2024, now in paperback in 2026 and widely available.",
    pros: [
      "Harkaway captures his father's institutional pessimism and precise prose without mimicking it — Karla's Choice reads as continuation rather than imitation",
      'The placement in the Smiley timeline (between the two major le Carré novels) is exact — it fills a gap le Carré readers have wondered about for decades',
      'For readers who have finished the le Carré backlist and want more Smiley, this is the only legitimate authorized option available',
    ],
    cons: [
      'Requires reading The Spy Who Came in from the Cold first — do not start here',
      'Readers who found le Carré too slow will find Harkaway similarly demanding',
      "Some reviewers felt it couldn't fully escape its father's shadow — fair, though not a reason to skip it",
    ],
    skip: "you haven't read The Spy Who Came in from the Cold first. Context is essential.",
  },
  {
    slot: 'Best for Tradecraft Enthusiasts',
    slotColor: 'bg-purple-100 text-purple-800 border border-purple-300',
    title: 'Red Sparrow',
    author: 'Jason Matthews',
    meta: 'First in the Red Sparrow trilogy · Paperback, Kindle, Audible',
    summary:
      "Matthews is a retired CIA operations officer, and Red Sparrow is the most technically authentic spy novel available from a writer with verified operational experience. The dual POV — CIA officer and Russian intelligence officer — treats both sides with equivalent competence, which is rare in the genre. Now in paperback with strong availability.",
    pros: [
      'Matthews includes actual CIA operational tradecraft (cleared for publication) — the techniques described are real, which gives the novel a documentary quality',
      'Each chapter ends with a recipe relevant to the setting — a quirk that works better than it sounds',
      'The Jennifer Lawrence film is a loose adaptation; the novel is significantly more complex and worth reading independently',
    ],
    cons: [
      'The romantic subplot is more prominent than in le Carré or Thor — some readers find it distracts from the operational story',
      'The recipe format at chapter ends will feel gimmicky to some readers',
    ],
    skip: 'you want action pacing over operational authenticity. Matthews prioritizes accuracy over momentum.',
  },
]

const faqs = [
  {
    q: "What's the best new spy thriller in 2026 for someone who has read all of le Carré?",
    a: "Karla's Choice by Nick Harkaway is the most direct answer — an authorized Smiley novel written by le Carré's son, set in the established timeline between The Spy Who Came in from the Cold and Tinker Tailor Soldier Spy. If you want something outside the Smiley universe, The Spy Coast by Tess Gerritsen is the best option.",
  },
  {
    q: "Is Brad Thor's Scot Harvath series worth starting from the beginning?",
    a: 'Thor designed each novel to work as a standalone, but The Lions of Lucerne (Book 1) provides character foundation. Dead Fall works as an entry point if you want the most recent writing, and most series veterans will argue the later books benefit from the earlier context.',
  },
  {
    q: "What's the difference between Brad Thor and Vince Flynn?",
    a: "Both write CIA/special operations thrillers. Flynn's Mitch Rapp operates in more institutional moral complexity; Thor's Harvath is more operationally action-forward. Flynn's backlist is arguably stronger overall; Thor's current output maintains series quality. If you've read one and liked it, the other is worth trying.",
  },
  {
    q: 'Which 2026 spy thriller is best for audio?',
    a: "Red Sparrow and Dead Fall work particularly well in audio — the geopolitical complexity benefits from having the pacing controlled for you. The Spy Coast is also strong in audio if you prefer character-forward narration to dense tradecraft exposition. All four titles on this list have Audible editions available.",
  },
  {
    q: 'Are any of these debut spy thrillers?',
    a: "None of the four primary picks here are debuts — they're deliberately chosen from established series or authors with verified track records. If you want debut spy fiction specifically, check Amazon's \"New Releases in Espionage Thrillers\" category directly and filter by release date plus 4.0+ star customer reviews. That's a more reliable method than trusting any article written months before the release date.",
  },
]

const articleText = `
${picks.map((p) => `${p.title} ${p.author} ${p.summary} ${p.pros.join(' ')} ${p.cons.join(' ')} Skip this if ${p.skip}`).join(' ')}
${faqs.map((f) => `${f.q} ${f.a}`).join(' ')}
`
const readingTime = getReadingTime(articleText)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best New Spy Thriller Books in 2026',
  description:
    'The best new spy thrillers available in 2026, ranked with editorial winner logic and explicit skip-this-if recommendations.',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: '2026-04-19',
  dateModified: '2026-06-26',
  mainEntityOfPage:
    'https://bestpickzone.com/books/genre-fiction/best-new-spy-thriller-books-2026',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: picks.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Book',
      name: p.title,
      author: { '@type': 'Person', name: p.author },
      description: p.summary,
    },
  })),
}

export default function BestNewSpyThrillerBooks2026Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        <div className="text-xs text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
          <span>{formatReadingTime(readingTime)}</span>
          <span>·</span>
          <span>Last verified: April 2026</span>
          <span>·</span>
          <span>
            Affiliate disclosure: BestPickZone earns a commission on qualifying Amazon
            purchases made through our links, at no extra cost to you.
          </span>
        </div>

        <h1
          className="text-4xl font-extrabold text-gray-900 mb-5 leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Best New Spy Thriller Books in 2026
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="text-lg leading-relaxed">
            The best new spy thriller available in 2026 is <em>The Spy Coast</em> by Tess
            Gerritsen — a retired CIA operative pulled back into danger in rural Maine
            when a body appears on her property. Gerritsen brings the plotting precision
            of 20+ medical thrillers to the espionage genre, and the result is the most
            compulsively readable new spy novel in several years.
          </p>
          <p className="leading-relaxed">
            It&apos;s right for readers new to spy fiction and for crime fiction readers
            looking to branch into espionage — the setup is clean, the character work is
            strong, and no prior knowledge of intelligence tradecraft is required. The
            tradeoff: this is character-forward spy fiction rather than a tradecraft
            procedural. If you want heavily researched covert operations detail in the
            vein of Brad Thor or Jason Matthews, the other picks on this list will serve
            you better.
          </p>
          <p className="leading-relaxed">
            Below we&apos;ve also picked the best for action-driven readers, the best
            slow-burn espionage release, and the best for readers who have worked through
            the le Carré backlist and want something new.
          </p>
          <p className="text-sm text-gray-500 italic">
            All titles verified against Amazon.com as of April 2026. Prices change —
            confirm before purchasing.
          </p>
        </div>

        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Quick Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 font-semibold">Book</th>
                  <th className="px-4 py-3 font-semibold">Author</th>
                  <th className="px-4 py-3 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {picks.map((p, i) => (
                  <tr key={i} className={i === 0 ? 'bg-yellow-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {i === 0 && <span className="text-yellow-600 mr-1">★</span>}
                      {p.title}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{p.author}</td>
                    <td className="px-4 py-3 text-gray-600">{p.slot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            The Picks
          </h2>
          <div className="space-y-10">
            {picks.map((p, i) => (
              <article
                key={i}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <div className="mb-3">
                    <span
                      className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${p.slotColor}`}
                    >
                      {p.slot}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {p.title} — {p.author}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{p.meta}</p>
                  </div>
                  <p className="text-gray-700 mb-5 leading-relaxed">{p.summary}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <p className="text-sm font-semibold text-green-700 mb-2">✓ Pros</p>
                      <ul className="space-y-1.5">
                        {p.pros.map((pro, j) => (
                          <li key={j} className="text-sm text-gray-700 flex gap-2">
                            <span className="text-green-500 mt-0.5 shrink-0">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-red-600 mb-2">✗ Cons</p>
                      <ul className="space-y-1.5">
                        {p.cons.map((con, j) => (
                          <li key={j} className="text-sm text-gray-700 flex gap-2">
                            <span className="text-red-400 mt-0.5 shrink-0">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-300 rounded-r-lg px-4 py-3 mb-5">
                    <p className="text-sm text-amber-900">
                      <strong>Skip this if</strong> {p.skip}
                    </p>
                  </div>

                  <BookCTA title={p.title} author={p.author} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2
            className="text-xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            A Note on &quot;Best Debut Spy Thriller of 2026&quot;
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">
            We do not recommend a debut spy thriller in this slot as of April 2026. No
            debut novel has yet emerged with enough verified reviews and confirmed
            availability to stand alongside the established titles above without risking
            the kind of reader disappointment we work hard to avoid.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            If you specifically want a debut, search Amazon&apos;s{' '}
            <em>New Releases in Espionage Thrillers</em> category directly — filter by
            release date and customer reviews of 4.0+ stars. That is a more reliable
            method than trusting any article written months before the release date.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Buying Guide: How to Choose
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              <strong>New to spy fiction?</strong> Start with <em>The Spy Coast</em> —
              the most accessible entry on this list, no prior genre knowledge required.
              If you like it, Gerritsen&apos;s Martini Club series has more coming.
            </p>
            <p>
              <strong>Already a spy fiction reader?</strong> Your choice depends on what
              you want from the genre. Action and tradecraft → <em>Dead Fall</em> (Thor)
              or <em>Red Sparrow</em> (Matthews). Literary slow-burn →{' '}
              <em>Karla&apos;s Choice</em> (Harkaway). New series to commit to →{' '}
              <em>The Spy Coast</em> (Gerritsen, series opener).
            </p>
            <p>
              <strong>Format matters.</strong> <em>Red Sparrow</em> and <em>Dead Fall</em>{' '}
              work particularly well in audio — the geopolitical complexity benefits from
              having the pacing controlled for you. All four titles on this list have
              Audible editions.
            </p>
            <p>
              <strong>Want to go deeper?</strong> Our full guide to the{' '}
              <Link
                href="/books/genre-fiction/best-spy-thriller-books"
                className="text-blue-600 hover:underline font-medium"
              >
                best spy thriller books of all time
              </Link>{' '}
              covers the canon from Fleming through le Carré; the{' '}
              <Link
                href="/books/genre-fiction/best-cold-war-thriller-books"
                className="text-blue-600 hover:underline font-medium"
              >
                best Cold War thrillers
              </Link>{' '}
              guide covers the era that still defines the genre.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div key={i} className="border-l-4 border-blue-200 pl-4">
                <h3 className="font-bold text-gray-900 mb-1">{f.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Final Verdict
          </h2>
          <div className="space-y-2.5 text-sm text-gray-800">
            <p>
              <strong>Best overall:</strong> <em>The Spy Coast</em> (Gerritsen) — the
              strongest new character introduction to spy fiction in years.
            </p>
            <p>
              <strong>Best action-driven:</strong> <em>Dead Fall</em> (Thor) — kinetic,
              well-researched, consistent series quality.
            </p>
            <p>
              <strong>Best slow-burn:</strong> <em>Karla&apos;s Choice</em> (Harkaway) —
              the only authorized Smiley continuation, done right.
            </p>
            <p>
              <strong>Best tradecraft depth:</strong> <em>Red Sparrow</em> (Matthews) — a
              retired CIA officer&apos;s authentic procedural.
            </p>
          </div>
          <div className="mt-5">
            <BookCTA title="The Spy Coast" author="Tess Gerritsen" />
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/books/genre-fiction/best-spy-thriller-books"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best Spy Thriller Books of All Time
              </p>
              <p className="text-xs text-gray-500 mt-1">The full canon →</p>
            </Link>
            <Link
              href="/books/genre-fiction/best-cold-war-thriller-books"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Best Cold War Thriller Books
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Le Carré, Deighton, and the era that still defines the genre →
              </p>
            </Link>
            <Link
              href="/books/reader-picks/best-new-books-april-2026"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">Best New Books April 2026</p>
              <p className="text-xs text-gray-500 mt-1">
                This month&apos;s standout releases across all genres →
              </p>
            </Link>
            <Link
              href="/books/genre-fiction"
              className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <p className="text-sm font-bold text-gray-900">
                Browse All Genre Fiction Guides
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Mystery, thriller, SF, fantasy, and more →
              </p>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
