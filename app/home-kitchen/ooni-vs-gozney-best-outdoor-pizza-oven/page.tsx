import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/home-kitchen/ooni-vs-gozney-best-outdoor-pizza-oven'
const publishedDate = '2026-07-11T00:00:00Z'
const updatedDate = '2026-07-11T00:00:00Z'
const AMAZON_TAG = 'althcu-20'
const metaDescription =
  'Ooni vs Gozney: the best outdoor pizza oven for your setup, segmented by fuel type, space, and the accessory stack you actually need after buying the oven.'

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

export const metadata: Metadata = withArticleMetadataDefaults(
  { title: 'Ooni vs Gozney: Best Outdoor Pizza Oven for Your Setup (2026) | BestPickZone', description: metaDescription, alternates: { canonical: pageUrl }, openGraph: { title: 'Ooni vs Gozney: Best Outdoor Pizza Oven for Your Setup', description: metaDescription, url: pageUrl, type: 'article' } },
  { category: 'home-kitchen', publishedTime: publishedDate, modifiedTime: updatedDate, section: 'Home & Kitchen', url: pageUrl, tags: ['Ooni', 'Gozney', 'pizza oven', 'outdoor cooking'] }
)

const faqItems = [
  { question: 'Should you choose by brand or by fuel type first?', answer: 'Fuel type first. Gas, multi-fuel, and electric point to very different ownership experiences.' },
  { question: 'What matters most for apartment or balcony buyers?', answer: 'Space, fuel practicality, and how realistic the oven is for your environment matter more than broad “best pizza oven” hype.' },
  { question: 'Do you need accessories after the oven?', answer: 'Yes. Pizza ovens are one of the strongest accessory-cart categories because the oven is only the first purchase.' },
]

const readingTime = formatReadingTime(getReadingTime([metaDescription, ...faqItems.map((f) => `${f.question} ${f.answer}`)].join(' ')))

export default function OoniVsGozneyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Home & Kitchen', href: '/home-kitchen' }, { label: 'Ooni vs Gozney: Best Outdoor Pizza Oven for Your Setup' }]} />

      <div className="mb-6 rounded-2xl border border-orange-200 bg-orange-50 px-5 py-4 text-sm text-orange-900">
        <strong>Affiliate disclosure:</strong> As an Amazon Associate, BestPickZone earns from qualifying purchases.
      </div>

      <section className="mb-10 rounded-[2.25rem] border border-orange-200 bg-[linear-gradient(140deg,#fff7ed_0%,#ffffff_45%,#fef3c7_100%)] px-6 py-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-700">Outdoor Cooking Head-to-Head</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          Ooni vs Gozney only gets easier once you stop thinking in brand names and start thinking in fuel type, space, and how you actually cook.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          This is one of the better outdoor-cooking comparisons on the site because buyers rarely stop at the oven. They choose by fuel, by where the oven will live, and by whether they want a more portable, more premium, or more flexible cooking setup. The accessories matter too, because nobody really buys just the oven and stops.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-orange-200">Updated July 11, 2026</span>
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-orange-200">{readingTime}</span>
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-orange-200">Brand + setup guide</span>
        </div>
      </section>

      <section className="mb-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-[2rem] border border-orange-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-slate-900">Fuel type</h2><p className="mt-3 text-sm leading-7 text-slate-700">This is the real front door to the decision. Gas, wood, multi-fuel, and electric are not small differences.</p></article>
        <article className="rounded-[2rem] border border-orange-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-slate-900">Space</h2><p className="mt-3 text-sm leading-7 text-slate-700">Balcony buyers, backyard buyers, and buyers wanting an indoor-electric option are not shopping the same way.</p></article>
        <article className="rounded-[2rem] border border-orange-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-slate-900">Accessory reality</h2><p className="mt-3 text-sm leading-7 text-slate-700">The peel, thermometer, cover, and turning tools are not afterthoughts. They are part of the category economics.</p></article>
      </section>

      <section className="mb-12 rounded-[2rem] border border-orange-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">How to choose</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
            <thead><tr><th className="border-b border-orange-100 px-4 py-3 font-semibold text-slate-900">Use case</th><th className="border-b border-orange-100 px-4 py-3 font-semibold text-slate-900">Best match</th><th className="border-b border-orange-100 px-4 py-3 font-semibold text-slate-900">Why</th></tr></thead>
            <tbody>
              {[
                ['Apartment / balcony', 'Ooni Volt or other electric-friendly logic', 'Best when open-fire style options are unrealistic.'],
                ['Gas-first backyard', 'Ooni Koda or Gozney Arc style comparison', 'Great for buyers who want simpler ignition and repeatability.'],
                ['Wood / multi-fuel flexibility', 'Ooni Karu 16 or similar multi-fuel logic', 'Best if part of the appeal is live-fire experimentation.'],
                ['Portable but premium', 'Gozney Roccbox', 'Useful when portability still needs a more premium-feeling build story.'],
              ].map(([use, match, why]) => (
                <tr key={use}><td className="border-b border-orange-50 px-4 py-3 text-slate-900">{use}</td><td className="border-b border-orange-50 px-4 py-3 text-slate-700">{match}</td><td className="border-b border-orange-50 px-4 py-3 text-slate-700">{why}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-[2rem] border border-orange-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-slate-900">Ooni lineup best-fors</h2><p className="mt-3 text-sm leading-7 text-slate-700">Ooni usually wins the buyer who wants more lineup variety by fuel type and setup. That matters if you are deciding between compact gas, multi-fuel flexibility, and electric practicality.</p></article>
        <article className="rounded-[2rem] border border-orange-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-slate-900">Gozney lineup best-fors</h2><p className="mt-3 text-sm leading-7 text-slate-700">Gozney usually appeals more to the buyer who wants the oven to feel more premium, more design-forward, and more like a serious outdoor-cooking object rather than just a functional appliance.</p></article>
      </section>

      <section className="mb-12 rounded-[2rem] border border-orange-200 bg-orange-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">Helpful outside resource</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          Ooni&apos;s official{' '}
          <a href="https://ooni.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-orange-700 underline underline-offset-2">
            brand site
          </a>
          {' '}and lineup pages are useful for seeing how the company segments gas, electric, and multi-fuel choices before you compare them against Gozney&apos;s approach.
        </p>
      </section>

      <section className="mb-12 rounded-[2rem] border border-orange-200 bg-slate-900 p-6 text-slate-100">
        <h2 className="text-2xl font-black">Complete the setup</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <a href={amazonSearch('pizza peel outdoor oven')} target="_blank" rel="noopener nofollow sponsored" className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"><h3 className="text-lg font-bold text-white">Pizza peel</h3><p className="mt-2 text-sm leading-7 text-slate-300">A real essential, not an optional extra.</p></a>
          <a href={amazonSearch('infrared thermometer pizza oven')} target="_blank" rel="noopener nofollow sponsored" className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"><h3 className="text-lg font-bold text-white">Infrared thermometer</h3><p className="mt-2 text-sm leading-7 text-slate-300">The easiest way to stop guessing at stone temperature.</p></a>
          <a href={amazonSearch('pizza oven cover turning peel dough tools')} target="_blank" rel="noopener nofollow sponsored" className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"><h3 className="text-lg font-bold text-white">Accessory stack</h3><p className="mt-2 text-sm leading-7 text-slate-300">Cover, dough tools, and turning peel are where the real cart stack shows up.</p></a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900">FAQ</h2>
        <div className="mt-6 grid gap-4">
          {faqItems.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
