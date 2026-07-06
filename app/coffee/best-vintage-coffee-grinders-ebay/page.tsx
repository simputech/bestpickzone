import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { buildAffiliateTrackingId, decorateEbayAffiliateUrl } from '@/lib/affiliate-links'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/coffee/best-vintage-coffee-grinders-ebay'
const publishedDate = '2026-07-06T00:00:00Z'
const updatedDate = '2026-07-06T00:00:00Z'

const metaDescription =
  'The best vintage coffee grinders to shop on eBay in 2026, including Peugeot wall mills, Zassenhaus box grinders, Arcade Crystal mills, Spong hand grinders, and vintage Turkish brass mills.'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Coffee', href: '/coffee' },
  { label: 'Best Vintage Coffee Grinders on eBay' },
]

function trackedEbayUrl(url: string, placement: string) {
  return decorateEbayAffiliateUrl(
    url,
    buildAffiliateTrackingId('best-vintage-coffee-grinders-ebay', placement)
  )
}

const featuredGrinders = [
  {
    title: 'Peugeot Freres wall-mounted grinders',
    bestFor: 'Best vintage grinder for French kitchen style and wall display',
    note:
      'These are the grinders most people picture when they think of a romantic vintage coffee setup: cast body, wooden drawer, wall mount, and real visual charm.',
    whyItWorks:
      'A good Peugeot wall mill can be both usable and decorative, but condition matters more than romance. The best listings clearly show the burr area, the drawer, the hopper lid, and the condition of the finish so you can tell whether you are buying a collectible or a restoration job.',
    cta: 'Shop Peugeot wall grinders on eBay',
    href: trackedEbayUrl(
      'https://www.ebay.com/sch/i.html?_nkw=Peugeot+Freres+coffee+grinder+wall+mounted&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1',
      'peugeot-wall'
    ),
  },
  {
    title: 'Zassenhaus box and knee mills',
    bestFor: 'Best vintage grinder for actual daily use',
    note:
      'If you care more about making coffee than just styling a shelf, vintage Zassenhaus grinders are often the most practical bridge between collectible and genuinely usable.',
    whyItWorks:
      'Older Zassenhaus mills are sought after because many still grind well when the burrs are clean and aligned. They make the most sense for buyers who want a vintage object they can actually keep in rotation for pour-over, moka pot, or drip rather than a pure display piece.',
    cta: 'Shop Zassenhaus vintage grinders on eBay',
    href: trackedEbayUrl(
      'https://www.ebay.com/sch/i.html?_nkw=Zassenhaus+coffee+grinder+vintage&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1',
      'zassenhaus'
    ),
  },
  {
    title: 'Arcade Crystal No. 3 and similar cast-iron mills',
    bestFor: 'Best American cast-iron collector grinder',
    note:
      'These are the heavy old-school countertop pieces that feel more industrial and more American than the slimmer European wall mills.',
    whyItWorks:
      'An Arcade Crystal-style grinder usually earns its keep on presence alone, but the best examples still have the right glass, hardware, crank, and catch cup details. They can be wonderful collector pieces, but replacement parts and restored examples vary a lot, so listing photos are everything.',
    cta: 'Shop Arcade Crystal grinders on eBay',
    href: trackedEbayUrl(
      'https://www.ebay.com/sch/i.html?_nkw=Arcade+Crystal+coffee+grinder&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1',
      'arcade-crystal'
    ),
  },
  {
    title: 'Spong hand grinders',
    bestFor: 'Best vintage grinder for restoration-minded buyers',
    note:
      'Spong grinders appeal to people who like exposed mechanisms, clamp-mounted tools, and the feeling of buying something mechanical rather than decorative.',
    whyItWorks:
      'A vintage Spong is not the easiest starting point for everyone, but it can be a great eBay target if you are comfortable evaluating wear, rust, burr condition, and whether the grinder is complete. This is the lane for buyers who enjoy the restoration process as much as the final object.',
    cta: 'Shop Spong grinders on eBay',
    href: trackedEbayUrl(
      'https://www.ebay.com/sch/i.html?_nkw=Spong+coffee+grinder+vintage&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1',
      'spong'
    ),
  },
  {
    title: 'Vintage Turkish brass coffee mills',
    bestFor: 'Best compact vintage grinder with gift appeal',
    note:
      'These are often the easiest vintage grinders to fit into a small kitchen or gift idea because they take up less space and feel distinctive immediately.',
    whyItWorks:
      'The appeal here is compactness, engraving, and conversation value, but buyers should still look closely at burr wear, crank fit, and whether the grinder is sold as decorative only. The better examples can be genuinely fun for fine grinds and specialty brewing rituals.',
    cta: 'Shop vintage Turkish coffee mills on eBay',
    href: trackedEbayUrl(
      'https://www.ebay.com/sch/i.html?_nkw=vintage+Turkish+brass+coffee+grinder&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1',
      'turkish-brass'
    ),
  },
]

const buyingChecklist = [
  'Ask whether the grinder still turns smoothly through a full rotation, not just whether the crank moves.',
  'Zoom in on the burr area, hopper, drawer, and handle mount to spot cracks, heavy rust, or missing hardware.',
  'Check whether the listing is sold as decorative only, restored, or tested for actual grinding.',
  'Look for complete examples with lids, drawers, glass, and original-style hardware before paying collector pricing.',
  'Compare shipping carefully because heavy cast-iron grinders can look cheap until freight costs erase the deal.',
]

const redFlags = [
  'Only glamour photos with no close-up of the burr assembly or interior.',
  'Phrases like "untested but should work" on expensive collector listings.',
  'A restored finish that looks attractive but hides replaced parts or poor mechanical condition.',
  'Missing drawer, missing glass, broken clamp, or wrong replacement handle without the price reflecting it.',
  'A listing that uses the word vintage loosely for a clearly newer decorative reproduction.',
]

const faqItems = [
  {
    q: 'What is the best vintage coffee grinder to actually use?',
    a: 'For many buyers, vintage Zassenhaus mills are the safest starting point if usability matters most. They often balance real grinding utility with the vintage look better than more fragile decorative pieces.',
  },
  {
    q: 'Are vintage coffee grinders on eBay worth buying?',
    a: 'Yes, if you buy with mechanical condition in mind instead of shopping only for looks. The best purchases are the listings that show the burrs, handle, drawer or catch cup, and clearly state whether the grinder was tested or restored.',
  },
  {
    q: 'Which vintage coffee grinder is best for collecting?',
    a: 'That depends on taste, but Peugeot wall grinders and Arcade Crystal cast-iron grinders tend to have the strongest display appeal. They are the pieces people notice immediately, which is part of why condition and originality matter so much.',
  },
  {
    q: 'Should I buy a restored grinder or an original one?',
    a: 'Buy restored if you want less guesswork and a cleaner ready-to-display object. Buy original only if you are comfortable inspecting wear, judging missing parts, and possibly doing some cleaning or restoration work yourself.',
  },
]

const articleText = `
Best Vintage Coffee Grinders on eBay in 2026.
Vintage coffee grinders live in two worlds at once: kitchen tool and collectible object.
${featuredGrinders.map((item) => `${item.title}. ${item.note} ${item.whyItWorks}`).join(' ')}
${buyingChecklist.join(' ')}
${redFlags.join(' ')}
${faqItems.map((item) => `${item.q} ${item.a}`).join(' ')}
`

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best Vintage Coffee Grinders on eBay in 2026',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'best vintage coffee grinder ebay',
      'vintage coffee grinders ebay',
      'best antique coffee grinder',
      'peugeot freres coffee grinder',
      'zassenhaus vintage coffee grinder',
      'arcade crystal coffee grinder',
      'spong coffee grinder vintage',
      'vintage turkish brass coffee grinder',
    ],
    openGraph: {
      title: 'Best Vintage Coffee Grinders on eBay in 2026',
      description: metaDescription,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Vintage Coffee Grinders on eBay in 2026',
      description:
        'A buyer-first guide to collectible vintage coffee grinders on eBay, including Peugeot wall mills, Zassenhaus grinders, Arcade Crystal mills, and more.',
    },
  },
  {
    category: 'coffee',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Coffee',
    url: pageUrl,
    tags: [
      'vintage coffee grinders',
      'coffee ebay',
      'antique coffee grinder',
      'manual coffee grinders',
      'collector coffee gear',
    ],
  }
)

const readingTimeLabel = formatReadingTime(getReadingTime(articleText))

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Vintage Coffee Grinders on eBay in 2026',
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

export default function BestVintageCoffeeGrindersEbayPage() {
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

        <article className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-10">
          <header className="border-b border-stone-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
              Coffee Buying Guide
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Best Vintage Coffee Grinders on eBay in 2026
            </h1>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
              <span>Updated July 6, 2026</span>
              <span>·</span>
              <span>{readingTimeLabel}</span>
            </div>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
              Vintage coffee grinders are easy to buy badly. The good ones can give you real
              function, personality, and collector value all at once. The wrong ones are just heavy
              decor with worn burrs, missing parts, or a price tag built on nostalgia instead of
              utility.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
              This guide is built for eBay shoppers who want a smarter starting point. We break the
              category into the main vintage-grinder lanes that actually matter: wall-mounted French
              mills, practical Zassenhaus grinders, heavy American cast-iron collectors, restoration
              projects, and compact brass mills with gift appeal.
            </p>
          </header>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
            Affiliate disclosure: BestPickZone may earn a commission when you shop through eBay
            partner links on this page, at no extra cost to you. Recommendations are based on
            buyer fit, collector value, and mechanical usefulness rather than payout rates.
          </div>

          <section className="mt-10 rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-bold text-gray-900">What makes a vintage grinder worth buying?</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              The fastest way to sort vintage coffee grinders is to decide whether you care more
              about display value, daily use, or restoration potential. A stunning wall-mounted
              mill is not always the best choice if you actually want to grind coffee every weekend,
              and a mechanically strong Zassenhaus may not scratch the collector itch if what you
              really want is a dramatic cast-iron centerpiece.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              That is why the right search is rarely just <strong>vintage coffee grinder</strong>.
              The better move is to shop by type and read the listing like a tool buyer, not just a
              decor shopper.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900">Best vintage coffee grinder searches to shop first</h2>
            <div className="mt-6 space-y-6">
              {featuredGrinders.map((item, index) => (
                <section key={item.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                        Pick {index + 1}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-sm font-semibold text-stone-600">{item.bestFor}</p>
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-amber-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-800"
                    >
                      {item.cta}
                    </a>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">{item.note}</p>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">{item.whyItWorks}</p>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">Vintage grinder buying checklist</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
                {buyingChecklist.map((item) => (
                  <li key={item} className="rounded-2xl border border-stone-200 bg-white p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">Red flags on eBay listings</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
                {redFlags.map((item) => (
                  <li key={item} className="rounded-2xl border border-rose-200 bg-white p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Start here if you only want one recommendation</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Start with a vintage <strong>Zassenhaus</strong> search if you want the best balance
              of usability and vintage character. Start with a <strong>Peugeot wall grinder</strong>{' '}
              if the visual appeal matters most. Start with an <strong>Arcade Crystal</strong> only
              if you already know you want a heavier, more collectible cast-iron piece and you are
              comfortable paying for condition and completeness.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={featuredGrinders[1].href}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
              >
                Shop vintage Zassenhaus listings
              </a>
              <a
                href={featuredGrinders[0].href}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-900 transition hover:border-gray-400"
              >
                Shop Peugeot wall grinders
              </a>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
              Related Coffee Reads
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Link
                href="/coffee/1zpresso-jx-pro-vs-comandante-c40"
                className="rounded-2xl border border-amber-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900">1Zpresso JX-Pro vs Comandante C40</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  A modern hand-grinder comparison for buyers who decide vintage is more romance than practicality.
                </p>
              </Link>
              <Link
                href="/coffee/baratza-virtuoso-plus-vs-fellow-ode-gen-2"
                className="rounded-2xl border border-amber-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900">Baratza Virtuoso+ vs Fellow Ode Gen 2</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  A cleaner modern route if your real goal is grind quality rather than collecting older gear.
                </p>
              </Link>
              <Link
                href="/coffee"
                className="rounded-2xl border border-amber-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900">Coffee Gear Hub</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Browse the rest of the coffee section for espresso machines, kettles, grinders, and brewing tools.
                </p>
              </Link>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-5 space-y-4">
              {faqItems.map((item) => (
                <div key={item.q} className="rounded-2xl border border-stone-200 p-5">
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
