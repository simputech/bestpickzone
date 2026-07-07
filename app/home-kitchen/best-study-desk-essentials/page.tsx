import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/home-kitchen/best-study-desk-essentials'
const publishedDate = '2026-07-07T00:00:00Z'
const updatedDate = '2026-07-07T00:00:00Z'
const AMAZON_TAG = 'althcu-20'

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

function amazonProduct(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`
}

const metaDescription =
  'The best study desk essentials for students in 2026: task lighting that beats dorm fluorescents, ergonomic fixes for laptop hunch, focus tools, and the organization layer that keeps a small desk usable.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best Study Desk Essentials for Students (2026) | BestPickZone',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'best study desk essentials',
      'study desk setup college',
      'desk essentials for students',
      'college desk setup',
      'study desk accessories',
      'dorm desk essentials',
      'desk setup for studying',
      'student desk organization',
      'best desk accessories for college',
      'study space essentials',
    ],
    openGraph: {
      title: 'Best Study Desk Essentials for Students',
      description: metaDescription,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Study Desk Essentials for Students',
      description:
        'A 16-product study desk setup: lighting, ergonomics, focus tools, and organization for a desk that makes long study sessions easier.',
    },
  },
  {
    category: 'home-kitchen',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Home & Kitchen',
    url: pageUrl,
    tags: ['study desk', 'college students', 'desk setup', 'desk accessories', 'studying'],
  }
)

type Product = {
  rank: number
  title: string
  badge: string
  summary: string
  whatItIs: string
  whyItMadeTheList: string
  skipIf: string
  ourPickName: string
  ourPickWhy: string
  asin: string
  image: string
  amazonQuery: string
}

const products: Product[] = [
  {
    rank: 1,
    title: 'Clamp desk lamp',
    badge: 'The eye-strain fix',
    summary:
      'Dorm and apartment desks come with overhead lighting designed for hallways, not for reading dense material at 11 p.m. A clamp-mounted LED lamp puts real light exactly where the textbook sits, without giving up a single inch of desk surface.',
    whatItIs:
      'An LED arm lamp that grips the back edge of the desk, with adjustable brightness and color temperature. The clamp mount is the student-specific detail: small desks cannot spare the footprint of a lamp base, and clamps move to next year’s room in thirty seconds.',
    whyItMadeTheList:
      'Lighting is the first thing that separates a desk you avoid from a desk you settle into. It leads this list because every other item works better under light you chose.',
    skipIf: 'Skip this if your desk has a hutch or shelf directly above the work surface — a monitor light bar or under-shelf strip fits that geometry better.',
    ourPickName: 'Voncerus LED Desk Lamp with Clamp',
    ourPickWhy:
      'A wide light bar on a clamp, with multiple color modes and enough brightness for late reading — the exact form factor a shallow dorm desk needs, at a student price.',
    asin: 'B0BB5ZBT42',
    image: 'https://m.media-amazon.com/images/I/61RJ3ZzSURL._AC_SL480_.jpg',
    amazonQuery: 'led desk lamp clamp students',
  },
  {
    rank: 2,
    title: 'Monitor light bar',
    badge: 'The screen-heavy studier’s lamp',
    summary:
      'If most of your studying happens on a screen, a light bar that sits on top of the monitor lights the desk and keyboard without throwing glare back at your eyes. It is the lamp category built specifically for people who read PDFs until midnight.',
    whatItIs:
      'A slim LED bar that rests on the top bezel of a monitor, powered over USB, angled so light lands on the desk rather than the screen. Good ones offer warm-to-cool adjustment, which matters when you are trying to wind down after a late session.',
    whyItMadeTheList:
      'It made the list because screen-first studying is now the default, and this solves desk lighting with zero footprint — the scarcest resource on a student desk after time.',
    skipIf: 'Skip this if you work laptop-only with no external monitor; the clamp lamp above covers you better.',
    ourPickName: 'Quntis Monitor Light Bar',
    ourPickWhy:
      'The established budget pick in a category BenQ made expensive: asymmetric light that keeps glare off the screen, USB power, and a price that fits a semester budget.',
    asin: 'B08DKQ3JG1',
    image: 'https://m.media-amazon.com/images/I/51p1Ui5sa7L._AC_SL480_.jpg',
    amazonQuery: 'monitor light bar usb',
  },
  {
    rank: 3,
    title: 'Laptop stand',
    badge: 'The posture reset',
    summary:
      'Hours of looking down at a laptop produces the neck and shoulder ache every student recognizes by October. A stand that raises the screen toward eye level is the cheapest ergonomic intervention that actually changes how long you can study comfortably.',
    whatItIs:
      'A folding aluminum riser that lifts the laptop six to ten inches, stable enough to type against in a pinch but really meant to pair with an external keyboard. Foldability matters for students because the stand goes to the library, and home at semester’s end.',
    whyItMadeTheList:
      'It earns a top-three spot because laptop hunch is the single most common physical complaint of screen-based studying, and this fixes the geometry that causes it.',
    skipIf: 'Skip this if you refuse to use an external keyboard — typing on a raised laptop all day trades neck strain for wrist strain.',
    ourPickName: 'RIWUCT Foldable Aluminum Laptop Stand',
    ourPickWhy:
      'Height-adjustable across the useful range, folds flat for a backpack, and holds a heavy laptop without the bounce that makes cheaper stands annoying to type near.',
    asin: 'B0B1L6R9NN',
    image: 'https://m.media-amazon.com/images/I/61Jkuq77tXL._AC_SL480_.jpg',
    amazonQuery: 'laptop stand adjustable aluminum',
  },
  {
    rank: 4,
    title: 'Wireless keyboard and mouse',
    badge: 'The laptop-stand companion',
    summary:
      'The laptop stand only completes the ergonomic fix if your hands come back down to desk level. A basic wireless keyboard and mouse combo does that for less than the cost of two textbooks, and turns a laptop into a workstation.',
    whatItIs:
      'A full-size keyboard and mouse sharing one USB receiver, running months on a set of batteries. Students do not need mechanical switches or RGB here — they need reliable, quiet, and cheap, because this gear lives a rough backpack-adjacent life.',
    whyItMadeTheList:
      'It made the list as the second half of the posture equation. Screen at eye level plus hands at desk level is the whole ergonomic story, and this is the affordable version of it.',
    skipIf: 'Skip this if you type heavily and care about feel — put the savings toward a mechanical keyboard instead, and check our mechanical keyboard guide.',
    ourPickName: 'Logitech MK270 Wireless Combo',
    ourPickWhy:
      'The default recommendation in budget wireless for a decade for a reason: it pairs instantly, batteries last most of a school year, and replacements are everywhere if something breaks.',
    asin: 'B079JLY5M5',
    image: 'https://m.media-amazon.com/images/I/61+aByx2jML._AC_SL480_.jpg',
    amazonQuery: 'wireless keyboard and mouse combo',
  },
  {
    rank: 5,
    title: 'Desk mat',
    badge: 'The instant desk upgrade',
    summary:
      'A desk mat sounds cosmetic until you use one: it defines the work zone, quiets the keyboard, protects a scratched dorm desk you will be charged for, and makes handwriting on loose paper dramatically more comfortable.',
    whatItIs:
      'A large mat — roughly 31 to 47 inches wide — that sits under keyboard, mouse, and notebook. Dual-sided cork and leather versions handle both mouse tracking and pen work. For rented desks with decades of damage, it is also the cheapest resurfacing job available.',
    whyItMadeTheList:
      'It made the list because it upgrades three things at once — writing surface, mouse surface, and how serious the desk feels — for the price of a pizza night.',
    skipIf: 'Skip the extra-large sizes if your dorm desk is under 40 inches wide; an overhanging mat curls and collects sleeve snags.',
    ourPickName: 'AFIING Dual-Sided Cork and Leather Desk Mat',
    ourPickWhy:
      'The reversible cork/leather build covers both study modes — smooth side for mousing, cork side for grip under paper — and it wipes clean after the inevitable coffee event.',
    asin: 'B0BYDZQY2K',
    image: 'https://m.media-amazon.com/images/I/71j5-Q1DgHL._AC_SL480_.jpg',
    amazonQuery: 'desk mat large dual sided',
  },
  {
    rank: 6,
    title: 'Monitor riser',
    badge: 'The storage-plus-ergonomics play',
    summary:
      'If you run an external monitor, a riser lifts it toward eye level and creates a storage shelf underneath in the same move. On a small desk, creating usable volume above the surface is worth more than any organizer that sits on it.',
    whatItIs:
      'A metal or wood platform four to six inches tall that spans the back of the desk. The space underneath swallows the keyboard between sessions, notebooks, or the pile that otherwise becomes desk sediment. Adjustable-length versions adapt to whatever desk next year assigns you.',
    whyItMadeTheList:
      'It made the list for solving screen height and storage with one object. Multi-purpose is the entire buying philosophy for student desks.',
    skipIf: 'Skip this if you already use a monitor arm or a laptop stand as your only screen — stacking risers under a stand is a wobble waiting to happen.',
    ourPickName: 'WALI Adjustable Monitor Stand Riser',
    ourPickWhy:
      'Sturdy steel, an adjustable width that fits mismatched dorm desks, and enough clearance underneath for a full-size keyboard — the practical checklist for this category.',
    asin: 'B094QTGHNZ',
    image: 'https://m.media-amazon.com/images/I/51kULJHh4BL._AC_SL480_.jpg',
    amazonQuery: 'monitor stand riser desk',
  },
  {
    rank: 7,
    title: 'Earplugs for studying',
    badge: 'The focus insurance',
    summary:
      'Roommates, hall noise, and library whisperers do not respect your exam schedule. Reusable low-profile earplugs knock conversation down to a murmur without the pressure and battery anxiety of noise-cancelling headphones.',
    whatItIs:
      'Silicone earplugs designed for comfort over hours, cutting roughly 20 to 25 decibels while leaving enough audio awareness to hear an alarm or a knock. They live in a keychain case, which is exactly where focus tools need to live to get used.',
    whyItMadeTheList:
      'It made the list because concentration is the actual product a study desk produces, and this is the cheapest reliable way to defend it in shared housing.',
    skipIf: 'Skip these if you study exclusively to music — noise-isolating earbuds already do this job for you.',
    ourPickName: 'Loop Quiet 2 Ear Plugs',
    ourPickWhy:
      'Comfortable enough to forget for a three-hour session, washable, and shaped to sit flush so they survive resting your head on your hand — the underrated study posture.',
    asin: 'B0D3V6Y38G',
    image: 'https://m.media-amazon.com/images/I/51t0B9HHobL._AC_SL480_.jpg',
    amazonQuery: 'ear plugs studying noise reduction',
  },
  {
    rank: 8,
    title: 'Book stand',
    badge: 'The textbook tamer',
    summary:
      'A 900-page textbook lying flat forces you to hunch over it and hold it open with one hand. A book stand props it upright at reading angle, holds the pages back, and frees both hands for notes — a small mechanical fix with an outsized effect on reading stamina.',
    whatItIs:
      'An adjustable-angle stand with page clips, big enough for a hardcover textbook and stable enough not to collapse when you lean a heavy reference against it. Bamboo and metal versions both work; the page clips and depth of the ledge are what separate good from flimsy.',
    whyItMadeTheList:
      'It made the list because reading-heavy majors still exist, and nobody talks about how much of study fatigue is just physically wrestling books flat.',
    skipIf: 'Skip this if your program went fully digital — a tablet stand is the equivalent tool for that workflow.',
    ourPickName: 'wishacc Bamboo Book Stand',
    ourPickWhy:
      'The long-running category favorite: solid bamboo, six angle settings, and page clips that hold a stiff new textbook open without creasing it.',
    asin: 'B07459P7BF',
    image: 'https://m.media-amazon.com/images/I/71Mda9UuJhL._AC_SL480_.jpg',
    amazonQuery: 'book stand for textbooks adjustable',
  },
  {
    rank: 9,
    title: 'Academic planner',
    badge: 'The deadline defense',
    summary:
      'Every semester produces the same collision: four syllabi, forty deadlines, and a first-year student discovering them one at a time. A paper academic planner — July to June, weekly plus monthly views — is still the most reliable fix, because it cannot send notifications you swipe away.',
    whatItIs:
      'A planner structured around the school year rather than the calendar year, with monthly spreads for the deadline overview and weekly pages for the actual work plan. The ritual of copying every syllabus date in during week one is half the value.',
    whyItMadeTheList:
      'It made the list because missed-deadline damage is the most expensive problem on this page, and the tool that prevents it costs less than a lab fee.',
    skipIf: 'Skip paper if your calendar already lives on your phone and it genuinely works — this is for everyone whose phone calendar is a graveyard of ignored reminders.',
    ourPickName: 'Blue Sky 2026-2027 Academic Year Planner',
    ourPickWhy:
      'The standard-setter in academic planners: clean weekly and monthly layouts running July 2026 through June 2027, durable cover, and a size that fits a backpack sleeve.',
    asin: 'B0FYRBKD2G',
    image: 'https://m.media-amazon.com/images/I/71dtkmasQwL._AC_SL480_.jpg',
    amazonQuery: 'academic planner 2026-2027 weekly monthly',
  },
  {
    rank: 10,
    title: 'Highlighter set',
    badge: 'The note-system workhorse',
    summary:
      'Color-coded notes are one of the few study aids that survive contact with real student behavior, and the highlighters that dominate student desks are the soft, low-saturation kind that do not bleed through textbook pages or turn notes neon.',
    whatItIs:
      'A set of dual-tip highlighters — broad tip for lines, fine tip for margins — in muted colors that stay readable under photos, which matters now that everyone revises from pictures of their own notes. Bleed-through resistance is the spec that separates them from dollar-store packs.',
    whyItMadeTheList:
      'It made the list because a working color system for readings, lecture notes, and exam prep is cheap infrastructure for every class at once.',
    skipIf: 'Skip these if all your annotation happens in a PDF app — spend the money on a decent stylus instead.',
    ourPickName: 'Zebra Mildliner Double-Ended Highlighters',
    ourPickWhy:
      'The set that built the category: gentle colors that layer without shouting, dual tips, and ink that respects thin textbook paper.',
    asin: 'B0752WWCTN',
    image: 'https://m.media-amazon.com/images/I/61+UTGlMreL._AC_SL480_.jpg',
    amazonQuery: 'zebra mildliner highlighters set',
  },
  {
    rank: 11,
    title: 'Desktop whiteboard',
    badge: 'The working-memory extension',
    summary:
      'A small dry-erase board on the desk is where problem sets get attempted, formulas get parked during an exam week, and the day’s three priorities stay visible. It is scratch paper that never runs out, which changes how freely you use it.',
    whatItIs:
      'A desktop-size whiteboard — roughly the footprint of an open notebook — either propped on a stand or lying flat. Glass and tempered versions erase cleaner over a full year than the coated-cardboard kind, which ghost by midterms.',
    whyItMadeTheList:
      'It made the list because working through problems by hand is still how quantitative subjects get learned, and a wipeable surface lowers the cost of every wrong attempt.',
    skipIf: 'Skip this if wall space is available and unregulated — a bigger wall-mounted board beats a desktop one when hanging things is actually allowed.',
    ourPickName: 'Amazon Basics Desktop Dry Erase Whiteboard',
    ourPickWhy:
      'Tempered surface that resists ghosting, a built-in organizer tray for markers, and a desktop stand — the whole scratch-work station in one box.',
    asin: 'B0DMZYK585',
    image: 'https://m.media-amazon.com/images/I/61BIW9jyFLL._AC_SL480_.jpg',
    amazonQuery: 'desktop dry erase whiteboard stand',
  },
  {
    rank: 12,
    title: 'Desk organizer',
    badge: 'The clutter containment unit',
    summary:
      'Pens, chargers, sticky notes, a stapler used twice a semester — a student desk accumulates small objects at a rate directly proportional to stress level. One vertical organizer gives all of it a home and reclaims the flat surface for actual work.',
    whatItIs:
      'A tiered mesh organizer with letter trays for handouts, upright slots for notebooks, a pen cup, and a drawer for the small stuff. Vertical tiers are the point: paper storage that stacks upward instead of spreading across the desk you study on.',
    whyItMadeTheList:
      'It made the list because clutter is a genuine attention tax, and containment beats discipline. A desk that resets in ninety seconds gets reset; one that takes twenty minutes does not.',
    skipIf: 'Skip the multi-tier towers if your desk sits under a low shelf or hutch — measure the clearance first.',
    ourPickName: 'Marbrasse 3-Tier Mesh Desk Organizer with Drawer',
    ourPickWhy:
      'Trays for paper, slots for notebooks, a drawer for chaos, and a pen cup, all in one footprint about the size of a textbook — the highest storage-per-inch ratio in the category.',
    asin: 'B096TF8NPR',
    image: 'https://m.media-amazon.com/images/I/81MB7BHw60L._AC_SL480_.jpg',
    amazonQuery: 'mesh desk organizer with drawer',
  },
  {
    rank: 13,
    title: 'Cable management kit',
    badge: 'The one-hour cleanup',
    summary:
      'A student desk runs a laptop charger, phone cable, lamp cord, monitor cable, and whatever else the semester added — usually as a visible nest behind and across the desk. A cheap kit of sleeves, clips, and ties turns that nest into three tidy runs in an hour.',
    whatItIs:
      'An assortment kit: zip-up sleeves that bundle parallel cables, adhesive clips that route a charging cable along the desk edge, ties, and cable holders that keep unplugged cords from diving behind furniture. One kit handles a desk with plenty left over.',
    whyItMadeTheList:
      'It made the list because cable mess is the visual noise you stop consciously seeing but never stop paying for, and this is the cheapest whole-desk transformation available.',
    skipIf: 'Skip this until your setup stabilizes — routing cables twice because you rearranged the desk is the actual chore.',
    ourPickName: 'N NOROCME 192-Piece Cable Management Kit',
    ourPickWhy:
      'Every fastener type a desk needs in one inexpensive box, which beats guessing which specific clip to buy — leftover pieces cover the next room too.',
    asin: 'B0B687J37D',
    image: 'https://m.media-amazon.com/images/I/81F7bTfj+4L._AC_SL480_.jpg',
    amazonQuery: 'cable management kit desk',
  },
  {
    rank: 14,
    title: 'Seat cushion',
    badge: 'The dorm-chair correction',
    summary:
      'Standard-issue dorm and apartment desk chairs are wooden or thinly padded, and no one studies well while their legs fall asleep. A memory foam seat cushion is the fix that costs one-twentieth of a real ergonomic chair and travels between rooms.',
    whatItIs:
      'A contoured memory-foam cushion with a non-slip base and a washable cover, shaped to take pressure off the tailbone during long sits. It converts the chair you were assigned into a chair you can tolerate for a three-hour session.',
    whyItMadeTheList:
      'It made the list because seat comfort sets the ceiling on session length, and students rarely control what chair they get. This is the portable workaround.',
    skipIf: 'Skip this if you can bring your own chair — a real ergonomic chair beats any cushion, and our WFH guides cover those.',
    ourPickName: 'TushGuard Memory Foam Seat Cushion',
    ourPickWhy:
      'Dense foam that does not pancake by November, a grippy base that stays put on a wooden dorm chair, and a cover that survives the wash — the three failure points of cheaper cushions.',
    asin: 'B0B5SW6381',
    image: 'https://m.media-amazon.com/images/I/81d0B9XTElL._AC_SL480_.jpg',
    amazonQuery: 'seat cushion desk chair memory foam',
  },
  {
    rank: 15,
    title: 'Phone stand',
    badge: 'The distraction manager',
    summary:
      'The phone is coming to the desk either way. A stand at least puts it upright, visible, and slightly out of reach — good for timers, lecture streams, and two-factor codes, and meaningfully better than face-up next to your dominant hand.',
    whatItIs:
      'An adjustable aluminum stand that holds a phone at viewing angle, sturdy enough to tap without tipping. Students use it as a second screen for slides and a Pomodoro timer display more than anything else.',
    whyItMadeTheList:
      'It made the list because pretending the phone will stay in a drawer loses to designing a spot for it. Structure beats willpower on a study desk.',
    skipIf: 'Skip this if you already charge on a stand-style wireless charger — it is the same object with power.',
    ourPickName: 'LISEN Adjustable Phone Stand',
    ourPickWhy:
      'Heavy enough at the base to survive tapping, adjustable through the useful angles, and cheap enough to leave permanently planted on the desk.',
    asin: 'B07Z82895W',
    image: 'https://m.media-amazon.com/images/I/61KD4hoirXL._AC_SL480_.jpg',
    amazonQuery: 'phone stand for desk adjustable',
  },
  {
    rank: 16,
    title: 'Mug warmer',
    badge: 'The late-session morale item',
    summary:
      'The last item on the list is pure quality of life: a warming plate that keeps coffee or tea drinkable through a long problem set instead of turning cold by page two. Small, cheap, and disproportionately loved by everyone who owns one.',
    whatItIs:
      'A compact heating plate that holds a mug at drinking temperature, ideally with an auto-shutoff timer — the feature that makes it dorm-sensible. It draws far less power than any banned appliance and occupies a coaster’s worth of desk.',
    whyItMadeTheList:
      'It made the list because study desks run on warm drinks, and this is the difference between finishing the cup and pouring out cold coffee for the hundredth time.',
    skipIf: 'Skip this if your housing rules class it with hot plates — a few strict handbooks do, so check before move-in.',
    ourPickName: 'House Gem Mug Warmer with Auto Shutoff',
    ourPickWhy:
      'Temperature display, auto-shutoff for peace of mind in a dorm, and enough wattage to actually hold a full mug warm rather than lukewarm.',
    asin: 'B0CCP46DK9',
    image: 'https://m.media-amazon.com/images/I/61SsDfH706L._AC_SL480_.jpg',
    amazonQuery: 'mug warmer desk auto shutoff',
  },
]

const quickWins = [
  'Fix lighting and screen height first — those two changes carry more study stamina than everything else on the list combined.',
  'Buy vertical: risers, tiered organizers, and clamp mounts. Flat desk space is for the work, not the gear.',
  'Focus tools only work if they live on the desk. Earplugs in a drawer across the room protect nothing.',
]

const faqs = [
  {
    question: 'What should every student have on a study desk?',
    answer:
      'The core stack is task lighting, something that raises the screen to eye level, an external keyboard and mouse, and one system for capturing deadlines — paper planner or calendar app. After that, focus tools like earplugs and organization pieces earn their place based on how noisy and cluttered your specific situation is.',
  },
  {
    question: 'How do I set up a study desk in a small dorm room?',
    answer:
      'Claim vertical space instead of surface space: a clamp lamp instead of a base lamp, a monitor riser with storage underneath, a tiered organizer instead of trays, and a desk mat to define the work zone. A 36-inch dorm desk runs a full setup this way with the writing surface still clear.',
  },
  {
    question: 'Is a laptop stand actually worth it for studying?',
    answer:
      'If you study more than a couple of hours a day on a laptop, yes — raising the screen toward eye level removes the constant downward neck angle that produces most laptop-related aches. The stand only completes the fix when paired with an external keyboard and mouse, so budget for the combination, which together still costs less than most textbooks.',
  },
  {
    question: 'What desk items help with focus and distraction?',
    answer:
      'The reliable ones are mechanical rather than motivational: earplugs or noise reduction for sound, a phone stand that gives the phone a fixed spot out of grabbing range, a whiteboard for offloading the mental to-do list, and lighting that makes the desk the brightest, most inviting spot in the room at night.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: products.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: product.ourPickName,
    url: amazonProduct(product.asin),
  })),
}

const fullText = [
  metaDescription,
  ...products.map(
    (product) =>
      `${product.title} ${product.summary} ${product.whatItIs} ${product.whyItMadeTheList} ${product.skipIf} ${product.ourPickName} ${product.ourPickWhy}`
  ),
  ...faqs.map((faq) => `${faq.question} ${faq.answer}`),
].join(' ')

const readingTime = formatReadingTime(getReadingTime(fullText))

export default function BestStudyDeskEssentialsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Home & Kitchen', href: '/home-kitchen' },
          { label: 'Best Study Desk Essentials' },
        ]}
      />

      <section className="mb-10 rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(140deg,#ecfdf5_0%,#ffffff_45%,#eff6ff_100%)] px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
          College Student Series
        </p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          The best study desk essentials, built around how students actually study.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          The highest-return study desk purchases are a clamp lamp, a laptop stand, and a cheap wireless keyboard — light on the work, screen at eye level, hands where they belong. That trio costs less than one textbook and changes how long you can study before your neck and eyes call it a night.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          The other thirteen picks below handle noise, deadlines, clutter, and the assigned wooden chair — each one linked to a specific Amazon product plus a search link for comparing the current field.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">
          BestPickZone participates in the Amazon Services LLC Associates Program. If you shop through links on this page, we may earn a commission at no extra cost to you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">Updated July 7, 2026</span>
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">{readingTime}</span>
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">16 Amazon-linked picks</span>
        </div>
      </section>

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        {quickWins.map((win) => (
          <div key={win} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-base leading-7 text-slate-700">{win}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900">The 16 study desk essentials, in buying order</h2>
          <p className="mt-3 text-lg leading-8 text-slate-700">
            Ranked by return on money: ergonomics and lighting first, focus tools second, then the organization layer that keeps a 36-inch dorm desk from silting up by midterms.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        {products.map((product) => (
          <article
            key={product.rank}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xl font-black text-emerald-700">
                  {product.rank}
                </div>
                <div>
                  <p className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                    {product.badge}
                  </p>
                  <h3 className="mt-3 text-3xl font-black leading-tight text-slate-900">
                    <a
                      href={amazonSearch(product.amazonQuery)}
                      target="_blank"
                      rel="noopener nofollow sponsored"
                      className="transition hover:text-emerald-700"
                    >
                      {product.title}
                    </a>
                  </h3>
                </div>
              </div>
              <a
                href={amazonSearch(product.amazonQuery)}
                target="_blank"
                rel="noopener nofollow sponsored"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                See Amazon options
              </a>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_1fr]">
              <div className="space-y-4 text-lg leading-8 text-slate-700">
                <p>{product.summary}</p>
                <p>{product.whatItIs}</p>
                <p>{product.whyItMadeTheList}</p>
                <p className="font-semibold text-slate-900">{product.skipIf}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <div className="flex items-start gap-4">
                  <a
                    href={amazonProduct(product.asin)}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className="shrink-0"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.ourPickName}
                      loading="lazy"
                      className="h-32 w-32 rounded-2xl border border-slate-200 bg-white object-contain p-2"
                    />
                  </a>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Our Pick</p>
                    <p className="mt-2 text-lg font-bold text-slate-900">{product.ourPickName}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">{product.ourPickWhy}</p>
                <a
                  href={amazonProduct(product.asin)}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-500"
                >
                  Click Here to Buy on Amazon
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#ecfdf5_100%)] p-6">
          <h2 className="text-3xl font-black text-slate-900">What to buy first, in order</h2>
          <ol className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
            <li><strong>1.</strong> Clamp lamp or light bar — bad light caps every session before anything else does.</li>
            <li><strong>2.</strong> Laptop stand plus keyboard and mouse — the complete posture fix, as a set.</li>
            <li><strong>3.</strong> Planner — deadline damage is the most expensive problem this page prevents.</li>
            <li><strong>4.</strong> Earplugs and phone stand — the focus layer, once the physical setup works.</li>
            <li><strong>5.</strong> Organizer, cable kit, desk mat, and the comfort extras — the finishing layer that keeps it all usable.</li>
          </ol>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-slate-100">
          <h2 className="text-2xl font-black">Affiliate disclosure</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            BestPickZone participates in the Amazon Services LLC Associates Program. If you shop through links on this page, we may earn a commission at no extra cost to you.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Product picks link to the specific Amazon listing we would recommend; section headers link to Amazon search results so you can compare current prices and alternatives as back-to-school inventory shifts.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-black text-slate-900">FAQ</h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl bg-slate-50 p-5">
              <h3 className="text-xl font-bold text-slate-900">{faq.question}</h3>
              <p className="mt-3 text-base leading-7 text-slate-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-black text-slate-900">More for the college setup</h2>
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
          <Link href="/home-kitchen/best-dorm-room-essentials" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-emerald-700">
            Best dorm room essentials
          </Link>
          <Link href="/tech/best-laptops-for-college-students" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-emerald-700">
            Best laptops for college students
          </Link>
          <Link href="/tech/best-mechanical-keyboards" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-emerald-700">
            Best mechanical keyboards
          </Link>
          <Link href="/wfh/best-products-for-your-home-office" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-emerald-700">
            Best products for a home office
          </Link>
        </div>
      </section>
    </main>
  )
}
