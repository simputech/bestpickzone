import Link from "next/link";
import { dealGuides } from "@/lib/deals/catalog";
import { withSeo } from "@/lib/seo-metadata";
export const metadata = withSeo(
  {
    title: "Deal Guides: Is That Offer Actually Worth Buying?",
    description:
      "Ask better shopping questions. Compare exact models, complete costs, bundles and seller terms with ten product-specific deal guides and the BestPickZone Deal Agent.",
  },
  "/deals",
);
export default function Page() {
  return (
    <main className="deal-shell">
      <header className="deal-hero">
        <p className="deal-eyebrow">SHOP WITH A QUESTION, NOT A COUNTDOWN</p>
        <h1>Is that offer actually worth buying?</h1>
        <p className="deal-lead">
          A discount matters only when the product fits, the seller is credible,
          and the total makes sense. Start with a specific purchase below.
        </p>
        <div className="deal-actions">
          <Link href="/deal-agent" className="deal-button">
            Ask the Deal Agent →
          </Link>
          <Link href="/deal-alerts" className="deal-button secondary">
            Save a target →
          </Link>
        </div>
      </header>
      <aside className="deal-status">
        <strong>Buying guidance, with clear evidence limits</strong>
        <p>
          We do not currently publish verified live prices or price history.
          These guides help you compare offers; retailer search links do not
          certify a sale or stock.
        </p>
      </aside>
      <div className="deal-grid">
        {dealGuides.map((g) => (
          <article className="deal-card" key={g.slug}>
            <p className="deal-eyebrow">{g.product}</p>
            <h2>
              <Link href={`/deals/${g.slug}`}>{g.title}</Link>
            </h2>
            <p>{g.description}</p>
            <Link href={`/deals/${g.slug}`}>Check the buying criteria →</Link>
          </article>
        ))}
      </div>
      <section>
        <h2>Bring a specific offer</h2>
        <p>
          Have a product link and a sale price?{" "}
          <a href="https://winblackfriday.com/deal-checker">
            WinBlackFriday’s deal checker
          </a>{" "}
          walks through the evidence and calculates a comparison from numbers
          you supply. Missing evidence remains missing; a claimed markdown never
          becomes a verified price history.
        </p>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: dealGuides.map((g, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: g.title,
              url: `https://bestpickzone.com/deals/${g.slug}`,
            })),
          }),
        }}
      />
    </main>
  );
}
