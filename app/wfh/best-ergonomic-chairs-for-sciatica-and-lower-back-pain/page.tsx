import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ExternalProductImage from '@/components/ui/ExternalProductImage'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/wfh/best-ergonomic-chairs-for-sciatica-and-lower-back-pain'
const publishedDate = '2026-07-11T00:00:00Z'
const updatedDate = '2026-07-11T00:00:00Z'
const AMAZON_TAG = 'althcu-20'

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

const metaDescription =
  'The best ergonomic chairs for sciatica and lower back pain in 2026: 5 picks ranked by lumbar adjustability, seat behavior, posture support, and realistic buyer fit.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best Ergonomic Chairs for Sciatica & Lower Back Pain (2026) | BestPickZone',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'best ergonomic chairs for sciatica',
      'best office chair for lower back pain',
      'best ergonomic chair for sciatica and lower back pain',
      'best chair for back pain work from home',
      'best office chair for herniated disc',
      'best lumbar support office chair',
      'best ergonomic chairs for long sitting',
      'best chairs for back pain under 500',
      'best office chair for tailbone pain',
      'best office chair for posture and back pain',
    ],
    openGraph: {
      title: 'Best Ergonomic Chairs for Sciatica & Lower Back Pain',
      description: metaDescription,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Ergonomic Chairs for Sciatica & Lower Back Pain',
      description:
        'Five ergonomic chairs ranked by lumbar support, adjustability, seat feel, and real lower-back buyer fit.',
    },
  },
  {
    category: 'wfh',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'WFH',
    url: pageUrl,
    tags: ['ergonomic chair', 'sciatica', 'lower back pain', 'home office'],
  }
)

type ChairPick = {
  rank: number
  title: string
  bestFor: string
  keySpec: string
  priceBand: '$' | '$$' | '$$$'
  summary: string
  review: string
  skipIf: string
  ourPickName: string
  whyThisOne: string
  amazonQuery: string
  image: string
}

const picks: ChairPick[] = [
  {
    rank: 1,
    title: 'Best overall for active back support',
    bestFor: 'People who want premium support and move a lot while sitting',
    keySpec: 'Dynamic back support with premium ergonomic tuning',
    priceBand: '$$$',
    summary:
      'The Embody is the top pick here because it supports movement instead of just freezing you in one posture. For many lower-back-sensitive buyers, that matters more than raw cushion softness. The chair encourages micro-adjustment through the day, which can feel much better than a static seat once long work sessions stack up.',
    review:
      'This is the chair I would point higher-budget back-pain shoppers toward first if they want a premium chair that still feels alive rather than rigid. It is expensive, but the support concept is unusually thoughtful.',
    skipIf:
      'Your budget is under $1,000 or you strongly prefer a simpler-looking chair without such a distinctive back design.',
    ourPickName: 'Herman Miller Embody',
    whyThisOne:
      'It is the strongest overall fit for buyers who want active support, premium build, and a chair that still feels good across long sessions rather than the first twenty minutes.',
    amazonQuery: 'Herman Miller Embody chair',
    image: 'https://m.media-amazon.com/images/I/not-real-embody.jpg',
  },
  {
    rank: 2,
    title: 'Best for lumbar adjustability',
    bestFor: 'Buyers who need more control over seat and back fit',
    keySpec: 'Strong ergonomic range with proven task-chair adjustability',
    priceBand: '$$$',
    summary:
      'The Steelcase Leap remains one of the easiest premium chairs to recommend when the main issue is fit. Lower-back-sensitive buyers often do better when the chair gives them more ways to tune seat behavior, back feel, and posture support rather than asking them to adapt to a fixed shape.',
    review:
      'If the Embody is the more dynamic pick, the Leap is the more configurable one. It is excellent for the buyer who knows they need adjustability rather than a one-shape-fits-most approach.',
    skipIf:
      'You want very minimal aesthetics or care more about visual lightness than about maximum ergonomic range.',
    ourPickName: 'Steelcase Leap',
    whyThisOne:
      'Its reputation comes from real fit range. For back-pain shoppers, adjustability is not a luxury feature. It is often the entire difference between relief and aggravation.',
    amazonQuery: 'Steelcase Leap chair',
    image: 'https://m.media-amazon.com/images/I/not-real-leap.jpg',
  },
  {
    rank: 3,
    title: 'Best for firmer support and hot sitters',
    bestFor: 'People who prefer mesh and more structured posture support',
    keySpec: 'Mesh seat/back with PostureFit SL support option',
    priceBand: '$$$',
    summary:
      'The Aeron works best for buyers who like a firmer, more structured sitting experience and tend to run warm. It is not the softest option on this list, but that is also part of why many people find it supportive over long desk sessions.',
    review:
      'This is a great pick for the right body and preference profile. The mesh feel is more decisive than on many chairs, so it tends to inspire either loyalty or fast rejection.',
    skipIf:
      'You want a softer, cushier seat feel or dislike chairs that feel more disciplined than forgiving.',
    ourPickName: 'Herman Miller Aeron with PostureFit SL',
    whyThisOne:
      'It remains one of the strongest firm-support options for people who do better with mesh, cooling, and a more structured ergonomic posture.',
    amazonQuery: 'Herman Miller Aeron PostureFit SL chair',
    image: 'https://m.media-amazon.com/images/I/not-real-aeron.jpg',
  },
  {
    rank: 4,
    title: 'Best mid-price compromise',
    bestFor: 'Shoppers who want real ergonomics below flagship pricing',
    keySpec: 'Midrange ergonomic tuning with cleaner pricing',
    priceBand: '$$',
    summary:
      'The Branch Ergonomic Pro makes sense for buyers who want meaningful support and decent adjustability without climbing into flagship-chair spending immediately. It is not a cheap chair, but it is much easier to justify than the premium tier.',
    review:
      'This is the chair for the buyer who wants something serious without entering the luxury office-chair bracket. It gives you enough ergonomics to matter, even if it is not as expansive or refined as the top three.',
    skipIf:
      'You are over 6 foot 3 or need a chair with a bigger fit envelope for a taller frame.',
    ourPickName: 'Branch Ergonomic Pro',
    whyThisOne:
      'It is the most balanced middle-ground pick here: more credible than bargain chairs, less painful than flagship pricing.',
    amazonQuery: 'Branch Ergonomic Pro office chair',
    image: 'https://m.media-amazon.com/images/I/not-real-branch.jpg',
  },
  {
    rank: 5,
    title: 'Best budget pick under $400',
    bestFor: 'Back-pain shoppers who need a real budget ceiling',
    keySpec: 'Solid core ergonomics at entry ergonomic pricing',
    priceBand: '$',
    summary:
      'The HON Ignition 2.0 is the budget chair here because it does a respectable job of covering the basics without pretending to be a luxury ergonomic throne. It is the pick for people who need an actual spending cap but still want something more credible than a random Amazon chair with exaggerated marketing copy.',
    review:
      'No, it is not in the same universe as the premium chairs on refinement. But in the real world, a decent ergonomic chair you can actually afford beats endlessly researching a flagship model you will not buy.',
    skipIf:
      'You already know you are unusually sensitive to seat shape or need the kind of deep adjustment range that usually lives in more expensive chairs.',
    ourPickName: 'HON Ignition 2.0',
    whyThisOne:
      'It covers the fundamentals well enough to be a legitimate budget recommendation instead of a placeholder pick.',
    amazonQuery: 'HON Ignition 2.0 office chair',
    image: 'https://m.media-amazon.com/images/I/not-real-hon.jpg',
  },
]

const faqItems = [
  {
    question: 'Is mesh or foam better for lower back pain?',
    answer:
      'Neither material wins automatically. The better choice depends on whether your body does better with firmer, more structured support or a softer, more cushioned feel. Fit, lumbar behavior, and adjustability matter more than mesh-versus-foam by itself.',
  },
  {
    question: 'Should you sit upright all day if you have sciatica?',
    answer:
      'Usually the goal is not rigid upright sitting all day. It is supported posture plus movement and variation. A chair that lets you change position, fine-tune support, and avoid collapsing into poor posture is usually more helpful than forcing one exact angle.',
  },
  {
    question: 'What matters most in a chair for lower back pain?',
    answer:
      'The main factors are lumbar depth and shape, seat-pan behavior, adjustability, arm support, and whether the chair fits your body size. Price matters less than fit and ergonomic range once pain is part of the buying decision.',
  },
  {
    question: 'When should you see a professional for back pain?',
    answer:
      'If pain is persistent, worsening, radiating, or affecting daily function, it is worth talking to a qualified medical professional. A better chair can reduce strain, but it is not a substitute for diagnosis or treatment.',
  },
]

const companionItems = [
  {
    title: 'Lumbar cushion',
    text: 'Useful when your current chair is close but still needs one more support point.',
    href: amazonSearch('lumbar cushion office chair'),
  },
  {
    title: 'Footrest',
    text: 'A smarter add-on than people expect when seat height and leg comfort are part of the problem.',
    href: amazonSearch('ergonomic footrest under desk'),
  },
  {
    title: 'Seat cushion',
    text: 'Worth considering if pressure relief is the bigger issue than backrest shape.',
    href: amazonSearch('ergonomic seat cushion office chair'),
  },
]

const fullText = [
  metaDescription,
  ...picks.map((pick) => `${pick.title} ${pick.summary} ${pick.review} ${pick.skipIf}`),
  ...faqItems.map((faq) => `${faq.question} ${faq.answer}`),
].join(' ')

const readingTime = formatReadingTime(getReadingTime(fullText))

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: picks.map((pick, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: pick.ourPickName,
    url: amazonSearch(pick.amazonQuery),
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bestpickzone.com/' },
    { '@type': 'ListItem', position: 2, name: 'WFH', item: 'https://bestpickzone.com/wfh' },
    { '@type': 'ListItem', position: 3, name: 'Best Ergonomic Chairs for Sciatica and Lower Back Pain', item: pageUrl },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Ergonomic Chairs for Sciatica & Lower Back Pain',
  description: metaDescription,
  datePublished: publishedDate,
  dateModified: updatedDate,
  mainEntityOfPage: pageUrl,
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: { '@type': 'Organization', name: 'BestPickZone' },
}

export default function ErgonomicChairsSciaticaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'WFH', href: '/wfh' },
          { label: 'Best Ergonomic Chairs for Sciatica & Lower Back Pain' },
        ]}
      />

      <div className="mb-6 rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4 text-sm text-sky-900">
        <strong>Affiliate disclosure:</strong> As an Amazon Associate, BestPickZone earns from qualifying purchases.
      </div>

      <section className="mb-10 rounded-[2.25rem] border border-sky-200 bg-[linear-gradient(140deg,#eff6ff_0%,#ffffff_45%,#ecfeff_100%)] px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-800">
          Ergonomic Chair Guide
        </p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          The best ergonomic chairs for sciatica and lower back pain start with fit, not hype.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          Chair advice for back pain gets vague fast, which is a problem because vague buying criteria are exactly what cause expensive returns. If you are shopping with sciatica or persistent lower-back discomfort in mind, the real question is not “what is the best chair?” It is “which chair shape, lumbar behavior, seat feel, and adjustment range are least likely to irritate my body over long sessions?”
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          This page ranks five chairs by buyer fit. The premium picks are here because they deliver broader ergonomic range, not just better branding. The lower-priced picks are here because realistic budget ceilings matter too.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
          This is general ergonomic buying guidance, not medical advice. If pain is persistent, worsening, or radiating, talk with a qualified professional.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-sky-200">Updated July 11, 2026</span>
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-sky-200">{readingTime}</span>
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-sky-200">5 ranked chairs</span>
        </div>
      </section>

      <section className="mb-10 rounded-[2rem] border border-sky-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">What actually helps sciatica in a chair</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-slate-50 p-4">
            <h3 className="font-bold text-slate-900">Lumbar depth</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">You want support that meets your lower back without aggressively pushing you out of the chair.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <h3 className="font-bold text-slate-900">Seat pan behavior</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">Seat depth, edge comfort, and how the chair tilts or reclines all affect leg and nerve comfort over time.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <h3 className="font-bold text-slate-900">Adjustability</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">Back-pain buying is less forgiving than casual office-chair buying, so fit range matters more than aesthetic minimalism.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <h3 className="font-bold text-slate-900">Movement</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">The best chair is usually one that supports posture changes instead of forcing one frozen position all day.</p>
          </div>
        </div>
      </section>

      <section className="mb-10 rounded-[2rem] border border-sky-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">Comparison table</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-sky-100 px-4 py-3 font-semibold text-slate-900">Chair</th>
                <th className="border-b border-sky-100 px-4 py-3 font-semibold text-slate-900">Best for</th>
                <th className="border-b border-sky-100 px-4 py-3 font-semibold text-slate-900">Key spec</th>
                <th className="border-b border-sky-100 px-4 py-3 font-semibold text-slate-900">Price band</th>
                <th className="border-b border-sky-100 px-4 py-3 font-semibold text-slate-900">Buy</th>
              </tr>
            </thead>
            <tbody>
              {picks.map((pick) => (
                <tr key={pick.ourPickName}>
                  <td className="border-b border-sky-50 px-4 py-3 text-slate-900">{pick.ourPickName}</td>
                  <td className="border-b border-sky-50 px-4 py-3 text-slate-700">{pick.bestFor}</td>
                  <td className="border-b border-sky-50 px-4 py-3 text-slate-700">{pick.keySpec}</td>
                  <td className="border-b border-sky-50 px-4 py-3 text-slate-700">{pick.priceBand}</td>
                  <td className="border-b border-sky-50 px-4 py-3">
                    <a
                      href={amazonSearch(pick.amazonQuery)}
                      target="_blank"
                      rel="noopener nofollow sponsored"
                      className="font-semibold text-sky-700 underline underline-offset-2"
                    >
                      Amazon
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 rounded-[2rem] border border-sky-200 bg-sky-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">How we picked</h2>
        <p className="mt-3 text-base leading-7 text-slate-700">
          This list is curated around ergonomic criteria that actually matter for lower-back-sensitive buyers: lumbar behavior, seat support, adjustability range, posture change potential, and realistic body-fit limitations. It is not a claim of medical testing. It is a researched buyer guide for people trying to choose more intelligently.
        </p>
      </section>

      <section className="mb-12 space-y-6">
        {picks.map((pick) => (
          <article key={pick.rank} className="rounded-[2rem] border border-sky-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex items-start gap-4 lg:w-[200px] lg:flex-col">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-lg font-black text-sky-800">
                  {pick.rank}
                </div>
                <a
                  href={amazonSearch(pick.amazonQuery)}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="shrink-0"
                >
                  <ExternalProductImage
                    src={pick.image}
                    alt={pick.ourPickName}
                    title={pick.title}
                    fallbackAccentClassName="from-sky-100 via-white to-cyan-100"
                    className="h-32 w-32 rounded-2xl border border-sky-100 bg-white object-contain p-2"
                  />
                </a>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
                    {pick.bestFor}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                    {pick.priceBand}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-black text-slate-900">{pick.title}</h3>
                <p className="mt-3 text-sm font-medium text-slate-500">Our pick: {pick.ourPickName}</p>
                <p className="mt-4 text-base leading-8 text-slate-700">{pick.summary}</p>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  <strong className="text-slate-900">Review summary:</strong> {pick.review}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <strong className="text-slate-900">Why this one:</strong> {pick.whyThisOne}
                </p>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-900">
                  <strong>Skip this if:</strong> {pick.skipIf}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={amazonSearch(pick.amazonQuery)}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
                  >
                    Check Amazon options
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-sky-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-slate-900">Chairs to avoid for back pain</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            The patterns to avoid are usually the same: bucket-seat shapes that force the body into one posture, chairs with shallow or fake lumbar bumps, chairs with almost no arm adjustment, and chairs that look dramatic but give you no real fit range. In this category, “looks supportive” is not the same as supportive.
          </p>
        </div>
        <div className="rounded-[2rem] border border-sky-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-slate-900">Helpful outside resource</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            For a non-shopping posture and back-pain baseline, Mayo Clinic&apos;s{' '}
            <a
              href="https://www.mayoclinic.org/diseases-conditions/back-pain/symptoms-causes/syc-20369906"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-800 underline underline-offset-2"
            >
              back pain guidance
            </a>
            {' '}is a useful companion to any chair-buying decision.
          </p>
        </div>
      </section>

      <section className="mb-12 rounded-[2rem] border border-sky-200 bg-slate-900 p-6 text-slate-100">
        <h2 className="text-2xl font-black">Complete the setup</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {companionItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener nofollow sponsored"
              className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
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
            <article key={faq.question} className="rounded-3xl border border-sky-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-sky-200 bg-sky-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">More WFH setup guides</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link href="/wfh" className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
            <h3 className="text-lg font-bold text-slate-900">Browse all WFH guides</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">See the full home-office hub for chairs, desks, monitor arms, and ergonomic desk gear.</p>
          </Link>
          <Link href="/wfh/best-used-herman-miller-aeron-chairs-ebay" className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
            <h3 className="text-lg font-bold text-slate-900">Best Used Herman Miller Aeron Chairs on eBay</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">A practical guide for buying Aeron ergonomics at a more realistic price point.</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
