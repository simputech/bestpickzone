import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'

const pageUrl = 'https://bestpickzone.com/books/agatha-christie-hercule-poirot-in-order'
const heroImage =
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
const coverImages: Record<string, string> = {
  'The Mysterious Affair at Styles': '/images/books/agatha-christie/the-mysterious-affair-at-styles.svg',
  'The Murder of Roger Ackroyd': '/images/books/agatha-christie/the-murder-of-roger-ackroyd.svg',
  'Murder on the Orient Express': '/images/books/agatha-christie/murder-on-the-orient-express.svg',
  'Death on the Nile': '/images/books/agatha-christie/death-on-the-nile.svg',
  'Five Little Pigs': '/images/books/agatha-christie/five-little-pigs.svg',
  Curtain: '/images/books/agatha-christie/curtain.svg',
}

const entries = [
  ['1', 'The Mysterious Affair at Styles', 'Best place to meet Poirot at the beginning'],
  ['2', 'The Murder of Roger Ackroyd', 'Read early once you know the voice'],
  ['3', 'Murder on the Orient Express', 'The most famous mid-list must-read'],
  ['4', 'Death on the Nile', 'Best once you want glamour plus cleaner detection'],
  ['5', 'Five Little Pigs', 'Best psychological Poirot mystery'],
  ['6', 'After the Funeral', 'One of the sharpest family-greed plots'],
  ['7', 'Curtain', 'Save for last because it closes the Poirot arc'],
] as const

const books = [
  {
    title: 'The Mysterious Affair at Styles',
    label: 'Start Here',
    fit: 'Best first Poirot because you meet his ego, method, and theatrical certainty from the beginning.',
    skipIf: 'Skip this first only if you already know you dislike Golden Age clue scaffolding and want Christie at her most polished immediately.',
    body: 'Christie introduces Hercule Poirot through a country-house poisoning case, Arthur Hastings as observer, and the early version of the little Belgian detective who is already vain, precise, and stubbornly confident in psychology over noise. It is not the trickiest Poirot novel, but it is the cleanest foundation because it teaches you the rhythm: witness contradictions, domestic performance, tiny detail, then a reveal built on order rather than chaos.',
  },
  {
    title: 'The Murder of Roger Ackroyd',
    label: 'Read early',
    fit: 'Best early-career Poirot if you want the novel that changed how readers think about fair-play detective fiction.',
    skipIf: 'Skip this if you already know the central surprise in detail and are reading only for pure twist effect.',
    body: 'Reading this soon after Styles is useful because you can still feel how calmly Christie retools reader assumptions while Poirot himself remains recognizably Poirot. The village setting, the clean narration, and the apparently manageable suspect pool make the novel feel deceptively traditional. Its long-term reputation is deserved not just because of the ending, but because of how economically Christie trains the reader to trust the wrong things.',
  },
  {
    title: 'Murder on the Orient Express',
    label: 'Most famous classic',
    fit: 'Best when you want the iconic locked-train setting and the Poirot title even non-mystery readers recognize.',
    skipIf: 'Skip this first if you want Christie at her most psychologically layered rather than most mythic and theatrical.',
    body: 'Snowbound geography and an impossible-seeming murder make this the Poirot novel people often reach for first, and it works because the setting itself does half the dramatic lifting. Poirot becomes less village detective and more moral arbiter here. The case is famous enough that some readers know the broad outline before starting, but the novel still earns a place high in the order because it shows how Christie can turn a puzzle into a question about justice rather than merely technique.',
  },
  {
    title: 'Death on the Nile',
    label: 'Best glamorous Poirot',
    fit: 'Best if you want Egypt, jealousy, money, and a cleaner emotional hook than some of the pure clue-box novels.',
    skipIf: 'Skip this if destination glamour does nothing for you and you prefer stricter village or drawing-room logic.',
    body: 'The Nile setting gives Christie a broader emotional palette than a sealed manor house, and the murder plot around Linnet Ridgeway is one of the best examples of how she weaponizes social resentment. Poirot is still solving a fair-play mystery, but the travel atmosphere and the emotional motive structure make the book easier for contemporary readers who want a little more dramatic propulsion around the deduction.',
  },
  {
    title: 'Five Little Pigs',
    label: 'Best psychological pick',
    fit: 'Best if what you want is less spectacle and more memory, motive, and retrospective character study.',
    skipIf: 'Skip this first if you want an active contemporary murder investigation rather than a cold case reconstructed through statements.',
    body: "Poirot reinvestigates an old murder by asking each participant to revisit the past, and the result is one of Christie's most controlled psychological structures. Because the novel depends on recollection, self-protection, and private narrative, it shows Poirot as a reader of people more than merely a collector of clues. Readers who think Christie is all mechanics often change their view after this one.",
  },
  {
    title: 'Curtain',
    label: 'Save for last',
    fit: 'Best final Poirot because it is explicitly shaped as an end point, not just another interchangeable case.',
    skipIf: 'Skip this until the end because it is designed to function as closure and loses power when read in isolation.',
    body: "Curtain returns Poirot and Hastings to Styles, which gives Christie an elegant circular structure for Poirot's last case. The novel is more morally severe than the average Poirot book and asks harder questions about what kind of evil deduction can and cannot contain. It is not where you begin. It is where you finish once the detective has become a person to you rather than just a brand name.",
  },
] as const

function amazonLink(title: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} Agatha Christie`)}&tag=althcu-20`
}

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Hercule Poirot Books in Order',
  description:
    'Hercule Poirot books in order with the best place to start, what to read early, and which final Poirot novel to save for last.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Hercule Poirot Books in Order',
    description:
      'Hercule Poirot books in order with the best place to start, what to read early, and which final Poirot novel to save for last.',
    url: pageUrl,
    siteName: 'BestPickZone',
    type: 'article',
    images: [heroImage],
  },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  category: 'books' })

export default function PoirotOrderPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <BreadcrumbJsonLd trail={[{name: "Home", path: "/"}, {name: "Books", path: "/books"}, {name: "Hercule Poirot Books in Order"}]} />
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
        Hercule Poirot Books In Order
      </h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        The best way to read Hercule Poirot is not strict publication-order obedience all the way
        through. For most readers, the smarter path is <strong>The Mysterious Affair at Styles</strong>,
        then <strong>The Murder of Roger Ackroyd</strong>, then <strong>Murder on the Orient Express</strong>,
        then <strong>Death on the Nile</strong>, with <strong>Curtain</strong> saved for the end.
      </p>
      <img
        src={heroImage}
        alt="A vintage magnifying glass highlighting the typography of a classic hardback detective mystery novel."
        className="mb-6 w-full rounded-xl shadow-sm"
      />
      <p className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          What is the best Hercule Poirot reading order for new readers?
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
            {entries.map(([step, book, why]) => (
              <tr key={book} className="border-b border-gray-100">
                <td className="px-3 py-3 font-semibold">{step}</td>
                <td className="px-3 py-3 font-semibold">{book}</td>
                <td className="px-3 py-3 text-gray-700">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {books.map((book) => {
        const href = amazonLink(book.title)
        return (
          <section key={book.title} className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              {book.title === 'The Mysterious Affair at Styles' &&
                'Why should you start Hercule Poirot with The Mysterious Affair at Styles?'}
              {book.title === 'The Murder of Roger Ackroyd' &&
                'When should you read The Murder of Roger Ackroyd in your Poirot order?'}
              {book.title === 'Murder on the Orient Express' &&
                'Where does Murder on the Orient Express belong in a Poirot reading order?'}
              {book.title === 'Death on the Nile' &&
                'Is Death on the Nile the best glamorous Poirot novel to read early?'}
              {book.title === 'Five Little Pigs' &&
                'Why do longtime readers place Five Little Pigs so high in the Poirot canon?'}
              {book.title === 'Curtain' &&
                'Why must Curtain be saved for last in the Poirot reading order?'}
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              <a href={href} target="_blank" rel="noopener nofollow">
                <strong>{book.title}</strong>
              </a>{' '}
              is the best Poirot recommendation for <strong>{book.fit.toLowerCase()}</strong>.
            </p>
            <a href={href} target="_blank" rel="noopener nofollow">
              <img
                src={coverImages[book.title]}
                alt={`Custom illustrated recommendation artwork for ${book.title} by Agatha Christie`}
                width={320}
                height={480}
                className="mb-4 w-full max-w-[260px] rounded-xl border border-gray-200"
              />
            </a>
            <p className="mb-4 leading-relaxed text-gray-700">{book.body}</p>
            <table className="mb-4 w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-3 py-3 font-semibold">Why Read Now</th>
                  <th className="px-3 py-3 font-semibold">Why Wait</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-3 text-gray-700"><ul><li>{book.fit}</li></ul></td>
                  <td className="px-3 py-3 text-gray-700"><ul><li>{book.skipIf}</li></ul></td>
                </tr>
              </tbody>
            </table>
            <p className="mb-4 text-amber-900"><strong>Skip this if:</strong> {book.skipIf}</p>
            <a href={href} target="_blank" rel="noopener nofollow" className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-base font-bold text-white transition hover:bg-amber-400">
              Click Here to Buy on Amazon
            </a>
          </section>
        )
      })}
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Should you read every Poirot book in exact publication order?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Only if you are already committed to the full Christie project. Most readers do better with
          a guided route through the strongest and most representative titles first, then circle back
          into the deeper catalog later.
        </p>
        <p className="leading-relaxed text-gray-700">
          If classic-detective series are your broader lane, move next to
          <strong> <a href="/books/best-cozy-mystery-series-to-read">best cozy mystery series to read</a></strong>.
          For Christie bibliography detail, the
          <a href="https://www.agathachristie.com/stories/hercule-poirot" target="_blank" rel="noopener nofollow">
            {' '}official Agatha Christie Poirot page
          </a>{' '}
          is the cleanest reference.
        </p>
      </section>
    </main>
  )
}
