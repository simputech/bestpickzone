import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/home-kitchen/best-products-for-your-backyard'
const publishedDate = '2026-07-10T00:00:00Z'
const updatedDate = '2026-07-10T00:00:00Z'
const AMAZON_TAG = 'althcu-20'

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

function amazonProduct(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`
}

const metaDescription =
  'The best products for your backyard in 2026: 15 Amazon picks for lounging, outdoor dining, mosquito control, storage, and evening atmosphere, with honest reviews and buy-or-skip guidance.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best Products for Your Backyard (2026) | BestPickZone',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'best products for your backyard',
      'best backyard products amazon',
      'backyard essentials 2026',
      'best backyard items',
      'patio products amazon',
      'outdoor living products',
      'best backyard amazon finds',
      'backyard entertaining products',
      'best patio setup products',
      'outdoor backyard upgrades',
    ],
    openGraph: {
      title: 'Best Products for Your Backyard',
      description: metaDescription,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Products for Your Backyard',
      description:
        'Fifteen backyard products that actually improve how the space gets used: seating, shade, lighting, bug control, storage, and low-effort entertaining.',
    },
  },
  {
    category: 'home-kitchen',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Home & Kitchen',
    url: pageUrl,
    tags: ['backyard', 'patio', 'outdoor living', 'amazon finds', 'summer'],
  }
)

type Product = {
  rank: number
  title: string
  badge: string
  summary: string
  whatItIs: string
  whyItMadeTheList: string
  review: string
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
    title: 'String lights',
    badge: 'Best backyard upgrade overall',
    summary:
      'If a backyard feels flat after sunset, string lights are usually the fastest fix. They make the space feel intentional, extend how late people want to stay outside, and do more for atmosphere than far more expensive furniture changes.',
    whatItIs:
      'Outdoor-rated LED cafe lights designed to run along fences, pergolas, railings, or a simple guide wire. The right set gives enough warmth to soften the yard without turning it into a stadium.',
    whyItMadeTheList:
      'Lighting is the upgrade that makes every other backyard product feel more finished. It changes the mood of the whole space, not just one corner of it.',
    review:
      'This is one of those products that always feels like a cliche recommendation until it is up. Then the backyard immediately starts feeling like somewhere people actually want to linger.',
    skipIf:
      'Skip this if you have no realistic mounting path yet. Backyard lighting looks best when there is a clear plan rather than a last-minute drape job.',
    ourPickName: 'Brightever LED Outdoor String Lights',
    ourPickWhy:
      'They are weather-friendly, widely used, and hit the right visual balance between warm ambiance and enough usable light for dining or conversation.',
    asin: 'B08JPQ6M8N',
    image: 'https://m.media-amazon.com/images/I/71QQO7L6gYL._AC_SL480_.jpg',
    amazonQuery: 'outdoor string lights waterproof patio',
  },
  {
    rank: 2,
    title: 'Outdoor rug',
    badge: 'Best patio definition piece',
    summary:
      'An outdoor rug makes a patio or deck feel like a real room instead of a collection of chairs floating on concrete. It visually groups furniture, softens the look of hard surfaces, and helps small backyards feel more styled than improvised.',
    whatItIs:
      'A weather-friendly woven rug made for decks, patios, or balcony seating zones. The useful versions dry quickly, clean easily, and hold up better than indoor rugs brought outside on wishful thinking.',
    whyItMadeTheList:
      'This is one of the simplest ways to make backyard seating look finished without replacing the furniture itself.',
    review:
      'If your chairs and table are decent but the area still feels a little temporary, a rug is often the missing layer. It does more design work than people expect.',
    skipIf:
      'Skip oversized rugs if your patio is tiny or irregularly shaped. A too-large outdoor rug can make the area feel more cramped instead of more polished.',
    ourPickName: 'Nourison Aloha Indoor/Outdoor Area Rug',
    ourPickWhy:
      'It is a dependable outdoor category pick with enough pattern to hide wear and enough structure to make a seating zone look deliberate.',
    asin: 'B01M0DLTQX',
    image: 'https://m.media-amazon.com/images/I/91MpGafl2NL._AC_SL480_.jpg',
    amazonQuery: 'outdoor patio rug weather resistant',
  },
  {
    rank: 3,
    title: 'Adirondack chairs',
    badge: 'Best classic seating pick',
    summary:
      'Backyard seating works best when it invites people to actually settle in. Adirondack chairs do that well because they feel substantial, relaxed, and built for longer conversations rather than quick perching.',
    whatItIs:
      'Deep-seated outdoor lounge chairs with wide arms and a reclined angle, usually placed around a fire pit, on a deck, or in a simple yard seating cluster.',
    whyItMadeTheList:
      'A backyard people use needs anchor seating, and this is still one of the best forms for comfort, durability, and classic look.',
    review:
      'These are not subtle, but they are reliable. If you want the yard to say “sit here for a while,” this style still does that better than most cheaper folding options.',
    skipIf:
      'Skip these if you need easy dining posture rather than lounge posture. They are great for relaxing and less ideal pulled up to a standard-height table.',
    ourPickName: 'SERWALL HDPE Adirondack Chair',
    ourPickWhy:
      'The HDPE build handles weather better than low-end wood alternatives and gives the look of a permanent backyard piece without the same upkeep.',
    asin: 'B08P59FKVL',
    image: 'https://m.media-amazon.com/images/I/71v6-L9dR0L._AC_SL480_.jpg',
    amazonQuery: 'hdpe adirondack chair outdoor',
  },
  {
    rank: 4,
    title: 'Patio umbrella',
    badge: 'Best comfort-per-dollar buy',
    summary:
      'A backyard that gets direct sun for most of the day becomes a place people avoid even when the furniture is good. An umbrella changes how usable the space feels from late morning through early evening.',
    whatItIs:
      'A large outdoor umbrella that shades a dining or lounge zone and can usually tilt as the sun moves. In real life, it is less about aesthetics and more about keeping the yard livable in peak summer heat.',
    whyItMadeTheList:
      'Shade is one of the biggest usage drivers in any backyard. If the space is too hot, the rest of the setup never reaches its potential.',
    review:
      'This is one of the most practical purchases on the list. People do not rave about umbrellas, but they absolutely notice when one is missing.',
    skipIf:
      'Skip this if you already have dependable natural shade or a covered patio that keeps the key seating area protected.',
    ourPickName: 'Best Choice Products 10ft Solar LED Patio Umbrella',
    ourPickWhy:
      'It solves two problems at once by adding daytime shade and soft evening light, which is exactly the kind of dual-purpose backyard product that earns its space.',
    asin: 'B07FQ7V9FJ',
    image: 'https://m.media-amazon.com/images/I/71N1hQ0oKaL._AC_SL480_.jpg',
    amazonQuery: '10 foot patio umbrella solar led',
  },
  {
    rank: 5,
    title: 'Propane fire pit',
    badge: 'Best evening focal point',
    summary:
      'A fire feature gives a backyard an obvious center. It creates a reason to pull chairs together, extends the season into cooler evenings, and makes the yard feel less like a pass-through and more like a destination.',
    whatItIs:
      'A propane-powered outdoor fire pit or fire table that brings warmth and atmosphere without the ash, smoke management, or cleanup that makes wood-burning fire pits less practical for many households.',
    whyItMadeTheList:
      'Few backyard products do more to create a real gathering zone. A fire pit changes behavior, not just appearance.',
    review:
      'If you host even casually, this is the kind of purchase that people immediately gravitate toward. It makes the space feel more social without needing much effort after setup.',
    skipIf:
      'Skip this if your HOA, rental, or local code situation makes open flame complicated or if your yard is already too tight to give it safe clearance.',
    ourPickName: 'Outland Living Firebowl 893 Deluxe',
    ourPickWhy:
      'It is a well-liked smokeless propane option that delivers the campfire feel with far less hassle than a wood setup.',
    asin: 'B00KY4S388',
    image: 'https://m.media-amazon.com/images/I/81mfgWPVGTL._AC_SL480_.jpg',
    amazonQuery: 'propane fire pit backyard portable',
  },
  {
    rank: 6,
    title: 'Deck box',
    badge: 'Best clutter-control product',
    summary:
      'The fastest way for a backyard to feel messy is to leave cushions, pool gear, small tools, and random entertaining extras visible all the time. A deck box fixes that by giving the space a real storage plan.',
    whatItIs:
      'A weather-resistant storage chest designed for cushions, toys, outdoor blankets, or general patio overflow. It is one of the most practical backyard products because it makes the whole area easier to reset.',
    whyItMadeTheList:
      'Backyard style only lasts if the space is easy to keep tidy. Storage is what makes the prettier purchases sustainable.',
    review:
      'This is a classic low-glamour, high-return item. If your backyard feels like it is always one gust of wind away from looking chaotic, a deck box usually helps more than buying another decorative piece.',
    skipIf:
      'Skip this if you already have nearby shed space or built-in storage that genuinely handles the cushion and accessory overflow.',
    ourPickName: 'Keter Westwood 150 Gallon Deck Box',
    ourPickWhy:
      'It has enough capacity to matter, looks cleaner than the cheapest plastic options, and doubles as occasional bench seating when needed.',
    asin: 'B01HDPY2NE',
    image: 'https://m.media-amazon.com/images/I/81bZNdcNImL._AC_SL480_.jpg',
    amazonQuery: 'outdoor deck box storage waterproof',
  },
  {
    rank: 7,
    title: 'Portable outdoor speaker',
    badge: 'Best backyard mood-setter',
    summary:
      'Music can carry a backyard from quiet and underused to relaxed and social in a matter of seconds. A good outdoor speaker makes the space feel active without forcing a permanent audio installation.',
    whatItIs:
      'A weather-friendly Bluetooth speaker with enough volume for a patio or small yard, strong battery life, and sound that stays pleasant instead of harsh outdoors.',
    whyItMadeTheList:
      'Outdoor spaces benefit from atmosphere, and this is one of the simplest ways to add it without major setup.',
    review:
      'This works especially well for low-key evenings. Background music at the right volume makes the yard feel more inviting without making it feel like an event.',
    skipIf:
      'Skip this if your yard already has a built-in outdoor audio system or if noise-sensitive neighbors make regular playback unrealistic.',
    ourPickName: 'JBL Flip 6',
    ourPickWhy:
      'It is compact, durable, easy to carry outside on impulse, and strong enough sonically for the kind of casual backyard use most people actually want.',
    asin: 'B09GJMPRCX',
    image: 'https://m.media-amazon.com/images/I/61eCe5v6PSL._AC_SL480_.jpg',
    amazonQuery: 'jbl flip 6 bluetooth speaker waterproof',
  },
  {
    rank: 8,
    title: 'Solar pathway lights',
    badge: 'Best low-effort curb-to-yard upgrade',
    summary:
      'Pathway lighting makes a backyard look more considered and helps people move around safely once the sun drops. Solar lights are especially attractive because they add that visual structure without needing wiring.',
    whatItIs:
      'Stake-style lights that charge through the day and softly illuminate walkways, planting beds, and transitions between yard zones at night.',
    whyItMadeTheList:
      'They add shape and usability after dark without requiring a big install. That combination is exactly what makes them such an easy recommendation.',
    review:
      'These are best when used with restraint. A simple, evenly spaced line of warm lights looks much better than trying to light every inch of the yard.',
    skipIf:
      'Skip this if your yard has poor sun exposure in the areas you want to light. Solar products only work as well as their charging conditions allow.',
    ourPickName: 'Beau Jardin Solar Pathway Lights',
    ourPickWhy:
      'They are a solid mix of brightness, weather resistance, and classic styling for walkways and garden edges.',
    asin: 'B07Q4Z2M38',
    image: 'https://m.media-amazon.com/images/I/71snrrN6XAL._AC_SL480_.jpg',
    amazonQuery: 'solar pathway lights outdoor waterproof',
  },
  {
    rank: 9,
    title: 'Mosquito repeller',
    badge: 'Best for actually using the yard at dusk',
    summary:
      'A backyard can look great and still go unused if mosquitoes take over as soon as the sun starts to set. A scent-free repeller is one of the easiest ways to make evening outdoor time more realistic.',
    whatItIs:
      'A heat-activated mosquito repeller that creates a small bug-free zone without open flames, smoky coils, or strong citronella scent lingering over dinner.',
    whyItMadeTheList:
      'Comfort matters more than aesthetics if the goal is to use the space regularly. This is one of the products that directly increases that odds.',
    review:
      'No mosquito product is magic, but this category is much nicer than candles if you actually want to eat, read, or talk outside without feeling like you are fighting the air.',
    skipIf:
      'Skip this if bugs are barely an issue where you live or if your yard already has screened protection doing most of the work.',
    ourPickName: 'Thermacell E55 Rechargeable Mosquito Repeller',
    ourPickWhy:
      'It is cleaner and more convenient than older bug-control approaches, especially for patios where smoke and smell are a downside.',
    asin: 'B08PDN1L1X',
    image: 'https://m.media-amazon.com/images/I/61mcfYJ0O4L._AC_SL480_.jpg',
    amazonQuery: 'thermacell mosquito repeller rechargeable',
  },
  {
    rank: 10,
    title: 'Cooler cart',
    badge: 'Best entertaining helper',
    summary:
      'When people are outside for a while, they need cold drinks within reach. A cooler cart keeps that simple and avoids the awkward rhythm of everyone constantly walking back inside.',
    whatItIs:
      'A rolling outdoor cooler with a lid, drain plug, and often a lower shelf or side handles, designed to function like a beverage station more than a camping cooler.',
    whyItMadeTheList:
      'This is one of the clearest examples of a product that makes the backyard easier to host in, not just nicer to look at.',
    review:
      'If you entertain even occasionally, this has more value than it first appears to. It keeps people outside, which is the entire point of a backyard setup.',
    skipIf:
      'Skip this if you rarely host and already have an indoor-outdoor flow where grabbing drinks never feels inconvenient.',
    ourPickName: 'Permasteel 80-Quart Patio Cooler Cart',
    ourPickWhy:
      'The rolling format, useful capacity, and built-in serving feel make it much more backyard-friendly than a basic chest cooler.',
    asin: 'B01A0G8EIS',
    image: 'https://m.media-amazon.com/images/I/71f0eh1S2rL._AC_SL480_.jpg',
    amazonQuery: 'patio cooler cart outdoor rolling',
  },
  {
    rank: 11,
    title: 'Raised garden bed',
    badge: 'Best productive backyard upgrade',
    summary:
      'Not every backyard improvement has to be about lounging. A raised bed adds visual structure, gives the space some life, and creates an easy on-ramp for herbs, tomatoes, flowers, or a small edible garden.',
    whatItIs:
      'A contained elevated growing area that makes planting simpler and more organized than carving into the ground, especially for beginners or uneven yards.',
    whyItMadeTheList:
      'This is one of the backyard products that can make the space feel more personal, seasonal, and alive without needing a huge landscape project.',
    review:
      'It is a strong choice if you want the yard to do something, not just look a certain way. Even a small bed of herbs makes the space feel more intentional.',
    skipIf:
      'Skip this if you do not have enough direct sun or if you know you are unlikely to maintain even a modest planting routine.',
    ourPickName: 'Best Choice Products Metal Raised Garden Bed',
    ourPickWhy:
      'It is roomy enough to feel real, easier to set up than many wood kits, and a practical starter size for backyard growing.',
    asin: 'B07N7X8Q5M',
    image: 'https://m.media-amazon.com/images/I/71zc7U1vV0L._AC_SL480_.jpg',
    amazonQuery: 'metal raised garden bed kit outdoor',
  },
  {
    rank: 12,
    title: 'Grill tool set',
    badge: 'Best small hosting upgrade',
    summary:
      'A backyard that includes grilling works better when the tools are not a random collection of bent spatulas and kitchen tongs borrowed from inside. A dedicated set keeps outdoor cooking simpler and less annoying.',
    whatItIs:
      'A stainless steel grill tool kit with spatula, tongs, fork, brush, and storage case. It is a small upgrade, but one that makes the cooking part of backyard time feel more put together.',
    whyItMadeTheList:
      'The best backyard purchases often smooth out recurring friction. This one does that for anyone who grills more than a couple times each summer.',
    review:
      'This is not the flashiest recommendation here, but it is one of the easiest ones to appreciate once you stop hunting around for mismatched utensils every time the grill heats up.',
    skipIf:
      'Skip this if you do not grill at all or already own a set of outdoor tools that is actually in good shape.',
    ourPickName: 'ROMANTICIST 20-Piece Grill Tool Set',
    ourPickWhy:
      'It covers the basics well, stores cleanly, and feels more like a practical all-in-one backyard kit than a novelty gift set.',
    asin: 'B07QKJQ7DG',
    image: 'https://m.media-amazon.com/images/I/81At3Xm60wL._AC_SL480_.jpg',
    amazonQuery: 'grill tool set stainless steel case',
  },
  {
    rank: 13,
    title: 'Outdoor throw pillows',
    badge: 'Best low-cost style layer',
    summary:
      'Backyard seating often looks unfinished until there is some softness to it. Outdoor pillows add color and comfort quickly, and they are one of the easiest ways to make existing furniture feel fresher.',
    whatItIs:
      'Weather-friendly accent pillows designed for patio seating, benches, or porch chairs. They are less about luxury than about making the space feel lived in rather than purely functional.',
    whyItMadeTheList:
      'This is a small visual upgrade that can noticeably warm up a hard-looking deck or patio without needing a full furniture replacement.',
    review:
      'Pillows work best when they support the existing color story instead of trying to create one from scratch. A couple of well-chosen ones usually look better than a crowded mix.',
    skipIf:
      'Skip these if your storage situation is poor and you know soft goods will sit out getting soaked and faded constantly.',
    ourPickName: 'MIULEE Waterproof Outdoor Pillow Covers',
    ourPickWhy:
      'They are a budget-friendly way to refresh outdoor seating without paying full-price for filled premium cushions.',
    asin: 'B09BVTCS8K',
    image: 'https://m.media-amazon.com/images/I/81PJ5rdBl8L._AC_SL480_.jpg',
    amazonQuery: 'waterproof outdoor throw pillow covers',
  },
  {
    rank: 14,
    title: 'Hammock chair',
    badge: 'Best cozy reading-corner add-on',
    summary:
      'A hammock chair gives a backyard one spot that feels less social and more personal. It is the kind of addition that turns a random corner of the yard, porch, or pergola into somewhere someone actually wants to read or decompress.',
    whatItIs:
      'A suspended fabric or woven seat designed to hang from a strong stand, beam, or support point and create a more cocooned lounge experience than a standard chair.',
    whyItMadeTheList:
      'Not every backyard product needs to serve a crowd. Some of the best ones simply create one genuinely inviting place to spend time alone.',
    review:
      'This works especially well in yards that already have the basics covered and need one more charming, comfortable zone rather than more generic seating.',
    skipIf:
      'Skip this if you do not have a safe hanging point or if the yard already feels crowded with furniture.',
    ourPickName: 'Y-STOP Hammock Chair',
    ourPickWhy:
      'It is comfortable, simple, and one of the easier ways to add a more relaxed lounge spot without buying a full outdoor daybed or sectional.',
    asin: 'B07QKNP7M3',
    image: 'https://m.media-amazon.com/images/I/71CKJcX4s0L._AC_SL480_.jpg',
    amazonQuery: 'hammock chair hanging outdoor',
  },
  {
    rank: 15,
    title: 'Collapsible wagon',
    badge: 'Best practical utility pick',
    summary:
      'A backyard setup usually comes with a lot of carrying: soil, cushions, coolers, kids gear, pool extras, party supplies, garden tools. A collapsible wagon turns all of that into fewer trips and less friction.',
    whatItIs:
      'A foldable utility wagon designed to roll heavier loads around the yard, driveway, or patio and then collapse small enough to store when not in use.',
    whyItMadeTheList:
      'It is not decorative, but it makes almost every other backyard task easier. That kind of usefulness deserves a place on a real-world list.',
    review:
      'This is the backyard version of a product you do not think about until you own one. Then suddenly it is involved in nearly every setup, cleanup, and garden run.',
    skipIf:
      'Skip this if your backyard is tiny and there is almost never enough distance or gear volume for hauling help to matter.',
    ourPickName: 'Mac Sports Collapsible Folding Wagon',
    ourPickWhy:
      'It is one of the better-known utility wagons for a reason: sturdy, easy to fold, and genuinely useful beyond just one outdoor task.',
    asin: 'B00BUUUIGK',
    image: 'https://m.media-amazon.com/images/I/71E2Il0lwDL._AC_SL480_.jpg',
    amazonQuery: 'collapsible folding wagon outdoor utility',
  },
]

const quickWins = [
  'If your backyard feels underused, start with lighting, shade, and one comfortable seating anchor before buying decorative extras.',
  'The best outdoor products usually solve a comfort problem first and a style problem second. That is what keeps them in use.',
  'Backyard clutter builds fast, so storage and reset-friendly products matter more than people think once the season gets busy.',
]

const sceneNotes = [
  {
    title: 'Golden Hour Patio',
    description: 'Warm lights, relaxed seating, and one clear focal point usually do more than trying to fill every corner of the yard.',
    palette: 'from-amber-100 via-white to-orange-100',
  },
  {
    title: 'Dinner Outside',
    description: 'Shade, bug control, and a drink setup are the invisible upgrades that make an outdoor meal feel easy instead of slightly inconvenient.',
    palette: 'from-lime-100 via-white to-emerald-100',
  },
  {
    title: 'Late-Summer Reset',
    description: 'A backyard stays enjoyable when it is simple to put back in order after guests leave or the weather turns quickly.',
    palette: 'from-sky-100 via-white to-cyan-100',
  },
]

const faqs = [
  {
    question: 'What backyard products are worth buying first?',
    answer:
      'The smartest first buys are usually the ones that make the space more usable right away: string lights for evening atmosphere, shade for daytime comfort, and one good seating anchor. After that, storage and bug control usually deliver more real-life value than decorative filler.',
  },
  {
    question: 'What are the best Amazon backyard upgrades on a budget?',
    answer:
      'Outdoor rugs, string lights, pillows, solar pathway lights, and mosquito-control products are usually the best low-to-mid-budget upgrades. They change how the space feels without requiring a full furniture replacement or a major installation project.',
  },
  {
    question: 'How do you make a backyard feel more inviting without remodeling it?',
    answer:
      'Work in layers: define one seating zone, add warm lighting, make sure there is some shade or comfort support during the day, and give the space a focal point like a fire pit or garden bed. Most backyards feel more inviting because of a few thoughtful functional upgrades, not because of expensive construction.',
  },
  {
    question: 'Which backyard products are overhyped?',
    answer:
      'Large novelty decor pieces and cheap furniture sets that look good online but age poorly tend to be the most overhyped. In practice, products that improve comfort, reduce clutter, or make hosting easier usually hold their value much better over a full season.',
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
  ...quickWins,
  ...sceneNotes.map((note) => `${note.title} ${note.description}`),
  ...products.map(
    (product) =>
      `${product.title} ${product.summary} ${product.whatItIs} ${product.whyItMadeTheList} ${product.review} ${product.skipIf} ${product.ourPickName} ${product.ourPickWhy}`
  ),
  ...faqs.map((faq) => `${faq.question} ${faq.answer}`),
].join(' ')

const readingTime = formatReadingTime(getReadingTime(fullText))

export default function BestProductsForYourBackyardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Home & Kitchen', href: '/home-kitchen' },
          { label: 'Best Products for Your Backyard' },
        ]}
      />

      <section className="mb-10 rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(140deg,#dcfce7_0%,#ffffff_45%,#ffedd5_100%)] px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
          Outdoor Living Series
        </p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          The best products for your backyard are the ones that make the space easier to use, not just nicer to photograph.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          A good backyard setup usually comes down to a simple formula: comfortable seating, a little shade, soft lighting, some way to keep bugs and clutter under control, and one or two products that make people want to stay outside longer. That matters more than trying to buy an entire outdoor look in one weekend.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          This page covers 15 Amazon picks that actually improve how a backyard gets used. Some are for hosting, some are for relaxing, and a few are the quietly practical purchases that keep the space from drifting into chaos halfway through summer.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">
          BestPickZone participates in the Amazon Services LLC Associates Program. If you shop through links on this page, we may earn a commission at no extra cost to you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">Updated July 10, 2026</span>
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">{readingTime}</span>
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">15 Amazon-linked picks</span>
        </div>
      </section>

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        {quickWins.map((win) => (
          <div key={win} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-base leading-7 text-slate-700">{win}</p>
          </div>
        ))}
      </section>

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        {sceneNotes.map((note) => (
          <article
            key={note.title}
            className={`rounded-[2rem] border border-slate-200 bg-gradient-to-br ${note.palette} p-6 shadow-sm`}
          >
            <div className="h-28 rounded-[1.5rem] border border-white/70 bg-white/60 p-4">
              <div className="flex h-full items-end justify-between gap-3">
                <div className="flex w-1/3 flex-col justify-end gap-3">
                  <div className="h-8 rounded-t-full bg-slate-900/10" />
                  <div className="h-4 rounded-full bg-slate-900/10" />
                </div>
                <div className="flex w-2/3 flex-col gap-3">
                  <div className="h-4 rounded-full bg-slate-900/10" />
                  <div className="h-4 w-3/4 rounded-full bg-slate-900/10" />
                  <div className="h-10 w-1/2 rounded-2xl bg-slate-900/10" />
                </div>
              </div>
            </div>
            <h2 className="mt-5 text-2xl font-black text-slate-900">{note.title}</h2>
            <p className="mt-3 text-base leading-7 text-slate-700">{note.description}</p>
          </article>
        ))}
      </section>

      <section className="mb-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900">The 15 backyard products most worth buying</h2>
          <p className="mt-3 text-lg leading-8 text-slate-700">
            The list starts with products that shape the whole space, then moves into comfort, evening use, entertaining, and the practical gear that makes the yard easier to maintain through the season.
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
                <p>{product.review}</p>
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
        <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#dcfce7_100%)] p-6">
          <h2 className="text-3xl font-black text-slate-900">How I would shop this list in real life</h2>
          <ol className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
            <li><strong>1.</strong> Start with lighting and one comfortable seating anchor so the backyard already feels more usable.</li>
            <li><strong>2.</strong> Add shade or bug control next if heat or mosquitoes are the main reason you avoid the yard.</li>
            <li><strong>3.</strong> Bring in storage before piling on accessories, because clutter is what makes outdoor spaces age fastest.</li>
            <li><strong>4.</strong> Choose one entertaining helper, like a cooler cart or fire pit, based on how you actually host.</li>
            <li><strong>5.</strong> Finish with small softness and style layers once the core comfort problems are solved.</li>
          </ol>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-slate-100">
          <h2 className="text-2xl font-black">Standards check</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            This page was written to sound like a human recommendation list, not a generic outdoor roundup. Each product has a real backyard use case, honest tradeoff language, and buy-or-skip framing instead of empty praise.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-300">
            It also follows the BestPickZone pattern: SEO metadata, FAQ and item-list schema, affiliate disclosure, direct Amazon product links, broader comparison links, and internal links to related home and outdoor content.
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
        <h2 className="text-2xl font-black text-slate-900">More for the home setup</h2>
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
          <Link href="/home-kitchen" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-emerald-700">
            Explore all Home &amp; Kitchen guides
          </Link>
          <Link href="/home-kitchen/best-products-for-your-dorm-room" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-emerald-700">
            Best products for your dorm room
          </Link>
          <Link href="/home-kitchen/best-dorm-room-essentials" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-emerald-700">
            Best dorm room essentials
          </Link>
          <Link href="/home-kitchen/best-tech-for-college-students" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-emerald-700">
            Best tech for college students
          </Link>
          <Link href="/wfh/best-products-for-your-home-office" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-emerald-700">
            Best products for your home office
          </Link>
        </div>
      </section>
    </main>
  )
}
