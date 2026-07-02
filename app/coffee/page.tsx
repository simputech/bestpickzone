import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import { coffeeComparisonArticles } from '@/lib/comparison-html-articles'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import ItemListJsonLd from '@/components/seo/ItemListJsonLd'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Coffee Gear Comparisons 2026',
  description:
    'Spec-driven coffee gear comparisons for espresso machines, grinders, kettles, brewers, and scales built for high-intent buyers.',
  alternates: {
    canonical: 'https://bestpickzone.com/coffee',
  },
  openGraph: {
    title: 'Coffee Gear Comparisons 2026',
    description:
      'Hardware-first coffee comparisons focused on heat-up time, burr geometry, brew control, and countertop footprint.',
    url: 'https://bestpickzone.com/coffee',
    type: 'website',
  },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  category: 'coffee' })

const groups = [
  {
    name: 'Entry-Level Espresso',
    note: 'Heat-up time, boiler style, steam workflow, and footprint decide these pages.',
    items: [
      { slug: 'breville-bambino-plus-vs-gaggia-classic-pro', title: 'Breville Bambino Plus vs Gaggia Classic Pro', spec: 'ThermoJet speed vs 58mm brass-boiler workflow' },
      { slug: 'breville-barista-express-vs-delonghi-la-specialista', title: "Breville Barista Express vs De'Longhi La Specialista", spec: 'Built-in grinder workflow vs assisted tamping' },
    ],
  },
  {
    name: 'Manual Grinders',
    note: 'These comparisons focus on burr size, click resolution, and grind-speed feel.',
    items: [
      { slug: '1zpresso-jx-pro-vs-comandante-c40', title: '1Zpresso JX-Pro vs Comandante C40', spec: 'Adjustment precision vs iconic burr profile' },
      { slug: 'timemore-chestnut-c3-vs-kingrinder-k6', title: 'Timemore Chestnut C3 vs Kingrinder K6', spec: 'Budget grind quality vs range for espresso' },
    ],
  },
  {
    name: 'Pour-Over and Brewing Tools',
    note: 'The best pages here help shoppers decide by heat retention, pour control, and brew volume.',
    items: [
      { slug: 'fellow-stagg-ekg-vs-cosori-gooseneck', title: 'Fellow Stagg EKG vs Cosori Gooseneck Kettle', spec: 'Temperature control feel vs value' },
      { slug: 'hario-v60-vs-chemex-classic', title: 'Hario V60 vs Chemex', spec: 'Clarity, filter style, and brew ritual' },
      { slug: 'aeropress-original-vs-aeropress-premium', title: 'AeroPress Original vs AeroPress Premium', spec: 'Material upgrade vs same core brew logic' },
    ],
  },
  {
    name: 'Scales and Electric Grinders',
    note: 'Quick-read timing, workflow speed, and dial range matter more than generic review scores.',
    items: [
      { slug: 'baratza-virtuoso-plus-vs-fellow-ode-gen-2', title: 'Baratza Virtuoso+ vs Fellow Ode Gen 2', spec: 'All-purpose burr range vs filter-first design' },
      { slug: 'acaia-lunar-vs-timemore-black-mirror-nano', title: 'Acaia Lunar vs Timemore Black Mirror Nano', spec: 'Speed, app polish, and espresso footprint' },
    ],
  },
]

const groupedSlugs = new Set(groups.flatMap((group) => group.items.map((item) => item.slug)))
const uncategorizedArticles = coffeeComparisonArticles.filter((article) => !groupedSlugs.has(article.slug))

const itemListItems = [
  ...groups.flatMap((group) => group.items.map((item) => ({ name: item.title, path: `/coffee/${item.slug}` }))),
  ...uncategorizedArticles.map((article) => ({ name: article.title, path: `/coffee/${article.slug}` })),
]

export default function CoffeeHubPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <BreadcrumbJsonLd trail={[{name: "Home", path: "/"}, {name: "Coffee"}]} />
      <ItemListJsonLd name="Coffee Gear Comparisons" items={itemListItems} />
      <nav className="mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-amber-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-gray-800">Coffee</span>
      </nav>

      <section className="mb-10 rounded-[2rem] border border-stone-300 bg-[linear-gradient(135deg,#fff7ed_0%,#fef3c7_45%,#ede9fe_100%)] px-6 py-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-800">
          Coffee Gear and Brewing Lab
        </p>
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
          Coffee comparisons built for buyers who shop by specs.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
          The coffee silo is where BestPickZone shifts from general taste talk to mechanical buyer intent.
          These pages compare boilers vs thermoblocks, burr sets vs burr sets, and kettles by hold temperature,
          flow control, and workflow friction instead of vague lifestyle copy.
        </p>
      </section>

      <section className="mb-10 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Espresso</p>
          <p className="mt-3 text-3xl font-extrabold text-gray-900">3 sec</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">Heat-up is the first sorting mechanism on entry-level espresso pages.</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Grinders</p>
          <p className="mt-3 text-3xl font-extrabold text-gray-900">Burr-first</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">Manual and electric grinder pages are organized around burr geometry and range, not brand halo.</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Pour-Over</p>
          <p className="mt-3 text-3xl font-extrabold text-gray-900">Control</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">Kettles, brewers, and scales are grouped by what changes cup clarity and repeatability.</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Linking</p>
          <p className="mt-3 text-3xl font-extrabold text-gray-900">Hub-first</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">Every comparison links back to this hub and across to related gear pages.</p>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.name} className="mb-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">{group.name}</h2>
          <p className="mb-5 text-gray-600">{group.note}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {group.items.map((item) => (
              <Link
                key={item.slug}
                href={`/coffee/${item.slug}`}
                className="rounded-2xl border border-amber-200 bg-amber-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">Head-to-Head</p>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{item.spec}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {uncategorizedArticles.length > 0 && (
        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">More coffee comparisons</h2>
          <p className="mb-5 text-gray-700">
            The latest additions across espresso, grinders, brewers, and scales.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {uncategorizedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/coffee/${article.slug}`}
                className="rounded-2xl border border-amber-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">Head-to-Head</p>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{article.title}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{article.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
