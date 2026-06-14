import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
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
}

const concernRows = [
  ['Dark spots', 'Vitamin C vs Niacinamide', 'Tyrosinase pressure vs barrier-friendly consistency'],
  ['Sensitive skin', 'Retinol vs Bakuchiol', 'Cell turnover strength vs irritation tolerance'],
  ['Breakouts', 'Salicylic Acid vs Benzoyl Peroxide', 'Pore penetration vs bacteria-focused treatment'],
  ['Lip treatment', 'Laneige vs Rhode', 'Overnight occlusion vs peptide texture and portability'],
]

const deviceRows = [
  ['Hair styling', 'Dyson Airwrap vs Shark FlexStyle', 'Attachments, airflow logic, and cost-to-results'],
  ['LED masks', 'Dr. Dennis Gross vs Omnilux Contour', 'Coverage area, treatment cadence, and diode positioning'],
  ['Microcurrent', 'NuFACE Trinity vs Solawave Wand', 'Treatment speed vs portability'],
  ['Straightening tools', 'Dyson Airstrait vs ghd Duet Style', 'Wet-to-dry workflow vs finish quality'],
]

export default function BeautyHubPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
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
                  <td className="px-3 py-3 text-gray-700">{row[1]}</td>
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
                  <td className="px-3 py-3 text-gray-700">{row[1]}</td>
                  <td className="px-3 py-3 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
