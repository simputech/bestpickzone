import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BestPickZone — Best Book Recommendations & Reading Guides 2026',
  description:
    'Find the right book for every reader. BestPickZone covers 100+ curated book lists — author roundups, genre guides, self-help rankings, kids & YA picks, and reader-intent lists.',
  openGraph: {
    title: 'BestPickZone — Best Book Recommendations 2026',
    description:
      'Honest book recommendations for every reader type — from debut novels to all-time classics.',
    url: 'https://bestpickzone.com',
    siteName: 'BestPickZone',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bestpickzone.com',
  },
}

const categories = [
  {
    href: '/books/authors',
    emoji: '✍️',
    title: 'Best Books by Author',
    description:
      'Where to start with Stephen King, Colleen Hoover, Malcolm Gladwell, Neil Gaiman, and 11 more prolific authors — ranked by starting point, tone, and what to read next.',
    color: 'bg-blue-50 border-blue-200',
    accent: 'text-blue-700',
    tag: '15 Author Guides',
  },
  {
    href: '/books/genre-fiction',
    emoji: '📖',
    title: 'Genre Fiction',
    description:
      'The best psychological thrillers, fantasy series, horror novels, WW2 fiction, dark romance, cozy mysteries, and more — ranked by mood, pacing, and reader type.',
    color: 'bg-coral-50 border-orange-200',
    accent: 'text-orange-700',
    tag: '20 Genre Lists',
  },
  {
    href: '/books/self-help',
    emoji: '🧠',
    title: 'Self-Help & Non-Fiction',
    description:
      'Top books on habits, productivity, leadership, money, philosophy, psychology, creativity, and personal growth — with honest verdicts on which ones actually deliver.',
    color: 'bg-emerald-50 border-emerald-200',
    accent: 'text-emerald-700',
    tag: '20 Non-Fiction Lists',
  },
  {
    href: '/books/kids-and-ya',
    emoji: '🌟',
    title: 'Kids & Young Adult',
    description:
      'Picture books for toddlers, early readers, middle grade adventures, YA fantasy, YA romance, and picks for reluctant readers — matched to age and reading level.',
    color: 'bg-purple-50 border-purple-200',
    accent: 'text-purple-700',
    tag: '15 Kids & YA Lists',
  },
  {
    href: '/books/reader-picks',
    emoji: '🎯',
    title: 'Reader-Intent Lists',
    description:
      'Best beach reads, best one-sitting page-turners, books for people who hate reading, best audiobooks, best book club picks, and 25 more curated lists by reading occasion.',
    color: 'bg-yellow-50 border-yellow-300',
    accent: 'text-yellow-700',
    tag: '30 Reader Lists',
  },
]

const featuredArticles = [
  { href: '/books/best-stephen-king-books', title: 'Best Stephen King Books', label: 'Author Guide' },
  { href: '/books/best-colleen-hoover-books', title: 'Best Colleen Hoover Books', label: 'Author Guide' },
  { href: '/books/best-psychological-thrillers', title: 'Best Psychological Thrillers', label: 'Genre Fiction' },
  { href: '/books/best-fantasy-series-for-adults', title: 'Best Fantasy Series for Adults', label: 'Genre Fiction' },
  { href: '/books/best-self-help-books', title: 'Best Self-Help Books', label: 'Self-Help' },
  { href: '/books/best-books-of-all-time', title: 'Best Books of All Time', label: 'Reader Picks' },
  { href: '/books/best-book-club-books', title: 'Best Book Club Books', label: 'Reader Picks' },
  { href: '/books/best-audiobooks-on-audible', title: 'Best Audiobooks on Audible', label: 'Reader Picks' },
  { href: '/books/best-ya-fantasy-series', title: 'Best YA Fantasy Series', label: 'Kids & YA' },
  { href: '/books/best-romantasy-books', title: 'Best Romantasy Books', label: 'Genre Fiction' },
]

const labelColors: Record<string, string> = {
  'Author Guide': 'bg-blue-100 text-blue-800',
  'Genre Fiction': 'bg-orange-100 text-orange-800',
  'Self-Help': 'bg-emerald-100 text-emerald-800',
  'Kids & YA': 'bg-purple-100 text-purple-800',
  'Reader Picks': 'bg-yellow-100 text-yellow-800',
}

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-400 text-sm font-bold uppercase tracking-widest mb-4">
            100+ Curated Book Lists
          </p>
          <h1
            className="text-5xl sm:text-6xl font-black mb-6 leading-tight"
            style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
          >
            Find Your Next{' '}
            <span className="text-yellow-400">Favorite Book.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Honest, specific book recommendations for every reader type. We cover author
            roundups, genre guides, self-help rankings, kids & YA, and over 30 reader-intent
            lists — with Amazon buy links on every pick.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/books"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-8 rounded-xl transition-colors text-base min-h-[44px] flex items-center"
            >
              Browse All Book Lists
            </Link>
            <Link
              href="/books/best-books-of-all-time"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-colors text-base min-h-[44px] flex items-center border border-white/20"
            >
              Best Books of All Time
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-yellow-400 py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-900">
          <span>📚 100+ Book Lists</span>
          <span>🎯 Matched by Reader Type</span>
          <span>🚫 No Fake Reviews</span>
          <span>🔗 Amazon Links on Every Pick</span>
          <span>📅 Updated March 2026</span>
        </div>
      </section>

      {/* Category Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-black text-gray-900 mb-3"
            style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
          >
            Browse by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Five ways to find the perfect book — by author, genre, goal, age, or reading occasion.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`group block rounded-2xl border-2 p-7 card-hover ${cat.color}`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{cat.emoji}</span>
                <span className={`text-xs font-bold uppercase tracking-wide ${cat.accent} bg-white/60 rounded-full px-3 py-1`}>
                  {cat.tag}
                </span>
              </div>
              <h3
                className={`text-xl font-bold mb-2 group-hover:underline ${cat.accent}`}
                style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
              >
                {cat.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{cat.description}</p>
              <p className={`text-sm font-bold mt-4 ${cat.accent}`}>Explore guides →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-4xl font-black text-gray-900 mb-3"
              style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
            >
              Most Popular Lists
            </h2>
            <p className="text-gray-600 text-lg">Our most-read book recommendation guides right now.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {featuredArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group block bg-white rounded-xl border border-gray-200 p-5 card-hover"
              >
                <span
                  className={`text-xs font-bold uppercase tracking-wide rounded-full px-2.5 py-1 ${labelColors[article.label] || 'bg-gray-100 text-gray-700'}`}
                >
                  {article.label}
                </span>
                <p
                  className="text-base font-bold text-gray-900 mt-3 group-hover:text-yellow-700 leading-snug"
                  style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
                >
                  {article.title}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/books"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              View All 100 Book Lists →
            </Link>
          </div>
        </div>
      </section>

      {/* What BestPickZone covers */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2
          className="text-3xl font-black text-gray-900 text-center mb-8"
          style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}
        >
          How We Pick Our Recommendations
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            BestPickZone is a book recommendation site built on one principle: every recommendation
            has to be specific enough to be genuinely useful. We don&apos;t say &quot;this is a great
            book for fans of the author.&quot; We tell you whether it&apos;s the best starting point for
            new readers, whether it&apos;s the darkest or lightest entry in the series, how it compares
            to the author&apos;s other work, and who should skip it.
          </p>
          <p>
            Each guide covers 5–8 books ranked for distinct reader types — beginners, longtime fans,
            people who want a quick read, or readers who want the author&apos;s most ambitious work.
            Every pick includes a &quot;Skip this if...&quot; note so you don&apos;t waste time on the wrong book.
          </p>
          <p>
            We cover 100 book lists across five categories: author roundups (15 guides),
            genre fiction (20 guides), self-help and non-fiction (20 guides), kids and YA (15 guides),
            and reader-intent lists (30 guides) for specific reading occasions. Every pick includes
            an Amazon buy link — and we earn a small commission if you buy, at no cost to you.
          </p>
        </div>
      </section>
    </main>
  )
}
