# BestPickZone automatic review pilot

Status: **DRAFT / INACTIVE for semantic review and publishing**.
Target repository: simputech/bestpickzone. Production project: bestpickzone-fixed.
This pilot follows the existing site editorial standards; it does not alter the
current deploy workflow or any external enforcement settings.

## What runs now

On a PR, editorial-pilot.yml checks the exact head SHA: dependency installation,
validator and existing unit tests, lint, typecheck, build, metadata and sitemap
indexability, then diagnostic HTML quality/scope/corpus preparation. Its check is
named "BestPickZone pilot quality (not publishing approval)". It uses read-only
repository permission, pinned actions, no cached PR dependencies, no stored git
credential, no model/API/deployment secret and no deploy command. Head code executes
only in that unprivileged, secret-free build job.

The schema and validator require complete per-route semantic results bound to the
head/base/policy commits, rendered corpus hash and unique invocation ID. Invalid,
missing, stale or contradictory evidence cannot pass. The publishingDecision
library defaults off; gate.mjs **always exits 1**, even for a valid review, until a
separately reviewed activation change. A green quality check is never semantic or
publishing approval. The example semantic job is deliberately outside the workflows
directory and contains unresolved activation values.

No site article is changed by this PR. No branch protection, credentials, permissions,
paid API usage or Vercel controls are configured. Existing automatic Vercel integration
may still build branch previews on pushes; this pilot does not control that behavior.

## Commands

From a clean checkout of the candidate commit:

    npm ci --ignore-scripts
    node --test scripts/editorial/*.test.mjs scripts/*.test.mjs scripts/test-*.cjs
    npm run lint
    npm run typecheck
    npm run build
    node scripts/editorial/prepare.mjs BASE_SHA HEAD_SHA POLICY_SHA /tmp/editorial-pack
    node scripts/editorial/gate.mjs /tmp/editorial-pack/context.json /tmp/review.json

Use full 40-character commit IDs. build includes validate:metadata and
validate:indexability. Keep reports outside the tracked tree to avoid changing the
commit being reviewed. Gate exit 1 is expected while inactive; its diagnostic
validationErrors distinguish a malformed review from the inactive release state.

## Scope and deterministic limits

Standalone app route edits map to the matching rendered route. Shared components,
dynamic routes, lib/data, assets, routing, package/config or unknown changes
conservatively fan out to the full rendered inventory. A deleted/unrendered route
or dynamic fallback requires a maintainer to resolve coverage; it cannot disappear
from review silently. Policy/workflow changes require maintainer review and block
the future gate. New architectures must add explicit scope fixtures first.

Quality checks catch broken internal destinations, bad Amazon tags/attributes,
placeholder text, missing/duplicate H1s, and flag filler/testing claims and repeated
40-word text blocks against the rendered corpus. They are heuristics, not originality
or truth detectors. Existing metadata/indexability scripts inspect rendered pages
and sitemap HTTP responses. External source/affiliate destination truth, visible
word counts, mobile disclosure placement and visual claims need the independent
editorial/browser review described in checklist.md. HTML counts are not the
1,000-word acceptance measurement.

The first pilot is intentionally conservative: approval requires articles under
review to meet 1,000 editorial words even if older. A well-formed report may identify
a shorter article for revision; report validity does not grant publishing approval.
validateReview checks the report contract; publishingDecision enforces the approval
requirements and blocks correction when any dimension is blocked.
Any blocked review dimension stops automatic correction, even when the aggregate
verdict says revise. Legacy FAQs are judged under the playbook's
new/material-rebuild distinction, not deleted automatically. Large shared changes
require a complete review batch; do not sample routes and declare a site-wide pass.
Activation must cap per-run route/input size and cost, block excess scope, or aggregate
all bounded batches for the same immutable context before one release decision.

## Correction and fresh recheck

scripts/editorial/core.mjs exports correctionCycle and publishingDecision. The
cycle is executable and adapter-tested, with a maximum of two corrections
(three independent reviews). Adapters are intentionally not connected to paid
services or repository write authority in this draft.

1. A trusted controller resolves current PR base/head from GitHub, generates a new
   reviewId, pins approved policy, and obtains a clean candidate build/research pack.
   It checks producer workflow identity, run ID, artifact digest, exact commit and
   complete route inventory. PR JSON alone is never trustworthy provenance.
2. A fresh read-only reviewer judges the immutable corpus and current primary-source
   snapshots. Structural validation runs on a clean trusted runner, not inside the
   model job. Missing/invalid evidence or unavailable tools block.
3. A valid revise result may produce an editorial patch. A separate correction
   proposal adapter returns independently inspected changed path/mode records;
   validateCorrection and the adapter validate before any writer is invoked that every changed path is an already-scoped content file
   (app article page/source, content article, or existing lib article data).
   Reject workflow/policy/scripts/config/dependencies/new paths, symlinks, executable
   changes, binaries, credentials and scope expansion. Prefer a patch for human
   inspection in the initial pilot; no write-capable adapter is installed here.
4. If later approved to commit, a separate commit adapter/writer uses a minimal, short-lived
   GitHub App token and expected-head lease, records the new commit and round count,
   and explicitly requests the next review via a trusted workflow_dispatch.
   Persist the attempt count in trusted run/controller state, not editable PR files.
   Do not provision a token or broaden bot allowances in this draft.
5. Prepare/build/check the new SHA again, create a new reviewId, invoke a fresh
   reviewer, and inspect every affected route. Never reuse the previous report.
   Stop on moved head, repeated invocation ID, no-op correction, invalid output,
   policy change, unresolved blocker, exhaustion or budget/time limits.
6. A clean publisher verifies latest head again immediately before writing one
   dedicated check/status to that exact SHA. Any further edit invalidates it.
   Rebase, squash, merge and changed base create a new release commit: review that
   commit again. A PR-head pass is not transferable to a production merge SHA.

GitHub token behavior matters: pushes using GITHUB_TOKEN do not reliably create a
fresh run; current docs describe approval-required PR opened/synchronize/reopened
runs, and workflow_dispatch/repository_dispatch exceptions. The explicit dispatch
and fresh SHA check above are required regardless of automatic event behavior.
Never solve this by silently adding a PAT, enabling all bots, or using an unsafe
pull_request_target checkout.

## Trust and publishing boundary

The active PR workflow is diagnostic and can be edited in a PR, so **do not make
its success the trusted publishing signal**. Activation needs a separate trusted
workflow/controller on an approved protected ref (or a dedicated GitHub App) and
an immutable policy checkout. It must not execute PR policies, AGENTS/skills,
Codex config, package scripts or build code with secrets. Build untrusted candidates
on a disposable isolated runner without secrets; treat its artifacts as data and
verify/reconstruct scope and corpus in the trusted controller. A malicious build
can forge output; do not attest to such output without independent verification.

Separate roles: builder contents:read/no secrets; researcher constrained external
reads/no repo write; reviewer contents:read + narrowly supplied model secret only;
validator no model/deploy secret; publisher checks:write or statuses:write only on
an approved producer/commit; optional writer contents:write only in a distinct
approved environment. No PR body/title is interpolated into shell. Bound input sizes,
artifact IDs, hashes and output JSON; never eval model output. The candidate
codex-action fragment pins a reviewed upstream commit, uses drop-sudo and a read-only
permission profile, and runs last on a disposable runner. Pin exact CLI/model and
review its transitive installation before use.

## Approval-dependent activation checklist

- [ ] Approve paid provider/model, exact CLI version, API project, per-run and monthly
      budget, max input/routes, timeouts, retention and alerting. Use provider hard
      spend controls where supported; a workflow timeout alone is not a dollar cap.
- [ ] Approve and implement the isolated research/reviewer adapters and optional
      writer; evaluate adversarial content, missing sources, budget exhaustion and
      malformed output against the fixtures. No secret belongs in PR-controlled jobs.
- [ ] Approve trusted policy/controller ref and credentials/permissions, require review
      for policy changes, and configure the protected editorial environment.
- [ ] Wire the activation workflow to the tested correctionCycle/decision contract.
      Verify actual provenance and exact head/base/policy/corpus and derive changed paths/modes from GitHub/Git instead of trusting
      a boolean supplied by content. Test bot correction explicit dispatch.
- [ ] Approve GitHub protection/ruleset changes for main: required trusted editorial
      and deterministic checks, expected check producer/app, current-head requirement,
      protected workflow/policy review and limited bypass. Main was unprotected in
      the prior read-only investigation; confirm again when activating.
- [ ] Approve production gate changes for existing .github/workflows/deploy.yml,
      which currently builds/deploys on main without editorial review. Require exact
      production commit review before deploy/promotion; avoid skipped-job success
      and ensure error/cancel/timeout/missing reports leave the release blocked.
- [ ] In Vercel **bestpickzone-fixed**, verify Git repository linkage, production
      branch/environment, automatic aliasing and required **GitHub Deployment Checks**.
      Require the unique trusted editorial-release and deterministic-release check
      names on the actual deployment commit. Do not select this diagnostic pilot check.
      Configure only after approval; record settings evidence.
- [ ] Restrict/review Force Promote, direct CLI deployments, hooks, API tokens,
      dashboard promotion and project-setting permissions. GitHub protection alone
      cannot control Vercel's independent deployment path.
- [ ] Test a deliberately failing/stale/cancelled/missing check and a bot correction
      on a nonproduction rehearsal, then an approved held production deployment.
      Verify custom domains stay on the previous release until every required check
      passes. For repository_dispatch, publish an explicitly SHA-bound status because
      the workflow's own check may attach to a different commit.
- [ ] Record who can bypass, how to roll back, and an emergency human approval path.
      Do not claim enforcement until these settings and failure-path tests are observed.

No universal factual correctness or originality guarantee is possible. The system
reduces avoidable errors and preserves auditable evidence; human editorial judgment
and safe release controls remain necessary.

## Official references (checked October 6, 2026)

- [OpenAI codex-action inputs and security](https://github.com/openai/codex-action)
- [GitHub workflow triggering and bot-token rules](https://docs.github.com/actions/using-workflows/triggering-a-workflow)
- [GitHub secure use guidance](https://docs.github.com/en/actions/reference/security/secure-use)
- [Vercel Deployment Checks, setup and bypass limitations](https://vercel.com/docs/deployment-checks)
