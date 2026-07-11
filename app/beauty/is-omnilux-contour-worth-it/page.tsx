import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/beauty/is-omnilux-contour-worth-it'
const publishedDate = '2026-07-11T00:00:00Z'
const updatedDate = '2026-07-11T00:00:00Z'
const AMAZON_TAG = 'althcu-20'
const metaDescription =
  'Is the Omnilux Contour worth $395? An honest, bottom-funnel breakdown for buyers deciding between Omnilux, CurrentBody, and a cheaper LED-mask entry point.'

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

export const metadata: Metadata = withArticleMetadataDefaults(
  { title: 'Is the Omnilux Contour Worth It? (2026) | BestPickZone', description: metaDescription, alternates: { canonical: pageUrl }, openGraph: { title: 'Is the Omnilux Contour Worth It?', description: metaDescription, url: pageUrl, type: 'article' } },
  { category: 'beauty', publishedTime: publishedDate, modifiedTime: updatedDate, section: 'Beauty', url: pageUrl, tags: ['Omnilux', 'LED mask', 'beauty tech'] }
)

const faqItems = [
  { question: 'Is the Omnilux Contour worth it?', answer: 'Yes for the buyer who specifically wants a premium, evidence-first LED mask and will use it consistently. No for the buyer who is still unsure they even want the category.' },
  { question: 'What are you really paying for?', answer: 'You are paying for a premium at-home LED device experience, a strong reputation, and a category position that feels more serious than cheap impulse beauty tech.' },
  { question: 'Who should skip it?', answer: 'People who want instant dramatic change, hate routine-based tools, or are mostly curious rather than committed should usually skip it.' },
]

const readingTime = formatReadingTime(getReadingTime([metaDescription, ...faqItems.map((f) => `${f.question} ${f.answer}`)].join(' ')))

export default function OmniluxWorthItPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Beauty', href: '/beauty' }, { label: 'Is the Omnilux Contour Worth It?' }]} />

      <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-900">
        <strong>Affiliate disclosure:</strong> As an Amazon Associate, BestPickZone earns from qualifying purchases.
      </div>

      <section className="mb-10 rounded-[2.25rem] border border-rose-200 bg-[linear-gradient(140deg,#fff1f2_0%,#ffffff_45%,#fef3c7_100%)] px-6 py-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">Honest Beauty-Tech Breakdown</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          Is the Omnilux Contour worth $395? Yes for the right LED-mask buyer, not for the casual one.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          The Omnilux Contour is easier to rank than a giant LED-mask roundup because the buying question is much simpler: if you are already serious about a premium face mask, is this the one worth paying for? The honest answer is that it is a strong premium pick, but only if you are actually willing to become the kind of person who uses an LED mask regularly.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-rose-200">Updated July 11, 2026</span>
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-rose-200">{readingTime}</span>
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-rose-200">Bottom-funnel verdict</span>
        </div>
      </section>

      <section className="mb-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-[2rem] border border-rose-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-slate-900">What it is</h2><p className="mt-3 text-sm leading-7 text-slate-700">A premium at-home LED mask for the buyer who wants a serious-feeling device category entry rather than cheap beauty-tech experimentation.</p></article>
        <article className="rounded-[2rem] border border-rose-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-slate-900">The realistic verdict</h2><p className="mt-3 text-sm leading-7 text-slate-700">Worth it if you are already sold on routine-based skincare devices. Not worth it if you are looking for a dramatic one-purchase transformation.</p></article>
      </section>

      <section className="mb-10 rounded-[2rem] border border-rose-200 bg-rose-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">What&apos;s good</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">The strongest point is that Omnilux feels like an evidence-first premium beauty-tech brand, not just a flashy gadget. That matters when you are already paying premium pricing for consistency and category confidence.</p>
        <h2 className="mt-6 text-2xl font-black text-slate-900">What&apos;s not good</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">The price still filters the audience hard, and the routine requirement does not disappear just because the device is premium. If you are not the kind of buyer who sticks to beauty tools, the spend is much harder to justify.</p>
      </section>

      <section className="mb-12 rounded-[2rem] border border-rose-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">Omnilux vs CurrentBody vs budget alternative</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
            <thead><tr><th className="border-b border-rose-100 px-4 py-3 font-semibold text-slate-900">Option</th><th className="border-b border-rose-100 px-4 py-3 font-semibold text-slate-900">Best for</th><th className="border-b border-rose-100 px-4 py-3 font-semibold text-slate-900">Buy</th></tr></thead>
            <tbody>
              {[
                ['Omnilux Contour', 'Best premium evidence-first pick', 'Omnilux Contour Face mask'],
                ['CurrentBody Series 2', 'Best direct premium alternative', 'CurrentBody Skin LED mask Series 2'],
                ['Budget LED option', 'Best if you want category entry without premium spend', 'budget LED face mask anti aging'],
              ].map(([name, fit, query]) => (
                <tr key={name}><td className="border-b border-rose-50 px-4 py-3 text-slate-900">{name}</td><td className="border-b border-rose-50 px-4 py-3 text-slate-700">{fit}</td><td className="border-b border-rose-50 px-4 py-3"><a href={amazonSearch(query)} target="_blank" rel="noopener nofollow sponsored" className="font-semibold text-rose-700 underline underline-offset-2">Amazon</a></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-[2rem] border border-rose-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-slate-900">Helpful outside resource</h2><p className="mt-3 text-sm leading-7 text-slate-700">Omnilux&apos;s official <a href="https://omniluxled.com/products/omnilux-contour-face" target="_blank" rel="noopener noreferrer" className="font-semibold text-rose-700 underline underline-offset-2">Contour Face page</a> is a useful non-shopping reference if you want to understand how the brand frames the device before comparing it to alternatives.</p></article>
        <article className="rounded-[2rem] border border-rose-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-slate-900">Complete the routine</h2><div className="mt-4 grid gap-3"><a href={amazonSearch('hydrating post treatment serum')} target="_blank" rel="noopener nofollow sponsored" className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">Post-treatment serum</a><a href={amazonSearch('daily facial sunscreen SPF 50')} target="_blank" rel="noopener nofollow sponsored" className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">Daily SPF</a></div></article>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900">FAQ</h2>
        <div className="mt-6 grid gap-4">
          {faqItems.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-rose-200 bg-rose-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">More beauty guides</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link href="/beauty" className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5"><h3 className="text-lg font-bold text-slate-900">Browse all beauty guides</h3><p className="mt-2 text-sm leading-7 text-slate-600">See the full Beauty hub for more beauty-tech and active-ingredient comparisons.</p></Link>
          <Link href="/beauty/best-led-mask-for-melasma-and-hyperpigmentation" className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5"><h3 className="text-lg font-bold text-slate-900">Best LED Mask for Melasma &amp; Hyperpigmentation</h3><p className="mt-2 text-sm leading-7 text-slate-600">A broader pigment-focused guide for shoppers still deciding at the category level.</p></Link>
        </div>
      </section>
    </main>
  )
}
