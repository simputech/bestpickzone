import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'

const pageUrl = 'https://bestpickzone.com/disclosure'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Affiliate Disclosure | BestPickZone',
    description:
      'How BestPickZone uses affiliate links, how commissions work, and how we separate editorial fit guidance from monetization.',
    alternates: { canonical: pageUrl },
    openGraph: {
      title: 'Affiliate Disclosure | BestPickZone',
      description:
        'How BestPickZone uses affiliate links, how commissions work, and how we separate editorial fit guidance from monetization.',
      url: pageUrl,
      type: 'website',
    },
  },
  {
    category: 'home-kitchen',
    metadataType: 'website',
  }
)

export default function DisclosurePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Disclosure' }]} />

      <section className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(140deg,#f8fafc_0%,#ffffff_45%,#fef3c7_100%)] px-6 py-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-600">
          BestPickZone Policy
        </p>
        <h1 className="text-4xl font-black text-slate-900 md:text-5xl">Affiliate disclosure</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          BestPickZone participates in affiliate programs, including the Amazon Services LLC Associates Program. That means we may earn a commission when you buy through certain links on the site, at no extra cost to you.
        </p>
      </section>

      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900">How this works</h2>
        <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
          <p>
            Some links on BestPickZone are affiliate links. If you click one and make a qualifying purchase, we may receive a commission from the retailer.
          </p>
          <p>
            Our goal is to make the guidance useful first. We try to organize recommendations around buyer fit, practical tradeoffs, and where a product makes sense or should be skipped.
          </p>
          <p>
            Earning a commission does not change the price you pay. It also does not automatically make a product a better recommendation for a given reader or use case.
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900">Editorial approach</h2>
        <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
          <p>
            BestPickZone pages are written to be specific about who a product is for, where it falls short, and when it may not be worth buying.
          </p>
          <p>
            We aim to avoid blanket praise and instead focus on fit, workflow, constraints, and tradeoffs. That is why many pages include direct “skip this if” guidance.
          </p>
          <p>
            Where a page is researched or curated rather than based on first-hand testing, we frame it that way instead of claiming hands-on experience we did not have.
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">Questions</h2>
        <p className="mt-4 text-base leading-8 text-slate-700">
          If you are reading one of our buying guides and want more context on how a recommendation was framed, you can return to the relevant category hub:
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
          <Link href="/home-kitchen" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-emerald-700">
            Home &amp; Kitchen
          </Link>
          <Link href="/coffee" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-amber-700">
            Coffee
          </Link>
          <Link href="/beauty" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-rose-700">
            Beauty
          </Link>
          <Link href="/wfh" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-sky-700">
            WFH
          </Link>
          <Link href="/books" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-violet-700">
            Books
          </Link>
        </div>
      </section>
    </main>
  )
}
