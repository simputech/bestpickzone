import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import Link from 'next/link'
import { wfhComparisonArticles } from '@/lib/comparison-html-articles'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'WFH Ergonomic Comparisons 2026',
  description:
    'High-intent work-from-home comparisons built around dimensions, weight capacity, adjustment range, and real ergonomic tradeoffs.',
  alternates: {
    canonical: 'https://bestpickzone.com/wfh',
  },
  openGraph: {
    title: 'WFH Ergonomic Comparisons 2026',
    description:
      'Ergonomic chairs, standing desks, lights, mice, and smart office gear compared by dimensions and workflow fit.',
    url: 'https://bestpickzone.com/wfh',
    type: 'website',
  },
}, { category: 'wfh' })

const sections = [
  {
    title: 'Chairs and Seating',
    copy: 'Weight capacity, recline behavior, lumbar approach, and seat geometry are the real buying questions here.',
    items: [
      ['Herman Miller Aeron vs Steelcase Gesture', 'High-ticket flagship chair showdown', '/wfh/herman-miller-aeron-vs-steelcase-gesture'],
      ['Secretlab Titan Evo vs Ergotune Supreme', 'Gaming-first posture vs office adjustability', '/wfh/secretlab-titan-evo-vs-ergotune-supreme'],
      ['Autonomous ErgoChair Pro vs Hinomi H1 Pro', 'Foldability vs mainstream desk-chair setup', '/wfh/autonomous-ergochair-pro-vs-hinomi-h1-pro'],
      ['Purple Royal Seat Cushion vs Cushion Lab', 'Pressure relief vs structured support', '/wfh/purple-royal-seat-cushion-vs-cushion-lab'],
    ],
  },
  {
    title: 'Desks and Input Gear',
    copy: 'These pages convert when they foreground footprint, adjustment planes, typing angle, and all-day hand comfort.',
    items: [
      ['Fully Jarvis vs Uplift V2 Standing Desk', 'Stability, frame options, and desktop sizing', '/wfh/fully-jarvis-vs-uplift-v2-standing-desk'],
      ['Ergotron LX vs Amazon Basics Monitor Arm', 'The $28 arm is secretly made by Ergotron — here is where the gap actually shows', '/wfh/ergotron-lx-vs-amazon-basics-monitor-arm'],
      ['Logitech MX Master 3S vs Apple Magic Mouse', 'Ergonomic control vs low-profile Apple workflow', '/wfh/logitech-mx-master-3s-vs-apple-magic-mouse'],
      ['Logitech MX Keys S vs Apple Magic Keyboard', 'Travel, layout, and device switching', '/wfh/logitech-mx-keys-s-vs-apple-magic-keyboard'],
      ['VariDesk Converter vs Vivo Desk Riser', 'Temporary standing setup vs budget riser logic', '/wfh/varidesk-converter-vs-vivo-desk-riser'],
    ],
  },
]

export default function WfhHubPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-sky-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-gray-800">WFH</span>
      </nav>

      <section className="mb-10 rounded-[2rem] border border-sky-200 bg-[linear-gradient(135deg,#eff6ff_0%,#dbeafe_45%,#ecfeff_100%)] px-6 py-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-800">
          Ergonomic Workspace and Smart Office Gear
        </p>
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
          WFH buying guides built around measurements, not vague productivity claims.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
          The WFH silo is designed for shoppers making expensive ergonomic decisions and wanting the fastest
          route to the numbers that matter: seat range, desktop footprint, weight capacity, adjustment planes,
          and whether a device improves a desk that is used eight or more hours a day.
        </p>
      </section>

      <section className="mb-10 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Desk Logic</p>
          <p className="mt-3 text-3xl font-extrabold text-gray-900">Footprint</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">Standing desk pages will surface width, depth, and stability before anything else.</p>
        </div>
        <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Chair Logic</p>
          <p className="mt-3 text-3xl font-extrabold text-gray-900">Range</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">Seat depth, arm adjustability, and recline style decide chair fit faster than ratings do.</p>
        </div>
        <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Input Gear</p>
          <p className="mt-3 text-3xl font-extrabold text-gray-900">Workflow</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">Mouse and keyboard pages are organized by switching behavior, comfort, and long-session fatigue.</p>
        </div>
        <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Smart Office</p>
          <p className="mt-3 text-3xl font-extrabold text-gray-900">Use Case</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">Lighting, camera, and automation pages will stay anchored to a real desk setup, not gadget novelty.</p>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="mb-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">{section.title}</h2>
          <p className="mb-5 text-gray-600">{section.copy}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {section.items.map((item) => (
              <Link
                key={item[0]}
                href={item[2]}
                className="rounded-2xl border border-gray-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"
              >
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Live Topic
                </p>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{item[0]}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{item[1]}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">Live WFH comparisons</h2>
        <p className="mb-5 text-gray-700">
          These pages are the current live set for ergonomic seating, input gear, and creator-desk workflows.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {wfhComparisonArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/wfh/${article.slug}`}
              className="rounded-2xl border border-sky-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Live Comparison</p>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{article.title}</h3>
              <p className="text-sm leading-relaxed text-gray-700">{article.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
