import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BookCTA from '@/components/article/BookCTA'
import AmazonBookCard from '@/components/article/AmazonBookCard'
import AmazonContentDisclaimer from './AmazonContentDisclaimer'
import type { AmazonBookItem } from '@/lib/amazon-book-match'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { withSeo } from '@/lib/seo-metadata'
import { authorRankingGuides } from '@/lib/author-ranking-guides'

export type AuthorRankingArticle = {
  author: string
  title: string
  seoTitle: string
  description: string
  path: string
  canonical: string
  published: string
  verified: string
  words: number
  topPick: string
  introHtml: string
  sections: { id: string; heading: string; html: string; bookTitle?: string; rank?: number }[]
  books: { rank: number; title: string; sectionId: string }[]
  relatedPaths: string[]
}

export function authorRankingMetadata(article: AuthorRankingArticle): Metadata {
  return withSeo(withArticleMetadataDefaults({
    title: article.seoTitle,
    description: article.description,
    alternates: { canonical: article.canonical },
  }, {
    publishedTime: `${article.published}T00:00:00Z`,
    modifiedTime: `${article.published}T00:00:00Z`,
    category: 'authors',
    authorName: 'BestPickZone Editorial Team',
  }), article.path)
}

function displayDate(date: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
}

export default function AuthorRankingArticlePage({ article, bookProducts }: { article: AuthorRankingArticle; bookProducts?: Record<string, AmazonBookItem> }) {
  const bookCta = (title: string, placement: string) => {
    const trackingId = `${article.path.split('/').pop()}-${placement}`
    const product = bookProducts?.[title]
    if (product) return <AmazonBookCard item={product} trackingId={trackingId} />
    const fallback = <BookCTA title={title} author={article.author} trackingId={trackingId} ctaLabel={`Find ${title} editions on Amazon`} />
    return bookProducts ? <div data-amazon-source="fallback">{fallback}</div> : fallback
  }
  const related = article.relatedPaths.map(path => authorRankingGuides.find(guide => guide.path === path)).filter(guide => guide !== undefined)
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${article.canonical}#article`,
        headline: article.title,
        description: article.description,
        datePublished: `${article.published}T00:00:00Z`,
        dateModified: `${article.published}T00:00:00Z`,
        author: { '@type': 'Organization', name: 'BestPickZone Editorial Team' },
        publisher: { '@type': 'Organization', name: 'BestPickZone', url: 'https://bestpickzone.com' },
        mainEntityOfPage: article.canonical,
        image: 'https://bestpickzone.com/og-books.png',
        inLanguage: 'en-US',
        articleSection: 'Author Book Rankings',
      },
      {
        '@type': 'ItemList',
        name: article.title,
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: article.books.length,
        itemListElement: article.books.map(book => ({
          '@type': 'ListItem',
          position: book.rank,
          url: `${article.canonical}#${book.sectionId}`,
          item: { '@type': 'Book', name: book.title, author: { '@type': 'Person', name: article.author } },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Books', href: '/books' },
          { label: 'Author Guides', href: '/books/authors' },
          { label: `${article.author} Books Ranked` },
        ]} />
        <article>
          <header className="mb-8 border-b border-slate-200 pb-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-600">Author reading guide · {Math.ceil(article.words / 220)} min read</p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-5xl">{article.title}</h1>
            <p className="mb-4 text-sm text-gray-600">By BestPickZone Editorial Team · Published <time dateTime={article.published}>{displayDate(article.published)}</time> · Sources checked <time dateTime={article.verified}>{displayDate(article.verified)}</time></p>
            <p className="affiliate-disclosure">As an Amazon Associate we earn from qualifying purchases. {bookProducts ? 'Shopping links lead to the featured Amazon edition, or to an Amazon search when a matching listing is unavailable. Check the edition, language and format before buying.' : 'Shopping links below are Amazon searches for the named book and author; check the edition, language and format before buying.'}</p>
          </header>

          <div className="comparison-html [&_a]:break-words [&_a]:underline [&_a]:decoration-amber-400 [&_a]:underline-offset-4" dangerouslySetInnerHTML={{ __html: article.introHtml }} />
          {bookCta(article.topPick, 'top-pick')}

          <nav aria-label="Jump to a ranked book" className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-3 font-semibold text-gray-900">Jump to a book</p>
            <ol className="grid gap-2 sm:grid-cols-2">
              {article.books.map(book => (
                <li key={book.rank}><a href={`#${book.sectionId}`} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-800 underline decoration-slate-300 underline-offset-4 hover:bg-white">{book.rank}. {book.title}</a></li>
              ))}
            </ol>
          </nav>

          {article.sections.map(section => (
            <section key={section.id} id={section.id} className={`scroll-mt-6 ${section.bookTitle ? 'my-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7' : 'my-10'}`}>
              <h2 className="mb-4 text-2xl font-bold leading-snug text-gray-900">{section.heading}</h2>
              <div className="comparison-html [&_a]:break-words [&_a]:underline [&_a]:decoration-amber-400 [&_a]:underline-offset-4 [&_ol]:mb-5 [&_ol]:ml-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:leading-relaxed" dangerouslySetInnerHTML={{ __html: section.html }} />
              {section.bookTitle && bookCta(section.bookTitle, `rank-${section.rank}`)}
            </section>
          ))}
          {bookProducts && <AmazonContentDisclaimer />}
        </article>

        <aside className="mt-12 border-t border-slate-200 pt-8" aria-labelledby="related-author-guides">
          <h2 id="related-author-guides" className="mb-5 text-2xl font-bold text-gray-900">Choose another mystery or thriller author</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map(guide => (
              <Link key={guide.path} href={guide.path} className="rounded-2xl border border-slate-200 p-4 transition hover:border-amber-400">
                <h3 className="mb-2 font-bold text-gray-900">{guide.author} books ranked</h3>
                <p className="text-sm leading-relaxed text-gray-600">Start with {guide.topPick}, then compare the alternatives by reading mood.</p>
              </Link>
            ))}
          </div>
          <Link href="/books/authors" className="mt-6 inline-block font-semibold text-slate-800 underline decoration-amber-400 underline-offset-4">Browse all author guides →</Link>
        </aside>
      </main>
    </>
  )
}
