import Link from "next/link";
import { categories } from "@/lib/deals/recommend";
import { withSeo } from "@/lib/seo-metadata";
export const metadata = withSeo(
  {
    title: "Find a Product: Recommendations for Your Needs",
    description:
      "Choose a shopping category and tell the BestPickZone Deal Agent what you need. Get a product recommendation with a clear reason, tradeoff and source.",
  },
  "/deals",
);
export default function Page() {
  return (
    <main className="shopping-shell">
      <header className="shopping-hero">
        <p className="shopping-kicker">BESTPICKZONE DEAL AGENT</p>
        <h1>What are you looking for?</h1>
        <p>
          Choose a category. Tell us what matters. Get a recommendation with a
          reason.
        </p>
        <Link className="shopping-text-link" href="/deal-agent">
          Start with your own question →
        </Link>
      </header>
      <div className="shopping-category-grid">
        {categories.map((c) => (
          <Link
            className="shopping-category-card"
            href={`/deals/${c.slug}`}
            key={c.slug}
          >
            <span className="shopping-card-arrow" aria-hidden="true">
              ↗
            </span>
            <h2>{c.title}</h2>
            <p>{c.criteria.join(" · ")}</p>
            <span>Find my fit →</span>
          </Link>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: categories.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.title,
              url: `https://bestpickzone.com/deals/${c.slug}`,
            })),
          }),
        }}
      />
    </main>
  );
}
