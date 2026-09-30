# BestPickZone crawl-health remediation — September 29, 2026

Status: tested locally; production verification pending.

## Before

- 1 broken internal destination (2 links on the personal-finance article).
- 13 redirecting internal destinations (26 link occurrences).
- 273 sitemap entries / 272 unique URLs: one redirecting entry, one duplicate entry, and 19 omitted current articles. Zero sitemap 404s or noindex/robots conflicts.
- 14 controllable alias/trailing-slash redirect chains; 4 additional HTTP-to-HTTPS sequences in sampled historical URLs.
- 30 Spanish pages unreachable from the homepage link graph, despite internal links within that section. Current English articles, including the ten September 27 guides, were already reachable through established hubs and related-content modules.
- 74 distinct directly returning 404 URLs discovered across production crawling, repository routes/history, GSC data and recent Vercel logs. This is a discovered inventory, not a claim to enumerate arbitrary URLs or Google's entire historical request log.

## Evidence and interpretation

GSC Crawl Stats (last updated September 27): 1,385 requests, 64% 200, 19% 404, 17% 301; refresh 88%, discovery 12%, response time 200 ms, no host problems. The 404 drilldown reports 261 requests and provides 204 examples. Of those examples, 91 are `/ads.txt`, 17 are `/favicon.ico`, and 38 are retired RSS/comment/feed requests. The 301 export contains 180 examples: 76 HTTP `/ads.txt` requests and 21 HTTP apex homepage requests. Samples are not the full request population; counts must not be extrapolated into guaranteed reductions.

GSC Links shows eight external links, all from medium.com, pointing to the homepage (6), `/books/authors` (1), and `/wfh` (1). All destinations are healthy. GSC search data queried January 1–September 26 returned 166 landing pages. Recent Vercel 404 evidence contains 50 unique request IDs plus grouped-path results; log availability and sampled GSC examples limit historical completeness.

## Changes

1. Correct the two James Clear links and preserve the incorrect published route as an exact permanent alias.
2. Replace 26 internal links to 13 legacy destinations with final URLs, including generated book cards, related-content links and older HTML articles. Structured list URLs use the same canonical book-path helper.
3. Canonicalize the true-crime sitemap entry, deduplicate entries at generation time, validate sitemap origins and reject queries/fragments, add 19 existing editorial pages, and derive sitemap-index modification dates from child entries.
4. Add a useful Spanish-language footer navigation link, reconnecting the existing 30-page section without adding pages.
5. Consolidate exact aliases, www normalization and trailing-slash normalization into one middleware redirect. Preserve all 14 legitimate existing aliases. Add six exact aliases: James Clear, affiliate disclosure, Books category and three old XML sitemap endpoints. Remove the unsupported catch-all `/:year/:month/:rest* -> /books`; unrelated retired content remains 404.
6. Restore favicon and Apple touch-icon compatibility URLs using the existing site artwork. No seller records, replacement articles, blanket homepage redirects, URL renames or broad design/content changes.
7. Add repeatable crawl, asset and redirect verification scripts. Initialize ESLint; existing JSX punctuation is reported as warnings rather than rewriting unrelated editorial copy.

## Redirect table

See `crawl-health-redirects.csv` for all 20 mappings. Every destination is verified separately; six are new and 14 preserve existing redirects.

## Complete discovered 404 table

See `crawl-health-404-inventory.csv` for every discovered URL, source, A–G classification and resolution. Historical malformed URLs, retired travel/entertainment content, feeds and probes without relevant replacements remain 404. `/ads.txt` remains 404 because no current authorized seller configuration was found. The old ESP Pro comparison has historical traffic but does not exactly match the current Encore ESP comparison; it remains 404 pending a content decision. The unpublished Ender 3 article in the original checkout is preserved and is outside this release.

## Verification

Local production build, TypeScript and configured lint pass (existing warnings remain). All 290 final sitemap URLs are unique, canonical, indexable HTTP 200; no internal links to 404s or redirects; no important orphan pages. All 60 alias variants (plain, trailing slash and query string) reach final 200 responses in one redirect. 135 current first-party assets on the pre-release live site return 200. Robots continues to allow content and block only `/api/` and `/preview/`.

The homepage canonical `https://bestpickzone.com` and sitemap `https://bestpickzone.com/` are equivalent URLs; no unnecessary homepage canonical change was made. The disclosure utility page is intentionally outside editorial sitemaps.

## Limits and follow-up

Search Console metrics are historical; a clean production crawl does not prove immediate Google recrawling/indexing or a future 404/301 percentage. HTTPS upgrades are platform infrastructure; existing HTTP-to-HTTPS sequences are preserved. No crawl-rate setting, removals request or robots block for error URLs was introduced. Google recommends preserving relevant direct redirects and returning real errors where deleted content has no replacement: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes.
