import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import { getBuyingGuide, guideDate } from '@/lib/buying-guides'

export default function ResearchedBuyingGuide({ slug }: { slug: string }) {
  const g = getBuyingGuide(slug)
  const introEnd = g.bodyHtml.indexOf('</p>') + 4
  const intro = g.bodyHtml.slice(0, introEnd)
  const body = g.bodyHtml.slice(introEnd)
  const label = { mahjong: 'Mahjong', coffee: 'Coffee', wfh: 'Work From Home' }[g.silo]
  const url = `https://bestpickzone.com/${g.silo}/${g.slug}`
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: g.title, description: g.description, datePublished: guideDate, dateModified: guideDate, mainEntityOfPage: url, author: { '@type': 'Organization', name: 'BestPickZone', url: 'https://bestpickzone.com' }, publisher: { '@type': 'Organization', name: 'BestPickZone', url: 'https://bestpickzone.com' } }
  return <main className="mx-auto max-w-5xl px-4 py-10">
    <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: label, path: `/${g.silo}` }, { name: g.title }]} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600"><Link href="/">Home</Link> / <Link href={`/${g.silo}`}>{label}</Link></nav>
    <article>
      <header className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-teal-950 to-teal-800 p-6 text-white md:p-9">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-200">BestPickZone buying guide</p>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">{g.title}</h1>
        <p className="mt-5 text-sm leading-6 text-teal-50">Affiliate disclosure: As an Amazon Associate, BestPickZone earns from qualifying purchases. Amazon links may earn us a commission at no extra cost to you.</p>
        <p className="mt-3 text-sm text-teal-100">By BestPickZone • Published September 27, 2026 • Researched comparison; not a hands-on test</p>
      </header>
      <div className="comparison-html mt-7 rounded-2xl border border-teal-100 bg-teal-50 p-6 text-lg" dangerouslySetInnerHTML={{ __html: intro }} />
      <figure aria-label="Buying decision sequence" className="my-7 grid gap-3 sm:grid-cols-3">{g.visual.map((text, i) => <div key={text} className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><span className="text-2xl font-black text-amber-700">0{i + 1}</span><p className="mt-2 font-semibold text-slate-900">{text}</p></div>)}</figure>
      <div className="comparison-html rounded-[2rem] border border-gray-200 bg-white p-5 shadow-sm md:p-8" dangerouslySetInnerHTML={{ __html: body }} />
    </article>
  </main>
}
