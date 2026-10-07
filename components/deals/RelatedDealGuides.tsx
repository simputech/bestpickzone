"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "@/lib/deals/related.json";
export default function RelatedDealGuides() {
  const path = usePathname();
  const matched = links.filter((x) => x.route === path);
  if (!matched.length) return null;
  return (
    <aside className="deal-shell" aria-label="Related deal questions">
      <div className="deal-panel">
        <h2>Ready to compare an offer?</h2>
        <p>
          Check the exact model, useful bundle contents and full cost before
          buying.
        </p>
        <div className="deal-actions">
          {matched.map((g) => (
            <Link
              className="deal-button secondary"
              key={g.slug}
              href={`/deals/${g.slug}`}
            >
              {g.product}: assess a deal →
            </Link>
          ))}
        </div>
        <Link href="/deal-agent">Ask the Deal Agent →</Link>
      </div>
    </aside>
  );
}
