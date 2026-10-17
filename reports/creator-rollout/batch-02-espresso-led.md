# Batch 02: Espresso and LED-mask editorial refresh

Review date: October 16, 2026. Scope: two owned route content files and this report/pick manifest only. No commits, credentials, protected previews, deployment, publication, date updates, sitemap edits or shared-component changes were performed by this worker. Metadata corrections in the owned files were completed after explicit parent follow-through.

## Results and refresh classification

### `/coffee/breville-bambino-plus-vs-gaggia-classic-pro`: substantial refresh

Rebuilt the decision guidance around the US BES500 Bambino Plus versus the US brass-boiler Classic Pro E24. Added meaningful model/version checks, a grinder-inclusive budget, a two-cappuccino workflow example, single-/dual-wall basket choices, portafilter lug/clearance compatibility, a counter-access checklist and primary-source links. Removed unsupported durability/"forever platform" implications, the assertion that a bigger tank/wand necessarily favors repeated milk drinks, and overbroad claims that 58mm handles are interchangeable. Clarified that Breville's three-second figure concerns heater readiness, not a complete drink or all components reaching temperature. Removed the existing FAQ content for the material rebuild; the parent made the shared FAQ output conditional. Added the requested route `path` prop for the existing two Creator API cards, with no duplicate shelf.

The article now has 1,087 words in the main editorial data alone, excluding the comparison table, labels, disclosure and additional setup/source sections. No invented test results, fixed price or review-rating claims were added.

Creator API picks:
- Breville Bambino Plus BES500: retain `B07JVD78TT`, explicitly supplied as the already verified API baseline by the parent. This worker did not independently re-query that ASIN and did not derive it from scraped content.
- Gaggia Classic Pro E24: exact E24 query; require positive `E24` and `120V` title evidence and reject explicit overseas-voltage titles. No ASIN was verified. Keep safe fallback unless the live API meets both required terms; an E24 title with no electrical evidence must not pass. This intentionally strict check can produce false-negative fallbacks, which are preferable to an ambiguous US-model card. The query alone is not proof of identity.

Sources read:
- https://www.breville.com/en-us/product/bes500 — US model, ThermoJet, automatic/manual milk, pre-infusion, basket format and supplied accessories.
- https://assets.breville.com/BES500/BES500_USCM_IB_T23_LR.pdf — US/Canada manual, 64 fl-oz tank, basket guidance and distinct cleaning/descaling procedures.
- https://www.gaggia-na.com/products/gaggia-classic-pro — US E24 brass boiler, 58mm portafilter, two-hole manual steam wand, 72-oz tank, 9-bar OPV, 110–120V.
- https://www.gaggia-na.com/pages/product-manuals — official model-specific manual index. Do not substitute a manual for another Gaggia model.

Unresolved source conflict: the current Breville US page labels its dimensions 11.9 × 7.4 × 14.3 inches (W×D×H), differing from the previous article's 7.5 × 13.5 × 12. Rather than infer which orientation/generation is intended, the rewritten article omits dimensional measurements and tells tight-clearance buyers to verify the exact offer. Weight comparisons were also removed. This does not block the narrowed workflow comparison.

### `/beauty/dr-dennis-gross-vs-omnilux-contour`: substantial refresh

Replaced unsupported efficacy scoring and a misleading "treatment breadth vs. depth" ranking with intended-use, fit, schedule and seller checks. The old copy falsely listed white light, treated 100 red lights as the total FaceWare LED count, claimed higher LED count proves more energy/deeper effects, asserted clinical superiority without comparative evidence, and advertised broad acne/redness benefits without an adequate safety boundary. These were removed.

Current official DDG product page and US manual both list 100 red-mode lights plus **60** blue lights. They do not support the commonly repeated 62-blue figure; the refresh follows the current manufacturer source, not third-party review copy. The manual's wavelength list is 415, 605, 630, 660 and 880nm, not white light. Contour Face has 132 LEDs in 66 dual-chip bulbs and combines 633/830nm; the copy explains why totals do not rank clinical effectiveness.

Added exact device-family exclusions, original four-step buying-order SVG, properly scoped FDA language, manufacturer-specific precautions, meaningful routine examples, expected time commitment without outcome guarantees, and official-source links. There are no numerical efficacy percentages, fake hands-on statements, invented user quotations, fixed price comparisons or review scores. About 1,970 visible body words before excluding labels and boilerplate; the editorial copy comfortably exceeds 1,000 words. There is one H1, no FAQ/FAQPage and an explicit `<footer>` boundary retained for the parent's API shelf insertion.

Creator API / commercial fit:
- FaceWare Pro: exact full-face candidate only; no ASIN independently verified. Keep safe fallback unless API identity matching succeeds. Product identity is not proof that a particular marketplace seller is authorized or warranty-eligible.
- Omnilux Contour Face: **Creator API N/A, deliberately excluded from the registry manifest at the parent's direction.** Its official wholesale provider terms prohibit those providers from listing on Amazon/other marketplaces. No authorized Amazon seller or exact API item was verified. The editorial recommendation is official-store-first, with no Amazon purchase/search CTA for Omnilux. Do not add a similar mask, controller or unofficial reseller merely to produce two cards.

Primary sources read:
- https://www.drdennisgross.com/drx-spectralite-faceware-pro-3-minute-led-device/695866568117.html — current product modes, timing and LED counts; claims attributed to the brand, not treated as independent results.
- https://www.drdennisgross.com/on/demandware.static/-/Sites-ddg_us-Library/default/dwc3ca3e00/contentassetimages/2024/faq/DRx_SpectraLite_FaceWarePro_DOM_Manual.pdf — US instructions, exact wavelengths, adult-use guidance, light-sensitivity test, eye/wound/medication/pregnancy warnings and stop-use guidance.
- https://www.drdennisgross.com/devices-support/ — authorized-partner/direct-purchase warranty and registration conditions.
- https://omniluxled.com/products/omnilux-contour-face — exact face device, 633/830nm, 132 LEDs, flexible construction and controller.
- https://omniluxled.com/pages/help-center-products — Contour schedule (10 minutes, 3–5 weekly for 4–6 weeks), age 21+, daily-use limitation and separate Clear acne indication.
- https://cdn.shopify.com/s/files/1/0482/6736/2466/files/FQS-EN-0622.pdf?v=1657306733 — official quick start, controller connected during treatment.
- https://cdn.shopify.com/s/files/1/0482/6736/2466/files/contraindications-en.pdf?v=1656444319 — pregnancy/planned pregnancy/breastfeeding, light sensitivity/medications, lupus/photosensitive eczema/albinism, light-induced headache and genetic eye-condition restrictions.
- https://cdn.shopify.com/s/files/1/0482/6736/2466/files/DI-EN-0622.pdf?v=1656441594 — official drug-interaction reference, not used to create individualized medication advice.
- https://accessgudid.nlm.nih.gov/devices/05060534510128 — Contour Face identifier and explicit K191629 link.
- https://www.accessdata.fda.gov/cdrh_docs/pdf19/K191629.pdf — faceLITE 510(k), full-face wrinkles, not acne. Clearance is not PMA approval or a superiority finding.
- https://www.accessdata.fda.gov/cdrh_docs/pdf18/K183247.pdf — dpl Faceware, wrinkles and mild-to-moderate inflammatory acne; reviewed but **not silently assigned to today's retail FaceWare Pro**.
- https://accessgudid.nlm.nih.gov/devices/B347BA5672100 — historical named Drx SpectraLite Faceware, no published K-number; commercial distribution ended February 12, 2024.
- https://accessgudid.nlm.nih.gov/devices/B347202366010 — current Dr Dennis Gross Skincare model 20236601, in commercial distribution, no published premarket number. The current name alone is not a verified retail-to-clearance bridge.
- https://wholesale.omniluxled.com/pages/terms-and-conditions — source for marketplace restrictions on providers, not a categorical accusation against every possible seller.

Unresolved regulatory gap: the current manufacturer calls FaceWare Pro FDA-cleared, but the accessible primary records did not establish the exact current retail-unit link to K183247. The article clearly attributes the claim and explains the verification limit. Do not certify that mapping or describe the current retail model's clearance as independently confirmed until the manufacturer supplies its exact identifier/clearance link. The legacy Omnilux user-guide link returned an internal fetch error; official quick-start, help-center and contraindication files were successfully read instead. No unsupported claim relies on that unavailable full guide.

## Parent integration and freshness follow-through

Both routes merit substantial-refresh dates and corresponding sitemap lastmod updates after final review. Dates remain untouched for parent coordination; the existing publication dates must remain unchanged.

At the parent's follow-through request, stale metadata in the owned files was corrected:
- Espresso title, Open Graph title, Twitter title, rendered H1 and breadcrumb now name the E24. Descriptions explain US-model identity, milk workflow, grinder budget and accessory compatibility; "thermoblock", "Which Wins", "boiler-grade control", "steam power" and unsupported footprint framing were removed.
- LED HTML title names FaceWare Pro versus Contour Face. Description now emphasizes acne versus wrinkle goals, fit, schedule, safety instructions and verified identity, not clinical superiority/full-spectrum/deep-tissue claims.
- The shared LED SEO title override remains a valid neutral "Dr. Dennis Gross vs. Omnilux Contour: LED Masks". No shared SEO files were edited.
- Update genuine modification/verification dates in parent-owned logic and visible date labels before publication.
- Omnilux's intentional omission is a commercial-fit exception, not a completed exact Amazon match.

## Verification

Passed after both content edits:
- `npx tsc --noEmit --pretty false`.
- `npx next lint --file app/coffee/breville-bambino-plus-vs-gaggia-classic-pro/page.tsx` with no ESLint warnings/errors. Typecheck and lint were repeated successfully after final metadata edits.
- `git diff --check` passed for the owned content files after final metadata edits.
- JSON pick manifest parses and contains two espresso candidates, one LED candidate, no guessed ASINs.
- HTML parser inspection: one H1; one explicit footer; balanced content markup; no score bars, FAQ section or FAQ schema. Self-closing void elements account for the simple audit parser's initial false positives.
- Every remaining HTML Amazon link has `althcu-20`, target `_blank`, and `rel="sponsored noopener"`; the Omnilux purchase destination is its official product page.
- Internal comparison links resolve to existing dynamic beauty entries; coffee links resolve to existing route files.

Not run by this worker: full production build, aggregate route validation, live Creator API fetch for the new candidates, local rendered-browser QA, protected-preview QA, publication/deployment, or live verification. The parent coordinates these shared stages. Do not describe the new candidates as API-resolved until its live results support that.
