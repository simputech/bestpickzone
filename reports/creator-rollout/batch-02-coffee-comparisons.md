# Batch 02 coffee comparisons: editorial review

Reviewed October 16, 2026. Scope: nine coffee records in `lib/comparison-html-articles.ts`; product request handoff in `batch-02-comparison-picks.json`. No commits or deployments performed by this worker. Runtime API hydration, visual verification, publication, and sitemap deployment belong to the batch coordinator.

## Outcome

- Eight substantial editorial rebuilds. These warrant an honest reviewed modification date and corresponding coffee-sitemap `lastmod` update after independent review. The coordinator added `modifiedDate: '2026-10-16'` to those records.
- One minor cleanup: Encore ESP vs Opus 2. Existing recommendation and substantial underlying analysis remain; no modification-date or sitemap freshness bump is warranted for this cleanup or the API-card addition.
- Rebuilt pages have no FAQ section. The existing Encore/Opus FAQ remains because this page was not materially rebuilt.
- Retained all existing hero assets and accurate generic/illustrated alt text. No product images or API display content were scraped or hardcoded.
- Metadata on the eight rebuilt records now matches exact compared models and the revised claim boundaries. Removed old body-level “June 2026 verified” statements rather than repeating unsupported blanket verification claims.
- No fixed product prices, arbitrary numeric ratings, invented hands-on experience, or comparative taste/speed measurements were added.

## Route-by-route assessment

### `/coffee/1zpresso-jx-pro-vs-comandante-c40` — substantial

The old article treated JX-Pro as an uncomplicated current purchase, mislabeled the top adjuster as an external collar, claimed a 40-click total C40 dial, made Red Clix mandatory for espresso, and invented superiority in grinding speed, fines, burr life, and status. Rebuilt around top adjustment versus counted clicks, original JX-Pro legacy identity, C40 MK4 Nitro Blade identity, optional Red Clix, calibration notes, and a used/remaining-stock inspection and dosing example.

Sources:
- https://1zpresso.coffee/j/ — distinguishes top JX-Pro adjustment from external J-Max/J-Ultra layouts; 40 clicks per rotation and 12.5-micron movement.
- https://1zpresso.coffee/manual-jxpro-en/ — original-model operation and calibration.
- https://1zpresso.coffee/product/jxpro/ — currently labels JX-Pro S and says unavailable. This is not proof of original-model availability or a manufacturer-confirmed blanket discontinuation date.
- https://comandantegrinder.com/pages/faq — standard C40 espresso settings and click-zero method.
- https://comandantegrinder.com/products/c40-mk4-nitro-blade-black — exact MK4 Nitro Blade identity and included jars.

Date/sitemap: update after review. Unresolved commercial boundary: original JX-Pro availability and exact ASIN not confirmed; preserve original-model constraints and honest search fallback.

### `/coffee/acaia-lunar-vs-timemore-black-mirror-nano` — substantial

Corrected repeated false “fully waterproof” claims. Removed unsupported comparative responsiveness claims and the incorrect claim that Nano lacks automatic modes. Specified Lunar 2021 versus Nano and added real footprint, cup-clearance, two-cup contact, tare, stopping-yield, and load examples. Acaia support lists 15.5 mm height while its manual lists 15 mm; both are attributed and the fit guidance uses the taller figure plus installed pad clearance. This discrepancy is not asserted to be rounding.

Sources:
- https://help.acaia.co/hc/en-us/articles/4406955618324-Is-the-Acaia-Lunar-2021-Waterproof — explicit water-resistant, not waterproof correction.
- https://help.acaia.co/hc/en-us/articles/4406955604372-Product-Specifications-for-Lunar-2021 — generation-specific specifications, including 15.5 mm height.
- https://cdn.acaia.co/web/2025_doc/manual/lunar/Lunar2021_MAN_AEAF08001_EN_LM.pdf — manual's different 15 mm height.
- https://help.acaia.co/hc/en-us/articles/4406963629332-How-is-the-original-Lunar-Different-from-the-Lunar-2021 — generation boundary.
- https://www.timemore.com/es/products/timemore-black-mirror-nano-espresso-coffee-weighing-timing-black — Nano size, weighing range, timing/flow functions, auto modes, USB-C; listed unavailable at review.

Date/sitemap: update after review. Unresolved commercial boundary: exact Nano availability and Lunar generation must be verified; Mini/Basic/Pearl substitutions are not allowed.

### `/coffee/aeropress-original-vs-aeropress-premium` — substantial

Replaced categorical “identical coffee”/“no coffee-quality reason” claims with materials-and-care analysis without invented testing. Added exact model boundaries, Standard versus XL filter fit, explicitly supported Flow Control compatibility, hot-cap and upright-method handling, home-versus-travel examples, and practical upgrade priorities. Does not imply all components or third-party parts are interchangeable.

Sources:
- https://aeropress.com/products/aeropress-coffee-maker — standard Original identity.
- https://aeropress.com/products/aeropress-coffee-maker-premium — glass-and-metal Premium identity.
- https://aeropress.com/pages/faq — handwash-only Premium, travel recommendation, hot metal cap, Standard filter family, inverted-method warning.
- https://help.aeropress.com/en-US/articles/aeropress-flow-control-filter-cap-66939 — named Flow Control compatibility and espresso-style versus actual espresso boundary.

Date/sitemap: update after review. Commercial boundary: Original XL, Steel, Premium Walnut, and accessory-only listings are distinct products.

### `/coffee/baratza-encore-esp-vs-fellow-opus-2` — minor

The existing comparison already identified the actual newer Opus 2 and had useful 40 mm versus 48 mm/stepped versus stepless analysis. Verified that Opus 2 is real and current rather than silently replacing it with the original Opus. Cleaned up a stale equal-list-price assertion, clarified Encore ESP can be single-dosed, corrected footprint rhetoric to height, normalized dimension order to W × D × H, added early product links and required CTAs/skip language, and retained the existing FAQ.

Sources:
- https://www.baratza.com/en-us/product/zcg495 — Encore ESP specifications and dosing cup.
- https://fellowproducts.com/products/opus-2-conical-burr-grinder — exact current Opus 2 specifications and cup compatibility.
- https://help.fellowproducts.com/hc/en-us/articles/48922628360731-What-s-new-with-Opus-2 — September 30, 2026 manufacturer explanation of 48 mm burrs, stepless adjustment, automatic stop, and differences from the original Opus.

Date/sitemap: unchanged. Reuse previously verified Encore ESP black ASIN B0BW272XCV. Coordinator separately verified additional Opus 2 identity and may apply that pin to the registry.

### `/coffee/baratza-virtuoso-plus-vs-fellow-ode-gen-2` — substantial

Removed unmeasured flat-burr taste superiority, comparative noise/retention claims, and an absolute “cannot make true espresso” claim inconsistent with Baratza's own manual. Rebuilt around timed versus weighed single dosing, actual output checks after bean changes, large-dose loading/collection, standard Ode Gen 2 versus SSP configurations, and espresso-specialist boundaries. Explicitly explains that a hopper does not prohibit single dosing.

Sources:
- https://www.baratza.com/en-us/product/virtuoso-zcg587 — Virtuoso+ M2 burrs, capacity, timer.
- https://assets.breville.com/ZCG587/manual-virtuosoplus-en-v1-6.pdf — timer operation and espresso starting setting.
- https://fellowproducts.com/products/ode-brew-grinder-gen-2 — standard/SSP distinction, 64 mm burrs, 100 g load capacity, automatic stop, espresso exclusion.

Date/sitemap: update after review. Commercial boundary: Virtuoso+ only, not old Virtuoso; complete standard Gen 2 grinder only, not a burr kit or SSP configuration.

### `/coffee/breville-barista-express-vs-delonghi-la-specialista` — substantial

Pinned comparison to BES870XL versus original EC9335M. Removed unsupported claims that Sensor Grinding detects basket/doses automatically, that dual heat guarantees no waiting/simultaneous brewing, exact warm-up timing, speculative tank specifications, and the implication that guided tamping prevents real espresso learning. Added practical shared-user recipe, counter/refill clearance, accessory-fit, older-machine contents, and warranty/voltage checks.

Sources:
- https://www.breville.com/en-us/product/bes870?sku=BES870XL — original Barista Express, grinder, 54 mm platform.
- https://www.breville.com/content/dam/breville/ca/en/assets/miscellaneous/instruction-manual/espresso/BES870-instruction-manual.pdf — preparation and adjustment.
- https://www.delonghi.com/en-ca/s/EC9335M — exact EC9335M support identity and dual-heating description.
- https://www.delonghi.com/it-it/p/macchine-da-caffe-manuali-macchina-da-caffe-espresso-manuale-la-specialista-ec9335.m/EC9335.M.html?pid=0132126023 — EC9335 family features. Article explicitly warns the regional 220–240 V listing is not a US electrical purchase recommendation.

Date/sitemap: update after review. Unresolved commercial boundary: legacy EC9335M stock/support; do not substitute Arte, Prestigio, Opera, Maestro, or Touch.

### `/coffee/fellow-stagg-ekg-vs-cosori-gooseneck` — substantial

Corrected CO108-NK from falsely described arbitrary variable control, baby-formula mode, and delayed start to five fixed presets. Separated original Stagg from current Pro/Pro Studio and removed unsupported equal accuracy, faster heating, and better pour measurements. Added recipe-temperature, rinse-water/capacity, current-model and legacy replacement-part checks.

Sources:
- https://help.fellowproducts.com/hc/en-us/article_attachments/115002323432 — original EKG guide: 0.9 L, selectable temperature, hold, stopwatch, handle, original model documentation.
- https://fellowproducts.com/products/stagg-ekg-electric-pour-over-kettle — current route presents Pro/Pro Studio; not evidence that the original gets their features.
- https://cosori.com/products/electric-gooseneck-kettle-co108-nk — exact CO108-NK, five presets, 0.8 L, hold function and electrical specification.

Date/sitemap: update after review. Unresolved commercial boundary: original EKG remaining stock and parts; Pro, Pro Studio, EKG+, Corvo, and stovetop are not substitutes.

### `/coffee/hario-v60-vs-chemex-classic` — substantial

Replaced repetitive unsupported “cleanest/brightest” and “Chemex more forgiving” rankings with exact VD-02T versus CM-6A scope. Added 30-ounce/six-small-cups clarification, two-12-ounce-mug example, filter formats and three-layer orientation, complete setup cost including server, per-filter cost calculation, stability, and wood-collar/glass care.

Sources:
- https://www.hario-usa.com/products/v60-plastic-coffee-dripper-02 — clear plastic VD-02T, size 02, published capacity and shape.
- https://chemexcoffeemaker.com/products/six-cup-classic-chemex — CM-6A, 30-ounce capacity, five-ounce cup definition, collar and cleaning.
- https://chemexcoffeemaker.com/pages/filter-series-support-page — correct six-cup filters, orientation, and different three-cup filter format.

Date/sitemap: update after review. Commercial boundary: clear plastic 02, not another Hario material/size; six-cup Classic, not a glass-handle or handblown model.

### `/coffee/timemore-chestnut-c3-vs-kingrinder-k6` — substantial

Removed false “13 usable settings,” borrowed C3 ESP capabilities, untested speed/fines/clarity rankings, and casual powered-drill adaptation advice. Rebuilt around the standard C3's internal classic dial versus K6 external fine adjustment, recipe recording, small-dose/travel and second-drink effort examples, and accurate variant exclusions.

Sources:
- https://www.timemore.com/collections/coffee-grinder-manual/products/c3-series — standard/ESP family differences, 38 mm S2C burrs, classic 12 clicks per rotation, variant-specific capacities.
- https://www.kingrinder.com/blog/comparison.amp — K6 48 mm heptagonal burr identity and external 60-click/16-micron adjustment.

Date/sitemap: update after review. Commercial boundary: standard C3 only; no C3S, Pro, ESP, or K-series substitutions. Coordinator separately verified a current K6 pin; no uncertain model spelling should be enforced.

## QA and remaining publication gates

- `npm run typecheck` passed after applying the nine records and again after targeted depth additions.
- All nine bodies have exactly two required Amazon CTAs, two explicit product-level `Skip this if` paragraphs, Start Here/Skip This First verdicts, and real related internal links.
- Rebuilt pages retain their hero images and above-fold affiliate disclosures; no H1 is added inside raw bodies.
- Eight rebuilt bodies contain no FAQ section; remaining FAQ is on the minor-cleanup route.
- Conservative word count excludes all headings, all tables, all anchor text, CTA text, disclosures, and italic editorial/source boilerplate. Results before the final Lunar document-discrepancy addition: Barista 1,081; Stagg 1,028; Virtuoso/Ode 1,052; JX/C40 1,065; C3/K6 1,093; AeroPress 1,048; Hario/Chemex 1,114; Lunar/Nano 1,079; Encore/Opus 1,194.
- Internal body links resolve to an existing route file, coffee comparison record, homepage, or coffee hub.
- The JSON handoff has exactly nine route keys and exactly two requests per route. It contains only editorial queries/constraints, not scraped API card titles, images, prices, or credentials. Encore ESP is the only preverified ASIN included by this worker; coordinator has separate verified pins to reconcile.
- Fail-closed search fallbacks are intentional where exact-model catalog identity is unresolved. No legacy/new-generation substitution is allowed merely to produce a card.
- Full build, runtime API-card hydration/mismatch review, screenshot QA, production verification, and sitemap publication remain coordinator gates. This report does not claim they passed.
