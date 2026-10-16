# Batch 01 remaining identity verification

Checked 2026-10-16 using public primary Amazon pages and manufacturer/publisher sources. These findings support exact-ASIN pins only; live Creator API identity, image, binding/language and link validation remain the final gates. Do not weaken the strict matchers or infer current price, stock, seller authorization or warranty from this research.

## Supported pins

### Baratza Encore ESP — B0BW272XCV

- Amazon identifies the black Encore ESP, not the standard Encore or ESP Pro, and lists 120 V.
- Amazon's visible title uses the short model text `ZCG495BLK`; a separate reviewer observed `ZCG495BLK1AUC1A`. This suffix discrepancy supports pinning the verified ASIN without adding an exact-model constraint or promising an exact model-string match.
- Retain the existing Pro exclusion.
- Amazon: https://www.amazon.com/dp/B0BW272XCV
- Manufacturer: https://www.baratza.com/en-us/product/ZCG495

### Eureka Mignon Specialita — B07GFV6HM8

- Amazon selected and landing ASINs agree on B07GFV6HM8, Matte Black. Its title identifies Specialita, 55 mm burrs and touchscreen; the specifications state 120 V. Eureka confirms the Specialita identity and 55 mm burrs.
- Do not use B07GFV4NVH from secondary search results: opening that Ferrari Red identifier returned selected black B07GFV6HM8 content. Retain the Smart exclusion and seller-warranty caution.
- Amazon's wattage and dimensions differ from manufacturer specifications. Do not copy those incidental Amazon figures into editorial claims.
- Amazon: https://www.amazon.com/dp/B07GFV6HM8
- Manufacturer: https://www.eureka.co.it/en/products/eureka%2B1920/prosumer%2Bgrinders/1/20/

### Riley Sager, The Only One Left — 0593183223

- Amazon verifies Riley Sager, English, Hardcover, Dutton, June 20, 2023, 400 pages, ISBN 9780593183229. Penguin Random House confirms this hardcover edition.
- Hardcover is the cleaner pin. Paperback 059318324X / ISBN 9780593183243 is also a genuine English Dutton print edition, but Amazon has an anomalous large-print edition label while the publisher presents its standard paperback. No paperback substitution is needed.
- Amazon hardcover: https://www.amazon.com/dp/0593183223
- Publisher hardcover: https://www.penguinrandomhouse.com/books/646708/the-only-one-left-by-riley-sager/9780593183229/
- Publisher paperback, for the caveat: https://www.penguinrandomhouse.com/books/646708/the-only-one-left-by-riley-sager/9780593183243/

### Jane Harper, The Survivors — 1250232422

- Amazon verifies The Survivors: A Novel, Jane Harper, English, Hardcover, Flatiron Books, February 2, 2021, 384 pages, ISBN 9781250232427. The publisher's Winter 2022 catalog, printed page 20, lists that hardcover ISBN among the available formats.
- The current publisher hardcover detail page is retired. Identity is supported, but live API availability is not established by these public sources.
- Paperback 1250232430 / ISBN 9781250232434 is genuine English print, but Amazon's visible title omits the leading "The". Use the verified hardcover rather than relaxing strict title matching.
- Amazon hardcover: https://www.amazon.com/Survivors-Novel-Jane-Harper/dp/1250232422
- Publisher catalog: https://www.flatironbooks.com/s/FIR_Winter-2022_05_2021.pdf
- Retired publisher hardcover page: https://us.macmillan.com/books/9781250232427/thesurvivors/
- Publisher paperback, for the caveat: https://us.macmillan.com/books/9781250232434/thesurvivors/

## Preserve unresolved fallback

### Normcore Gaggia-specific removable-basket bottomless portafilter

- Candidate B09V199Y5M is a real Normcore listing selecting Black / 58mm Fits Gaggia. It has a separate filter basket rather than the Unibody integrated-basket design.
- Amazon's compatibility copy names Carezza, Cubika Plus and Gran Gaggia models, not Classic, Classic Pro or E24. Normcore confirms a Gaggia-specific 58 mm option but does not resolve the exact Classic-family fit in the inspected primary text.
- Preserve the existing search fallback and Unibody exclusion. Do not pin this candidate while Classic-family fit remains ambiguous; generic 58 mm diameter is not adequate fit evidence.
- Amazon candidate: https://www.amazon.com/dp/B09V199Y5M
- Manufacturer: https://www.normcorewares.com/products/normcore-naked-bottomless-portafilter-with-handle

Public Amazon observations were indexed/cached page content rather than authenticated live-offer checks. No production, credentials or private preview was accessed for this research.
