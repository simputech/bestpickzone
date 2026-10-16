# Batch 01 editorial re-review

Review date: 2026-10-16 UTC. Final scope: ten author-ranking JSON articles, nine buying guides including the Elgato pilot, and the existing Alex Michaelides pilot. This is 20 articles, not 20 new integrations. The shallow-desk monitor-arm guide was also reviewed, but the integration lead moved it to batch 02 to reconcile Alex Michaelides PR 6 in batch 01.

## Decision

- All 20 articles pass content re-review after narrow factual-clarity and source edits in three articles; the integration lead has also reconciled Alex publication metadata as noted below. No substantial editorial rewrite is justified.
- **`substantialRefresh: false` for all 20. Preserve existing article dates and sitemap editorial last-modified dates.** Adding Creator API cards, rechecking sources, or clarifying one availability sentence is not a reason to imply that the complete editorial article was newly researched.
- Do not claim 20/20 live API product coverage until the integration owner verifies rendered API results. Two known exact-product availability gaps require safe fallback rather than a substitute: My Fair Mahjong 20-inch racks and IMS B682TH24.5M baskets.
- The recommendations and compatibility explanations remain useful independently of affiliate links. All guides lead with a clear purchase decision, include real model distinctions, explain who should skip each choice, and separate manufacturer claims, calculations, and editorial reasoning from hands-on testing.
- No fabricated testing or first-person ownership experience, duplicate H1, or filler-driven rebuild was found. The ten JSON author articles and reviewed buying guides have no FAQ. Alex Michaelides retains its legacy FAQ/schema, permitted by the playbook when the article is not materially rebuilt. All guides remain comfortably above the 1,000-word editorial floor; full visible body counts run 1,367–1,893 words before small edits and include some headings/table labels. All ten author articles also exceed the floor.
- Raw-guide validation passes: every Amazon link uses `althcu-20`, `target="_blank"`, and `rel="sponsored noopener"`. All relative content links resolve to an existing static route or registered content slug. The existing shared guide renderer supplies the H1, above-fold affiliate disclosure, decision visual, and Article metadata.
- No article-date metadata, shared component, sitemap, commit, or deployment was changed by this reviewer. Alex publication-date consistency and API edits are tracked separately from the content review. Build, responsive render, API compliance, edition matching and live publication checks remain release gates owned by the integration lead.

## Exact changes

1. `content/buying-guides/kitchenaid-pasta-roller-vs-pasta-press.html`: clarified that KitchenAid marks the secondary metal KSM3MPA model “Available soon” and that a catalog entry does not prove ready-to-ship inventory. This does not change the primary KSMPRA/KSMPSA/KSMPEXTA recommendations.
2. `content/buying-guides/best-bottomless-portafilters-gaggia-classic-pro.html`: replaced the undated “Our Amazon search currently returns…” IMS availability assertion with an explicit reference to the article's September 30 marketplace check. The exact-model fallback and prohibition on substituting B70/Breville baskets remain. If integration obtains a current exact verified B682TH24.5M listing, reconcile that warning with the verified result before release.

3. `app/books/authors/best-alex-michaelides-books/page.tsx`: corrected the Silent Patient US hardcover to 336 pages and Maidens US hardcover to 352 pages; labeled the editions; changed the unsupported “most divisive” reception claim into an explicit editorial recommendation; added direct author/publisher source links and an edition/format warning. Existing ranking and prose were otherwise retained.

These edits were re-read in context and checked in the diff. No other guide body or author JSON was changed.

## Buying-guide decisions and current primary-source checks

### 1. KitchenAid pasta roller vs. pasta press

Result: retain, with the small availability clarification above. The traditional roller, three-piece cutter set, plastic 3-in-1, metal 3-in-1 and six-disc press are correctly distinguished. Dry-clean roller guidance and the press's mixed part-cleaning instructions remain accurate. Shape and workflow examples add value without claiming measured output. Substantial refresh: no.

Primary sources checked:
- https://www.kitchenaid.com/countertop-appliances/stand-mixers/attachments/pasta
- https://www.kitchenaid.com/countertop-appliances/stand-mixers/attachments/p.gourmet-pasta-press.KSMPEXTA.html
- https://producthelp.kitchenaid.com/Countertop_Appliances/Stand_Mixer_Attachments/Pasta_and_Grains/Pasta_Sheet_Roller/Cleaning_the_Pasta_Sheet_Roller_Attachment
- https://producthelp.kitchenaid.com/Countertop_Appliances/Stand_Mixer_Attachments/Pasta_and_Grains/Pasta_Press/Cleaning_the_Pasta_Attachment_and_Accessories

### 2. Pizza peels for Ooni Koda 12

Result: retain. Ooni still explicitly approves the 12-inch perforated peel and excludes the 14-inch for Koda 12. Standard perforated and bamboo dimensions match. The current turning-peel family has 7-inch and 9-inch choices; the article correctly recommends only the compact variant and separates launching, retrieval and turning. It does not transfer Signature or Koda 2 dimensions. Substantial refresh: no.

Primary sources checked:
- https://ca.ooni.com/products/ooni-perforated-pizza-peel
- https://ooni.com/products/ooni-pizza-turning-peel
- https://ca.ooni.com/products/ooni-wooden-pizza-peel

### 3. Mahjong racks and pushers for oversized tiles

Result: retain. My Fair Mahjong's two named tile-size examples, 20-inch racks, included matching pushers and acrylic exposure-shelf guidance support the conditional recommendations. YMI's 18.4-inch overall rack and smaller usable tile space remain an appropriate counterexample, not an alternative oversized recommendation. Hand/wall calculations are correct and explicitly illustrative. Substantial refresh: no.

Commercial gap: no exact Amazon availability claim should be added without a current exact API result. Preserve direct manufacturer context and suppress unmatched product cards. The article already makes that limitation explicit; ordinary 18-inch or unrelated-brand results are not suitable substitutes.

Primary sources checked:
- https://myfairmahjong.com/products/acrylic-mahjong-racks
- https://myfairmahjong.com/products/wooden-painted-mahjong-racks-20-set-of-4-blue-and-pink-sets-magnetic-attached-pusher
- https://www.ymimports.com/products/us-rl006-a

### 4. Ninja CREAMi container compatibility

Result: retain. Current Ninja product pages confirm the distinct XSKPLID2CD, XSKPNTLD2 and XSK7PNTLD2 families, listed NC601 variants for XL, and the Swirl NC700/NC701/NC701Q/CN701CO list. The Deluxe page still has conflicting legacy NC500-only wording alongside an explicit NC500/NC600 list, which the article already flags. Equal-capacity Original and Swirl pints are correctly kept separate. Substantial refresh: no.

Primary sources checked:
- https://www.sharkninja.com/ninja-creami-pints-2-pack-compatible-with-nc299amz-nc300s-nc350s-series-creami-ice-cream-makers/XSKPLID2CD.html
- https://www.sharkninja.com/ninja-creami-xl-tubs-2-pack-compatible-with-nc500600-series-creami-ice-cream-makers/XSKPNTLD2.html
- https://www.sharkninja.com/ninja-creami-scoop-swirl-2-pack-pints-and-lids/XSK7PNTLD2.html

### 5. Stream Deck MK.2 vs. MX Creative Console

Result: retain. Current primary sources confirm 15 LCD keys and dimensions without the stand for MK.2, full-console dialpad/keypad distinction, wider app integrations, and the September 8, 2026 standalone MX Keypad launch at a dated $99.99 launch figure. No current Amazon price is implied. The article properly warns against using historical OS minima as today's software guarantee. Substantial refresh: no.

Primary sources checked:
- https://help.elgato.com/hc/en-us/articles/18208816152333-Elgato-Stream-Deck-MK-2-Technical-Specifications
- https://www.logitech.com/en-gb/products/keyboards/mx-creative-console.html (redirects to current shop page)
- https://news.logitech.com/press-releases/news-details/2026/Logitech-Unveils-MX-Keypad-for-Developers-The-Customizable-Multi-App-AI-Control-Center/default.aspx

### 6. Espresso grinders for Gaggia Classic Pro

Result: retain. Baratza's manual confirms the ESP espresso range and 58mm transfer adapter; 1Zpresso confirms J-Ultra's 8-micron burr movement and 100 clicks per turn; Eureka confirms Specialità's 55mm flat burrs and stepless system. The article does not confuse burr movement with particle size or timed dosing with measured dose weight. Worked dose/yield examples are explicitly conditional on basket fit. Substantial refresh: no.

Primary sources checked:
- https://assets.breville.com/ZCG495/manual-encoreesp-v1-0-en-010923.pdf
- https://1zpresso.coffee/manual-jultra-en/
- https://www.eureka.co.it/en/products/eureka+1920/prosumer+grinders/silent+range/20.aspx
- https://www.gaggia-na.com/products/gaggia-classic-pro
- https://fellowproducts.com/products/ode-brew-grinder-gen-2

### 7. Bottomless portafilters for Gaggia Classic Pro

Result: retain, with the small historical marketplace-check clarification above. KNODOS explicitly identifies Gaggia lugs, Classic Pro/E24/Evo fit and included 18–21g basket. Normcore's Gaggia-specific removable-basket family is separate from Unibody and other machine variants. IMS confirms B682TH24.5M dimensions and tamper specification. The article correctly avoids a universal 58mm fit claim or promising improved extraction from a hollow handle. Substantial refresh: no.

Primary sources checked:
- https://www.knodos.com/product/58mm-bottomless-portafilter-for-gaggia-classic
- https://www.normcorewares.com/products/normcore-naked-bottomless-portafilter-with-handle
- https://www.imsfiltri.com/filters/B682TH24.5M.html
- https://www.gaggia-na.com/products/gaggia-classic-pro

### 8. Daring Greatly vs. The Gifts of Imperfection

Result: retain. Brown's descriptions support the vulnerability/perfectionism decision, and Hazelden confirms the ten-guidepost structure. Brown's anniversary guidance supports keeping an existing edition for the companion material rather than buying another copy automatically. Reader-fit recommendations, email/work examples and suggested practices are clearly the site's analysis, not quotations or invented scenes. Substantial refresh: no.

API selection: require the original books by **Brené Brown**, not third-party summaries, journals, workbooks or bundles. Base titles are **Daring Greatly** and **The Gifts of Imperfection**; preserve visible format/edition accuracy. No ASIN has been guessed in this review.

Primary sources checked:
- https://brenebrown.com/book/daring-greatly/
- https://brenebrown.com/book/the-gifts-of-imperfection/
- https://www.hazelden.org/store/item/550281
- https://brenebrown.com/articles/2020/08/03/celebrating-10-years-of-the-gifts/

### 9. Folding tables for Mahjong

Result: retain. COSCO confirms the XL 38.5-inch fold-in-half format, 29.5-inch overall height and stated weight; its 34-inch vinyl model supports the stated weight and 1.5-inch folded-thickness claim. The guide correctly refuses to equate overall height with clear knee height or accessibility for an individual. Area and five-inch-band calculations are accurate. Substantial refresh: no.

Selection caveat: the 34-inch manufacturer page contains an inconsistent “6’ FIH” variant label. Match model 14696 and the 34-inch square vinyl top, not that label; the 38.5-inch model is 14036. Do not silently substitute a rectangular table.

Primary sources checked:
- https://www.coscoproducts.com/products/xl-38-5-fold-in-half-card-table-w-handle
- https://www.coscoproducts.com/products/34-vinyl-top-folding-table

### Deferred to batch 02: Monitor arms for shallow desks

Result: retain. VIVO still specifies STAND-V001's 22 lb limit, 17-inch pole, 16-inch extension, VESA patterns and 3.25-inch maximum desk thickness. Ergotron's LX Pro sheet supports the 4–22 lb load, 13-inch lift, 25-inch extension and rotation stop. The article does not confuse reach with retraction or promise zero wall clearance. Its viewing-distance example is geometry, not an ergonomic prescription. Substantial refresh: no.

Selection caveat: the named LX Pro 45-682 family is the two-piece-clamp single desk arm. Other LX Pro grommet/dual/tall-pole SKUs are not automatically the same selected kit; legacy LX is a different product.

Primary sources checked:
- https://vivo-us.com/products/stand-v001
- https://www.ergotron.com/en-ca/lx-pro-monitor-arm
- https://media.ergotron.com/reserved/resources/specs-lx-pro-series-ea-orig.pdf

## Author-ranking articles (10–19)

An independent full-body review of all ten author JSON files is documented in `batch-01-author-editorial.md`, including current primary source URLs and per-page reasoning. All ten pass without edits and retain their October 14 dates:

10. Anthony Horowitz: current Hawthorne sequence and 2026 A Deadly Episode already covered.
11. Freida McFadden: numbered Housemaid novels correctly separated from the Wedding short story.
12. Gillian Flynn: three novels and shorter The Grownup correctly distinguished.
13. Jane Harper: Falk trilogy and standalone Last One Out scope correct.
14. Lisa Jewell: Family and Jane Trevally reading connections correct.
15. Lucy Foley: contemporary thriller shortlist distinguished from 2026 Miss Marple continuation.
16. Riley Sager: 2026 The Unknown acknowledged without a false exhaustive-ranking claim.
17. Ruth Ware: Suite 11 follow-up relationship correctly identified.
18. Shari Lapena: Getting Away with Murder's 2026 release and premise current.
19. Tana French: The Keeper correctly completes the separate Cal Hooper trilogy.

## 20. Alex Michaelides existing pilot

Result: retain after the narrow corrections listed above. The official author catalog continues to identify The Silent Patient, The Maidens and The Fury. Publisher descriptions support the premises, protagonists and original US publication dates. The hardcover page counts in the old page mixed editions; the revised entries now name the formats. The Fury remains 320 pages in the checked publisher edition. The reading-order recommendation is preference-based, not a serial prerequisite. The legacy FAQ remains because this is not a material rebuild.

Substantial refresh: **no**. The integration lead corrected the pre-existing metadata inconsistency: helper `publishedTime` now matches the visible/Article JSON-LD June 13, 2026 publication date, with June 26 modification preserved. This is historical consistency, not a freshness bump.

Primary sources checked:
- https://www.alexmichaelides.com/
- https://us.macmillan.com/books/9781250301697/thesilentpatient/ (US hardcover, 336 pages, February 5, 2019)
- https://us.macmillan.com/books/9781250304452/themaidens/ (US hardcover, 352 pages, June 15, 2021)
- https://us.macmillan.com/books/9781250759009/thefury/ (publisher edition, 320 pages, January 16, 2024)

The exact US hardcover Fury page returned 403 during this check; the accessible publisher edition verifies premise/date and the 320-page count. API edition identity remains separately validated by title, author and the curated ASIN.

## Independent integration-identity re-review

Initial synthetic catalog tests exposed five accepted wrong variants: Encore ESP Pro, Mignon Specialità Smart, Normcore Unibody, LX Pro Dual and 9-inch Ooni turning peel. These were synthetic fixtures, not claims about actual Amazon responses.

After the integration lead added per-pick exclusions, required title terms and a model-prefix capability, ten fixtures against the actual batch-01 registry pass: incorrect ESP Pro, Specialità Smart, Unibody, 9-inch Ooni and pusher-less My Fair items are rejected; corresponding intended products are accepted. The LX Pro constraint is recorded for batch 02, which must preserve the 45-682 single clamp-arm family.

The Elgato pilot's `grandparentsgift-20` card attribution exception was raised and explicitly confirmed by the integration lead from the existing production source and approved pilot placement; it remains intentionally separate from the article-body `althcu-20` links. No new attribution decision was made by this reviewer.

## Creator API handoff

`batch-01-product-queries.json` contains 26 selected candidates across ten reviewed guides (nine batch-01 guides and the deferred batch-02 monitor-arm guide): two or three exact product queries per article, expected brand/model or book title/author, and rejection/variant constraints. Existing article ASINs can seed API lookup but are not independently certified merely by appearing in older HTML. Current API data must match the expected product before display.

Final content/identity review passes, with Alex publication metadata reconciled; build/render/live release gates remain with the integration lead. Product integration must preserve those identities and the existing limitation language. Do not change recommendations to whatever the API happens to return. Do not present an unmatched result, fallback search or empty response as a verified listing. None of the reviewed content requires a substantial-refresh sitemap update.

## Final source QA

A second source review verified the original Gillian Flynn GetItems contract and pilot-tag forwarding. Offline regression tests now detect broken image fallbacks, missing images, incorrect image-link ASINs, wrong pilot tags, malformed caller data and adjacent product variants. The author renderer has one Amazon content disclaimer, not two. All 85 non-browser tests pass; typechecking and whitespace checks pass. These checks do not establish live API success. Protected preview browser verification and production verification remain outstanding.
