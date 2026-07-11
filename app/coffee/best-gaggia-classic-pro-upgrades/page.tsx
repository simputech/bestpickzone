import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { formatReadingTime, getReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/coffee/best-gaggia-classic-pro-upgrades'
const publishedDate = '2026-07-11T00:00:00Z'
const updatedDate = '2026-07-11T00:00:00Z'
const AMAZON_TAG = 'althcu-20'

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

const metaDescription =
  'The Gaggia Classic Pro upgrades actually worth buying in 2026, ranked by espresso payoff. Start with the grinder prerequisite, then the 58mm tools, baskets, PID, and maintenance upgrades that matter.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best Gaggia Classic Pro Upgrades (2026) | BestPickZone',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'best gaggia classic pro upgrades',
      'gaggia classic pro mods',
      'gaggia classic pro accessories',
      'best gaggia classic pro accessories',
      'gaggia classic pro 58mm upgrades',
      'gaggia classic pro pid kit',
      'gaggia classic pro bottomless portafilter',
      'gaggia classic pro ims basket',
      'gaggia classic pro grinder',
      'gaggia classic pro steam wand mod',
    ],
    openGraph: {
      title: 'Best Gaggia Classic Pro Upgrades',
      description: metaDescription,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Gaggia Classic Pro Upgrades',
      description:
        'Ten Gaggia Classic Pro upgrades and accessories ranked by espresso payoff, 58mm fit, and actual owner ROI.',
    },
  },
  {
    category: 'coffee',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Coffee',
    url: pageUrl,
    tags: ['Gaggia Classic Pro', 'espresso accessories', '58mm gear', 'amazon finds'],
  }
)

type Pick = {
  rank: number
  title: string
  product: string
  whatItUpgrades: string
  effort: string
  priceBand: '$' | '$$' | '$$$'
  fitment: string
  summary: string
  whyItMatters: string
  skipIf: string
  amazonQuery: string
}

const picks: Pick[] = [
  {
    rank: 1,
    title: 'Espresso-Capable Grinder',
    product: 'Baratza Encore ESP or Eureka Mignon Notte',
    whatItUpgrades: 'The grind quality feeding every shot',
    effort: 'Plug-in setup, no machine mod',
    priceBand: '$$',
    fitment: 'Applies to every Gaggia Classic Pro or E24 owner, regardless of machine revision',
    summary:
      'This is the awkward but necessary truth about the Gaggia Classic Pro: the grinder is not the most romantic upgrade, yet it is the one that decides whether the rest of the machine feels rewarding or frustrating. The Gaggia earns its reputation because it gives you a real 58mm platform, a brass-boiler workflow on the current E24, and a much deeper accessory path than convenience-first machines. But that whole story collapses if your grind is too coarse, too inconsistent, or too limited to dial properly for non-pressurized espresso.',
    whyItMatters:
      'If you already own the machine, this still belongs first because it changes the cup more than any basket, shower screen, or cosmetic add-on ever will. The Classic Pro is honest equipment. It reveals bad prep quickly. A real espresso grinder gives you the adjustment range that makes the machine feel teachable instead of temperamental.',
    skipIf:
      'you already own a grinder that is genuinely espresso-capable and repeatable, not just a brew grinder that can choke the machine once in a while.',
    amazonQuery: 'Baratza Encore ESP espresso grinder',
  },
  {
    rank: 2,
    title: '58mm Bottomless Portafilter',
    product: '58mm Bottomless Portafilter for Gaggia Classic Pro',
    whatItUpgrades: 'Extraction feedback and shot diagnosis',
    effort: '30-second swap',
    priceBand: '$$',
    fitment: '58mm Gaggia Classic Pro / E24 compatible bottomless portafilter',
    summary:
      'The bottomless portafilter is where the Gaggia starts to feel like a real tinkering platform instead of just an entry-level espresso machine. It gives you the feedback loop that makes improvement faster. If the shot channels, sprays, or starts unevenly, you know immediately. That visual information is why this upgrade ranks above most other machine-side changes.',
    whyItMatters:
      'Gaggia’s 58mm standard is one of the machine’s biggest selling points, and the bottomless handle is the cleanest example of why that matters. It lets you learn faster, use a wider accessory ecosystem, and actually see whether puck prep is improving.',
    skipIf:
      'you want a forgiving milk-drink machine and have no interest in watching shots closely or tuning technique.',
    amazonQuery: '58mm bottomless portafilter Gaggia Classic Pro',
  },
  {
    rank: 3,
    title: 'IMS Precision Basket',
    product: 'IMS 58mm Precision Basket',
    whatItUpgrades: 'More even extraction once prep is solid',
    effort: '30-second swap',
    priceBand: '$$',
    fitment: '58mm basket for Gaggia Classic Pro / E24 workflow',
    summary:
      'A precision basket is one of the best examples of a worthwhile enthusiast upgrade that still needs the right timing. Buy it too early and it will not save a weak grinder or sloppy puck prep. Buy it after the fundamentals are in place and it becomes a meaningful part of a more repeatable espresso routine.',
    whyItMatters:
      'The Gaggia is exactly the kind of machine where this makes sense. The 58mm platform, three-way solenoid, and owner culture around dialing in all make a precision basket a natural next step once you are actually trying to improve the shot rather than simply make coffee.',
    skipIf:
      'your grind consistency is still the bottleneck or you are not yet dosing, tamping, and timing with any real repeatability.',
    amazonQuery: 'IMS 58mm precision basket Gaggia Classic Pro',
  },
  {
    rank: 4,
    title: 'Calibrated 58mm Tamper + WDT Tool',
    product: '58mm Calibrated Tamper and WDT Tool',
    whatItUpgrades: 'Puck prep consistency',
    effort: 'No install',
    priceBand: '$$',
    fitment: '58mm tamper sized for the Gaggia platform',
    summary:
      'These are two separate tools, but for most owners they solve the same problem: puck-prep sloppiness. The Gaggia does not hide uneven prep nearly as much as beginner-friendly machines do, so a better tamper and a simple WDT tool often pay off faster than more glamorous parts. The tamper helps with consistent pressure and fit. The WDT helps break up clumps and spread grounds more evenly before tamping.',
    whyItMatters:
      'This is one of the highest-value upgrades in the whole article because it turns technique into something more repeatable without requiring a machine teardown. It also takes proper advantage of the Gaggia’s 58mm standard instead of leaving you on generic starter accessories.',
    skipIf:
      'your current prep routine is already consistent and you are not getting signs of channeling or uneven extraction.',
    amazonQuery: '58mm calibrated tamper WDT tool espresso',
  },
  {
    rank: 5,
    title: 'PID Temperature Controller Kit',
    product: 'PID Kit for Gaggia Classic Pro',
    whatItUpgrades: 'Temperature stability and repeatability',
    effort: 'Advanced: requires wiring',
    priceBand: '$$$',
    fitment: 'Choose a PID kit explicitly made for the Gaggia Classic Pro / E24 family',
    summary:
      'This is the classic advanced Gaggia mod for a reason. The PID is not the first thing most owners should install, but it is one of the most meaningful real mods once you already know the machine well enough to care about temperature behavior shot to shot. It brings more control and consistency to a platform that people buy partly because they want to tinker and partly because they want to grow into something more stable than a convenience appliance.',
    whyItMatters:
      'The Gaggia earns the PID mod because the machine has enough long-term potential to justify the work. If you are already pulling frequent shots, using a decent grinder, and noticing the machine’s temperature rhythm, a PID can move the machine from hobby frustration into a much more controlled routine.',
    skipIf:
      'you are still learning basic espresso or do not want to do wiring, open the machine, or troubleshoot installation details.',
    amazonQuery: 'Gaggia Classic Pro PID kit',
  },
  {
    rank: 6,
    title: 'Silicone Group Gasket',
    product: 'Silicone Group Head Gasket for Gaggia Classic Pro',
    whatItUpgrades: 'Long-term sealing and easier lock-in feel',
    effort: '10-minute swap',
    priceBand: '$',
    fitment: 'Buy the gasket made for your Gaggia Classic Pro revision',
    summary:
      'This is not an exciting upgrade, which is part of why it gets overlooked. But it is exactly the kind of small ownership improvement that makes sense on a machine built for years of service. A silicone gasket is generally easier to live with than a standard rubber gasket because it tends to age more gracefully and can make the lock-in feel smoother.',
    whyItMatters:
      'The Gaggia is a maintenance-aware machine, and this is the kind of part owners actually feel over time. It is a cheap way to make the machine feel a little fresher without pretending it changes espresso quality on its own.',
    skipIf:
      'your current gasket is sealing well and you are not already planning a maintenance session.',
    amazonQuery: 'Gaggia Classic Pro silicone group gasket',
  },
  {
    rank: 7,
    title: 'Backflush Kit + Cafiza + Blind Basket',
    product: 'Espresso Backflush Cleaning Kit',
    whatItUpgrades: 'Solenoid cleanliness and long-term machine health',
    effort: '5-minute maintenance routine',
    priceBand: '$',
    fitment: '58mm blind basket and espresso-machine-safe cleaner',
    summary:
      'This is not a glamorous purchase, but it is one of the most Gaggia-specific ones. The Classic Pro uses a three-way solenoid valve, which is part of why it behaves like a more serious espresso machine than cheaper alternatives. That also means proper backflushing is not optional if you want the machine to stay happy.',
    whyItMatters:
      'A lot of accessory lists bury cleaning gear near the bottom as if it is boring overhead. On a Gaggia, it is part of the ownership contract. A blind basket and proper cleaner keep the machine running more like the platform you paid for.',
    skipIf:
      'you already own a complete backflush setup and actually use it consistently.',
    amazonQuery: 'Cafiza blind basket backflush kit 58mm',
  },
  {
    rank: 8,
    title: 'Precision Shower Screen',
    product: 'IMS Precision Shower Screen',
    whatItUpgrades: 'Water dispersion and maintenance refresh',
    effort: '10-minute swap',
    priceBand: '$$',
    fitment: 'Shower screen sized specifically for the Gaggia Classic Pro / E24 group',
    summary:
      'The shower screen upgrade matters less than a grinder, basket, or puck prep, but more than many novelty accessories people buy first. It can help even out water distribution and is especially sensible when paired with a cleaning or gasket refresh rather than treated as a magic bullet.',
    whyItMatters:
      'This is a strong mid-tier Gaggia upgrade because it complements the rest of a serious workflow. It is not the fix for bad espresso by itself, but it does fit the machine’s longer-term owner mentality well.',
    skipIf:
      'you are hoping it will rescue inconsistent shots caused by grind or prep problems upstream.',
    amazonQuery: 'IMS shower screen Gaggia Classic Pro',
  },
  {
    rank: 9,
    title: 'Scale With Timer',
    product: 'Espresso Scale With Timer',
    whatItUpgrades: 'Dose, yield, and shot-time repeatability',
    effort: 'No install',
    priceBand: '$$',
    fitment: 'Choose a compact scale that fits Gaggia workflow under or beside cups',
    summary:
      'The Gaggia Classic Pro rewards discipline. A scale with a timer turns that discipline into numbers you can actually repeat. Once you stop guessing output by eye and start measuring dose in, yield out, and shot time, the machine becomes easier to learn from instead of feeling moody.',
    whyItMatters:
      'This is another upgrade that sounds basic until you spend a few weeks without it. The Gaggia has enough potential that repeatability matters, and a small scale is one of the simplest ways to get there.',
    skipIf:
      'you are deliberately keeping the workflow casual and do not care about reproducing shots with much precision.',
    amazonQuery: 'espresso scale with timer compact',
  },
  {
    rank: 10,
    title: 'Silvia Steam Wand Swap',
    product: 'Rancilio Silvia Steam Wand',
    whatItUpgrades: 'Steam-wand feel on older Classic Pro variants',
    effort: 'Moderate: parts swap',
    priceBand: '$$',
    fitment: 'Best treated as an older Classic / older Classic Pro mod, not a default E24 purchase',
    summary:
      'This is the iconic Gaggia mod everyone still hears about, which is exactly why it belongs at the bottom with a large honesty label. The Silvia steam wand swap became famous because older Gaggia owners wanted a more capable manual steaming experience than some stock wand setups provided. But the current Classic Pro E24 already advertises a commercial-style steam wand, so the universal urgency here is lower than older advice suggests.',
    whyItMatters:
      'If you own an older Classic Pro variant and specifically want the feel of the Silvia-style swap, it can still make sense as a community-standard project. It just should not automatically outrank the grinder, 58mm tools, or maintenance basics for today’s buyers.',
    skipIf:
      'you own the current E24 and your real bottleneck is still grind quality, puck prep, or learning how to steam with the wand you already have.',
    amazonQuery: 'Rancilio Silvia steam wand Gaggia Classic',
  },
]

const faqItems = [
  {
    question: 'What is the first upgrade to buy for the Gaggia Classic Pro?',
    answer:
      'For most owners, the first upgrade is not a machine part at all. It is a real espresso grinder. After that, the most useful early Gaggia-specific upgrades are usually a 58mm bottomless portafilter, better puck-prep tools, and a backflush setup.',
  },
  {
    question: 'Does the Gaggia Classic Pro use 58mm accessories?',
    answer:
      'Yes. The Gaggia Classic Pro uses a 58mm commercial-style platform, which is one of its biggest long-term advantages over smaller-format home espresso machines.',
  },
  {
    question: 'Is a PID kit worth it on the Gaggia Classic Pro?',
    answer:
      'It can be very worth it for owners who already understand the machine and want better temperature stability and repeatability. It is not usually the right first upgrade for beginners, because the grinder and workflow basics matter more first.',
  },
  {
    question: 'Is the Silvia steam wand still the best Gaggia mod in 2026?',
    answer:
      'Not automatically. It remains a famous community mod, especially for older Gaggia variants, but the current Classic Pro E24 already markets a commercial-style steam wand. For many current owners, the grinder, 58mm workflow tools, and maintenance kit matter sooner.',
  },
]

const comparisonRows = picks.map((pick) => ({
  product: pick.product,
  whatItUpgrades: pick.whatItUpgrades,
  effort: pick.effort,
  priceBand: pick.priceBand,
  href: amazonSearch(pick.amazonQuery),
}))

const fullKit = picks.map((pick) => ({
  title: pick.product,
  href: amazonSearch(pick.amazonQuery),
}))

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
    name: pick.product,
    url: amazonSearch(pick.amazonQuery),
  })),
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Gaggia Classic Pro Upgrades (10 Ranked Mods and Accessories)',
  description: metaDescription,
  datePublished: publishedDate,
  dateModified: updatedDate,
  mainEntityOfPage: pageUrl,
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: { '@type': 'Organization', name: 'BestPickZone' },
}

const fullText = [
  metaDescription,
  ...picks.map((pick) => `${pick.summary} ${pick.whyItMatters} ${pick.skipIf}`),
  ...faqItems.map((faq) => `${faq.question} ${faq.answer}`),
].join(' ')

const readingTime = formatReadingTime(getReadingTime(fullText))

export default function GaggiaClassicProUpgradesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Coffee', href: '/coffee' },
          { label: 'Best Gaggia Classic Pro Upgrades' },
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
          The Gaggia Classic Pro upgrades actually worth buying, ranked by what changes your espresso most.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          The Gaggia Classic Pro is popular for a reason: it gives home users a real 58mm platform, a
          serviceable machine body, and a workflow that feels much closer to enthusiast espresso than
          convenience-first starter machines. That same honesty is why owners immediately start thinking about
          upgrades. The machine has room to grow, but not every classic forum recommendation still deserves top
          billing in 2026.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          This page targets the current Classic Pro / E24 buyer mindset: which upgrades actually improve the
          machine, which ones mainly improve technique, and which famous mods are more conditional than older
          lore makes them sound. The current E24 already markets a lead-free brass boiler, a 58mm commercial-style
          portafilter, and a commercial-style steam wand, so the smartest upgrade order today is not identical to
          the internet&apos;s oldest Gaggia advice.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-stone-200">Updated July 11, 2026</span>
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-stone-200">{readingTime}</span>
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-stone-200">10 ranked upgrades</span>
        </div>
      </section>

      <section className="mb-10 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">The full upgrade path at a glance</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-stone-200 px-4 py-3 font-semibold text-slate-900">Product</th>
                <th className="border-b border-stone-200 px-4 py-3 font-semibold text-slate-900">What it upgrades</th>
                <th className="border-b border-stone-200 px-4 py-3 font-semibold text-slate-900">Effort</th>
                <th className="border-b border-stone-200 px-4 py-3 font-semibold text-slate-900">Price band</th>
                <th className="border-b border-stone-200 px-4 py-3 font-semibold text-slate-900">Buy</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.product}>
                  <td className="border-b border-stone-100 px-4 py-3 text-slate-900">{row.product}</td>
                  <td className="border-b border-stone-100 px-4 py-3 text-slate-700">{row.whatItUpgrades}</td>
                  <td className="border-b border-stone-100 px-4 py-3 text-slate-700">{row.effort}</td>
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
        <h2 className="text-2xl font-black text-slate-900">The most important honesty note on this whole page</h2>
        <p className="mt-3 text-base leading-7 text-slate-700">
          If you do not already own a real espresso grinder, that is your first purchase even if it is not a
          machine mod. Too many Gaggia upgrade lists jump straight to baskets, shower screens, or wiring kits
          because those feel more enthusiast-coded. But the Classic Pro is transparent equipment. It exposes grind
          and prep problems immediately. So the smartest first investment is the one that feeds the machine better,
          not the one that looks most technical in a photo.
        </p>
      </section>

      <section className="mb-12 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">The first upgrade that actually changes the machine</h2>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Once the grinder prerequisite is handled, the first Gaggia-specific upgrade that usually pays off most is
          the 58mm bottomless portafilter. This is the accessory that makes the platform feel like the machine its
          fans promise it is. You stop hiding behind a spouted handle and start seeing exactly what your prep is
          doing. Spraying, channeling, uneven starts, and sloppy distribution become visible instead of abstract.
        </p>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          That matters because the Gaggia Classic Pro is not really a one-button appliance story. Its appeal is the
          feedback loop. The machine teaches you faster when the signals are clear. The bottomless handle also takes
          direct advantage of the Gaggia&apos;s 58mm ecosystem, which is one of the biggest reasons buyers choose it over
          smaller-format home machines in the first place.
        </p>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          The reason it beats out older "must-do first" lore is that it addresses current reality better. On the
          current E24, the stock machine already arrives with a more serious steam-wand story than older Gaggia lore
          assumes. What most owners need sooner is clearer extraction feedback, better puck prep, and better repeatability.
          That is why the bottomless handle, basket, tamper, WDT, and scale rise to the top of a 2026 ranking.
        </p>
      </section>

      <section className="mb-12 space-y-6">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-slate-900">The ranked upgrades</h2>
        </div>

        <div className="space-y-6">
          {picks.map((pick) => (
            <article key={pick.rank} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-lg font-black text-amber-800">
                  {pick.rank}
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
                  {pick.effort}
                </span>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
                  {pick.priceBand}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-black text-slate-900">{pick.title}</h3>
              <p className="mt-3 text-sm font-medium text-slate-500">Our pick: {pick.product}</p>
              <p className="mt-4 text-base leading-8 text-slate-700">{pick.summary}</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                <strong className="text-slate-900">Why this one:</strong> {pick.whyItMatters}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                <strong className="text-slate-900">Fitment note:</strong> {pick.fitment}
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
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-slate-900">The advanced tier</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            The PID kit is the dividing line between "improving workflow" and "actually modding the machine." If
            you are not yet bothered by temperature rhythm, it is probably too early. If you already know exactly
            why that rhythm bugs you, the Gaggia is one of the few starter-class machines where the work can make
            real sense.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-3xl font-black text-slate-900">The maintenance tier</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Cleaning and sealing parts are not exciting, but they are unusually important on a machine with a
            three-way solenoid and a long ownership horizon. The backflush kit, cleaner, gasket, and shower screen
            all matter more here than they do on shallow affiliate lists aimed at one-month owners.
          </p>
        </div>
      </section>

      <section className="mb-12 rounded-[2rem] border border-rose-200 bg-rose-50 p-6">
        <h2 className="text-3xl font-black text-slate-900">Mods that are not worth the hassle for most owners</h2>
        <p className="mt-4 text-base leading-7 text-slate-700">
          The easiest mistake with a Gaggia is to upgrade for identity instead of outcome. The machine attracts
          tinkerers, so it is easy to end up shopping for the most forum-famous part rather than the part that fixes
          your actual bottleneck. If your shots are inconsistent, the answer is rarely a decorative part or a niche
          swap before you have fixed grind, prep, and cleaning rhythm.
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          That is why the Silvia steam wand swap sits low on this page. It is not fake. It is just not the default
          first move for every current owner anymore. The same goes for jumping straight to a PID before you can
          explain what the machine is doing badly today. Buy clarity first. Buy control second. Buy advanced mods
          only after you have earned a reason for them.
        </p>
      </section>

      <section className="mb-12 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">Helpful outside resources</h2>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          Gaggia North America&apos;s{' '}
          <a
            href="https://www.gaggia-na.com/products/gaggia-classic-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-800 underline underline-offset-2"
          >
            current Classic Pro E24 product page
          </a>{' '}
          is the right place to verify the current boiler, 58mm portafilter, and steam-wand spec before you buy
          any machine-specific parts. For current owners comparing workflow styles, our{' '}
          <Link href="/coffee/breville-bambino-plus-vs-gaggia-classic-pro" className="font-semibold text-amber-800 underline underline-offset-2">
            Bambino Plus vs. Gaggia Classic Pro comparison
          </Link>{' '}
          is the cleanest pre-purchase companion.
        </p>
      </section>

      <section className="mb-12 rounded-[2rem] border border-stone-200 bg-slate-900 p-6 text-slate-100">
        <h2 className="text-2xl font-black">The full upgrade kit</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {fullKit.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener nofollow sponsored"
              className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900">FAQ</h2>
        <div className="mt-6 space-y-5">
          {faqItems.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">Keep browsing</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/coffee/breville-bambino-plus-vs-gaggia-classic-pro"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-amber-200 transition hover:bg-amber-100"
          >
            Compare it with the Bambino Plus
          </Link>
          <Link
            href="/coffee"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-amber-200 transition hover:bg-amber-100"
          >
            Coffee hub
          </Link>
        </div>
      </section>
    </main>
  )
}
