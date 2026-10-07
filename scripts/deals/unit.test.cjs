const { test } = require("node:test");
const assert = require("node:assert/strict");
const ts = require("typescript");
const fs = require("node:fs");
const path = require("node:path");
function load(file) {
  const full = path.resolve(file);
  const m = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(full, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  }).outputText;
  new Function("require", "module", "exports", code)(
    (s) => require(path.resolve(path.dirname(full), s)),
    m,
    m.exports,
  );
  return m.exports;
}
const c = load("lib/deals/catalog.ts");
const v = load("lib/deals/verified-offers.ts");
test("matches the product while separating budget from a price", () => {
  assert.equal(
    c.matchGuides("Find CREAMi under $250")[0].slug,
    "ninja-creami-deals",
  );
  assert.equal(c.queryBudget("under $1,200"), 1200);
  assert.equal(c.queryBudget("Bambino BES450"), null);
  assert.equal(c.queryBudget("under $0"), null);
});
test("unsupported product never receives an invented match", () =>
  assert.deepEqual(c.matchGuides("a telescope for a balcony"), []));
test("captures question intent", () => {
  assert.equal(c.queryIntent("should I wait for a deal?"), "buy-or-wait");
  assert.equal(c.queryIntent("refurbished Airwrap"), "condition");
});
test("ten unique routes and affiliate destinations retain the exact tag", () => {
  assert.equal(new Set(c.dealGuides.map((g) => g.slug)).size, 10);
  for (const g of c.dealGuides) {
    const u = new URL(c.retailerSearches(g.product)[0].url);
    assert.equal(u.searchParams.get("tag"), "althcu-20");
    assert.equal(u.searchParams.get("k"), g.product);
  }
});
test("stale, future, unlicensed and Amazon observations cannot trigger alerts", () => {
  const now = Date.parse("2026-10-06T15:00:00Z");
  const o = {
    id: "test",
    topic: "test",
    model: "test",
    price: 100,
    currency: "USD",
    condition: "new",
    retailer: "test",
    sourceUrl: "https://example.com/product",
    checkedAt: "2026-10-06T14:00:00Z",
    expiresAt: "2026-10-07T14:00:00Z",
    emailPermitted: true,
  };
  assert.equal(v.usableOffer(o, now), true);
  for (const changed of [
    { emailPermitted: false },
    { checkedAt: "2026-10-05T14:00:00Z" },
    { checkedAt: "2026-10-06T16:00:00Z" },
    { price: 0 },
    { sourceUrl: "https://www.amazon.com/dp/EXAMPLE" },
    { expiresAt: "invalid" },
  ])
    assert.equal(v.usableOffer({ ...o, ...changed }, now), false);
});
