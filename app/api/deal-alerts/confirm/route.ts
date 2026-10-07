import { NextResponse } from "next/server";
import { backend, requestBody, rate } from "@/lib/deals/backend";
export async function POST(request: Request) {
  try {
    const b = await requestBody(request);
    if (!/^[a-f0-9]{64}$/.test(b.token || ""))
      return NextResponse.json(
        { error: "Invalid confirmation link." },
        { status: 400 },
      );
    if (!(await rate(request, "manage", 20)))
      return NextResponse.json({ error: "Try again later." }, { status: 429 });
    await backend({ action: "confirm", token: b.token });
    return NextResponse.json({ confirmed: true });
  } catch {
    return NextResponse.json(
      { error: "This confirmation link is expired or unavailable." },
      { status: 410 },
    );
  }
}
