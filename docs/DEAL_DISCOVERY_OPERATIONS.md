# Category recommendation refresh — October 13, 2026

The ten former product-specific deal pages have been retired. `lib/legacy-redirects.json` maps each old URL directly to its category replacement with a permanent redirect. The sitemap and internal links use only the new category URLs. Existing comparisons retain their original editorial intent; the new pages are interactive product-selection tools with brief category introductions, a visible chat composer and CollectionPage/Breadcrumb markup. The October 13 content expansion adds server-rendered buying guidance below the conversation, with an unordered ItemList matching the visible shortlist.

`lib/deals/category-guidance.json` holds the ten original category buying guides, unique metadata, use-case and skip advice, purchase checklists, questions and descriptive related links. Keep this import on the server page, out of the chat bundle. Preserve chat-first order and the distinction between selection hubs and existing detailed comparison articles. Do not add price, rating or FAQ rich-result promises.

`lib/deals/categories.json` holds the curated options, fit rules, tradeoffs and manufacturer sources. `category-index.json` is the small client-side index; update it when category names or prompts change. The Deal Agent uses guided matching, not an LLM or exhaustive shopping search. It returns results immediately without follow-up questions, carries budget state across optional user-initiated updates, and verifies budgeted matches against current Amazon offers when available. Missing or unverified offers are not matches; arbitrary product links are not retrieved. See the October 17 implementation notes below. Uncovered needs must not be represented as supported recommendations.

The legacy product catalog and subscription topic IDs remain internally available so saved targets, email requests and feedback history remain compatible. They no longer generate public deal-guide pages. Optional ratings retain the consented topic/budget-band/helpfulness flow without saving raw messages.

Current release checks: `npm run test:deals`, `npm run build`, and `node scripts/deals/verify-categories.mjs <base-url>`. The category verifier checks all ten pages and redirects, all starter prompts, metadata, sitemap replacement and API input controls without creating subscription records. The older integration script also exercises capture/removal and must be used only when that lifecycle test is intended.

## Historical October 6 foundation (superseded page layout)

### Deal discovery release — October 6, 2026

## Content ownership and inventory

The existing product comparisons, accessory guides and refurbished Breville guide retain their URLs and primary intents. The ten `/deals/*` pages answer the narrower transaction question after product selection: how to compare an offer, condition and bundle. None replaces an existing article. All ten have self canonicals, Article/Breadcrumb markup, no invented Product/Offer/review ratings, official sources, contextual links, a Deal Agent CTA and explicit price availability. `/deals` links to all ten; matching existing guides and category hubs link back through RelatedDealGuides. The main child sitemap includes all ten and the three new hubs/tools.

## Query-to-content loop

The guided Deal Agent matches editorial products and extracts a stated budget and question intent. It does not call an LLM or claim exhaustive live price comparison. Budgeted results use the limited current-offer checks described below. Optional helpfulness feedback stores only product topic, question intent, broad budget band and rating. No raw question, pasted URL or email is stored in feedback. Use `npm run deals:insights` with the operator secret in the environment to obtain the protected aggregate queue. Prioritize repeated unhelpful responses; inspect current routes before assigning a new page. Research the exact unanswered question, update the existing page when possible, run release checks and compare subsequent feedback. Never auto-publish query text. Unknown requests are counted as unmatched; they cannot be used to infer a specific new product without separate research.

## Capture and return visits

The watchlist is browser-local, versioned and limited to 20 supported products; it supports save, edit and removal. Email request storage uses new BPZ-only tables in the existing portfolio Supabase project. RLS is enabled and anon/authenticated table grants are revoked. The website holds only a dedicated narrow-service secret. The Edge Function requires that secret, compares its hash, and uses its built-in service key internally. Existing portfolio records and integrations are untouched.

Capture returns success only after persistence. Without email configuration, requests stay `pending_setup`, users see an explicit inactive state, and a private removal link is shown once. Pending requests expire after 30 days; feedback expires after 90 days; a daily authenticated Vercel job prunes expired data. A hashed network identifier rate-limits requests without storing IPs. Tokens are random and hashed at rest; preference pages are noindex and changes require POST.

## Actual activation prerequisites

Inspected BestPickZone production configuration has no email sender or email API credential. Other portfolio projects have sensitive Resend key names, but their secret values are unavailable through the current connection. Their configuration does not prove a BestPickZone sending domain is verified. No live email has been sent or claimed delivered.

Set `RESEND_API_KEY`, `BPZ_EMAIL_FROM` (verified BestPickZone domain), and `BPZ_POSTAL_ADDRESS` using the existing secret-management workflow. Verify sender status, confirmation delivery, confirmation expiry and unsubscribe behavior before enabling dispatch. Existing pending-setup users must re-confirm via an approved enrollment process; do not silently activate them. Marketing email requires an appropriate mailing address, which is intentionally not invented. Dispatch stays disabled unless `BPZ_ALERT_DISPATCH_ENABLED=true`.

No licensed current-price/history feed is available for alerts. `lib/deals/verified-offers.ts` is deliberately empty. An alertable offer must identify the exact model/condition, USD price, source, check time, expiry and permission for email usage. Source observations older than 24 hours, future timestamps and Amazon data are rejected. Do not use Amazon API data or Special Links in email. Each delivery reserves a unique subscription/offer id before sending. A failed or interrupted reservation requires operator inspection; do not automatically retry past the provider's idempotency window. The first implementation processes at most 100 active subscribers per dispatch and requires pagination before expansion.

The daily Vercel cron uses `CRON_SECRET`. The operator insights endpoint accepts the same secret. No secrets belong in this document or source control. To rotate backend access, update the hashed config record and the website's sensitive env together, then redeploy and test unauthorized requests.

## Verification

Run `npm run test:deals`, existing affiliate/analytics tests, `npm run build` (includes full metadata and sitemap indexability validation), and `node scripts/deals/integration.mjs <base-url>`. Test browser question matching, unknown questions, budget labels, saved-target persistence, opt-in request storage/removal, responsive navigation and WinBlackFriday scoring. A Ready deployment is followed by custom-domain verification. Indexability is not proof of Google/Bing indexing.

## Deal Agent budget fix — October 17, 2026

The October 13 implementation acknowledged budgets but still suggested unpriced products. Its six-turn history could also drop the budget, and Start over retained a detected category. The revised endpoint carries a validated budget state independently of the history window. New explicit amounts replace earlier ones; `no budget` clears the constraint; invalid/unsupported-currency amounts fail closed. Under/below are strict limits; up to and a plain dollar budget are inclusive. USD only, with shipping and tax excluded from item-price comparisons.

Every request resolves directly to results or an actionable no-match/unavailable response; there is no preference-question step. The endpoint checks only the appropriate curated choices against Amazon Creators API OffersV2, using existing credentials and `althcu-20`. Queries sent to Amazon are source-authored product identities, never user messages. Grinder ASIN/model constraints reuse the verified article mappings. Other categories require strict full-name/brand agreement and one unambiguous result. No product is returned as a budget match unless identity, unrestricted new condition, in-stock status and item price pass validation. Missing, ambiguous, member-only, subscription, deal or MAP-restricted offers fail closed. This is a limited shortlist, not exhaustive product or retailer search. No editorial price bands enter this decision.

Offer cache is separate from article metadata: five minutes in process, one-minute negative cache, deduplicated requests, existing request gate and bounded API response time. No offer history, persistence, emails or alerts. Returned Amazon URLs retain all attribution parameters. Cards show the source, check time, new condition, availability and required price/content notices. Displayed checks expire after five minutes and require a fresh user request; no automatic tracking. Existing article image/identity calls still request no offers. Production/preview responses use no-store.

Primary documentation checked October 17, 2026:
- https://affiliate-program.amazon.com/creatorsapi/docs/en-us/api-reference/operations/get-items — request resources and product lookup.
- https://affiliate-program.amazon.com/creatorsapi/docs/en-us/api-reference/resources/offersV2 — price money, condition, availability, featured offer and restriction fields.
- https://affiliate-program.amazon.com/help/operating/policies — API attribution, cache, timestamp and notices; agent identification. No price alerts/tracking enabled by this change.

Run `npm run test:deals`, `node --test scripts/amazon-*.test.cjs`, `npm run typecheck`, `npm run lint`, `npm run build`, and `node scripts/deals/verify-categories.mjs <base-url>`. Review and browser evidence must cover initial $20 query, both preference chips, free-text replies, budget changes and retention beyond six turns, impossible budgets, no-match, unavailable/offline recovery, repeated clicks, reset, and desktop/mobile layout. Test requests use synthetic shopping text only.

## Direct-results UX decision — October 16, 2026 (America/New_York)

The user explicitly requested: “i dont like how it ask a follow question, just give the result”. For a supported category without a stated preference, return the non-rejected curated options immediately with their use cases and tradeoffs. A specific preference still narrows the result. An explicit budget continues to require verified within-budget offers; no-match and verification-unavailable responses must not substitute unverified products. After an answer, hide the suggested-reply chips and label the retained input “Update your search (optional)”. Initial search examples remain available. Do not reintroduce a mandatory question or repeated refinement step.

Budget parsing must distinguish monetary limits from product measurements. Wattage, weight, dimensions and similar constraints must never raise a stated price cap. Recognize explicit currency before or after the amount and punctuated budget labels; preserve genuine revisions. Keep the monetary-context regressions in `scripts/deals/budget.test.cjs` in the release test run.

Explicit currency or a budget label must be recognized before measurement exclusion. In “under $20 in stock” or “under $20 in black”, the following preposition must not discard the price cap. Inch abbreviations require dimensional context when no monetary marker is present; regression tests cover both readings.
