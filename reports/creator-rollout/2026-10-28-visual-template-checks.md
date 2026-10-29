# Buyer diagrams and shared navigation

Three original SVG schematics added to the existing dock, Ninja container and espresso-scale articles. They use accessible descriptions, explicit width/height, lazy loading and mobile-sized text. No stock, prices, ratings or hands-on test results are depicted.

- Dock: native TS4 host → DisplayPort and spare Thunderbolt video paths; UD-6950PDH → one output per DisplayLink channel. CalDigit and Plugable sources already linked in the full article; CalDigit port mapping rechecked October 28.
- Ninja: three distinct part families, named US model examples, explicit full-suffix caveat. Current manufacturer details verified in the rendered product pages. Diagram is not physical fit testing.
- Scale: tray-to-portafilter gap less installed scale/pad and cup heights. Manufacturer dimensions rechecked; preserves the unresolved 15 vs 15.5 mm Lunar specification discrepancy and uses the conservative support figure. No machine-specific fit is inferred.

All three SVGs were visually inspected in rendered 390px pages after loading. No clipping, document overflow or broken images. Existing article-body content and disclosures remain. Shared footer uses the current section and retains book-specific columns on book pages. Ninety-nine editorial link titles from the existing ledger/build supplement the maintained SEO title map; URLs remain unchanged.

181 tests passed and the production build plus all metadata/indexability/runtime/inventory gates passed. This document records pre-release checks; production commit/deployment and live verification are recorded separately.

## Production verification

Published source `a0a6e27353e7d8dccdff1c4a372b5a44f0b5229f`, deployment `dpl_5RwBu8NCt1ZqQancUXk2sUz39QV5`; READY and apex/www aliases confirmed. All three public diagrams loaded with alt text at 390px and 1440px; no overflow. Category footers showed contextual links; the Tana French pilot retained its book footer and showed seven honest fallbacks, zero live cards. Full production guide text was reread, including conclusions and modules. Build-reported route first-load JS remained 94.4 kB and shared JS 87 kB.
