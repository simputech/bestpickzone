import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Home & Kitchen Product Reviews 2026 | BestPickZone',
  description:
    'Expert comparisons of the best air fryers, coffee makers, robot vacuums, kids room picks, instant pots, and more. Honest picks with affiliate links and clear buyer-fit guidance.',
  openGraph: {
    title: 'Best Home & Kitchen Product Reviews 2026 | BestPickZone',
    description:
      'Expert comparisons of the best air fryers, coffee makers, robot vacuums, and more.',
    url: 'https://bestpickzone.com/home-kitchen',
    siteName: 'BestPickZone',
    type: 'website',
  },
}

const articles = [
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
      'Crispy food with less oil and less mess. We ranked the top air fryers by cooking performance, capacity, ease of cleaning, and value.',
    badge: 'Best Roundup',
    badgeColor: 'bg-orange-100 text-orange-700',
    comingSoon: true,
  },
  {
    slug: 'best-coffee-makers-under-100',
    title: 'Best Coffee Makers Under $100 in 2026',
    description:
      "You don't need to spend a fortune for a great cup. These drip machines, pod brewers, and pour-over setups deliver cafe-quality coffee on a budget.",
    badge: 'Best Roundup',
    badgeColor: 'bg-orange-100 text-orange-700',
    comingSoon: true,
  },
  {
    slug: 'best-robot-vacuums',
    title: 'Best Robot Vacuums in 2026',
    description:
      'Smart mapping, self-emptying bases, and powerful suction — robot vacuums have come a long way. Here are the best ones for every home and budget.',
    badge: 'Best Roundup',
    badgeColor: 'bg-orange-100 text-orange-700',
    comingSoon: true,
  },
  {
    slug: 'instant-pot-vs-ninja-foodi',
    title: 'Instant Pot vs Ninja Foodi: Which Is Better?',
    description:
      'Both are wildly popular multi-cookers, but they do different things best. We compare pressure cooking, air frying, sauté performance, and price.',
    badge: 'Head-to-Head',
    badgeColor: 'bg-purple-100 text-purple-700',
    comingSoon: true,
  },
]

export default function HomeKitchenPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
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

      <div className="mb-8 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-900">
        <strong>New live guides:</strong> Our latest Home &amp; Kitchen pages are{' '}
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
        . More room-product roundups are still on the way.
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
          Each Home &amp; Kitchen article on BestPickZone covers 4–6 products in depth, with
          specs, pros and cons, a buying guide explaining what to look for, an FAQ targeting
          common questions, and a final verdict segmented by buyer type. All prices are
          verified against Amazon and Best Buy at the time of publication.
        </p>
      </section>
    </main>
  )
}
