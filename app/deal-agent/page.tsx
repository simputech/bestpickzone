import DealAgent from "@/components/deals/DealAgent";
import { withSeo } from "@/lib/seo-metadata";
export const metadata = withSeo(
  {
    title: "Deal Agent: Ask a Shopping or Deal Question",
    description:
      "Ask BestPickZone about product offers, budgets, bundles and refurbished deals. Find useful buying checks and clearly labeled retailer searches.",
  },
  "/deal-agent",
);
export default function Page() {
  return (
    <main className="deal-shell">
      <header className="deal-hero">
        <p className="deal-eyebrow">BESTPICKZONE DEAL AGENT · GUIDED BETA</p>
        <h1>What would make this a good deal for you?</h1>
        <p className="deal-lead">
          Tell us the product and your priorities. Start with buying guidance,
          compare the same model, and save a target for your next visit.
        </p>
      </header>
      <DealAgent />
      <section>
        <h2>Have an offer to check?</h2>
        <p>
          <a href="https://winblackfriday.com/deal-checker">
            Paste a product link into WinBlackFriday’s deal checker
          </a>{" "}
          and work through price, identity and seller evidence. It uses
          information you supply, with no invented price history.
        </p>
      </section>
    </main>
  );
}
