import type { Metadata } from 'next'
import Link from 'next/link'

import { withArticleMetadataDefaults } from '@/lib/article-metadata'

const CANONICAL = 'https://bestpickzone.com/books/authors/authors-like-colleen-hoover'
const PUBLISHED_DATE = '2026-06-27'
const UPDATED_DATE = '2026-06-27'

const META_DESCRIPTION =
  '7 authors to read if you love Colleen Hoover, matched to the specific part of her appeal you want more of: the twist, the ache, the cry, or the bingeable romance rush.'

export const metadata: Metadata = withArticleMetadataDefaults(
  {
    title: '7 Authors Like Colleen Hoover (Matched to What You Loved) | BestPickZone',
    description: META_DESCRIPTION,
    alternates: { canonical: CANONICAL },
    keywords: [
      'authors like colleen hoover',
      'writers like colleen hoover',
      'books like colleen hoover',
      'if you like colleen hoover',
      'authors similar to colleen hoover',
      'read after colleen hoover',
      'authors like verity',
      'authors like it ends with us',
    ],
    openGraph: {
      url: CANONICAL,
      title: '7 Authors Like Colleen Hoover (Matched to What You Loved)',
      description: META_DESCRIPTION,
    },
  },
  {
    category: 'authors',
    publishedTime: PUBLISHED_DATE,
    modifiedTime: UPDATED_DATE,
    section: 'Authors',
    tags: [
      'authors like Colleen Hoover',
      'romance authors',
      'BookTok books',
      'author recommendations',
      'readalike books',
    ],
  }
)

const AMAZON_TAG = 'althcu-20'
function amazon(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

type Pick = {
  id: string
  author: string
  startHere: string
  year: string
  facet: string
  amazonQuery: string
}

const PICKS: Pick[] = [
  {
    id: 'tjr',
    author: 'Taylor Jenkins Reid',
    startHere: 'The Seven Husbands of Evelyn Hugo',
    year: '2017',
    facet: 'If you loved the gut-punch twist',
    amazonQuery: 'The Seven Husbands of Evelyn Hugo Taylor Jenkins Reid',
  },
  {
    id: 'fisher',
    author: 'Tarryn Fisher',
    startHere: 'The Wives',
    year: '2019',
    facet: 'If Verity was your favorite',
    amazonQuery: 'The Wives Tarryn Fisher',
  },
  {
    id: 'moyes',
    author: 'Jojo Moyes',
    startHere: 'Me Before You',
    year: '2012',
    facet: 'If It Ends With Us wrecked you',
    amazonQuery: 'Me Before You Jojo Moyes',
  },
  {
    id: 'sheridan',
    author: 'Mia Sheridan',
    startHere: "Archer's Voice",
    year: '2014',
    facet: 'If you read CoHo for the ache',
    amazonQuery: "Archer's Voice Mia Sheridan",
  },
  {
    id: 'henry',
    author: 'Emily Henry',
    startHere: 'Beach Read',
    year: '2020',
    facet: 'If you want the feelings minus the heaviness',
    amazonQuery: 'Beach Read Emily Henry',
  },
  {
    id: 'christina-lauren',
    author: 'Christina Lauren',
    startHere: 'The Unhoneymooners',
    year: '2019',
    facet: 'If you want pure escapist fun',
    amazonQuery: 'The Unhoneymooners Christina Lauren',
  },
  {
    id: 'hazelwood',
    author: 'Ali Hazelwood',
    startHere: 'The Love Hypothesis',
    year: '2021',
    facet: 'If you came for the BookTok binge',
    amazonQuery: 'The Love Hypothesis Ali Hazelwood',
  },
]

export default function Page() {
  return (
    <main className="coho-page">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link href="/books">Books</Link>
        <span aria-hidden="true"> / </span>
        <Link href="/books/authors">Authors</Link>
      </nav>

      <p className="disclosure">
        BestPickZone is reader-supported. When you buy through links on this page, we may earn an
        Amazon commission at no extra cost to you. <Link href="/disclosure">How this works</Link>.
      </p>

      <p className="eyebrow">Authors · If You Love…</p>

      <h1>7 Authors Like Colleen Hoover — Matched to What You Actually Loved</h1>

      <p className="lede">
        “Authors like Colleen Hoover” is a trap of a search, because CoHo is not one thing. The
        person who could not breathe through <em>It Ends With Us</em> wants something different
        than the person who tore through <em>Verity</em> at 2 a.m. So this list is sorted by which
        version of Hoover you loved.
      </p>

      <p className="intro">
        If you just want one safest crossover, start with <strong>Taylor Jenkins Reid</strong> and{' '}
        <em>The Seven Husbands of Evelyn Hugo</em>. It is emotional, addictive, and built around a
        late reveal that lands with the same satisfying force Hoover readers chase. But if you know
        exactly what hooks you, go by the itch: twist, ache, devastation, lighter feelings, or
        BookTok-level bingeability.
      </p>

      <p className="verified">
        Titles, authors, publication years, and availability were verified against Amazon and
        publisher listings on June 27, 2026. Price and availability can change, so confirm before
        buying.
      </p>

      <section className="selector" aria-labelledby="pick-h">
        <p className="section-kicker">Find your match</p>
        <h2 id="pick-h">Which Colleen Hoover did you love?</h2>
        <ul className="pick-list">
          {PICKS.map((p) => (
            <li key={p.id}>
              <a href={`#${p.id}`}>
                <strong>{p.facet}</strong> → {p.author}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="picks" aria-label="Author recommendations">
        <article id="tjr" className="pick">
          <PickHead p={PICKS[0]} />
          <p>
            Reid is the first name many Hoover readers land on because she delivers the same
            combination of emotional immediacy and a reveal that changes the whole shape of the
            story. <em>The Seven Husbands of Evelyn Hugo</em> follows a legendary actress finally
            telling the truth about her marriages and the private life hidden behind them, and the
            answer to why she chose this specific interviewer is what gives the ending its sting.
          </p>
          <p>
            Where Reid differs from Hoover is style and setting. The prose is smoother and more
            polished, and she often writes period stories instead of contemporary romance. The
            emotional reward is similar; the packaging is more literary.
          </p>
          <p className="skip">
            <strong>Skip her if:</strong> present-day contemporary settings are a big part of the
            appeal for you. Reid often works through old Hollywood, music history, or sports-world
            time capsules instead.
          </p>
          <BuyButton p={PICKS[0]} />
        </article>

        <article id="fisher" className="pick">
          <PickHead p={PICKS[1]} />
          <p>
            Tarryn Fisher is the closest direct connective tissue because she co-wrote the{' '}
            <em>Never Never</em> series with Hoover. But the bigger reason to read her is that she
            leans harder into the dark, paranoid, reality-slipping energy that made <em>Verity</em>{' '}
            so magnetic. <em>The Wives</em> starts with a woman discovering she is one of three and
            turns into the kind of book that makes you question every surface fact.
          </p>
          <p>
            This is not the swooniest option on the list. It is romance-adjacent domestic suspense,
            heavier on dread and destabilization than comfort.
          </p>
          <p className="skip">
            <strong>Skip her if:</strong> you read Hoover mainly for the love story and could do
            without the paranoia. Fisher is much more twist-first.
          </p>
          <BuyButton p={PICKS[1]} />
        </article>

        <article id="moyes" className="pick">
          <PickHead p={PICKS[2]} />
          <p>
            If what you want is devastation, Jojo Moyes is the clearest answer. <em>Me Before You</em>{' '}
            is built around a caretaker relationship that grows into something intimate and then
            forces a painful moral question the book refuses to soften. Like the strongest Hoover
            titles, it aims directly at your emotional center and does not apologize for it.
          </p>
          <p>
            Moyes is warmer, steadier, and a little more grounded than Hoover at her most heightened,
            but the effect is similar: a book that leaves readers sitting quietly for a while after
            the last page.
          </p>
          <p className="skip">
            <strong>Skip her if:</strong> you need a guaranteed happy landing. Moyes is willing to
            take readers somewhere harder.
          </p>
          <BuyButton p={PICKS[2]} />
        </article>

        <article id="sheridan" className="pick">
          <PickHead p={PICKS[3]} />
          <p>
            Mia Sheridan is the pick for readers who want tenderness, wounded characters, and that
            intense broken-people-healing-each-other current. <em>Archer’s Voice</em> is a small-town
            romance between a traumatized woman and a silent man carrying his own damage, and it
            lives almost entirely on ache, softness, and emotional repair.
          </p>
          <p>
            This is the most purely romantic recommendation here. There is less thriller energy and
            less structural trickiness than Hoover’s twistier books, but a very similar emotional
            openness.
          </p>
          <p className="skip">
            <strong>Skip her if:</strong> you need a major plot hook or a late-game twist to stay
            locked in. Sheridan’s pull is emotional rather than architectural.
          </p>
          <BuyButton p={PICKS[3]} />
        </article>

        <article id="henry" className="pick">
          <PickHead p={PICKS[4]} />
          <p>
            Emily Henry is for readers who like Hoover’s feelings but not always the heaviness.
            <em>Beach Read</em> pairs a romance writer and a literary novelist, both blocked and
            carrying private grief, in a summer-neighbor setup that feels light at first and deeper
            as it goes. The banter is sharper, the mood brighter, and the emotional work gentler.
          </p>
          <p>
            Think of Henry as the version of this reading lane where the tears are still available,
            but the emotional bruising is dialed way down.
          </p>
          <p className="skip">
            <strong>Skip her if:</strong> dark subject matter and high-stakes damage are the whole
            reason you read Hoover. Henry stays much more comforting.
          </p>
          <BuyButton p={PICKS[4]} />
        </article>

        <article id="christina-lauren" className="pick">
          <PickHead p={PICKS[5]} />
          <p>
            Christina Lauren, the duo of Christina Hobbs and Lauren Billings, is the right move if
            what you actually want is fast, funny, escapist romance. <em>The Unhoneymooners</em>{' '}
            strands enemies on a honeymoon trip neither was supposed to take and lets the tension do
            the rest. It is breezy, readable, and easy to tear through.
          </p>
          <p>
            This is the lightest recommendation on the page. Once you click with them, there is a
            large backlist waiting.
          </p>
          <p className="skip">
            <strong>Skip them if:</strong> you want emotional devastation. This is the opposite
            assignment.
          </p>
          <BuyButton p={PICKS[5]} />
        </article>

        <article id="hazelwood" className="pick">
          <PickHead p={PICKS[6]} />
          <p>
            If the main thing you loved about Hoover was the pure binge factor, Ali Hazelwood is a
            smart detour. <em>The Love Hypothesis</em> is a fake-dating romance set in academia that
            went viral because it is fast, funny, and weirdly hard to put down once you start.
            Hazelwood brings a STEM setting and a very readable comfort-forward rhythm.
          </p>
          <p>
            The payoff here is addictive readability more than heartbreak. Lower angst than Hoover,
            higher coziness.
          </p>
          <p className="skip">
            <strong>Skip her if:</strong> you want heavy themes and a bruised emotional register.
            Hazelwood is squarely on the warmer side of the spectrum.
          </p>
          <BuyButton p={PICKS[6]} />
        </article>
      </section>

      <section className="verdict" aria-labelledby="verdict-h">
        <h2 id="verdict-h">If you only try one</h2>
        <div className="verdict-row">
          <p className="verdict-tag start">Start here</p>
          <p>
            <strong>
              Taylor Jenkins Reid, <em>The Seven Husbands of Evelyn Hugo</em>.
            </strong>{' '}
            It is the safest crossover for most Hoover readers: emotional payoff, addictive pacing,
            and a late twist that lands.
          </p>
        </div>
        <div className="verdict-row">
          <p className="verdict-tag closest">Closest to CoHo’s darker lane</p>
          <p>
            <strong>Tarryn Fisher</strong> is the strongest fit for the <em>Verity</em> crowd.
          </p>
        </div>
        <div className="verdict-row">
          <p className="verdict-tag cry">For the criers</p>
          <p>
            <strong>
              Jojo Moyes, <em>Me Before You</em>.
            </strong>{' '}
            This is the best pick if <em>It Ends With Us</em> is the Hoover experience you most
            want to recreate.
          </p>
        </div>
      </section>

      <section className="faq" aria-labelledby="faq-h">
        <p className="section-kicker">People also ask</p>
        <h2 id="faq-h">Quick answers</h2>

        <div className="qa">
          <h3>Who is the most similar author to Colleen Hoover?</h3>
          <p>
            For overall feel, Taylor Jenkins Reid is the safest answer because she combines
            emotional momentum with twist-driven payoff. For the closest dark-lane connection,
            Tarryn Fisher is the better fit.
          </p>
        </div>

        <div className="qa">
          <h3>What should I read if I loved It Ends With Us?</h3>
          <p>
            Try <strong>Me Before You</strong> by Jojo Moyes or <strong>Archer’s Voice</strong> by
            Mia Sheridan. Both deliver emotionally intense love stories with real pain underneath.
          </p>
        </div>

        <div className="qa">
          <h3>What should I read if I loved Verity?</h3>
          <p>
            Go to <strong>The Wives</strong> by Tarryn Fisher first. It is the best fit for readers
            who want another dark, suspicious, reality-bending page-turner.
          </p>
        </div>

        <div className="qa">
          <h3>Are there authors like Colleen Hoover but less heavy?</h3>
          <p>
            Yes. Emily Henry, Christina Lauren, and Ali Hazelwood all offer emotional romance with
            much lighter tonal weight than Hoover’s darkest books.
          </p>
        </div>

        <div className="qa">
          <h3>Where should I start with each of these authors?</h3>
          <p>
            Taylor Jenkins Reid: <em>The Seven Husbands of Evelyn Hugo</em>. Tarryn Fisher:{' '}
            <em>The Wives</em>. Jojo Moyes: <em>Me Before You</em>. Mia Sheridan:{' '}
            <em>Archer’s Voice</em>. Emily Henry: <em>Beach Read</em>. Christina Lauren:{' '}
            <em>The Unhoneymooners</em>. Ali Hazelwood: <em>The Love Hypothesis</em>.
          </p>
        </div>
      </section>

      <nav className="related" aria-label="Related reading">
        <Link href="/books/colleen-hoover-books-ranked-worst-to-best">
          Colleen Hoover books ranked worst to best →
        </Link>
        <Link href="/books/books-like-it-ends-with-us">Books like It Ends With Us →</Link>
        <Link href="/books/books-like-verity-psychological-thrillers">
          Books like Verity →
        </Link>
        <Link href="/books/authors">More author guides →</Link>
      </nav>

      <footer className="page-foot">
        <p>
          <strong>Affiliate disclosure:</strong> BestPickZone is a participant in the Amazon
          Associates Program. As an Amazon Associate we earn from qualifying purchases.
        </p>
        <p>
          Authors, titles, and publication years were verified against Amazon and publisher listings
          on June 27, 2026. Prices and availability can change.
        </p>
        <p>
          <strong>Last verified: June 27, 2026.</strong>
        </p>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }} />

      <style>{PAGE_CSS}</style>
    </main>
  )
}

function PickHead({ p }: { p: Pick }) {
  return (
    <header className="pick-head">
      <p className="facet">{p.facet}</p>
      <h2 className="pick-author">{p.author}</h2>
      <p className="starthere">
        Start here: <em>{p.startHere}</em> ({p.year})
      </p>
    </header>
  )
}

function BuyButton({ p }: { p: Pick }) {
  return (
    <a className="cta" href={amazon(p.amazonQuery)} target="_blank" rel="sponsored noopener">
      Click Here to Buy on Amazon →
    </a>
  )
}

function buildSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: '7 Authors Like Colleen Hoover — Matched to What You Actually Loved',
      description: META_DESCRIPTION,
      datePublished: PUBLISHED_DATE,
      dateModified: UPDATED_DATE,
      mainEntityOfPage: CANONICAL,
      author: {
        '@type': 'Organization',
        name: 'BestPickZone Editorial Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'BestPickZone',
      },
      articleSection: 'Authors',
      keywords: [
        'authors like Colleen Hoover',
        'writers like Colleen Hoover',
        'books like Colleen Hoover',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '7 Authors Like Colleen Hoover',
      itemListElement: PICKS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Book',
          name: p.startHere,
          author: { '@type': 'Person', name: p.author },
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is the most similar author to Colleen Hoover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For overall feel, Taylor Jenkins Reid is the safest answer because she combines emotional momentum with twist-driven payoff. For the closest dark-lane connection, Tarryn Fisher is the better fit.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I read if I loved It Ends With Us?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Try Me Before You by Jojo Moyes or Archer's Voice by Mia Sheridan. Both deliver emotionally intense love stories with real pain underneath.",
          },
        },
        {
          '@type': 'Question',
          name: 'What should I read if I loved Verity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Go to The Wives by Tarryn Fisher first. It is the best fit for readers who want another dark, suspicious, reality-bending page-turner.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there authors like Colleen Hoover but less heavy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Emily Henry, Christina Lauren, and Ali Hazelwood all offer emotional romance with much lighter tonal weight than Hoover’s darkest books.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where should I start with each of these authors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Taylor Jenkins Reid: The Seven Husbands of Evelyn Hugo. Tarryn Fisher: The Wives. Jojo Moyes: Me Before You. Mia Sheridan: Archer’s Voice. Emily Henry: Beach Read. Christina Lauren: The Unhoneymooners. Ali Hazelwood: The Love Hypothesis.',
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
        { '@type': 'ListItem', position: 3, name: 'Authors', item: 'https://bestpickzone.com/books/authors' },
        { '@type': 'ListItem', position: 4, name: 'Authors Like Colleen Hoover', item: CANONICAL },
      ],
    },
  ]
}

const PAGE_CSS = `
.coho-page{max-width:760px;margin:0 auto;padding:1.25rem 1.25rem 4rem;color:#1a1a1a;font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
.coho-page a{color:#1455c0;text-decoration:none}
.coho-page a:hover{text-decoration:underline}
.coho-page a:focus-visible{outline:3px solid #ffd23f;outline-offset:2px;border-radius:3px}
.crumbs{font-size:.85rem;color:#555;margin:.25rem 0 1rem}
.crumbs a{color:#555}
.disclosure{background:#fff7e6;border:1px solid #ffe0a3;border-radius:10px;padding:.7rem .9rem;font-size:.85rem;color:#5a4a2a}
.eyebrow{font-weight:700;font-size:.8rem;letter-spacing:.04em;text-transform:uppercase;color:#c0392b;margin:1.5rem 0 .5rem}
.coho-page h1{font-size:2rem;line-height:1.15;font-weight:800;letter-spacing:-.02em;margin:.25rem 0 1rem}
.lede{font-size:1.1rem;font-weight:600}
.intro{color:#333}
.verified{background:#eef6ee;border:1px solid #cfe6cf;border-radius:10px;padding:.7rem .9rem;font-size:.85rem;color:#2f5430}
.section-kicker{font-weight:700;font-size:.75rem;letter-spacing:.06em;text-transform:uppercase;color:#c0392b;margin:2.5rem 0 .25rem}
.coho-page h2{font-size:1.5rem;font-weight:800;letter-spacing:-.01em;margin:.25rem 0 1rem}
.selector .pick-list{list-style:none;padding:0;margin:0;display:grid;gap:.6rem}
.selector .pick-list li a{display:block;background:#f6f8fc;border:1px solid #dce4f2;border-radius:12px;padding:.8rem 1rem;color:#1a1a1a}
.selector .pick-list li a:hover{background:#eef3fb;text-decoration:none}
.selector .pick-list strong{color:#1455c0}
.picks{margin-top:1rem}
.pick{border-top:2px solid #f0f0f0;padding:2rem 0 1.5rem}
.pick-head{margin-bottom:.75rem}
.facet{display:inline-block;margin:0 0 .35rem;font-size:.72rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#c0392b}
.pick-author{font-size:1.4rem;margin:0 0 .15rem}
.starthere{color:#444;font-weight:600;margin:0 0 .25rem}
.skip{background:#fdf0f0;border-left:3px solid #c0392b;padding:.6rem .8rem;border-radius:0 8px 8px 0;font-size:.95rem}
.cta{display:inline-block;margin-top:.5rem;background:#ff9900;color:#1a1a1a;font-weight:800;padding:.7rem 1.2rem;border-radius:10px;border:1px solid #e08600}
.cta:hover{background:#ffad33;text-decoration:none}
.verdict{margin-top:2.5rem;background:#f6f8fc;border:1px solid #dce4f2;border-radius:14px;padding:1.25rem 1.25rem .5rem}
.verdict-row{display:grid;gap:.1rem;margin-bottom:1rem}
.verdict-tag{font-weight:800;font-size:.85rem;margin:0}
.verdict-tag.start{color:#2f7d32}
.verdict-tag.closest{color:#1455c0}
.verdict-tag.cry{color:#c0392b}
.faq .qa{border-top:1px solid #eee;padding:1rem 0}
.faq h3{font-size:1.05rem;font-weight:700;margin:0 0 .35rem}
.faq p{margin:0;color:#333}
.related{display:grid;gap:.5rem;margin:2.5rem 0 0}
.related a{font-weight:600}
.page-foot{margin-top:2.5rem;border-top:1px solid #eee;padding-top:1.25rem;font-size:.82rem;color:#666}
.page-foot p{margin:.4rem 0}
@media (max-width:480px){.coho-page h1{font-size:1.6rem}.coho-page h2{font-size:1.3rem}}
@media (prefers-reduced-motion:reduce){*{scroll-behavior:auto}}
`
