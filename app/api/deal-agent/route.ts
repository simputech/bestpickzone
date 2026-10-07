import { NextResponse } from "next/server";
import {
  matchGuides,
  queryBudget,
  queryIntent,
  retailerSearches,
} from "@/lib/deals/catalog";
import { requestBody } from "@/lib/deals/backend";
export async function POST(request: Request) {
  try {
    const b = await requestBody(request);
    const q = String(b.query || "").trim();
    if (q.length < 3 || q.length > 400)
      return NextResponse.json(
        { error: "Ask a shopping question between 3 and 400 characters." },
        { status: 400 },
      );
    const guides = matchGuides(q);
    return NextResponse.json({
      budget: queryBudget(q),
      intent: queryIntent(q),
      livePrices: false,
      guides: guides.map((g) => ({
        slug: g.slug,
        product: g.product,
        title: g.title,
        answer: g.answer,
        checks: g.checks,
        searches: retailerSearches(g.product),
      })),
      message: guides.length
        ? "Start with these buying checks, then compare the same model at each retailer."
        : "We do not yet have a matching product guide. Try a product name below, or use WinBlackFriday to check an offer. No product or price has been verified.",
    });
  } catch {
    return NextResponse.json(
      { error: "Please enter a valid shopping question." },
      { status: 400 },
    );
  }
}
