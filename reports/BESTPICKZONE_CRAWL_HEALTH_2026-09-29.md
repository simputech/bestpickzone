# BestPickZone crawl-health remediation — September 29, 2026

Status: deployed and verified on https://bestpickzone.com. Search Console sitemap resubmission accepted; processing pending.

## Before

- 1 broken internal destination (2 links on the personal-finance article).
- 13 redirecting internal destinations (26 link occurrences).
- 273 sitemap entries / 272 unique URLs: one redirecting entry, one duplicate entry, and 19 omitted current articles. Zero sitemap 404s or noindex/robots conflicts.
- 14 controllable alias/trailing-slash redirect chains; 4 additional HTTP-to-HTTPS sequences in sampled historical URLs.
- 30 Spanish pages unreachable from the homepage link graph, despite internal links within that section. Current English articles, including the ten September 27 guides, were already reachable through established hubs and related-content modules.
- 73 distinct directly returning 404 URLs (74 observed spellings, with one encoded duplicate removed) discovered across production crawling, repository routes/history, GSC data and recent Vercel logs. This is a discovered inventory, not a claim to enumerate arbitrary URLs or Google's entire historical request log.

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

Local production build, TypeScript and configured lint pass (existing warnings remain). All 290 final sitemap URLs are unique, canonical, indexable HTTP 200; no internal links to 404s or redirects; no important orphan pages. All 60 alias variants (plain, trailing slash and query string) reach final 200 responses in one redirect. 135 current first-party assets on the pre-release live site returned 200; all 141 referenced assets on the final live site return 200. Robots continues to allow content and block only `/api/` and `/preview/`.

The homepage canonical `https://bestpickzone.com` and sitemap `https://bestpickzone.com/` are equivalent URLs; no unnecessary homepage canonical change was made. The disclosure utility page is intentionally outside editorial sitemaps.

## Limits and follow-up

Search Console metrics are historical; a clean production crawl does not prove immediate Google recrawling/indexing or a future 404/301 percentage. HTTPS upgrades are platform infrastructure; existing HTTP-to-HTTPS sequences are preserved. No crawl-rate setting, removals request or robots block for error URLs was introduced. Google recommends preserving relevant direct redirects and returning real errors where deleted content has no replacement: [Google site-move guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).


## Final live results

| Check | Before | After |
|---|---:|---:|
| Broken internal destinations | 1 (2 links) | 0 |
| Redirecting internal destinations | 13 (26 links) | 0 |
| Sitemap redirect entries | 1 | 0 |
| Sitemap duplicate entries | 1 | 0 |
| Current articles missing from sitemap | 19 | 0 |
| Sitemap 404 / noindex / robots-blocked URLs | 0 | 0 |
| Controllable alias/slash chains | 14 | 0 |
| Important pages unreachable from homepage | 30 | 0 |

Sitemap: **290 unique URLs; 290 HTTP 200; 0 redirects; 0 404; 0 non-indexable**. The index and all six child sitemaps, plus robots.txt, return HTTP 200. Live page crawl: 427 URL spellings checked, including historical errors and normalization probes. There are no sitemap canonical mismatches. The final 73-URL broken-resource inventory records **3 restored assets, 6 permanent redirects ending in 200, and 64 retained 404s**.

Live redirect suite: **120 checks passed**, covering all 20 mappings on apex and www with plain paths, trailing slashes and query parameters. Final www normalization is a direct permanent 301 to HTTPS apex and the final path. During live verification, the redundant Vercel domain-level www 308 was removed (`redirect: null`, `redirectStatusCode: null`) after confirming middleware was deployed; this eliminated hostname-plus-path chains. Both verified domains remain assigned to the same project. Vercel's platform HTTP-to-HTTPS hop is retained; HTTP www or old HTTP paths can still require protocol upgrade followed by canonical normalization. These are distinguished from the eliminated application-controlled chains. See [Vercel domain configuration API](https://vercel.com/docs/rest-api/projects/update-a-project-domain).

Production: **READY**, project `bestpickzone-fixed` / `prj_nmIr0ohVP4y08vpuYRFDi6Lgnbao`, deployment `dpl_UiXvnXnj4JetZbZbJK2EDSthyhB3`, code commit **8ce1d95**, pushed to `origin/main`. Deployment URL: https://bestpickzone-fixed-gfgtt1d0n-simputechs-projects.vercel.app. The live custom-domain alias was inspected and confirmed. Post-deployment Vercel 5xx log scan returned no entries. Original unrelated dirty-worktree edits remain untouched.

Google Search Console accepted and confirmed `https://bestpickzone.com/sitemap.xml` at **2026-09-30 00:04:08 UTC (September 29, 8:04 PM EDT)**, with download/processing pending. This is a successful sitemap resubmission, not a claim of new indexing or improved historical Crawl Stats.

No manual action blocks the crawl fixes. Optional editorial decisions remain for the withdrawn ESP Pro comparison and unpublished Ender 3 guide; neither was replaced by an unrelated page. Restore an ads.txt only if actual authorized seller information is supplied. Let Google's normal recrawls update its historical reports.

Detailed local evidence is retained in `reports/crawl-health/` (ignored from Git and deployment). Repeat current-site checks with `python3 scripts/audit-crawl.py https://bestpickzone.com reports/crawl-health/recheck.json --check`, followed by `node scripts/verify-redirects.mjs https://bestpickzone.com` and the same command with `https://www.bestpickzone.com`.
