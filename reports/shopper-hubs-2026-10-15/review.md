# Shopper homepage and hub review — October 15, 2026

Base: `067dcef234a2ef4f83f57708d345aae059e77063` on `simputech/bestpickzone/main`. Upstream was rechecked before PR creation and still matched. Work is isolated on `codex/shopper-hubs-20261015`. This is a draft for review; no production deployment or merge is authorized by this work.

## Before and after

| Page | Before | After |
|---|---|---|
| `/` | Business/SEO language including “primary crawl paths,” “high-intent hubs,” and “commercial engine”; stale list counts and update date; popularity claims without evidence. | Books remain the first audience and primary action. Five reading paths, links to all ten recent author guides, three practical shopping paths, and specific compatibility guides. No popularity, testing, or blanket quality claims. |
| `/coffee` | “Brewing Lab,” internal silo language, an unattributed “3 sec” stat, and uniformly labeled “Head-to-Head” cards. | Start by brewing routine, cabinet space, existing machine, or batch size. Compare purchase paths, use a measurement checklist, and browse all 21 existing guides by task. |
| `/wfh` | Repeated setup advice, unsupported comfort/health implications, duplicated guide listings, and FAQ schema with no visible FAQ. | Start with wall clearance, dual displays, chair fit, or glare. Concrete purchase checks and 18 unique guide destinations. Remove hidden FAQ markup and health-outcome promises. |
| `/home-kitchen` | A long stack of overlapping promotional strips and public implementation language about conversion, CTAs, and raw HTML. | Appliance, attachment, dorm, outdoor, and home tasks; four starting choices; tradeoff table; model/space/cleaning checklist; all 29 existing guides retained. |

No new hubs or articles. `before-inventory.json` records the original guide destinations and copy. Registered buying/comparison guides still appear automatically after the curated groups, with duplicate destinations removed. Two descriptions in the shared section navigation were also rewritten to remove business language visible on the four pages.

## Standards and source review

Read the repository's `BESTPICKZONE_PROJECT_BRIEF_JUNE_2026.md`, especially sections 6–7, and its linked `/Users/derekconicello/Downloads/BestPickZone_BookContentStandard_v2_0.md`. The book standard applies directly to book articles; these navigation pages use its shared principles of specificity, honest framing, answer-first usefulness, and existing-cluster links. Read the SimpuTech content-reviewer skill and Vercel React best-practices skill. No AGENTS.md was present in the checkout or applicable workspace ancestors.

The canonical SimpuTech certification standards/project files in Google Drive timed out on read, including a retried read. An accessible older project reference was inspected for context, not treated as current deployment authority. This review does not claim a completed certification-specific Section 22 audit. The current repository, explicit task authorization, and BestPickZone-specific brief determine this task's scope.

Current primary sources opened October 15, 2026 to check the limited model-specific selection context:

- [Ninja Original container listing](https://www.sharkninja.com/ninja-creami-pints-2-pack-compatible-with-nc299amz-nc300s-nc350s-series-creami-ice-cream-makers/XSKPLID2CD.html) and [Ninja Deluxe/XL container listing](https://www.sharkninja.com/ninja-creami-xl-tubs-2-pack-compatible-with-nc500600-series-creami-ice-cream-makers/XSKPNTLD2.html): support checking exact model families rather than inferring compatibility from a shared brand name. No dimensions, prices, or detailed compatibility matrix copied into these hubs.
- [CalDigit TS4](https://www.caldigit.com/thunderbolt-station-4/) and [Apple M3 external-display requirements](https://support.apple.com/en-ca/117373): support checking the host model, operating system, connections, and display configuration. No universal dual-display or charging claim added.
- [Breville Bambino Plus](https://www.breville.com/en-us/product/bes500): confirms the basket/accessory context for the existing Bambino grinder guide. Removed the hub's unattributed heat-up statistic instead of presenting a model-specific specification as a category rule.

The new tables compare shopping approaches, not measured product performance. Advice is editorial selection guidance. Existing guide titles identify destinations; this task does not recertify every claim inside unchanged articles. No invented hands-on tests, expertise, ratings, prices, availability, statistics, or ranking guarantees.

## Re-review

REVIEW REPORT

Verdict: APPROVED for this draft's shopper-copy and navigation scope under the accessible BestPickZone standards.

Blocking issues (with exact corrections): None in the changed pages after re-review. Production release remains outside this task's authorization.

Required fixes by content-standard section: Internal strategy wording removed; misleading lab/popularity/blanket claims removed; duplicate WFH entries removed; FAQ schema without visible questions removed; webpage metadata consistently uses website type. All four changed sitemap dates reflect this material update.

Fact-check result: Specific compatibility-check context supported by the primary sources above. Unsupported statistics and outcome claims removed. Book cards, source checks, author articles, and their metadata are unchanged.

Formatting/template result: Server components only; no new dependencies or client JavaScript. Shared layout has one H1, ordered headings, visible focus styles, descriptive links, touch-friendly targets, and a labeled keyboard-focusable table region. Tables scroll within their region on narrow screens; the page itself does not overflow.

SEO/AEO/schema result: Self-canonical URLs retained, document/social titles and descriptions agree, CollectionPage describes each hub, and ItemList entries exactly match the visible guide directory. No fabricated FAQ, review, offer, or rating data. Existing language alternates retained.

Link and CTA result: All 68 previous hub destinations retained. All 103 unique internal destinations in the four main-content regions return direct 200 responses. Homepage links all five book categories and all ten recent author guides.

Final metadata and copy changes required: None identified in the changed scope.

Retest conditions: Rerun the documented build and verifier if article inventories, routes, page metadata, or hub markup change before merge. Run normal release checks after separately approved deployment.

## Verification

- Production compilation/static generation passed. Metadata validation: 333 rendered indexable pages, zero errors or warnings. Indexability validation: 335 sitemap URLs/rendered indexable pages, zero errors or warnings.
- TypeScript passed. Targeted ESLint on every changed TS/TSX file: no warnings or errors. The full build reports existing warnings in unchanged article files.
- 39 existing Amazon edition-match, metadata, SEO title, language-alternate, affiliate tracking, and consent tests passed.
- Two new inventory tests passed: preserve existing destinations and expose new registry entries once without cross-category leakage.
- `verify-shopper-hubs.cjs`: all four pages at 320, 390, 768, and 1440 pixels. Checks page overflow, single H1/heading order, metadata agreement, schema-directory agreement, fragment targets, visible disclosure, cookie preferences open/close, focus outline, ten recent author links, and direct HTTP status for 103 destinations. Browser errors: none.
- Reviewed desktop and mobile screenshots. See [before/after images](screenshots.md) and [machine-readable checks](verification.json).
- Git diff confirms the ten author articles, author registry, Amazon Creators API/matching/cards, consent/analytics code, affiliate tracking, credentials, payments, and deployment workflow were not modified. The Amazon matching tests use fixtures; this task did not add credentials or independently refresh live API product data.

Environment notes: the first dependency install exhausted disk space. Only this task's incomplete install was removed; a complete existing lock-compatible dependency tree was reused read-only. Builds temporarily disabled webpack's disk cache to fit available space; `next.config.js` was restored and is not part of the diff. The first indexability attempt was sandbox-blocked from listening locally; the permitted rerun passed. Headless Chromium used its own temporary profiles; shared browser UI and security settings were untouched. Screenshots block third-party requests and show fallback fonts.

Reproduce with the repository dependencies plus an externally supplied Playwright installation if needed:

```sh
npm run build
npm run typecheck
node --test scripts/shopper-hubs.test.cjs scripts/amazon-books.test.cjs scripts/metadata.test.mjs scripts/test-seo-titles.cjs scripts/test-multilingual-seo.cjs scripts/test-analytics-consent.cjs scripts/test-bounty-tracking.cjs scripts/test-pilot-affiliate-tracking.cjs
npm run start -- --hostname 127.0.0.1 --port 3119
# In another shell; optional HUB_TEST_BROWSER overrides the installed Chromium path.
node scripts/verify-shopper-hubs.cjs
```
