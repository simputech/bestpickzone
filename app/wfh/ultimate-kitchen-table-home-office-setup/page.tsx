import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/wfh/ultimate-kitchen-table-home-office-setup'
const publishedDate = '2026-07-01T00:00:00Z'
const updatedDate = '2026-07-01T00:00:00Z'

const metaDescription =
  'How to set up the ultimate work-from-home kitchen office in under 5 minutes with portable gear, ergonomic support, clean cable management, and small-space productivity tips.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Ultimate Kitchen Table Home Office Setup for WFH | BestPickZone',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'kitchen table home office setup',
      'portable work from home setup',
      'best kitchen table office setup',
      'small space home office ideas',
      'portable wfh gear',
      'apartment work from home setup',
      'kitchen office setup',
      'ergonomic portable office setup',
      'remote work setup for small spaces',
      'work from home kitchen essentials',
      'under 5 minute home office setup',
      'portable kitchen office gear',
      'kitchen table work from home ideas',
      'small apartment work from home office',
    ],
    openGraph: {
      title: 'Ultimate Kitchen Table Home Office Setup for WFH',
      description: metaDescription,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Ultimate Kitchen Table Home Office Setup for WFH',
      description:
        'Set up a productive kitchen-table home office in under 5 minutes with portable gear, ergonomic essentials, and small-space WFH ideas.',
    },
  },
  {
    category: 'wfh',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Work From Home',
    url: pageUrl,
    tags: [
      'wfh setup',
      'portable office gear',
      'kitchen table office',
      'small space office',
      'ergonomics',
    ],
  }
)

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'WFH', href: '/wfh' },
  { label: 'Ultimate Kitchen Table Home Office Setup' },
]

const AMAZON_TAG = 'althcu-20'

function amazon(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

const essentials = [
  {
    rank: 1,
    title: 'Foldable laptop riser',
    label: 'Start here',
    bestFor: 'Anyone starting from just a laptop and a kitchen chair',
    blurb:
      'Raises your screen closer to eye level in seconds, which matters more than almost any other portable upgrade for neck comfort.',
    whatItIs:
      'A portable laptop riser is usually a foldable aluminum, bamboo, or lightweight composite stand that props the computer higher off the table. Good ones offer multiple height and angle settings, ventilation, and enough stability to handle all-day use on a shared kitchen surface.',
    editorNote:
      'In a kitchen-table setup, this is the product that makes the space feel less improvised almost immediately. It creates a visual and physical separation between casual laptop use and a workstation you can actually sit at for hours. If someone only buys one thing to improve posture fast, this is usually the right place to start.',
    why:
      'A compact riser creates immediate ergonomic improvement without making the kitchen feel permanently office-like.',
    skipIf:
      'you already use a portable monitor stacked at eye level and your laptop mainly acts as the lower secondary screen.',
    amazonQuery: 'foldable laptop stand aluminum portable',
  },
  {
    rank: 2,
    title: 'Wireless keyboard and mouse',
    label: 'Typing essential',
    bestFor: 'People who actually want to use the riser correctly',
    blurb:
      'The non-negotiable pair if you want the riser to work properly and still type in a relaxed position.',
    whatItIs:
      'This is the compact input layer that frees you from hunching over the built-in laptop keyboard. Rechargeable combos, quiet switches, and multi-device pairing matter most here because the whole point is fast deployment and easy switching between a laptop, tablet, or second screen.',
    editorNote:
      'A lot of people buy a stand and then keep reaching up to type on the laptop itself, which defeats the whole setup. A separate keyboard and mouse let your elbows relax, keep your wrists in a better position, and make the riser useful instead of decorative. In small homes, quieter keys and fewer charging cables also make the setup easier to live with day after day.',
    why:
      'This is what turns a perched laptop station into something that actually feels sustainable for real work.',
    skipIf:
      'you rarely work more than short bursts and do not mind typing directly on the laptop keyboard.',
    amazonQuery: 'wireless keyboard and mouse combo rechargeable',
  },
  {
    rank: 3,
    title: 'Portable external monitor',
    label: 'Multitasking boost',
    bestFor: 'Spreadsheet work, meetings, research, and multitasking',
    blurb:
      'Adds a second screen without committing to a full desktop setup, which is ideal for spreadsheets, meetings, and multitasking.',
    whatItIs:
      'A portable monitor is usually a 15- to 17-inch USB-C display that travels like a thin tablet and often uses a built-in cover as a stand. The best ones are light enough to slip into a sleeve, fast enough to connect in seconds, and useful enough to make a temporary desk feel like a real workstation.',
    editorNote:
      'This is the upgrade that tends to make remote workers feel instantly more organized because research, writing, email, and meetings stop fighting for one screen. It is especially helpful at a kitchen table where the setup already needs to earn its footprint with real productivity value. If your day involves tabs, spreadsheets, or constant reference material, this can be the difference between coping and flowing.',
    why:
      'For many remote workers, this is the upgrade that makes a temporary setup feel legitimately capable.',
    skipIf:
      'your work is mostly writing in one window and the extra screen would create more cables than benefit.',
    amazonQuery: 'portable monitor usb c 15.6 inch',
  },
  {
    rank: 4,
    title: 'Portable seating support',
    label: 'Comfort fix',
    bestFor: 'Anyone using a hard dining chair for more than an hour',
    blurb:
      'A seat cushion, lumbar pillow, or movable office chair helps compensate for hard dining chairs and awkward kitchen-table posture.',
    whatItIs:
      'This can mean a memory-foam cushion, a compact lumbar support pillow, a posture stool, or even one dedicated office chair you roll over each morning. Kitchen seating is almost never designed for eight-hour workdays, so this category exists to bridge the gap without permanently replacing the room.',
    editorNote:
      'People often try to solve a kitchen-office problem with desk accessories first, when the real issue is the chair beneath them. A little seating support can change how long you can work before your hips, lower back, or shoulders start complaining. This category matters because comfort is what determines whether a temporary setup remains usable for weeks instead of days.',
    why:
      'Without this layer, even a beautiful setup can start feeling bad after a couple of hours.',
    skipIf:
      'you already wheel a supportive office chair to the table each day and the seating is not the current pain point.',
    amazonQuery: 'ergonomic seat cushion lumbar support office chair',
  },
  {
    rank: 5,
    title: 'Noise-cancelling headphones',
    label: 'Call clarity',
    bestFor: 'Shared homes, video calls, and focus work near kitchen noise',
    blurb:
      'Helps a shared home feel more focused and keeps calls sounding cleaner when the kitchen is doing normal kitchen things.',
    whatItIs:
      'This is the portable sound barrier for a room that is still a household room. Good WFH headphones or earbuds should block appliance noise, family traffic, and echo while also giving you a microphone strong enough for Zoom, Teams, and client calls.',
    editorNote:
      'A kitchen can be bright and convenient, but it is rarely acoustically forgiving. Headphones help create a work bubble inside a room that still has refrigerator hum, dishes, footsteps, and normal household interruptions. They are one of the fastest ways to make the space feel more professional during calls and more private during focus blocks.',
    why:
      'This is the portable boundary-maker when you do not have a dedicated office door to close.',
    skipIf:
      'you work mostly asynchronously, live alone, and do not need to create an audio boundary around the workspace.',
    amazonQuery: 'noise cancelling headphones microphone work from home',
  },
  {
    rank: 6,
    title: 'Cable and power kit',
    label: 'Clutter control',
    bestFor: 'People whose temporary desk gets messy by lunchtime',
    blurb:
      'A compact power strip, short extension cord, and a few cable clips stop the whole setup from looking chaotic by noon.',
    whatItIs:
      'This is not one glamorous product. It is the small infrastructure kit: a compact power strip, USB-C ports, cable clips, twist ties, and maybe a short extension cord or portable battery. On a kitchen table, these details decide whether the office feels deliberate or instantly messy.',
    editorNote:
      'This category rarely gets headline attention, but it is usually what keeps a temporary setup from unraveling by midday. When power access is awkward or cords snake across a dining surface, the whole room starts feeling chaotic no matter how nice the main gear is. A tidy cable kit makes setup faster, teardown easier, and the table much more livable for everyone else in the house.',
    why:
      'The difference between a temporary office and a stressful mess is often just cable discipline.',
    skipIf:
      'you truly work on battery all day and your setup uses only one or two devices with no table-crossing cables.',
    amazonQuery: 'compact power strip usb c cable clips desk organizer',
  },
  {
    rank: 7,
    title: 'Adjustable portable lighting',
    label: 'Lighting support',
    bestFor: 'Cloudy days, evening work, and cleaner video-call appearance',
    blurb:
      'A foldable LED lamp helps the kitchen office stay usable when natural light disappears or shifts at the wrong time of day.',
    whatItIs:
      'This is usually a compact USB-powered lamp with adjustable brightness and color temperature that can sit on a shared table without dominating it. The best portable options fold flat, charge easily, and give you enough control to brighten your face for calls or reduce eye strain during early mornings and late evenings.',
    editorNote:
      'Lighting is easy to overlook when the kitchen looks bright at 9 a.m., but many temporary workspaces fall apart once daylight changes. A small lamp gives the setup more consistency, helps screens feel less harsh, and can make your background and face look more polished on camera. For anyone working hybrid hours, this is a quiet quality-of-life upgrade that pulls more weight than expected.',
    why:
      'A portable light keeps the workspace functional and professional beyond the best sunny hours of the day.',
    skipIf:
      'your kitchen stays evenly bright through your entire work block and you rarely take video calls.',
    amazonQuery: 'portable led desk lamp usb rechargeable foldable',
  },
  {
    rank: 8,
    title: 'Comfort and storage extras',
    label: 'Daily polish',
    bestFor: 'People who want the setup to feel calmer, faster, and easier to tear down',
    blurb:
      'A desk mat, standing converter, blue-light glasses, or one dedicated office basket can make the whole routine feel more intentional.',
    whatItIs:
      'This category includes the smaller supporting pieces that help a kitchen setup behave like a system rather than a pile of gadgets. Think roll-up desk mats, compact standing converters, storage baskets, mouse pads, and small comfort items that protect the table and shorten setup and teardown time.',
    editorNote:
      'These are not always the first things to buy, but they often become the items that make the routine stick. A dedicated basket or tote gives every piece a home, while a mat or compact converter can make the table feel more work-ready without adding bulk. If the goal is a setup that disappears cleanly every night, these finishing touches matter.',
    why:
      'The right extras make the setup easier to repeat consistently, which is what turns a temporary office into a sustainable habit.',
    skipIf:
      'you are still building the core ergonomic basics and want to keep spending tightly focused on essentials first.',
    amazonQuery: 'desk mat office basket portable standing desk converter',
  },
]

const setupBenefits = [
  {
    title: 'Flexibility',
    text:
      'A portable kitchen office lets you shift between seated work, standing moments, and quick teardown without redesigning the room.',
  },
  {
    title: 'Cost-Effective',
    text:
      'You can build a strong setup with modular gear instead of investing immediately in a dedicated room or large furniture.',
  },
  {
    title: 'Space-Saving',
    text:
      'Foldable gear, compact lighting, and one storage basket work especially well in apartments, condos, and shared homes.',
  },
  {
    title: 'Improved Well-Being',
    text:
      'Better posture, cleaner routines, and easier access to water, coffee, and natural light can make long days feel less draining.',
  },
]

const setupSteps = [
  { time: '0:30', title: 'Reset the table', text: 'Wipe the surface, remove non-work items, and start with one clean zone instead of fighting around clutter.' },
  { time: '0:45', title: 'Build the screen zone', text: 'Set the riser, open the laptop, position the portable monitor, and connect the one or two cables you actually need.' },
  { time: '0:45', title: 'Deploy your typing kit', text: 'Place the keyboard and mouse where your shoulders can stay relaxed, then add the desk mat if you use one.' },
  { time: '1:00', title: 'Fix the comfort layer', text: 'Add the seat cushion, foot support, or wheeled chair before you start working, not after discomfort shows up.' },
  { time: '1:00', title: 'Finish the visual calm', text: 'Bring in water, a small plant, and headphones, then tuck loose cables so the kitchen still feels clean and intentional.' },
]

const budgetTiers = [
  {
    name: 'Lean setup',
    price: '$80 to $150',
    text:
      'Start with a laptop riser, wireless keyboard and mouse, and a seat cushion. This is the smartest low-cost path if the kitchen table setup is new.',
  },
  {
    name: 'Sweet spot',
    price: '$200 to $400',
    text:
      'Add a portable monitor, cleaner cable kit, and better headphones. This is where the setup starts feeling genuinely professional.',
  },
  {
    name: 'Ultimate portable rig',
    price: '$500+',
    text:
      'Layer in premium peripherals, stronger seating support, and a faster teardown/storage system so the office disappears cleanly every night.',
  },
]

const kitchenTips = [
  {
    title: 'Hygiene matters',
    text:
      'Use washable mats, wipe the table daily, and keep crumbs or spills away from electronics so the setup stays practical in a real kitchen.',
  },
  {
    title: 'Watch odor and airflow',
    text:
      'Ventilation matters more in a kitchen workspace, especially if cooking overlaps with the workday or the room traps heat.',
  },
  {
    title: 'Coordinate with the household',
    text:
      'A few agreed focus hours can reduce interruptions and make the room feel more professional during calls and deep work blocks.',
  },
  {
    title: 'Avoid the common mistakes',
    text:
      'The setup breaks down when the table gets overloaded, ergonomics get ignored, or cables are left out overnight and turn the room into a half-office.',
  },
]

const faqItems = [
  {
    q: 'Can a kitchen table really work as a long-term home office?',
    a: 'Yes, if the setup is genuinely portable and you solve the core ergonomic issues: screen height, typing position, seating comfort, and cable control. The space matters less than whether you can work there without accumulating strain.',
  },
  {
    q: 'What should I buy first for a small-space WFH setup?',
    a: 'Start with a laptop riser and a wireless keyboard-and-mouse combo. That pair gives you the biggest ergonomic payoff for the lowest cost and fastest setup time.',
  },
  {
    q: 'How do I keep a kitchen office from taking over the room?',
    a: 'Use one dedicated storage basket or slim rolling cart, stick to foldable gear, and limit the setup to products that either earn daily use or disappear quickly. The best portable office is disciplined, not gadget-heavy.',
  },
  {
    q: 'What makes a kitchen setup feel more professional on video calls?',
    a: 'Good natural light, a more elevated laptop angle, headphones with a strong mic, and a cleaner background usually matter more than adding extra tech.',
  },
]

const articleText = `
How to Set Up the Ultimate Work-From-Home Kitchen Office in Under 5 Minutes
In today’s hybrid work world, not everyone has a spare bedroom for a dedicated home office. For many professionals in apartments, condos, or smaller homes, the kitchen table has become the go-to workspace because it offers usable surface area, natural light, and a better mental cue than the couch.
The challenge is building a setup that feels comfortable for eight-plus hours, looks professional on video calls, and disappears cleanly when the workday ends.
${setupBenefits.map((item) => `${item.title} ${item.text}`).join(' ')}
${essentials.map((item) => `${item.title} ${item.label} ${item.blurb} ${item.whatItIs} ${item.editorNote} ${item.why}`).join(' ')}
${setupSteps.map((step) => `${step.time} ${step.title} ${step.text}`).join(' ')}
${budgetTiers.map((tier) => `${tier.name} ${tier.price} ${tier.text}`).join(' ')}
${kitchenTips.map((item) => `${item.title} ${item.text}`).join(' ')}
${faqItems.map((faq) => `${faq.q} ${faq.a}`).join(' ')}
`

const readingTime = getReadingTime(articleText)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ultimate Kitchen Table Home Office Setup for WFH',
  description: metaDescription,
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: {
    '@type': 'Organization',
    name: 'BestPickZone',
    logo: { '@type': 'ImageObject', url: 'https://bestpickzone.com/logo.png' },
  },
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  mainEntityOfPage: pageUrl,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function UltimateKitchenTableHomeOfficeSetupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        <section className="relative overflow-hidden rounded-[2rem] border border-amber-200 bg-[radial-gradient(circle_at_top_left,_rgba(255,247,237,1),_rgba(240,253,250,1)_45%,_rgba(239,246,255,1)_100%)] px-6 py-8 shadow-sm md:px-10 md:py-12">
          <div className="absolute -right-10 top-6 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute bottom-4 left-10 h-32 w-32 rounded-full bg-sky-200/40 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-amber-300 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
                Work From Home Guide
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                How to Set Up the Ultimate Work-From-Home Kitchen Office in Under 5 Minutes
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
                In today&apos;s hybrid work world, not everyone has a spare bedroom for a dedicated
                home office. For many professionals in apartments, condos, or smaller homes, the
                kitchen table becomes the default workspace because it offers surface area, good
                natural light, and easier access to the little things that make long workdays more
                manageable.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
                The challenge is creating a setup that is comfortable for 8+ hours, professional on
                video calls, and easy to assemble and disassemble without turning your kitchen into a
                permanent office. This guide focuses on portable gear, true ergonomic support, and a
                routine that can be set up in under five minutes and packed away just as fast.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span className="rounded-full bg-white/80 px-3 py-1 font-medium">{formatReadingTime(readingTime)}</span>
                <span className="rounded-full bg-white/80 px-3 py-1 font-medium">Updated July 1, 2026</span>
                <span className="rounded-full bg-white/80 px-3 py-1 font-medium">Small-space WFH</span>
                <span className="rounded-full bg-white/80 px-3 py-1 font-medium">Portable gear focus</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#essentials"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
                >
                  Jump to the Essentials
                </a>
                <a
                  href="#routine"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-gray-300 bg-white/80 px-5 py-3 text-sm font-bold text-gray-900 transition hover:border-gray-400"
                >
                  See the 5-Minute Routine
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-lg backdrop-blur">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
                What this article covers
              </p>
              <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
                <li>The best portable gear for turning a kitchen table into a real WFH station.</li>
                <li>How to keep the setup ergonomic, professional, and easy to store every night.</li>
                <li>A practical under-5-minute routine for getting ready to work fast.</li>
                <li>Budget guidance, kitchen-specific tips, and FAQs for small-space remote workers.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                Why the Kitchen Table Works
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                A temporary setup can still be a high-performance office
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-gray-700">
              <p>
                Kitchens are often the heart of the home and naturally better lit than spare corners,
                bedrooms, or the couch. That makes them surprisingly strong for focused work, cleaner
                video calls, and a more deliberate mental shift into productivity.
              </p>
              <p>
                The real advantage is modularity. With foldable, lightweight gear, you can avoid
                drilling holes, rearranging furniture permanently, or sacrificing meal space just to
                work remotely.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-4">
          {setupBenefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">{benefit.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{benefit.text}</p>
            </div>
          ))}
        </section>

        <section id="essentials" className="mt-12">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
              Essential Portable Gear
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Must-have items for a kitchen work-from-home setup
            </h2>
            <p className="mt-3 max-w-4xl text-base leading-relaxed text-gray-700">
              Everything here is chosen for quick deployment, easy nightly storage, and real
              ergonomic value. The goal is not to turn the kitchen into a gadget lab. It is to build
              a portable system that helps you work productively without neck pain, back strain, or a
              table full of permanent clutter.
            </p>
          </div>

          <div className="space-y-10">
            {essentials.map((item) => (
              <article key={item.title} className="border-t border-stone-200 pt-8 first:border-t-0 first:pt-0">
                <div className="max-w-4xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                    {item.rank}. {item.label}
                  </p>
                  <h3 className="mt-2 text-3xl font-bold leading-tight text-gray-900">{item.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-700">{item.blurb}</p>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">{item.whatItIs}</p>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">{item.editorNote}</p>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">
                    <strong>Why it earns a place:</strong> {item.why}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-gray-700">
                    <strong>Best for:</strong> {item.bestFor}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-gray-700">
                    <strong>Skip it if:</strong> {item.skipIf}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <Link
                      href={amazon(item.amazonQuery)}
                      target="_blank"
                      rel="noopener nofollow sponsored"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-bold text-gray-900 transition hover:bg-yellow-300"
                    >
                      Check current Amazon price
                    </Link>
                    <span className="text-sm leading-relaxed text-gray-500">
                      Chosen for portability, quick setup, and easy end-of-day storage.
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="routine" className="mt-12 rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-800">
            Morning Routine
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            A realistic under-5-minute setup flow
          </h2>
          <p className="mb-5 max-w-4xl text-base leading-relaxed text-gray-700">
            A kitchen office only works long-term if the setup routine is simple enough that you will
            actually repeat it. This sequence keeps the process efficient in the morning and makes the
            nightly teardown easy enough that the room can return to normal.
          </p>
          <div className="space-y-4">
            {setupSteps.map((step) => (
              <div key={step.title} className="grid gap-3 rounded-2xl border border-white bg-white/90 p-5 md:grid-cols-[88px_1fr] md:items-start">
                <div className="inline-flex h-12 w-20 items-center justify-center rounded-xl bg-gray-900 text-lg font-extrabold text-white">
                  {step.time}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-stone-600">
              Budget Ladder
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Where readers can start without overbuying
            </h2>
            <div className="space-y-4">
              {budgetTiers.map((tier) => (
                <div key={tier.name} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-stone-700">
                      {tier.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">{tier.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)] p-6 shadow-sm">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
              Kitchen-Specific Tips
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              The details that keep the setup from getting annoying
            </h2>
            <div className="space-y-4">
              {kitchenTips.map((tip) => (
                <div key={tip.title} className="rounded-2xl border border-amber-100 bg-white/80 p-4">
                  <h3 className="text-base font-semibold text-gray-900">{tip.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
            Final Thoughts
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            You do not need a spare room to work well from home
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              A thoughtfully equipped portable kitchen office proves that a dedicated room is helpful
              but not required. With the right lightweight gear, you can create a setup that feels
              flexible, ergonomic, and professional without sacrificing how the rest of the home
              functions.
            </p>
            <p>
              The smartest path is to start with the true essentials, refine the routine as you go,
              and choose gear that earns its place through speed, comfort, and easy storage. When the
              setup supports your work and disappears at the end of the day, the kitchen table starts
              working much harder than people expect.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqItems.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
