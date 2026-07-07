import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import ItemListJsonLd from '@/components/seo/ItemListJsonLd'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best Home & Kitchen Product Reviews 2026 | BestPickZone',
  description:
    'Expert comparisons of the best air fryers, coffee makers, robot vacuums, kids room picks, instant pots, and more. Honest picks with affiliate links and clear buyer-fit guidance.',
  alternates: {
    canonical: 'https://bestpickzone.com/home-kitchen',
  },
  openGraph: {
    title: 'Best Home & Kitchen Product Reviews 2026 | BestPickZone',
    description:
      'Expert comparisons of the best air fryers, coffee makers, robot vacuums, and more.',
    url: 'https://bestpickzone.com/home-kitchen',
    siteName: 'BestPickZone',
    type: 'website',
  },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  category: 'home-kitchen', metadataType: 'website' })

const articles = [
  {
    slug: 'best-dorm-room-essentials',
    title: 'Best Dorm Room Essentials for College (2026)',
    description:
      'A 16-product dorm checklist ranked by what actually gets used all year: the Twin XL sleep stack, outlet fixes, communal-bathroom logistics, and zero-damage storage.',
    badge: 'College Series',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    comingSoon: false,
  },
  {
    slug: 'oxo-vs-chefn-corn-stripper',
    title: "OXO vs Chef'n Corn Stripper",
    description:
      'A raw-HTML summer kitchen showdown between two popular corn strippers, posted as provided with the corrected BestPickZone Amazon affiliate tag.',
    badge: 'Head-to-Head',
    badgeColor: 'bg-lime-100 text-lime-700',
    comingSoon: false,
  },
  {
    slug: 'oxo-vs-fullstar-avocado-slicer',
    title: 'OXO vs Fullstar Avocado Slicer',
    description:
      'A conversion-focused showdown page for two popular avocado tools, built around grip quality, pitting control, and direct Amazon-buy intent.',
    badge: 'Head-to-Head',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    comingSoon: false,
  },
  {
    slug: 'best-solar-powered-attic-fans',
    title: 'Best Solar-Powered Attic Fans',
    description:
      'A conversion-focused guide to the best solar attic fans for lowering attic heat, reducing AC strain, and improving roof ventilation.',
    badge: 'Live Guide',
    badgeColor: 'bg-amber-100 text-amber-700',
    comingSoon: false,
  },
  {
    slug: 'best-kids-fort-for-girls-2026',
    title: 'Best Kids Fort for Girls in 2026',
    description:
      'A real product pick, not a placeholder: our favorite girls fort for reading nooks, pretend play, and shared floor-space use.',
    badge: 'Live Guide',
    badgeColor: 'bg-rose-100 text-rose-700',
    comingSoon: false,
  },
  {
    slug: 'best-air-fryers',
    title: 'Best Air Fryers in 2026',
    description:
      "A polished head-to-head between the Cosori Pro II and Ninja AF101, focused on capacity, cooking performance, noise, and which air fryer actually fits your kitchen.",
    badge: 'Best Roundup',
    badgeColor: 'bg-orange-100 text-orange-700',
    comingSoon: false,
  },
  {
    slug: 'best-vintage-countertop-milkshake-machines-ebay',
    title: 'Best Vintage Countertop Milkshake Machines on eBay',
    description:
      'A buyer-first vintage guide to Hamilton Beach DrinkMaster mixers, Malt Master machines, Waring drink mixers, Oster countertop units, and classic diner-style spindle machines.',
    badge: 'Vintage eBay Guide',
    badgeColor: 'bg-rose-100 text-rose-700',
    comingSoon: false,
  },
  {
    slug: 'best-coffee-makers-under-100',
    title: 'Best Coffee Makers Under $100 in 2026',
    description:
      "A budget coffee showdown between Cuisinart and Hamilton Beach, built around brew quality, flexibility, footprint, and what actually feels worth buying under $100.",
    badge: 'Best Roundup',
    badgeColor: 'bg-orange-100 text-orange-700',
    comingSoon: false,
  },
  {
    slug: 'best-robot-vacuums',
    title: 'Best Robot Vacuums in 2026',
    description:
      'A premium robot vacuum comparison between the Roomba j7+ and Roborock Q5+, with a clear breakdown of navigation, suction, pet-hair handling, and real-home fit.',
    badge: 'Best Roundup',
    badgeColor: 'bg-orange-100 text-orange-700',
    comingSoon: false,
  },
  {
    slug: 'instant-pot-vs-ninja-foodi',
    title: 'Instant Pot vs Ninja Foodi: Which Is Better?',
    description:
      'A direct multi-cooker comparison that shows when the Instant Pot still wins on value and when the Ninja Foodi earns its extra footprint with air frying.',
    badge: 'Head-to-Head',
    badgeColor: 'bg-purple-100 text-purple-700',
    comingSoon: false,
  },
]

const itemListItems = articles
  .filter((article) => !article.comingSoon)
  .map((article) => ({ name: article.title, path: `/home-kitchen/${article.slug}` }))

export default function HomeKitchenPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd trail={[{name: "Home", path: "/"}, {name: "Home & Kitchen"}]} />
      <ItemListJsonLd name="Home & Kitchen Reviews" items={itemListItems} />
      <nav className="mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-gray-800">Home &amp; Kitchen</span>
      </nav>

      <div className="mb-10">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Home &amp; Kitchen Reviews</h1>
        <p className="max-w-3xl text-lg text-gray-600">
          Honest comparisons of the appliances and kitchen gear that actually earn a permanent
          spot on your countertop. We research so you don&apos;t have to.
        </p>
      </div>

      <div className="mb-6 rounded-2xl border border-indigo-200 bg-indigo-50 px-5 py-4 text-sm text-indigo-900">
        <strong>College Student Series:</strong> Setting up for the semester? Start with{' '}
        <Link
          href="/home-kitchen/best-dorm-room-essentials"
          className="font-semibold underline underline-offset-2"
        >
          Best Dorm Room Essentials
        </Link>
        .
      </div>

      <div className="mb-8 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-900">
        <strong>New live guides:</strong> Our latest Home &amp; Kitchen pages are{' '}
        <Link
          href="/home-kitchen/oxo-vs-chefn-corn-stripper"
          className="font-semibold underline underline-offset-2"
        >
          OXO vs Chef&apos;n Corn Stripper
        </Link>
        ,{' '}
        <Link
          href="/home-kitchen/oxo-vs-fullstar-avocado-slicer"
          className="font-semibold underline underline-offset-2"
        >
          OXO vs Fullstar Avocado Slicer
        </Link>
        ,{' '}
        <Link
          href="/home-kitchen/best-solar-powered-attic-fans"
          className="font-semibold underline underline-offset-2"
        >
          Best Solar-Powered Attic Fans
        </Link>{' '}
        and{' '}
        <Link
          href="/home-kitchen/best-kids-fort-for-girls-2026"
          className="font-semibold underline underline-offset-2"
        >
          Best Kids Fort for Girls in 2026
        </Link>
        ,{' '}
        <Link
          href="/home-kitchen/best-air-fryers"
          className="font-semibold underline underline-offset-2"
        >
          Best Air Fryers in 2026
        </Link>
        ,{' '}
        <Link
          href="/home-kitchen/best-vintage-countertop-milkshake-machines-ebay"
          className="font-semibold underline underline-offset-2"
        >
          Best Vintage Countertop Milkshake Machines on eBay
        </Link>
        ,{' '}
        <Link
          href="/home-kitchen/best-coffee-makers-under-100"
          className="font-semibold underline underline-offset-2"
        >
          Best Coffee Makers Under $100 in 2026
        </Link>
        ,{' '}
        <Link
          href="/home-kitchen/best-robot-vacuums"
          className="font-semibold underline underline-offset-2"
        >
          Best Robot Vacuums in 2026
        </Link>{' '}
        and{' '}
        <Link
          href="/home-kitchen/instant-pot-vs-ninja-foodi"
          className="font-semibold underline underline-offset-2"
        >
          Instant Pot vs Ninja Foodi
        </Link>
        .
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {articles.map((article) =>
          article.comingSoon ? (
            <div
              key={article.slug}
              className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm opacity-75"
            >
              <span
                className={`mb-3 inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${article.badgeColor}`}
              >
                {article.badge}
              </span>
              <span className="ml-2 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500">
                Coming Soon
              </span>
              <h2 className="mb-2 text-lg font-bold leading-snug text-gray-800">
                {article.title}
              </h2>
              <p className="text-sm leading-relaxed text-gray-500">{article.description}</p>
            </div>
          ) : (
            <Link
              key={article.slug}
              href={`/home-kitchen/${article.slug}`}
              className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className={`mb-3 inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${article.badgeColor}`}
              >
                {article.badge}
              </span>
              <h2 className="mb-2 text-lg font-bold leading-snug text-gray-800">
                {article.title}
              </h2>
              <p className="text-sm leading-relaxed text-gray-500">{article.description}</p>
              <span className="mt-3 block text-sm font-semibold text-blue-600">
                Read guide →
              </span>
            </Link>
          )
        )}
      </div>

      <section className="prose prose-gray mt-14 max-w-none">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">
          What to Expect from Our Home &amp; Kitchen Guides
        </h2>
        <p className="text-gray-600">
          Each Home &amp; Kitchen article on BestPickZone should feel complete, skimmable,
          and conversion-ready. That now includes showdown-style pages with an answer-first
          hero, quick verdict cards, product-by-product breakdowns, a visual comparison table,
          FAQ support, direct Amazon CTAs placed where buyer intent is strongest, and
          occasional raw-HTML launches when the supplied design is already strong and
          publishable.
        </p>
      </section>
    </main>
  )
}
