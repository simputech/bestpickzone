import { NextResponse } from "next/server";
import {
  backend,
  emailReady,
  rate,
  requestBody,
  sendEmail,
  token,
} from "@/lib/deals/backend";
import { findGuide } from "@/lib/deals/catalog";
export const dynamic = "force-dynamic";
export async function GET() {
  let capture = false;
  try {
    capture = Boolean((await backend({ action: "health" })).storage);
  } catch {}
  return NextResponse.json(
    { capture, email: emailReady(), prices: false },
    { headers: { "Cache-Control": "no-store" } },
  );
}
export async function POST(request: Request) {
  try {
    const b = await requestBody(request);
    if (b.website)
      return NextResponse.json(
        { error: "Unable to accept this request." },
        { status: 400 },
      );
    const email = String(b.email || "")
        .trim()
        .toLowerCase(),
      topic = String(b.topic || "opportunities");
    const target =
      b.target == null || b.target === "" ? null : Number(b.target);
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      b.consent !== true ||
      (!findGuide(topic) && topic !== "opportunities") ||
      (target !== null &&
        (!Number.isFinite(target) || target <= 0 || target > 100000))
    )
      return NextResponse.json(
        {
          error:
            "Enter a valid email, product and positive target, and choose consent.",
        },
        { status: 400 },
      );
    if (!(await rate(request, "subscribe", 5)))
      return NextResponse.json(
        { error: "Too many requests. Please try again in an hour." },
        { status: 429 },
      );
    const manage = token(),
      confirm = token(),
      ready = emailReady();
    const saved = await backend({
      action: "subscribe",
      email,
      topic,
      target,
      consent: true,
      token: manage,
      confirmToken: confirm,
      status: ready ? "pending_confirmation" : "pending_setup",
    });
    if (saved.existing)
      return NextResponse.json({
        saved: true,
        message:
          "If this request was already saved, it remains on file. Keep your original removal link. Email alerts are not active until availability and confirmation requirements are met.",
      });
    let sent = false;
    if (ready) {
      try {
        await sendEmail(
          email,
          "Confirm your BestPickZone deal-alert request",
          `Confirm your request within 48 hours: https://bestpickzone.com/deal-alerts/confirm#${confirm}\n\nProduct: ${findGuide(topic)?.product || "Shopping opportunities"}\nTarget: ${target === null ? "No target selected" : `USD ${target}`}\n\nRemove this request: https://bestpickzone.com/deal-alerts/manage#${manage}\n\nWe do not currently have a verified live price feed. Confirmation is not a promise of monitoring or a deal.`,
          `bpz-confirm-${saved.id}`,
        );
        sent = true;
      } catch {}
    }
    return NextResponse.json(
      {
        saved: true,
        manageToken: manage,
        message: sent
          ? "Request saved. Check your inbox to confirm. Verified price monitoring is not active yet."
          : "Request saved. Email delivery and verified price monitoring are not active yet. Keep the removal link below; no confirmation email has been sent.",
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: "We could not save your request. Please try again later." },
      { status: 503 },
    );
  }
}
