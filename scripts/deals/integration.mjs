import assert from "node:assert/strict";
import fs from "node:fs";
import { randomUUID } from "node:crypto";
const base = process.argv[2] || "http://127.0.0.1:3106";
const guides = JSON.parse(fs.readFileSync("lib/deals/guides.json", "utf8"));
const post = (path, body, origin = base) =>
  fetch(base + path, {
    method: "POST",
    headers: { "Content-Type": "application/json", origin },
    body: JSON.stringify(body),
  });
let checked = 0;
for (const g of guides) {
  const r = await fetch(`${base}/deals/${g.slug}`);
  assert.equal(r.status, 200);
  const html = await r.text();
  assert.ok(html.includes(`https://bestpickzone.com/deals/${g.slug}`));
  assert.ok(!/<meta[^>]+name="robots"[^>]+noindex/.test(html));
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.ok(html.includes("Price check: unavailable"));
  assert.ok(html.includes("sponsored noopener"));
  assert.ok(html.includes("althcu-20"));
  for (const m of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  ))
    JSON.parse(m[1]);
  checked++;
}
const links = [...new Set(guides.flatMap((g) => g.related))];
for (const link of links) {
  const r = await fetch(base + link, { redirect: "manual" });
  assert.equal(r.status, 200, link);
}
const sitemap = await (await fetch(base + "/sitemap-main.xml")).text();
for (const g of guides) assert.ok(sitemap.includes(`/deals/${g.slug}`));
let r = await post("/api/deal-agent", { query: "Find a CREAMi under $250" });
assert.equal(r.status, 200);
let d = await r.json();
assert.equal(d.budget, 250);
assert.equal(d.livePrices, false);
assert.equal(d.guides[0].slug, "ninja-creami-deals");
r = await post("/api/deal-agent", { query: "a telescope for my balcony" });
d = await r.json();
assert.equal(d.guides.length, 0);
r = await post(
  "/api/deal-agent",
  { query: "Bambino" },
  "https://unrelated.example",
);
assert.ok(r.status >= 400);
for (const path of ["/api/deal-feedback", "/api/cron/deal-alerts"])
  assert.equal((await fetch(base + path)).status, 401);
const health = await (await fetch(base + "/api/deal-alerts")).json();
assert.equal(health.capture, true);
assert.equal(
  health.email,
  false,
  "Do not run capture fixtures with outbound email enabled",
);
assert.equal(health.prices, false);
const body = {
  email: `bpz-release-${randomUUID()}@example.com`,
  topic: "breville-bambino-deals",
  target: 250,
  consent: true,
};
r = await post("/api/deal-alerts", { ...body, consent: false });
assert.equal(r.status, 400);
let removal;
try {
  r = await post("/api/deal-alerts", body);
  assert.equal(r.status, 201);
  d = await r.json();
  assert.equal(d.saved, true);
  assert.ok(d.message.includes("not active"));
  assert.match(d.manageToken, /^[a-f0-9]{64}$/);
  removal = d.manageToken;
  r = await post("/api/deal-alerts", body);
  assert.equal(r.status, 200);
  assert.equal((await r.json()).manageToken, undefined);
  const page = await (await fetch(base + "/deal-alerts/manage")).text();
  assert.match(page, /noindex/);
} finally {
  if (removal) {
    r = await post("/api/deal-alerts/cancel", { token: removal });
    assert.equal(r.status, 200);
    assert.equal((await r.json()).removed, true);
  }
}
console.log(
  JSON.stringify(
    {
      base,
      landingPages: checked,
      relatedDestinations: links.length,
      sitemap: "passed",
      questionMatching: "passed",
      accessControls: "passed",
      captureAndRemoval: "passed",
      emailDelivery: "inactive - not tested",
      verifiedPrices: "unavailable",
    },
    null,
    2,
  ),
);
