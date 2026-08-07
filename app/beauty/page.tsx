import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import { beautyComparisonArticles } from '@/lib/comparison-html-articles'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import ItemListJsonLd from '@/components/seo/ItemListJsonLd'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Beauty Tech and Ingredient Comparisons 2026',
  description:
    'Buyer-intent beauty comparisons covering skincare ingredients, hair tools, LED masks, and microcurrent devices with spec-based reasoning.',
  alternates: {
    canonical: 'https://bestpickzone.com/beauty',
  },
  openGraph: {
    title: 'Beauty Tech and Ingredient Comparisons 2026',
    description:
      'Comparison pages built around active percentages, tool type, treatment goals, and real mechanical tradeoffs.',
    url: 'https://bestpickzone.com/beauty',
    type: 'website',
  },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  category: 'beauty' })

const concernRows = [
  ['Dark spots', 'Vitamin C vs Niacinamide', 'Tyrosinase pressure vs barrier-friendly consistency'],
  ['Sensitive skin', 'Retinol vs Bakuchiol', 'Cell turnover strength vs irritation tolerance'],
  ['Breakouts', 'Salicylic Acid vs Benzoyl Peroxide', 'Pore penetration vs bacteria-focused treatment'],
  ['Lip treatment', 'Laneige vs Rhode', 'Overnight occlusion vs peptide texture and portability'],
]

const deviceRows = [
  ['Hair styling', 'Dyson Airwrap vs Shark FlexStyle for Fine, Flat Hair', 'Attachments, airflow logic, and whether the Dyson is worth double', '/beauty/dyson-airwrap-vs-shark-flexstyle-for-fine-flat-hair'],
  ['LED masks', 'Dr. Dennis Gross vs Omnilux Contour', 'Coverage area, treatment cadence, and diode positioning', '/beauty/dr-dennis-gross-vs-omnilux-contour'],
  ['Microcurrent', 'NuFACE Trinity+ vs Foreo Bear 2 vs MyoLift QT', 'Treatment style, gel cost, and beginner-vs-pro fit', '/beauty/nuface-trinity-plus-vs-foreo-bear-2-vs-myolift-qt'],
  ['Straightening tools', 'Dyson Airstrait vs ghd Duet Style', 'Wet-to-dry workflow vs finish quality', '/beauty/dyson-airstrait-vs-ghd-duet-style'],
]

const ingredientPages = [
  {
    href: '/beauty/vitamin-c-vs-niacinamide',
    title: 'Vitamin C vs. Niacinamide',
    note: 'A brightening-focused comparison that separates dark-spot fading from barrier support instead of pretending they do the same job.',
  },
  {
    href: '/beauty/retinol-vs-bakuchiol-for-sensitive-skin',
    title: 'Retinol vs. Bakuchiol',
    note: 'A gentler-versus-stronger anti-aging page for readers deciding whether results or irritation tolerance matters more right now.',
  },
  {
    href: '/beauty/salicylic-acid-vs-benzoyl-peroxide',
    title: 'Salicylic Acid vs. Benzoyl Peroxide',
    note: 'A breakout-treatment comparison built around clog type, inflammation, and why the wrong active can make acne worse.',
  },
  {
    href: '/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide',
    title: 'Laneige Lip Sleeping Mask vs. Rhode',
    note: 'A lip-treatment showdown that frames overnight repair against day-bag portability and texture preference.',
  },
]

const itemListItems = [
  ...ingredientPages.map((page) => ({ name: page.title, path: page.href })),
  ...deviceRows.map((row) => ({ name: row[1], path: row[3] })),
  ...beautyComparisonArticles.map((article) => ({ name: article.title, path: `/beauty/${article.slug}` })),
].filter((item, index, all) => all.findIndex((other) => other.path === item.path) === index)

export default function BeautyHubPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <BreadcrumbJsonLd trail={[{name: "Home", path: "/"}, {name: "Beauty"}]} />
      <ItemListJsonLd name="Beauty Tech & Ingredient Comparisons" items={itemListItems} />
      <nav className="mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-rose-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-gray-800">Beauty</span>
      </nav>

      <section className="mb-10 rounded-[2rem] border border-rose-200 bg-[linear-gradient(135deg,#fff1f2_0%,#fde68a_55%,#fdf2f8_100%)] px-6 py-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-rose-800">
          Beauty Tech and Ingredient Lab
        </p>
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
          Beauty pages that sort by treatment goal before brand hype.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
          The beauty silo is built around the moment a shopper is deciding between two very specific paths:
          stronger active vs gentler active, LED mask vs LED mask, or premium hair tool vs lower-cost near-equivalent.
          The goal is to help readers decide by mechanism, treatment cadence, and friction, not by vague glow claims.
        </p>
      </section>

      <section className="mb-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Ingredient Concern Matrix</h2>
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-rose-50">
                <th className="px-3 py-3 font-semibold text-gray-900">Concern</th>
                <th className="px-3 py-3 font-semibold text-gray-900">Comparison</th>
                <th className="px-3 py-3 font-semibold text-gray-900">Decision Lens</th>
              </tr>
            </thead>
            <tbody>
              {concernRows.map((row) => (
                <tr key={row[0]} className="border-b border-gray-100 align-top">
                  <td className="px-3 py-3 font-semibold text-gray-900">{row[0]}</td>
                  <td className="px-3 py-3 text-gray-700">
                    <Link
                      href={
                        row[1] === 'Vitamin C vs Niacinamide'
                          ? '/beauty/vitamin-c-vs-niacinamide'
                          : row[1] === 'Retinol vs Bakuchiol'
                            ? '/beauty/retinol-vs-bakuchiol-for-sensitive-skin'
                            : row[1] === 'Salicylic Acid vs Benzoyl Peroxide'
                              ? '/beauty/salicylic-acid-vs-benzoyl-peroxide'
                              : '/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide'
                      }
                      className="font-semibold text-rose-700 hover:underline"
                    >
                      {row[1]}
                    </Link>
                  </td>
                  <td className="px-3 py-3 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-3xl border border-fuchsia-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Device Spec Grid</h2>
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-fuchsia-50">
                <th className="px-3 py-3 font-semibold text-gray-900">Tool Type</th>
                <th className="px-3 py-3 font-semibold text-gray-900">Comparison</th>
                <th className="px-3 py-3 font-semibold text-gray-900">Decision Lens</th>
              </tr>
            </thead>
            <tbody>
              {deviceRows.map((row) => (
                <tr key={row[0]} className="border-b border-gray-100 align-top">
                  <td className="px-3 py-3 font-semibold text-gray-900">{row[0]}</td>
                  <td className="px-3 py-3 text-gray-700">
                    <Link href={row[3]} className="font-semibold text-fuchsia-700 hover:underline">
                      {row[1]}
                    </Link>
                  </td>
                  <td className="px-3 py-3 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-rose-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">Live beauty comparison</h2>
        <p className="mb-5 text-gray-700">
          We are starting the silo with the strongest high-intent beauty-tool matchup already live.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {beautyComparisonArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/beauty/${article.slug}`}
              className="rounded-2xl border border-rose-200 bg-rose-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-rose-700">Live Comparison</p>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{article.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{article.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-fuchsia-200 bg-fuchsia-50 p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">New live beauty tech guides</h2>
        <p className="mb-5 text-gray-700">
          The newest beauty pages push further into bottom-funnel device intent: microcurrent, pigment-focused LED masks, and the premium-hair-tool question people actually ask before checkout.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              href: '/beauty/nuface-trinity-plus-vs-foreo-bear-2-vs-myolift-qt',
              title: 'NuFACE Trinity+ vs Foreo Bear 2 vs MyoLift QT',
              note: 'A 3-way microcurrent showdown built around gel cost, treatment friction, and who each device really fits.',
            },
            {
              href: '/beauty/best-led-mask-for-melasma-and-hyperpigmentation',
              title: 'Best LED Mask for Melasma & Hyperpigmentation',
              note: 'A careful, non-overpromising pigment-focused LED guide with serum and SPF layering built in.',
            },
            {
              href: '/beauty/dyson-airwrap-vs-shark-flexstyle-for-fine-flat-hair',
              title: 'Dyson Airwrap vs Shark FlexStyle for Fine, Flat Hair',
              note: 'A more specific head-to-head that answers whether the Dyson is worth paying double for this hair type.',
            },
            {
              href: '/beauty/is-omnilux-contour-worth-it',
              title: 'Is the Omnilux Contour Worth It?',
              note: 'A bottom-funnel LED-mask verdict page with a cleaner yes-or-no recommendation path.',
            },
          ].map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-2xl border border-fuchsia-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-700">New Live Guide</p>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{page.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{page.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-amber-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">More beauty comparison guides</h2>
        <p className="mb-5 text-gray-700">
          Compare ingredient-focused and lip-treatment options with practical guidance on routine fit, formulas, and tradeoffs.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {ingredientPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-2xl border border-amber-200 bg-amber-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Now Live</p>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{page.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{page.note}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
