import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ExternalProductImage from '@/components/ui/ExternalProductImage'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/beauty/nuface-trinity-plus-vs-foreo-bear-2-vs-myolift-qt'
const publishedDate = '2026-07-11T00:00:00Z'
const updatedDate = '2026-07-11T00:00:00Z'
const AMAZON_TAG = 'althcu-20'

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

const metaDescription =
  'NuFACE Trinity+ vs Foreo Bear 2 vs MyoLift QT: a 3-way microcurrent showdown focused on treatment style, session friction, gel cost, and who each device fits best.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'NuFACE Trinity+ vs Foreo Bear 2 vs MyoLift QT (2026) | BestPickZone',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'NuFACE Trinity+ vs Foreo Bear 2 vs MyoLift QT',
      'best microcurrent device',
      'microcurrent showdown',
      'NuFACE Trinity+ review',
      'Foreo Bear 2 review',
      'MyoLift QT review',
      'best facial toning device',
      'microcurrent conductive gel',
    ],
    openGraph: {
      title: 'NuFACE Trinity+ vs Foreo Bear 2 vs MyoLift QT',
      description: metaDescription,
      url: pageUrl,
      type: 'article',
    },
  },
  {
    category: 'beauty',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Beauty',
    url: pageUrl,
    tags: ['microcurrent', 'NuFACE', 'FOREO', 'MyoLift'],
  }
)

const devices = [
  {
    name: 'NuFACE Trinity+',
    bestFor: 'Buyers who want the most polished app and attachment ecosystem',
    keySpec: 'Smart-device system with attachments and guided routines',
    priceBand: '$$$',
    summary:
      'NuFACE makes the most sense for the buyer who wants the smoothest entry into at-home microcurrent. The appeal here is not just facial toning. It is the guided-device ecosystem, attachment options, and the feeling that you are buying into a structured routine instead of just a tool.',
    review:
      'This is the easiest premium microcurrent pick for beginners to understand. It feels consumer-friendly first, which is a strength if you want consistency more than pro-style experimentation.',
    skipIf:
      'You do not care about attachments, app guidance, or paying extra for a more polished ecosystem.',
    whyThisOne:
      'NuFACE wins on ecosystem maturity and “I want this to feel easy” buyer confidence.',
    query: 'NuFACE Trinity+ device',
    image: 'https://m.media-amazon.com/images/I/not-real-nuface.jpg',
  },
  {
    name: 'FOREO Bear 2',
    bestFor: 'Buyers who care most about anti-shock tech and a more tech-forward feel',
    keySpec: 'Microcurrent device with anti-shock positioning and fast session framing',
    priceBand: '$$$',
    summary:
      'The Bear 2 is the most tech-forward-feeling option in this group. If NuFACE feels like the polished mainstream beauty-tech pick, FOREO feels more like the buyer who wants advanced-device energy, stronger gadget identity, and a system built around reducing some of the discomfort worries people have about microcurrent.',
    review:
      'This is the one I would point nervous-but-curious buyers toward if they are most worried about how microcurrent feels on the face. It makes the comfort conversation part of the pitch.',
    skipIf:
      'You prefer a simpler, more traditional beauty-device ecosystem or care more about professional-style training than anti-shock features.',
    whyThisOne:
      'FOREO stands out because comfort technology is part of the product story, not just a side note.',
    query: 'FOREO Bear 2 microcurrent device',
    image: 'https://m.media-amazon.com/images/I/not-real-bear2.jpg',
  },
  {
    name: 'MyoLift QT',
    bestFor: 'Buyers who want the most pro-grade feel and are willing to learn',
    keySpec: 'Treatment-first microcurrent system with more advanced reputation',
    priceBand: '$$$',
    summary:
      'MyoLift QT is the pick for the buyer who is not just browsing beauty gadgets. It tends to attract the person who actually wants to learn technique, spend more time understanding the treatment style, and get something that feels closer to a serious tool than a casual vanity device.',
    review:
      'This is the most advanced-feeling option in the group, but it is not the most casual. That is both the upside and the filter. The results-oriented buyer may love that. The convenience buyer may not.',
    skipIf:
      'You want the easiest plug-and-play device and are unlikely to stay patient through a steeper learning curve.',
    whyThisOne:
      'MyoLift wins for the buyer who wants the most treatment-oriented identity and is comfortable doing more homework.',
    query: 'MyoLift QT microcurrent device',
    image: 'https://m.media-amazon.com/images/I/not-real-myolift.jpg',
  },
]

const faqItems = [
  {
    question: 'Does microcurrent hurt?',
    answer:
      'For most people it should not feel painful, though some devices can create noticeable sensations if conductivity, hydration, or technique are off. Comfort and session feel are part of why device choice matters.',
  },
  {
    question: 'How often do you need to use a microcurrent device?',
    answer:
      'Most at-home devices are built around regular use rather than occasional use. The real buying question is whether the treatment cadence fits your life well enough that you will actually keep doing it.',
  },
  {
    question: 'What matters most when choosing between these devices?',
    answer:
      'The key decision points are session friction, how polished the app or routine feels, whether you want a more beginner-friendly tool or a more advanced-feeling one, and whether you are comfortable rebuying conductive gel.',
  },
]

const companionItems = [
  {
    title: 'Conductive gel',
    text: 'The recurring purchase that actually matters in this category, because microcurrent without enough slip and conductivity is a frustrating experience.',
    href: amazonSearch('microcurrent conductive gel'),
  },
  {
    title: 'Hydrating serum',
    text: 'A useful companion if you want the routine to feel more complete after the device step.',
    href: amazonSearch('hydrating serum sensitive skin'),
  },
]

const readingTime = formatReadingTime(
  getReadingTime([metaDescription, ...devices.map((d) => `${d.summary} ${d.review}`), ...faqItems.map((f) => `${f.question} ${f.answer}`)].join(' '))
)

export default function MicrocurrentShowdownPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }),
        }}
      />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Beauty', href: '/beauty' }, { label: 'NuFACE Trinity+ vs Foreo Bear 2 vs MyoLift QT' }]} />

      <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-900">
        <strong>Affiliate disclosure:</strong> As an Amazon Associate, BestPickZone earns from qualifying purchases.
      </div>

      <section className="mb-10 rounded-[2.25rem] border border-rose-200 bg-[linear-gradient(140deg,#fff1f2_0%,#ffffff_45%,#fdf2f8_100%)] px-6 py-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">Beauty Tech Showdown</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          NuFACE Trinity+ vs Foreo Bear 2 vs MyoLift QT comes down to treatment style, session friction, and how serious you are about microcurrent.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          These devices all live in the same beauty-tech category, but they are not the same kind of buy. One feels most polished, one leans most gadget-forward, and one feels most pro-grade. That matters because microcurrent is only worth the money if the routine fits your actual life well enough to become repeatable.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-rose-200">Updated July 11, 2026</span>
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-rose-200">{readingTime}</span>
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-rose-200">3-way comparison</span>
        </div>
      </section>

      <section className="mb-10 rounded-[2rem] border border-rose-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">Buying criteria first</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <h3 className="font-bold text-slate-900">Microcurrent feel</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">Comfort matters because a device that feels intimidating often becomes the device you stop using.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <h3 className="font-bold text-slate-900">Gel cost</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">This category has a real recurring cost: conductive gel. That matters more than many affiliate pages admit.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <h3 className="font-bold text-slate-900">Session time</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">The most “effective” device on paper can still be the wrong buy if the routine feels too high-friction to maintain.</p>
          </div>
        </div>
      </section>

      <section className="mb-10 rounded-[2rem] border border-rose-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">Head-to-head table</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-rose-100 px-4 py-3 font-semibold text-slate-900">Device</th>
                <th className="border-b border-rose-100 px-4 py-3 font-semibold text-slate-900">Best for</th>
                <th className="border-b border-rose-100 px-4 py-3 font-semibold text-slate-900">Key spec</th>
                <th className="border-b border-rose-100 px-4 py-3 font-semibold text-slate-900">Price band</th>
                <th className="border-b border-rose-100 px-4 py-3 font-semibold text-slate-900">Buy</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr key={device.name}>
                  <td className="border-b border-rose-50 px-4 py-3 text-slate-900">{device.name}</td>
                  <td className="border-b border-rose-50 px-4 py-3 text-slate-700">{device.bestFor}</td>
                  <td className="border-b border-rose-50 px-4 py-3 text-slate-700">{device.keySpec}</td>
                  <td className="border-b border-rose-50 px-4 py-3 text-slate-700">{device.priceBand}</td>
                  <td className="border-b border-rose-50 px-4 py-3">
                    <a href={amazonSearch(device.query)} target="_blank" rel="noopener nofollow sponsored" className="font-semibold text-rose-700 underline underline-offset-2">Amazon</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 space-y-6">
        {devices.map((device, index) => (
          <article key={device.name} className="rounded-[2rem] border border-rose-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex items-start gap-4 lg:w-[200px] lg:flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-lg font-black text-rose-700">{index + 1}</div>
                <a href={amazonSearch(device.query)} target="_blank" rel="noopener nofollow sponsored">
                  <ExternalProductImage src={device.image} alt={device.name} title={device.name} fallbackAccentClassName="from-rose-100 via-white to-fuchsia-100" className="h-32 w-32 rounded-2xl border border-rose-100 bg-white object-contain p-2" />
                </a>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700">{device.bestFor}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">{device.priceBand}</span>
                </div>
                <h3 className="mt-4 text-2xl font-black text-slate-900">{device.name}</h3>
                <p className="mt-4 text-base leading-8 text-slate-700">{device.summary}</p>
                <p className="mt-4 text-sm leading-7 text-slate-700"><strong className="text-slate-900">Review summary:</strong> {device.review}</p>
                <p className="mt-3 text-sm leading-7 text-slate-700"><strong className="text-slate-900">Why this one:</strong> {device.whyThisOne}</p>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-900"><strong>Skip this if:</strong> {device.skipIf}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mb-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] border border-rose-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Best for jawline</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">MyoLift QT is the strongest fit for the buyer who wants the most treatment-oriented feel and is willing to learn.</p>
        </div>
        <div className="rounded-[2rem] border border-rose-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Best for cheeks</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">NuFACE Trinity+ is the easiest recommendation if you want a polished ecosystem and guided consistency.</p>
        </div>
        <div className="rounded-[2rem] border border-rose-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Best for beginners</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">FOREO Bear 2 stands out for buyers most nervous about feel and comfort during sessions.</p>
        </div>
      </section>

      <section className="mb-12 rounded-[2rem] border border-rose-200 bg-rose-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">Helpful outside resource</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          NuFACE&apos;s official{' '}
          <a href="https://www.mynuface.com/products/trinity-plus-complete-set-microcurrent-facial-toning-device-kit" target="_blank" rel="noopener noreferrer" className="font-semibold text-rose-700 underline underline-offset-2">
            Trinity+ product page
          </a>
          {' '}is useful for understanding how the attachment ecosystem is positioned before you compare it against simpler or more pro-style devices.
        </p>
      </section>

      <section className="mb-12 rounded-[2rem] border border-rose-200 bg-slate-900 p-6 text-slate-100">
        <h2 className="text-2xl font-black">Complete the setup</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {companionItems.map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noopener nofollow sponsored" className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900">FAQ</h2>
        <div className="mt-6 grid gap-4">
          {faqItems.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-rose-200 bg-rose-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">More beauty tech guides</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link href="/beauty" className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
            <h3 className="text-lg font-bold text-slate-900">Browse all beauty guides</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">See the full Beauty hub for LED masks, ingredients, and hair-tool comparisons.</p>
          </Link>
          <Link href="/beauty/is-omnilux-contour-worth-it" className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
            <h3 className="text-lg font-bold text-slate-900">Is the Omnilux Contour Worth It?</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">A related single-product beauty-tech breakdown for readers comparing device categories.</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
