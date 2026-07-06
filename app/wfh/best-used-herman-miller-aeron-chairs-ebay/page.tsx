import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/wfh/best-used-herman-miller-aeron-chairs-ebay'
const publishedDate = '2026-07-06T00:00:00Z'
const updatedDate = '2026-07-06T00:00:00Z'

const metaDescription =
  'Shopping for a used Herman Miller Aeron on eBay? This guide covers Classic vs Remastered, Aeron sizes, listing red flags, and how to find the best used or refurbished chair.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best Used Herman Miller Aeron Chairs on eBay in 2026 | BestPickZone',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'best used herman miller aeron chairs ebay',
      'buy used herman miller aeron',
      'refurbished herman miller aeron ebay',
      'herman miller aeron classic vs remastered used',
      'best herman miller aeron deals ebay',
      'how to buy used aeron chair',
      'used aeron size b ebay',
      'refurbished aeron chair guide',
    ],
    openGraph: {
      title: 'Best Used Herman Miller Aeron Chairs on eBay in 2026',
      description: metaDescription,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Used Herman Miller Aeron Chairs on eBay in 2026',
      description:
        'A practical guide to buying a used or refurbished Herman Miller Aeron on eBay without overpaying or missing listing red flags.',
    },
  },
  {
    category: 'wfh',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Work From Home',
    url: pageUrl,
    tags: [
      'used herman miller aeron',
      'ebay office chair deals',
      'refurbished aeron',
      'wfh seating',
      'ergonomic office chair',
    ],
  }
)

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'WFH', href: '/wfh' },
  { label: 'Best Used Herman Miller Aeron Chairs on eBay' },
]

const featuredSearches = [
  {
    title: 'Best overall for most buyers',
    query: 'Herman Miller Aeron Size B used',
    note:
      'This is the sweet spot for most people because Size B is the most common fit and usually has the deepest listing inventory.',
    cta: 'Shop Size B used Aeron listings',
    href:
      'https://www.ebay.com/sch/i.html?_nkw=Herman+Miller+Aeron+Size+B+used&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1',
  },
  {
    title: 'Best premium used upgrade',
    query: 'Herman Miller Aeron Remastered refurbished',
    note:
      'Look here if you want the newer frame and controls but still want to stay below new-chair pricing.',
    cta: 'Shop refurbished Remastered listings',
    href:
      'https://www.ebay.com/sch/i.html?_nkw=Herman+Miller+Aeron+Remastered+refurbished&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1',
  },
  {
    title: 'Best value older model',
    query: 'Herman Miller Aeron Classic fully loaded used',
    note:
      'A fully adjustable Classic Aeron is often the smartest value buy if condition is strong and the seller is detailed.',
    cta: 'Shop Classic fully loaded listings',
    href:
      'https://www.ebay.com/sch/i.html?_nkw=Herman+Miller+Aeron+Classic+fully+loaded+used&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1',
  },
]

const shoppingMoves = [
  {
    title: 'Buy Size B first unless you know you need A or C',
    text:
      'Most shoppers should start with Size B because inventory is deeper, pricing is easier to compare, and it fits the largest share of buyers.',
  },
  {
    title: 'Use refurbished when you want less guesswork',
    text:
      'If you would rather pay a little more than troubleshoot wear parts later, start with refurbished Remastered or well-described refurbished Classic listings.',
  },
  {
    title: 'Use older Classic listings when value matters most',
    text:
      'A clean Classic Aeron with adjustable arms, tilt controls, and lumbar support often beats a rougher newer chair that only wins on age.',
  },
]

const checklist = [
  'Mesh condition: zoom in on the seat and back to check for sagging, fraying, or shiny wear spots.',
  'Size label: make sure the listing clearly states A, B, or C so you are not guessing based on photos.',
  'Arm function: verify whether the chair has adjustable arms and whether the arm pads are worn or split.',
  'Tilt controls: confirm that forward tilt, tension, and recline limiter features actually work.',
  'Lumbar or PostureFit support: many budget listings strip these out, which changes the value of the chair.',
  'Cylinder height: ask whether the gas cylinder still holds properly and rises smoothly.',
  'Seller rating and returns: strong feedback and a real return policy matter more on used chairs than tiny price differences do.',
]

const redFlags = [
  'Stock photos only with no close-ups of the actual chair.',
  'A title that says “fully loaded” but the photos show fixed arms or missing lumbar support.',
  'No mention of chair size anywhere in the listing.',
  'Vague condition language like “good overall” with no notes on mesh, tilt, or cylinder.',
  'Shipping that is suspiciously high compared with the chair price.',
  'No return policy on a listing where condition is unclear.',
]

const faqItems = [
  {
    q: 'Is it worth buying a used Herman Miller Aeron on eBay?',
    a: 'Usually yes, especially if you find a strong Size B listing from a reputable seller with clear photos and a return policy. The Aeron is one of the few office chairs that often still makes sense used because the design, parts ecosystem, and resale demand remain strong.',
  },
  {
    q: 'Should I buy a Classic or Remastered Aeron used?',
    a: 'A Classic Aeron is often the better value if price matters most and the chair is in strong condition. A Remastered model makes more sense if you want the newer controls, frame refinements, and a more modern-feeling chair but still want to save versus buying new.',
  },
  {
    q: 'What Aeron size should most people buy?',
    a: 'Most buyers land in Size B, which is part of why it is usually the easiest size to shop on eBay. Size A fits smaller users better, while Size C is for taller or broader-framed buyers who need more seat and back area.',
  },
  {
    q: 'Is refurbished better than used for an Aeron?',
    a: 'Refurbished is often worth the premium if you want less risk around wear parts, cleaner cosmetics, and a simpler buying decision. Used is better when you are price-sensitive, willing to inspect listings closely, and comfortable trading convenience for savings.',
  },
]

const articleText = `
Best Used Herman Miller Aeron Chairs on eBay in 2026.
A used Herman Miller Aeron can be one of the smartest work-from-home chair buys if you know what to check before you click. eBay is a strong marketplace for Aeron shoppers because it has more used, refurbished, and older fully loaded listings than most standard retail sites.
Classic vs Remastered. Size A, B, and C. Mesh condition, arm function, tilt controls, lumbar support, gas cylinder height, seller rating, return policy.
${featuredSearches.map((item) => `${item.title} ${item.note}`).join(' ')}
${shoppingMoves.map((item) => `${item.title} ${item.text}`).join(' ')}
${checklist.join(' ')}
${redFlags.join(' ')}
${faqItems.map((item) => `${item.q} ${item.a}`).join(' ')}
`

const readingTime = getReadingTime(articleText)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Used Herman Miller Aeron Chairs on eBay in 2026',
  description: metaDescription,
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
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

export default function BestUsedHermanMillerAeronChairsEbayPage() {
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
              Best Used Herman Miller Aeron Chairs on eBay in 2026
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
              A used Herman Miller Aeron can be one of the smartest work-from-home chair buys on the
              internet, but only if you know how to read the listing. eBay is full of strong Aeron
              deals, weak “fully loaded” claims, and condition descriptions that leave out the details
              that actually decide whether the chair is a bargain or a headache.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
              This guide is built to help you shop the Aeron resale market with more confidence. We
              cover the difference between Classic and Remastered models, how to pick the right size,
              what to check before buying, and when paying extra for a refurbished unit makes more
              sense than chasing the absolute cheapest used listing.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">
                {formatReadingTime(readingTime)}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">
                Updated July 6, 2026
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">
                Used and refurbished chair guide
              </span>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                Start shopping
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {featuredSearches.map((item) => (
                  <a
                    key={item.query}
                    href={item.href}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-800"
                  >
                    {item.cta}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                These are the cleanest starting searches for most buyers. Once you have your tracked eBay
                partner-link format set, these search destinations are the first links I would convert.
              </p>
            </div>
          </header>

          <section className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Quick Answer
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-700">
              For most buyers, the best eBay Aeron search starts with a used <strong>Size B Classic</strong>
              {' '}or a clean <strong>refurbished Remastered</strong> listing from a seller with strong
              feedback and a return policy. If value matters most, a fully adjustable Classic Aeron is
              often the better buy. If lower risk and nicer cosmetics matter more, refurbished usually
              earns the premium.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900">Why eBay is a strong place to shop for an Aeron</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                The Aeron is one of the rare office chairs that holds up well enough to make the used
                market genuinely attractive. On eBay, you get access to older Classic models, newer
                Remastered versions, refurbished chairs, replacement parts, and a much wider spread of
                price points than you will see on most standard retail sites.
              </p>
              <p>
                That matters because the Aeron is expensive new, but the used market often gives you a
                chance to buy into the chair at a far more reasonable number. The trade-off is that you
                need to inspect listings carefully. Used-office-chair shopping is less about finding the
                single cheapest listing and more about finding the listing where condition, features, and
                seller quality line up.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900">Classic vs Remastered: which Aeron used buyers should target</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border border-slate-200 text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-gray-900">Question</th>
                    <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-gray-900">Classic Aeron</th>
                    <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-gray-900">Remastered Aeron</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-gray-900">Best for value</td>
                    <td className="border-b border-slate-200 px-4 py-3 text-gray-700">Usually the better buy if price is the priority.</td>
                    <td className="border-b border-slate-200 px-4 py-3 text-gray-700">Costs more, even used.</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-gray-900">Best for newer feel</td>
                    <td className="border-b border-slate-200 px-4 py-3 text-gray-700">Older platform, but still highly usable.</td>
                    <td className="border-b border-slate-200 px-4 py-3 text-gray-700">Better if you want the newer frame and refinements.</td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-200 px-4 py-3 font-medium text-gray-900">Best eBay strategy</td>
                    <td className="border-b border-slate-200 px-4 py-3 text-gray-700">Look for fully adjustable models in strong condition.</td>
                    <td className="border-b border-slate-200 px-4 py-3 text-gray-700">Look for refurbished units with detailed seller notes.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900">Who should skip it</td>
                    <td className="px-4 py-3 text-gray-700">Buyers who want the newest version and easiest resale later.</td>
                    <td className="px-4 py-3 text-gray-700">Budget-conscious buyers who mainly care about ergonomic function.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              In simple terms, the <strong>Classic</strong> is the better value play and the <strong>Remastered</strong>
              {' '}is the better premium used buy. For many home-office shoppers, a clean Classic with the right
              adjustments is a smarter purchase than a rougher Remastered listing that costs much more just because it is newer.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900">Aeron size guide: A, B, or C?</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-bold text-gray-900">Size A</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Better for smaller users who need a narrower, shorter chair. Inventory is thinner on eBay, so it can take longer to find a strong listing.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-bold text-gray-900">Size B</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  The default size for most buyers and usually the easiest to shop because there are far more used and refurbished listings available.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-bold text-gray-900">Size C</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Best for taller or broader-framed users who need more seat depth and back area. These listings can cost more and move quickly.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-sky-200 bg-sky-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-800">
              Best Search Paths
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Which eBay path makes sense for your type of buyer?</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {shoppingMoves.map((item, index) => (
                <div key={item.title} className="rounded-2xl border border-sky-200 bg-white p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                    Move {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900">What to check before buying a used Aeron on eBay</h2>
            <ul className="mt-4 space-y-3 text-base leading-relaxed text-gray-700">
              {checklist.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-200 bg-white p-4">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900">Red flags that should make you slow down</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-gray-700">
              {redFlags.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
              Good Starting Searches
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Where I would start on eBay</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-700">
              These are the highest-signal search paths for this topic because they map directly to the
              three most common Aeron buying intents: best overall fit, lower-risk premium used buy, and
              best-value older model.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {featuredSearches.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="rounded-2xl border border-amber-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                    {item.title}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{item.query}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">{item.note}</p>
                  <p className="mt-4 text-sm font-semibold text-sky-700">{item.cta} →</p>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-gray-900">Used vs refurbished: when the premium is worth it</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                A standard used Aeron is usually the better move when you are comfortable checking
                photos, comparing listing details, and asking the seller a couple of follow-up questions.
                That is where the biggest savings tend to live.
              </p>
              <p>
                Refurbished makes more sense when you want a cleaner buying experience, better odds on
                wear parts, and a listing that already did some of the uncertainty-reduction for you.
                The best refurbished listings often cost more, but they can still be the right value if
                you are trying to avoid the most common used-chair headaches.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.ebay.com/b/Herman-Miller-Chairs-Stools/257900/bn_7112580412?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1"
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
              >
                Shop Herman Miller chair listings
              </a>
              <a
                href={featuredSearches[0].href}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-900 transition hover:border-gray-400"
              >
                Shop used Aeron listings
              </a>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-sky-200 bg-sky-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-800">
              Related WFH Reads
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Link
                href="/wfh/herman-miller-aeron-vs-steelcase-gesture"
                className="rounded-2xl border border-sky-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900">Herman Miller Aeron vs Steelcase Gesture</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Read this if you are still deciding whether the Aeron is the right type of premium chair in the first place.
                </p>
              </Link>
              <Link
                href="/wfh/autonomous-ergochair-pro-vs-hinomi-h1-pro"
                className="rounded-2xl border border-sky-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900">Autonomous ErgoChair Pro vs Hinomi H1 Pro</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  A good lower-price comparison if you want to see what modern midrange ergonomic chairs offer instead.
                </p>
              </Link>
              <Link
                href="/wfh/secretlab-titan-evo-vs-ergotune-supreme"
                className="rounded-2xl border border-sky-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900">Secretlab Titan Evo vs Ergotune Supreme</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Useful if your choice is not just Aeron or not-Aeron, but ergonomic chair versus gaming-style chair.
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

          <footer className="mt-10 border-t border-slate-200 pt-8 text-base leading-relaxed text-gray-700">
            <p>
              The best Aeron deal on eBay is usually not the cheapest one. It is the listing where the
              seller shows the real chair clearly, the condition notes answer the right questions, and
              the features actually match the title. That is the difference between buying a premium
              chair at a smart used price and buying someone else&apos;s problem.
            </p>
            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                Final shopping shortcut
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={featuredSearches[0].href}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-800"
                >
                  Shop Size B Aeron listings
                </a>
                <a
                  href={featuredSearches[1].href}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-sky-300 bg-white px-5 py-3 text-sm font-bold text-sky-800 transition hover:border-sky-400"
                >
                  Shop Remastered refurbished listings
                </a>
              </div>
            </div>
            <p className="mt-4">
              For official product background, see <a href="https://www.hermanmiller.com/products/seating/office-chairs/aeron-chairs/" target="_blank" rel="nofollow noopener" className="font-semibold text-sky-700 hover:text-sky-800">Herman Miller&apos;s Aeron page</a>. For live resale inventory, browse <a href="https://www.ebay.com/b/Herman-Miller-Chairs-Stools/257900/bn_7112580412" target="_blank" rel="nofollow sponsored noopener" className="font-semibold text-sky-700 hover:text-sky-800">current Herman Miller chair listings on eBay</a>.
            </p>
          </footer>
        </article>
      </main>
    </>
  )
}
