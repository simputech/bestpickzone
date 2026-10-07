import { NextResponse } from "next/server";
import { backend, requestBody, rate, removalId } from "@/lib/deals/backend";
export async function POST(request: Request) {
  try {
    const b = await requestBody(request);
    const id = removalId(String(b.token || ""));
    if (!id && !/^[a-f0-9]{64}$/.test(b.token || ""))
      return NextResponse.json(
        { error: "Invalid removal link." },
        { status: 400 },
      );
    if (!(await rate(request, "manage", 20)))
      return NextResponse.json({ error: "Try again later." }, { status: 429 });
    await backend(
      id ? { action: "cancelId", id } : { action: "cancel", token: b.token },
    );
    return NextResponse.json({ removed: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to remove the request. Try again." },
      { status: 503 },
    );
  }
}
