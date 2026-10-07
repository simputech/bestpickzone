import DealAlerts from "@/components/deals/DealAlerts";
import { withSeo } from "@/lib/seo-metadata";
export const metadata = withSeo(
  {
    title: "Deal Watchlist, Price Targets and Email Requests",
    description:
      "Save products and personal price targets in your BestPickZone watchlist. Request opportunity emails with clear delivery and monitoring availability.",
  },
  "/deal-alerts",
);
export default function Page() {
  return (
    <main className="deal-shell">
      <header className="deal-hero">
        <p className="deal-eyebrow">COME BACK WITH A PLAN</p>
        <h1>Your watchlist. Your price target.</h1>
        <p className="deal-lead">
          Keep the buying criteria that matter to you. Save a product for your
          next visit or request future opportunity emails.
        </p>
      </header>
      <DealAlerts />
    </main>
  );
}
