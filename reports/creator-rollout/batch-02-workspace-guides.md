# Batch 02: Mahjong carrying/storage and workspace guides

Reviewed 2026-10-16 UTC against the operating playbook, the four existing article bodies, `lib/article-commerce.ts`, and `lib/amazon-product-match.ts`. Scope was limited to these four guides and the two batch report files. No shared metadata, dates, sitemap, credential, API response, commit, or deployment was changed.

## Refresh decisions

| Route | Classification | Reason | Sitemap recommendation |
| --- | --- | --- | --- |
| `/mahjong/best-carrying-bags-for-american-mahjong-sets` | no-refresh | The existing component-by-component fit guidance remains accurate. Both outer envelopes, 160-tile pouch claim, specified tile dimensions, and 18-inch rack-pouch claim agree with YMI. Unpublished interior, hard-case, and mat fit are already disclosed rather than invented. | Preserve existing lastmod. |
| `/mahjong/best-mahjong-mats-for-small-tables` | minor | Expanded the existing fitted-cover size warning after checking the exact blue Amazon listing. Its size selector, product description, and manufacturer data conflict. The recommendation remains conditional on confirmed table fit; no product substitution or new verdict. | Preserve existing lastmod. |
| `/wfh/best-usb-c-docks-for-two-monitors` | substantial | Corrected a consequential protected-video assumption, added M4/M5 MacBook Air native-display support and an explicit comparison-table row, supplied three hardware-specific purchase paths, and clarified that four video sockets serve two display channels. Removed a hardware-revision assertion not substantiated by the current product page. These changes materially improve the core compatibility decision rather than merely adding commerce. | Parent should apply a justified editorial lastmod for this route only. |
| `/wfh/best-video-call-lighting-for-glasses` | minor | Added Neo's separate support options, with-mount versus light-only distinction, and model-specific power tiers. Changed Air MK.2 to an official-store-first purchase path because no exact Amazon US listing was verified. Preserved the placement-first verdict and the explicit warning that no light guarantees reflection-free glasses. | Preserve existing lastmod. |

No new FAQs, hands-on testing claims, performance measurements, prices, review counts, or stock claims were added. Existing publication/source dates were deliberately left unchanged per assignment. This report records the new source check. Shared metadata descriptions remain consistent with the reviewed bodies.

## What changed and why

### Bags: retained

Mojave YM-XH012-A and Pepper DX-XH001-A are case-only models, not complete Mahjong sets. Manufacturer specifications are still 21.5 × 2.8 × 9.8 inches and 21.7 × 3 × 10.6 inches respectively. The pouch limits do not establish clear interior dimensions or oversized-equipment compatibility. The article already explains spare-tile handling, rigid trays, removable pushers, card holders, packed weight, and separate mat transport with useful examples.

Primary sources:
- https://www.ymimports.com/products/ym-xh012-a
- https://www.ymimports.com/products/dx-xh001-a
- https://www.amazon.com/dp/B00SR63J2A confirms the Mojave case-only title, model YM-XH012-A, and matching UPC 810989022647.

Unresolved: an exact current Amazon US ASIN for the Pepper case-only bag was not established. B0773K3Y6D surfaced in discovery as a complete Pepper tile set, so it was not used. The product request requires the case-only title and exact DX-XH001-A model. No different bag or complete set may replace it.

### Mats: size conflict made explicit

YMI still identifies YW-TR001-A as the blue 31.1-inch square rubber-backed felt mat, with roll-only storage and a carrying sleeve. The article's 1.45-inch centered margin on a 34-inch square table and approximately 44-inch diagonal are correct calculations, clearly distinguished from measured fit.

For the fitted blue YM-TR001-B87, the maker's title uses 34.8 inches and names a 34.3-inch table, while its sizing sentence has a units error. The exact Amazon listing mixes 34 × 34.8, 34 × 34, and 34.8 × 34.8-inch descriptions. The edit explicitly requires current seller confirmation instead of picking a convenient number or treating the green variant as interchangeable. Model identity can be established even though finished usable dimensions remain unresolved.

Primary sources:
- https://www.ymimports.com/products/yw-tr001-a
- https://www.ymimports.com/products/ym-tr001-b87
- https://www.amazon.com/dp/B0753FHDC8 identifies the blue cover, includes YM-TR001-B87 and UPC 810989024252 in the product description, and exposes the conflicting size fields.

Unresolved: no exact Amazon US ASIN was established for YW-TR001-A. The JSON therefore retains exact-model discovery and fail-closed fallback. B0753CL3T1 is the green fitted variant and was not substituted for the blue cover. A rendered product card must not be represented as confirmation of fitted-cover dimensions.

### Docks: refreshed compatibility decision

The article now makes the macOS HDCP limitation specific: Plugable says protected content will not play on any screen while UD-6950PDH is connected, including the built-in screen or one connected directly to the Mac. A native output alone is not a reliable workaround while the dock remains connected. The guide now advises selecting a suitable native dock or disconnecting DisplayLink for that activity.

Apple's M3 closed-lid requirements remain distinct from its M4/M5 Air support for two external screens alongside the laptop display. The guide separates MST, native Thunderbolt display streams, and DisplayLink software graphics, and applies them to three common purchase scenarios. TS4 is never described as overriding a base M1/M2 host limit. Plain USB-C fallback is not presented as proof of dual-monitor support. The examples are explicitly editorial decision paths, not hardware tests.

Primary sources:
- https://www.caldigit.com/thunderbolt-station-4/ confirms 98W host charging, host-dependent support, and video-capable downstream Thunderbolt ports versus ordinary USB-C data ports.
- https://downloads.caldigit.com/TS4/CalDigit_TS4_Manual.pdf documents the connection arrangement and supplied equipment.
- https://plugable.com/products/ud-6950pdh confirms two 4K/60Hz outputs, 100W charging, DisplayLink requirements, office-work suitability, and the macOS HDCP restriction.
- https://support.apple.com/en-us/117373 confirms M3 Air/Pro closed-lid, power, peripheral, and OS requirements.
- https://support.apple.com/en-us/122212 confirms M4/M5 Air display counts and supported single-port hub arrangements. The article does not transfer Apple's maximum refresh rates to TS4.
- https://service.anker.com/eu/article-description/What-display-modes-can-Anker-575-USB-C-Docking-Station-support confirms the Windows MST/macOS SST distinction for that dock example.
- https://www.amazon.com/dp/B09GK8LBWS confirms the TS4 identity.
- https://www.amazon.com/dp/B09TQY97MJ is also the Amazon US destination linked by Plugable and confirms model UD-6950PDH.

Unresolved: exact compatibility still depends on the reader's host, monitor models, adapters, OS, and employer driver policy. This is an intentional purchase boundary, not a promise of universal compatibility.

### Lighting: package and power clarification

The Neo can use separately purchased stand/clamp support, so the guide no longer leaves readers to infer that independent placement necessarily requires Air MK.2. It distinguishes the screen-mount package from light-only offers and adds Neo's power-source-dependent output. These specifications do not imply measured facial illumination or guaranteed glare removal. The existing head-movement/reflection exercise, independent-source isolation, and off-axis placement advice remain.

Primary sources:
- https://www.elgato.com/ca/en/explorer/products/lighting/key-light-air-mk2-vs-key-light-neo-whats-the-difference/
- https://www.elgato.com/us/en/p/key-light-neo confirms the mount options, 400/700/1,000-lumen power tiers, and 150 × 150 × 38mm panel dimensions.
- https://www.elgato.com/us/en/p/key-light-air confirms with-mount SKU 10LAM9901, panel dimensions, mount height, box contents, and USB power tiers.
- https://www.elgato.com/us/en/p/key-light-air-light-only identifies the different light-only SKU 10LAN9901.
- https://www.amazon.com/dp/B0FDBL5MVM confirms the black Neo with monitor mount, the package chosen for the commerce request.

Unresolved: no exact current Amazon US ASIN for Air MK.2 with mount was established. Both Air purchase links now lead to Elgato's official US with-mount page, and Air was removed from the proposed Creator API requests rather than forcing an Amazon search fallback. Neo remains the lighting guide's sole API pick. The older Air (for example B082QHRZFW, discovered in older listings) is not the reviewed MK.2 and must not be substituted. A direct manufacturer catalog listing is not a claim of Amazon stock.

Independent-review correction: the US pages display “Only on elgato.com,” but browser visual and accessibility-tree inspection placed that badge within the **CREATE A BUNDLE** section, below a separator from the model selector. It supports an exclusive bundle offer, not a verified claim that the standalone with-mount or light-only products are universally or permanently direct-only. The official-store-first change is based on exact-ASIN uncertainty, not an unsupported product-exclusivity claim. The guide does not assert product exclusivity.

## Commerce handoff

`batch-02-workspace-picks.json` is the requested object keyed by full route, with `batch: 2` and two existing editorial products for each Mahjong/dock guide. The lighting guide intentionally has one API pick after the review correction; its other editorial recommendation remains an official-store link. The JSON contains seven picks: five pinned primary-source ASIN identities and two exact-model discovery requests. It stores only curated query/identity constraints and editorial notes, not Amazon API product payloads, images, prices, ratings, or availability data.

- Pinned: Mojave B00SR63J2A; blue fitted cover B0753FHDC8; CalDigit TS4 B09GK8LBWS; Plugable UD-6950PDH B09TQY97MJ; black Neo with monitor mount B0FDBL5MVM.
- Unpinned: Pepper DX-XH001-A; roll-up mat YW-TR001-A.
- Official-store-only routing in this handoff, not a retail-exclusivity claim: Air MK.2 with mount 10LAM9901. Do not add an Amazon request without a newly verified exact identity.
- All picks require an exact brand. All pinned picks have discriminating title requirements. Unpinned same-name variants cannot be accepted without the stated exact model metadata. Missing model, wrong brand, adjacent item, condition, and ambiguous search results must remain fallbacks.
- No `allowAccessory` exceptions are used. If the actual response title triggers an accessory guard, preserve fallback until the integration lead has evidence for a narrow pinned-ASIN/brand/title exception; do not weaken the shared matcher or silently accept another product.

## Re-review and checks

- Re-read the final three changed articles in context and reviewed the scoped diff. The bag article is unchanged.
- Conservative whitespace-delimited reader-facing word counts excluding headings, table cells, link labels, and source sections: bags 1,158; mats 1,134; docks 1,345; lighting 1,263. All remain above the playbook's 1,000-word floor without padding.
- Balanced HTML, no duplicate H1 or new FAQ, unchanged displayed dates, valid existing relative route targets, and correct sponsored Amazon link attributes passed.
- `node --test scripts/amazon-products.test.cjs scripts/article-commerce.test.cjs`: 64 passed, 0 failed. These existing suites validate the matcher and current registry, not live batch-02 catalog coverage.
- Additional in-memory synthetic checks against all seven final proposed requests: 50 passed, covering intended identities, wrong brands/ASINs/models, missing model metadata, unwanted conditions/accessories, and ambiguous unpinned discovery. No API request was made and no product response was saved.
- Scoped `git diff --check` passed.
- Full build, browser rendering, API runtime coverage, sitemap edits, and release remain the parent integration task. This report does not claim those have run or that every pick has a live image card.

Editorial sign-off: pass with the explicit fit, driver, package, and matching boundaries above. Publish the limitations alongside the recommendations, and do not portray safe fallbacks as verified product availability.
