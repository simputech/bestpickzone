import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ExternalProductImage from '@/components/ui/ExternalProductImage'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/coffee/what-to-buy-with-your-breville-bambino-plus'
const publishedDate = '2026-07-11T00:00:00Z'
const updatedDate = '2026-07-11T00:00:00Z'
const AMAZON_TAG = 'althcu-20'

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

const metaDescription =
  'What to buy with your Breville Bambino Plus in 2026: 7 upgrades that actually improve espresso workflow, from the grinder that matters most to the accessories that make dialing in easier.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'What to Buy With Your Breville Bambino Plus (2026) | BestPickZone',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'what to buy with breville bambino plus',
      'best breville bambino plus accessories',
      'breville bambino plus upgrades',
      'bambino plus grinder',
      'bambino plus accessories amazon',
      'best accessories for breville bambino plus',
      'bambino plus bottomless portafilter',
      'bambino plus tamper',
      'bambino plus precision basket',
      'breville bambino plus workflow upgrades',
    ],
    openGraph: {
      title: 'What to Buy With Your Breville Bambino Plus',
      description: metaDescription,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'What to Buy With Your Breville Bambino Plus',
      description:
        'Seven Breville Bambino Plus upgrades that actually matter, ranked by espresso payoff and workflow improvement.',
    },
  },
  {
    category: 'coffee',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Coffee',
    url: pageUrl,
    tags: ['breville bambino plus', 'espresso accessories', 'coffee gear', 'amazon finds'],
  }
)

type Pick = {
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

const picks: Pick[] = [
  {
    rank: 1,
    title: 'Espresso-capable grinder',
    bestFor: 'Anyone still using pre-ground coffee or a filter-first grinder',
    keySpec: 'True espresso range with repeatable adjustment',
    priceBand: '$$',
    summary:
      'This is the single upgrade that changes the Bambino Plus most. The machine heats fast, steams well, and can pull surprisingly good shots, but it has no built-in grinder, which means the whole setup is only as good as the grind you feed it.',
    review:
      'If you buy only one thing after the machine, buy the grinder. Everything else on this list helps workflow, but the grinder is what most directly changes shot quality, consistency, and how easy it is to dial in.',
    skipIf:
      'You already own a grinder that can genuinely handle espresso, not just a stepped brew grinder that technically goes fine.',
    ourPickName: 'Baratza Encore ESP',
    whyThisOne:
      'It is one of the clearest value upgrades for Bambino owners because it gives you espresso range without pushing you into a much more expensive grinder tier right away.',
    amazonQuery: 'Baratza Encore ESP coffee grinder',
    image: 'https://m.media-amazon.com/images/I/not-real-bambino-grinder.jpg',
  },
  {
    rank: 2,
    title: 'WDT distribution tool',
    bestFor: 'Cheaper puck-prep upgrade with real taste payoff',
    keySpec: 'Fine needles for declumping grounds before tamping',
    priceBand: '$',
    summary:
      'The Bambino Plus can be a little unforgiving when your puck prep is uneven. A WDT tool is the small upgrade that helps reduce clumps and uneven density before tamping, which often means fewer messy extractions and more balanced shots.',
    review:
      'This is one of the rare low-cost espresso accessories that can actually change the cup. It is also one of the easiest workflow additions to justify because the routine becomes automatic fast.',
    skipIf:
      'You already have a puck-prep routine that produces even extractions consistently and you never fight channeling.',
    ourPickName: 'Normcore WDT Distribution Tool',
    whyThisOne:
      'Normcore is a common pick in this category because the tool is simple, repeatable, and designed around the exact prep problem many Bambino owners run into early.',
    amazonQuery: 'Normcore WDT distribution tool espresso',
    image: 'https://m.media-amazon.com/images/I/not-real-bambino-wdt.jpg',
  },
  {
    rank: 3,
    title: '53.3mm calibrated tamper',
    bestFor: 'Owners who want more consistent tamp pressure',
    keySpec: 'Bambino-fitting 53.3mm or 54mm size with spring assist',
    priceBand: '$$',
    summary:
      'This is where Bambino-specific fit matters. The Bambino Plus uses a 54mm platform, so this is not the machine for generic 58mm espresso accessories. A properly sized calibrated tamper gives you a cleaner, more repeatable tamp than the box accessory most people start with.',
    review:
      'This is a workflow upgrade more than a taste miracle, but workflow matters a lot on the Bambino because the machine itself is so fast. Better tamp consistency means fewer shots wasted on preventable prep mistakes.',
    skipIf:
      'You are already happy with the included tamper and are not seeing inconsistency from puck prep.',
    ourPickName: 'Normcore 53.3mm Spring-Loaded Tamper',
    whyThisOne:
      'It fits the Bambino ecosystem better than generic 58mm suggestions and solves a real problem: consistent pressure with less fuss.',
    amazonQuery: 'Normcore 53.3mm calibrated espresso tamper',
    image: 'https://m.media-amazon.com/images/I/not-real-bambino-tamper.jpg',
  },
  {
    rank: 4,
    title: 'Bottomless 54mm portafilter',
    bestFor: 'Bambino owners who want to diagnose channeling',
    keySpec: '54mm bottomless design for shot visibility',
    priceBand: '$$',
    summary:
      'A bottomless portafilter is not about making the setup look more serious. It is useful because it shows you exactly what the shot is doing. If the extraction sprays, runs unevenly, or blondes too fast, you learn much faster than you do with a spouted portafilter.',
    review:
      'This is the upgrade for people who actually want to improve, not just accessorize. It is not necessary for casual milk-drink drinkers, but it is one of the best learning tools in the whole espresso workflow.',
    skipIf:
      'You never want to dial in beyond a basic good-enough routine and do not care to inspect shot behavior directly.',
    ourPickName: '54mm Bottomless Portafilter for Breville Bambino Plus',
    whyThisOne:
      'A Bambino-specific bottomless portafilter helps you read puck prep mistakes immediately and is especially useful once the grinder and WDT are already in place.',
    amazonQuery: '54mm bottomless portafilter Breville Bambino Plus',
    image: 'https://m.media-amazon.com/images/I/not-real-bambino-portafilter.jpg',
  },
  {
    rank: 5,
    title: 'Precision basket',
    bestFor: 'Owners chasing cleaner, more repeatable extractions',
    keySpec: 'Precision-drilled basket built for more even flow',
    priceBand: '$$',
    summary:
      'A precision basket is one of the later-stage upgrades on this list because it matters most once your grinder and prep are already decent. It can improve consistency, but it is not the thing to buy before you fix the bigger workflow bottlenecks.',
    review:
      'This is a very worthwhile upgrade for someone who is already paying attention to dose, grind, and tamp. For a casual user, it is less transformational than the grinder or WDT.',
    skipIf:
      'Your grinder is still the weak point or you are not yet trying to fine-tune shot behavior.',
    ourPickName: 'IMS Precision Basket for Breville 54mm',
    whyThisOne:
      'It is one of the most common next-step upgrades for Bambino owners who want more control out of the same machine.',
    amazonQuery: 'IMS precision basket Breville 54mm',
    image: 'https://m.media-amazon.com/images/I/not-real-bambino-basket.jpg',
  },
  {
    rank: 6,
    title: 'Coffee scale with timer',
    bestFor: 'Anyone who wants consistent yield and shot timing',
    keySpec: 'Fast-response scale with brew timer',
    priceBand: '$$',
    summary:
      'The Bambino Plus is quick enough that it really benefits from tighter dose and yield control. A scale with a timer helps turn random button presses into repeatable espresso, especially when you are trying to keep shots within a useful range instead of guessing by eye.',
    review:
      'This is one of the highest-value discipline tools on the list. It does not make the espresso by itself, but it makes improvement much less fuzzy.',
    skipIf:
      'You are happy making milk drinks by feel and do not care about repeatability from shot to shot.',
    ourPickName: 'Timemore Black Mirror Nano',
    whyThisOne:
      'It is small enough for espresso workflow, quick enough to be useful, and much easier to justify than jumping straight to ultra-premium scale pricing.',
    amazonQuery: 'Timemore Black Mirror Nano espresso scale',
    image: 'https://m.media-amazon.com/images/I/not-real-bambino-scale.jpg',
  },
  {
    rank: 7,
    title: 'Knock box and milk pitcher',
    bestFor: 'Milk-drink households finishing the workflow',
    keySpec: 'Cleanup helper plus steaming accessory',
    priceBand: '$',
    summary:
      'These are the nice-to-haves on the list. A knock box keeps cleanup tidier and a better milk pitcher improves steam-pour workflow if the Bambino Plus is mostly making cappuccinos, cortados, or lattes in your kitchen.',
    review:
      'Neither of these matters as much as the grinder, but together they make the setup feel more complete. They are especially worth it if the machine gets daily use and milk drinks are part of the routine.',
    skipIf:
      'You almost never steam milk and do not mind knocking pucks out into a trash can.',
    ourPickName: 'Breville-Compatible Knock Box and Milk Pitcher Pair',
    whyThisOne:
      'This is the finish-the-station upgrade rather than the fix-the-shot upgrade, which is why it belongs at the end of the ranking.',
    amazonQuery: 'espresso knock box milk pitcher set',
    image: 'https://m.media-amazon.com/images/I/not-real-bambino-pitcher.jpg',
  },
]

const faqItems = [
  {
    question: 'Does the Breville Bambino Plus need a separate grinder?',
    answer:
      'If you want the Bambino Plus to perform anywhere near its ceiling, yes. The machine has no built-in grinder, and espresso is extremely sensitive to grind size. A true espresso-capable grinder is the most important add-on by a wide margin.',
  },
  {
    question: 'What is the first accessory I should buy for the Bambino Plus?',
    answer:
      'The first purchase should usually be the grinder. After that, the best cheap upgrade is a WDT tool, because it improves puck prep without costing much.',
  },
  {
    question: 'Does the Bambino Plus use 58mm accessories?',
    answer:
      'No. The Bambino Plus uses a 54mm system, so many common 58mm espresso accessories made for machines like the Gaggia Classic Pro are not the right fit here.',
  },
  {
    question: 'Is a bottomless portafilter worth it on the Bambino Plus?',
    answer:
      'It is worth it if you want to learn and improve. A bottomless portafilter is one of the best tools for spotting channeling and uneven puck prep, but it is less necessary if you only want casual milk drinks with minimal fuss.',
  },
]

const comparisonRows = picks.map((pick) => ({
  product: pick.ourPickName,
  bestFor: pick.bestFor,
  keySpec: pick.keySpec,
  priceBand: pick.priceBand,
  href: amazonSearch(pick.amazonQuery),
}))

const companionItems = [
  {
    title: 'Start with the grinder',
    text: 'If the Bambino still feels inconsistent, the grinder is almost always the real bottleneck.',
    href: amazonSearch('Baratza Encore ESP coffee grinder'),
  },
  {
    title: 'Then lock in prep',
    text: 'The WDT tool and calibrated tamper are the small upgrades that make the machine easier to repeat.',
    href: amazonSearch('Normcore WDT tool espresso tamper'),
  },
  {
    title: 'Finish the station',
    text: 'A scale, pitcher, and knock box turn the machine from appliance into a smoother daily setup.',
    href: amazonSearch('espresso scale milk pitcher knock box'),
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
    { '@type': 'ListItem', position: 2, name: 'Coffee', item: 'https://bestpickzone.com/coffee' },
    { '@type': 'ListItem', position: 3, name: 'What to Buy With Your Breville Bambino Plus', item: pageUrl },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What to Buy With Your Breville Bambino Plus (7 Upgrades That Actually Matter)',
  description: metaDescription,
  datePublished: publishedDate,
  dateModified: updatedDate,
  mainEntityOfPage: pageUrl,
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: { '@type': 'Organization', name: 'BestPickZone' },
}

export default function BambinoAccessoriesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Coffee', href: '/coffee' },
          { label: 'What to Buy With Your Breville Bambino Plus' },
        ]}
      />

      <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
        <strong>Affiliate disclosure:</strong> As an Amazon Associate, BestPickZone earns from qualifying purchases.
      </div>

      <section className="mb-10 rounded-[2.25rem] border border-stone-300 bg-[linear-gradient(140deg,#fff7ed_0%,#ffffff_45%,#fef3c7_100%)] px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-800">
          Coffee Upgrade Guide
        </p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          What to buy with your Breville Bambino Plus if you want the machine to feel easier, cleaner, and more consistent.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          The Bambino Plus is a classic “good machine, incomplete station” purchase. It heats up fast and makes sense for people who want home espresso without a giant footprint, but it also pushes a lot of responsibility onto the accessories around it because there is no built-in grinder and the stock workflow runs out of ceiling pretty quickly.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          This page ranks the seven upgrades that actually matter, in return-on-investment order rather than price order. The grinder is first because it changes the machine most. The smaller tools come next because they make the Bambino easier to repeat. Then come the add-ons that help once you actually want to dial in.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-stone-200">Updated July 11, 2026</span>
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-stone-200">{readingTime}</span>
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-stone-200">7 ranked upgrades</span>
        </div>
      </section>

      <section className="mb-10 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">The full setup at a glance</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-stone-200 px-4 py-3 font-semibold text-slate-900">Product</th>
                <th className="border-b border-stone-200 px-4 py-3 font-semibold text-slate-900">Best for</th>
                <th className="border-b border-stone-200 px-4 py-3 font-semibold text-slate-900">Key spec</th>
                <th className="border-b border-stone-200 px-4 py-3 font-semibold text-slate-900">Price band</th>
                <th className="border-b border-stone-200 px-4 py-3 font-semibold text-slate-900">Buy</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.product}>
                  <td className="border-b border-stone-100 px-4 py-3 text-slate-900">{row.product}</td>
                  <td className="border-b border-stone-100 px-4 py-3 text-slate-700">{row.bestFor}</td>
                  <td className="border-b border-stone-100 px-4 py-3 text-slate-700">{row.keySpec}</td>
                  <td className="border-b border-stone-100 px-4 py-3 text-slate-700">{row.priceBand}</td>
                  <td className="border-b border-stone-100 px-4 py-3">
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener nofollow sponsored"
                      className="font-semibold text-amber-800 underline underline-offset-2"
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

      <section className="mb-10 rounded-[2rem] border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">How we picked</h2>
        <p className="mt-3 text-base leading-7 text-slate-700">
          This list is curated around Bambino-specific workflow friction: no built-in grinder, a 54mm accessory ecosystem, very fast heat-up, and a machine that can outperform its stock setup once puck prep gets more consistent. We did not frame every accessory as essential. The ranking favors the upgrades that most improve espresso results or reduce repeated frustration.
        </p>
      </section>

      <section className="mb-12 space-y-6">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-slate-900">The one upgrade that matters most</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            The Breville Bambino Plus is only as good as the grind you feed it. That sounds obvious, but it matters even more on a machine like this because the machine itself removes so much other friction. It is ready fast. It fits easily on a counter. It does not demand a long warm-up routine. That means the grinder becomes the thing most likely to determine whether espresso feels fun or maddening.
          </p>
        </div>

        <div className="space-y-6">
          {picks.map((pick) => (
            <article key={pick.rank} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex items-start gap-4 lg:w-[200px] lg:flex-col">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-lg font-black text-amber-800">
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
                      fallbackAccentClassName="from-amber-100 via-white to-stone-100"
                      className="h-32 w-32 rounded-2xl border border-stone-200 bg-white object-contain p-2"
                    />
                  </a>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
                      {pick.bestFor}
                    </span>
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
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
                      className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
                    >
                      Check Amazon options
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-slate-900">The $20 upgrades that punch above their price</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            On the Bambino Plus, the small prep tools deserve more respect than they usually get. A WDT tool and a correctly sized calibrated tamper do not have the glamour of a grinder, but they directly reduce messy, uneven puck prep. That matters because the machine is quick enough that workflow mistakes show up fast.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-slate-900">Upgrades for when you want to dial in</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Once the grinder and prep are sorted, the bottomless portafilter, precision basket, and espresso scale become much more worth it. These are not starter purchases for everyone, but they are exactly the upgrades that make sense once you want better feedback and more repeatability from the same compact machine.
          </p>
        </div>
      </section>

      <section className="mb-12 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">Nice-to-haves that finish the setup</h2>
        <p className="mt-4 text-base leading-7 text-slate-700">
          The knock box and milk pitcher are last for a reason. They matter, but they matter after the espresso itself is already in a better place. If the Bambino Plus mostly makes flat whites or lattes in your house, though, these are the purchases that make the station feel complete rather than improvised.
        </p>
      </section>

      <section className="mb-12 rounded-[2rem] border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">Helpful outside resource</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          If you are still learning the machine itself, Breville&apos;s official{' '}
          <a
            href="https://www.breville.com/inspiration/en-us/tutorials/the-bambino-plus/first-time-setup/setting-up-your-machine"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-800 underline underline-offset-2"
          >
            Bambino Plus setup guide
          </a>
          {' '}is a useful non-shopping companion before you start upgrading the station.
        </p>
      </section>

      <section className="mb-12 rounded-[2rem] border border-stone-200 bg-slate-900 p-6 text-slate-100">
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
            <article key={faq.question} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">More coffee gear guides</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link href="/coffee" className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
            <h3 className="text-lg font-bold text-slate-900">Browse all coffee guides</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">See the full Coffee hub for grinders, espresso machines, scales, and brewing tools.</p>
          </Link>
          <Link href="/coffee/breville-bambino-plus-vs-gaggia-classic-pro" className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
            <h3 className="text-lg font-bold text-slate-900">Breville Bambino Plus vs Gaggia Classic Pro</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">Compare the fast, compact Bambino workflow against the 58mm brass-boiler classic.</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
