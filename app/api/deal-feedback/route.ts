import { NextResponse } from "next/server";
import { backend, requestBody, rate, isOperator } from "@/lib/deals/backend";
import { findGuide } from "@/lib/deals/catalog";
export async function POST(request: Request) {
  try {
    const b = await requestBody(request);
    if (
      b.consent !== true ||
      (!findGuide(b.topic) && b.topic !== "unmatched") ||
      !["buy-or-wait", "condition", "bundle", "compare-offers"].includes(
        b.intent,
      ) ||
      !["unspecified", "under-100", "100-499", "500-plus"].includes(
        b.budgetBand,
      )
    )
      return NextResponse.json({ error: "Invalid feedback." }, { status: 400 });
    if (!(await rate(request, "feedback", 30)))
      return NextResponse.json({ error: "Try again later." }, { status: 429 });
    await backend({
      action: "feedback",
      topic: b.topic,
      intent: b.intent,
      budgetBand: b.budgetBand,
      helpful: b.helpful,
    });
    return NextResponse.json({ saved: true });
  } catch {
    return NextResponse.json(
      { error: "Feedback could not be saved." },
      { status: 503 },
    );
  }
}
export async function GET(request: Request) {
  if (!isOperator(request))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { events } = await backend({ action: "insights" });
    const groups: Record<
      string,
      { topic: string; intent: string; requests: number; notHelpful: number }
    > = {};
    for (const e of events) {
      const key = `${e.topic}:${e.intent}`;
      groups[key] ||= {
        topic: e.topic,
        intent: e.intent,
        requests: 0,
        notHelpful: 0,
      };
      groups[key].requests++;
      if (e.helpful === false) groups[key].notHelpful++;
    }
    return NextResponse.json(
      {
        window: "Last 90 days, at most 10000 events",
        opportunities: Object.values(groups).sort(
          (a, b) => b.notHelpful - a.notHelpful || b.requests - a.requests,
        ),
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      { error: "Insights unavailable" },
      { status: 503 },
    );
  }
}
