import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | BestPickZone',
  description: 'The page you were looking for could not be found.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-24 text-center">
      <p className="text-7xl font-extrabold text-blue-200 mb-4">404</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Page Not Found</h1>
      <p className="text-gray-500 mb-8 leading-relaxed">
        The page you were looking for doesn't exist or may have been moved. Try browsing
        our categories or heading back to the homepage.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-7 rounded-lg transition-colors"
        >
          ← Back to Homepage
        </Link>
        <Link
          href="/tech"
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-7 rounded-lg transition-colors"
        >
          Browse Tech Reviews
        </Link>
      </div>

      {/* Helpful links */}
      <div className="mt-12 grid sm:grid-cols-2 gap-4 text-left">
        {[
          { href: '/tech/best-wireless-earbuds', label: 'Best Wireless Earbuds in 2026' },
          { href: '/tech/best-laptops-for-college-students', label: 'Best Laptops for College Students' },
          { href: '/tech/best-mechanical-keyboards', label: 'Best Mechanical Keyboards' },
          { href: '/tech/best-budget-monitors', label: 'Best Budget Monitors Under $300' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block p-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all"
          >
            {link.label} →
          </Link>
        ))}
      </div>
    </main>
  )
}
