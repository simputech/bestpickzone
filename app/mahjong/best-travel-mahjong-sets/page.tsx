import ArticleAmazonProducts from '@/components/article/ArticleAmazonProducts'
import { withSeo } from '@/lib/seo-metadata'
import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import ItemListJsonLd from '@/components/seo/ItemListJsonLd'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'

const url = 'https://bestpickzone.com/mahjong/best-travel-mahjong-sets'
const published = '2026-09-19T00:00:00Z'
const modified = '2026-10-28T00:00:00Z'
const tag = 'althcu-20'
const amazon = (query: string) => `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${tag}`
const description = "Compare YMI Inkstone and Classic Mini travel Mahjong sets using manufacturer dimensions, weights and contents, with practical readability and packing checks."

export const metadata: Metadata = withSeo(withArticleMetadataDefaults({ title: 'Best Travel Mahjong Sets (2026)', description, alternates: { canonical: url }, openGraph: { title: 'Best Travel Mahjong Sets (2026)', description, url, type: 'article' }, twitter: { card: 'summary_large_image', title: 'Best Travel Mahjong Sets', description } }, { category: 'mahjong', publishedTime: published, modifiedTime: modified, section: 'Mahjong', url, tags: ['travel Mahjong set', 'portable Mahjong', 'American Mahjong travel set'] }), "/mahjong/best-travel-mahjong-sets")

const picks = [
  {
    "badge": "For a compact case",
    "title": "Yellow Mountain Imports Inkstone FX-AM008-A",
    "query": "Yellow Mountain Imports Inkstone FX-AM008-A travel American Mahjong",
    "bestFor": "Players who can comfortably read and handle miniature tiles",
    "copy": "Inkstone is a documented compact option to compare when luggage space matters. The manufacturer specifies a black vinyl case, four acrylic racks and miniature melamine tiles. The listed case is 11.6 by 5 by 1 inches and the set weighs 2.18 pounds; these are manufacturer figures, not our measurements. The useful tradeoff is obvious before any game: less case volume requires smaller pieces and a different handling experience. Draw the case footprint on paper beside the space available in your bag, then compare a tile-sized sample before deciding. Do not infer that a compact case includes a usable playing surface or fits your airline allowance. This is a kit to carry to a table, not a recommendation to play across an airplane tray.",
    "pros": [
      "Manufacturer provides packed dimensions and weight",
      "Acrylic racks are included",
      "A specific model can be compared across sellers"
    ],
    "cons": [
      "Miniature markings may be difficult for some players",
      "The annual scorecard is not included"
    ],
    "skip": "Your group needs larger tiles or you cannot try a comparable miniature size."
  },
  {
    "badge": "For a miniature wooden case",
    "title": "Yellow Mountain Imports Classic Mini US-AF020-C",
    "query": "Yellow Mountain Imports Classic Mini US-AF020-C American Mahjong",
    "bestFor": "A traveler who prefers wood and can accept extra packed size",
    "copy": "Classic Mini offers another small-format route, with four wooden racks and a wooden case. YMI lists a 12 by 6.5 by 1.4-inch case and 2.8-pound set weight. Pushers are excluded. This makes it a meaningful comparison with Inkstone rather than simply another color: the packing dimensions and player accessories differ. Choose according to what you can carry and how the group builds walls, not an assumption that wood is automatically more durable. The manufacturer’s availability may change and an Amazon search may return other Classic products. Match US-AF020-C and the miniature dimensions before treating a result as this kit. A case with a similar title can contain full-size tiles or omit racks entirely.",
    "pros": [
      "Wooden miniature storage format",
      "Published dimensions support a luggage check",
      "Four wooden racks included"
    ],
    "cons": [
      "Pushers are not included",
      "Miniature pieces remain a handling compromise"
    ],
    "skip": "You need full-size tiles or assumed the kit has integrated pushers."
  },
  {
    "badge": "For driving between homes",
    "title": "Linda Li Blue Paisley MJPAIS-BLUE",
    "query": "Linda Li MJPAIS-BLUE American Mahjong Blue Paisley 166 rack pushers",
    "bestFor": "Players who would rather carry a larger kit than use mini tiles",
    "copy": "For a car trip, minimizing case size may be less important than keeping a familiar table setup. The Linda Li bagged format is worth comparing when the destination has room for a regular game and the group prefers larger pieces to miniature ones. A soft case is still a carrying container, not a guarantee against crushed contents, rain or airline handling. Put it where other luggage will not bear down on racks, keep the small components together, and check that the bag closes without pressure on the tiles. If you already have a suitable kit, measure it for a carrying bag before buying an entire second set. Portability can be solved by organization rather than replacement.",
    "pros": [
      "Integrated player stations suit a regular table",
      "Bag can carry the kit between homes",
      "An alternative when mini tiles are unsuitable"
    ],
    "cons": [
      "Takes more luggage space than a mini case",
      "No verified packed weight comparison with other full-size kits"
    ],
    "skip": "You need a miniature case or already have a usable full-size kit and bag."
  }
] as const

const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best Travel Mahjong Sets (2026)', description, datePublished: published, dateModified: modified, mainEntityOfPage: url, author: { '@type': 'Organization', name: 'BestPickZone Editorial Team' }, publisher: { '@type': 'Organization', name: 'BestPickZone' } }

export default function Page() { return <main className="mx-auto max-w-5xl px-4 py-10">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
  <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Mahjong', path: '/mahjong' }, { name: 'Best Travel Mahjong Sets' }]} />
  <ItemListJsonLd name="Best Travel Mahjong Sets" items={picks.map((pick, index) => ({ name: pick.title, path: `/mahjong/best-travel-mahjong-sets#pick-${index + 1}` }))} />
  <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Mahjong', href: '/mahjong' }, { label: 'Best Travel Mahjong Sets' }]} />
  <header className="mb-10 rounded-[2rem] bg-[linear-gradient(135deg,#12343b,#246a62,#d28b24)] p-8 text-white"><p className="text-sm font-bold uppercase tracking-[.2em] text-amber-100">Portable game-night guide</p><h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-5xl">Best travel Mahjong sets</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-teal-50">For compact travel, compare YMI Inkstone with Classic Mini using the published case dimensions and your group’s ability to handle small tiles. For driving to another home, a bagged full-size kit may be a better compromise. We have not tested these sets in transit. A small case does not establish airline fit, readability, durability or room to play at the destination.</p><p className="mt-5 text-sm text-teal-100">BestPickZone participates in the Amazon Services LLC Associates Program. We may earn a commission when you buy through links here, at no extra cost to you. Product contents, prices, dimensions, and availability can change, so confirm the exact listing before buying.</p></header>
  <section className="mb-10 rounded-[2rem] border border-teal-100 bg-teal-50 p-6"><h2 className="text-3xl font-black text-slate-900">Quick picks</h2><div className="mt-5 grid gap-4 md:grid-cols-2">{picks.map((pick) => <div key={pick.title} className="flex flex-col rounded-2xl bg-white p-5 shadow-sm"><p className="text-sm font-bold uppercase tracking-wide text-teal-700">{pick.badge}</p><h3 className="mt-2 text-xl font-black text-slate-900">{pick.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{pick.bestFor}</p><a href={amazon(pick.query)} target="_blank" rel="sponsored noopener noreferrer" className="mt-5 inline-flex justify-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-yellow-300">Search Amazon for this set</a></div>)}</div></section>
  <section className="space-y-7">{picks.map((pick, index) => <article id={`pick-${index + 1}`} key={pick.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"><p className="text-sm font-bold uppercase tracking-[.18em] text-teal-700">#{index + 1} · {pick.badge}</p><h2 className="mt-2 text-3xl font-black text-slate-900">{pick.title}</h2><p className="mt-4 font-semibold text-slate-800">Best for: {pick.bestFor}</p><p className="mt-5 leading-8 text-slate-700">{pick.copy}</p><div className="mt-5 grid gap-4 md:grid-cols-2"><div className="rounded-2xl bg-emerald-50 p-5"><h3 className="font-bold text-emerald-950">Pros</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-emerald-950">{pick.pros.map((pro) => <li key={pro}>{pro}</li>)}</ul></div><div className="rounded-2xl bg-rose-50 p-5"><h3 className="font-bold text-rose-950">Cons</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-rose-950">{pick.cons.map((con) => <li key={con}>{con}</li>)}</ul></div></div><p className="mt-5 rounded-2xl bg-slate-50 p-5 leading-7 text-slate-700"><strong>Skip this if:</strong> {pick.skip}</p><a href={amazon(pick.query)} target="_blank" rel="sponsored noopener noreferrer" className="mt-6 inline-flex rounded-full bg-yellow-400 px-6 py-4 text-sm font-bold text-slate-950 hover:bg-yellow-300">Search Amazon for this set</a></article>)}</section>
  <section className="mt-12 rounded-[2rem] bg-slate-900 p-7 text-white"><h2 className="text-3xl font-black">How to choose a travel Mahjong set</h2><div className="mt-5 space-y-5 leading-8 text-slate-200"><p><strong>Decide whether you need a mini set or a mobile full-size set.</strong> That is the real travel decision. A mini set saves weight and fits into tight luggage, but smaller markings and pieces may be unsuitable for some players. A full-size bagged set takes more space but gives the group normal racks, pushers, and tile handling after arrival. For flying with a personal bag, compare the packed dimensions with your carrier’s current allowance. For car trips, vacation rentals, cruises with a cabin, or regular off-site game nights, a full-size carrying bag often provides the better experience.</p><p><strong>Protect the pieces that create setup friction.</strong> Tiles are not the only things that get lost in transit. Racks, pushers, dice, a wind indicator, chips, the current card, and a scorebook can all disappear into separate bags if the set has no organization. Before buying, inspect whether the case has room for the accessories your group uses. A bag with pockets or a small accessory pouch is more valuable than a pretty exterior if you are constantly unpacking and repacking the game.</p><p><strong>Do not choose a travel set before confirming the rule system.</strong> This page is oriented to American Mahjong products. Chinese Mahjong and Japanese Riichi Mahjong use different tile configurations and game conventions. If you are traveling to play with someone else, ask which version they play and whether they supply the card or tiles. The best travel bag cannot solve an incompatible set, and a compact set that works for your own group may not be appropriate for the destination table.</p></div></section>
  <section className="mt-8 grid gap-6 md:grid-cols-2"><div className="rounded-[2rem] border border-teal-100 bg-teal-50 p-7"><h2 className="text-2xl font-black text-slate-900">What to pack with the set</h2><p className="mt-4 leading-7 text-slate-700">Bring the current card if your group uses one, plus a simple protective sleeve so it does not bend in a tote. Keep dice, chips, and the wind indicator in a zip pouch. A compact table mat can improve a slick rental-house table, but it is optional; check that any covering lies flat and does not interfere with stable tiles and racks. Most important: pack the kit in the same order after every game. The goal is not a perfect accessory collection. It is being able to open one bag and begin a round without hunting through luggage.</p></div><div className="rounded-[2rem] border border-slate-200 bg-white p-7"><h2 className="text-2xl font-black text-slate-900">When to choose another guide</h2><p className="mt-4 leading-7 text-slate-700">Use <Link href="/mahjong/best-mahjong-sets-for-beginners" className="font-bold text-teal-800 underline">Best Mahjong Sets for Beginners</Link> if you have not yet learned the difference between a tile set, racks, pushers, and the American annual card. Use <Link href="/mahjong/best-american-mahjong-sets-on-amazon" className="font-bold text-teal-800 underline">Best American Mahjong Sets on Amazon</Link> when the set will mostly stay home and your decision is about host quality, case style, or regular-game accessories. This guide is narrower: it is for the player who needs the game to move.</p></div></section>
  <section className="mt-12 rounded-[2rem] border border-teal-100 bg-teal-50 p-7"><h2 className="text-3xl font-black text-slate-900">Final verdict</h2><p className="mt-4 max-w-3xl leading-8 text-slate-700">Inkstone is the compact vinyl-case option; Classic Mini is the wooden-case alternative with no pushers. Choose a regular bagged kit such as Linda Li only when luggage room is less important than larger pieces. Measure the packed space, try miniature handling and confirm the destination’s rule system before ordering.</p><a href={amazon(picks[0].query)} target="_blank" rel="sponsored noopener noreferrer" className="mt-6 inline-flex rounded-full bg-yellow-400 px-6 py-4 text-sm font-bold text-slate-950 hover:bg-yellow-300">Search Amazon for this set</a><div className="mt-6 flex flex-wrap gap-3"><Link href="/mahjong" className="rounded-full bg-white px-4 py-3 text-sm font-bold text-slate-800">Explore Mahjong guides</Link><Link href="/mahjong/best-mahjong-sets-for-beginners" className="rounded-full bg-white px-4 py-3 text-sm font-bold text-slate-800">Best Mahjong sets for beginners</Link><Link href="/mahjong/best-american-mahjong-sets-on-amazon" className="rounded-full bg-white px-4 py-3 text-sm font-bold text-slate-800">Best American Mahjong sets on Amazon</Link></div></section>
<section className="mt-10 rounded-2xl border border-teal-100 bg-teal-50 p-7"><h2 className="text-2xl font-bold">Plan the game at the destination</h2><p className="mt-4 leading-8">A set that fits in luggage still needs a usable table. Ask the host about a stable surface, seating for the group and lighting before packing a mat or extra racks. For a shared vacation house, decide who brings the card and who brings the tiles. Carrying duplicate heavy equipment is an easy mistake when each person assumes someone else has only accessories.</p><p className="mt-4 leading-8">Pack a simple inventory list with the set, separating spare tiles from playing components. Recheck it before leaving the venue instead of discovering a missing die at the next hotel. Follow the maker’s cleaning directions; if none are available, ask before using solvents, soaking painted tiles or putting fabric and wood components through a wash cycle. Dry packing matters because a closed case can retain moisture.</p><p className="mt-4 leading-8">The previous drizzle, bestcool, Rykzo and unnamed travel-kit recommendations relied on listing descriptions we could not confirm with comparable primary documentation. They are no longer ranked here. In particular, a repeated 2.20-pound title is not an independently measured travel weight. The replacements above have identifiable manufacturer pages, but their comfort and real-world handling remain untested.</p></section><section className="mt-10 rounded-2xl border border-teal-100 bg-teal-50 p-7"><h2 className="text-2xl font-bold">Sources and product checks</h2><p className="mt-4 leading-8">Product specifications checked October 28, 2026. This is a research-based comparison; we have not hands-on tested these sets. Amazon buttons open searches, not verified offers. Match the manufacturer, model and included pieces before ordering. Prices, stock, durability and personal comfort have not been independently verified.</p><p className="mt-4 leading-8"><a className="underline" href="https://www.ymimports.com/products/fx-am008-a" target="_blank" rel="noopener noreferrer">Inkstone specifications</a> · <a className="underline" href="https://www.ymimports.com/products/us-af020-c" target="_blank" rel="noopener noreferrer">Classic Mini specifications</a> · <a className="underline" href="https://american-wholesaler.com/products/soft-sided-american-mah-jongg-set-by-linda-li-with-white-tiles-and-modern-pushers-blue-paisley-soft-bag" target="_blank" rel="noopener noreferrer">Linda Li bagged kit</a> · <a className="underline" href="https://nationalmahjonggleague.org/store.aspx" target="_blank" rel="noopener noreferrer">NMJL cards</a></p></section>
<ArticleAmazonProducts path="/mahjong/best-travel-mahjong-sets" />
</main> }
