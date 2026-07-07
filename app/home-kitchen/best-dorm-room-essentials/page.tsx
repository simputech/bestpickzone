import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/home-kitchen/best-dorm-room-essentials'
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
  'The best dorm room essentials for 2026: Twin XL bedding, a mattress topper that fixes the school mattress, storage that survives a shared room, and the small gear that makes freshman year easier.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best Dorm Room Essentials for College (2026) | BestPickZone',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'best dorm room essentials',
      'dorm room essentials list',
      'college dorm essentials',
      'twin xl dorm bedding',
      'dorm room must haves',
      'freshman dorm checklist',
      'dorm essentials amazon',
      'college packing list dorm',
      'dorm room setup essentials',
      'best things for a dorm room',
    ],
    openGraph: {
      title: 'Best Dorm Room Essentials for College',
      description: metaDescription,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Dorm Room Essentials for College',
      description:
        'A 16-product dorm checklist that skips the novelty junk: bedding, storage, sleep gear, and the fixes that make a shared room livable.',
    },
  },
  {
    category: 'home-kitchen',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Home & Kitchen',
    url: pageUrl,
    tags: ['dorm room', 'college essentials', 'twin xl bedding', 'dorm storage', 'back to school'],
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
    title: 'Twin XL sheet set',
    badge: 'The non-negotiable first buy',
    summary:
      'Almost every dorm bed in the country is Twin XL, and almost no sheets from home fit it. This is the one purchase that cannot wait until after move-in, because sleeping on a bare school mattress the first night is a rough way to start the semester.',
    whatItIs:
      'A Twin XL set means a fitted sheet cut for the extra-long 80-inch mattress, a flat sheet, and one pillowcase. For a dorm, the practical filters are deep-pocket corners that stay put on a plastic-wrapped mattress, fabric that survives weekly hot-water washes, and a price low enough that owning two sets is realistic.',
    whyItMadeTheList:
      'Sheets top the list because they are the single most-used item in the room and the most common thing freshmen forget is a different size than their bed at home.',
    skipIf: 'Skip this if your housing assignment uses full-size beds — some apartment-style dorms do, so check the housing portal before buying.',
    ourPickName: 'Bedsure Twin XL Sheet Set',
    ourPickWhy:
      'A repeat Amazon top seller in the dorm-bedding category because it hits the right combination: deep pockets, soft brushed microfiber that handles dorm laundry machines, and a price that makes a backup set easy to justify.',
    asin: 'B09F38BJRC',
    image: 'https://m.media-amazon.com/images/I/81CyI+aWMtL._AC_SL480_.jpg',
    amazonQuery: 'twin xl sheet set dorm',
  },
  {
    rank: 2,
    title: 'Mattress topper',
    badge: 'The sleep-quality rescue',
    summary:
      'Dorm mattresses are built to survive decades of students, not to be comfortable. A memory foam topper is the difference between a bed you tolerate and a bed you actually sleep in, and it costs less than most textbooks.',
    whatItIs:
      'A two-to-three-inch foam layer sized for Twin XL that sits under the fitted sheet. Gel-infused versions run cooler, which matters in dorms without air conditioning. Look for one that ships compressed and expands within a day, since move-in schedules rarely leave time for anything fussier.',
    whyItMadeTheList:
      'Ask any sophomore what they wish they had bought sooner and a topper is usually the first answer. Bad sleep compounds across a semester in a way no other dorm purchase does.',
    skipIf: 'Skip this if your school publishes mattress specs showing newer pillow-top beds — a few private colleges have upgraded, and a thick topper on a soft bed feels like quicksand.',
    ourPickName: 'Linenspa 3-Inch Gel Memory Foam Topper (Twin XL)',
    ourPickWhy:
      'One of the most-reviewed toppers on Amazon in this size, and the 3-inch gel version specifically addresses the two dorm complaints that matter: a rock-hard base and a hot room.',
    asin: 'B07MY2L58J',
    image: 'https://m.media-amazon.com/images/I/81H3-5WU+GL._AC_SL480_.jpg',
    amazonQuery: 'twin xl mattress topper gel memory foam',
  },
  {
    rank: 3,
    title: 'Comforter set',
    badge: 'The whole-room mood setter',
    summary:
      'The comforter is the largest visible object in a dorm room, which makes it the cheapest way to make cinder-block housing feel deliberate instead of institutional. It also has to survive being sat on by every visitor who ever enters the room.',
    whatItIs:
      'For dorm life, a down-alternative comforter beats real down: it machine washes without drama, handles allergies better, and costs a fraction as much. Sets that bundle shams are worth it here because the bed doubles as the couch in almost every dorm.',
    whyItMadeTheList:
      'It earns a top-five spot for doing double duty — warmth at night, furniture upholstery by day. A washable one saves a spring-semester disaster.',
    skipIf: 'Skip the heavy fill weights if your dorm is famous for aggressive radiators — a lightweight or all-season version is safer than a winter-weight one.',
    ourPickName: 'Bare Home Twin XL Down-Alternative Comforter Set',
    ourPickWhy:
      'A long-running Amazon favorite in the Twin XL category, with an all-season fill weight and a washable build that fits how dorm bedding actually gets treated.',
    asin: 'B00Q5MSQQM',
    image: 'https://m.media-amazon.com/images/I/81RuMB66VNL._AC_SL480_.jpg',
    amazonQuery: 'twin xl comforter set dorm',
  },
  {
    rank: 4,
    title: 'Bedside caddy',
    badge: 'The lofted-bed problem solver',
    summary:
      'Most dorm beds end up lofted or bunked, which means there is no nightstand and no outlet within reach. A bedside caddy hangs off the frame and holds the phone, glasses, remote, and water bottle that would otherwise live on the floor six feet down.',
    whatItIs:
      'A fabric organizer that straps to the bed frame with pockets sized for the stuff you reach for half-asleep. The good ones have a stiff insert so the pockets hold their shape, plus a dedicated water-bottle pocket that will not tip.',
    whyItMadeTheList:
      'This is a five-dollar-feeling product that solves a real architectural problem in nearly every dorm. Nobody climbs down a bunk ladder at 2 a.m. to grab a charger twice.',
    skipIf: 'Skip this if your bed sits at normal height next to a desk — the desk edge already does this job.',
    ourPickName: 'Lilithye Bedside Caddy with Bottle Holder',
    ourPickWhy:
      'The fixed-strap design matters on metal dorm frames where loose-hanging caddies slide around, and the bottle holder is the detail that separates it from generic versions.',
    asin: 'B0CGLRJFMW',
    image: 'https://m.media-amazon.com/images/I/71Kvqrm3aqL._AC_SL480_.jpg',
    amazonQuery: 'bedside caddy dorm bunk bed',
  },
  {
    rank: 5,
    title: 'Clip-on fan',
    badge: 'The no-AC survival tool',
    summary:
      'A huge share of dorm buildings, especially older ones on East Coast and Midwest campuses, have no air conditioning. August move-in week in one of those buildings is genuinely brutal, and a clip-on fan pointed at the bed is the fix that fits in a dorm.',
    whatItIs:
      'A small USB-powered fan with a clamp that grips a bed rail, desk edge, or shelf. Clip mounting matters more than power here because floor space is already spoken for, and USB power means it can run off the same power strip as everything else.',
    whyItMadeTheList:
      'It made the list because the first two weeks and last month of the school year are hot in most of the country, and box fans do not fit lofted-bed life.',
    skipIf: 'Skip this if your building has central air — check the housing site, because plenty of newer residence halls do.',
    ourPickName: 'BESKAR Small Clip-On USB Fan',
    ourPickWhy:
      'A consistent Amazon best seller in the clip-fan category, with three speeds and a clamp that holds onto round bunk rails — the exact mounting situation a lofted dorm bed creates.',
    asin: 'B089Q279R3',
    image: 'https://m.media-amazon.com/images/I/718w-RQMEyL._AC_SL480_.jpg',
    amazonQuery: 'clip on fan dorm bed usb',
  },
  {
    rank: 6,
    title: 'String lights',
    badge: 'The overhead-fluorescent antidote',
    summary:
      'Dorm rooms come with one lighting option: a ceiling fixture that makes everything look like a waiting room. String lights are the standard fix because they are cheap, damage-free to hang, and make the room feel like a place someone chose to live.',
    whatItIs:
      'USB-powered fairy lights or LED strips that mount with adhesive clips or hooks rather than nails, since residence halls fine students for wall damage. Color-changing versions with a remote have become the default because one set covers study lighting and weekend lighting.',
    whyItMadeTheList:
      'Lighting is the fastest way to make a shared concrete box feel personal, and this is the rare decor item that shows up on nearly every real student packing list.',
    skipIf: 'Skip anything with exposed incandescent bulbs — many housing codes ban them, and LED versions run cooler anyway.',
    ourPickName: 'Minetom Color-Changing Fairy String Lights',
    ourPickWhy:
      'USB-powered with a remote and 33 feet of wire, which is enough to run a full perimeter of a standard double room without daisy-chaining a second set.',
    asin: 'B07STZQ744',
    image: 'https://m.media-amazon.com/images/I/81qmsBWBxrL._AC_SL480_.jpg',
    amazonQuery: 'led string lights dorm room usb',
  },
  {
    rank: 7,
    title: 'Shower caddy',
    badge: 'The communal-bathroom kit',
    summary:
      'Community bathrooms mean carrying everything you need down the hall, every day, and setting it somewhere that is not the floor of a shared shower stall. A good portable caddy makes that routine tolerable instead of grim.',
    whatItIs:
      'Either a perforated plastic tote that drains and rinses clean, or a quick-dry mesh version that hangs. Plastic wins in most dorms because it stands upright in the stall, survives being dropped, and never develops the mildew smell mesh caddies are famous for.',
    whyItMadeTheList:
      'This is a daily-use item for anyone in traditional housing, and the difference between a good one and a grocery bag is the difference between a routine and a chore.',
    skipIf: 'Skip this if you land suite-style housing with a private bathroom — a drawer does the job better.',
    ourPickName: 'BYUNER Portable Shower Caddy',
    ourPickWhy:
      'Drain holes, a comfortable handle, and adjustable dividers that keep a tall shampoo bottle from tipping the whole basket — the small design details that matter by week three.',
    asin: 'B0CJ2P5GBM',
    image: 'https://m.media-amazon.com/images/I/61bGldzWByL._AC_SL480_.jpg',
    amazonQuery: 'portable shower caddy dorm',
  },
  {
    rank: 8,
    title: 'Bath towel set',
    badge: 'The overlooked daily workhorse',
    summary:
      'Towels sound like an afterthought until you are drying off with one that has been damp since Tuesday. Dorm towels live a hard life — hung on a single hook in a humid room — so quick-dry performance beats plushness here.',
    whatItIs:
      'A set of at least two bath towels plus hand towels and washcloths, in a weight that dries overnight on a hook. Mid-weight cotton around 500 GSM is the sweet spot; ultra-plush hotel towels stay damp too long in a room with no towel bar and no airflow.',
    whyItMadeTheList:
      'A full set made the list because laundry happens weekly at best in college, and owning enough towels to rotate is what keeps the room from smelling like a locker room.',
    skipIf: 'Skip the oversized bath-sheet upgrades — they take forever to dry and hog the limited hook space behind a dorm door.',
    ourPickName: 'Utopia Towels 8-Piece Set',
    ourPickWhy:
      'One of the highest-volume towel listings on Amazon, and the 8-piece configuration — two bath, two hand, four washcloths — is exactly one laundry cycle of buffer for one person.',
    asin: 'B00GQP0XTQ',
    image: 'https://m.media-amazon.com/images/I/91xpBpKYs8L._AC_SL480_.jpg',
    amazonQuery: 'bath towel set quick dry college',
  },
  {
    rank: 9,
    title: 'Mini fridge',
    badge: 'The roommate-diplomacy appliance',
    summary:
      'A mini fridge is the most expensive item on this list and the one most worth coordinating with a roommate before buying. One shared 3-cubic-foot fridge covers two people; two duplicate fridges waste the scarcest resource in the room, which is floor space.',
    whatItIs:
      'For a dorm, the target is a 3.2-cubic-foot compact fridge with a chiller compartment, sized to fit under a raised bed or beside a desk. Check your housing rules first: most schools cap fridge size around 3.5 to 4.5 cubic feet and some require Energy Star ratings.',
    whyItMadeTheList:
      'It made the list because dining halls close early, and cold storage for leftovers, drinks, and medication is a quality-of-life jump nothing else on this list replaces.',
    skipIf: 'Skip this if your hall rents MicroFridge units through housing — renting is often cheaper than buying and moving one twice a year.',
    ourPickName: 'Frigidaire Retro 3.2 Cu Ft Compact Fridge',
    ourPickWhy:
      'A dorm-legal size from a recognizable appliance brand, with a chiller compartment for the freezer-adjacent basics and a retro shape that reads as decor instead of equipment.',
    asin: 'B084GSNPH1',
    image: 'https://m.media-amazon.com/images/I/51H8sG8rFxL._AC_SL480_.jpg',
    amazonQuery: 'mini fridge dorm 3.2 cu ft',
  },
  {
    rank: 10,
    title: 'Surge protector tower',
    badge: 'The outlet multiplier',
    summary:
      'A standard dorm room offers two students roughly four outlets, usually behind furniture. Between laptops, phones, lamps, a fridge, and a fan, outlet math fails by day one. A tower surge protector with USB ports is the modern answer.',
    whatItIs:
      'A vertical power tower with a dozen or so AC outlets plus USB-A and USB-C ports, on a long cord that reaches from the wall to the desk. The tower shape matters in a dorm because bulky adapters block half the outlets on a flat strip.',
    whyItMadeTheList:
      'Every device on this list needs power, which makes this the piece of infrastructure the rest of the room runs on. USB ports built in also mean fewer wall bricks to lose.',
    skipIf: 'Skip daisy-chaining two strips together instead — that specific setup is banned by nearly every campus fire code.',
    ourPickName: 'Surge Protector Tower with USB Ports and 10FT Cord',
    ourPickWhy:
      'The 10-foot cord is the headline feature for a dorm, where the only free outlet is never near the desk, and the night-light base is surprisingly useful in a shared room after lights-out.',
    asin: 'B09J86D71C',
    image: 'https://m.media-amazon.com/images/I/61NV3WimsxL._AC_SL480_.jpg',
    amazonQuery: 'surge protector power strip tower usb dorm',
  },
  {
    rank: 11,
    title: 'White noise machine',
    badge: 'The shared-wall sleep saver',
    summary:
      'Dorms are loud in a way nothing at home prepares you for: hallway conversations at 1 a.m., a roommate on a different schedule, doors that slam by design. A white noise machine is the cheapest intervention that actually protects sleep in that environment.',
    whatItIs:
      'A small speaker that generates steady background sound — true white noise, fans, rain — to mask irregular hallway noise. Non-looping sound matters because loops develop an audible seam that becomes its own irritation. Volume range matters more than sound variety.',
    whyItMadeTheList:
      'Sleep quality is the quiet variable behind grades and mood, and this is the one product on the list aimed squarely at it. It also signals a truce to a roommate with a different bedtime.',
    skipIf: 'Skip this if you already sleep with earbuds or a fan running — you have a white noise machine, it just has another name.',
    ourPickName: 'Magicteam White Noise Machine',
    ourPickWhy:
      'Twenty non-looping sounds, a memory function that holds your settings, and a price point around what two coffee runs cost — the value pick in the category by a wide margin.',
    asin: 'B07RWRJ4XW',
    image: 'https://m.media-amazon.com/images/I/71CBN1gUirL._AC_SL480_.jpg',
    amazonQuery: 'white noise machine dorm sleep',
  },
  {
    rank: 12,
    title: 'Under-bed storage bins',
    badge: 'The square-footage hack',
    summary:
      'The space under a raised dorm bed is the biggest unclaimed real estate in the room, and it either becomes organized storage or a debris field. Zippered storage bins decide which one happens.',
    whatItIs:
      'Large soft-sided containers with clear windows and sturdy zippers, sized to slide under a bed frame. For a dorm, soft-sided beats rigid plastic totes because they fold flat in May when everything has to fit in a car, and clear panels end the mystery-bin problem.',
    whyItMadeTheList:
      'It made the list because out-of-season clothes, extra bedding, and suitcase overflow have to live somewhere, and closet space in a shared room is measured in inches.',
    skipIf: 'Skip this until after move-in if your bed height is unknown — clearance under an unlofted frame can be as little as six inches.',
    ourPickName: 'Budding Joy 90L Under-Bed Storage Bags (2-Pack)',
    ourPickWhy:
      'The 90-liter size swallows an entire off-season wardrobe per bag, and the reinforced handles survive being dragged out from under a bed all year — the exact failure point of cheaper versions.',
    asin: 'B09Q38H2J4',
    image: 'https://m.media-amazon.com/images/I/81Fap+ZlUIL._AC_SL480_.jpg',
    amazonQuery: 'under bed storage bins dorm',
  },
  {
    rank: 13,
    title: 'Over-the-door hooks',
    badge: 'The zero-damage vertical storage',
    summary:
      'Dorm walls cannot take nails and closet rods are always full, which leaves the back of the door as prime storage. A hook rack that slips over the door adds hanging space for towels, jackets, and bags without touching a wall.',
    whatItIs:
      'A metal rack with a padded top bracket that fits over a standard door, holding five or six items. The details that matter: a low-profile bracket so the door still closes flush, and hooks deep enough for a winter coat rather than just a lanyard.',
    whyItMadeTheList:
      'Vertical storage is the only kind of storage a dorm has left after the furniture is placed, and this is the cheapest, most reversible way to claim it.',
    skipIf: 'Skip this if your door has an unusually thick fire-rated top edge — measure first, because some newer residence halls use doors the standard bracket cannot grip.',
    ourPickName: 'Optish Over-the-Door Hook Rack',
    ourPickWhy:
      'A slim bracket that lets the door close normally and hooks spaced far enough apart that a bath towel and a backpack can hang side by side without overlapping.',
    asin: 'B0DG7XXMV7',
    image: 'https://m.media-amazon.com/images/I/51MiPn6BB2L._AC_SL480_.jpg',
    amazonQuery: 'over the door hooks dorm',
  },
  {
    rank: 14,
    title: 'Desk lamp with outlets',
    badge: 'The late-night roommate treaty',
    summary:
      'When one roommate sleeps and the other has a problem set due, the ceiling light is not an option. A desk lamp is basic dorm civility — and the current generation doubles as a charging station, which solves a second problem with the same footprint.',
    whatItIs:
      'An LED desk lamp with adjustable brightness and color temperature, plus built-in AC outlets and USB ports in the base. That combination matters in a dorm because the desk is usually far from a free outlet, and every surface has to justify itself twice.',
    whyItMadeTheList:
      'It made the list for being the rare product that improves grades, sleep diplomacy, and outlet math simultaneously. Warm-light settings late at night are easier on both people in the room.',
    skipIf: 'Skip the outlet-base versions if you already bought the surge tower above and your desk sits next to it — a simple clamp lamp frees up more desk space.',
    ourPickName: 'Addtam LED Desk Lamp with Power Strip Base',
    ourPickWhy:
      'Three AC outlets and four USB ports built into the lamp base turn one desk corner into the charging hub for the whole bedside, which is exactly the consolidation a shared desk needs.',
    asin: 'B0D2LGK82V',
    image: 'https://m.media-amazon.com/images/I/61RTVGWbTzL._AC_SL480_.jpg',
    amazonQuery: 'desk lamp usb charging port outlet dorm',
  },
  {
    rank: 15,
    title: 'Laundry backpack',
    badge: 'The laundry-day upgrade',
    summary:
      'The dorm laundry room is never on your floor. It is three floors down, across a courtyard, and the machines on your level are broken. A laundry bag with backpack straps turns that trip from a two-armed struggle into a normal walk.',
    whatItIs:
      'An oversized duffel-style bag with real shoulder straps, a capacity around two weeks of clothes, and a pocket for detergent pods and quarters or a laundry card. Backpack carry is the entire point — hampers and baskets assume an elevator and free hands.',
    whyItMadeTheList:
      'Laundry is the chore students defer longest, and lowering the friction of the trip is the only thing that actually changes the behavior. This is the cheapest behavioral intervention on the list.',
    skipIf: 'Skip this if your building has in-unit or same-floor laundry — a collapsible hamper is more comfortable for a thirty-foot trip.',
    ourPickName: 'Dalykate Backpack Laundry Bag',
    ourPickWhy:
      'Padded straps that do not dig in under twenty pounds of clothes, a mesh pocket for supplies, and a top opening wide enough to actually load a machine from — the three things cheap drawstring bags get wrong.',
    asin: 'B08R7FP1HT',
    image: 'https://m.media-amazon.com/images/I/61p4SubT6CS._AC_SL480_.jpg',
    amazonQuery: 'laundry backpack bag college dorm',
  },
  {
    rank: 16,
    title: 'First aid kit',
    badge: 'The one your parents were right about',
    summary:
      'Nobody plans to need bandages, cold medicine, or a thermometer at midnight, which is exactly when campus health services are closed. A compact first aid kit is the item on this list most likely to be borrowed by the entire floor.',
    whatItIs:
      'A zippered kit stocked with the dorm basics: adhesive bandages, antiseptic wipes, pain relievers, tweezers, and a digital thermometer. College-specific kits are worth the small premium over generic car kits because they lean toward illness care, not roadside injuries.',
    whyItMadeTheList:
      'It made the list because the first flu that sweeps a residence hall finds everyone unprepared, and the whole kit costs less than one urgent-care copay.',
    skipIf: 'Skip the giant 300-piece kits — they are padded with fifty of the same bandage, and dorm storage space is too scarce for filler.',
    ourPickName: 'College First Aid Kit for Dorm Rooms',
    ourPickWhy:
      'Purpose-built for exactly this setting: compact enough for a desk drawer, stocked toward the sick-day and minor-scrape scenarios dorm life actually produces.',
    asin: 'B01E53NB9O',
    image: 'https://m.media-amazon.com/images/I/71TWv2-3q7L._AC_SL480_.jpg',
    amazonQuery: 'first aid kit college dorm',
  },
]

const quickWins = [
  'Buy the Twin XL bedding stack — sheets, topper, comforter — before anything decorative. Sleep is the foundation everything else sits on.',
  'Coordinate the big items with your roommate first. One mini fridge and one fan per room; duplicate appliances are the classic move-in mistake.',
  'Everything here mounts, clips, hangs, or slides under something. Floor space is the scarcest resource in a dorm, so buy vertical.',
]

const faqs = [
  {
    question: 'What do freshmen actually forget to bring to a dorm?',
    answer:
      'The most common misses are Twin XL sheets (regular twin sheets do not fit most dorm mattresses), a mattress topper, a surge protector with enough outlets, shower shoes and a caddy for communal bathrooms, and basic medicine for the first illness of the semester. Decor gets remembered; infrastructure gets forgotten.',
  },
  {
    question: 'What is worth spending more on for a dorm room?',
    answer:
      'Sleep gear justifies the biggest share of the budget: the mattress topper, sheets, and something to manage noise. Those get used eight hours a day for two semesters. Cheap versions of storage and hooks perform nearly as well as expensive ones, so save there and spend on the bed.',
  },
  {
    question: 'What appliances are usually allowed in dorm rooms?',
    answer:
      'Most schools allow mini fridges up to roughly 3.5 to 4.5 cubic feet, fans, and low-wattage lamps. Commonly banned items include hot plates, toasters, space heaters, and candles. Microwaves and kettles vary by school, so check your specific housing handbook before buying anything with a heating element.',
  },
  {
    question: 'How much does it cost to set up a dorm room?',
    answer:
      'Covering every category on this list typically runs a few hundred dollars, with the mini fridge and bedding stack taking the largest share. Splitting the fridge with a roommate and skipping the categories your building makes unnecessary — like a fan in an air-conditioned hall — trims it meaningfully.',
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

export default function BestDormRoomEssentialsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Home & Kitchen', href: '/home-kitchen' },
          { label: 'Best Dorm Room Essentials' },
        ]}
      />

      <section className="mb-10 rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(140deg,#eef2ff_0%,#ffffff_45%,#fdf4ff_100%)] px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-indigo-700">
          College Student Series
        </p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          The best dorm room essentials, ranked by what actually gets used all year.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          If you only buy three things before move-in, buy Twin XL sheets, a mattress topper, and a surge protector — the sleep stack and the power stack. Everything else on this list earns its spot by solving a specific dorm problem: no air conditioning, no nightstand, no wall nails allowed, and a laundry room three floors away.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          This is a 16-product list built around how dorms actually work, not a 60-item packing dump. Every pick links to a specific Amazon product we would point a freshman at, plus a search link if you want to compare the current field.
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
          <h2 className="text-3xl font-black text-slate-900">The 16 dorm essentials worth packing</h2>
          <p className="mt-3 text-lg leading-8 text-slate-700">
            Ranked roughly in the order a freshman should buy them: sleep first, power second, bathroom logistics third, then the storage and comfort layer that makes a shared 180-square-foot room feel workable by October.
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xl font-black text-indigo-700">
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
                      className="transition hover:text-indigo-700"
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
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
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
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">Our Pick</p>
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
        <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#eef2ff_100%)] p-6">
          <h2 className="text-3xl font-black text-slate-900">What to buy first, in order</h2>
          <ol className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
            <li><strong>1.</strong> Twin XL sheets, topper, and comforter — the bed is the one thing you use every single day.</li>
            <li><strong>2.</strong> Surge protector tower — nothing else works without outlets, and dorms never have enough.</li>
            <li><strong>3.</strong> Shower caddy and towels — communal bathroom logistics start on night one.</li>
            <li><strong>4.</strong> Fan and white noise machine — temperature and noise are the two sleep killers dorms are built to produce.</li>
            <li><strong>5.</strong> Storage, hooks, and the rest — solvable after move-in, once you can see the actual room.</li>
          </ol>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-slate-100">
          <h2 className="text-2xl font-black">Affiliate disclosure</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            BestPickZone participates in the Amazon Services LLC Associates Program. If you shop through links on this page, we may earn a commission at no extra cost to you.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Product picks link to the specific Amazon listing we would recommend; the section headers link to Amazon search results so you can compare current prices and alternatives, since dorm-category listings shift constantly through the back-to-school season.
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
          <Link href="/home-kitchen" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-indigo-700">
            Explore all Home &amp; Kitchen guides
          </Link>
          <Link href="/home-kitchen/best-study-desk-essentials" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-indigo-700">
            Best study desk essentials
          </Link>
          <Link href="/tech/best-laptops-for-college-students" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-indigo-700">
            Best laptops for college students
          </Link>
          <Link href="/wfh/best-products-for-your-home-office" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-indigo-700">
            Best products for a home office
          </Link>
        </div>
      </section>
    </main>
  )
}
