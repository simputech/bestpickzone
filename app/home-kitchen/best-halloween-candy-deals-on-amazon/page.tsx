import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import ItemListJsonLd from '@/components/seo/ItemListJsonLd'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { formatReadingTime, getReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/home-kitchen/best-halloween-candy-deals-on-amazon'
const publishedDate = '2026-09-19T00:00:00Z'
const AMAZON_TAG = 'althcu-20'

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

const metaDescription =
  'The best Halloween candy deals on Amazon in 2026, with estimated cost per trick-or-treater for a Hershey assortment, a bigger party bag, and an allergy-friendly option. Buy the right count, not just the lowest sticker price.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best Halloween Candy Deals on Amazon (2026) | BestPickZone',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'best halloween candy deals on amazon',
      'halloween candy amazon',
      'bulk halloween candy',
      'trick or treat candy variety pack',
      'best halloween candy variety bag',
      'halloween candy cost per trick or treater',
      'how much does halloween candy cost per child',
    ],
    openGraph: { title: 'Best Halloween Candy Deals on Amazon (2026)', description: metaDescription, url: pageUrl, type: 'article' },
    twitter: { card: 'summary_large_image', title: 'Best Halloween Candy Deals on Amazon', description: metaDescription },
  },
  { category: 'home-kitchen', publishedTime: publishedDate, modifiedTime: publishedDate, section: 'Home & Kitchen', url: pageUrl, tags: ['Halloween', 'candy', 'trick or treat', 'Amazon deals'] }
)

type Pick = {
  rank: number
  badge: string
  name: string
  query: string
  quick: string
  details: string
  pros: string[]
  cons: string[]
  verdict: string
  skip: string
  priceChecked: string
  costPerTreat: string
  quickPickTitle?: string
}

const picks: Pick[] = [
  {
    rank: 1,
    badge: 'Best overall',
    name: "HERSHEY'S Assorted Halloween Candy, 115-piece variety pack",
    query: "HERSHEY'S Assorted Chocolate Halloween Candy 115 individually wrapped pieces",
    quick: 'The sensible default for a normal neighborhood route: enough recognizable chocolate for a busy evening without committing to a giant bag.',
    details: "This is the pick for people who want an easy answer, not an ultra-specialized candy strategy. The current Amazon listing identifies 115 individually wrapped pieces and a mix built around Hershey's favorites. That is a better starting count than tiny seasonal bags if you expect more than a handful of visitors, while still being manageable for a household that does not want leftovers through Thanksgiving. The practical advantage is recognition: kids can immediately spot familiar chocolate brands, and hosts are not relying on one polarizing flavor to carry the bowl.",
    pros: ['Useful mid-size count for most front-door trick-or-treating', 'Recognizable chocolate mix', 'Individually wrapped for easy handout'],
    cons: ['Not a fit for nut-free needs', 'Chocolate is a weaker choice in unusually warm weather'],
    verdict: 'Start here if your goal is a crowd-pleasing bag with enough variety and a count that is easy to plan around.',
    skip: 'Skip it if you need to avoid common allergens or expect a very large event; buy a clearly labeled allergy-friendly option or a 300-plus-piece assortment instead.',
    priceChecked: '$18.49',
    costPerTreat: '~$0.16',
    quickPickTitle: "HERSHEY'S 115-piece assortment",
  },
  {
    rank: 2,
    badge: 'Best for a busy block',
    name: "HERSHEY'S Assorted Halloween Candy, 330-piece variety pack",
    query: "HERSHEY'S Assorted Halloween Candy 330 individually wrapped pieces",
    quick: 'A better large-household choice than stacking several small bags, especially if your street draws a steady stream of trick-or-treaters.',
    details: "A big bowl disappears quickly when your neighborhood has a real Halloween route. Amazon's live seasonal listing described this HERSHEY'S assortment as 98.45 ounces with 330 individually wrapped pieces, spanning chocolate plus fruit and hard-candy-style options. The count is the useful metric here: it gives you room to hand out two pieces to earlier groups and still avoid the late-evening panic of switching off the porch light. It is also the sensible shared purchase for an office bowl, school-approved event where the organizer has checked the ingredient labels, or a party with a treat table.",
    pros: ['Large 330-piece count reduces last-minute rebuys', 'More variety than an all-chocolate bowl', 'Better scale for a busy neighborhood or party'],
    cons: ['Takes storage space', 'Only a deal if you will actually use the count'],
    verdict: 'Choose this when headcount is your main concern. A big bag that fits your traffic is a better deal than a low-cost bag that runs out early.',
    skip: 'Skip it for apartment-door trick-or-treating or a quiet street. The unused candy is not a bargain just because the per-piece cost is lower.',
    priceChecked: '$44.99',
    costPerTreat: '~$0.14',
    quickPickTitle: "HERSHEY'S 330-piece assortment",
  },
  {
    rank: 3,
    badge: 'Best chocolate variety',
    name: "M&M'S, SNICKERS, TWIX & MILKY WAY 200-count variety pack",
    query: "M&M'S SNICKERS TWIX MILKY WAY Halloween Candy 200 count",
    quick: 'The strongest all-chocolate alternative when you want a mix of crunchy, caramel, nougat, and plain milk-chocolate personalities in one bowl.',
    details: "A variety mix should create genuine choice, not five slightly different versions of the same bar. The current Amazon result for this Mars Wrigley assortment lists 200 pieces across M&M'S, SNICKERS, TWIX, and MILKY WAY. That makes it a smart pick for hosts who know their crowd leans chocolate-heavy: the mix covers a crisp shell, peanut-and-nougat, cookie-and-caramel, and softer nougat option. It also keeps the bowl from looking monotonous, which is surprisingly important when children are making a fast, visual choice at the door.",
    pros: ['Four distinct chocolate styles', '200-piece count suits medium-to-busy traffic', 'Easy to recognize at a glance'],
    cons: ['No non-chocolate fallback', 'Contains common allergens; check the package before serving'],
    verdict: 'Pick this for a chocolate-forward house, especially if you would rather offer a few familiar favorites than chase novelty candy.',
    skip: 'Skip it if you want fruit candy in the mix or must accommodate allergy-sensitive guests.',
    priceChecked: '$24.87',
    costPerTreat: '~$0.12',
  },
  {
    rank: 4,
    badge: 'Best allergy-friendly alternative',
    name: 'YumEarth Halloween OG Variety Bag, 50 count',
    query: 'YumEarth Halloween OG Variety Bag 50 count',
    quick: 'A clearly different bowl option for hosts who want an individually wrapped, vegan and gluten-free alternative without pretending every allergy need is identical.',
    details: "The live Amazon listing for this YumEarth Halloween bag describes 50 individually wrapped gummy fruits, lollipops, and Giggles, and labels it vegan, gluten-free, non-GMO, and free of artificial dyes. That is useful information, but it is not a substitute for reading the actual package for the guests you expect. Allergies are personal, and manufacturing statements can change. The better use is to make this a separate, clearly marked option rather than quietly mixing it into a chocolate bowl where children and parents cannot distinguish it.",
    pros: ['Individually wrapped non-chocolate variety', 'Listing identifies vegan and gluten-free attributes', 'Useful as a clearly separated alternative bowl'],
    cons: ['Much higher cost per piece than mainstream assortments', 'Not a blanket guarantee for every allergy'],
    verdict: 'Buy this as a purposeful second option, not as a universal substitute for asking families about their needs and checking the current label.',
    skip: 'Skip it if budget-per-piece is the only goal. It earns its place for the dietary-positioning and variety, not bulk value.',
    priceChecked: '$24.49',
    costPerTreat: '~$0.49',
    quickPickTitle: 'YumEarth Halloween OG Variety Bag',
  },
  {
    rank: 5,
    badge: 'Best small-bowl option',
    name: "HERSHEY'S Assorted Halloween Candy, 65-piece variety pack",
    query: "HERSHEY'S Assorted Halloween Candy 65 individually wrapped pieces",
    quick: 'The reasonable choice for a low-traffic porch, office desk, or party favor setup where a giant assortment would leave too much behind.',
    details: "More candy is not automatically a better deal. Amazon's current listing for the smaller HERSHEY'S assortment identifies 65 individually wrapped pieces and a broad mix including HERSHEY'S, REESE'S, KIT KAT, TWIZZLERS, HARIBO, and JOLLY RANCHER. It is a compact assortment with enough flavor and texture range to feel festive, but it is not designed for a parade of trick-or-treaters. This is the practical buy if you expect a light route, live in a building with limited visitors, or need a simple add-on bowl for a gathering.",
    pros: ['Compact count limits leftovers', 'Mix includes chocolate and non-chocolate candy', 'Easy choice for light traffic'],
    cons: ['Can disappear fast on a popular street', 'Usually weaker per-piece value than bigger bags'],
    verdict: 'Use this for a modest candy plan. It is much smarter than overbuying if you realistically expect fewer than a few dozen visitors.',
    skip: 'Skip it if you have historically run out of candy; this is a small-bowl pick, not a main supply for a busy block.',
    priceChecked: '$20.00',
    costPerTreat: '~$0.31',
  },
]

const faqs = [
  { question: 'When should I buy Halloween candy on Amazon?', answer: 'Buy early enough to avoid delivery and selection pressure, then check the delivery date and price immediately before checkout. Seasonal inventory and prices move quickly, so this guide treats the listed counts and product attributes as a planning tool, not a promise that a particular price will hold.' },
  { question: 'How much Halloween candy should I buy?', answer: 'Start with the number of visitors you actually expect, then decide whether you plan to give one or two pieces per child. A 115-piece bag works for a moderate route; a 200- or 330-piece bag makes more sense for a busy block, party, or shared office bowl.' },
  { question: 'How is cost per trick-or-treater estimated?', answer: 'The estimate divides the checked Amazon price by the listed individual piece count and assumes one piece per visitor. It is a quick planning estimate, not a guaranteed checkout price: Amazon prices, coupons, package counts, and delivery offers can change.' },
  { question: 'Is the cheapest Halloween candy bag always the best deal?', answer: 'No. Compare piece count, candy type, and whether you will use the whole bag. A large bag can have a lower per-piece cost but still waste money if your route is quiet. A specialty allergy-friendly option may cost more but provide value that a generic chocolate bag cannot.' },
  { question: 'What Halloween candy should I offer for allergy-sensitive trick-or-treaters?', answer: 'Use sealed, clearly labeled alternatives in a separate bowl and check each package at the time you buy it. Do not describe a candy as safe for every allergy based on a general product claim; individual needs and manufacturer statements vary.' },
]

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article', headline: 'Best Halloween Candy Deals on Amazon (2026)', description: metaDescription,
  datePublished: publishedDate, dateModified: publishedDate, mainEntityOfPage: pageUrl,
  author: { '@type': 'Organization', name: 'BestPickZone Editorial Team' }, publisher: { '@type': 'Organization', name: 'BestPickZone' },
}

const fullText = [metaDescription, ...picks.flatMap((pick) => [pick.quick, pick.details, pick.verdict, pick.skip]), ...faqs.map((faq) => faq.answer)].join(' ')
const readingTime = formatReadingTime(getReadingTime(fullText))

export default function BestHalloweenCandyDealsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Home & Kitchen', path: '/home-kitchen' }, { name: 'Best Halloween Candy Deals on Amazon' }]} />
      <ItemListJsonLd name="Best Halloween Candy Deals on Amazon" items={picks.map((pick) => ({ name: pick.name, path: `/home-kitchen/best-halloween-candy-deals-on-amazon#pick-${pick.rank}` }))} />

      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Home & Kitchen', href: '/home-kitchen' }, { label: 'Best Halloween Candy Deals on Amazon' }]} />

      <section className="mb-10 rounded-[2rem] border border-orange-200 bg-[linear-gradient(140deg,#1e293b_0%,#7c2d12_52%,#f97316_100%)] px-6 py-9 text-white shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">Halloween buying guide</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-5xl">Best Halloween candy deals on Amazon: buy for your actual candy traffic.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-orange-50">The best all-around choice is the 115-piece HERSHEY&apos;S assortment: it is large enough for a normal Halloween route, familiar to most kids, and less likely to turn into a November storage problem. Move up to a 200- or 330-piece bag only when your neighborhood or event really justifies it.</p>
        <p className="mt-5 max-w-3xl text-sm leading-6 text-orange-100">BestPickZone participates in the Amazon Services LLC Associates Program. If you buy through links on this page, we may earn a commission at no extra cost to you.</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700"><span className="rounded-full bg-white px-4 py-2 font-semibold">Checked September 19, 2026</span><span className="rounded-full bg-white px-4 py-2 font-semibold">{readingTime}</span><span className="rounded-full bg-white px-4 py-2 font-semibold">5 Amazon picks</span></div>
      </section>

      <section className="mb-10 rounded-[2rem] border border-orange-100 bg-orange-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">Quick picks</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[picks[0], picks[1], picks[3]].map((pick) => <div key={pick.rank} className="flex flex-col rounded-2xl bg-white p-5 shadow-sm"><p className="text-sm font-bold uppercase tracking-wide text-orange-700">{pick.badge}</p><p className="mt-2 font-bold text-slate-900">{pick.quickPickTitle}</p><p className="mt-2 text-sm leading-6 text-slate-600">{pick.quick}</p><p className="mt-4 text-sm font-semibold text-slate-800">Cost per trick-or-treater: {pick.costPerTreat}</p><p className="mt-1 text-xs leading-5 text-slate-500">Based on {pick.priceChecked} ÷ listed piece count, one piece each; price may change.</p><a href={amazonSearch(pick.query)} target="_blank" rel="sponsored noopener" className="mt-5 inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300">Buy Here on Amazon</a></div>)}
        </div>
      </section>

      <section className="mb-10 overflow-x-auto rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900">Halloween candy comparison at a glance</h2>
        <table className="mt-5 w-full min-w-[680px] text-left text-sm"><thead className="border-b border-slate-200 text-slate-500"><tr><th className="pb-3 pr-4">Pick</th><th className="pb-3 pr-4">Best for</th><th className="pb-3 pr-4">Count</th><th className="pb-3">Why it stands out</th></tr></thead><tbody className="text-slate-700">
          <tr className="border-b border-slate-100"><td className="py-4 pr-4 font-semibold">HERSHEY&apos;S mixed</td><td className="py-4 pr-4">Most homes</td><td className="py-4 pr-4">115</td><td className="py-4">The practical, familiar default.</td></tr>
          <tr className="border-b border-slate-100"><td className="py-4 pr-4 font-semibold">HERSHEY&apos;S large mixed</td><td className="py-4 pr-4">Busy route</td><td className="py-4 pr-4">330</td><td className="py-4">Scale without buying several bags.</td></tr>
          <tr className="border-b border-slate-100"><td className="py-4 pr-4 font-semibold">Mars Wrigley mix</td><td className="py-4 pr-4">Chocolate fans</td><td className="py-4 pr-4">200</td><td className="py-4">Distinct candy-bar choices in one bowl.</td></tr>
          <tr><td className="py-4 pr-4 font-semibold">YumEarth</td><td className="py-4 pr-4">Separate alternative bowl</td><td className="py-4 pr-4">50</td><td className="py-4">Vegan and gluten-free attributes on the current listing.</td></tr>
        </tbody></table>
      </section>

      <section className="space-y-7">
        {picks.map((pick) => <article id={`pick-${pick.rank}`} key={pick.rank} className="scroll-mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.05)]">
          <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-700">#{pick.rank} · {pick.badge}</p><h2 className="mt-2 text-3xl font-black leading-tight text-slate-900"><a href={amazonSearch(pick.query)} target="_blank" rel="sponsored noopener" className="hover:text-orange-700">{pick.name}</a></h2></div>
          <p className="mt-5 text-lg font-semibold leading-8 text-slate-800">{pick.quick}</p><p className="mt-4 text-base leading-8 text-slate-700">{pick.details}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2"><div className="rounded-2xl bg-emerald-50 p-5"><h3 className="font-bold text-emerald-950">Pros</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-emerald-950">{pick.pros.map((pro) => <li key={pro}>{pro}</li>)}</ul></div><div className="rounded-2xl bg-rose-50 p-5"><h3 className="font-bold text-rose-950">Cons</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-rose-950">{pick.cons.map((con) => <li key={con}>{con}</li>)}</ul></div></div>
          <p className="mt-5 text-base leading-7 text-slate-700"><strong className="text-slate-900">Verdict:</strong> {pick.verdict}</p><p className="mt-3 text-base leading-7 text-slate-700"><strong className="text-slate-900">Skip this if:</strong> {pick.skip}</p><a href={amazonSearch(pick.query)} target="_blank" rel="sponsored noopener" className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-300">Click Here to Buy on Amazon</a>
        </article>)}
      </section>

      <section className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-900 p-7 text-slate-100"><h2 className="text-3xl font-black">How to find a real Halloween candy deal</h2><div className="mt-5 space-y-4 text-base leading-7 text-slate-300"><p><strong className="text-white">Count before price.</strong> Decide whether you are buying one or two pieces per expected visitor. The right bag is the one that gets you through the evening, not simply the lowest initial price.</p><p><strong className="text-white">Check the specific listing at checkout.</strong> Amazon seasonal assortments can shift in price, seller, delivery date, and package design. The product details in this guide were checked live on September 19, but the current listing is the final authority.</p><p><strong className="text-white">Keep alternative candy visible and separate.</strong> If you add a vegan, gluten-free, or other specialty option, label it clearly and read the current package. Do not treat a broad listing attribute as a promise for every dietary or allergy need.</p><p><strong className="text-white">Do not buy your leftovers.</strong> A quiet building or a late party does not need a 330-piece bag. Smaller assortments often win when they match real demand.</p></div></section>

      <section className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6"><h2 className="text-3xl font-black text-slate-900">FAQ</h2><div className="mt-6 space-y-5">{faqs.map((faq) => <div key={faq.question} className="rounded-2xl bg-slate-50 p-5"><h3 className="text-xl font-bold text-slate-900">{faq.question}</h3><p className="mt-3 leading-7 text-slate-700">{faq.answer}</p></div>)}</div></section>

      <section className="mt-12 rounded-[2rem] border border-orange-100 bg-orange-50 p-6"><h2 className="text-2xl font-black text-slate-900">Final verdict</h2><p className="mt-3 max-w-3xl leading-7 text-slate-700">Buy the 115-piece HERSHEY&apos;S variety pack for the best balance of familiar candy, manageable leftovers, and normal Halloween coverage. At the checked price, that is about 16 cents per trick-or-treater when you give one piece each. Jump to the 330-piece bag only for a reliably busy route, choose the Mars 200-count mix for an all-chocolate crowd, and use YumEarth as a separate option when its specific current labeling fits your guests&apos; needs.</p><a href={amazonSearch(picks[0].query)} target="_blank" rel="sponsored noopener" className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-300">Buy the Best Overall Pick on Amazon</a><div className="mt-5 flex flex-wrap gap-3"><Link href="/home-kitchen" className="rounded-full bg-white px-4 py-3 text-sm font-bold text-slate-800 ring-1 ring-orange-200 hover:text-orange-700">Explore Home &amp; Kitchen guides</Link><Link href="/home-kitchen/best-picnic-essentials" className="rounded-full bg-white px-4 py-3 text-sm font-bold text-slate-800 ring-1 ring-orange-200 hover:text-orange-700">Best picnic essentials</Link><Link href="/home-kitchen/best-products-for-your-backyard" className="rounded-full bg-white px-4 py-3 text-sm font-bold text-slate-800 ring-1 ring-orange-200 hover:text-orange-700">Best products for your backyard</Link></div></section>
    </main>
  )
}
