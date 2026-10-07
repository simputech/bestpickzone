// Narrow internal API. The calling Next.js server must possess the dedicated BPZ secret.
// Supabase's service credential stays in the Edge runtime and is never copied to a website.
const base = Deno.env.get("SUPABASE_URL")!;
const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const headers = {
  apikey: key,
  Authorization: `Bearer ${key}`,
  "Content-Type": "application/json",
};
const hash = async (s: string) =>
  Array.from(
    new Uint8Array(
      await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)),
    ),
  )
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");
const respond = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
async function db(
  path: string,
  method = "GET",
  body?: unknown,
  prefer = "return=representation",
) {
  const r = await fetch(`${base}/rest/v1/${path}`, {
    method,
    headers: { ...headers, Prefer: prefer },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (!r.ok) throw new Error(`database_${r.status}`);
  const text = await r.text();
  return text ? JSON.parse(text) : null;
}
Deno.serve(async (req: Request) => {
  try {
    if (req.method !== "POST")
      return respond({ error: "Method not allowed" }, 405);
    const supplied = req.headers.get("x-bpz-secret");
    if (!supplied || supplied.length > 200)
      return respond({ error: "Unauthorized" }, 401);
    const config = await db(
      "bpz_service_config?id=eq.backend&select=secret_hash",
    );
    if (!config[0] || (await hash(supplied)) !== config[0].secret_hash)
      return respond({ error: "Unauthorized" }, 401);
    const raw = await req.text();
    if (raw.length > 6000) return respond({ error: "Too large" }, 413);
    const b = JSON.parse(raw);
    if (b.action === "health") return respond({ storage: true });
    if (b.action === "rate")
      return respond({
        allowed: await db("rpc/bpz_take_rate", "POST", {
          p_key: String(b.key).slice(0, 100),
          p_limit: Math.min(100, Number(b.limit) || 10),
        }),
      });
    if (b.action === "subscribe") {
      if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) ||
        b.email.length > 254 ||
        !b.consent ||
        !/^[a-z0-9-]{2,100}$/.test(b.topic) ||
        !["pending_setup", "pending_confirmation"].includes(b.status)
      )
        return respond({ error: "Invalid request" }, 400);
      const old = await db(
        `bpz_deal_subscriptions?email=eq.${encodeURIComponent(b.email)}&topic=eq.${encodeURIComponent(b.topic)}&select=id`,
      );
      if (old.length) return respond({ saved: true, existing: true });
      const rows = await db("bpz_deal_subscriptions", "POST", {
        email: b.email,
        topic: b.topic,
        target: b.target,
        status: b.status,
        token_hash: await hash(b.token),
        confirm_hash: await hash(b.confirmToken),
        consent_version: "2026-10-06",
      });
      return respond({ saved: true, id: rows[0].id });
    }
    if (b.action === "cancelId") {
      if (!/^[a-f0-9-]{36}$/.test(b.id))
        return respond({ error: "Invalid id" }, 400);
      await db(`bpz_deal_subscriptions?id=eq.${b.id}`, "DELETE");
      return respond({ removed: true });
    }
    if (b.action === "confirm" || b.action === "cancel") {
      if (typeof b.token !== "string" || !/^[a-f0-9]{64}$/.test(b.token))
        return respond({ error: "Invalid link" }, 400);
      const filter = `${b.action === "cancel" ? "token_hash" : "confirm_hash"}=eq.${await hash(b.token)}`;
      if (b.action === "cancel") {
        await db(`bpz_deal_subscriptions?${filter}`, "DELETE");
        return respond({ removed: true });
      }
      const rows = await db(
        `bpz_deal_subscriptions?${filter}&created_at=gte.${encodeURIComponent(new Date(Date.now() - 48 * 3600000).toISOString())}&status=eq.pending_confirmation`,
        "PATCH",
        { status: "active", confirmed_at: new Date().toISOString() },
      );
      return respond({ confirmed: rows.length > 0 }, rows.length ? 200 : 410);
    }
    if (b.action === "feedback") {
      if (
        !/^[a-z0-9-]{2,100}$/.test(b.topic) ||
        !["buy-or-wait", "condition", "bundle", "compare-offers"].includes(
          b.intent,
        ) ||
        !["unspecified", "under-100", "100-499", "500-plus"].includes(
          b.budgetBand,
        )
      )
        return respond({ error: "Invalid feedback" }, 400);
      await db("bpz_deal_feedback", "POST", {
        topic: b.topic,
        intent: b.intent,
        budget_band: b.budgetBand,
        helpful: typeof b.helpful === "boolean" ? b.helpful : null,
      });
      return respond({ saved: true });
    }
    if (b.action === "insights")
      return respond({
        events: await db(
          "bpz_deal_feedback?select=topic,intent,budget_band,helpful,created_at&order=created_at.desc&limit=10000",
        ),
      });
    if (b.action === "candidates")
      return respond({
        subscribers: await db(
          "bpz_deal_subscriptions?status=eq.active&select=id,email,topic,target&limit=100",
        ),
      });
    if (b.action === "reserve") {
      const rows = await db(
        "bpz_deal_deliveries?on_conflict=id",
        "POST",
        { id: b.id, subscription_id: b.subscriptionId },
        "resolution=ignore-duplicates,return=representation",
      );
      return respond({ reserved: rows.length > 0 });
    }
    if (b.action === "delivered") {
      await db(
        `bpz_deal_deliveries?id=eq.${encodeURIComponent(b.id)}`,
        "PATCH",
        { status: "sent" },
      );
      return respond({ saved: true });
    }
    if (b.action === "cleanup") {
      await db(
        `bpz_deal_rate?expires_at=lt.${encodeURIComponent(new Date().toISOString())}`,
        "DELETE",
      );
      await db(
        `bpz_deal_feedback?created_at=lt.${encodeURIComponent(new Date(Date.now() - 90 * 86400000).toISOString())}`,
        "DELETE",
      );
      await db(
        `bpz_deal_subscriptions?status=neq.active&created_at=lt.${encodeURIComponent(new Date(Date.now() - 30 * 86400000).toISOString())}`,
        "DELETE",
      );
      return respond({ cleaned: true });
    }
    return respond({ error: "Unknown action" }, 400);
  } catch {
    return respond({ error: "Service temporarily unavailable" }, 503);
  }
});
