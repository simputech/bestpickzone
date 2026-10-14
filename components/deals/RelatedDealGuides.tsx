"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "@/lib/deals/related.json";
export default function RelatedDealGuides() {
  const path = usePathname();
  const matched = links.filter((x) => x.route === path);
  if (!matched.length) return null;
  return (
    <aside className="deal-shell" aria-label="Product recommendations">
      <div className="deal-panel">
        <h2>Find the right product for you</h2>
        <p>
          Tell our Deal Agent what you need and get a recommendation with reasons.
        </p>
        <div className="deal-actions">
          {matched.map((g) => (
            <Link
              className="deal-button secondary"
              key={g.slug}
              href={`/deals/${g.slug}`}
            >
              {g.product}: find your fit →
            </Link>
          ))}
        </div>
        <Link href="/deal-agent">Ask the Deal Agent →</Link>
      </div>
    </aside>
  );
}
