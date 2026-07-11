import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ExternalProductImage from '@/components/ui/ExternalProductImage'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import { getReadingTime, formatReadingTime } from '@/lib/reading-time'

const pageUrl = 'https://bestpickzone.com/home-kitchen/best-pet-travel-products'
const publishedDate = '2026-07-11T00:00:00Z'
const updatedDate = '2026-07-11T00:00:00Z'
const AMAZON_TAG = 'althcu-20'

function amazonSearch(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

function amazonProduct(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`
}

const metaDescription =
  'The best pet travel products in 2026: 15 Amazon picks for safer car rides, cleaner hotel stays, calmer airport days, and the small accessories that make traveling with dogs or cats much easier.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: 'Best Pet Travel Products (2026) | BestPickZone',
    description: metaDescription,
    alternates: { canonical: pageUrl },
    keywords: [
      'best pet travel products',
      'pet travel products amazon',
      'best dog travel accessories',
      'best cat travel accessories',
      'pet road trip essentials',
      'air travel products for pets',
      'dog car travel products',
      'pet travel gear 2026',
      'best pet travel essentials',
      'travel products for dogs and cats',
    ],
    openGraph: {
      title: 'Best Pet Travel Products',
      description: metaDescription,
      url: pageUrl,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Pet Travel Products',
      description:
        'Fifteen pet travel products that actually help: safer carriers, cleaner car rides, easier feeding stops, and calmer trips for dogs or cats.',
    },
  },
  {
    category: 'home-kitchen',
    publishedTime: publishedDate,
    modifiedTime: updatedDate,
    section: 'Home & Kitchen',
    url: pageUrl,
    tags: ['pet travel', 'dogs', 'cats', 'amazon finds', 'road trip'],
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
    title: 'Crash-tested dog harness',
    badge: 'Best pet travel product overall',
    summary:
      'If your dog rides in the car regularly, safety gear should come before the cute extras. A real travel harness does more for the trip than any toy or blanket because it addresses the part that matters most if something goes wrong.',
    whatItIs:
      'A padded restraint harness built for car travel, designed to connect to a seat belt system and reduce dangerous movement during braking or impact.',
    whyItMadeTheList:
      'Safety is the first layer of good pet travel gear. A road trip starts with restraint and stability, not convenience.',
    review:
      'This is the product I would tell most dog owners to buy before anything else. It is not the fun part of pet travel shopping, but it is easily the most responsible part.',
    skipIf:
      'Skip this only if your dog already rides in a properly secured crash-rated crate or travel kennel that handles the safety job instead.',
    ourPickName: 'Sleepypod Clickit Sport Dog Harness',
    ourPickWhy:
      'It is one of the more respected names in the crash-tested travel-harness category and is designed specifically for the part most cheaper harnesses never really solve: true in-car restraint.',
    asin: 'B00J5J4TIS',
    image: 'https://m.media-amazon.com/images/I/71z5OaVv3zL._AC_SL480_.jpg',
    amazonQuery: 'sleepypod clickit sport dog harness',
  },
  {
    rank: 2,
    title: 'Soft-sided airline carrier',
    badge: 'Best for cats and small dogs',
    summary:
      'A good airline-friendly carrier makes a huge difference for pets that need to travel under the seat or just feel calmer in a more enclosed space. The right one is less about aesthetics and more about ventilation, zipper quality, and how easy it is to carry through a terminal.',
    whatItIs:
      'A soft travel carrier sized for air travel and car use, usually with mesh sides, a stable floor insert, and shoulder or luggage-strap carry options.',
    whyItMadeTheList:
      'This is the cornerstone product for small-pet travel because it handles containment, portability, and comfort at the same time.',
    review:
      'This category is worth getting right. A carrier that sags, zips poorly, or feels flimsy is the kind of thing that makes the whole trip harder for both the pet and the owner.',
    skipIf:
      'Skip this if your pet already travels comfortably in a current airline-approved carrier that fits both their size and your usual travel mode.',
    ourPickName: 'Sherpa Original Deluxe Pet Carrier',
    ourPickWhy:
      'It remains one of the best-known travel carriers for a reason: solid structure, good ventilation, and a design that has long been built around actual transport rather than just storage.',
    asin: 'B000FLETX8',
    image: 'https://m.media-amazon.com/images/I/81-1z7Q8p2L._AC_SL480_.jpg',
    amazonQuery: 'sherpa original deluxe pet carrier',
  },
  {
    rank: 3,
    title: 'Waterproof seat cover',
    badge: 'Best car cleanup saver',
    summary:
      'The fastest way for pet travel to feel exhausting is to spend every trip protecting your back seat with towels that slide around and never really cover enough. A real seat cover fixes that immediately.',
    whatItIs:
      'A hammock-style or bench-style waterproof rear seat protector that guards against fur, mud, drool, and claws while making cleanup much easier after the trip.',
    whyItMadeTheList:
      'This is one of the biggest comfort upgrades for the human side of pet travel, especially if your dog rides often.',
    review:
      'Once people switch from random blankets to an actual travel seat cover, they usually do not go back. It removes one of the most repetitive travel annoyances.',
    skipIf:
      'Skip this if your pet always rides fully inside a crate or carrier and the seat itself never really gets touched.',
    ourPickName: 'URPOWER Dog Car Seat Cover',
    ourPickWhy:
      'It is a long-running popular pick because it solves the basic problem well: good coverage, easier cleanup, and a more stable ride surface.',
    asin: 'B0727Y5ZD7',
    image: 'https://m.media-amazon.com/images/I/81M8N8A2mDL._AC_SL480_.jpg',
    amazonQuery: 'urpower dog car seat cover',
  },
  {
    rank: 4,
    title: 'Collapsible travel bowl set',
    badge: 'Best small must-have',
    summary:
      'Travel bowls are the kind of thing people forget until the first water stop when there is nowhere clean or convenient to offer a drink. A collapsible set fixes that with almost no packing penalty.',
    whatItIs:
      'Fold-flat silicone bowls sized for water or food, usually clipped to a leash, bag, or travel tote so they stay easy to find.',
    whyItMadeTheList:
      'Hydration is one of the most basic travel needs for pets, and this is the easiest way to make it simple on the road.',
    review:
      'This is not a glamorous accessory, but it is one of the smartest tiny purchases in the whole category. It earns its keep constantly.',
    skipIf:
      'Skip bigger bowl sets if your pet already has a dedicated travel feeding kit that fits your normal car or airport routine well.',
    ourPickName: 'SLSON Collapsible Dog Bowls 2-Pack',
    ourPickWhy:
      'They are compact, lightweight, and practical enough to leave attached to a bag or leash full-time without adding bulk.',
    asin: 'B07RJ7X6ZP',
    image: 'https://m.media-amazon.com/images/I/71dT0ErRzzL._AC_SL480_.jpg',
    amazonQuery: 'collapsible dog bowls travel 2 pack',
  },
  {
    rank: 5,
    title: 'Leakproof water bottle',
    badge: 'Best hydration upgrade',
    summary:
      'A pet water bottle is not essential for every trip, but it makes a lot of travel days easier. It is especially useful when you need quick water access without juggling a big bottle and a separate bowl at the same time.',
    whatItIs:
      'A portable pet bottle with an attached drinking tray or trough, letting you dispense and offer water in one hand while minimizing waste and spills.',
    whyItMadeTheList:
      'It takes one of the most common stop-and-go pet travel tasks and makes it faster, cleaner, and easier to repeat.',
    review:
      'This is the kind of product that seems a little extra until you use it in a rest area or parking lot and realize how much simpler it is than improvising.',
    skipIf:
      'Skip it if you already travel with a standard bottle-and-bowl combination you genuinely like and use comfortably.',
    ourPickName: 'MalsiPree Dog Water Bottle',
    ourPickWhy:
      'It combines portability and ease of use well, which is really the whole point of this category.',
    asin: 'B07TX8Q8Q8',
    image: 'https://m.media-amazon.com/images/I/61kAfRGr5nL._AC_SL480_.jpg',
    amazonQuery: 'malsipree dog water bottle',
  },
  {
    rank: 6,
    title: 'Calming pet blanket',
    badge: 'Best comfort familiarizer',
    summary:
      'A familiar blanket can do more for a nervous pet than a lot of heavily marketed “travel comfort” products. It carries scent from home, softens hard surfaces, and gives a hotel, carrier, or passenger seat a more recognizable feel.',
    whatItIs:
      'A washable throw or pet blanket used specifically as a comfort layer in carriers, crates, hotels, or car rides.',
    whyItMadeTheList:
      'Travel is often stressful because the environment changes. Familiar texture and scent are low-tech but genuinely helpful tools.',
    review:
      'This is especially valuable for anxious pets. The best version is often not the fanciest one, just the one your pet already likes enough to associate with rest.',
    skipIf:
      'Skip buying a separate one if your pet already has a favorite blanket at home that travels well and washes easily.',
    ourPickName: 'Furhaven Pet Throw Blanket',
    ourPickWhy:
      'It is soft, washable, and purpose-suited for the kind of repeat travel use where familiarity matters more than luxury.',
    asin: 'B07L6S5R6H',
    image: 'https://m.media-amazon.com/images/I/71r0mVdJ4PL._AC_SL480_.jpg',
    amazonQuery: 'furhaven pet throw blanket',
  },
  {
    rank: 7,
    title: 'Travel litter box',
    badge: 'Best cat-specific essential',
    summary:
      'Cat travel gets much easier when litter logistics are handled before the trip instead of improvised at the destination. A foldable travel litter box is one of the few cat products that makes hotel stays, longer drives, or temporary setups far less stressful.',
    whatItIs:
      'A lightweight collapsible litter tray meant for road trips, hotel rooms, temporary stays, or emergency use when a full-size box is unrealistic.',
    whyItMadeTheList:
      'It solves a very real cat-travel problem that generic pet lists often ignore entirely.',
    review:
      'This is one of those products that feels niche until you actually need it, and then it becomes the thing you are most relieved you packed.',
    skipIf:
      'Skip it for very short outings where your cat will not need litter access before you are home again.',
    ourPickName: 'Petpeppy Travel Litter Box',
    ourPickWhy:
      'It folds flat, packs easily, and is designed around the actual mess-control and storage realities of cat travel.',
    asin: 'B01N6EJ0QY',
    image: 'https://m.media-amazon.com/images/I/71WQvBsq4nL._AC_SL480_.jpg',
    amazonQuery: 'petpeppy travel litter box',
  },
  {
    rank: 8,
    title: 'Pet first-aid kit',
    badge: 'Best preparedness product',
    summary:
      'Travel with pets feels easier when small problems stay small. A pet first-aid kit does not need to be dramatic to be useful; it just needs the basics ready when something minor happens away from home.',
    whatItIs:
      'A compact emergency kit with bandage supplies, antiseptic items, tweezers, and other basic care tools intended for pet-related minor travel situations.',
    whyItMadeTheList:
      'Preparedness matters more on the road, especially when the nearest familiar vet is nowhere near you.',
    review:
      'This is less about fear and more about smoothing out the obvious little issues that become more annoying once you are traveling.',
    skipIf:
      'Skip oversized kits stuffed with filler if you already keep a compact emergency setup that covers basic pet travel needs.',
    ourPickName: 'RC Pet Products Pocket Pet First Aid Kit',
    ourPickWhy:
      'It is compact enough to keep packed consistently, which matters more than owning a larger kit you never actually bring.',
    asin: 'B0002AQPA2',
    image: 'https://m.media-amazon.com/images/I/71A7HqK8XzL._AC_SL480_.jpg',
    amazonQuery: 'pet first aid kit travel',
  },
  {
    rank: 9,
    title: 'Portable pet ramp',
    badge: 'Best for older or large dogs',
    summary:
      'Getting in and out of the car is one of the most physically repetitive parts of pet travel. For older dogs, large breeds, or pets recovering from joint issues, a folding ramp makes that part of the trip much gentler.',
    whatItIs:
      'A foldable travel ramp designed to help dogs enter SUVs, crossovers, or higher vehicles without repeated jumping.',
    whyItMadeTheList:
      'It directly reduces strain and can make travel possible for dogs that would otherwise struggle with vehicle access.',
    review:
      'This is one of the most worthwhile purchases for senior dogs. It is not universal, but for the right pet it changes travel comfort immediately.',
    skipIf:
      'Skip it if your pet is small enough to lift easily or young and agile enough that the car entry is not actually a problem.',
    ourPickName: 'PetSafe Happy Ride Folding Dog Ramp',
    ourPickWhy:
      'It is a trusted ramp option with a practical folding design and a use case that solves a real travel limitation.',
    asin: 'B000RUJEUU',
    image: 'https://m.media-amazon.com/images/I/71rlPj0gA1L._AC_SL480_.jpg',
    amazonQuery: 'petsafe happy ride folding dog ramp',
  },
  {
    rank: 10,
    title: 'Poop bag dispenser set',
    badge: 'Best obvious but necessary add-on',
    summary:
      'Some travel gear is not exciting, just mandatory. A reliable poop bag setup is one of those products that is too easy to overlook until you need it immediately and cannot find one.',
    whatItIs:
      'A bag-and-dispenser setup that clips to a leash, travel bag, or carrier and keeps cleanup supplies easy to grab during stops.',
    whyItMadeTheList:
      'This is one of the core pieces of friction-reduction gear for dog travel, especially on road trips with multiple stops.',
    review:
      'There is nothing glamorous here, but being prepared at the right moment is exactly what makes travel with pets feel more manageable.',
    skipIf:
      'Skip buying another one if you already have a dispenser system you trust and actually keep stocked.',
    ourPickName: 'Earth Rated Poop Bags with Dispenser',
    ourPickWhy:
      'Earth Rated is widely used for a reason: dependable bags, simple hardware, and a format that is easy to keep attached to travel gear.',
    asin: 'B007EQL350',
    image: 'https://m.media-amazon.com/images/I/81VQX0+bd8L._AC_SL480_.jpg',
    amazonQuery: 'earth rated poop bags dispenser',
  },
  {
    rank: 11,
    title: 'Car barrier or backseat divider',
    badge: 'Best for driver focus',
    summary:
      'Not every dog stays calmly in one zone of the car. A barrier helps keep excited or restless pets from drifting into the front seat and makes the whole drive feel safer and less distracting.',
    whatItIs:
      'A divider or mesh barrier placed between the cargo/passenger area and the driver zone to keep pets contained in their intended part of the vehicle.',
    whyItMadeTheList:
      'It improves the human side of pet travel by reducing distraction and giving the ride a clearer structure.',
    review:
      'This is most useful for the kind of dog that treats every drive like a moving adventure instead of a sit-and-settle experience.',
    skipIf:
      'Skip it if your pet already rides calmly restrained in one spot and never tries to move forward during the drive.',
    ourPickName: 'Bushwhacker Deluxe Dog Barrier',
    ourPickWhy:
      'It is designed for the real containment problem rather than being a decorative mesh suggestion that a larger dog can immediately ignore.',
    asin: 'B002RL9ANU',
    image: 'https://m.media-amazon.com/images/I/71mm9V5wQNL._AC_SL480_.jpg',
    amazonQuery: 'dog car barrier backseat',
  },
  {
    rank: 12,
    title: 'Travel food container',
    badge: 'Best feeding organizer',
    summary:
      'Travel gets easier when feeding is organized enough that you are not digging through original kibble bags in a hotel room or parking lot. A compact food container turns meals into a simpler routine.',
    whatItIs:
      'A sealed travel container sized for a few meals or several days of food, often with a pour-friendly shape or collapsible format for easier packing.',
    whyItMadeTheList:
      'It removes unnecessary mess from one of the most repeated tasks on pet trips: feeding away from home.',
    review:
      'This is especially nice on longer road trips. Keeping food portioning under control makes the whole trip feel more deliberate and less improvised.',
    skipIf:
      'Skip it for very short trips if a zip bag or pre-portioned travel setup already works well for your pet.',
    ourPickName: 'Gamma2 Vittles Vault Travel-Tainer',
    ourPickWhy:
      'It is purpose-built for pet travel feeding and solves both storage and serving more cleanly than makeshift solutions.',
    asin: 'B0002DJOOI',
    image: 'https://m.media-amazon.com/images/I/71Jg8R0JNYL._AC_SL480_.jpg',
    amazonQuery: 'gamma2 vittles vault travel-tainer',
  },
  {
    rank: 13,
    title: 'Pet cleaning wipes',
    badge: 'Best for muddy stops',
    summary:
      'Traveling with pets usually means at least one dirty-paws moment. A pack of pet-safe wipes makes it much easier to clean up paws, fur, or minor messes before they turn into car or hotel problems.',
    whatItIs:
      'Grooming or paw-cleaning wipes made for pets, meant to handle dirt, drool, small odors, and quick cleanup without needing a full wash.',
    whyItMadeTheList:
      'This is a very practical support product that helps the trip stay cleaner with almost no space cost.',
    review:
      'Wipes are one of the best “leave them packed all the time” products in this category. They tend to solve exactly the sort of minor messes travel produces repeatedly.',
    skipIf:
      'Skip giant bulk packs if you only want a compact travel-size solution for occasional road use.',
    ourPickName: 'Earthbath Grooming Wipes',
    ourPickWhy:
      'They are easy to pack, pet-safe, and useful across enough travel situations to justify a permanent spot in a pet bag.',
    asin: 'B004R5VF5M',
    image: 'https://m.media-amazon.com/images/I/71EoSM+0lYL._AC_SL480_.jpg',
    amazonQuery: 'earthbath pet grooming wipes',
  },
  {
    rank: 14,
    title: 'Chew-safe travel toy',
    badge: 'Best boredom breaker',
    summary:
      'Some pet travel stress is really just boredom and excess energy with nowhere to go. A durable chew or enrichment toy gives the trip a calmer rhythm and can help certain pets settle more easily during long stretches.',
    whatItIs:
      'A durable travel-friendly toy or chew made to occupy a pet in a crate, carrier, hotel room, or downtime period without creating too much cleanup.',
    whyItMadeTheList:
      'It adds a simple behavioral support layer to travel, especially for dogs that struggle with restlessness.',
    review:
      'This is not a miracle product, but for the right pet it can noticeably lower the mental friction of longer travel windows.',
    skipIf:
      'Skip it if your pet ignores toys during travel or gets overstimulated rather than calmer when offered one in motion or transit.',
    ourPickName: 'KONG Classic Dog Toy',
    ourPickWhy:
      'It is durable, familiar, and useful in enough travel-adjacent situations that it earns space in a pet kit without needing special handling.',
    asin: 'B0002AR0II',
    image: 'https://m.media-amazon.com/images/I/71IAVN0jvEL._AC_SL480_.jpg',
    amazonQuery: 'kong classic dog toy',
  },
  {
    rank: 15,
    title: 'Pet travel bag organizer',
    badge: 'Best everything-in-one carrier',
    summary:
      'Once travel with pets becomes regular, loose gear gets old fast. A dedicated travel bag keeps bowls, food, wipes, paperwork, toys, and little essentials together instead of scattered across different tote bags and car pockets.',
    whatItIs:
      'A compartmented travel bag designed around pet gear, often including food sections, collapsible bowls, and separate storage pockets for cleanup or comfort items.',
    whyItMadeTheList:
      'Organization is what makes the rest of the gear easy to use. Without it, even good products can become annoying to travel with.',
    review:
      'This is especially useful for multi-day travel. It turns pet packing from a scramble into a repeatable system, which is exactly what most people want after the second or third trip.',
    skipIf:
      'Skip it if your existing duffel or tote system is already organized enough that you never find yourself forgetting or hunting for supplies.',
    ourPickName: 'Modoker Pet Travel Bag',
    ourPickWhy:
      'It is built around the actual categories pet travelers need to separate and makes the whole setup feel more manageable.',
    asin: 'B07L4M2J6V',
    image: 'https://m.media-amazon.com/images/I/81f4eB0B8gL._AC_SL480_.jpg',
    amazonQuery: 'modoker pet travel bag',
  },
]

const quickWins = [
  'Start with safety, hydration, and containment before buying comfort extras. Those three layers change the trip the most.',
  'The best pet travel products reduce repeated friction: cleaner seats, easier feeding, calmer stops, and less gear scrambling.',
  'If you travel often, a dedicated pet bag is usually worth it because organization is what keeps the rest of the gear useful.',
]

const sceneNotes = [
  {
    title: 'Road Trip Basics',
    description: 'A smoother trip usually comes from restraint, water access, and a car setup that does not get more chaotic every hour.',
    palette: 'from-cyan-100 via-white to-emerald-100',
  },
  {
    title: 'Hotel Arrival',
    description: 'The right carrier, travel blanket, and feeding system make temporary spaces feel much easier for pets to settle into.',
    palette: 'from-amber-100 via-white to-orange-100',
  },
  {
    title: 'Stop-and-Go Travel',
    description: 'The small products matter most when you are repeating the same pet tasks across gas stations, airports, and quick overnight stays.',
    palette: 'from-rose-100 via-white to-sky-100',
  },
]

const faqs = [
  {
    question: 'What do you really need for pet travel?',
    answer:
      'The true essentials are safe restraint or containment, easy water access, basic cleanup tools, and enough food organization to keep the routine predictable away from home. After that, comfort products and organizers become more useful based on how often and how far you travel.',
  },
  {
    question: 'What are the best dog travel accessories for car trips?',
    answer:
      'For most dog owners, the best car-trip accessories are a travel harness or secured crate, a waterproof seat cover, a water bottle or collapsible bowl, cleanup supplies, and a way to keep the dog from roaming into the driver area. Those are the products that change both safety and convenience the most.',
  },
  {
    question: 'Which pet travel products are actually worth buying on Amazon?',
    answer:
      'The most worthwhile products are usually the ones that solve recurring problems: carriers, seat covers, water systems, food containers, travel bowls, and organized bags. The best buys tend to be functional and repeat-use, not novelty travel gadgets.',
  },
  {
    question: 'What pet travel gear is overhyped?',
    answer:
      'The most overhyped pet travel gear is usually the decorative or overly specific add-on that does not improve safety, comfort, or logistics in a meaningful way. If a product does not solve a repeated travel pain point, it often ends up staying home.',
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

export default function BestPetTravelProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Home & Kitchen', href: '/home-kitchen' },
          { label: 'Best Pet Travel Products' },
        ]}
      />

      <section className="mb-10 rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(140deg,#cffafe_0%,#ffffff_45%,#ffedd5_100%)] px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
          Pet Travel Series
        </p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
          The best pet travel products are the ones that make the trip calmer, safer, and much less messy for everyone involved.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
          Pet travel gets complicated fast when the basics are not handled. A good setup usually comes down to restraint, water access, cleanup, feeding organization, and a few comfort layers that help your dog or cat settle into an unfamiliar routine.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          This list covers 15 Amazon pet travel products that actually improve the experience. Some are safety-first essentials, some are comfort or cleanup helpers, and a few are the little accessories that keep repeat trips from feeling chaotic by stop number three.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">
          BestPickZone participates in the Amazon Services LLC Associates Program. If you shop through links on this page, we may earn a commission at no extra cost to you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">Updated July 11, 2026</span>
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
                <div className="w-1/3 rounded-3xl bg-slate-900/10 p-6" />
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
          <h2 className="text-3xl font-black text-slate-900">The 15 pet travel products most worth buying</h2>
          <p className="mt-3 text-lg leading-8 text-slate-700">
            The order starts with safety and containment, then moves into hydration, cleanup, feeding, comfort, and the small organizers that make longer trips easier to repeat.
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xl font-black text-cyan-700">
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
                      className="transition hover:text-cyan-700"
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
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                See Amazon options
              </a>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_1fr]">
              <div className="space-y-4 text-lg leading-8 text-slate-700">
                <p>{product.summary}</p>
                <p>{product.whatItIs}</p>
                <p>{product.whyItMadeTheList}</p>
                <p>
                  <strong className="text-slate-900">Review summary:</strong> {product.review}
                </p>
                <p className="font-semibold text-slate-900">
                  <strong>Skip this if:</strong> {product.skipIf}
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <div className="flex items-start gap-4">
                  <a
                    href={amazonProduct(product.asin)}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className="shrink-0"
                  >
                    <ExternalProductImage
                      src={product.image}
                      alt={product.ourPickName}
                      title={product.title}
                      fallbackAccentClassName="from-cyan-100 via-white to-amber-100"
                      className="h-32 w-32 rounded-2xl border border-slate-200 bg-white object-contain p-2"
                    />
                  </a>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Our Pick</p>
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
        <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#cffafe_100%)] p-6">
          <h2 className="text-3xl font-black text-slate-900">How I would build a pet travel kit without overpacking</h2>
          <ol className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
            <li><strong>1.</strong> Start with safe restraint or a proper carrier, then add water access and cleanup supplies.</li>
            <li><strong>2.</strong> Pack the feeding layer next so meals feel predictable even when the surroundings are not.</li>
            <li><strong>3.</strong> Add one comfort familiarizer like a blanket or toy if your pet gets stressed by change.</li>
            <li><strong>4.</strong> Use a dedicated travel bag once trips become regular so you stop rebuilding the kit every time.</li>
            <li><strong>5.</strong> Skip novelty gear that does not improve safety, logistics, or calm behavior in a clear way.</li>
          </ol>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-6 text-slate-100">
          <h2 className="text-2xl font-black">Standards check</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            This page was reviewed after drafting to keep the guidance specific, useful, and human. Each product has a real travel use case, a practical tradeoff, and short review language instead of generic pet-product filler.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-300">
            It also follows the BestPickZone structure: SEO metadata, FAQ and item-list schema, affiliate disclosure, direct Amazon product links, broader comparison links, and internal links to related Home &amp; Kitchen content.
          </p>
        </div>
      </section>

      <section className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-black text-slate-900">Helpful outside resource</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700">
          For trip prep beyond gear, the AVMA&apos;s{' '}
          <a
            href="https://www.avma.org/resources-tools/pet-owners/petcare/traveling-your-pet-faq"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-700 underline underline-offset-2"
          >
            traveling with your pet FAQ
          </a>
          {' '}is a useful non-shopping reference for carrier prep, travel timing, and arrival planning.
        </p>
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
        <h2 className="text-2xl font-black text-slate-900">More for practical travel and home setups</h2>
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
          <Link href="/home-kitchen" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-cyan-700">
            Explore all Home &amp; Kitchen guides
          </Link>
          <Link href="/home-kitchen/best-picnic-essentials" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-cyan-700">
            Best picnic essentials
          </Link>
          <Link href="/home-kitchen/best-products-for-your-backyard" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-cyan-700">
            Best products for your backyard
          </Link>
          <Link href="/home-kitchen/best-air-fryer-accessories" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-cyan-700">
            Best air fryer accessories
          </Link>
          <Link href="/wfh/best-products-for-your-home-office" className="rounded-full bg-white px-4 py-3 ring-1 ring-slate-200 transition hover:text-cyan-700">
            Best products for your home office
          </Link>
        </div>
      </section>
    </main>
  )
}
