# Deal Agent budget fix verification

Date: 2026-10-17 UTC. Branch `fix/deal-agent-budget`; draft PR https://github.com/simputech/bestpickzone/pull/18. Production has not changed yet.

## Confirmed before behavior

Viewed the supplied Library screenshot pixels from a verified readable local file. Reproduced `coffee grinder under $20` on production. Submission worked and asked a brewing preference question. Both chips then recommended an unverified Baratza model while retaining $20 as a note. Code discarded budget context after six turns and retained detected category on reset. Catalog has two grinder choices; no live price request existed in this endpoint.

The screenshot's title occlusion was a scrolled sticky-header state. Fresh desktop title top was 182.59px with header bottom 62px; fresh 390px mobile title top 208.59px with header bottom 70px. No initial-layout overlap or horizontal overflow was found. Answer scrolling now positions newly needed answers below the header.

## Automated checks

- Deal Agent unit tests: 23 passed (budget parsing, both chips, retention, changed/removed/invalid/foreign/zero budgets, strict/inclusive limits, unsupported manual grinders, no-match, unavailable, stale/future offers, restricted offers and identity/attribution).
- Amazon regression/API tests: 49 passed, including real-shaped OffersV2 parsing, separate five-minute offer cache, deduplication, stale failure, no-credential/foreign-market failure and unchanged article resources.
- TypeScript passed. ESLint passed with pre-existing warnings in unrelated article files.
- Next.js production compilation passed; metadata: 296 rendered indexable pages, zero errors/warnings. Indexability: 335 sitemap URLs, zero errors/warnings. Runtime asset trace check passed.
- Category integration verifier passed: 10 categories/redirects, 21 starter prompts, 24 related links, input/origin validation, canonical/sitemap/static guide checks. No subscriptions, feedback or emails created.

## Browser and real-provider checks

- Separate Chrome task tab; unrelated user tabs preserved.
- Credential-free local and exact Vercel preview return actionable verification-unavailable for the user's $20 query, with zero product cards. Preview's Amazon environment is absent by verified Vercel metadata; no secrets copied to preview.
- Real existing local Creator API credentials tested without printing or persisting values. `$20` grinder request returned `no-match` after checking both curated products. Filter coffee under a higher budget returned the exact standard Encore with a verified within-budget item price. The espresso/filter chip changed to exact Encore ESP while retaining the higher budget. Prices/stock are not persisted in this evidence file.
- Verified source/date/new-condition/in-stock text, price disclaimer, Amazon content notice and unchanged Amazon-vended affiliate URL in rendered cards.
- Earlier QA verified both original refinement chips. The newer user instruction removes post-result chips and the question step: broad requests now return options immediately, while free-text updates remain optional and preserve the budget.
- Nine-turn deployed-preview conversation retained the original $20 even beyond the six-message window.
- Changed budget via free text succeeded, including lowering a real verified result back to $20 (no-match, zero cards). Zero budget returned a clear no-free-product response.
- Double-click produced one turn. Tab-scoped simulated offline request preserved the message and produced retry feedback; restored network and retry succeeded with the new budget.
- Start over cleared turns, budget and detected category on the main page. Supported starting chips returned.
- Desktop viewport 1200px and mobile 390px had equal document/viewport widths. Verified price card width was 328px on mobile; answer top 89.87px versus sticky header bottom 70px.

## Provider/deployment receipts

Initial preview: READY `dpl_BJ84XNYhPS5feZkT3tgM6hJb3KgG`, source `7c9a02035ab9469fae58cf98f03b4a4a5bd6e0df`. Later wording, budget edge-case, documentation and test changes require final-head preview check.

Existing production before this fix: READY `dpl_FPxjnquLGdoovSCaLzHxUVyDtmmg`, source `b6f43f86eab87c85d2ac047a822dba3271e53ab0`. No merge or production publication yet.

## Remaining gate

Independent review and final preview verification, then expected-head merge and exact production commit/behavior verification. Parent will coordinate independent read-only review of the final revised head; no local review agent is required. Live displayed-offer expiry passed browser observation: both real offer cards disappeared after five minutes, with the $300 constraint retained and an explicit retry message. Project inventory structural verification passed and is now included in the production build gate. No new credentials, provider resources, database migrations, purchases, email sends or alert activation occurred.

## Direct-results revision

User preference recorded on October 16, 2026 (America/New_York): return results without asking a follow-up question. All ten supported categories now produce immediate curated options when no preference is given, narrowed results when one is given, or a direct no-match/unavailable result. Budget verification is unchanged. Post-answer preference chips are removed and the input is explicitly optional. Rejected options are excluded, including an all-rejected no-match.

## Independent review correction: monetary context

Review of `3c227e239fd1fd10c0bd07f1202d99440b89f659` identified that a later watt/gram limit could overwrite an explicit dollar budget, and that `under USD 20` / `budget: 20` were not recognized. The parser now requires currency or budget/comparison context, excludes measurement suffixes, and prioritizes explicit monetary amounts over bare comparisons in the same request. Explicit budget revisions and separate-turn unitless budget updates remain supported. Regression coverage includes both reported overwrites, power/weight/dimension/capacity/time/storage units, USD placement, punctuation, currency conflicts, revisions, direct results and withholding unverified products. Production remains unchanged pending re-review of the corrected head.

## Re-review correction: explicit currency precedence

Re-review of `0802a763d4f44bd73756b74e5354a89b0defe771` found that the inch abbreviation `in` caused an explicit `$20` amount to be discarded in phrases such as “in stock” and “in black”. Explicit currency and budget labels now take precedence over measurement detection. Bare `in` is treated as an inch abbreviation only when attached to the amount, terminated, punctuated as an abbreviation, or followed by dimensional wording. Regression tests cover stock/color prose, dimensions, inches/in/in./hyphenated/quoted inch constraints, USD positions, retained constraints across turns, genuine budget revisions, and foreign currency. API integration coverage includes seven budget-context queries. Production remains unchanged pending re-review.
