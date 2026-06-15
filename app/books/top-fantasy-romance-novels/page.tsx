import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

const pageUrl = 'https://bestpickzone.com/books/top-fantasy-romance-novels'
const heroImage = '/images/books/romantasy/fantasy-romance-hero-2026.svg'

const picks = [
  {
    rank: 1,
    title: 'A Court of Thorns and Roses',
    author: 'Sarah J. Maas',
    badge: 'Best Overall',
    vibe: 'Fae courts, curses, emotional escalation, and the genre’s clearest gateway drug.',
    bestFor: 'Readers who want the easiest on-ramp into modern romantasy and plan to keep going if book one hooks them.',
    skipIf: 'you want a fully mature political fantasy from page one. This starts in fairytale mode before the series grows teeth.',
    why: 'ACOTAR is still the safest first recommendation because it balances fantasy access, romance tension, and huge sequel momentum better than almost anything else in the category.',
    color: 'from-rose-300 via-fuchsia-300 to-purple-400',
    emoji: '👑',
  },
  {
    rank: 2,
    title: 'Fourth Wing',
    author: 'Rebecca Yarros',
    badge: 'Best With Dragons',
    vibe: 'War college pressure, dragon bonds, dangerous attraction, and pure binge velocity.',
    bestFor: 'Readers who want a page-turner immediately and love the idea of dragons, trials, and enemies-to-lovers energy.',
    skipIf: 'you want quiet prose or low-drama fantasy. This is a blockbuster, not a whisper.',
    why: 'Fourth Wing works because Violet is vulnerable in a world that punishes weakness, and the romance stays wired directly into survival.',
    color: 'from-sky-300 via-indigo-300 to-violet-400',
    emoji: '🐉',
  },
  {
    rank: 3,
    title: 'The Serpent and the Wings of Night',
    author: 'Carissa Broadbent',
    badge: 'Best Dark Pick',
    vibe: 'Vampires, lethal trials, emotional danger, and tension that never feels safe.',
    bestFor: 'Readers who want darker stakes than ACOTAR without losing the relationship focus.',
    skipIf: 'you want soft comfort or cozy magic. This book runs on risk.',
    why: 'It lands because the romance grows inside a tournament structure where trust costs something every single time.',
    color: 'from-red-300 via-rose-400 to-purple-500',
    emoji: '🩸',
  },
  {
    rank: 4,
    title: 'From Blood and Ash',
    author: 'Jennifer L. Armentrout',
    badge: 'Best Spicy Series',
    vibe: 'Forbidden attraction, secrets, gods, bloodlines, and high-drama payoff.',
    bestFor: 'Readers who want steam, twists, and a bigger multi-book commitment.',
    skipIf: 'you are allergic to melodrama or want tight restraint.',
    why: 'This is one of the genre’s biggest heat-forward series picks, and it is built to make you buy the next installment.',
    color: 'from-orange-300 via-rose-300 to-red-400',
    emoji: '🔥',
  },
  {
    rank: 5,
    title: 'Radiance',
    author: 'Grace Draven',
    badge: 'Best Mature Romance',
    vibe: 'Arranged marriage, mutual respect, emotional warmth, and a healthier adult dynamic.',
    bestFor: 'Readers who are tired of chaotic alphahole energy and want tenderness that still feels romantic.',
    skipIf: 'you only want maximum angst and instant combustion.',
    why: 'Radiance stands out because it proves romantasy can be gentle, funny, and deeply adult without becoming bland.',
    color: 'from-amber-200 via-yellow-200 to-orange-300',
    emoji: '✨',
  },
  {
    rank: 6,
    title: 'The Bridge Kingdom',
    author: 'Danielle L. Jensen',
    badge: 'Best Political Fantasy Romance',
    vibe: 'Marriage-as-weapon, espionage, betrayal, and strategic attraction.',
    bestFor: 'Readers who want more kingdom-level scheming and less academy drama.',
    skipIf: 'you want whimsical magic over hard political tension.',
    why: 'The romance works because every choice is tangled up in national interest, not just chemistry.',
    color: 'from-emerald-200 via-teal-200 to-cyan-300',
    emoji: '🗡️',
  },
  {
    rank: 7,
    title: 'Once Upon a Broken Heart',
    author: 'Stephanie Garber',
    badge: 'Best Fairytale Mood',
    vibe: 'Curses, fate, ornate whimsy, and heartbreak in a glittering fantasy wrapper.',
    bestFor: 'Readers who want a lighter-looking page with strong romantic ache underneath.',
    skipIf: 'you only want adult spice. This is more magic-kiss tension than heat.',
    why: 'It delivers fairytale texture better than almost any other mainstream romantasy recommendation.',
    color: 'from-pink-200 via-fuchsia-200 to-rose-300',
    emoji: '🍎',
  },
  {
    rank: 8,
    title: 'Kingdom of the Wicked',
    author: 'Kerri Maniscalco',
    badge: 'Best Gothic Energy',
    vibe: 'Witches, demons, murder, and rich atmosphere with a decadent edge.',
    bestFor: 'Readers who want sensual gothic drama without losing pace.',
    skipIf: 'you need pristine logic over mood. This sells ambiance first.',
    why: 'It is one of the better crossover picks for readers who want dark-romance texture in a fantasy frame.',
    color: 'from-stone-300 via-zinc-300 to-red-300',
    emoji: '🕯️',
  },
  {
    rank: 9,
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
    badge: 'Best Mythic Romance',
    vibe: 'Mythological longing, doomed tenderness, and lyrical emotional devastation.',
    bestFor: 'Readers who care more about emotional resonance than spicy trope stacking.',
    skipIf: 'you specifically want commercial-series pacing and cliffhangers.',
    why: 'This is the list’s most literary pick, but it belongs because the romance is absolutely central and unforgettable.',
    color: 'from-blue-200 via-cyan-200 to-sky-300',
    emoji: '🏛️',
  },
  {
    rank: 10,
    title: 'The Cruel Prince',
    author: 'Holly Black',
    badge: 'Best For Court Politics',
    vibe: 'Cruel fae, ambition, humiliation, and razor-sharp power games.',
    bestFor: 'Readers who want nastier court tension and slower emotional trust.',
    skipIf: 'you expect cuddly romance in book one. This one makes you work for it.',
    why: 'Holly Black’s edge is what separates it from softer fae books; the attraction feels dangerous because the world is.',
    color: 'from-emerald-300 via-lime-300 to-green-400',
    emoji: '♟️',
  },
  {
    rank: 11,
    title: 'These Hollow Vows',
    author: 'Lexi Ryan',
    badge: 'Best For ACOTAR Fans',
    vibe: 'Fae bargains, dual love-interest tension, and a cleaner YA-friendly binge.',
    bestFor: 'Readers who want ACOTAR-adjacent energy but a slightly easier, faster read.',
    skipIf: 'you need the deepest prose on the list.',
    why: 'This is a practical recommendation because it scratches the exact post-ACOTAR itch many readers search for.',
    color: 'from-violet-200 via-purple-200 to-indigo-300',
    emoji: '🦋',
  },
  {
    rank: 12,
    title: 'One Dark Window',
    author: 'Rachel Gillig',
    badge: 'Best Gothic Worldbuilding',
    vibe: 'Mist, cards, monsters, and a moodier fantasy structure than the usual fae-court lane.',
    bestFor: 'Readers who want atmosphere, curse logic, and a more distinctive world than standard romantasy wallpaper.',
    skipIf: 'you want instant speed over setting immersion.',
    why: 'It is one of the strongest picks when you want something that feels current but not interchangeable.',
    color: 'from-slate-300 via-zinc-300 to-neutral-400',
    emoji: '🌙',
  },
  {
    rank: 13,
    title: 'Divine Rivals',
    author: 'Rebecca Ross',
    badge: 'Best Emotional Slow Burn',
    vibe: 'Letters, wartime longing, and softer emotional ache than the category’s louder hits.',
    bestFor: 'Readers who want romance-first tenderness with fantasy elements rather than nonstop combat.',
    skipIf: 'you need high spice or dragon-saddle chaos.',
    why: 'It earns its place because it gives romantasy readers a different emotional register without losing addictiveness.',
    color: 'from-cyan-200 via-blue-200 to-indigo-300',
    emoji: '💌',
  },
  {
    rank: 14,
    title: 'When the Moon Hatched',
    author: 'Sarah A. Parker',
    badge: 'Best For Big Feelings',
    vibe: 'Lush language, high fantasy scenery, aching attraction, and maximal mood.',
    bestFor: 'Readers who want the category turned all the way up: lush, dramatic, and intensely romantic.',
    skipIf: 'you prefer clipped prose and utilitarian plotting.',
    why: 'This is the recommendation for readers who want romantasy to feel sweeping and emotionally oversized.',
    color: 'from-indigo-200 via-violet-200 to-fuchsia-300',
    emoji: '🌌',
  },
  {
    rank: 15,
    title: 'Rites of the Starling',
    author: 'Devney Perry',
    badge: 'Best 2026 Release',
    vibe: 'Current-year romantasy momentum, quest danger, and sequel-level emotional stakes.',
    bestFor: 'Readers already willing to start the Shield of Sparrows series and want a 2026 release with affiliate-buy intent.',
    skipIf: 'you only want standalones. This is a book-two recommendation.',
    why: 'It matters because it gives this page a fresh 2026 buying angle instead of only evergreen backlist titles.',
    color: 'from-amber-300 via-orange-300 to-rose-300',
    emoji: '🪽',
  },
] as const

const faqItems = [
  {
    question: 'What is the best fantasy romance novel?',
    answer:
      'For most readers, A Court of Thorns and Roses is still the best first fantasy romance novel because it is accessible, addictive, and central to the modern romantasy boom.',
  },
  {
    question: 'What should I read after Fourth Wing?',
    answer:
      'If you want darker pressure after Fourth Wing, start with The Serpent and the Wings of Night. If you want more spice, go to From Blood and Ash. If you want political tension, try The Bridge Kingdom.',
  },
  {
    question: 'Are fantasy romance novels always spicy?',
    answer:
      'No. Some are spice-forward, but others lean more on emotional tension, slow burn, or fantasy atmosphere. Radiance and Once Upon a Broken Heart land very differently from From Blood and Ash.',
  },
] as const

function amazonLink(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=althcu-20`
}

export const metadata: Metadata = {
  title: 'Top 15 Fantasy Romance Novels to Read in 2026',
  description:
    'The best fantasy romance novels to read in 2026, ranked by reader type, with clear start-here picks, books like ACOTAR and Fourth Wing, and Amazon links throughout.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Top 15 Fantasy Romance Novels to Read in 2026',
    description:
      'A buzzier but still useful romantasy guide with the best fantasy romance books for beginners, dragon fans, dark-fantasy readers, and 2026 release hunters.',
    url: pageUrl,
    siteName: 'BestPickZone',
    type: 'article',
    images: [heroImage],
  },
}

export default function TopFantasyRomanceNovelsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 15 Fantasy Romance Novels to Read in 2026',
    description:
      'The best fantasy romance novels to read in 2026, ranked by reader type, with clear start-here picks, books like ACOTAR and Fourth Wing, and Amazon links throughout.',
    datePublished: '2026-06-15',
    dateModified: '2026-06-15',
    author: { '@type': 'Organization', name: 'BestPickZone' },
    publisher: { '@type': 'Organization', name: 'BestPickZone' },
    mainEntityOfPage: pageUrl,
    image: [heroImage],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: picks.map((pick) => ({
      '@type': 'ListItem',
      position: pick.rank,
      name: `${pick.title} by ${pick.author}`,
      url: pageUrl,
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-[radial-gradient(circle_at_top,#fff8fb_0%,#fffdf8_35%,#ffffff_100%)]">
        <section className="mx-auto max-w-6xl px-4 py-10">
          <nav className="mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-fuchsia-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/books" className="hover:text-fuchsia-700">
              Books
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-gray-800">Top Fantasy Romance Novels</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex rounded-full bg-fuchsia-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-800">
                Romantasy Guide 2026
              </p>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
                Top 15 fantasy romance novels to read in 2026, from dragon chaos to fae-court obsession.
              </h1>
              <p className="mb-4 max-w-3xl text-lg leading-relaxed text-gray-700">
                If you want one fast answer, start with <strong>A Court of Thorns and Roses</strong>.
                It is still the easiest gateway into modern fantasy romance because it gives you the
                fae-world pull, romantic tension, and sequel momentum that make readers keep buying deeper
                into the genre. If you want dragons instead, go straight to <strong>Fourth Wing</strong>.
              </p>
              <p className="mb-5 max-w-3xl text-base leading-relaxed text-gray-600">
                This page is built more like a magazine list than a sleepy catalog: quick picks first,
                clear reader-fit notes, and enough honest tradeoffs that you can actually decide what to buy.
              </p>
              <div className="rounded-3xl border border-rose-200 bg-white/90 p-4 text-sm leading-relaxed text-gray-600 shadow-sm">
                <strong className="text-gray-900">Affiliate disclosure:</strong> This article contains Amazon
                affiliate links. If you buy through them, BestPickZone may earn a commission at no extra cost to you.
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-fuchsia-200 bg-[#1c1536] shadow-[0_30px_80px_rgba(80,24,120,0.18)]">
              <Image
                src={heroImage}
                alt="An original BestPickZone fantasy romance illustration with stylized book covers, crowns, wings, and moody romantasy colors"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-10">
          <div className="rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-rose-50 p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Quick recommendations if you do not want to overthink this</h2>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              <div className="rounded-2xl bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Best Overall</p>
                <p className="mt-2 text-lg font-bold text-gray-900">A Court of Thorns and Roses</p>
                <a href={amazonLink('A Court of Thorns and Roses Sarah J Maas')} target="_blank" rel="sponsored noopener" className="mt-3 inline-flex font-semibold text-fuchsia-700 underline underline-offset-2">Check price on Amazon</a>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Best 2026 Release</p>
                <p className="mt-2 text-lg font-bold text-gray-900">Rites of the Starling</p>
                <a href={amazonLink('Rites of the Starling Devney Perry')} target="_blank" rel="sponsored noopener" className="mt-3 inline-flex font-semibold text-fuchsia-700 underline underline-offset-2">Check price on Amazon</a>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Best With Dragons</p>
                <p className="mt-2 text-lg font-bold text-gray-900">Fourth Wing</p>
                <a href={amazonLink('Fourth Wing Rebecca Yarros')} target="_blank" rel="sponsored noopener" className="mt-3 inline-flex font-semibold text-fuchsia-700 underline underline-offset-2">Check price on Amazon</a>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Best Dark Pick</p>
                <p className="mt-2 text-lg font-bold text-gray-900">The Serpent and the Wings of Night</p>
                <a href={amazonLink('The Serpent and the Wings of Night Carissa Broadbent')} target="_blank" rel="sponsored noopener" className="mt-3 inline-flex font-semibold text-fuchsia-700 underline underline-offset-2">Check price on Amazon</a>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Best Mature Pick</p>
                <p className="mt-2 text-lg font-bold text-gray-900">Radiance</p>
                <a href={amazonLink('Radiance Grace Draven')} target="_blank" rel="sponsored noopener" className="mt-3 inline-flex font-semibold text-fuchsia-700 underline underline-offset-2">Check price on Amazon</a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-10 rounded-[2rem] border border-fuchsia-100 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-2xl font-bold text-gray-900">What counts as fantasy romance instead of just fantasy with a love interest?</h2>
              <p className="mb-3 text-gray-700">
                In a real fantasy romance novel, the relationship is not decorative. The fantasy conflict
                and the romantic conflict keep crossing wires. Readers are asking both “will they survive?”
                and “will they choose each other?” at the same time.
              </p>
              <p className="text-gray-700">
                That is why the genre keeps winning readers in 2026. You get dragons, fae courts,
                cursed kingdoms, demon bargains, or war colleges, but the emotional payoff is still the engine.
              </p>
            </div>

            <div className="space-y-6">
              {picks.map((pick) => (
                <article key={pick.rank} className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
                  <div className={`bg-gradient-to-r ${pick.color} p-5`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/85 text-3xl shadow-sm">
                        {pick.emoji}
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900">
                            #{pick.rank}
                          </span>
                          <span className="rounded-full bg-gray-900/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                            {pick.badge}
                          </span>
                        </div>
                        <h2 className="text-2xl font-extrabold text-gray-950">{pick.title}</h2>
                        <p className="mt-1 text-sm font-semibold text-gray-900/85">{pick.author}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="mb-4 text-base leading-relaxed text-gray-700">{pick.vibe}</p>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-2xl bg-rose-50 p-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">Buy this if</p>
                        <p className="text-sm leading-relaxed text-gray-700">{pick.bestFor}</p>
                      </div>
                      <div className="rounded-2xl bg-amber-50 p-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Skip this if</p>
                        <p className="text-sm leading-relaxed text-gray-700">{pick.skipIf}</p>
                      </div>
                      <div className="rounded-2xl bg-fuchsia-50 p-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-700">Why it ranks</p>
                        <p className="text-sm leading-relaxed text-gray-700">{pick.why}</p>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href={amazonLink(`${pick.title} ${pick.author}`)}
                        target="_blank"
                        rel="sponsored noopener"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-fuchsia-800"
                      >
                        Buy on Amazon
                      </a>
                      <a
                        href={amazonLink(`${pick.title} ${pick.author} paperback hardcover kindle`)}
                        target="_blank"
                        rel="sponsored noopener"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-fuchsia-300 px-5 py-3 text-sm font-bold text-fuchsia-800 transition hover:bg-fuchsia-50"
                      >
                        Compare editions on Amazon
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[2rem] border border-fuchsia-200 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-xl font-bold text-gray-900">Start here if you are brand new</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                Start with <strong>ACOTAR</strong> if you want the genre’s standard gateway. Start with
                <strong> Fourth Wing</strong> if you need faster pacing. Start with <strong>Radiance</strong>
                if you want adult emotional chemistry without chaos.
              </p>
              <a href={amazonLink('A Court of Thorns and Roses Sarah J Maas')} target="_blank" rel="sponsored noopener" className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-fuchsia-700 px-4 py-3 text-sm font-bold text-white hover:bg-fuchsia-600">
                Start with ACOTAR
              </a>
            </div>

            <div className="rounded-[2rem] border border-amber-200 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-xl font-bold text-gray-900">If you are here because of Fourth Wing</h2>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                Go next to <Link href="/books/books-like-fourth-wing-fantasy-romance" className="font-semibold text-fuchsia-700 hover:underline">our books-like-Fourth-Wing page</Link> if you want more dragon-school pressure, trials, and dangerous romantic energy.
              </p>
              <Link href="/books/books-like-fourth-wing-fantasy-romance" className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-fuchsia-300 px-4 py-3 text-sm font-bold text-fuchsia-800 hover:bg-fuchsia-50">
                See books like Fourth Wing
              </Link>
            </div>

            <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-xl font-bold text-gray-900">Related BestPickZone pages</h2>
              <div className="space-y-3 text-sm">
                <Link href="/books/genre-fiction" className="block font-semibold text-gray-800 hover:text-fuchsia-700">
                  Best Genre Fiction Books →
                </Link>
                <Link href="/books/best-urban-fantasy-series-completed" className="block font-semibold text-gray-800 hover:text-fuchsia-700">
                  Best Completed Urban Fantasy Series →
                </Link>
                <Link href="/books/reader-picks" className="block font-semibold text-gray-800 hover:text-fuchsia-700">
                  Reader-Intent Book Lists →
                </Link>
              </div>
            </div>
          </aside>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-14">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold text-gray-900">Frequently asked questions about fantasy romance novels</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{item.question}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
