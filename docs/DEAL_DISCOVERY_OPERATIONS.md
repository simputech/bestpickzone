# Category recommendation refresh — October 13, 2026

The ten former product-specific deal pages have been retired. `lib/legacy-redirects.json` maps each old URL directly to its category replacement with a permanent redirect. The sitemap and internal links use only the new category URLs. Existing comparisons retain their original editorial intent; the new pages are interactive product-selection tools with brief category introductions, a visible chat composer and CollectionPage/Breadcrumb markup. The October 13 content expansion adds server-rendered buying guidance below the conversation, with an unordered ItemList matching the visible shortlist.

`lib/deals/category-guidance.json` holds the ten original category buying guides, unique metadata, use-case and skip advice, purchase checklists, questions and descriptive related links. Keep this import on the server page, out of the chat bundle. Preserve chat-first order and the distinction between selection hubs and existing detailed comparison articles. Do not add price, rating or FAQ rich-result promises.

`lib/deals/categories.json` holds the curated options, fit rules, tradeoffs and manufacturer sources. `category-index.json` is the small client-side index; update it when category names or prompts change. The Deal Agent uses guided matching, not an LLM or live shopping feed. It asks a follow-up before selecting a product when the preference is unclear, carries a budget across turns, and supports changing preferences. It does not verify price fit, availability or arbitrary product links. Uncovered needs must not be represented as supported recommendations.

The legacy product catalog and subscription topic IDs remain internally available so saved targets, email requests and feedback history remain compatible. They no longer generate public deal-guide pages. Optional ratings retain the consented topic/budget-band/helpfulness flow without saving raw messages.

Current release checks: `npm run test:deals`, `npm run build`, and `node scripts/deals/verify-categories.mjs <base-url>`. The category verifier checks all ten pages and redirects, all starter prompts, metadata, sitemap replacement and API input controls without creating subscription records. The older integration script also exercises capture/removal and must be used only when that lifecycle test is intended.

## Historical October 6 foundation (superseded page layout)

### Deal discovery release — October 6, 2026

## Content ownership and inventory

The existing product comparisons, accessory guides and refurbished Breville guide retain their URLs and primary intents. The ten `/deals/*` pages answer the narrower transaction question after product selection: how to compare an offer, condition and bundle. None replaces an existing article. All ten have self canonicals, Article/Breadcrumb markup, no invented Product/Offer/review ratings, official sources, contextual links, a Deal Agent CTA and explicit price availability. `/deals` links to all ten; matching existing guides and category hubs link back through RelatedDealGuides. The main child sitemap includes all ten and the three new hubs/tools.

## Query-to-content loop

The guided Deal Agent matches editorial products and extracts a stated budget and question intent. It does not call an LLM or claim live price comparison. Optional helpfulness feedback stores only product topic, question intent, broad budget band and rating. No raw question, pasted URL or email is stored in feedback. Use `npm run deals:insights` with the operator secret in the environment to obtain the protected aggregate queue. Prioritize repeated unhelpful responses; inspect current routes before assigning a new page. Research the exact unanswered question, update the existing page when possible, run release checks and compare subsequent feedback. Never auto-publish query text. Unknown requests are counted as unmatched; they cannot be used to infer a specific new product without separate research.

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
