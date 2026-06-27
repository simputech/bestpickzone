import type { Metadata } from 'next'
import Link from 'next/link'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'

// ---------------------------------------------------------------------------
// BestPickZone · /books/genre-fiction/best-wwii-novels-2026
// Standalone custom page. Format cloned from best-historical-epics-2026.
// Every title, author, year, page count, and series fact verified against
// real sources (Amazon / publisher / Wikipedia) as of June 2026.
// Amazon tag: althcu-20 ONLY. CTA text: "Click Here to Buy on Amazon".
// ---------------------------------------------------------------------------

const CANONICAL =
  'https://bestpickzone.com/books/genre-fiction/best-wwii-novels-2026'
const PUBLISHED_DATE = '2026-06-26'
const UPDATED_DATE = '2026-06-26'

const META_DESCRIPTION =
  'Seven great WWII novels, ranked by where to actually start and matched to reader type, emotional weight, and historical setting. Start with The Nightingale, then choose the best fit from All the Light We Cannot See, The Book Thief, and more.'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best WWII Novels to Read in 2026 (Ranked by Where to Start) | BestPickZone',
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL },
  keywords: [
    'best wwii novels',
    'best world war 2 novels',
    'best world war ii fiction',
    'best historical war novels',
    'best ww2 books fiction',
    'best novels set in world war ii',
    'books like the nightingale',
    'all the light we cannot see similar books',
  ],
  openGraph: {
    url: CANONICAL,
    title: 'Best WWII Novels to Read in 2026 (Ranked by Where to Start)',
    description: META_DESCRIPTION,
  },
}, {
  category: 'genre-fiction',
  publishedTime: PUBLISHED_DATE,
  modifiedTime: UPDATED_DATE,
  section: 'Genre Fiction',
  tags: [
    'wwii novels',
    'world war ii fiction',
    'historical fiction',
    'war novels',
    'book recommendations',
  ],
})

// --- Affiliate helper -------------------------------------------------------
const AMAZON_TAG = 'althcu-20'
function amazon(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

// --- Book data (verified) ---------------------------------------------------
type Book = {
  id: string;
  rank: number;
  badge: string;
  title: string;
  author: string;
  year: string;
  setting: string;
  pages: string;
  series: string;
  amazonQuery: string;
}

const BOOKS: Book[] = [
  {
    id: "nightingale",
    rank: 1,
    badge: "Best overall · start here",
    title: "The Nightingale",
    author: "Kristin Hannah",
    year: "2015",
    setting: "Occupied France",
    pages: "~440 pages",
    series: "Standalone",
    amazonQuery: "The Nightingale Kristin Hannah",
  },
  {
    id: "all-the-light",
    rank: 2,
    badge: "Best prose",
    title: "All the Light We Cannot See",
    author: "Anthony Doerr",
    year: "2014",
    setting: "Saint-Malo, France & Germany",
    pages: "~530 pages",
    series: "Standalone",
    amazonQuery: "All the Light We Cannot See Anthony Doerr",
  },
  {
    id: "book-thief",
    rank: 3,
    badge: "Most distinctive",
    title: "The Book Thief",
    author: "Markus Zusak",
    year: "2005",
    setting: "Nazi Germany (home front)",
    pages: "~550 pages",
    series: "Standalone",
    amazonQuery: "The Book Thief Markus Zusak",
  },
  {
    id: "guernsey",
    rank: 4,
    badge: "Gentlest · shortest way in",
    title: "The Guernsey Literary and Potato Peel Pie Society",
    author: "Mary Ann Shaffer & Annie Barrows",
    year: "2008",
    setting: "Channel Islands, 1946",
    pages: "~290 pages",
    series: "Standalone",
    amazonQuery: "The Guernsey Literary and Potato Peel Pie Society",
  },
  {
    id: "code-name-verity",
    rank: 5,
    badge: "Best Resistance thriller",
    title: "Code Name Verity",
    author: "Elizabeth Wein",
    year: "2012",
    setting: "Occupied France, 1943",
    pages: "~340 pages",
    series: "Reads standalone",
    amazonQuery: "Code Name Verity Elizabeth Wein",
  },
  {
    id: "tattooist",
    rank: 6,
    badge: "Best-known true-story basis",
    title: "The Tattooist of Auschwitz",
    author: "Heather Morris",
    year: "2018",
    setting: "Auschwitz-Birkenau, 1942",
    pages: "~260 pages",
    series: "Standalone",
    amazonQuery: "The Tattooist of Auschwitz Heather Morris",
  },
  {
    id: "alice-network",
    rank: 7,
    badge: "Best dual-timeline spy story",
    title: "The Alice Network",
    author: "Kate Quinn",
    year: "2017",
    setting: "France, 1915 & 1947",
    pages: "~530 pages",
    series: "Standalone",
    amazonQuery: "The Alice Network Kate Quinn",
  },
]

// --- Commitment meter rows (sorted long → short) ----------------------------
const METER = [
  { id: "all-the-light", label: "All the Light We Cannot See", pages: "~530 pp", width: 96 },
  { id: "alice-network", label: "The Alice Network", pages: "~530 pp", width: 96 },
  { id: "book-thief", label: "The Book Thief", pages: "~550 pp", width: 100 },
  { id: "nightingale", label: "The Nightingale", pages: "~440 pp", width: 80 },
  { id: "code-name-verity", label: "Code Name Verity", pages: "~340 pp", width: 62 },
  { id: "guernsey", label: "Guernsey Literary Society", pages: "~290 pp", width: 53 },
  { id: "tattooist", label: "The Tattooist of Auschwitz", pages: "~260 pp", width: 47 },
];

export default function Page() {
  return (
    <main className="wwii-page">
      {/* ---- Skip / breadcrumb ---- */}
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link href="/books">Books</Link>
        <span aria-hidden="true"> / </span>
        <Link href="/books/genre-fiction">Genre Fiction</Link>
      </nav>

      {/* ---- FTC disclosure above the fold ---- */}
      <p className="disclosure">
        BestPickZone is reader-supported. When you buy through links on this
        page, we may earn an Amazon commission — at no extra cost to you.{" "}
        <Link href="/disclosure">How this works</Link>.
      </p>

      <p className="eyebrow">📚 Genre Fiction · Ranked</p>

      <h1>
        The 7 Best WWII Novels to Read in 2026 — ranked by where to start
      </h1>

      <p className="lede">
        Every book here is great. So instead of pretending one “wins,” we ranked
        them by the only thing that actually helps: which one you should pick up{" "}
        <em>first</em> — sorted by emotional weight, setting, and the exact
        reader it’s made for.
      </p>

      <p className="intro">
        Start with <em>The Nightingale</em>. Two sisters, occupied France, and a
        story built to wreck you by the last chapter — it’s the book that turns
        people who “don’t read war novels” into people who do, and at ~440 pages
        it asks for less patience than anything else on the shelf. Want the most
        beautifully written one instead? That’s <em>All the Light We Cannot
        See</em>, and it has the Pulitzer to back it up. Everything below is
        sorted the same way: not by which is “best,” but by which one is right
        for you, right now — the gentle one, the twisty one, the one based on a
        true story you should read with your guard up.
      </p>

      <p className="verified">
        ✓ Titles, authors, publication years, and availability verified against
        Amazon as of June 2026. Page counts vary by edition and are approximate;
        availability and price can change — confirm before buying.
      </p>

      {/* ---- Reader-state selector ---- */}
      <section className="selector" aria-labelledby="pick-h">
        <p className="section-kicker">Start here</p>
        <h2 id="pick-h">Pick your WWII novel</h2>
        <ul className="pick-list">
          <li>
            <a href="#nightingale">
              <strong>“Make me feel something.”</strong> → <em>The Nightingale</em> — the genre’s best on-ramp.
            </a>
          </li>
          <li>
            <a href="#all-the-light">
              <strong>“I want the best-written one.”</strong> → <em>All the Light We Cannot See</em> — the Pulitzer winner.
            </a>
          </li>
          <li>
            <a href="#book-thief">
              <strong>“Show me something I haven’t read before.”</strong> → <em>The Book Thief</em> — narrated by Death.
            </a>
          </li>
          <li>
            <a href="#guernsey">
              <strong>“Keep it gentle and short.”</strong> → <em>The Guernsey Literary and Potato Peel Pie Society</em>.
            </a>
          </li>
          <li>
            <a href="#code-name-verity">
              <strong>“I want tension and a twist.”</strong> → <em>Code Name Verity</em> — a Resistance spy thriller.
            </a>
          </li>
          <li>
            <a href="#tattooist">
              <strong>“Is it based on a true story?”</strong> → <em>The Tattooist of Auschwitz</em> — with a caveat.
            </a>
          </li>
        </ul>
      </section>

      {/* ---- Commitment meter ---- */}
      <section className="meter" aria-labelledby="meter-h">
        <p className="section-kicker">Before you commit</p>
        <h2 id="meter-h">The commitment-o-meter</h2>
        <ul className="meter-rows">
          {METER.map((m) => (
            <li key={m.id}>
              <a href={`#${m.id}`} className="meter-label">
                <em>{m.label}</em>
              </a>
              <span className="meter-track" aria-hidden="true">
                <span className="meter-fill" style={{ width: `${m.width}%` }} />
              </span>
              <span className="meter-pp">{m.pages}</span>
            </li>
          ))}
        </ul>
        <p className="meter-note">
          Page counts vary by edition — these are ballpark. A great WWII novel
          doesn’t have to be a doorstopper.
        </p>
      </section>

      {/* ---- The ranked picks ---- */}
      <section className="picks" aria-label="Ranked picks">
        {/* 1 — The Nightingale */}
        <article id="nightingale" className="pick">
          <PickHeader b={BOOKS[0]} />
          <p>
            Two sisters, one occupation, two completely different kinds of
            courage. Vianne stays home and tries to keep her daughter alive with
            a German officer living under her roof; her younger sister Isabelle
            can’t sit still, so she runs escaped airmen over the Pyrenees for the
            Resistance. Hannah isn’t after subtlety here — she’s after your
            tear ducts, and she gets there. That’s the whole appeal. It’s short
            enough to finish in a weekend and emotional enough that you’ll need
            one.
          </p>
          <p>
            It took the 2015 Goodreads Choice Award for historical fiction, and a
            film with the Fanning sisters has been circling for years. Yes, it’s
            sentimental. People who want to be moved have never once held that
            against it.
          </p>
          <p className="skip">
            <strong>Skip this if:</strong> you bristle at a book that’s openly
            engineered to make you cry, or you want spare, restrained prose.
          </p>
          <p className="series-note">
            A standalone — no series commitment required.
          </p>
          <BuyButton b={BOOKS[0]} />
        </article>

        {/* 2 — All the Light We Cannot See */}
        <article id="all-the-light" className="pick">
          <PickHeader b={BOOKS[1]} />
          <p>
            A blind girl flees Paris for the walled seaside town of Saint-Malo.
            A German orphan with a gift for radios gets swept into the war
            machine that gift makes him useful to. For most of the book they
            don’t know the other exists — Doerr just keeps tightening the line
            between them, chapter by short chapter, until it snaps. He spent ten
            years on it, and every page feels weighed.
          </p>
          <p>
            The Pulitzer was the obvious call. So was the Netflix series in 2023,
            though the book goes places the screen can’t. The one honest warning:
            this is a novel you read for sentences, not speed. If you’re hunting
            for plot, the gorgeous prose will feel like a detour.
          </p>
          <p className="skip">
            <strong>Skip this if:</strong> you want momentum over language —
            this rewards slowing down, and punishes skimming.
          </p>
          <p className="series-note">A standalone.</p>
          <BuyButton b={BOOKS[1]} />
        </article>

        {/* 3 — The Book Thief */}
        <article id="book-thief" className="pick">
          <PickHeader b={BOOKS[2]} />
          <p>
            Here’s the hook that makes this one different: Death narrates it.
            Not a grim reaper — a tired, dryly funny, oddly gentle Death who
            keeps getting distracted by one German foster kid named Liesel, who
            steals books and reads them in bomb shelters while her family hides a
            Jewish man in the basement. The conceit could’ve been a stunt. Zusak
            makes it the soul of the thing.
          </p>
          <p>
            It was published for teenagers and then quietly conquered the adult
            bestseller lists anyway, plus a 2013 film. Fair warning about the
            opening: the voice takes a few pages to settle. Give it those pages.
            Once it clicks, it doesn’t let go.
          </p>
          <p className="skip">
            <strong>Skip this if:</strong> a narrator who tells you who dies
            before it happens sounds like a gimmick — it’s the engine, not a
            party trick.
          </p>
          <p className="series-note">
            A standalone, marketed YA but widely read by adults.
          </p>
          <BuyButton b={BOOKS[2]} />
        </article>

        {/* 4 — Guernsey */}
        <article id="guernsey" className="pick">
          <PickHeader b={BOOKS[3]} />
          <p>
            The whole thing is letters. A London writer in 1946 starts trading
            mail with the people of Guernsey — a Channel Island the Germans
            occupied for nearly the entire war — and piece by piece a story
            assembles itself out of their correspondence, including how a book
            club invented on the spot to talk their way out of a curfew violation
            became something that held a community together. It’s warm, it’s
            funny, and at ~290 pages it’s the quickest read here by a wide margin.
          </p>
          <p>
            A #1 bestseller, later a 2018 film. The letters are the dividing
            line: love the format and it’s a delight; want one driving plotline
            and it can feel like a scrapbook. The war is here, but it’s felt at
            the edges rather than shoved in your face — which is exactly why it’s
            the gentlest door into the genre.
          </p>
          <p className="skip">
            <strong>Skip this if:</strong> epistolary novels annoy you, or you
            want the horror up close instead of in the rear-view mirror.
          </p>
          <p className="series-note">
            A standalone — and the gentlest entry point on this list.
          </p>
          <BuyButton b={BOOKS[3]} />
        </article>

        {/* 5 — Code Name Verity */}
        <article id="code-name-verity" className="pick">
          <PickHeader b={BOOKS[4]} />
          <p>
            A British spy is caught by the Gestapo in occupied France and cuts a
            deal: she’ll write down everything she knows. What she actually writes
            is the story of her best friend, the pilot who flew her there. Saying
            much more would ruin it — this is a book that lies to you on purpose
            and dares you to catch it, and the friendship underneath is the part
            that knocks the wind out of you at the end.
          </p>
          <p>
            A 2013 Printz Honor, and one of those titles readers press into other
            people’s hands while refusing to explain why. Two things to know going
            in: it’s shelved as YA but doesn’t flinch from torture and grief, and
            the structure is meant to disorient you early. Trust it.
          </p>
          <p className="skip">
            <strong>Skip this if:</strong> you want a clean, linear timeline, or
            a “young adult” label means you’re expecting something soft.
          </p>
          <p className="series-note">
            Reads completely standalone; a loose companion novel,{" "}
            <em>Rose Under Fire</em>, follows.
          </p>
          <BuyButton b={BOOKS[4]} />
        </article>

        {/* 6 — The Tattooist of Auschwitz */}
        <article id="tattooist" className="pick">
          <PickHeader b={BOOKS[5]} />
          <p>
            Lale Sokolov, a Slovak Jew at Auschwitz, was forced to tattoo
            identification numbers onto the arms of arriving prisoners. One of
            them was a woman named Gita. The book is the love story that grew out
            of that, drawn from Sokolov’s own testimony to the author late in his
            life. It reads fast — which is a big part of why it sold millions and
            landed a 2024 TV series.
          </p>
          <p>
            Read it, but read it knowing this: the Auschwitz-Birkenau Memorial
            Research Center went on record documenting numerous factual errors and
            warning that, despite the “based on a true story” cover line, it isn’t
            a reliable record of what the camp was. Take it as fiction built
            around real events — and if you want the history itself, the survivor
            memoirs and the Memorial’s own resources are where to go.
          </p>
          <p className="skip">
            <strong>Skip this if:</strong> you want historically faithful
            Holocaust fiction — this isn’t the one to learn the facts from.
          </p>
          <p className="series-note">
            A standalone, though Morris later wrote related novels including{" "}
            <em>Cilka’s Journey</em>.
          </p>
          <BuyButton b={BOOKS[5]} />
        </article>

        {/* 7 — The Alice Network */}
        <article id="alice-network" className="pick">
          <PickHeader b={BOOKS[6]} />
          <p>
            Two stories, two wars. In 1947 an American girl goes looking for a
            cousin who vanished in France; in 1915 a real-life ring of women
            spies works the German occupation during the First World War. Quinn
            runs them on parallel tracks and slowly brings them onto the same
            trail. The WWI half — grounded in the actual Alice Dubois network — is
            where the book comes alive.
          </p>
          <p>
            This is the pick if what you want is spycraft and a dual-timeline
            structure rather than a single front-line story. The research is real
            and the two women anchoring it are vivid; the only common gripe is
            that the 1947 thread runs lighter than the wartime one.
          </p>
          <p className="skip">
            <strong>Skip this if:</strong> you want one story told straight
            through — this braids two eras the whole way.
          </p>
          <p className="series-note">A standalone.</p>
          <BuyButton b={BOOKS[6]} />
        </article>
      </section>

      {/* ---- Verdict ---- */}
      <section className="verdict" aria-labelledby="verdict-h">
        <h2 id="verdict-h">So where do you actually start?</h2>
        <div className="verdict-row">
          <p className="verdict-tag start">▶ Start here</p>
          <p>
            <strong>
              <em>The Nightingale.</em>
            </strong>{" "}
            Hits hardest, asks the least, and converts skeptics. If you read one
            and stop, read this one.
          </p>
        </div>
        <div className="verdict-row">
          <p className="verdict-tag short">↓ Shortest way in</p>
          <p>
            <strong>
              <em>The Guernsey Literary and Potato Peel Pie Society</em>
            </strong>{" "}
            — ~290 pages, warm, funny, and over before you’re ready for it to be.
          </p>
        </div>
        <div className="verdict-row">
          <p className="verdict-tag skip-tag">✕ Approach with care</p>
          <p>
            <strong>
              <em>The Tattooist of Auschwitz.</em>
            </strong>{" "}
            Gripping, but historians have flagged real problems with it. Read it
            as a story, not a history lesson.
          </p>
        </div>
      </section>

      {/* ---- FAQ / PAA ---- */}
      <section className="faq" aria-labelledby="faq-h">
        <p className="section-kicker">People also ask</p>
        <h2 id="faq-h">Quick answers</h2>

        <div className="qa">
          <h3>What is the best WWII novel for someone who doesn’t usually read war fiction?</h3>
          <p>
            <em>The Nightingale</em>. It comes at the war through two sisters
            surviving occupied France rather than through battlefields, it moves
            fast emotionally, and at ~440 pages it’s easy to fall into — which is
            why it’s our start-here pick. Want something gentler still?{" "}
            <em>The Guernsey Literary and Potato Peel Pie Society</em> is warmer
            and shorter.
          </p>
        </div>

        <div className="qa">
          <h3>Which WWII novel is considered the best written?</h3>
          <p>
            <em>All the Light We Cannot See</em>. It won the 2015 Pulitzer Prize
            for Fiction, took Anthony Doerr a decade to write, and is built from
            short, luminous chapters. The trade-off is pace — the prose is the
            point, so don’t come to it for a thriller’s speed.
          </p>
        </div>

        <div className="qa">
          <h3>Are these WWII novels based on true stories?</h3>
          <p>
            It depends on the book. <em>The Tattooist of Auschwitz</em> draws on a
            real survivor’s account, though historians have documented serious
            inaccuracies in it. <em>The Alice Network</em> is rooted in a real
            WWI women’s spy ring. <em>The Nightingale</em> took inspiration from
            real Resistance figures but its characters are invented. The rest are
            fiction set in carefully researched history.
          </p>
        </div>

        <div className="qa">
          <h3>Which of these is the shortest?</h3>
          <p>
            <em>The Tattooist of Auschwitz</em> (~260 pages) and{" "}
            <em>Guernsey</em> (~290) are the shortest;{" "}
            <em>The Book Thief</em> is the longest at roughly 550. Counts shift by
            edition, so treat these as ballpark.
          </p>
        </div>

        <div className="qa">
          <h3>Do I have to commit to a series with any of these?</h3>
          <p>
            No — each one stands completely on its own.{" "}
            <em>Code Name Verity</em> has a loose companion novel and Heather
            Morris wrote follow-ups to <em>Tattooist</em>, but you can read any
            single title and walk away with no loose ends.
          </p>
        </div>
      </section>

      {/* ---- Internal links (cluster) ---- */}
      <nav className="related" aria-label="Related reading">
        <Link href="/books/genre-fiction/best-historical-epics-2026">
          Best historical epics, ranked by where to start →
        </Link>
        <Link href="/books/genre-fiction/best-historical-fiction-books">
          Best historical fiction (2026 guide) →
        </Link>
        <Link href="/books/genre-fiction">More genre fiction →</Link>
        <Link href="/books">All book guides</Link>
      </nav>

      {/* ---- Footer disclosure / verification ---- */}
      <footer className="page-foot">
        <p>
          <strong>Affiliate disclosure:</strong> BestPickZone is a participant in
          the Amazon Associates Program. As an Amazon Associate we earn from
          qualifying purchases — buying through our links never costs you anything
          extra.
        </p>
        <p>
          Titles, authors, publication years, and availability verified against
          Amazon and public bibliographic sources as of June 2026. Prices and
          availability change; please confirm on the product page before
          purchasing.
        </p>
        <p>
            <strong>Last verified: June 26, 2026.</strong>
        </p>
      </footer>

      {/* ---- JSON-LD: ItemList + FAQPage + BreadcrumbList ---- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSchema()),
        }}
      />

      <style>{PAGE_CSS}</style>
    </main>
  )
}

// --- Sub-components ---------------------------------------------------------
function PickHeader({ b }: { b: Book }) {
  return (
    <header className="pick-head">
      <span className="rank" aria-hidden="true">
        {b.rank}
      </span>
      <p className="badge">{b.badge}</p>
      <h2 className="pick-title">
        <em>{b.title}</em>
      </h2>
      <p className="byline">
        {b.author} · {b.year}
      </p>
      <ul className="facts">
        <li>{b.setting}</li>
        <li>{b.pages}</li>
        <li>{b.series}</li>
      </ul>
    </header>
  )
}

function BuyButton({ b }: { b: Book }) {
  return (
    <a
      className="cta"
      href={amazon(b.amazonQuery)}
      target="_blank"
      rel="sponsored noopener"
    >
      Click Here to Buy on Amazon →
    </a>
  )
}

// --- Schema -----------------------------------------------------------------
function buildSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'The 7 Best WWII Novels to Read in 2026',
      description: META_DESCRIPTION,
      datePublished: PUBLISHED_DATE,
      dateModified: UPDATED_DATE,
      author: {
        '@type': 'Organization',
        name: 'BestPickZone Editorial Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'BestPickZone',
      },
      mainEntityOfPage: CANONICAL,
      articleSection: 'Genre Fiction',
      keywords: [
        'best WWII novels',
        'best World War II fiction',
        'historical fiction recommendations',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'The 7 Best WWII Novels to Read in 2026',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: BOOKS.map((b) => ({
        '@type': 'ListItem',
        position: b.rank,
        item: {
          '@type': 'Book',
          name: b.title,
          author: { '@type': 'Person', name: b.author },
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "What is the best WWII novel for someone who doesn't usually read war fiction?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Nightingale by Kristin Hannah. It is told through two sisters surviving occupied France rather than battlefield action, it is emotionally immediate, and at around 440 pages it is an easy book to fall into.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which WWII novel is considered the best written?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All the Light We Cannot See by Anthony Doerr won the 2015 Pulitzer Prize for Fiction and is the most acclaimed on prose, with short lyrical chapters that ask for some patience.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are these WWII novels based on true stories?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "They vary. The Tattooist of Auschwitz is based on a real survivor's testimony but historians have documented significant inaccuracies. The Alice Network draws on a real WWI-era women's spy network. The Nightingale was inspired by real Resistance figures but its characters are fictional. The others are fiction set in researched historical settings.",
          },
        },
        {
          '@type': 'Question',
          name: 'Which of these WWII novels is the shortest?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Tattooist of Auschwitz (about 260 pages) and The Guernsey Literary and Potato Peel Pie Society (about 290 pages) are the shortest. The Book Thief is the longest at roughly 550 pages. Counts vary by edition.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I have to commit to a series with any of these?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Every book works fully on its own. Code Name Verity has a loose companion novel and the author of The Tattooist of Auschwitz wrote related books, but each title can be read alone with no loose ends.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bestpickzone.com/' },
        { '@type': 'ListItem', position: 2, name: 'Books', item: 'https://bestpickzone.com/books' },
        { '@type': 'ListItem', position: 3, name: 'Genre Fiction', item: 'https://bestpickzone.com/books/genre-fiction' },
        { '@type': 'ListItem', position: 4, name: 'Best WWII Novels', item: CANONICAL },
      ],
    },
  ]
}

// --- Styles (scoped to .wwii-page) ------------------------------------------
const PAGE_CSS = `
.wwii-page{max-width:760px;margin:0 auto;padding:1.25rem 1.25rem 4rem;color:#1a1a1a;font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
.wwii-page a{color:#1455c0;text-decoration:none}
.wwii-page a:hover{text-decoration:underline}
.wwii-page a:focus-visible{outline:3px solid #ffd23f;outline-offset:2px;border-radius:3px}
.crumbs{font-size:.85rem;color:#555;margin:.25rem 0 1rem}
.crumbs a{color:#555}
.disclosure{background:#fff7e6;border:1px solid #ffe0a3;border-radius:10px;padding:.7rem .9rem;font-size:.85rem;color:#5a4a2a}
.eyebrow{font-weight:700;font-size:.8rem;letter-spacing:.04em;text-transform:uppercase;color:#c0392b;margin:1.5rem 0 .5rem}
.wwii-page h1{font-size:2rem;line-height:1.15;font-weight:800;letter-spacing:-.02em;margin:.25rem 0 1rem}
.lede{font-size:1.1rem;font-weight:600}
.intro{color:#333}
.verified{background:#eef6ee;border:1px solid #cfe6cf;border-radius:10px;padding:.7rem .9rem;font-size:.85rem;color:#2f5430}
.section-kicker{font-weight:700;font-size:.75rem;letter-spacing:.06em;text-transform:uppercase;color:#c0392b;margin:2.5rem 0 .25rem}
.wwii-page h2{font-size:1.5rem;font-weight:800;letter-spacing:-.01em;margin:.25rem 0 1rem}
.selector .pick-list{list-style:none;padding:0;margin:0;display:grid;gap:.6rem}
.selector .pick-list li a{display:block;background:#f6f8fc;border:1px solid #dce4f2;border-radius:12px;padding:.8rem 1rem;color:#1a1a1a}
.selector .pick-list li a:hover{background:#eef3fb;text-decoration:none}
.selector .pick-list strong{color:#1455c0}
.meter-rows{list-style:none;padding:0;margin:0;display:grid;gap:.55rem}
.meter-rows li{display:grid;grid-template-columns:1fr;gap:.2rem}
.meter-label{font-size:.95rem}
.meter-track{display:block;height:12px;background:#ececec;border-radius:99px;overflow:hidden}
.meter-fill{display:block;height:100%;background:linear-gradient(90deg,#1455c0,#3f86e0);border-radius:99px}
.meter-pp{font-size:.8rem;color:#666;justify-self:start}
.meter-note{font-size:.82rem;color:#666;margin-top:.75rem}
.picks{margin-top:1rem}
.pick{border-top:2px solid #f0f0f0;padding:2rem 0 1.5rem}
.pick-head{position:relative;margin-bottom:.75rem}
.rank{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:50%;background:#1a1a1a;color:#fff;font-weight:800;font-size:1rem}
.badge{display:inline-block;margin:.6rem 0 .2rem;font-size:.72rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#c0392b}
.pick-title{font-size:1.35rem;margin:.1rem 0 .15rem}
.byline{color:#444;font-weight:600;margin:0 0 .5rem}
.facts{list-style:none;display:flex;flex-wrap:wrap;gap:.4rem;padding:0;margin:0 0 .25rem}
.facts li{background:#f2f2f2;border-radius:99px;padding:.2rem .7rem;font-size:.78rem;color:#444}
.skip{background:#fdf0f0;border-left:3px solid #c0392b;padding:.6rem .8rem;border-radius:0 8px 8px 0;font-size:.95rem}
.series-note{font-size:.88rem;color:#555;font-style:italic}
.cta{display:inline-block;margin-top:.5rem;background:#ff9900;color:#1a1a1a;font-weight:800;padding:.7rem 1.2rem;border-radius:10px;border:1px solid #e08600}
.cta:hover{background:#ffad33;text-decoration:none}
.verdict{margin-top:2.5rem;background:#f6f8fc;border:1px solid #dce4f2;border-radius:14px;padding:1.25rem 1.25rem .5rem}
.verdict-row{display:grid;gap:.1rem;margin-bottom:1rem}
.verdict-tag{font-weight:800;font-size:.85rem;margin:0}
.verdict-tag.start{color:#2f7d32}
.verdict-tag.short{color:#1455c0}
.verdict-tag.skip-tag{color:#c0392b}
.faq .qa{border-top:1px solid #eee;padding:1rem 0}
.faq h3{font-size:1.05rem;font-weight:700;margin:0 0 .35rem}
.faq p{margin:0;color:#333}
.related{display:grid;gap:.5rem;margin:2.5rem 0 0}
.related a{font-weight:600}
.page-foot{margin-top:2.5rem;border-top:1px solid #eee;padding-top:1.25rem;font-size:.82rem;color:#666}
.page-foot p{margin:.4rem 0}
@media (max-width:480px){.wwii-page h1{font-size:1.6rem}.wwii-page h2{font-size:1.3rem}}
@media (prefers-reduced-motion:reduce){*{scroll-behavior:auto}}
`;
