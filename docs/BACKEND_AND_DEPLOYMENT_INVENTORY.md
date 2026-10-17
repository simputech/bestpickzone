# BestPickZone backend and deployment inventory

Last evidence check: **October 17, 2026 UTC**. This is the project-owned operations inventory for [`simputech/bestpickzone`](https://github.com/simputech/bestpickzone). Keep it current alongside the [structured register](operations/service-inventory.json), [Deal Discovery operations history](DEAL_DISCOVERY_OPERATIONS.md) and [rollout checkpoint](../reports/creator-rollout/checkpoint.json). Historical documents remain evidence of their own dates, not current configuration.

## State meanings

**Planned** means proposed or represented by inactive integration code. **Created** requires a provider resource receipt. **Configured** means relevant settings/source exist. **Tested** requires a named test and result. **Live** requires verification of the deployed behavior and environment. These states are not interchangeable: an active function or READY build does not prove the website calls it, email was delivered or a database restore works.

## Services and verified ownership

| Service | Exact identity and account evidence | Current state and responsibility |
| --- | --- | --- |
| GitHub | Repository `simputech/bestpickzone`; returned repository owner login `simputech` | Live source repository. Production branch `main`; current article work `content/creator-api-batch-03`, draft [PR16](https://github.com/simputech/bestpickzone/pull/16). Individual/legal ownership is not inferred from the login. |
| Vercel | Project `bestpickzone-fixed`, ID `prj_nmIr0ohVP4y08vpuYRFDi6Lgnbao`; team `team_wFkeAj93TVooMQ1IzpbkABSJ`, name **SimpuTech's projects**, slug `simputechs-projects` | Live Next.js hosting. Project accountId matches the team. Node setting `24.x`. Deployment creator `simputech` is an audit actor, not proof of sole ownership. [Project dashboard](https://vercel.com/simputechs-projects/bestpickzone-fixed). |
| Supabase | Project **simputech**, ref `ewqmxrhsajdfgwnbqunw`; organization **simputech**, ID `iuhwwftdvuypmbhfpllr`; region `us-east-1` | Existing shared portfolio database, ACTIVE_HEALTHY. BPZ tables and active Edge Function verified below. The masked Vercel URL prevents direct read-back of the website-to-project binding. [Project dashboard](https://supabase.com/dashboard/project/ewqmxrhsajdfgwnbqunw). Individual owners/billing account not inspected. |
| Amazon Creators API | Production credentials referenced by name below; actual account/application ID not read. Tags `althcu-20` and retained pilot `grandparentsgift-20` | Live article product/book identity and image service verified for batches 1–2. API endpoint `https://creatorsapi.amazon`; credential version selects the configured regional OAuth endpoint. No current-price feed or email-use permission inferred. |
| Resend | BestPickZone account/project/domain ID and owner unknown | Integration code exists, required production variables absent. **Not configured for BestPickZone delivery; no email sent in this verification.** |
| Google Analytics | `NEXT_PUBLIC_GA_MEASUREMENT_ID` configured by environment metadata; account/property ID and owner unverified | Consent-gated integration in source. Current event delivery not re-tested here. Initial public HTML did not expose a measurement ID; this is not evidence that analytics is missing because loading is client-side and consent-gated. |
| IndexNow | Site `bestpickzone.com`; source `scripts/submit-indexnow.mjs` | Submission implementation and public verification-file mechanism exist. Do not equate accepted submission, sitemap inclusion or indexability with confirmed search indexing. No submission made for this documentation check. |
| Domain/DNS | Vercel associates `bestpickzone.com`, `www.bestpickzone.com` and `bestpickzone-fixed.vercel.app` with the project | HTTPS site responds. Registrar, authoritative DNS provider, registrant and recovery contact remain unknown; do not infer ownership from hosting access. |

No new provider, account, database or migration was created to fill this inventory. Other portfolio projects are outside this repository's ownership scope.

## Development, preview and production

| Environment | Hosting/source | Backend and API access | Verification policy |
| --- | --- | --- | --- |
| Production | Vercel project above; `main`; custom domain `https://bestpickzone.com` | BPZ backend and Amazon credentials present as production-scoped variables. Exact sensitive values not inspected. Email configuration absent. | Verify exact deployment SHA, public route behavior and live API product identities/images. |
| Preview | Branch/PR deployments in the same Vercel project | No preview backend or Amazon variables returned by the current environment listing. | Test honest unavailable/search fallbacks. Vercel protection is `all_except_custom_domains`; use existing authorized sign-in or scoped approval. Former cloud-browser share access is not transferable. |
| Development | Local isolated checkout and Next.js | No development backend or Amazon variables returned; only a development analytics variable was listed. No separate development database identified or provisioned. | Use local fallback testing. Do not pull/decrypt/copy production credentials into preview or local test environments. |

Production settings do not establish working preview services. The environment listing was requested with `decrypt=false`; no secret values, hashes, tokens, database credentials or subscriber records were copied into this inventory.

## Database, function and migration receipts

The existing BPZ source is [`docs/deal-services-schema.sql`](deal-services-schema.sql) and [`supabase/functions/bpz-deal-services/index.ts`](../supabase/functions/bpz-deal-services/index.ts). There is no versioned `supabase/migrations/` file in this checkout for the initial BPZ schema. Do not invent a historical filename or reapply the schema just to create one.

| Receipt | Verified fact | Limit |
| --- | --- | --- |
| Migration `20261006234356`, name `bpz_deal_services` | Returned by `list_migrations` for `ewqmxrhsajdfgwnbqunw` on October 17 | Execution-history receipt, not a reconstructed original transaction log. Exact applied SQL versus current source has not been reconciled. |
| Schema source SHA-256 | `33eb0ef94cce4369dc939dfca42bc3edac65e48da03071e8082e3b8f7cabf1a4` | Fingerprint of the current project source only. |
| Edge Function `bpz-deal-services` | ID `d49af6e3-4424-4006-a84d-495685e43053`, version `2`, `ACTIVE`, `verify_jwt=false` | Function presence/deployment metadata verified. Custom service-secret enforcement is required; public JWT verification is not its authorization mechanism. |
| Deployed function bundle SHA-256 | `63a91701aff43f68a021b8094249b1d613085eb2128dcb9b273e89d882b97cf9` | Provider bundle hash; not comparable directly with a single source-file hash. |
| Local function source SHA-256 | `c9e16c2bc9783a2dd76ce431ca95101ef6d99a0d2af417de94795869d9104438` | Deployed source parity not re-established. |

Metadata-only queries verified all five public BPZ tables exist and have row-level security enabled. No direct table grants to `anon` or `authenticated` were returned:

- `bpz_service_config`: dedicated backend-secret hash configuration. Do not expose or export its contents.
- `bpz_deal_subscriptions`: email, selected topic, optional target, consent, pending/active state and hashed tokens.
- `bpz_deal_feedback`: topic, intent, broad budget band and helpfulness, without raw shopping questions.
- `bpz_deal_rate`: short-lived hashed rate-limit keys; raw IPs are not intended to persist.
- `bpz_deal_deliveries`: unique delivery reservations/status linked to subscriptions.

Source defines `bpz_take_rate(text, integer)` with `security invoker` and restricted execution. Function permission parity and full schema constraints were not separately re-audited in this documentation pass. The source's service-role grants do not authorize the browser to access these tables.

The project also reports earlier portfolio migrations `20260929230759 secure_subscribers_row_level_security` and `20260929231437 tighten_plan_and_purchase_client_permissions`. They are historical shared-project metadata, **not BestPickZone-owned migrations**. No related rows or tables were queried or altered.

**Binding uncertainty:** `BPZ_BACKEND_URL` is Sensitive and masked. Source expects the `bpz-deal-services` contract; the matching function and tables exist in the project above; production's health endpoint reports storage available. These facts support the documented architecture but do not prove the exact configured URL. Record an authorized nonsecret configuration receipt when available; do not decrypt production secrets merely to fill the gap.

## Authentication, email and data responsibility

The public BestPickZone site has no account-login flow in the inspected routes. The Next.js server authenticates to the narrow Edge Function with `x-bpz-secret`; the function compares a hash from its config table and uses `SUPABASE_SERVICE_ROLE_KEY` only in its own runtime. Supabase Auth/SMTP settings for the wider shared project were not inspected and are not assumed to belong to BestPickZone.

Subscribers use random hashed confirmation/manage tokens and a signed removal path, not a browser Supabase session. Preference changes require POST. Keep private removal links out of logs, screenshots and reports. Watchlists are browser-local; they are not a second backend database. Production health on October 17 returned HTTP 200 with `capture: true`, `email: false`, `prices: false`. This read-only test created no subscriptions and sent no messages.

Email requires `RESEND_API_KEY`, `BPZ_EMAIL_FROM` for a verified sending domain, and `BPZ_POSTAL_ADDRESS`. None was returned by the production variable listing. `BPZ_ALERT_DISPATCH_ENABLED` is also absent. Verify account/domain ownership, DNS, confirmation expiry, delivery, unsubscribe and consent before activation; existing `pending_setup` requests must not silently become active. Do not borrow another portfolio project's sender or key.

`lib/deals/verified-offers.ts` is empty. Price alerts are inactive. Amazon API content and Special Links are excluded from email. The current dispatch code reserves deliveries before sending and is limited to 100 active candidates; inspect an interrupted reservation before retrying, and implement pagination before scaling.

Vercel source schedules `/api/cron/deal-alerts` at `0 14 * * *` (14:00 UTC daily). The handler authenticates with `CRON_SECRET` or the legacy `BPZ_CRON_SECRET`, cleans expired records, then evaluates email/offer/dispatch gates. Schedule source is not proof of a successful execution; the last successful cleanup receipt remains unverified.

**Purchases and games:** no BestPickZone checkout, payment processor, game-state store or entitlement service was found in the inspected routes/dependencies. Affiliate purchases occur at the destination merchant. Shared portfolio purchase-related migrations do not make BestPickZone responsible for another application's purchase or game data. No Stripe account or game database is claimed here.

## Credential register — names and locations only

| Names | Storage and target | Observed configuration |
| --- | --- | --- |
| `BPZ_BACKEND_URL`, `BPZ_BACKEND_SECRET` | Vercel project environment variables, production | Sensitive, present; values not read. |
| `CRON_SECRET`, `BPZ_CRON_SECRET` | Vercel project environment variables, production | Sensitive, present; legacy fallback remains in source. |
| `AMAZON_CREATORS_API_CLIENT_ID`, `AMAZON_CREATORS_API_CLIENT_SECRET` | Vercel project environment variables, production | Sensitive, present. No account ID inferred from credential existence. |
| `AMAZON_CREATORS_API_CREDENTIAL_VERSION`, `AMAZON_MARKETPLACE`, `AMAZON_ASSOCIATE_TAG` | Vercel project environment variables, production | Encrypted/config entries present; no values decrypted. Verified rendered links preserve the required tags. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Vercel production Sensitive entry and development encrypted entry | Present. A `NEXT_PUBLIC_` prefix means eventual client exposure; do not store an actual secret under it. |
| `RESEND_API_KEY`, `BPZ_EMAIL_FROM`, `BPZ_POSTAL_ADDRESS`, `BPZ_ALERT_DISPATCH_ENABLED` | Intended Vercel production settings | Absent from returned metadata; outbound delivery inactive. |
| `NEXT_PUBLIC_AMAZON_TRACKING_ID`, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional Vercel configuration referenced by source | Not returned. Amazon tag fallback exists in source; verification ownership unknown. |
| `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | Supabase Edge Function runtime | Referenced by source; values not inspected. Service-role credential must never be copied to the website/browser. |
| `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` | GitHub Actions secrets referenced by `.github/workflows/deploy.yml` | Secret existence/current workflow success not checked. Workflow file is not a provisioning receipt. |
| `NODE_ENV`, `VERCEL_ENV` | Framework/hosting runtime metadata | Used to gate production analytics. |

`.env.local.example` is a template, not proof of installed services. Its unused Best Buy/site-URL placeholders do not establish a Best Buy account. Local `.env.local` is the intended ignored location for separately approved development configuration; this task did not read or populate it.

## Deployment and verification ledger

| Release | Source/publication and evidence | State |
| --- | --- | --- |
| Batch 1 | [Final production report](../reports/creator-rollout/batch-01-production-final.json); deployment `dpl_7yx4CMzxRa7k8AXM9TZ5p975NJhi` | Published and verified by saved rollout evidence. |
| Batch 2 | [PR15](https://github.com/simputech/bestpickzone/pull/15); source `1ed2c1ecb84402a15513e9b70ff9303fc65a4d13`; production `2da905de53a0ab813cf46bccd96d7c0bdaebbdfd`; deployment `dpl_GttZyTor6oXtfosafSm1FFhaG8wZ` | Published/verified: 174 tests, build, desktop/mobile QA; 31 live cards with 31 loaded images, seven honest fallbacks. [Evidence](../reports/creator-rollout/batch-02-production-final.json). |
| Pregnancy-claim correction | [PR17](https://github.com/simputech/bestpickzone/pull/17); source `6f4dd151d2272cb9119825d0c076a53d26925f52`; production `b6f43f86eab87c85d2ac047a822dba3271e53ab0`; deployment `dpl_FPxjnquLGdoovSCaLzHxUVyDtmmg` | Current production, freshly returned READY by Vercel. Desktop/mobile and live correction [QA receipt](../reports/creator-rollout/pregnancy-claim-correction-qa.json). No sitemap-date bump. |
| Batch 3 | [Draft PR16](https://github.com/simputech/bestpickzone/pull/16), branch `content/creator-api-batch-03`; [checkpoint](../reports/creator-rollout/checkpoint.json) | Research/drafts, not published. Do not treat the earlier build or synthetic identity tests as final QA of subsequent edits. |

The production site and `/api/deal-alerts` responded HTTP 200 during this inventory check. This does not retest email, subscription capture/removal or all article routes. A separate task owns the Deal Agent bug fix; inspect current `main` before release and preserve its routes, components and tests.

## Release gate and recovery

`npm run validate:operations` checks that this inventory is linked from the existing project brief and reports README, runtime environment-variable names are catalogued, referenced sources/receipts exist and tracked schema/function fingerprints remain current. It runs as part of `npm run build`. It is a documentation-drift check, not provider or secret validation.

Before every release, reconcile the register with current provider metadata, environment targets, migration receipts and the exact remote commit. Mark unknowns explicitly. Run appropriate tests, full build, independent editorial review/re-review, protected-preview desktop/mobile fallback QA, then authorized production live identity/image checks. Only substantive reviewed editorial changes may advance sitemap lastmod. Update the deployment ledger and durable rollout trackers after verifying publication.

For an article regression, preserve the current branch and use a reviewed revert or Vercel rollback to an explicitly verified compatible deployment. The pregnancy correction must survive: rolling back wholesale to the batch-two deployment would restore the removed claim. Prefer a forward fix or a revert limited to the regressing change. Recheck custom-domain commit, images and API cards after recovery; READY alone is insufficient.

For the shared database, **do not run a destructive down migration or reset the portfolio project**. Preserve BPZ data with an approved backup process, inspect dependencies and apply a reviewed forward correction. Backup retention, PITR and restore testing are unknown. Never label the database recoverable solely because schema source is in Git.

Backend-secret rotation requires coordinating the hashed `bpz_service_config` record and Vercel secret, deploying the change, testing unauthorized rejection and an authorized health check. No rotation was performed here. Email recovery must inspect reserved deliveries and provider idempotency before retrying, to avoid duplicate sends.

Batch-two archive recovery is documented in [the Mac recovery report](../reports/creator-rollout/batch-02-mac-recovery.md). Library archive `libfile_93579fc364ac81919c3f9b112ab34e15`, SHA-256 `a7f985ff7089974d1f9b7a5258e830347a102ec7e27c084add2ee3767d0d0fa1`, was locally materialized and verified. Reuse the supported Library workflow, verify readable local bytes/hash, inspect current remote state and run `git apply --check` in an isolated worktree before restoration.

## Outstanding approvals and unknowns

- Batch-three independent review/re-review is pending; the separate-review-agent authorization question remains unanswered. No publication gate is waived.
- Current authorized preview sign-in may be used; any new scoped access request is pending only if required by that particular deployment. Old browser-private approval is not reusable.
- Confirm the nonsecret production backend target, service owners/billing recovery contacts, registrar/DNS account, migration SQL provenance, deployed function source parity and backup/restore evidence.
- Email sender/account/DNS, postal address, delivery and a licensed offer source remain inactive/unverified. No activation, migration or purchase is authorized merely by this inventory.
- GA property ownership/event delivery, GitHub Actions secret configuration and latest successful cron cleanup need separate verification.

No action in this documentation pass was denied or left with an uncertain execution outcome. The items above are evidence gaps or pending release gates, not claims of completed work.
