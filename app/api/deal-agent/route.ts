import { NextResponse } from "next/server";
import { requestBody } from "@/lib/deals/backend";
import { recommend, findCategory } from "@/lib/deals/recommend";
export async function POST(request: Request) {
  try {
    const body = await requestBody(request);
    if (
      typeof body.query !== "string" ||
      body.query.trim().length < 3 ||
      body.query.length > 400
    )
      return NextResponse.json(
        { error: "Tell me what you need in 3–400 characters." },
        { status: 400 },
      );
    if (
      body.category !== undefined &&
      (typeof body.category !== "string" || !findCategory(body.category))
    )
      return NextResponse.json(
        { error: "Please choose one of our shopping categories." },
        { status: 400 },
      );
    const history = body.history ?? [];
    if (
      !Array.isArray(history) ||
      history.length > 6 ||
      history.some((s: unknown) => typeof s !== "string" || s.length > 400)
    )
      return NextResponse.json(
        { error: "Start a new chat and try again." },
        { status: 400 },
      );
    return NextResponse.json(
      recommend(body.query.trim(), body.category, history),
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      { error: "We could not read that request. Please try again." },
      { status: 400 },
    );
  }
}
