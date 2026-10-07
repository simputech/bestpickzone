import { NextResponse } from "next/server";
import {
  backend,
  emailReady,
  isOperator,
  sendEmail,
  signedRemoval,
} from "@/lib/deals/backend";
import { verifiedOffers, usableOffer } from "@/lib/deals/verified-offers";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  if (!isOperator(request))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    await backend({ action: "cleanup" });
    if (!emailReady())
      return NextResponse.json({
        status: "blocked",
        reason:
          "Verified sender and postal address are required; no emails sent.",
      });
    const offers = verifiedOffers.filter((o) => usableOffer(o));
    if (!offers.length)
      return NextResponse.json({ status: "no_verified_offers", sent: 0 });
    // Dispatch requires deliberate release activation after sender, consent and offer-source checks.
    if (process.env.BPZ_ALERT_DISPATCH_ENABLED !== "true")
      return NextResponse.json({ status: "dispatch_disabled", sent: 0 });
    const { subscribers } = await backend({ action: "candidates" });
    let sent = 0;
    for (const s of subscribers) {
      const offer = offers.find(
        (o) =>
          (o.topic === s.topic || s.topic === "opportunities") &&
          (s.target === null || o.price <= Number(s.target)),
      );
      if (!offer) continue;
      const id = `${s.id}:${offer.id}`;
      if (
        !(await backend({ action: "reserve", id, subscriptionId: s.id }))
          .reserved
      )
        continue;
      await sendEmail(
        s.email,
        s.target === null
          ? "A BestPickZone shopping opportunity"
          : "An offer meets your BestPickZone target",
        `${offer.model}: USD ${offer.price}\nRetailer: ${offer.retailer}\nCondition: ${offer.condition}\nChecked: ${offer.checkedAt}\nPrices, stock, shipping and tax can change. Recheck the seller.\n\nReview buying criteria: https://bestpickzone.com/deals/${offer.topic}\nSource: ${offer.sourceUrl}\n\nThis is a shopping opportunity, not a claim of the lowest price.\n\nUnsubscribe and delete this request: https://bestpickzone.com/deal-alerts/manage#${signedRemoval(s.id)}`,
        id,
      );
      await backend({ action: "delivered", id });
      sent++;
    }
    return NextResponse.json({ sent });
  } catch {
    return NextResponse.json(
      {
        error: "Dispatch failed; inspect reserved deliveries before retrying.",
      },
      { status: 503 },
    );
  }
}
