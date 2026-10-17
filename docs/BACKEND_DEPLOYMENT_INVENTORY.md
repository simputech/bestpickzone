# BestPickZone backend and deployment inventory

Last verified: 2026-10-17 UTC.

**Release-status reconciliation:** PR18 has since merged as `c96a013c67d7e93f1ca16e32ae08ce67276612be`. Vercel returned READY production deployment `dpl_GYCXGWyJTyHzv8jnMXHcYwAGipdt`. The pre-release audit below retains its original test scope; its draft/pending statements describe that earlier checkpoint, not current merge status. The article-rollout task integrated the release and did not repeat its live behavior checks in this documentation update.
 Maintained with [the operating notes](DEAL_DISCOVERY_OPERATIONS.md) and [release evidence](../reports/deal-agent-budget/verification.md). This records the PR18 release audit. The combined article-rollout state and machine-readable service register are maintained in [the project operations inventory](BACKEND_AND_DEPLOYMENT_INVENTORY.md). Keep both aligned when services or deployments change. Do not copy secret values or real user records into it.

## Lifecycle and ownership

`planned` means not provisioned; `created` means a provider resource exists; `configured` means configuration exists; `tested` identifies the exact checks below; `live` requires a verified production binding. These states are not interchangeable. Provider membership and deployment creator do not establish an individual person's ownership.

| Service | Exact nonsecret identity and verified account | Responsibility | State and environment mapping |
| --- | --- | --- | --- |
| GitHub | Repository `simputech/bestpickzone`, repository ID `1181307137`; repository owner/login `simputech` | Source, review, version history | Existing/live. Production branch `main`; this isolated fix is `fix/deal-agent-budget`, draft [PR #18](https://github.com/simputech/bestpickzone/pull/18). Article rollout PR #16 is separate and untouched. |
| Vercel | Project `bestpickzone-fixed`, ID `prj_nmIr0ohVP4y08vpuYRFDi6Lgnbao`; account/team `team_wFkeAj93TVooMQ1IzpbkABSJ`, slug `simputechs-projects`; observed deployment creator `simputech` | Next.js hosting, API functions, environment storage and scheduled cleanup | Existing/live: `bestpickzone.com` and `www.bestpickzone.com` map to this project. Region observed `iad1`; configured Node `24.x`. Git integration creates branch previews. `.github/workflows/deploy.yml` also defines main-branch deployment; its current enabled/running state is not reverified here. |
| Supabase | Project/ref `ewqmxrhsajdfgwnbqunw`, name `simputech`, region `us-east-1`; organization `iuhwwftdvuypmbhfpllr`, name/slug `simputech`/`iuhwwftdvuypmbhfpllr` | Existing BPZ subscription requests, consented aggregate feedback, rate buckets, delivery reservations and secret hash | Existing/created/configured: project ACTIVE_HEALTHY; exact BPZ function and migration verified below. Shared portfolio project, not a new BestPickZone-only database. Vercel's sensitive `BPZ_BACKEND_URL` is configured in production, but its value/binding was not decrypted in this audit. No separate dev/preview database is established. No database was created or migrated by PR #18. Individual owner not established. |
| Amazon Creators API / Associates | API `https://creatorsapi.amazon/catalog/v1/`; US marketplace `www.amazon.com`; standard Associate tag `althcu-20` | Product identity/images for existing articles; proposed Deal Agent current-offer checks | Existing/configured in Vercel production only. No preview credentials. Existing local credentials successfully tested against real offers, without printing or copying values. Deal Agent offer behavior is tested locally and in credential-free preview; not yet live. Human account ownership not independently established. Existing article pilots retain `grandparentsgift-20`. |
| Resend | Provider integration present in source; no verified BestPickZone account/project ID or sender domain | Planned confirmation/notification email | Planned/inactive: production environment inventory has no `RESEND_API_KEY`, `BPZ_EMAIL_FROM`, or `BPZ_POSTAL_ADDRESS`. No email sent or verified. Do not reuse other projects' credentials. |
| Google Analytics | `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured in Vercel production and development; property/account ID not read in this audit | Optional, consent-gated visit and affiliate-click analytics | Configured; no configuration changed. Cookie rejection tested in preview. Analytics ingestion not retested by this change. |
| Browser memory / local storage | No external organization/project | Deal Agent turns are in memory only; separate existing watchlist is browser-local | Existing. New offer checks use in-process server cache and temporary rendered state, not persistent browser storage. No raw chat or offer history is written to the database. |

## Environments and deployment receipts

- Local fix worktree: `Documents/Codex/2026-10-16/task-2/deal-agent`, branch `fix/deal-agent-budget`. Separate local clone/worktree preserves the dirty primary checkout. Development QA uses `127.0.0.1:3117`; stop the server after testing.
- Preview initially verified: `dpl_BJ84XNYhPS5feZkT3tgM6hJb3KgG`, READY, commit `7c9a02035ab9469fae58cf98f03b4a4a5bd6e0df`, URL `https://bestpickzone-fixed-2zxcrghi2-simputechs-projects.vercel.app`. Later PR-head previews require their own verification. Preview has no production Amazon or backend secrets; unavailable is the expected offer result there.
- Current production verified before this fix: `dpl_FPxjnquLGdoovSCaLzHxUVyDtmmg`, READY, commit `b6f43f86eab87c85d2ac047a822dba3271e53ab0`, branch `main`; apex and www aliases present. This is PR #17's pregnancy-claim correction, not the Deal Agent fix.
- PR #18 is draft. Independent review, merge, final production commit/deployment receipt and custom-domain behavior verification remain required. Publishing authorization exists; no merge or production change has occurred in this task yet.

## Credentials and configuration locations — names only

| Location | Names | Scope / notes |
| --- | --- | --- |
| Vercel project environment, production | `AMAZON_CREATORS_API_CLIENT_ID`, `AMAZON_CREATORS_API_CLIENT_SECRET`, `AMAZON_CREATORS_API_CREDENTIAL_VERSION`, `AMAZON_MARKETPLACE`, `AMAZON_ASSOCIATE_TAG` | Presence and production-only targets verified through metadata. Secret values never exported. |
| Vercel project environment, production | `BPZ_BACKEND_URL`, `BPZ_BACKEND_SECRET`, `CRON_SECRET`, `BPZ_CRON_SECRET` | URL and secrets marked sensitive. Endpoint binding not decrypted here. |
| Supabase Edge runtime | `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | Source uses built-in runtime values. Service-role credential stays in the Edge runtime. No values read. |
| Existing local primary checkout `.env.local` | `AMAZON_CREATORS_CLIENT_ID`, `AMAZON_CREATORS_CLIENT_SECRET` | Legacy names used by existing local code. For this QA only, mapped in memory to current API variable names in a child server process. No credential file added to the fix worktree. |
| GitHub Actions repository secrets referenced by workflow | `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` | Names verified in workflow; current secret presence/values not inspected. |
| Planned email environment | `RESEND_API_KEY`, `BPZ_EMAIL_FROM`, `BPZ_POSTAL_ADDRESS`, `BPZ_ALERT_DISPATCH_ENABLED` | Not configured in the observed production inventory. Dispatch must remain disabled pending prerequisite checks and approval. |
| Vercel project environment | `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Production/development targets verified; actual measurement ID not read. |

## Backend schema, authentication and migration receipts

Provider reads on 2026-10-17 confirmed:

- Edge Function `bpz-deal-services`, function ID `d49af6e3-4424-4006-a84d-495685e43053`, ACTIVE, version `2`, `verify_jwt=false`, bundle SHA-256 `63a91701aff43f68a021b8094249b1d613085eb2128dcb9b273e89d882b97cf9`. Source: [`supabase/functions/bpz-deal-services/index.ts`](../supabase/functions/bpz-deal-services/index.ts).
- Function authentication is the dedicated `x-bpz-secret`, checked against `bpz_service_config.secret_hash`; the function then uses its own Supabase service credential. This is server-to-server authentication, not a public site login. No auth settings changed.
- Migration receipt: version `20261006234356`, name `bpz_deal_services`, found in Supabase migration history. Repository schema source: [`docs/deal-services-schema.sql`](deal-services-schema.sql). A timestamped local migration file is absent; do not invent one or rerun this SQL merely to complete documentation. Exact historical submitted SQL equality is not reverified.
- Earlier shared-project migration receipts: `20260929230759` / `secure_subscribers_row_level_security`; `20260929231437` / `tighten_plan_and_purchase_client_permissions`. These are historical shared-project context, not changes made by this release. No corresponding local migration files or full execution transcripts were located in this checkout.
- Read-only catalog query confirmed RLS enabled on all five BPZ tables: `bpz_service_config`, `bpz_deal_subscriptions`, `bpz_deal_feedback`, `bpz_deal_rate`, `bpz_deal_deliveries`. Source revokes `anon`/`authenticated` access; current grants are not re-audited here. No user rows, emails, hashes or tokens were read.
- Current Deal Agent request/response logic does not require a database write. Optional feedback is a separate explicit action; only topic, intent, budget band and rating are sent. Email capture/dispatch was not exercised by this release.

## Purchase, game and email responsibilities

BestPickZone directs readers to affiliate retailers. This Deal Agent change does not take payments, fulfill purchases, create buyer accounts or store game state. Existing shared-project purchase-related migrations do not establish that BestPickZone owns or uses those records; their application ownership remains outside this audit. No other site's purchase/game service has been moved or claimed.

`vercel.json` schedules `/api/cron/deal-alerts` at `0 14 * * *` UTC. Email and licensed alert-feed prerequisites remain unmet; source requires explicit dispatch enablement. No Amazon offers are added to the alert feed, emailed, or retained as price history. Subscriber confirmation/sender-domain and unsubscribe delivery tests remain outstanding before any email activation.

## Verification and release gate

See [verification evidence](../reports/deal-agent-budget/verification.md). The release gate must include:

1. Review the PR diff against current main; preserve article rollout and PR #17 corrections.
2. Run focused tests, TypeScript, lint, full build, metadata/indexability/runtime-asset validation, category verifier, and desktop/mobile flow QA.
3. Run `npm run validate:inventory` (also enforced by `npm run build`) to verify inventory links and required nonsecret identifiers are maintained. This structural check does not independently validate provider ownership or turn an unknown into a verified fact.
4. Obtain independent review; then verify exact final preview head, mark ready, and merge with the expected head SHA.
5. Record production deployment ID + exact commit, READY state and aliases; repeat the $20 example, verified higher-budget case, reset and responsive checks on `bestpickzone.com`. Update this inventory and evidence with the production receipt.

## Rollback and recovery

- For a Deal Agent regression, revert the scoped fix PR on current main and deploy; do not reset main to an old commit that would discard unrelated article updates. Emergency Vercel rollback must choose a known-good deployment and explicitly account for later article releases.
- Preserve the prior production receipt above and final successful receipt. Verify apex/www mapping and behavior after any rollback. No database rollback is required for this fix.
- On Creator API failure, withhold budget matches and show the existing actionable unavailable response. Do not substitute editorial price bands or scrape retailer pages. Cached offers expire after five minutes; negative results after one minute; no stale-serving path.
- If backend identity is uncertain, verify Vercel's configured URL against the exact Supabase project/function before any migration, restore or deletion. Do not infer identity from a similar project name. Resolve shared ownership before touching other tables.
- Coordinate any backend-secret rotation between the Vercel secret and the Supabase hash, with a no-secret unauthorized-access test afterward. No rotation was performed here.

## Outstanding approvals and unknowns

- Parent-coordinated independent read-only review of the final revised PR head is the agreed release gate. No additional local review agent is required.
- Final deployment/publication remains pending review, not a lack of site publishing authorization.
- Vercel sensitive backend URL binding, individual Supabase/Amazon account ownership, database backup/PITR configuration, exact historical migration SQL, current database grants, Resend sender/account, and analytics property ownership remain explicitly unverified. No service was migrated to fill these gaps.
