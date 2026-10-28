# Production acceptance, October 28, 2026

Corrective source commit: `98208c063b7863c96e807883823f5971b41b5290`. Production: `dpl_CUCA4mzMYkhmmBjXMnLJJ7HwL9Jb`, project `bestpickzone-fixed`. Vercel reported READY and the apex/www aliases; actual public HTML contains the correction.

## Accepted content

The complete [corn comparison](https://bestpickzone.com/home-kitchen/oxo-vs-chefn-corn-stripper) was reread after publication. It preserves the URL, uses real navigation and appropriately qualified sharp-tool guidance, and contains no invented hands-on yield or speed results. Desktop/mobile checks show no placeholder links, broken images or document overflow. Its existing OXO/Chef'n direct links retain `althcu-20`; their dated identity verification is separate from live catalog access.

[Dock](https://bestpickzone.com/wfh/best-usb-c-docks-for-two-monitors), [espresso-scale](https://bestpickzone.com/coffee/best-low-profile-espresso-scales) and [Ninja container](https://bestpickzone.com/home-kitchen/ninja-creami-containers-compatibility) public pages return 200 with the new search/listing distinction. Shared labels preserve tracking and sponsored attributes. IndexNow accepted these four changed URLs; acceptance is not confirmed indexing.

Batch four: all 20 public pages return 200 and appear in the child sitemaps. All 85 distinct internal link/image targets return 200. Forty browser checks (20 at 390 × 844, 20 at 1440 × 1000) found one H1 each, correct canonical, conspicuous disclosure, loaded image with alt text, no document overflow, no placeholder links and no unlabeled Amazon search links. Lazy images were scrolled into view before acceptance. Full per-URL HTTP/affiliate results: [batch-four receipt](batch-04-production-2026-10-28.json). Existing approved editorial/source review was reused.

## Creator API: exact external blocker

Production runtime on the Ninja guide at 23:23:23 UTC returned `HTTP 403, reason=AssociateNotEligible`. Amazon's [documented error](https://affiliate-program.amazon.com/creatorsapi/docs/en-us/troubleshooting/error-codes-and-messages) means account eligibility is denied; the documentation currently states 10 qualified sales in the trailing 30 days. This does not disclose or establish this account's actual sales count. The account owner must review eligibility or contact Amazon if the account should qualify. No paid plan, credential replacement, access expansion or security change was made or is inferred as necessary.

All 29 batch-four cards are honest search fallbacks; zero live cards were accepted. The previously working Tana French pilot and dock/scale/Ninja samples also remain fallback. Card identity/images from a live API response cannot be accepted until Amazon restores access. Source-verified body links are a different evidence tier. Existing six-hour positive cache, negative cache, strict matching and no-offer display remain; diagnostics now allowlist error enums and do not repeatedly refresh a valid OAuth token on a catalog 403.

## Analytics: established and unknown

Read-only aggregate evidence is saved in [analytics evidence](2026-10-28-analytics-evidence.json). GA4 property 471286075 reports the expected host and stream. The October 3 consent-gating commit changes the measurement basis across the decline. The data alone does not identify lost traffic, ranking changes, content impact or sales.

Production browser test used the current deployed listener, with Google collection/tag network endpoints blocked and a local `gtag` recorder. With rejected consent, a direct listing click emitted zero events. After explicit Accept, one direct listing click and one fallback-search click each emitted exactly one `affiliate_click`, no `amazon_click`. Both included `page_path`, `page_location`, `article_slug`, `link_url`, `destination_domain`, `link_text`, `product_name`, `product_category`, `affiliate_network`, `affiliate_platform`, `event_category` and beacon transport. The shelf link also included `affiliate_tracking_id`; a body link without placement data correctly omitted it. No synthetic events were sent to GA4 and no purchases occurred. Consent was restored to denied, initialization stopped, and the temporary test tab was closed.

Historical `amazon_click` and `affiliate_click` overlap on September 29; do not add them as unique clicks. Current source uses one shared listener. Admin change history, data filters and current web stream configuration remain unverified because the admin browser is signed out. Requested existing signed-in access or exports. Search Console performance remains unavailable; no repeated subscription-denied connector call or purchase. Requested a date/page/query performance export for September 20–October 10.

## Counts and continuation

80 pages in batches 1–4 are published, plus the corn article from batch five: **81 of 299 content refreshes published, 218 remaining**. Batch four is content/fallback accepted; its live Creator API acceptance is blocked. Historical full acceptance for the earlier 60 is retained as historical, not presented as current live API success. Batch five has 19 articles remaining, and will not rework or double-count corn. See [checkpoint](checkpoint.json) and [existing queue](inventory/rollout-queue.json). Subsequent batches, visual/template improvements and remaining source checks are still work in progress.
