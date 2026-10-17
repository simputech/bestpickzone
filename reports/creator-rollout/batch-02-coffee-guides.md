# Batch 02: coffee guides and shallow-desk monitor arms

Review completed October 16, 2026. Scope: five existing buying guides, their editorial copy, and ten curated product requests in `batch-02-coffee-picks.json`.

## Outcome and freshness decision

All five guides already have useful, researched decision paths, model-specific tradeoffs, worked examples, skip criteria, and relevant internal links. Retained those instead of manufacturing a rewrite. Four received minor maintenance; the low-cabinet guide needed no editorial change. **None warrants a new article modification date or sitemap lastmod.** No dates, shared metadata, registry, sitemap, credentials, or deployment files were changed.

| Route | Classification | Change and reason |
| --- | --- | --- |
| `/wfh/best-monitor-arms-for-shallow-desks` | Minor | Added the distinction between the 45-682 single-arm two-piece-clamp kit and other LX Pro mounting configurations. Replaced a broad regional overview link with the exact US product page. The recommendation and geometry explanation are unchanged. |
| `/coffee/best-burr-grinders-french-press-cold-brew` | Minor | Removed the 300g hopper / 120g bin comparison attributed to a regional page that no longer exposed those specifications when retrieved. Replaced it with the directly verified manual's max-fill-line constraint. Batch arithmetic and the Encore-versus-Ode recommendation remain intact. |
| `/coffee/best-coffee-makers-for-low-cabinets` | No editorial refresh needed | Current manufacturer evidence supports the heights, footprint, capacity, FrontFill access and removable-tank distinctions. Existing caveats already separate closed height from unmeasured operating clearance. |
| `/coffee/best-espresso-grinders-for-breville-bambino` | Minor, sources only | Replaced the general Smart Grinder Pro support link with the exact product specifications and its linked US operating manual. This makes the 50–54mm cradle, timed operation and adjustable-upper-burr claims easier to verify. |
| `/coffee/best-low-profile-espresso-scales` | Minor | Removed the unsupported inference that Acaia's 15mm versus 15.5mm height discrepancy is merely rounding. Retained both attributed figures and now explicitly requires checking the exact revision for close fits. |

## Primary evidence checked

- Monitor arms: [VIVO STAND-V001](https://vivo-us.com/products/stand-v001) supports the 22 lb limit, VESA patterns, 17-inch pole, 16-inch extension and 3.25-inch maximum desktop thickness. [Ergotron's exact 45-682 product page](https://www.ergotron.com/en-us/products/product-details/45-682) and [series specification sheet](https://media.ergotron.com/reserved/resources/specs-lx-pro-series-ea-orig.pdf) distinguish 45-682 from dual 45-686 and tall-pole 45-695 configurations. No universal rear-clearance claim was introduced.
- Brew grinders: [Encore product page](https://www.baratza.com/en-us/product/encore-zcg485) and [operating manual](https://assets.breville.com/ZCG485/manual-encore-en-v4-3-120122.pdf) support manual operation, the 40-step adjustment, French-press starting setting of 28, and maximum-fill-line warning. [Fellow Ode Gen 2](https://fellowproducts.com/products/ode-brew-grinder-gen-2) supports 31 steps across 11 settings, 100g capacity, and exclusion of espresso. Did not substitute unverified retailer capacity claims for the removed regional claim.
- Low cabinets: [Hamilton Beach 46310J](https://hamiltonbeach.com/frontfill-12-cup-programmable-coffee-maker-46310j) supports 13.9 H × 7.95 W × 12.91 D inches and the front-opening reservoir / basket. Indexed text from [Zojirushi's EC-DAC50 page](https://www.zojirushi.com/app/product/ecdac) supports 8⅞ W × 5⅞ D × 10⅝ H inches and the maker's listed 5 cups / 24 oz / 680mL capacity. Direct retrieval of Zojirushi's page and manual returned errors; the indexed manufacturer page was available, so this is not a claim to have re-read the full manual. Neither maker supplied a complete lid-open / tank-removal envelope in the material reviewed.
- Bambino grinders: [Baratza Encore ESP](https://www.baratza.com/en-ca/product/zcg495), the manufacturer's [indexed ESP detail page](https://www.baratza.com/en-ca/product/encoretm-esp-zcg495?bvstate=pg%3A2%2Fct%3Ar), [Breville Smart Grinder Pro](https://www.breville.com/en-us/product/bcg820), and [its current linked operating manual](https://assets.breville.com/BCG820/BCG820_USCM_IB_L26_LR.pdf). Breville explicitly describes a digital timer, not grind-by-weight, and includes small 50–54mm and large 58mm cradles. No claims of measured retention or taste superiority were added.
- Scales: [Lunar 2021 support specifications](https://help.acaia.co/hc/en-us/articles/4406955604372-Product-Specifications-for-Lunar-2021), [current Lunar product page](https://acaia.co/collections/coffee-scales/products/lunar_2021), and [Wacaco Exagram Pro](https://www.wacaco.com/products/exagram-pro). Acaia's two pages still disagree on body height; Exagram Pro is listed at 90 × 95 × 22mm. The existing installed-height example remains a calculation, not a measured machine fit.

## Commerce identity decisions

Eight of the ten requests are ASIN-pinned. Seven were cross-checked against public Amazon product pages during this review; Encore ESP reuses the exact pin already verified in batch 1. Public listing retrieval is identity evidence, **not confirmation of current offer availability or a successful Creators API response**.

| Pick | Curated identity | Evidence / protection |
| --- | --- | --- |
| VIVO STAND-V001 | `B00B21TLQU`, exact model `STAND-V001` | [Amazon identity](https://www.amazon.com/dp/B00B21TLQU). Explicit alternate-model exclusions. |
| Ergotron LX Pro single desk arm | `B0DSJJMRFL`, model prefix `45-682` | [Amazon identity](https://www.amazon.com/dp/B0DSJJMRFL) lists 45-682-292. Excludes dual, stacking, tall-pole and wall-mount configurations. The exact listing uses “fits,” which the matcher otherwise treats as accessory wording; the narrowly scoped exception requires this ASIN, Ergotron brand and `LX Pro`, `single`, `monitor arm` terms. |
| Standard Baratza Encore | `B007F183LK`, exact model `ENCORE` | [Amazon identity](https://www.amazon.com/dp/B007F183LK). Excludes ESP and Pro. |
| Fellow Ode Gen 2 | `B0BLRMCM9Y` | [Amazon identity](https://www.amazon.com/dp/B0BLRMCM9Y). Requires Ode, Gen 2 and grinder; excludes SSP so a burr-upgrade variant does not replace the standard pick. |
| Hamilton Beach FrontFill 46310J | Unpinned exact-model discovery | Manufacturer identity verified; no trustworthy exact Amazon ASIN established. Both title term and model must be 46310J. Older 46310 listings are not substitutes. |
| Zojirushi ZUTTO, silver | `B000EPLK6O`, exact model `EC-DAC50SA` | [Amazon identity](https://www.amazon.com/dp/B000EPLK6O) uses EC-DAC50 in the title but EC-DAC50SA in model metadata. The label and note identify the silver listing. Do not transfer the newer color variants' materials claims to this older silver suffix. No such claims exist in the guide. |
| Baratza Encore ESP | `B0BW272XCV` | Reuses the parent's previously verified batch-1 identity. Requires Encore ESP and grinder; excludes Pro. |
| Breville Smart Grinder Pro | `B00OXGXW8O`, exact model `BCG820BSS` | [Amazon identity](https://www.amazon.com/dp/B00OXGXW8O). Requires the model and Smart Grinder Pro title terms. |
| Acaia Lunar 2021 | Unpinned discovery | Requires Acaia brand, Lunar, 2021 and scale identity; excludes plate, base, case, film and Pearl results. No verified US ASIN found. A public suggestion of `B0BKRBR3BZ` was checked and rejected because that US listing is a MiiCoffee Nano, not an Acaia. |
| Wacaco Exagram Pro | `B0D7378WJL` | [Amazon identity](https://www.amazon.com/dp/B0D7378WJL). Requires Exagram Pro and scale; original Exagram is not the same model. |

The two unpinned picks must remain honest search fallbacks unless the runtime returns one unambiguous exact identity. Do not weaken model/edition checks simply to make a card appear. No catalog price, review text, image URL or downloaded image was added to source. Labels and notes are editorial text.

## Re-review and validation

- Re-read the changed paragraphs against their cited sources and the operating playbook. No invented hands-on experience, unsupported fit guarantee, filler expansion, FAQ or new duplicated H1 was introduced.
- Five HTML files passed structure, affiliate-tag / link-attribute, CTA / skip-criteria and existing local-route-reference checks. The shared buying-guide renderer supplies the above-the-fold affiliate disclosure.
- Visible-text counts, including headings and comparison tables: shallow desks 1,425; brew grinders 1,297; low cabinets 1,281; Bambino grinders 1,358; low-profile scales 1,325. These are conservative audit context rather than a new content-length claim.
- All ten JSON requests passed synthetic intended-identity and fail-closed checks for wrong brand, wrong ASIN, forbidden terms, wrong model, and ambiguous unpinned discovery. These checks do not exercise the live API.
- `node --test scripts/amazon-products.test.cjs`: 15/15 passed.
- `git diff --check`: passed.
- Shared-registry integration, full build, live Creators API coverage and deployed page checks are the parent task's remaining work. No commit or deployment was attempted.
