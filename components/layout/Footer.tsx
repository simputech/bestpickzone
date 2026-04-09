import Link from 'next/link'

const authorLinks = [
  { href: '/books/best-stephen-king-books', label: 'Stephen King' },
  { href: '/books/best-colleen-hoover-books', label: 'Colleen Hoover' },
  { href: '/books/best-malcolm-gladwell-books', label: 'Malcolm Gladwell' },
  { href: '/books/best-neil-gaiman-books', label: 'Neil Gaiman' },
  { href: '/books/best-haruki-murakami-books', label: 'Haruki Murakami' },
]

const genreLinks = [
  { href: '/books/best-psychological-thrillers', label: 'Psychological Thrillers' },
  { href: '/books/best-fantasy-series-for-adults', label: 'Fantasy Series' },
  { href: '/books/best-horror-novels', label: 'Horror Novels' },
  { href: '/books/best-romantasy-books', label: 'Romantasy' },
  { href: '/books/best-historical-fiction', label: 'Historical Fiction' },
]

const popularLinks = [
  { href: '/books/best-books-to-read-on-the-beach', label: 'Best Beach Reads' },
  { href: '/books/best-book-club-books', label: 'Best Book Club Books' },
  { href: '/books/best-audiobooks-on-audible', label: 'Best Audiobooks' },
  { href: '/books/best-feel-good-books', label: 'Best Feel-Good Books' },
  { href: '/books/best-books-of-all-time', label: 'Best Books of All Time' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-black tracking-tight mb-4 block"
              style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
            >
              Best<span className="text-yellow-400">Pick</span>Zone
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Honest book recommendations for every reader type — from debut novels to
              all-time classics.
            </p>
            <Link
              href="/books"
              className="inline-block text-sm font-semibold bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Browse All Books →
            </Link>
          </div>

          {/* By Author */}
          <div>
            <p className="text-white text-sm font-bold mb-4 uppercase tracking-wider">By Author</p>
            <ul className="space-y-2 text-sm">
              {authorLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/books/authors" className="text-yellow-500 hover:text-yellow-400 transition-colors font-medium">
                  See all authors →
                </Link>
              </li>
            </ul>
          </div>

          {/* By Genre */}
          <div>
            <p className="text-white text-sm font-bold mb-4 uppercase tracking-wider">By Genre</p>
            <ul className="space-y-2 text-sm">
              {genreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/books/genre-fiction" className="text-yellow-500 hover:text-yellow-400 transition-colors font-medium">
                  See all genres →
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Lists */}
          <div>
            <p className="text-white text-sm font-bold mb-4 uppercase tracking-wider">Popular Lists</p>
            <ul className="space-y-2 text-sm">
              {popularLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/books/reader-picks" className="text-yellow-500 hover:text-yellow-400 transition-colors font-medium">
                  See all lists →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="border-t border-gray-700 pt-8 text-xs text-gray-500 space-y-2">
          <p>
            <strong className="text-gray-400">Affiliate Disclosure:</strong> BestPickZone
            participates in the Amazon Services LLC Associates Program. When you purchase
            through links on this site, we may earn a commission at no extra cost to you.
            Our recommendations are always based on book quality and reader fit — never
            commission rates.
          </p>
          <p>Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.</p>
          <p className="mt-4">© {year} BestPickZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
