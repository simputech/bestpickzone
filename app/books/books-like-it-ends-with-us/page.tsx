import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'

const pageUrl = 'https://bestpickzone.com/books/books-like-it-ends-with-us'
const heroImage =
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80'
const publishedDate = '2026-06-14'
const updatedDate = '2026-06-26'

const picks = [
  {
    title: 'Reminders of Him',
    author: 'Colleen Hoover',
    label: 'Closest emotional match',
    pages: '336 pages',
    bestFor:
      'Readers who want the same emotional bluntness and a heroine fighting for dignity after public judgment.',
    skipIf:
      'Skip this if you want the romantic tension of It Ends With Us without another heavy guilt-and-forgiveness framework.',
    reason:
      "If what worked for you in It Ends With Us was not just the romance but the way Colleen Hoover pushes her protagonist through shame, loyalty, and impossible moral tradeoffs, Reminders of Him is the cleanest next stop. Kenna Rowan's attempt to rebuild contact with the daughter she has never been allowed to know carries the same emotional pressure Hoover fans look for, but with more emphasis on redemption than on repeating cycles of harm. The supporting relationships are less flashy than Atlas and Ryle, yet the book wins on raw vulnerability and controlled pacing.",
    pros: [
      'Most natural next pick for readers who want more CoHo without repeating the exact same plot engine.',
      'Strong if your favorite part of It Ends With Us was the moral tension rather than the twist factor.',
      'Shorter and more focused than many contemporary emotional dramas.',
    ],
    cons: [
      'Less romantic electricity than readers who mainly came for the central relationship may expect.',
      'Leans heavily on grief, guilt, and parental longing.',
    ],
  },
  {
    title: 'The Things We Leave Unfinished',
    author: 'Rebecca Yarros',
    label: 'Best for high-emotion readers who still want a bigger romantic sweep',
    pages: '432 pages',
    bestFor:
      'Readers who want alternating timelines, intense longing, and a book that feels more cinematic than domestic.',
    skipIf:
      'Skip this if dual timelines usually make you feel emotionally managed instead of moved.',
    reason:
      "Rebecca Yarros builds this novel around wartime letters, present-day grief, and a slow unspooling love story that asks whether unfinished love can still shape a whole life. It is more overtly romantic than It Ends With Us and less centered on intimate-partner abuse, but the emotional mechanism is similar: a heroine trying to separate memory, loyalty, and self-preservation. Readers who liked the journal and memory elements in Hoover's novel often respond well to the way Yarros handles intergenerational emotional residue here.",
    pros: [
      'Excellent if you want a stronger romantic payoff without losing emotional weight.',
      'Alternating-timeline structure gives it a bigger-feeling arc than a standard contemporary romance.',
      'Works well for readers who want to cry but still feel narratively guided.',
    ],
    cons: [
      'More polished and more overtly sentimental than It Ends With Us.',
      'If you want modern realism over emotional sweep, it may feel too arranged.',
    ],
  },
  {
    title: 'Me Before You',
    author: 'Jojo Moyes',
    label: 'Best for readers who want emotional devastation with mainstream appeal',
    pages: '384 pages',
    bestFor:
      'Readers who liked that It Ends With Us aimed for broad emotional resonance rather than niche literary subtlety.',
    skipIf:
      'Skip this if you strongly dislike books that are already surrounded by public debate about representation and sentimentality.',
    reason:
      "Jojo Moyes gives Lou Clark and Will Traynor a relationship built on sharp tonal contrast: one character reaching outward toward life, the other locked in a much harder logic about dignity and the future. The book is cleaner and more classically structured than Hoover's work, but it scratches the same need for emotional escalation, impossible choices, and a romance that is never simply about chemistry. It also carries the same sort of mainstream readability that makes it easy to hand to someone who wants a guaranteed tearjerker.",
    pros: [
      'Very easy recommendation if you want one emotionally intense contemporary bestseller after another.',
      'Stronger prose control than many viral romance-adjacent books.',
      'Delivers a decisive emotional hit without requiring a sequel mindset.',
    ],
    cons: [
      'A more externally debated book than some readers realize before they start.',
      'Less messy and less psychologically volatile than Hoover at her peak.',
    ],
  },
  {
    title: 'Pack Up the Moon',
    author: 'Kristan Higgins',
    label: 'Best if the grief element mattered more than the romance conflict',
    pages: '464 pages',
    bestFor:
      'Readers who want emotional recovery, loss, and a book that stays reader-friendly even while tackling terminal illness and mourning.',
    skipIf:
      'Skip this if you want a romance-first structure instead of a grief-and-rebuilding structure.',
    reason:
      "Pack Up the Moon begins with a husband moving through the aftermath of his wife's death under the guidance of letters she prepared for him in advance. It is not similar to It Ends With Us because of relationship toxicity; it is similar because it understands that commercial emotional fiction works best when life choices, not just attraction, are doing the real dramatic labor. The tone is gentler than Hoover's, but that gentleness is exactly why it works for readers who want the ache without the same level of volatility.",
    pros: [
      'A better follow-up than another CoHo book if you specifically want healing after emotional wreckage.',
      'Reader-friendly despite heavy subject matter.',
      'Offers a softer emotional landing while still delivering catharsis.',
    ],
    cons: [
      'Much lower on romantic tension than readers wanting another consuming central couple may prefer.',
      'Can feel openly sentimental if you usually want sharper edges.',
    ],
  },
  {
    title: 'All Your Perfects',
    author: 'Colleen Hoover',
    label: 'Best if marriage strain was the part that held you',
    pages: '320 pages',
    bestFor:
      'Readers who want another Hoover novel built around love under pressure rather than early-attraction excitement.',
    skipIf:
      'Skip this if fertility and marriage-fracture storylines are a personal no-go right now.',
    reason:
      "Among Hoover's own books, All Your Perfects is one of the closest tonal cousins because it is less interested in flirtation than in what love looks like after disappointment hardens into silence. The dual timeline shows what a marriage was and what it has become, and that structural contrast gives the novel the same emotional immediacy Hoover readers usually chase. It lacks the cultural footprint of It Ends With Us, but it is often the better recommendation for readers who care more about relational erosion than about social-media-famous plot beats.",
    pros: [
      'One of the strongest in-house follow-ups if you want more Hoover specifically.',
      'Good choice when your interest is relationship strain, not thriller detours.',
      'Short and emotionally direct.',
    ],
    cons: [
      'Narrower and quieter than It Ends With Us in scope.',
      'The emotional subject matter can be very specific and very painful for the wrong reader at the wrong time.',
    ],
  },
] as const

function amazonLink(title: string, author: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`
}

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Books Like It Ends With Us',
  description:
    'Books like It Ends With Us for readers who want emotionally intense contemporary fiction, relationship pressure, and direct Amazon links.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Books Like It Ends With Us',
    description:
      'A practical readalike guide for readers who want more emotionally intense books after It Ends With Us.',
    url: pageUrl,
    type: 'article',
  },
}, { category: 'books', publishedTime: publishedDate, modifiedTime: updatedDate, section: 'Books' })

export default function BooksLikeItEndsWithUsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Books Like It Ends With Us',
    description:
      'Books like It Ends With Us for readers who want emotionally intense contemporary fiction, relationship pressure, and direct Amazon links.',
    datePublished: publishedDate,
    dateModified: updatedDate,
    author: { '@type': 'Organization', name: 'BestPickZone' },
    publisher: { '@type': 'Organization', name: 'BestPickZone' },
    mainEntityOfPage: pageUrl,
    image: [heroImage],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What should I read after It Ends With Us?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reminders of Him is the closest next read for most people because it keeps Colleen Hoover’s emotional directness while shifting the conflict into guilt, redemption, and public judgment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I want books like It Ends With Us but not another Colleen Hoover novel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Things We Leave Unfinished and Me Before You are the easiest non-Hoover recommendations if you want emotional intensity, relationship stakes, and broad readability.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which book in this list should I skip first?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pack Up the Moon is the safest skip-first pick if you mainly want romance conflict, because it leans much more into grief and rebuilding than into a volatile central relationship.',
        },
      },
    ],
  }

  return (
    <>
      <BreadcrumbJsonLd trail={[{name: "Home", path: "/"}, {name: "Books", path: "/books"}, {name: "Books Like It Ends With Us"}]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">
          Readalike Guide
        </p>
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
          Books Like It Ends With Us
        </h1>
        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          If you want books like <strong>It Ends With Us</strong>, the best first recommendation is
          <strong> Reminders of Him</strong>. It keeps the emotional directness, shame, and moral
          pressure that made Colleen Hoover's novel hit so hard, but it changes the relationship
          dynamic enough that it does not feel like a duplicate. If what you really want is a bigger
          romantic sweep, go to <strong>The Things We Leave Unfinished</strong>. If you want the same
          commercial readability with a cleaner emotional structure, <strong>Me Before You</strong>
          is the stronger cross-author recommendation.
        </p>
        <p className="mb-8 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-relaxed text-rose-900">
          Titles, authors, and availability verified against Amazon as of June 2026. Availability
          and price can change — confirm before purchasing.
        </p>

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Which book is the best first read if you loved It Ends With Us?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">
                Top Starting Pick
              </p>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Reminders of Him</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                The closest emotional continuation if you want guilt, public judgment, and a heroine
                trying to reclaim a life that other people think she no longer deserves.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                Best Non-Hoover Alternative
              </p>
              <h3 className="mb-2 text-xl font-bold text-gray-900">The Things We Leave Unfinished</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                The better pick if you want emotional overload and romantic scope without staying
                inside Colleen Hoover's exact tonal habits.
              </p>
            </div>
          </div>
        </section>

        <img
          src={heroImage}
          alt="A top-down aesthetic flatlay of contemporary romance novels and emotional fiction paperbacks on a neutral background."
          className="mb-10 w-full rounded-xl shadow-sm"
        />

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            How do the best books like It Ends With Us compare?
          </h2>
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-3 py-3 font-semibold text-gray-900">Book</th>
                <th className="px-3 py-3 font-semibold text-gray-900">Best For</th>
                <th className="px-3 py-3 font-semibold text-gray-900">Mood Match</th>
                <th className="px-3 py-3 font-semibold text-gray-900">Commitment</th>
              </tr>
            </thead>
            <tbody>
              {picks.map((book) => (
                <tr key={book.title} className="border-b border-gray-100 align-top">
                  <td className="px-3 py-3 font-semibold text-gray-900">{book.title}</td>
                  <td className="px-3 py-3 text-gray-700">{book.label}</td>
                  <td className="px-3 py-3 text-gray-700">{book.bestFor}</td>
                  <td className="px-3 py-3 text-gray-700">{book.pages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            What makes a book feel like It Ends With Us in the first place?
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            The useful readalike signal is not simply “contemporary romance with sadness.” What
            readers usually mean is emotionally immediate prose, relationship decisions with real
            consequences, and a heroine whose inner conflict matters as much as the love triangle or
            couple dynamic. The books below are not copies. They are matched because they carry some
            version of those same emotional mechanics.
          </p>
          <p className="leading-relaxed text-gray-700">
            If you decide you want more Hoover before anything else, the strongest companion page is
            our <strong><a href="/books/best-colleen-hoover-books">best Colleen Hoover books guide</a></strong>.
            If you want books built around emotional damage rather than viral romance branding, you
            may also want <strong><a href="/books/best-books-about-grief">best books about grief</a></strong>.
            For author-level context around Hoover's published catalog, Simon &amp; Schuster's
            <a href="https://www.simonandschuster.com/authors/Colleen-Hoover/150759074" target="_blank" rel="noopener nofollow">
              {' '}Colleen Hoover author page
            </a>{' '}
            is a reliable external reference.
          </p>
        </section>

        {picks.map((book) => {
          const href = amazonLink(book.title, book.author)
          return (
            <section
              key={book.title}
              className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                {book.title === 'Reminders of Him' &&
                  'Why is Reminders of Him the closest follow-up to It Ends With Us?'}
                {book.title === 'The Things We Leave Unfinished' &&
                  'When should you read The Things We Leave Unfinished after It Ends With Us?'}
                {book.title === 'Me Before You' &&
                  'Is Me Before You a good pick if you want the same emotional punch?'}
                {book.title === 'Pack Up the Moon' &&
                  'Who should read Pack Up the Moon instead of another Colleen Hoover novel?'}
                {book.title === 'All Your Perfects' &&
                  'Why does All Your Perfects work if marriage strain was your favorite part of It Ends With Us?'}
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                <a href={href} target="_blank" rel="noopener nofollow">
                  <strong>{book.title}</strong>
                </a>{' '}
                belongs on a books-like-It-Ends-With-Us list because it works for
                <strong> {book.bestFor.toLowerCase()}</strong>. At about {book.pages.toLowerCase()},
                it offers the same kind of emotionally legible commercial fiction that readers often
                want after Hoover, but the dramatic engine is different enough to avoid simple repetition.
              </p>
              <p className="mb-4 leading-relaxed text-gray-700">{book.reason}</p>
              <table className="mb-4 w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-3 py-3 font-semibold text-gray-900">Why It Works</th>
                    <th className="px-3 py-3 font-semibold text-gray-900">Why It May Not</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-top">
                    <td className="px-3 py-3 text-gray-700">
                      <ul>
                        {book.pros.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-3 py-3 text-gray-700">
                      <ul>
                        {book.cons.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="mb-4 leading-relaxed text-amber-900">
                <strong>Skip this if:</strong> {book.skipIf}
              </p>
              <a
                href={href}
                target="_blank"
                rel="noopener nofollow"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-rose-600 px-6 py-3 text-base font-bold text-white transition hover:bg-rose-500"
              >
                Click Here to Buy on Amazon
              </a>
            </section>
          )
        })}

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Which book on this list should you skip first?
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            For most people, the skip-first pick is <strong>Pack Up the Moon</strong>. It is not a
            weak book. It is just the least aligned with what many readers are actually asking for
            when they search for books like It Ends With Us. If your real goal is relationship heat,
            emotional volatility, and romantic decision pressure, Higgins's novel may feel too
            grief-centered and too gentle.
          </p>
          <p className="leading-relaxed text-gray-700">
            If, however, the part of Hoover's novel that stayed with you was the cost of moving
            forward after emotional wreckage, then Pack Up the Moon becomes much more relevant. That
            is the key distinction with readalike searching: match the emotional mechanism, not just
            the surface marketing category.
          </p>
        </section>

        <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Where should you go after one or two books like It Ends With Us?
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            If you read <strong>Reminders of Him</strong> and want more Hoover, move next to
            <strong> All Your Perfects</strong> or back out to the broader author ranking page. If
            you read <strong>The Things We Leave Unfinished</strong> and decide the sweeping, more
            cinematic end of emotional fiction works best for you, that opens the door to more
            Rebecca Yarros and adjacent big-feeling contemporary romance.
          </p>
          <p className="leading-relaxed text-gray-700">
            If you read <strong>Me Before You</strong> and realize what you want is mainstream emotional
            fiction with cleaner structure and less relational chaos, then the next step is not “more
            viral BookTok romance.” It is a sharper move into books centered on grief, caregiving,
            or impossible love stories that still respect readability. That is where your taste map
            becomes more useful than the original label.
          </p>
        </section>
      </main>
    </>
  )
}
