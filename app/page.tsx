import type { Metadata } from 'next'
import Link from 'next/link'
import { withSeo } from '@/lib/seo-metadata'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { authorRankingGuides } from '@/lib/author-ranking-guides'

export const metadata: Metadata = withSeo(withArticleMetadataDefaults({
  title: 'Book Recommendations & Practical Buying Guides',
  description: 'Find your next book or compare coffee gear, home office equipment, and kitchen essentials. Start with your reading mood, available space, and everyday routine.',
  alternates: { canonical: 'https://bestpickzone.com/' },
  openGraph: { type: 'website', url: 'https://bestpickzone.com/' },
}, { category: 'shopping', metadataType: 'website' }), '/')

const shoppingPaths = [
  { href: '/coffee', title: 'Coffee', need: 'Make room for your daily brew', description: 'Choose a brewing method, then check counter height, grinder needs, and whether accessories fit your machine.' },
  { href: '/wfh', title: 'Work from home', need: 'Fix the part of your desk that gets in the way', description: 'Start with screen placement, laptop connections, chair fit, or call lighting before adding more equipment.' },
  { href: '/home-kitchen', title: 'Home & Kitchen', need: 'Buy for the meals and spaces you use', description: 'Compare appliances, compatible attachments, dorm essentials, and outdoor gear by use, cleanup, and storage.' },
]
const bookPaths = [
  { href: '/books/authors', title: 'By author', note: 'Find a starting point and what to read next.' },
  { href: '/books/genre-fiction', title: 'By genre', note: 'Explore thrillers, fantasy, romance, and more.' },
  { href: '/books/self-help', title: 'By goal', note: 'Browse habits, work, ideas, and personal growth.' },
  { href: '/books/kids-and-ya', title: 'Kids & YA', note: 'Find reading options for younger readers.' },
  { href: '/books/reader-picks', title: 'By occasion', note: 'Choose for a book club, trip, or quiet afternoon.' },
]
const usefulGuides = [
  { href: '/coffee/best-coffee-makers-for-low-cabinets', title: 'Coffee makers for low cabinets', description: 'Check filling access and operating space as well as the closed height.' },
  { href: '/wfh/best-usb-c-docks-for-two-monitors', title: 'Docks for two external monitors', description: 'Match the display setup to your exact laptop, operating system, and charging needs.' },
  { href: '/home-kitchen/ninja-creami-containers-compatibility', title: 'Ninja CREAMi container compatibility', description: 'Use the machine model to identify the container family before ordering extras.' },
  { href: '/wfh/best-monitor-arms-for-shallow-desks', title: 'Monitor arms for shallow desks', description: 'Plan the folded arm, wall clearance, and space left between you and the screen.' },
]

export default function HomePage() {
  return (
    <main id="main-content" className="hub-shell">
      <header className="hub-hero">
        <p className="hub-kicker">Books · Coffee · Work · Home</p>
        <h1>Find your next read.<br />Choose what fits your life.</h1>
        <p className="hub-lead">Start with the kind of book you want to read or the everyday problem you want to solve. Explore reading guides by author and mood, or compare gear around your space, routine, and the equipment you already own.</p>
        <div className="hub-home-actions">
          <Link href="/books" className="hub-button">Find a book <span aria-hidden="true">→</span></Link>
          <a href="#shopping" className="hub-button secondary">Explore buying guides <span aria-hidden="true">↓</span></a>
        </div>
      </header>
      <section className="hub-section" aria-labelledby="books-heading">
        <h2 id="books-heading">Choose your next book by what matters to you</h2>
        <p className="hub-note">Want to try an unfamiliar author? Start with their reading guide. For a particular mood or occasion, browse by genre or reader picks.</p>
        <nav aria-label="Find books by interest" className="hub-book-paths">{bookPaths.map(item => <Link key={item.href} href={item.href}>{item.title}<span>{item.note}</span></Link>)}</nav>
      </section>
      <section id="shopping" className="hub-section" aria-labelledby="shopping-heading">
        <h2 id="shopping-heading">What are you choosing for?</h2>
        <div className="hub-choice-grid hub-home-grid">{shoppingPaths.map(item => <article key={item.href} className="hub-choice">
          <p className="hub-kicker">{item.title}</p><h3>{item.need}</h3><p>{item.description}</p>
          <Link href={item.href}>Explore {item.title} guides <span aria-hidden="true">→</span></Link>
        </article>)}</div>
      </section>
      <section className="hub-section" aria-labelledby="fit-heading">
        <h2 id="fit-heading">Check the fit before you buy</h2>
        <div className="hub-related">{usefulGuides.map(item => <article key={item.href}>
          <h3><Link href={item.href}>{item.title}</Link></h3><p>{item.description}</p>
        </article>)}</div>
      </section>
      <section className="hub-section" aria-labelledby="authors-heading">
        <h2 id="authors-heading">Find your first book by a thriller author</h2>
        <p className="hub-note">Compare starting points, reading order, and reasons to choose a different book in these author guides.</p>
        <ul className="hub-directory">{authorRankingGuides.map(guide => <li key={guide.path}><Link href={guide.path}>{guide.author}: where to start <span aria-hidden="true">→</span></Link></li>)}</ul>
        <Link href="/books/authors" className="hub-button secondary">Browse all author guides <span aria-hidden="true">→</span></Link>
      </section>
      <section className="hub-section hub-checklist" aria-labelledby="decision-heading">
        <h2 id="decision-heading">Make a shortlist you can use</h2>
        <ul>
          <li>For books, decide whether you want a standalone story or a series, then compare tone and pacing in the reading guide.</li>
          <li>For gear, write down your measurements and exact model numbers before comparing features or accessories.</li>
          <li>Before ordering, check the selected edition or product variant, included parts, current price, and seller return terms.</li>
        </ul>
      </section>
      <section className="hub-section" aria-labelledby="more-heading">
        <h2 id="more-heading">More ways to explore</h2>
        <nav className="hub-topics" aria-label="More buying guides">
          <Link href="/beauty">Beauty tools and routines</Link><Link href="/tech">Tech buying guides</Link>
          <Link href="/mahjong">Mahjong sets and accessories</Link><Link href="/health-fitness">Health & Fitness</Link>
          <Link href="/finance-software">Finance & Software</Link><Link href="/deals">Shopping categories</Link>
        </nav>
        <div className="hub-related"><article><h3><Link href="/deal-agent">Talk through a shopping question</Link></h3><p>Tell the Deal Agent what you need, what you already own, and your budget to help narrow the options.</p></article><article><h3><Link href="/disclosure">Understand our affiliate links</Link></h3><p>We may earn a commission when you buy through links on this site, at no extra cost to you. Read how those links work.</p></article></div>
      </section>
    </main>
  )
}
