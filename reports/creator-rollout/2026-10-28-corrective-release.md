# Corrective release: October 28, 2026

Baseline: remote main be083a389d77e7a825afd1051c57d2960afe2ea5; public production project bestpickzone-fixed, deployment dpl_7vmxGjLsmHDZkd6YNSBpwEfgLdc6. The primary checkout was dirty and was preserved. Work continues the existing 299-page queue in an isolated worktree.

## Editorial and link corrections

- Entire corn-stripper article rewritten without fabricated experience, numerical yield/speed comparisons, ratings, prices, or injury-prevention claims. Same URL. Practical blade precautions replace absolute safety language; navigation and related links use existing pages.
- OXO collecting model 1128000 is distinguished from the newer Y-shaped Corn Prep Peeler. The half-cup capacity is explicitly a historical manufacturer specification, not current availability. Source: OXO 2015–2016 Good Grips catalog p44, https://northeastgroup.com/sites/default/files/documents/catalogs/2015-2016_gg_catalog.pdf . Chef'n model 102-812-017, twisting method, raw/cooked use and top-rack cleaning checked at https://www.chefn.com/products/cob . https://oxoaustralia.com.au/products/corn-prep-peeler establishes the different peeler identity.
- Amazon page titles support retained corn ASINs B000V78JGO and B01B5SOUF6. This is a dated identity check, not live seller/stock/price verification.
- Dock and espresso-scale body links explicitly say Amazon search. Ninja body links identify specific listings; the live-card fallback is separately explained. Shared editorial HTML loaders label Amazon-search anchors without changing destinations, tracking IDs or link attributes.
- Ninja manufacturer rendered product details checked October 28: XSKPLID2CD Original lists NC299AMZ/NC300/NC350 variants; XSKPNTLD2 lists named NC500/NC600 variants, 24-ounce tubs and 4.88 × 4.88 × 5.25-inch product dimensions; XSK7PNTLD2 lists NC700/NC701 variants, two 16-ounce 2-in-1 pints, lids and nozzles. Amazon titles/part numbers checked for B0B7CBNNXC, B0B9CJLVY5 and B0DTJR3HTL respectively. No universal-fit inference.

## Creator API investigation

Existing production configuration names/scopes are present; no secrets were copied or displayed. Live catalog searchItems and getItems returned HTTP 403 before candidate matching (candidate count zero), including a formerly working book pilot. HTTP 403 alone does not identify the account cause. Added allowlisted enum-only error-reason logging; raw response messages/bodies never logged. A valid OAuth token is retained after catalog 403; 401 still clears it. Confirmed AssociateNotEligible responses back off 15 minutes. Strict product matching and honest search fallbacks remain intact. Exact production reason awaits deployment.

## Analytics findings so far

Read-only GA4 property 471286075 data: sessions October 2/3/4 were 34/13/2; much of the earlier volume was attributed to direct. Commit 6f873d284efd6710e61421d900eeccc84535caf8 introduced explicit opt-in gating on October 3 at 13:18 EDT. The measurement basis changed; this does not establish that consent explains the entire decline or that content caused it. Existing consent behavior is preserved.

Returned host/stream: bestpickzone.com / 15303189917 / BestPickZone Web. September 26–October 27 event rows include eight affiliate_click and five legacy amazon_click events; all five amazon_click events were September 29 alongside five affiliate_click events. Do not sum these as unique clicks. Current source emits affiliate_click only. Admin filter/domain settings and production debug verification remain pending. No GSC Wizard retry or subscription purchase.

## Pre-release validation

181/181 automated unit/integration tests passed. Production build and metadata, indexability, runtime asset, operations and inventory gates passed. Entire corrected corn article and three guides were read in the local browser; corn checked at desktop and 390px mobile with no document overflow or placeholder links. Local HTTP/link evidence is in 2026-10-28-corrective-local-links.json. Production verification, batch-four acceptance and remaining 219-page rollout are not claimed complete by this receipt.
