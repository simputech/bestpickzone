// Run with the protected production env loaded. Outputs aggregate editorial demand only.
const base = process.env.DEAL_SITE_URL || "https://bestpickzone.com";
const secret = process.env.CRON_SECRET || process.env.BPZ_CRON_SECRET;
if (!secret)
  throw new Error(
    "Load the operator secret without putting it on the command line.",
  );
const r = await fetch(`${base}/api/deal-feedback`, {
  headers: { Authorization: `Bearer ${secret}` },
});
if (!r.ok) throw new Error(`Insights request failed: ${r.status}`);
const data = await r.json();
console.log(
  JSON.stringify(
    {
      ...data,
      nextStep:
        "Review recurring unmet intents, inspect existing routes, research official sources, then improve the matching guide before proposing a distinct new page.",
    },
    null,
    2,
  ),
);
