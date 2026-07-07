import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/home-kitchen/best-back-to-school-gadgets'
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
  'The best back-to-school gadgets for 2026: the USB backpack, the calculator that outlives empires, lecture recorders, dorm projectors, and the small electronics that make the school year run smoother — 16 picks, mostly under $50.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best Back-to-School Gadgets (2026) | BestPickZone',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'best back to school gadgets',
      'back to school gadgets 2026',
      'cool gadgets for school',
      'back to school electronics',
      'gadgets for students',
      'school gadgets under 50',
      'back to school tech accessories',
      'dorm gadgets',
      'gadgets for high school students',
      'college gadgets amazon',
    ],
    openGraph: {
      title: 'Best Back-to-School Gadgets',
      description: metaDescription,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Back-to-School Gadgets',
      description:
        '16 back-to-school gadgets that earn backpack space: recorders, projectors, smart plugs, and the accessories the school year actually uses.',
    },
  },
  {
    category: 'home-kitchen',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Home & Kitchen',
    url: pageUrl,
    tags: ['back to school', 'gadgets', 'student electronics', 'school accessories', 'dorm tech'],
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
    title: 'Backpack with USB charging port',
    badge: 'The everything-carrier upgrade',
    summary:
      'The backpack is the most-used object of the entire school year, and the current generation earns the word gadget: padded laptop compartments, a pass-through USB port wired to your power bank, and organization designed around chargers and cables instead of trapper keepers.',
    whatItIs:
      'A water-resistant laptop backpack with a dedicated padded sleeve, a built-in USB pass-through so the phone charges from the power bank inside without opening a zipper, and enough structure to protect the most expensive thing a student owns.',
    whyItMadeTheList:
      'It leads the list because it carries every other item on this page at some point, and the difference between a good and bad backpack is felt eight hours a day.',
    skipIf: 'Skip the USB feature if you never carry a power bank — then you are paying for a cable tunnel, and a standard laptop backpack does the job.',
    ourPickName: 'DUSLANG 17-Inch Laptop Backpack with USB Port',
    ourPickWhy:
      'The high-volume Amazon pick in the category: fits large laptops, water-resistant shell, USB pass-through, and a price that leaves budget for what goes inside it.',
    asin: 'B092TQG5ZD',
    image: 'https://m.media-amazon.com/images/I/810gZYpPz9L._AC_SL480_.jpg',
    amazonQuery: 'laptop backpack with usb charging port college',
  },
  {
    rank: 2,
    title: 'Graphing calculator',
    badge: 'The required-by-syllabus classic',
    summary:
      'Some gadgets are optional; the graphing calculator arrives printed on the syllabus. For most math tracks from algebra through calculus and the standardized tests along the way, one specific machine has been the answer for a decade, and fighting it is not worth the curve.',
    whatItIs:
      'A color-screen graphing calculator approved for the SAT, ACT, AP exams, and nearly every high school and intro college math course. Rechargeable battery, rugged case market, and a resale value that says everything about its staying power.',
    whyItMadeTheList:
      'It made the list because it is the single most-required electronic device in American education, and buying it once — or used — beats renting or borrowing for four years.',
    skipIf: 'Skip buying new if budget matters — this is the healthiest used-gadget market in school tech, and the hardware barely changes.',
    ourPickName: 'Texas Instruments TI-84 Plus CE',
    ourPickWhy:
      'The standard. Exam-approved everywhere that matters, a rechargeable battery that lasts weeks, and every teacher in the country can help you use it.',
    asin: 'B00TFYYWQA',
    image: 'https://m.media-amazon.com/images/I/71AQD8aCcxL._AC_SL480_.jpg',
    amazonQuery: 'ti-84 plus ce graphing calculator',
  },
  {
    rank: 3,
    title: 'Digital voice recorder',
    badge: 'The lecture safety net',
    summary:
      'Fast-talking professors, dense lectures, and review sessions before exams all argue for a dedicated recorder. Phones can record, but a standalone device runs all day, never gets interrupted by a call, and keeps the phone free for literally everything else.',
    whatItIs:
      'A pocket recorder with voice-activated recording, weeks of standby, and storage measured in thousands of hours. One button, one job. Always ask the professor’s permission before recording — most say yes, and some schools require asking.',
    whyItMadeTheList:
      'It made the list because re-listening to the confusing twenty minutes of a lecture at 1.5x speed is one of the highest-yield study moves available, and this makes it frictionless.',
    skipIf: 'Skip this if your school posts lecture recordings — many do now, and the follow-up listen matters more than who recorded it.',
    ourPickName: 'EVIDA 128GB Digital Voice Recorder',
    ourPickWhy:
      'Massive storage, voice activation that skips the silences, and a one-button workflow that works in the ten seconds before class starts.',
    asin: 'B084KQMH6V',
    image: 'https://m.media-amazon.com/images/I/61g5p0fhHBL._AC_SL480_.jpg',
    amazonQuery: 'digital voice recorder lectures',
  },
  {
    rank: 4,
    title: 'LCD writing tablet',
    badge: 'The infinite scratchpad',
    summary:
      'Marketed at kids, adopted by everyone: a pressure-sensitive LCD board that erases with one button is the cheapest infinite scratch paper ever made. Quick math, phone messages, vocabulary drills, door notes — write, erase, repeat, no paper consumed.',
    whatItIs:
      'A thin, feather-light tablet that captures handwriting from any stylus or fingernail, runs a year-plus on a coin battery, and clears instantly. No apps, no sync, no glowing screen — which is exactly why it works as a distraction-free scratchpad.',
    whyItMadeTheList:
      'It made the list because scratch work is constant in student life and this does it for pennies, silently, forever. The two-pack means one for the desk and one for the door.',
    skipIf: 'Skip this if you need to keep what you write — nothing is saved, which is the feature and the limitation in one.',
    ourPickName: 'Genialba 10-Inch LCD Writing Tablet (2-Pack)',
    ourPickWhy:
      'Two boards for the price of a notebook, colorful high-contrast writing, and a lock switch that prevents the accidental-erase tragedy.',
    asin: 'B0BJ1FK1ZY',
    image: 'https://m.media-amazon.com/images/I/81aWHdRhZnL._AC_SL480_.jpg',
    amazonQuery: 'lcd writing tablet 10 inch',
  },
  {
    rank: 5,
    title: 'Label maker',
    badge: 'The organization multiplier',
    summary:
      'A pocket thermal label maker turns organizational intentions into physical reality: chargers labeled before the roommate dispute, folders and bins identified on sight, food containers dated in a shared fridge. Small printer, outsized order.',
    whatItIs:
      'A palm-size Bluetooth label printer driven from a phone app, printing on thermal tape — no ink ever. Templates, fonts, and barcode options are fun, but the core value is thirty-second labels that stick to everything a student owns.',
    whyItMadeTheList:
      'It made the list because shared spaces run on labeled property, and the label maker pays for itself the first time a charger dispute ends with a name tag instead of an argument.',
    skipIf: 'Skip this if a roll of masking tape and a marker has honestly been working — this is the deluxe version of that, not a new capability.',
    ourPickName: 'NIIMBOT Label Maker',
    ourPickWhy:
      'The app is the differentiator: fast, actually pleasant to use, with cheap tape refills — the combination that keeps the labeler in use past week one.',
    asin: 'B0CZ6WCHGF',
    image: 'https://m.media-amazon.com/images/I/61S4E7ff38L._AC_SL480_.jpg',
    amazonQuery: 'niimbot label maker',
  },
  {
    rank: 6,
    title: 'Compact Bluetooth speaker',
    badge: 'The shared-soundtrack box',
    summary:
      'A palm-size Bluetooth speaker covers the whole social layer of the school year: dorm room background music, shower-adjacent playlists, picnic tables, and study group ambiance. Waterproof and drop-proof, because student life is both of those hazards.',
    whatItIs:
      'An ultra-portable speaker with a carabiner-friendly loop, real waterproofing, and enough volume for a room — not a party. The small class is the right class for shared housing: big enough to enjoy, small enough to avoid the noise complaint.',
    whyItMadeTheList:
      'It made the list because music is dorm social infrastructure, and this is the version of it that survives being thrown in a bag every day for a year.',
    skipIf: 'Skip this if your circle already runs on one good speaker — the second speaker in a friend group is a redundancy, not an upgrade.',
    ourPickName: 'JBL Go 3',
    ourPickWhy:
      'The default tiny speaker for a reason: real JBL sound at pocket size, waterproof, and available in enough colors to claim yours on sight.',
    asin: 'B08KW1KR5H',
    image: 'https://m.media-amazon.com/images/I/715ZUYP5N5L._AC_SL480_.jpg',
    amazonQuery: 'jbl go 3 bluetooth speaker',
  },
  {
    rank: 7,
    title: 'Mini projector',
    badge: 'The movie-night machine',
    summary:
      'A mini projector converts any dorm wall or bedsheet into a movie screen, which makes it the highest-charisma gadget on this list. It is the difference between watching something on a laptop and hosting something, and hosting is social currency.',
    whatItIs:
      'A compact projector with built-in streaming apps or an HDMI port for a streaming stick, Bluetooth audio out to a speaker, and enough brightness for a dark room. Managed expectations matter: this is movie night magic, not a home theater.',
    whyItMadeTheList:
      'It made the list because shared experiences are what dorm memories are made of, and this generates them for less than the cost of a textbook.',
    skipIf: 'Skip this if your room has real daylight problems and no dark hours — budget projectors need darkness to look their best.',
    ourPickName: 'HOMPOW Mini Projector',
    ourPickWhy:
      'The value pick that keeps showing up in dorms: solid brightness for the price, Bluetooth audio, and simple enough that movie night starts in five minutes.',
    asin: 'B0F43Q5B9K',
    image: 'https://m.media-amazon.com/images/I/61qR4HNDK-L._AC_SL480_.jpg',
    amazonQuery: 'mini projector bedroom dorm',
  },
  {
    rank: 8,
    title: 'Portable photo printer',
    badge: 'The wall-decor generator',
    summary:
      'Phones hold ten thousand photos nobody looks at; a pocket photo printer turns the best of them into the sticky-backed prints that cover dorm walls, laptop lids, and mirror frames. It is decor, memory-keeping, and a party trick in one gadget.',
    whatItIs:
      'A pocket-size printer that produces small sticky-backed prints from the phone over Bluetooth, using ink-free thermal paper. Print quality is snapshot-grade, which is exactly the grade the format calls for.',
    whyItMadeTheList:
      'It made the list because personalizing a rented cinder-block room matters, and photo walls remain the most-loved way students do it.',
    skipIf: 'Skip this if the per-print paper cost would bother you — the printer is cheap, the paper is where the money goes, and heavy printers feel it.',
    ourPickName: 'HP Sprocket Portable Photo Printer',
    ourPickWhy:
      'The name brand of the pocket-print category: reliable app, sticky-backed prints sized for wall grids, and paper available everywhere.',
    asin: 'B07GFP7H8C',
    image: 'https://m.media-amazon.com/images/I/81xi7PVo3mL._AC_SL480_.jpg',
    amazonQuery: 'hp sprocket photo printer',
  },
  {
    rank: 9,
    title: 'Sleep headphones',
    badge: 'The roommate-schedule survival tool',
    summary:
      'When one roommate sleeps at eleven and the other lives at one a.m., a soft headband with flat Bluetooth speakers inside is the peace treaty: podcasts, white noise, or silence-masking audio without earbuds digging into a side-sleeper’s ears.',
    whatItIs:
      'A washable fabric headband with thin speakers positioned over the ears, comfortable against a pillow, doubling as an eye-adjacent light blocker. Battery runs through a full night, and the phone stays across the room where it belongs.',
    whyItMadeTheList:
      'It made the list because sleep in shared rooms is an audio problem half the time, and this solves it in the position people actually sleep in.',
    skipIf: 'Skip these if you sleep on your back and earbuds already work through the night — the headband’s whole case is side-sleeping comfort.',
    ourPickName: 'Perytong Sleep Headphones Headband',
    ourPickWhy:
      'The long-running category favorite: genuinely thin speakers, a breathable washable band, and a price that makes it a low-risk experiment.',
    asin: 'B07SHBQY7Z',
    image: 'https://m.media-amazon.com/images/I/816WPXEbC9L._AC_SL480_.jpg',
    amazonQuery: 'sleep headphones headband bluetooth',
  },
  {
    rank: 10,
    title: 'Ring light with tripod',
    badge: 'The look-presentable kit',
    summary:
      'Between class presentations recorded at midnight, club content, video essays, and the occasional interview, students are on camera constantly — usually lit by a ceiling bulb from the wrong angle. A ring light with a phone tripod fixes the whole genre.',
    whatItIs:
      'An LED ring on an adjustable-height tripod with a phone mount in the center, offering warm-to-cool color and brightness control. Even, front-facing light is the single biggest upgrade available to phone video, and this is the cheapest source of it.',
    whyItMadeTheList:
      'It made the list because on-camera obligations keep growing, and looking clearly lit reads as prepared in every context from class projects to internship screens.',
    skipIf: 'Skip this if you already own the webcam-and-desk-lamp setup for calls and never shoot phone video — this kit is phone-first.',
    ourPickName: 'UBeesize 12-Inch Ring Light with 62-Inch Tripod',
    ourPickWhy:
      'Full-height tripod instead of a desk stub, a 12-inch ring with real brightness range, and a remote shutter — the complete kit at a student price.',
    asin: 'B08L5VKNWR',
    image: 'https://m.media-amazon.com/images/I/61tKCv30rNL._AC_SL480_.jpg',
    amazonQuery: 'ring light with tripod stand phone holder',
  },
  {
    rank: 11,
    title: 'Presentation clicker',
    badge: 'The podium confidence device',
    summary:
      'Presenting while tethered to the laptop keyboard makes everyone look like a hostage. A wireless clicker frees you to stand where speakers stand, advance slides from anywhere in the room, and point with a laser like someone who has done this before.',
    whatItIs:
      'A pocket remote with a USB receiver that advances slides in every presentation app, plus a laser pointer. Zero setup, zero pairing drama — plug the receiver in and it works, which matters most in the two minutes before you present.',
    whyItMadeTheList:
      'It made the list because presentations are graded performances, and stage mechanics are the easiest part of the grade to buy.',
    skipIf: 'Skip this if you present twice a year — borrowing one from the class over-preparer is a time-honored system.',
    ourPickName: 'Logitech R400 Wireless Presenter',
    ourPickWhy:
      'The presenter remote the category standardized on: instant plug-and-play, intuitive buttons you can operate blind, and a red laser for the actual pointing.',
    asin: 'B002GHBUTK',
    image: 'https://m.media-amazon.com/images/I/51-7XfmB4ZL._AC_SL480_.jpg',
    amazonQuery: 'wireless presenter clicker powerpoint',
  },
  {
    rank: 12,
    title: 'Smart plugs',
    badge: 'The lazy-genius automation',
    summary:
      'Smart plugs are the cheapest entry into automation, and dorm life gives them real jobs: string lights on a sunset schedule, the fan on before you get home, the mug warmer guaranteed off, everything controllable from bed — which is where all dorm decisions are made.',
    whatItIs:
      'Wi-Fi outlet adapters controlled by phone app or voice assistant, with schedules and timers. The four-pack covers lights, fan, and two experiments. Check that they work with your phone ecosystem rather than requiring yet another hub.',
    whyItMadeTheList:
      'It made the list because turning the string lights off from inside the blankets is the kind of luxury that costs seven dollars per outlet and feels like the future.',
    skipIf: 'Skip these if your dorm Wi-Fi requires browser logins for devices — some campus networks fight smart plugs, so check the IT page first.',
    ourPickName: 'EIGHTREE Smart Plug (4-Pack)',
    ourPickWhy:
      'Works with the major voice assistants, a straightforward app with schedules, and a four-pack price that makes automating a whole dorm room trivial.',
    asin: 'B0B62LPR5Z',
    image: 'https://m.media-amazon.com/images/I/61N63ZDrGML._AC_SL480_.jpg',
    amazonQuery: 'smart plug 4 pack wifi',
  },
  {
    rank: 13,
    title: 'Magnetic phone wallet',
    badge: 'The two-pocket consolidation',
    summary:
      'Student ID, transit card, debit card, dorm key card — campus life runs on cards, and the magnetic phone wallet puts the essential three on the back of the one object nobody forgets. Tap into the dining hall with the phone in hand; done.',
    whatItIs:
      'A slim card holder that snaps magnetically to the phone or case, holding a few cards with RFID blocking. The magnet strength is the spec that matters; good ones survive pockets, bags, and the occasional drop without shedding cards.',
    whyItMadeTheList:
      'It made the list because losing a wallet and losing a phone are two separate disasters, and this merges them into one thing you check for constantly anyway.',
    skipIf: 'Skip this if your campus has gone full digital ID in the phone wallet — some have, and the physical card ride-along becomes redundant.',
    ourPickName: 'ESR MagSafe Wallet with RFID Blocking',
    ourPickWhy:
      'Strong magnets that hold through real backpack life, five-card capacity for the campus stack, and RFID blocking as the quiet bonus.',
    asin: 'B0D9W9VYPN',
    image: 'https://m.media-amazon.com/images/I/81jBhxxN1zL._AC_SL480_.jpg',
    amazonQuery: 'magsafe wallet card holder rfid',
  },
  {
    rank: 14,
    title: 'Rechargeable book light',
    badge: 'The lights-out reading fix',
    summary:
      'For reading after a roommate’s lights-out, nothing beats a clip-on book light: warm light on the page, darkness everywhere else. The rechargeable generation ended the coin-battery era, and the warm color modes ended the blue-glare-at-midnight problem.',
    whatItIs:
      'A small clip light with adjustable brightness and color temperature, a flexible neck, and USB charging. Clips to a book, a headboard, or a laptop screen edge. Amber modes are the late-night feature worth insisting on.',
    whyItMadeTheList:
      'It made the list because reading remains the quietest thing one person can do while another sleeps, and this is the tool that makes it invisible.',
    skipIf: 'Skip this if all your night reading happens on a Kindle with a front light — the device already solved it.',
    ourPickName: 'Gritin Rechargeable Book Light',
    ourPickWhy:
      'Three color temperatures with a memory function, a grippy clip, and a battery that lasts through a week of chapters per charge.',
    asin: 'B0C3BC4QG2',
    image: 'https://m.media-amazon.com/images/I/711p9Q6p0vL._AC_SL480_.jpg',
    amazonQuery: 'rechargeable book light clip',
  },
  {
    rank: 15,
    title: 'Mini desk vacuum',
    badge: 'The crumb department',
    summary:
      'Every desk where meals meet homework develops a crumb ecosystem — eraser dust, chip fragments, pencil shavings. The mini desk vacuum is a genuinely silly-looking gadget that removes them in ten seconds, which is why it keeps going viral and keeps getting used.',
    whatItIs:
      'A palm-size battery-powered vacuum for flat surfaces, strong enough for crumbs and paper debris, quiet enough for a library. It lives on the desk corner as a visual reminder that the desk can, in fact, be reset instantly.',
    whyItMadeTheList:
      'It made the list because desk maintenance either takes ten seconds or does not happen, and this is the ten-second version.',
    skipIf: 'Skip this if you do not eat at your desk. If you are sure. Really sure.',
    ourPickName: 'ODISTAR Desktop Vacuum Cleaner',
    ourPickWhy:
      'The best-known name in a novelty category it made practical: real pickup power for surface debris, USB rechargeable, and quiet enough to use mid-study-session.',
    asin: 'B07Q128V6W',
    image: 'https://m.media-amazon.com/images/I/51bbbt-YaEL._AC_SL480_.jpg',
    amazonQuery: 'mini desk vacuum cleaner',
  },
  {
    rank: 16,
    title: 'Laptop sleeve',
    badge: 'The cheap insurance layer',
    summary:
      'The least glamorous item here protects the most expensive one: a padded sleeve between the laptop and the chaos of a student backpack — water bottles, textbook corners, the toss onto the dorm floor. Ten dollars guarding a thousand.',
    whatItIs:
      'A shock-absorbing padded sleeve sized to your laptop, ideally water-repellent with a soft lining and an accessory pocket for the charger. It works inside the backpack or as a standalone carry for library runs.',
    whyItMadeTheList:
      'It made the list because laptop damage is a semester-derailing event with a ten-dollar prevention, and that ratio is the best on this entire page.',
    skipIf: 'Skip this only if your backpack has a genuinely padded, suspended laptop compartment — the good ones make a sleeve redundant.',
    ourPickName: 'MOSISO 14-Inch Laptop Sleeve',
    ourPickWhy:
      'The default sleeve brand on Amazon: dense padding, clean fit across common laptop sizes, and a front pocket that swallows the charger and mouse.',
    asin: 'B0DG8R4KMQ',
    image: 'https://m.media-amazon.com/images/I/71-1LJ816dL._AC_SL480_.jpg',
    amazonQuery: 'laptop sleeve 14 inch',
  },
]

const quickWins = [
  'Gadgets earn their place by removing a daily friction — the recorder, clicker, and label maker all pass that test. Novelty that solves nothing becomes drawer sediment by October.',
  'Check the syllabus and the campus IT page before buying: the calculator is often specified exactly, and some dorm networks fight smart plugs.',
  'The social gadgets — speaker, projector, photo printer — are best split with a roommate. One per room is the right number.',
]

const faqs = [
  {
    question: 'What are the most useful gadgets for school?',
    answer:
      'The consistently used ones solve daily problems: a good backpack, the required calculator, a laptop sleeve, and a charging setup. In the fun tier, the projector, speaker, and photo printer get the most real-world use because they are social — gadgets used with other people survive longer than gadgets used alone.',
  },
  {
    question: 'What back-to-school gadgets are worth it under $50?',
    answer:
      'Most of this list qualifies: the sleep headphones, book light, desk vacuum, LCD writing tablet, presentation clicker, smart plugs, magnetic wallet, label maker, and laptop sleeve all typically land under $50. The under-$50 tier is actually where back-to-school gadgets are strongest — the expensive tier belongs to core tech like laptops and tablets.',
  },
  {
    question: 'Is it okay to record lectures with a voice recorder?',
    answer:
      'Policies vary by school and by professor, so the reliable rule is to ask first. Many professors allow personal-use recording and many schools post official recordings anyway. Some states also have recording-consent laws that apply. Asking takes ten seconds and usually gets a yes.',
  },
  {
    question: 'What is a good back-to-school gift for a student?',
    answer:
      'From this list, the safest gifts are the JBL Go 3 speaker, a portable photo printer, or the ring light kit — fun, universally usable, and not dependent on knowing the student’s laptop or phone platform. For a practical gift, the backpack or a graphing calculator handles a real expense the student would rather not pay.',
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

export default function BestBackToSchoolGadgetsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Home & Kitchen', href: '/home-kitchen' },
          { label: 'Best Back-to-School Gadgets' },
        ]}
      />

      <section className="mb-10 rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(140deg,#fff7ed_0%,#ffffff_45%,#fef2f2_100%)] px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-700">
          College Student Series
        </p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          The best back-to-school gadgets — the ones still in use by November.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          The gadget test is simple: does it remove a daily friction, or does it just demo well in August? A USB-port backpack, a lecture recorder, and a laptop sleeve pass; most novelty tech does not. This list is sixteen passes, and most of them cost under fifty dollars.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          It runs from the syllabus-mandated calculator to the dorm projector that makes you the movie-night room, each with a specific Amazon product link plus a search link for comparing the field.
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
          <h2 className="text-3xl font-black text-slate-900">The 16 gadgets worth backpack space</h2>
          <p className="mt-3 text-lg leading-8 text-slate-700">
            Ordered from the daily workhorses to the social-life upgrades — with the honest skip-this-if on every single one, because the best gadget budget is the one that skips half the list.
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl font-black text-orange-700">
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
                      className="transition hover:text-orange-700"
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
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
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
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">Our Pick</p>
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
        <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fff7ed_100%)] p-6">
          <h2 className="text-3xl font-black text-slate-900">What to buy first, in order</h2>
          <ol className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
            <li><strong>1.</strong> Backpack, sleeve, and whatever the syllabus mandates — the required layer.</li>
            <li><strong>2.</strong> The academic force-multipliers — recorder, clicker, label maker.</li>
            <li><strong>3.</strong> The sleep-and-roommate diplomacy gear — sleep headphones, book light.</li>
            <li><strong>4.</strong> The social layer — speaker, projector, photo printer, split with the room.</li>
            <li><strong>5.</strong> The delight tier — smart plugs, desk vacuum, and friends, as budget allows.</li>
          </ol>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-slate-100">
          <h2 className="text-2xl font-black">Affiliate disclosure</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            BestPickZone participates in the Amazon Services LLC Associates Program. If you shop through links on this page, we may earn a commission at no extra cost to you.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Product picks link to the specific Amazon listing we would recommend; section headers link to Amazon search results so you can compare current prices and alternatives through back-to-school season.
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
          <Link href="/home-kitchen/best-tech-for-college-students" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-orange-700">
            Best tech for college students
          </Link>
          <Link href="/home-kitchen/best-dorm-room-essentials" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-orange-700">
            Best dorm room essentials
          </Link>
          <Link href="/home-kitchen/best-productivity-products-for-students" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-orange-700">
            Best productivity products for students
          </Link>
          <Link href="/tech/best-wireless-earbuds" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-orange-700">
            Best wireless earbuds
          </Link>
        </div>
      </section>
    </main>
  )
}
