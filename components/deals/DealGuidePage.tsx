import Link from "next/link";
import { DealGuide, dealGuides, retailerSearches } from "@/lib/deals/catalog";
export default function DealGuidePage({ guide: g }: { guide: DealGuide }) {
  const url = `https://bestpickzone.com/deals/${g.slug}`;
  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: g.title,
        description: g.description,
        datePublished: "2026-10-06",
        dateModified: "2026-10-07",
        author: { "@type": "Organization", name: "BestPickZone" },
        publisher: { "@type": "Organization", name: "BestPickZone" },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { name: "Home", item: "https://bestpickzone.com" },
          { name: "Deal guides", item: "https://bestpickzone.com/deals" },
          { name: g.product, item: url },
        ].map((v, i) => ({ "@type": "ListItem", position: i + 1, ...v })),
      },
    ],
  };
  return (
    <main className="deal-shell">
      <nav aria-label="Breadcrumb">
        <Link href="/">Home</Link> / <Link href="/deals">Deal guides</Link> /{" "}
        {g.product}
      </nav>
      <header className="deal-hero">
        <p className="deal-eyebrow">
          A BETTER BUY STARTS WITH A BETTER QUESTION
        </p>
        <h1>{g.title}</h1>
        <p className="deal-lead">{g.answer}</p>
        <p className="deal-small">
          By BestPickZone · Reviewed October 7, 2026 · US shopping guidance
        </p>
      </header>
      <section aria-labelledby="our-recommendations">
        <h2 id="our-recommendations">Our recommendations</h2>
        <div className="deal-grid">
          <div className="deal-card">
            <p className="deal-eyebrow">OUR STARTING PICK</p>
            <h3>{g.recommendation.pick}</h3>
            <p>{g.recommendation.why}</p>
          </div>
          <div className="deal-card">
            <p className="deal-eyebrow">WHEN YOUR NEEDS ARE DIFFERENT</p>
            <h3>{g.recommendation.alternative}</h3>
            <p>{g.recommendation.alternativeWhy}</p>
          </div>
        </div>
        <p className="deal-small">
          Editorial recommendations based on product information and buying
          considerations. These are not verified live offers or hands-on test
          results.
        </p>
      </section>
      <section className="deal-panel" aria-labelledby="explore-with-agent">
        <h2 id="explore-with-agent">
          Want to learn more or find something else?
        </h2>
        <p>
          Search our Deal Agent for more buying advice on {g.product}, or start
          with a different product and your budget.
        </p>
        <div className="deal-actions">
          <Link className="deal-button" href={`/deal-agent?topic=${g.slug}`}>
            Learn more with our Deal Agent →
          </Link>
          <Link className="deal-button secondary" href="/deal-agent">
            Find a different product →
          </Link>
        </div>
        <p className="deal-small">
          The Deal Agent searches our buying guides. Live retailer prices and
          price history are not available.
        </p>
      </section>
      <aside className="deal-status">
        <strong>Price check: unavailable</strong>
        <p>
          No verified live price, stock status or price history is shown here.
          Retailer searches are places to check current offers. We do not claim
          a lowest price, hands-on testing or a confirmed discount.
        </p>
      </aside>
      <section>
        <h2>Your offer checklist</h2>
        <div className="deal-grid">
          {g.checks.map((c) => (
            <div className="deal-card" key={c.label}>
              <h3>{c.label}</h3>
              <p>{c.detail}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="deal-article">
        {g.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>
        ))}
      </div>
      <section className="deal-panel">
        <h2>Where can I check current offers?</h2>
        <p>
          Match the exact model, seller and condition at checkout. These
          searches can return unrelated products and unavailable listings.
        </p>
        <div className="deal-actions">
          {retailerSearches(g.product).map((r) => (
            <a
              className="deal-button secondary"
              key={r.name}
              href={r.url}
              target="_blank"
              rel={r.affiliate ? "sponsored noopener" : "noopener noreferrer"}
            >
              Search {r.name}
              {r.affiliate ? " (affiliate)" : ""} ↗
            </a>
          ))}
        </div>
        <p className="deal-small">
          As an Amazon Associate I earn from qualifying purchases. Affiliate
          compensation does not determine our guidance.{" "}
          <Link href="/disclosure">Read our disclosure</Link>.
        </p>
      </section>
      <section>
        <h2>Questions shoppers ask</h2>
        {g.faq.map((f) => (
          <details key={f.question}>
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </section>
      <section className="deal-panel">
        <h2>Keep your buying criteria handy</h2>
        <p>
          Save this product and your personal target in a browser watchlist, or
          request email alerts. Email availability is shown before you sign up.
        </p>
        <div className="deal-actions">
          <Link className="deal-button" href={`/deal-alerts?topic=${g.slug}`}>
            Save a target or request alerts →
          </Link>
          <a
            href="https://winblackfriday.com/deal-checker"
            className="deal-button secondary"
          >
            Check an offer at WinBlackFriday →
          </a>
        </div>
      </section>
      <section>
        <h2>Sources and deeper buying advice</h2>
        <p>
          Manufacturer references establish product identity and published
          specifications. They do not establish today’s lowest offer. Check
          current seller terms before purchasing.
        </p>
        <ul>
          {g.sources.map(([label, url]) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {label} ↗
              </a>
            </li>
          ))}
          {g.related.map((href) => (
            <li key={href}>
              <Link href={href}>
                {href.split("/").pop()?.replaceAll("-", " ")}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>More deal questions</h2>
        <div className="deal-grid">
          {dealGuides
            .filter((x) => x.slug !== g.slug)
            .slice(0, 3)
            .map((x) => (
              <Link
                className="deal-card"
                key={x.slug}
                href={`/deals/${x.slug}`}
              >
                {x.title} →
              </Link>
            ))}
        </div>
        <Link href="/deals">Browse all deal guides →</Link>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(json).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
