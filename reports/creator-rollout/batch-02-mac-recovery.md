# Batch 02 Mac recovery and revalidation

The archive `BestPickZone-batch-02-recovery-2026-10-17.zip` was downloaded through the current Library resolved-reference helper to this Mac on October 17, 2026 UTC. Its 342,205 readable bytes have SHA-256 `a7f985ff7089974d1f9b7a5258e830347a102ec7e27c084add2ee3767d0d0fa1`. All 38 after-state snapshots, affected baseline files and the patch hash matched the manifest. `git apply --check` and application passed. All restored files then matched their after-state hashes. Article and integration source remain identical to the reviewed archive.

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

## Remaining gates

Protected-preview desktop/mobile browser layout, disclosure placement, keyboard table overflow, complete article retention, image decode and live production API identity/image QA remain pending. The supported browser inventory exposes only shared Chrome. The isolated in-app browser is unavailable. Chrome is reserved for the concurrent Stripe task until coordination. The earlier private cloud-browser preview access approval is not reused or transferred.

Omnilux Contour Face and Elgato Air MK.2 remain official-store-first. `althcu-20` and the existing `grandparentsgift-20` pilots are preserved. Batch two is not published; batch three has not begun. Do not infer production sign-off from local fallback tests.
