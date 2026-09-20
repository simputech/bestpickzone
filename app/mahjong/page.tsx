import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import ItemListJsonLd from '@/components/seo/ItemListJsonLd'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'

const guides = [
  { href: '/mahjong/best-mahjong-sets-for-beginners', title: 'Best Mahjong Sets for Beginners', text: 'A practical first-buy guide for American Mahjong players: 166 tiles, racks, pushers, cases, and the mistakes that make a new set unusable.', status: 'Live' },
  { title: 'Best American Mahjong Sets on Amazon', text: 'A dedicated comparison for players who need American-style tiles, jokers, racks, pushers, and carrying cases.', status: 'Planned' },
  { title: 'Best Travel Mahjong Sets', text: 'Compact and portable options for trips, cruises, RVs, and game nights away from home.', status: 'Planned' },
  { title: 'Mahjong Set vs. Mahjong Card', text: 'What new American Mahjong players actually need to buy, what the annual card does, and why a set alone is not always enough.', status: 'Planned' },
  { title: 'Best Mahjong Accessories for Game Night', text: 'Mats, racks, pushers, card holders, score pads, table covers, and carrying cases.', status: 'Planned' },
  { title: 'How to Choose a Mahjong Set', text: 'A buyer’s guide to American, Chinese, Japanese Riichi, and Taiwanese tile systems before you choose a set.', status: 'Planned' },
  { title: 'Best Book to Learn Mahjong', text: 'A beginner-friendly guide to learning the rules, table vocabulary, and decision-making without buying the wrong instructional book.', status: 'Planned' },
] as const

export const metadata: Metadata = withArticleMetadataDefaults({ title: 'Mahjong Guides for Beginners | BestPickZone', description: 'American Mahjong set, accessory, and learning guides for new players—starting with the equipment you need for a first game night.', alternates: { canonical: 'https://bestpickzone.com/mahjong' } }, { category: 'mahjong', publishedTime: '2026-09-19T00:00:00Z', section: 'Mahjong', url: 'https://bestpickzone.com/mahjong' })

export default function MahjongHubPage() { return <main className="mx-auto max-w-5xl px-4 py-10">
  <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Mahjong' }]} />
  <ItemListJsonLd name="Mahjong Guides" items={guides.filter((guide) => 'href' in guide).map((guide) => ({ name: guide.title, path: guide.href }))} />
  <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Mahjong' }]} />
  <header className="mb-10 rounded-[2rem] bg-[linear-gradient(135deg,#12343b,#236a62,#d28b24)] p-8 text-white"><p className="text-sm font-bold uppercase tracking-[.2em] text-amber-100">New player hub</p><h1 className="mt-3 text-4xl font-black md:text-5xl">Mahjong guides for beginners</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-teal-50">The first question is not which set looks nicest. It is which version of Mahjong your group plays. This section begins with American Mahjong equipment, then expands into travel sets, accessories, and learning resources so new players can buy confidently.</p></header>
  <section className="grid gap-5 md:grid-cols-2">{guides.map((guide, index) => 'href' in guide ? <Link key={guide.title} href={guide.href} className="rounded-[2rem] border border-teal-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><p className="text-sm font-bold uppercase tracking-wide text-teal-700">#{index + 1} · {guide.status}</p><h2 className="mt-2 text-2xl font-black text-slate-900">{guide.title}</h2><p className="mt-3 leading-7 text-slate-700">{guide.text}</p></Link> : <div key={guide.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"><p className="text-sm font-bold uppercase tracking-wide text-slate-500">#{index + 1} · {guide.status}</p><h2 className="mt-2 text-2xl font-black text-slate-800">{guide.title}</h2><p className="mt-3 leading-7 text-slate-600">{guide.text}</p></div>)}</section>
</main> }
