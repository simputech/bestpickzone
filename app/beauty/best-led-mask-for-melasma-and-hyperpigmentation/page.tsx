import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ExternalProductImage from '@/components/ui/ExternalProductImage'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/beauty/best-led-mask-for-melasma-and-hyperpigmentation'
const publishedDate = '2026-07-11T00:00:00Z'
const updatedDate = '2026-07-11T00:00:00Z'
const AMAZON_TAG = 'althcu-20'
const metaDescription =
  'The best LED masks for melasma and hyperpigmentation in 2026, with realistic expectations about pigment, wavelengths, and the serum-plus-SPF routine that matters just as much.'

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best LED Mask for Melasma & Hyperpigmentation (2026) | BestPickZone',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    openGraph: { title: 'Best LED Mask for Melasma & Hyperpigmentation', description: metaDescription, url: pageUrl, type: 'article' },
  },
  {
    category: 'beauty',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Beauty',
    url: pageUrl,
    tags: ['LED mask', 'melasma', 'hyperpigmentation', 'beauty tech'],
  }
)

const masks = [
  {
    name: 'Omnilux Contour Face',
    bestFor: 'Most buyers who want the strongest evidence-first reputation',
    wavelength: 'Red + near-infrared positioned as the most established core approach',
    priceBand: '$$$',
    summary:
      'Omnilux is the most straightforward recommendation for pigment-conscious shoppers who want the “least weird to justify” LED-mask buy. It is not the magical melasma fix that some beauty content implies, but it is the strongest evidence-first place to start if you want a premium LED option.',
    review:
      'This is the safest top pick for the reader who wants to stay realistic. It has the least hype-dependent case and the clearest “serious skincare device” identity.',
    skipIf:
      'You want a lower entry price or you specifically want a mask story that leans harder on amber-yellow pigment framing.',
    query: 'Omnilux Contour Face mask',
    image: 'https://m.media-amazon.com/images/I/not-real-omnilux.jpg',
  },
  {
    name: 'CurrentBody Skin LED Series 2',
    bestFor: 'Buyers deciding between the two biggest premium face-mask names',
    wavelength: 'Red-light-led premium mask ecosystem with broader mainstream comparison interest',
    priceBand: '$$$',
    summary:
      'CurrentBody belongs in this conversation because it is one of the most common “should I get this instead?” alternatives to Omnilux. It tends to appeal to the buyer who is already sold on LED masks and wants to compare execution rather than decide whether the category matters at all.',
    review:
      'This is the strongest direct alternative for the comparison shopper, not the clearest first recommendation for pigment-specific intent.',
    skipIf:
      'You want the simplest answer and do not want to live in premium LED-mask comparison loops.',
    query: 'CurrentBody Skin LED mask Series 2',
    image: 'https://m.media-amazon.com/images/I/not-real-currentbody.jpg',
  },
  {
    name: 'Amber-leaning pigment option',
    bestFor: 'Shoppers specifically focused on the pigment conversation',
    wavelength: 'Includes amber-yellow positioning alongside more standard LED framing',
    priceBand: '$$',
    summary:
      'An amber-leaning mask belongs on this list because pigment-focused shoppers often want a device that at least acknowledges the melasma and discoloration question more directly. That does not mean it replaces sunscreen, topical care, or professional treatment if the pigment is hormonal or stubborn.',
    review:
      'This is the category pick for the buyer who wants a more pigment-explicit marketing story, but it still needs to be judged with caution and realistic expectations.',
    skipIf:
      'You are looking for the most established, evidence-first premium recommendation rather than a more concern-signaled option.',
    query: 'amber yellow LED face mask hyperpigmentation',
    image: 'https://m.media-amazon.com/images/I/not-real-ambermask.jpg',
  },
]

const faqItems = [
  {
    question: 'Can an LED mask actually treat melasma?',
    answer:
      'An LED mask may support a broader skin-tone routine, but melasma is one of the areas where expectations need to stay careful and realistic. It is not a substitute for sunscreen, topical care, or professional advice.',
  },
  {
    question: 'Which wavelengths matter most for pigment?',
    answer:
      'Most premium masks focus on red and near-infrared because those are the most established core wavelengths in the at-home LED category. Some pigment-focused shoppers also look for amber-yellow positioning, but that does not make a mask a guaranteed melasma solution.',
  },
  {
    question: 'What should you use with an LED mask for hyperpigmentation?',
    answer:
      'For most people, the more important companion products are a well-tolerated brightening serum and consistent daily SPF. The mask is not the whole routine.',
  },
]

const readingTime = formatReadingTime(getReadingTime([metaDescription, ...masks.map((m) => `${m.summary} ${m.review}`), ...faqItems.map((f) => `${f.question} ${f.answer}`)].join(' ')))

export default function LedMaskMelasmaPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Beauty', href: '/beauty' }, { label: 'Best LED Mask for Melasma & Hyperpigmentation' }]} />

      <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-900">
        <strong>Affiliate disclosure:</strong> As an Amazon Associate, BestPickZone earns from qualifying purchases.
      </div>

      <section className="mb-10 rounded-[2.25rem] border border-amber-200 bg-[linear-gradient(140deg,#fff7ed_0%,#ffffff_45%,#fff1f2_100%)] px-6 py-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Pigment-Focused Beauty Tech</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          The best LED mask for melasma and hyperpigmentation is the one that fits a realistic routine, not the one making the boldest promises.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          This is a category where overpromising is the easiest way to lose trust. If your pigment is stubborn, hormonal, or strongly recurring, a mask should be treated as a supporting device, not a cure. That does not make the category useless. It means the context matters.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
          This page is general beauty-buying guidance, not medical advice. If your pigment is worsening or you suspect melasma, it is worth talking to a dermatologist.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-amber-200">Updated July 11, 2026</span>
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-amber-200">{readingTime}</span>
          <span className="rounded-full bg-white px-4 py-2 ring-1 ring-amber-200">3 top picks</span>
        </div>
      </section>

      <section className="mb-10 rounded-[2rem] border border-amber-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">How light therapy fits the pigment conversation</h2>
        <p className="mt-4 text-base leading-8 text-slate-700">
          The main reason to be careful with this topic is that hyperpigmentation and melasma are not all the same problem. Some discoloration is easier to support with brightening routines than others. The LED-mask buy only makes sense when it is part of a broader setup that already includes brightening skincare you tolerate and sunscreen you use consistently.
        </p>
      </section>

      <section className="mb-12 space-y-6">
        {masks.map((mask, index) => (
          <article key={mask.name} className="rounded-[2rem] border border-amber-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex items-start gap-4 lg:w-[200px] lg:flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-lg font-black text-amber-700">{index + 1}</div>
                <a href={amazonSearch(mask.query)} target="_blank" rel="noopener nofollow sponsored">
                  <ExternalProductImage src={mask.image} alt={mask.name} title={mask.name} fallbackAccentClassName="from-amber-100 via-white to-rose-100" className="h-32 w-32 rounded-2xl border border-amber-100 bg-white object-contain p-2" />
                </a>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">{mask.bestFor}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">{mask.priceBand}</span>
                </div>
                <h3 className="mt-4 text-2xl font-black text-slate-900">{mask.name}</h3>
                <p className="mt-3 text-sm font-medium text-slate-500">Wavelength lens: {mask.wavelength}</p>
                <p className="mt-4 text-base leading-8 text-slate-700">{mask.summary}</p>
                <p className="mt-4 text-sm leading-7 text-slate-700"><strong className="text-slate-900">Review summary:</strong> {mask.review}</p>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-900"><strong>Skip this if:</strong> {mask.skipIf}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-amber-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">The serum + SPF stack matters as much as the device</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">If you are shopping this topic seriously, pair the mask with a brightening serum you tolerate and sunscreen you actually use every single day. That is where the routine becomes real instead of aspirational.</p>
        </div>
        <div className="rounded-[2rem] border border-amber-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Helpful outside resource</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Omnilux&apos;s official{' '}
            <a href="https://omniluxled.com/products/omnilux-contour-face" target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-700 underline underline-offset-2">
              Contour Face page
            </a>
            {' '}is a helpful non-shopping reference for understanding how premium LED brands position the category before you compare masks by concern.
          </p>
        </div>
      </section>

      <section className="mb-12 rounded-[2rem] border border-amber-200 bg-slate-900 p-6 text-slate-100">
        <h2 className="text-2xl font-black">Complete the routine</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <a href={amazonSearch('tranexamic acid serum luxury beauty')} target="_blank" rel="noopener nofollow sponsored" className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <h3 className="text-lg font-bold text-white">Brightening serum</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">A vitamin C or tranexamic-acid-leaning serum is often the more meaningful companion purchase than another gadget.</p>
          </a>
          <a href={amazonSearch('facial sunscreen SPF 50 luxury beauty')} target="_blank" rel="noopener nofollow sponsored" className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <h3 className="text-lg font-bold text-white">Daily SPF</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">If the routine stops before sunscreen, the pigment strategy is incomplete no matter how nice the mask is.</p>
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-black text-slate-900">FAQ</h2>
        <div className="mt-6 grid gap-4">
          {faqItems.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-amber-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">More beauty guides</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link href="/beauty" className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
            <h3 className="text-lg font-bold text-slate-900">Browse all beauty guides</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">See the full Beauty hub for more device and ingredient comparisons.</p>
          </Link>
          <Link href="/beauty/is-omnilux-contour-worth-it" className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
            <h3 className="text-lg font-bold text-slate-900">Is the Omnilux Contour Worth It?</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">A related bottom-funnel page for readers close to buying one premium LED mask.</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
