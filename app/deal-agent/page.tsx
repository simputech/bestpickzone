import Link from "next/link";
import DealAgent from "@/components/deals/DealAgent";
import { categories } from "@/lib/deals/recommend";
import { withSeo } from "@/lib/seo-metadata";
export const metadata = withSeo(
  {
    title: "Deal Agent: Find a Product That Fits You",
    description:
      "Tell BestPickZone what you are looking for. Get a guided product recommendation with reasons, tradeoffs and manufacturer sources.",
  },
  "/deal-agent",
);
export default function Page() {
  return (
    <main className="shopping-shell">
      <header className="shopping-hero">
        <p className="shopping-kicker">BESTPICKZONE DEAL AGENT</p>
        <h1>Let’s find your next good buy.</h1>
        <p>
          Tell us what you need. We’ll help narrow the choice and explain the
          recommendation.
        </p>
      </header>
      <div className="shopping-layout">
        <DealAgent />
        <aside className="shopping-why">
          <h2>Start with a category</h2>
          <nav aria-label="Shopping categories">
            {categories.map((c) => (
              <Link key={c.slug} href={`/deals/${c.slug}`}>
                {c.title} →
              </Link>
            ))}
          </nav>
          <p>
            We match your preferences against a curated shortlist and link the
            product information behind each suggestion.
          </p>
        </aside>
      </div>
    </main>
  );
}
