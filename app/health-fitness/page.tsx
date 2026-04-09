import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Health & Fitness Gear Reviews 2026 | BestPickZone',
  description:
    'Expert comparisons of fitness trackers, adjustable dumbbells, yoga mats, and more. Research-backed picks with Amazon and Best Buy links.',
  openGraph: {
    title: 'Best Health & Fitness Gear Reviews 2026 | BestPickZone',
    description:
      'Expert comparisons of fitness trackers, adjustable dumbbells, yoga mats, and more.',
    url: 'https://bestpickzone.com/health-fitness',
    siteName: 'BestPickZone',
    type: 'website',
  },
}

const articles = [
  {
    slug: 'best-fitness-trackers',
    title: 'Best Fitness Trackers in 2026',
    description:
      'Sleep tracking, heart rate monitoring, GPS, and more — we ranked the best fitness bands and smartwatches by accuracy, battery life, and value.',
    badge: 'Best Roundup',
    badgeColor: 'bg-teal-100 text-teal-700',
    comingSoon: true,
  },
  {
    slug: 'best-adjustable-dumbbells',
    title: 'Best Adjustable Dumbbells in 2026',
    description:
      'Adjustable dumbbells save space and money versus a full rack. We compared the top sets by weight range, adjustment mechanism, and durability.',
    badge: 'Best Roundup',
    badgeColor: 'bg-teal-100 text-teal-700',
    comingSoon: true,
  },
  {
    slug: 'best-yoga-mats',
    title: 'Best Yoga Mats in 2026',
    description:
      'From sticky surfaces to cushioned thickness — the best yoga mats for beginners, hot yoga, and travel. Picks for every practice and budget.',
    badge: 'Best Roundup',
    badgeColor: 'bg-teal-100 text-teal-700',
    comingSoon: true,
  },
  {
    slug: 'fitbit-vs-garmin',
    title: 'Fitbit vs Garmin: Which Fitness Tracker Is Right for You?',
    description:
      'Fitbit excels at everyday health tracking; Garmin dominates for serious athletes. We compare accuracy, features, app ecosystems, and price.',
    badge: 'Head-to-Head',
    badgeColor: 'bg-purple-100 text-purple-700',
    comingSoon: true,
  },
]

export default function HealthFitnessPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Health &amp; Fitness</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Health &amp; Fitness Reviews
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Research-backed picks for fitness gear, trackers, and home gym equipment — from
          budget-friendly options to premium performance tools.
        </p>
      </div>

      {/* Coming Soon Banner */}
      <div className="bg-teal-50 border border-teal-200 rounded-lg px-5 py-4 mb-8 text-sm text-teal-800">
        <strong>Coming soon!</strong> Health &amp; Fitness guides are launching shortly.
        Bookmark this page to be notified when full articles are published.
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

      <section className="mt-14 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Our Approach to Health &amp; Fitness Reviews
        </h2>
        <p className="text-gray-600">
          Fitness gear recommendations are only useful if they match your actual goals. Our
          guides segment picks by fitness level, training style, and budget, and every
          product is evaluated against real user feedback from verified purchasers on Amazon.
        </p>
      </section>
    </main>
  )
}
