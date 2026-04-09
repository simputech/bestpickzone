import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Home & Kitchen Product Reviews 2026 | BestPickZone',
  description:
    'Expert comparisons of the best air fryers, coffee makers, robot vacuums, instant pots, and more. Honest picks with Amazon and Best Buy links.',
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
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Home &amp; Kitchen</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Home &amp; Kitchen Reviews
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Honest comparisons of the appliances and kitchen gear that actually earn a
          permanent spot on your countertop. We research so you don't have to.
        </p>
      </div>

      {/* Coming Soon Banner */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg px-5 py-4 mb-8 text-sm text-orange-800">
        <strong>Coming soon!</strong> Home &amp; Kitchen guides are launching shortly. Check
        back or bookmark this page — full articles are on the way.
      </div>

      {/* Article Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="block bg-white rounded-xl border border-gray-200 p-6 shadow-sm opacity-75"
          >
            <span
              className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${article.badgeColor}`}
            >
              {article.badge}
            </span>
            {article.comingSoon && (
              <span className="ml-2 inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                Coming Soon
              </span>
            )}
            <h2 className="text-lg font-bold text-gray-800 mb-2 leading-snug">
              {article.title}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">{article.description}</p>
          </div>
        ))}
      </div>

      {/* SEO section */}
      <section className="mt-14 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
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
