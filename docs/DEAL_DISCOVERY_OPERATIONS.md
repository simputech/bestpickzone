# Deal discovery release — October 6, 2026

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
