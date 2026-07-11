import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ExternalProductImage from '@/components/ui/ExternalProductImage'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/coffee/complete-small-kitchen-home-coffee-bar-setup'
const publishedDate = '2026-07-11T00:00:00Z'
const updatedDate = '2026-07-11T00:00:00Z'
const AMAZON_TAG = 'althcu-20'
const metaDescription =
  'A complete small-kitchen home coffee bar setup under 24 inches wide, built around compact espresso gear, grinder fit, storage, and cart-stack accessories that actually make the station work.'

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

export const metadata: Metadata = withArticleMetadataDefaults(
  { title: 'Complete Small-Kitchen Home Coffee Bar Setup (2026) | BestPickZone', description: metaDescription, alternates: { canonical: pageUrl }, openGraph: { title: 'Complete Small-Kitchen Home Coffee Bar Setup', description: metaDescription, url: pageUrl, type: 'article' } },
  { category: 'coffee', publishedTime: publishedDate, modifiedTime: updatedDate, section: 'Coffee', url: pageUrl, tags: ['coffee bar', 'small kitchen', 'espresso setup'] }
)

const picks = [
  ['Breville Bambino', 'Best compact espresso core', '7.7-inch width class', '$$', 'Breville Bambino espresso machine', 'The narrow premium-feeling machine option.'],
  ["De'Longhi Dedica", 'Best ultra-slim alternative', 'Roughly 6-inch width class', '$$', 'DeLonghi Dedica espresso machine', 'The slimmer machine if counter width is the non-negotiable.'],
  ['Baratza Encore ESP', 'Best grinder match', 'Espresso-capable burr range', '$$', 'Baratza Encore ESP grinder', 'The grinder that keeps the compact machine from bottlenecking.'],
  ['Gooseneck kettle', 'Best if the bar also does pour-over or americanos well', 'Compact electric kettle footprint', '$', 'electric gooseneck kettle compact', 'Useful if the coffee corner serves more than espresso shots.'],
  ['Espresso scale', 'Best repeatability upgrade', 'Small footprint with timer', '$$', 'Timemore Black Mirror Nano scale', 'The easiest way to keep a tiny station more consistent.'],
  ['WDT + tamper', 'Best prep stack', 'Small tools, big workflow return', '$', 'espresso WDT tamper set 54mm', 'The tiny tools that stop the tiny station from feeling chaotic.'],
  ['Storage canister', 'Best for freshness without clutter', 'Airtight compact bean storage', '$', 'coffee bean airtight canister', 'Helps the setup look intentional instead of improvised.'],
  ['Small bar mat', 'Best finishing layer', 'Compact spill-control surface', '$', 'small espresso bar mat', 'Keeps the whole station cleaner on a narrow counter.'],
]

const faqItems = [
  { question: 'Can you build a real coffee bar in under 24 inches?', answer: 'Yes, but only if every piece earns its footprint. Narrow machines, a grinder that fits beside them, and compact accessories matter more than decorative extras.' },
  { question: 'What matters most in a small coffee setup?', answer: 'Width, depth, and what needs to live on the counter full-time. Compact buyers should optimize for daily workflow, not just the prettiest machine.' },
  { question: 'What is the first upgrade after the machine?', answer: 'Usually the grinder. In a small setup, the right grinder matters more than adding more tools too early.' },
]

const readingTime = formatReadingTime(getReadingTime([metaDescription, ...picks.flat().map(String), ...faqItems.map((f) => `${f.question} ${f.answer}`)].join(' ')))

export default function SmallKitchenCoffeeBarPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Coffee', href: '/coffee' }, { label: 'Complete Small-Kitchen Home Coffee Bar Setup' }]} />

      <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
        <strong>Affiliate disclosure:</strong> As an Amazon Associate, BestPickZone earns from qualifying purchases.
      </div>

      <section className="mb-10 rounded-[2.25rem] border border-stone-300 bg-[linear-gradient(140deg,#fff7ed_0%,#ffffff_45%,#ede9fe_100%)] px-6 py-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-800">Space-Constrained Coffee Setup</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          The complete small-kitchen home coffee bar setup under 24 inches wide.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          This format is one of the highest-value coffee setups on the site because it mirrors how people actually shop: one buyer, one narrow counter, one cookie window, and several items that need to work together without turning the kitchen into a gear graveyard.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-stone-200">Updated July 11, 2026</span>
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-stone-200">{readingTime}</span>
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-stone-200">8-piece setup</span>
        </div>
      </section>

      <section className="mb-10 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">The footprint problem</h2>
        <p className="mt-4 text-base leading-8 text-slate-700">
          The reason most small coffee bars fail is not espresso quality. It is counter sprawl. A narrow setup only works if the machine, grinder, and support tools are chosen as a system. Width matters, but depth, cable clutter, bean storage, and what lives on the counter all the time matter too.
        </p>
      </section>

      <section className="mb-10 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">Total cart at a glance</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
            <thead><tr><th className="border-b border-stone-100 px-4 py-3 font-semibold text-slate-900">Product</th><th className="border-b border-stone-100 px-4 py-3 font-semibold text-slate-900">Best for</th><th className="border-b border-stone-100 px-4 py-3 font-semibold text-slate-900">Key spec</th><th className="border-b border-stone-100 px-4 py-3 font-semibold text-slate-900">Band</th><th className="border-b border-stone-100 px-4 py-3 font-semibold text-slate-900">Buy</th></tr></thead>
            <tbody>
              {picks.map(([name, bestFor, keySpec, band, query]) => (
                <tr key={name}>
                  <td className="border-b border-stone-50 px-4 py-3 text-slate-900">{name}</td>
                  <td className="border-b border-stone-50 px-4 py-3 text-slate-700">{bestFor}</td>
                  <td className="border-b border-stone-50 px-4 py-3 text-slate-700">{keySpec}</td>
                  <td className="border-b border-stone-50 px-4 py-3 text-slate-700">{band}</td>
                  <td className="border-b border-stone-50 px-4 py-3"><a href={amazonSearch(query)} target="_blank" rel="noopener nofollow sponsored" className="font-semibold text-amber-800 underline underline-offset-2">Amazon</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 space-y-6">
        {picks.map(([name, bestFor, keySpec, band, query, summary], index) => (
          <article key={name} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex items-start gap-4 lg:w-[200px] lg:flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-lg font-black text-amber-800">{index + 1}</div>
                <a href={amazonSearch(query)} target="_blank" rel="noopener nofollow sponsored">
                  <ExternalProductImage src="https://m.media-amazon.com/images/I/not-real-coffeebar.jpg" alt={name} title={name} fallbackAccentClassName="from-amber-100 via-white to-stone-100" className="h-32 w-32 rounded-2xl border border-stone-100 bg-white object-contain p-2" />
                </a>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">{bestFor}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">{band}</span>
                </div>
                <h3 className="mt-4 text-2xl font-black text-slate-900">{name}</h3>
                <p className="mt-3 text-sm font-medium text-slate-500">Counter logic: {keySpec}</p>
                <p className="mt-4 text-base leading-8 text-slate-700">{summary}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">The grinder that fits beside the machine</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">This is the whole leverage point of the format. A compact espresso machine without a good grinder still feels unfinished. The grinder is what turns a narrow station into a serious station.</p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Helpful outside resource</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Breville&apos;s official{' '}
            <a href="https://www.breville.com/en-us/product/bes500" target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-800 underline underline-offset-2">
              Bambino product page
            </a>
            {' '}is useful for confirming just how compact that machine is before you build the rest of the counter around it.
          </p>
        </div>
      </section>

      <section className="mb-12 rounded-[2rem] border border-stone-200 bg-slate-900 p-6 text-slate-100">
        <h2 className="text-2xl font-black">Complete the setup</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <a href={amazonSearch('coffee beans subscription gift box')} target="_blank" rel="noopener nofollow sponsored" className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <h3 className="text-lg font-bold text-white">Beans</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">A compact station still needs coffee worth using the gear on.</p>
          </a>
          <a href={amazonSearch('airtight coffee canister small')} target="_blank" rel="noopener nofollow sponsored" className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <h3 className="text-lg font-bold text-white">Storage</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">Freshness and clutter control live in the same purchase here.</p>
          </a>
          <a href={amazonSearch('espresso mat compact station')} target="_blank" rel="noopener nofollow sponsored" className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <h3 className="text-lg font-bold text-white">Cleanup layer</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">A tiny mat can do a lot when counter inches are precious.</p>
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900">FAQ</h2>
        <div className="mt-6 grid gap-4">
          {faqItems.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">More coffee guides</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link href="/coffee" className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
            <h3 className="text-lg font-bold text-slate-900">Browse all coffee guides</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">See the full coffee hub for more espresso and grinder buying guides.</p>
          </Link>
          <Link href="/coffee/what-to-buy-with-your-breville-bambino-plus" className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
            <h3 className="text-lg font-bold text-slate-900">What to Buy With Your Breville Bambino Plus</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">A more focused upgrade guide for buyers already committed to the Bambino ecosystem.</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
