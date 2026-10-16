# BestPickZone Creator API rollout inventory

Generated: 2026-10-16T22:39:41.970Z
Pinned baseline commit: `48009045041c0129328f8769b9d4487d7e7c900c`

## Canonical scope

**299 canonical editorial URLs: 274 English and 25 Spanish.** This is the complete enumerated repository scope, not an artificial page target. Independently checked against all six sitemap groups: no missing article and no sitemap-only route.

Excluded separately: 21 navigation/category hubs, 11 deal-discovery/category hubs, 4 deal tools and 2 legal pages (38 total). Service explainers remain in the editorial inventory as exceptions, including the Prime-trial video.

| Section | Canonical articles |
| --- | ---: |
| amazon-offers | 11 |
| beauty | 13 |
| books | 164 |
| coffee | 21 |
| es | 25 |
| home-kitchen | 29 |
| mahjong | 12 |
| tech | 5 |
| wfh | 19 |

## Existing API coverage

**5 of 299 pages have API-capable render paths; 294 do not.** This is source-level coverage only. No credential, live response, exact match or deployed success is asserted by this inventory. There are no direct page-level API imports.

- Gillian Flynn and Freida McFadden: AmazonAuthorRankingArticlePage → getAmazonBooks → AuthorRankingArticlePage/AmazonBookCard.
- Breville Bambino Plus vs Gaggia Classic Pro: ProductComparisonPage → searchAmazonProduct.
- Alex Michaelides: two supplemental OrganicPilotProductCard queries, not coverage of every recommendation.
- Elgato Stream Deck MK.2 vs Logitech MX Creative Console: two supplemental OrganicPilotProductCard queries, separate from the researched guide body.

The other 8 AuthorRankingArticlePage routes do not fetch API data merely because that renderer imports AmazonBookCard. The bookProducts prop is absent; those pages use BookCTA search-link fallbacks.

## Renderer/source coverage

| Active renderer | Article count | Source |
| --- | ---: | --- |
| AmazonServiceArticlePage | 10 | app/amazon-offers/[slug]/page.tsx + lib/bounty-data.ts + content/bounties/*.html |
| AmazonServiceVideoPage | 1 | app/amazon-offers/prime-day-trial-video/page.tsx + lib/bounty-video.ts |
| StandaloneJsxArticlePage | 94 | Dedicated app/**/page.tsx |
| RawHtmlArticle | 25 | Dedicated page.tsx + article-source.html via lib/raw-html-article.ts |
| HtmlComparisonArticlePage | 17 | beauty/coffee/wfh [slug] routes + lib/comparison-html-articles.ts |
| AuthorRankingArticlePage | 10 | Dedicated author route + content/author-rankings/*.json |
| DynamicBookArticlePage | 96 | app/books/[slug]/page.tsx + lib/books-data-part1.ts through part5.ts |
| ResearchedBuyingGuide | 18 | Dedicated route + lib/buying-guide-data.ts + content/buying-guides/*.html |
| StandaloneHtmlArticlePage | 1 | Used-Breville eBay page + sibling article-source.html |
| ProductComparisonPage | 1 | Bambino/Gaggia route + components/article/ProductComparisonPage.tsx |
| SpanishArticlePage | 25 | app/es/[[...slug]]/page.tsx + lib/spanish-site-data.ts |
| CommerceShowdownArticlePage | 1 | Avocado comparison route + lib/home-kitchen-showdowns.ts |

Four dynamic-book data records are rendered by dedicated pages: Mark Manson, Stephen King, people who do not like reading, and true crime. The Elgato route overrides one dynamic WFH comparison. Those five records are not counted as additional articles. The two migrated book URLs and all legacy aliases are recorded as redirects rather than rollout pages.

## Affiliate tags and exceptions

- Standard Amazon product links: althcu-20. API tag precedence is AMAZON_ASSOCIATE_TAG, then NEXT_PUBLIC_AMAZON_TRACKING_ID, then althcu-20. Some fallback components hardcode althcu-20, so environment overrides must be checked for consistency.
- Amazon membership/service CTAs: fitnessbankd-20. Preserve the bounty program and its actual destination.
- Existing eBay campaign ID: 5339164184.
- 276 pages are candidates for product-focused review. This is not a guarantee that every recommendation belongs on Amazon.
- 11 Amazon-service/video pages are product-API exceptions.
- 6 eBay-intent pages are exceptions, including the Spanish portable-monitor article. Do not replace used/vintage/refurbished intent with unrelated new products.
- 1 official-source exception: best-mahjong-cards. Its core recommendations point directly to the National Mah Jongg League; Amazon may support the optional accompanying set, not replace the official card.
- 5 informational-intent reviews: choosing a Mahjong set, set vs card, and the vitamin C/niacinamide, retinol/bakuchiol, and salicylic acid/benzoyl peroxide explainers. Add product cards only where they genuinely help. Skincare and health-related claims require current primary-source verification.

## Dates and product candidates

The JSON records existing content dates and effective sitemap lastmod independently. The latest author-ranking editorial date is 2026-10-14. Researched buying guides use 2026-09-27 or their specific 2026-09-30 refresh date. Spanish entries use 2026-07-07; Amazon-service entries use 2026-10-03. Other pages retain their own recorded dates.

The historical sitewide 2026-07-01 fallback is deliberately omitted by the XML renderer. It must not be treated as proof of a page-level refresh. Four duplicate sitemap input entries are safely deduplicated by the existing buildSitemapXml implementation; this is not evidence of four duplicate canonical pages.

Extracted 1,653 source-grounded candidate references, including 1,154 distinct search queries and 227 distinct existing ASINs. These are leads, not newly verified catalog matches. No eligible product-review page lacks a source candidate. Each candidate records its extraction evidence and unverified status.

Spanish book candidates explicitly retain libro en español queries. Any API match must verify language, edition and marketplace, not silently substitute the English-language edition.

## Durable review queue

**15 batches: 14 batches of 20 and a final batch of 19.** All 299 editorial pages get a review disposition; unsuitable pages may be signed off as exceptions instead of receiving retail cards.

Batch 1 is locked to all 10 author-ranking JSON routes plus the first 9 lib/buying-guide-data.ts entries, through best-folding-tables-for-mahjong, plus Alex Michaelides to reconcile the PR 6 exact-ASIN pilot matching bug. Gillian Flynn, Freida McFadden, Elgato and Alex Michaelides count among the 20 reviewed pages even though they already have some API wiring.

Batch 2 starts with best-monitor-arms-for-shallow-desks, then the other 8 remaining researched buying guides, then the 9 dynamic coffee comparisons. Subsequent work prioritizes commercial templates, standalone recommendations, dynamic books, Spanish articles and intent-specific exceptions. Individual medical/edition/marketplace flags remain attached.

The queue has per-page review status, refresh scope and sitemap-update decision fields. Only substantial editorial refreshes should change the page’s modification date and sitemap lastmod. Publish each reviewed batch only after the release checks pass; verify production before beginning the next batch.

## Files and verification

- canonical-article-inventory.json: full canonical map, excluded routes, sources, candidates, tags, dates, API coverage and review flags.
- rollout-queue.json: all 299 pages, grouped into the locked initial batch and subsequent batches of up to 20.
- validation.json: passed uniqueness, completeness, batch-size, source-file, sitemap, tag, Spanish and baseline-coverage checks.
- build-inventory.cjs / inspect-data.cjs: reproducible read-only inventory generator pinned to a git commit. Only the report directory is written. Regeneration preserves existing per-page review/publication progress.
- validate-inventory.cjs: inventory integrity checks.

No site content, shared component, sitemap, external service or deployment was modified by this inventory task.
