import type { Metadata } from 'next'
import fs from 'node:fs'
import path from 'node:path'
import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const title = 'Best Used Breville Espresso Machines on eBay in 2026'
const description = 'Compare used Breville Bambino, Bambino Plus, Barista Express, and Barista Pro machines on eBay, with model-specific checks, accessory costs, and buying advice.'
const pageUrl = 'https://bestpickzone.com/coffee/best-used-breville-espresso-machines-ebay'
const publishedTime = '2026-09-30T12:00:00-04:00'
const bodyHtml = fs.readFileSync(path.join(process.cwd(), 'app/coffee/best-used-breville-espresso-machines-ebay/article-source.html'), 'utf8')

export const metadata: Metadata = withArticleMetadataDefaults({
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title, description, type: 'article', url: pageUrl },
  twitter: { card: 'summary_large_image', title, description },
}, { category: 'coffee', section: 'Coffee', url: pageUrl, publishedTime, modifiedTime: publishedTime })

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  image: 'https://bestpickzone.com/og-coffee.png',
  datePublished: publishedTime,
  dateModified: publishedTime,
  mainEntityOfPage: pageUrl,
  author: { '@type': 'Organization', name: 'BestPickZone', url: 'https://bestpickzone.com/about' },
  publisher: { '@type': 'Organization', name: 'BestPickZone', logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/icon.png' } },
}

export default function UsedBrevilleGuidePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Coffee', path: '/coffee' }, { name: title }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-amber-700">Home</Link><span className="mx-2">/</span>
        <Link href="/coffee" className="hover:text-amber-700">Coffee</Link><span className="mx-2">/</span>
        <span>Used Breville Espresso Machines</span>
      </nav>
      <article className="min-w-0 rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <header>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-700">Used Espresso Buying Guide</p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">{title}</h1>
          <p className="mb-6 text-sm text-gray-500">By BestPickZone · <time dateTime={publishedTime}>September 30, 2026</time> · {formatReadingTime(getReadingTime(bodyHtml.replace(/<[^>]+>/g, ' ')))}</p>
        </header>
        <div className="comparison-html text-gray-700" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </article>
    </main>
  )
}
