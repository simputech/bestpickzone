# Batch 02 coffee comparison identity checks

Checked 2026-10-16 UTC. Read-only public-source research; only this report and its identity JSON were written. No catalog prices, images, ratings, raw payloads, credentials, source edits, or deployment.

## Result

All eight requested product identities were corroborated by public Amazon.com product-title/brand/model fields and manufacturer product or support documentation. These are curated identity anchors, not proof that Creators API currently returns an eligible card or that an offer is in stock. Keep runtime fail-closed validation and honest search fallback.

The JSON is keyed by product label and includes proposed conservative request constraints. No accessory exception is needed for the currently observed titles. Do not broaden accessory matching unless a later exact-ASIN full-product result demonstrates the need.

## AeroPress Original

- ASIN: B0047BIWSK; brand: AeroPress; observed model field: 85A01.
- Identity title signature (curated, not full catalog title): AeroPress Original Coffee Press.
- Require title terms: Original, Coffee Press. Forbid adjacent versions: Premium, Clear, Go, XL.
- Amazon evidence: https://www.amazon.com/dp/B0047BIWSK
- Manufacturer evidence: https://aeropress.com/products/aeropress-coffee-maker
- Qualification: Current Amazon model is 85A01, not historical 83R01. Original full press; do not substitute Clear, Go, XL, or accessories.

## AeroPress Premium

- ASIN: B0FRWSKCX6; brand: AeroPress; observed model field: PR001.
- Identity title signature (curated, not full catalog title): AeroPress Premium Coffee Press Glass.
- Require title terms: Premium, Coffee Press, Glass. Forbid adjacent versions: Original, Clear, Go, XL.
- Amazon evidence: https://www.amazon.com/dp/B0FRWSKCX6
- Manufacturer evidence: https://aeropress.com/products/aeropress-coffee-maker-premium
- Qualification: This exact ASIN is BLACK, not silver. Glass, stainless steel and aluminum full press; same Premium family. Use only when article does not require silver.

## Baratza Virtuoso+

- ASIN: B07QMY8GLX; brand: Baratza; observed model field: Virtuoso+.
- Identity title signature (curated, not full catalog title): Baratza Virtuoso+ Coffee Grinder.
- Require title terms: Virtuoso+, grinder. Forbid adjacent versions: Encore, Sette, Vario.
- Amazon evidence: https://www.amazon.com/dp/B07QMY8GLX
- Manufacturer evidence: https://www.baratza.com/en-us/product/virtuoso-zcg587
- Qualification: Amazon title identifies ZCG587BLK; model field is Virtuoso+, part number 587. Do not require model ZCG587BLK. US storefront identity is established, not a live offer or voltage guarantee.

## Fellow Ode Gen 2

- ASIN: B0BLRMCM9Y; brand: Fellow; observed model field: Ode Gen 2.
- Identity title signature (curated, not full catalog title): Fellow Ode Gen 2 Coffee Grinder.
- Require title terms: Ode, Gen 2, grinder. Forbid adjacent versions: SSP, Opus, Gen 1.
- Amazon evidence: https://www.amazon.com/dp/B0BLRMCM9Y
- Manufacturer evidence: https://fellowproducts.com/products/ode-brew-grinder-gen-2
- Qualification: Black, standard Gen 2 brew-burr identity. Manufacturer explicitly separates SSP upgrade and says not for espresso.

## Breville Barista Express BES870XL

- ASIN: B00CH9QWOU; brand: Breville; observed model field: BES870XL.
- Identity title signature (curated, not full catalog title): Breville BES870XL Barista Express Espresso Machine.
- Require title terms: BES870XL, Barista Express, Espresso Machine. Forbid adjacent versions: Impress, Touch, Pro.
- Amazon evidence: https://www.amazon.com/dp/B00CH9QWOU
- Manufacturer evidence: https://www.breville.com/en-us/product/bes870?sku=BES870XL
- Qualification: Brushed stainless steel original Barista Express. Manufacturer manual also available at https://www.breville.com/content/dam/breville/us/assets/miscellaneous/instruction-manual/espresso/BES870-instruction-manual.pdf .

## De'Longhi La Specialista EC9335M

- ASIN: B07QMWZ6PT; brand: De'Longhi; observed model field: EC9335M.
- Identity title signature (curated, not full catalog title): De'Longhi La Specialista EC9335M Espresso Machine.
- Require title terms: La Specialista, espresso, EC9335M. Forbid adjacent versions: Arte, Prestigio, Opera, Maestro, Touch.
- Amazon evidence: https://www.amazon.com/dp/B07QMWZ6PT
- Manufacturer evidence: https://www.delonghi.com/en-us/s/EC9335M
- Qualification: Original sensor-grinder, dual-heating La Specialista, not newer subfamilies. Listing title includes inconsistent capacity wording; do not import it as a specification. Current availability and discontinued status were not established.

## Fellow Stagg EKG original

- ASIN: B077JBQZPX; brand: Fellow; observed model field: 1137.
- Identity title signature (curated, not full catalog title): Fellow Stagg EKG Electric Gooseneck Kettle.
- Require title terms: Stagg EKG, kettle. Forbid adjacent versions: Pro, Studio, Corvo, EKG+.
- Amazon evidence: https://www.amazon.com/dp/B077JBQZPX
- Manufacturer evidence: https://help.fellowproducts.com/hc/en-us/article_attachments/115002323432
- Qualification: Original matte-black Stagg EKG, model 1137. The old manufacturer product URL now presents Pro/Pro Studio, so use the original official manual as version-specific evidence. Do not attribute current Pro features or warranty to original.

## Cosori CO108-NK

- ASIN: B07T1CH2HH; brand: Cosori; observed model field: CO108-NK.
- Identity title signature (curated, not full catalog title): Cosori Gooseneck Electric Kettle.
- Require title terms: Gooseneck, Kettle. Forbid adjacent versions: Smart, WiFi, Wi-Fi.
- Amazon evidence: https://www.amazon.com/dp/B07T1CH2HH
- Manufacturer evidence: https://cosori.com/products/electric-gooseneck-kettle-co108-nk
- Qualification: Black original five-preset kettle. Model CO108-NK is in Amazon model fields, NOT current title: do not require model text in title. Manufacturer UPC 817915026922 agrees. Silver alternative B081LQMXKP was discovered but not fully checked and is not recommended here.

## Integration notes

- Keep brand apostrophe normalization for De'Longhi and plus normalization for Virtuoso+. The current matcher preserves a letter-following + as “plus”, so forbidden EKG+ does not block ordinary EKG.
- Exact model constraints use actual public model fields, not guessed manufacturer SKU strings. A missing or differing API model should remain fallback unless reviewed, not silently relaxed.
- AeroPress Original model drift and Cosori title/model placement are the main avoidable false-negative risks. Premium is specifically black.
- Original Stagg EKG remains supported by the version-specific manual; its legacy product URL is no longer safe evidence for original-model feature claims.
- La Specialista title capacity conflicts with other listing details; original-model specifications must stay based on manufacturer documentation.
- Parent requested immediate return before the comparison manifest existed; its final integration and runtime result have not been reviewed here.
