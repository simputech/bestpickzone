import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { buildAffiliateTrackingId, decorateEbayAffiliateUrl } from '@/lib/affiliate-links'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/wfh/best-portable-monitors-under-100-ebay'
const publishedDate = '2026-07-06T00:00:00Z'
const updatedDate = '2026-07-06T00:00:00Z'

const metaDescription =
  'The best portable monitors under $100 on eBay in 2026, including new budget USB-C displays and refurbished Lenovo, Asus, and ViewSonic portable monitors for work-from-home setups.'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'WFH', href: '/wfh' },
  { label: 'Best Portable Monitors Under $100 on eBay' },
]

function trackedEbayUrl(url: string, placement: string) {
  return decorateEbayAffiliateUrl(
    url,
    buildAffiliateTrackingId('best-portable-monitors-under-100-ebay', placement)
  )
}

const picks = [
  {
    title: 'New 15.6-inch generic USB-C portable monitors',
    bestFor: 'Best cheapest new option',
    lane: 'New',
    note:
      'This is the broad search for the no-name and low-name portable monitors that dominate the under-$100 range on eBay.',
    description:
      'If the goal is simply getting a second screen for email, docs, travel, or a kitchen-table office setup, this is where most buyers should start. The value play here is not brand prestige. It is getting a usable 1080p panel with USB-C video, a folio cover, and acceptable brightness without overpaying for features you may not need.',
    guidance:
      'The safest listings clearly show ports, include the cover stand, and state whether the monitor supports single-cable USB-C or needs HDMI plus external power. Under $100, the biggest mistake is assuming every portable monitor has the same connection behavior.',
    cta: 'Shop new budget portable monitors on eBay',
    href: trackedEbayUrl(
      'https://www.ebay.com/sch/i.html?_nkw=portable+monitor+15.6+usb+c+1080p+new&LH_BIN=1&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1',
      'new-generic'
    ),
  },
  {
    title: 'Refurbished Lenovo ThinkVision M14 and M14t-style monitors',
    bestFor: 'Best refurbished business-class portable monitor',
    lane: 'Refurbished',
    note:
      'Refurbished ThinkVision portable monitors are often the cleanest upgrade path if you want a better-known brand under a tight budget ceiling.',
    description:
      'Lenovo portable monitors tend to feel more like real work tools than disposable accessories. The stand design is usually better thought out, the industrial design is cleaner, and the panels often come from business inventory rather than pure consumer churn.',
    guidance:
      'The main thing to watch is exact model number and screen condition. Some listings use broad ThinkVision language without confirming whether you are getting the lighter M14-style form factor or an older, chunkier portable display. Refurbished or open-box Lenovo listings can be excellent if the seller documents scratches, dead pixels, and included cables.',
    cta: 'Shop refurbished Lenovo portable monitors on eBay',
    href: trackedEbayUrl(
      'https://www.ebay.com/sch/i.html?_nkw=Lenovo+ThinkVision+M14+portable+monitor+refurbished&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1',
      'refurb-lenovo'
    ),
  },
  {
    title: 'Refurbished Asus ZenScreen portable monitors',
    bestFor: 'Best branded portable monitor if you catch a deal',
    lane: 'Refurbished',
    note:
      'Asus ZenScreen models often sit above the cheapest monitors in design and finish, but refurbished listings are where they can drop into realistic budget territory.',
    description:
      'ZenScreen is one of the names many buyers recognize first in the portable-monitor category, and for good reason. The lineup has been around long enough that there are plenty of used and refurbished units floating through resale channels, especially older 1080p models that still work well for travel and dual-screen WFH setups.',
    guidance:
      'This is the search where patience pays off. You may not always see a clean unit below $100 on the first screen, but when a seller prices an older ZenScreen aggressively, it can be a smarter buy than a brand-new no-name monitor at the same money.',
    cta: 'Shop refurbished Asus ZenScreen monitors on eBay',
    href: trackedEbayUrl(
      'https://www.ebay.com/sch/i.html?_nkw=Asus+ZenScreen+portable+monitor+refurbished&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1',
      'refurb-asus'
    ),
  },
  {
    title: 'Open-box Arzopa, InnoView, and KYY portable monitors',
    bestFor: 'Best recent-value portable monitor listings',
    lane: 'New or open box',
    note:
      'This search targets the newer budget-friendly names that often dominate Amazon-style shopping, but on eBay you can sometimes get them open-box for even less.',
    description:
      'These are the portable monitors that make sense if you want newer styling, familiar accessory bundles, and less cosmetic wear than older refurb stock. The upside is obvious: you may get something nearly new for less than standard retail. The downside is that quality between brands and model revisions can vary a lot.',
    guidance:
      'On this lane, look for sellers who show the exact monitor powered on, mention brightness or dead-pixel condition, and confirm included cables. Open-box value disappears fast if you need to replace missing accessories or fight an unclear return policy.',
    cta: 'Shop open-box budget portable monitors on eBay',
    href: trackedEbayUrl(
      'https://www.ebay.com/sch/i.html?_nkw=Arzopa+InnoView+KYY+portable+monitor+open+box&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1',
      'open-box-budget'
    ),
  },
  {
    title: 'Refurbished ViewSonic and AOC portable monitors',
    bestFor: 'Best under-the-radar refurb search',
    lane: 'Refurbished',
    note:
      'This is the search lane for buyers who want to avoid the most crowded branded listings and look for quieter value.',
    description:
      'ViewSonic and AOC portable monitors do not always get the same attention as Lenovo or Asus, which can help on resale pricing. When a seller lists a clean refurb from one of these brands with the right ports and a working stand cover, the value can be better than the flashier names.',
    guidance:
      'These listings reward detail reading. Port layout, power requirements, and what the cover actually does as a stand matter more than the brand alone. If the seller is thorough, this can be one of the most cost-efficient ways to land a recognizable portable monitor under $100.',
    cta: 'Shop refurbished ViewSonic and AOC portable monitors on eBay',
    href: trackedEbayUrl(
      'https://www.ebay.com/sch/i.html?_nkw=ViewSonic+AOC+portable+monitor+refurbished&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1',
      'refurb-viewsonic-aoc'
    ),
  },
]

const checklist = [
  'Confirm whether the monitor supports video over USB-C or only power over USB-C with video coming from mini HDMI.',
  'Check screen condition language for scratches, pressure marks, dead pixels, and brightness issues.',
  'Make sure the listing includes the folio cover, kickstand, or stand case because replacements can be annoying.',
  'Look at weight and thickness if you actually plan to travel with it instead of just parking it on a side desk.',
  'Read the return policy carefully on refurbished listings because panel flaws matter more than minor cosmetic wear.',
]

const redFlags = [
  'A seller avoids showing the monitor powered on.',
  'The listing headline says portable monitor but never clearly states resolution or ports.',
  'No mention of cables, stand cover, or power requirements.',
  'A refurbished listing says tested working but gives zero detail on scratches or panel condition.',
  'A price that looks low until shipping pushes it above better listings.',
]

const faqItems = [
  {
    q: 'Can you really get a good portable monitor under $100 on eBay?',
    a: 'Yes, but the best buys usually come from two lanes: cheap new generic 15.6-inch USB-C monitors and refurbished branded portable monitors from Lenovo, Asus, ViewSonic, or AOC. The right choice depends on whether you want the lowest price or the stronger brand and build.',
  },
  {
    q: 'Is refurbished better than new for a portable monitor under $100?',
    a: 'Often yes. Refurbished branded monitors can be smarter than brand-new no-name monitors if the seller documents screen condition and includes the necessary cables or cover. The tradeoff is cosmetic uncertainty, which is why listing quality matters so much.',
  },
  {
    q: 'What size portable monitor is best for WFH?',
    a: 'For most people, 15.6 inches is still the sweet spot because it gives you enough space for email, chat, documents, and spreadsheets without turning the monitor into an awkward travel object. Smaller models save room, but they are less useful as a real second screen.',
  },
  {
    q: 'What matters more than brand on eBay portable monitor listings?',
    a: 'Port type, power behavior, screen condition, and included accessories matter more than brand alone. A recognizable brand is nice, but a clear listing with the right ports and a clean panel is usually the better buy than a vague listing from a bigger name.',
  },
]

const articleText = `
Best portable monitors under 100 dollars on eBay in 2026.
${picks.map((item) => `${item.title}. ${item.note} ${item.description} ${item.guidance}`).join(' ')}
${checklist.join(' ')}
${redFlags.join(' ')}
${faqItems.map((item) => `${item.q} ${item.a}`).join(' ')}
`

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best Portable Monitors Under $100 on eBay in 2026',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'best portable monitor under 100 ebay',
      'portable monitor under 100',
      'refurbished portable monitor ebay',
      'best portable monitor for laptop cheap',
      'lenovo thinkvision m14 refurbished',
      'asus zenscreen refurbished ebay',
      'portable usb c monitor under 100',
      'best second monitor for work from home cheap',
    ],
    openGraph: {
      title: 'Best Portable Monitors Under $100 on eBay in 2026',
      description: metaDescription,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Portable Monitors Under $100 on eBay in 2026',
      description:
        'A buyer-first guide to cheap portable monitors on eBay, including new budget USB-C displays and refurbished Lenovo, Asus, ViewSonic, and AOC options.',
    },
  },
  {
    category: 'wfh',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Work From Home',
    url: pageUrl,
    tags: [
      'portable monitor',
      'ebay deals',
      'wfh screens',
      'refurbished tech',
      'dual screen setup',
    ],
  }
)

const readingTimeLabel = formatReadingTime(getReadingTime(articleText))

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Portable Monitors Under $100 on eBay in 2026',
  description: metaDescription,
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/icon.png' },
  },
  datePublished: '2026-07-06',
  dateModified: '2026-07-06',
  mainEntityOfPage: pageUrl,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function BestPortableMonitorsUnder100EbayPage() {
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

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <header className="border-b border-slate-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              WFH Buying Guide
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Best Portable Monitors Under $100 on eBay in 2026
            </h1>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>Updated July 6, 2026</span>
              <span>·</span>
              <span>{readingTimeLabel}</span>
            </div>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
              Portable monitors are one of the easiest WFH upgrades to overspend on. A lot of people
              just need a second screen for Slack, email, spreadsheets, or a travel desk, and that
              does not automatically require a premium display with a premium logo.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
              eBay is useful here because it opens two good lanes at once: very cheap new portable
              monitors from budget makers, and refurbished branded displays that can sometimes drop
              into the same price band. This guide is about sorting those lanes intelligently instead
              of clicking the cheapest listing and hoping the ports work the way you think they do.
            </p>
          </header>

          <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm leading-relaxed text-sky-950">
            Affiliate disclosure: BestPickZone may earn a commission when you shop through eBay
            partner links on this page, at no extra cost to you. Recommendations are based on buyer
            fit, screen usefulness, and listing quality rather than payout rates.
          </div>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-gray-900">What matters most under $100?</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Under $100, the buying decision is less about color science and more about basic
              usefulness. You want a screen that connects without drama, stands up properly, looks
              clean enough for reading all day, and does not create new friction around cables or
              power.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              That is why this page mixes <strong>new</strong> and <strong>refurbished</strong>{' '}
              options. New generic screens can be the best pure bargain. Refurbished Lenovo, Asus,
              ViewSonic, or AOC units can be the smarter buy when you want a better-known product
              without leaving the budget.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900">Best eBay search lanes to shop first</h2>
            <div className="mt-6 space-y-6">
              {picks.map((item, index) => (
                <section key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                        Pick {index + 1} · {item.lane}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-sm font-semibold text-slate-600">{item.bestFor}</p>
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-800"
                    >
                      {item.cta}
                    </a>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">{item.note}</p>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">{item.description}</p>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">{item.guidance}</p>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">Portable monitor checklist</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
                {checklist.map((item) => (
                  <li key={item} className="rounded-2xl border border-slate-200 bg-white p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">Red flags to avoid</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
                {redFlags.map((item) => (
                  <li key={item} className="rounded-2xl border border-rose-200 bg-white p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Start here if you just want the simplest answer</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Start with the broad <strong>new 15.6-inch USB-C portable monitor</strong> search if
              you only want the cheapest functional second screen. Start with the{' '}
              <strong>refurbished Lenovo ThinkVision</strong> search if you want the strongest odds
              of landing a more polished work tool at this budget.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={picks[0].href}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
              >
                Shop new budget portable monitors
              </a>
              <a
                href={picks[1].href}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-900 transition hover:border-gray-400"
              >
                Shop refurbished ThinkVision monitors
              </a>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-sky-200 bg-sky-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-800">
              Related WFH Reads
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Link
                href="/wfh/ultimate-kitchen-table-home-office-setup"
                className="rounded-2xl border border-sky-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900">Ultimate Kitchen Table Home Office Setup</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Read this if your portable monitor is part of a temporary or flexible home office instead of a permanent desk.
                </p>
              </Link>
              <Link
                href="/wfh/ergotron-lx-vs-amazon-basics-monitor-arm"
                className="rounded-2xl border border-sky-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900">Ergotron LX vs Amazon Basics Monitor Arm</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Useful if your main desk is stable enough for a fixed external monitor and you are comparing mobility versus permanence.
                </p>
              </Link>
              <Link
                href="/wfh"
                className="rounded-2xl border border-sky-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900">WFH Hub</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Browse the rest of the WFH section for chairs, mice, keyboards, monitor gear, and desk setup ideas.
                </p>
              </Link>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-5 space-y-4">
              {faqItems.map((item) => (
                <div key={item.q} className="rounded-2xl border border-slate-200 p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
