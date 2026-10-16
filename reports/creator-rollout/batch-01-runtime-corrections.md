# Batch 01: targeted runtime identity corrections

Reviewed: October 16, 2026. Scope: eleven curated product requests in `lib/article-commerce.ts`, following the first production render checks. This is a commerce matching correction, not a substantive editorial refresh. Keep article dates and sitemap modification dates unchanged.

## Disposition

**Independent review passes for the eleven registry corrections.** Seven existing ASINs were verified, two previously unpinned COSCO products were resolved to exact source-backed ASIN/model pairs, and two grinder picks were resolved to exact ASINs. No global accessory guard relaxation is necessary. My Fair Mahjong remains unresolved and must retain its honest search fallback; no generic rack substitution was approved.

The first-party product pages explain likely false negatives: KitchenAid uses fit/compatibility wording, Ooni and Logitech include accessory terminology, and Ninja now describes the existing Deluxe container SKU as XL tubs. Those terms are not evidence of a wrong item when the independently verified ASIN, brand and discriminating title terms all agree.

This diagnosis uses public product identity evidence. It does **not** establish the exact live Creator API payload, current offer availability, or successful production recovery. Confirm the corrected cards through the existing API/render path after deployment. Do not replace unavailable API images or titles with scraped material.

## Verified identities and approved constraints

| Pick | Public identity evidence | Registry disposition |
| --- | --- | --- |
| KitchenAid roller/cutter set | [Amazon B01DBGQR1K](https://www.amazon.com/dp/B01DBGQR1K) identifies model and part number KSMPRA, with roller and two cutters. Product highlights contain fit wording. | Keep ASIN and KitchenAid brand; allow the accessory wording only with required `KSMPRA` and `pasta` terms. |
| KitchenAid pasta press | [Amazon B01ENK4UV2](https://www.amazon.com/dp/B01ENK4UV2) identifies model and part number KSMPEXTA. [KitchenAid](https://www.kitchenaid.com/countertop-appliances/stand-mixers/attachments/p.gourmet-pasta-press.KSMPEXTA.html) confirms the press and six-disc design. | Keep ASIN and KitchenAid brand; require `KSMPEXTA`, `pasta`, and `press` for the accessory allowance. |
| Ooni perforated launching peel | [Amazon B07T1JPCNK](https://www.amazon.com/dp/B07T1JPCNK) identifies the 12-inch perforated peel; accessory wording occurs in the title. | Keep ASIN and Ooni brand; require `12`, `perforated`, and `peel` for the accessory allowance. |
| Ooni turning peel | [Amazon B0821NDN33](https://www.amazon.com/dp/B0821NDN33) identifies the 7-inch turning peel, not the 9-inch option; title includes accessory terminology. | Keep ASIN and Ooni brand; require `7`, `turning`, and `peel` for the accessory allowance. |
| Ooni bamboo peel | [Amazon B07TB9LBHR](https://www.amazon.com/dp/B07TB9LBHR) identifies the 12-inch bamboo peel; title includes accessory terminology. | Keep ASIN and Ooni brand; require `12`, `bamboo`, and `peel` for the accessory allowance. |
| Ninja Deluxe/XL containers | [Amazon B0B9CJLVY5](https://www.amazon.com/dp/B0B9CJLVY5) identifies XSKPNTLD2, a two-pack with lids, using XL rather than Deluxe in the title. [SharkNinja](https://www.sharkninja.com/ninja-creami-xl-tubs-2-pack-compatible-with-nc500600-series-creami-ice-cream-makers/XSKPNTLD2.html) independently confirms XSKPNTLD2 as XL/Deluxe containers. | Keep ASIN, Ninja brand and accessory allowance. Replace the mandatory `Deluxe` title term with the more discriminating `XSKPNTLD2`; retain `CREAMi`. Do not substitute Original or Swirl containers. |
| Logitech MX Creative Console | [Amazon B0D5FRQXWZ](https://www.amazon.com/dp/B0D5FRQXWZ) identifies the complete console, model/part number 920-012660, with keypad and dial. Product highlights include accessory terminology. | Keep ASIN and Logitech brand. Permit accessory wording only with the phrase `MX Creative Console`; the standalone MX Keypad is not equivalent. |
| COSCO XL 38.5-inch table | [Amazon B084QF1F6M](https://www.amazon.com/dp/B084QF1F6M) identifies model and part number 14036BLK1E, black finish, one item and one pack. [COSCO](https://www.coscoproducts.com/products/xl-38-5-fold-in-half-card-table-w-handle) corroborates black single-pack identity. | Pin B084QF1F6M and exact model `14036BLK1E`; retain Cosco brand and existing expected-title terms. No accessory exception. |
| COSCO 34-inch vinyl-top table | [Amazon B00SOWJUO8](https://www.amazon.com/dp/B00SOWJUO8) identifies model and part number 14696BLK1E, black finish, single pack and one item; UPC 044681346620. [COSCO](https://www.coscoproducts.com/products/34-vinyl-top-folding-table) corroborates the model but has an inconsistent six-foot fold-in-half option label. | Pin B00SOWJUO8 and exact model `14696BLK1E`; retain Cosco brand and existing expected-title terms. Do not copy the inconsistent manufacturer option label or substitute a chair set, alternate finish or multipack. No accessory exception. |
| Baratza Encore ESP | [Amazon B0BW272XCV](https://www.amazon.com/dp/B0BW272XCV) identifies the black Encore ESP, with 120 volts separately listed in specifications. This independent view gives model/part number ZCG495BLK1AUC1A, rather than the ZCG495BLK120V identifier reported by the initial source check. | Pin B0BW272XCV only; retain Baratza brand, Encore ESP title evidence and the `Pro` exclusion. No new model gate or accessory allowance. The standard Encore and Encore ESP Pro remain different picks. |
| Eureka Mignon Specialita | [Amazon B07GFV6HM8](https://www.amazon.com/dp/B07GFV6HM8) identifies Specialita with 55mm burrs, selected Matte Black finish and 120 volts in specifications. The broad model field says Mignon, so it is not a suitable standalone variant constraint. | Pin B07GFV6HM8 only; retain Eureka brand, Mignon Specialita title evidence and the `Smart` exclusion. No accessory allowance. Keep the article's US-voltage/seller-warranty check. |

## Regression coverage

Added `scripts/article-commerce.test.cjs`, using the existing `loadSeoModule` TypeScript harness to import the **real registry and real matcher**. All response objects and titles are intentionally concise synthetic fixtures, not saved API payloads or copied Amazon titles. The image URL is a deliberately nonexistent test placeholder, not a product asset. Tests make no network requests.

Command: `node --test scripts/article-commerce.test.cjs`

Result: **49 tests passed, 0 failed.** Coverage includes:

- All eleven intended identities and their exact registry constraints.
- Wrong ASINs with internally consistent URLs, wrong/missing brands, and adjacent product titles.
- Misleading compatible-accessory candidates retaining the requested keywords but carrying another ASIN or third-party brand. The curated ASIN and brand remain the identity boundary.
- Used, renewed, refurbished and bundled candidates, including requests with an accessory exception.
- Removal of the seven accessory exceptions, ASIN pins or required terms, and removal of each required title term.
- COSCO incorrect, alternate-finish and multipack model identifiers; absent model evidence; exact model via part number.
- New grinder pins retain the Pro/Smart exclusions and reject replacement/compatible accessories even with otherwise matching synthetic titles. No unsupported model-label equality was introduced.
- My Fair Mahjong remains unpinned; generic 18-inch racks and empty results fail closed rather than being substituted.

Only the new test file and this report were added by this review. No article text, metadata, matcher, API client, existing test file, credential, deployment or protected preview was changed or accessed by the reviewer.
