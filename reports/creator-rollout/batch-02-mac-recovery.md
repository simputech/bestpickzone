# Batch 02 Mac recovery and revalidation

The archive `BestPickZone-batch-02-recovery-2026-10-17.zip` was downloaded through the current Library resolved-reference helper to this Mac on October 17, 2026 UTC. Its 342,205 readable bytes have SHA-256 `a7f985ff7089974d1f9b7a5258e830347a102ec7e27c084add2ee3767d0d0fa1`. All 38 after-state snapshots, affected baseline files and the patch hash matched the manifest. `git apply --check` and application passed. All restored files then matched their after-state hashes. The archive source was restored exactly. The subsequent local browser review added only a keyboard-accessibility correction to the LED comparison table, described below.

The receiving checkout is an isolated worktree from a workspace-local clone. Current remote main and the existing batch-two branch both resolved to `9e0f09593218febf1f9d9ba51c6a0be5115801fe`; this has zero source differences from the archive baseline `bcb535dde8485697dd34eb21afac5b19a1748ae6`. No dirty existing checkout was changed. Open PRs #6 and #9 remain untouched. Production remains `dpl_7yx4CMzxRa7k8AXM9TZ5p975NJhi` on `9e0f095`.

## Repeated checks

- 174 static tests passed: 161 article/API/metadata/tracking/multilingual/hub tests and 13 deals tests.
- Typecheck and lint passed. Lint reports existing image/unescaped-entity warnings across the repository; this is not a claim that the entire repository has only two warnings.
- Production build passed. Metadata validation checked 296 rendered indexable pages; runtime indexability checked 335 of 335 sitemap URLs, with zero errors and warnings.
- The first build's indexability stage was blocked by the local sandbox denying a loopback listener. An approved rerun with loopback access passed. No production secrets were retrieved.
- Local production HTTP QA covers all 20 routes: one H1 each, correct canonical/metadata, 38 honest fallback cards and the intended single commerce surface (integrated two-card machine comparison excluded from the supplemental shelf count).
- Checked 81 internal paths and two self-hosted image paths. All returned 200. This is HTTP asset verification, not browser decode/layout verification.
- Compared all 335 local sitemap URLs with public production sitemaps: exactly eleven modification-date differences, matching the substantive-refresh list. No URL-count change.
- Re-read the independent review and reviewed shared-renderer/metadata/sitemap/identity integration changes. The unchanged source retains whole-product, US-voltage, exact-model and official-store-first guards. The 174 tests include the accessory/variant regressions and 20-route equality check.

Current primary-source spot checks reconfirmed the Apple M4/M5 Air two-external-display limits and supported-hub qualification, Plugable's macOS protected-content limitation across screens, Gaggia E24 lead-free brass boiler/58mm/9-bar OPV/110V–120V specifications, and Omnilux Contour's 21+ and 3–5 weekly-use guidance. Sources: https://support.apple.com/en-us/122212; https://plugable.com/products/ud-6950pdh; https://www.gaggia-na.com/products/gaggia-classic-pro; https://omniluxled.com/pages/help-center-products. These spot checks supplement the complete archived research; they do not establish live catalog coverage.

## Local browser QA and correction

Shared Chrome coordination was released for our dedicated tabs. All twenty routes were checked in a local production build at 1440×1000 and 390×844 using tab-scoped emulation, which was cleared afterward. Forty observations showed one H1 per page, no page-level horizontal overflow, 38 honest fallback cards per viewport and zero broken images. Available editorial images decoded successfully. This is not live API image verification. Disclosure appears before the article. The body and single intended commerce surface remain present.

Screenshots were visually inspected for the AeroPress desktop header/disclosure/table, the LED mobile header/table and the Bambino/Gaggia mobile compatibility table. Local mobile QA found that the LED table lacked an explicit keyboard-scroll region. The fix adds a focusable region, visible focus outline and scrolling hint around only the table. ArrowRight moved it 40px at a 390px viewport while the heading stayed at x=20 and page width stayed 390px. No product claims or dates changed. See `batch-02-mac-browser-qa.json` for the route/viewport observations.

All 174 tests passed after the initial focusability correction. After the final refinement separating the table from its heading/instructions, 30 focused integration/batch tests and the full production build passed again (335 sitemap URLs, zero indexability errors/warnings). The substantive-date scope remains eleven URLs.

## Prior access gate (resolved below)

Deployed protected-preview desktop/mobile fallback QA and live production API identity/image QA remain pending. The dedicated Chrome preview tab reaches Vercel login. The earlier private cloud-browser preview approval is not reused or transferred. The pending one-hour share-link approval named preview `dpl_Bepp8bPJhVwBvSFwQtBifkLNnwr7`; the accessibility-fix push will produce a replacement deployment, so that earlier target must not silently authorize the replacement.

Omnilux Contour Face and Elgato Air MK.2 remain official-store-first. `althcu-20` and existing `grandparentsgift-20` pilots are preserved. Batch two is not published; batch three has not begun. Do not infer production sign-off from local fallback tests.

Draft PR #15: https://github.com/simputech/bestpickzone/pull/15. Existing CLI identity `simputech` and the exact project/team were verified. The CLI preview read stopped at confirmation before requesting the route. Because it can create a project automation bypass token, it was not retried with automatic confirmation. No bypass token or access setting was created. Preview access is pending, not denied. No production secrets were retrieved or copied.

## Deployed-preview finding and packaging correction

Ordinary Continue with GitHub sign-in opened the protected preview using existing account access. No new grant, permission screen, share link or bypass token was needed. The former pending share-link request is obsolete. Nineteen routes passed deployed desktop/mobile fallback checks on READY deployment `dpl_5wn8FTqzWmPavoHCa93DdWjksELd` (`1f27aa5`).

The LED article instead returned 500. Preview function logs identify `ENOENT` for `/var/task/app/beauty/dr-dennis-gross-vs-omnilux-contour/article-source.html`. Its generated local `page.js.nft.json` also omitted that runtime file. A route-specific Next.js file-tracing include now packages the HTML. A new build gate reads the actual generated trace and checks the asset exists, preventing a local checkout from hiding the same deployment failure. It failed against the previous build as expected. Publication waits for the corrected build and deployed recheck.

The corrected full build passed metadata, all 335 indexable sitemap URLs and the generated runtime-asset trace gate. All 30 focused batch/integration tests passed again. The narrow include uses the installed Next.js 14.2.3 experimental configuration field; no framework/dependency upgrade or secret change was made.
