import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Tech & Electronics Reviews 2026 | BestPickZone',
  description:
    'Expert reviews and comparisons of the best laptops, headphones, keyboards, monitors, and more. Every pick backed by hands-on research with Amazon and Best Buy links.',
  openGraph: {
    title: 'Best Tech & Electronics Reviews 2026 | BestPickZone',
    description:
      'Expert reviews and comparisons of the best laptops, headphones, keyboards, monitors, and more.',
    url: 'https://bestpickzone.com/tech',
    siteName: 'BestPickZone',
    type: 'website',
  },
}

const articles = [
  {
    slug: 'best-wireless-earbuds',
    title: 'Best Wireless Earbuds in 2026',
    description:
      'From Sony to Apple to Jabra — we tested the top earbuds across every price point to find the best sound, ANC, and battery life.',
    badge: 'Best Roundup',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    slug: 'best-laptops-for-college-students',
    title: 'Best Laptops for College Students in 2026',
    description:
      'Long battery life, light weight, and enough power for coursework. Our top picks for every budget, from $400 Chromebooks to premium MacBooks.',
    badge: 'Best For Students',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    slug: 'best-mechanical-keyboards',
    title: 'Best Mechanical Keyboards in 2026',
    description:
      'Whether you type all day or game all night, the right mechanical keyboard makes a real difference. Here are the best boards at every price.',
    badge: 'Best Roundup',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    slug: 'airpods-pro-vs-sony-wf-1000xm5',
    title: 'AirPods Pro 2 vs Sony WF-1000XM5: Which Is Worth It?',
    description:
      'Two of the best noise-canceling earbuds go head-to-head. We break down ANC, sound quality, comfort, battery, and value to crown a winner.',
    badge: 'Head-to-Head',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    slug: 'best-budget-monitors',
    title: 'Best Budget Monitors Under $300 in 2026',
    description:
      "Great monitors don't have to cost a fortune. Our picks deliver sharp 1080p and 1440p displays, fast refresh rates, and solid build quality under $300.",
    badge: 'Best Roundup',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
]

export default function TechPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Tech &amp; Electronics</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tech &amp; Electronics Reviews
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Every review on this page is backed by hands-on research. We compare specs, read
          hundreds of user reviews, and price-check across Amazon and Best Buy so you can
          buy with confidence.
        </p>
      </div>

      {/* Article Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/tech/${article.slug}`}
            className="group block bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
          >
            <span
              className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${article.badgeColor}`}
            >
              {article.badge}
            </span>
            <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2 leading-snug">
              {article.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">{article.description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline">
              Read the full guide →
            </span>
          </Link>
        ))}
      </div>

      {/* Category description for SEO */}
      <section className="mt-14 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          How We Review Tech &amp; Electronics
        </h2>
        <p className="text-gray-600">
          Every article on BestPickZone follows a rigorous research process. We start with
          keyword research to identify what buyers are actually searching for, then gather
          data from Amazon, Best Buy, manufacturer spec sheets, and published user reviews.
          Each product recommendation includes an affiliate disclosure, real pros and cons,
          and a verdict tailored to specific types of buyers — not one-size-fits-all advice.
        </p>
        <p className="text-gray-600 mt-3">
          We earn a small commission if you buy through our links at no extra cost to you.
          Our recommendations are never influenced by affiliate fees — we call out the best
          products regardless of commission rates.
        </p>
      </section>
    </main>
  )
}
