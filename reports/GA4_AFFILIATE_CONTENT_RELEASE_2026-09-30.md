# BestPickZone analytics and commercial content release

## Release scope

Three new articles answer distinct buying decisions, after inspecting the repository's static and dynamic routes, titles, headings, content, category links, and the complete production sitemap. `analytics-content-inventory-2026-09-30.json` records all 290 pre-release production URLs with HTTP status, headings, and internal links. No exact-intent collision was found. The existing Gaggia upgrade roundup and Brené Brown author roundup retain their broad purpose; the new pages cover grinder selection, portafilter fit, and a two-book decision respectively. The existing Bambino grinder guide addresses a different machine.

- https://bestpickzone.com/coffee/best-espresso-grinders-gaggia-classic-pro
- https://bestpickzone.com/coffee/best-bottomless-portafilters-gaggia-classic-pro
- https://bestpickzone.com/books/daring-greatly-vs-the-gifts-of-imperfection

The parent articles link to these guides; both Gaggia guides link back and cross-link, and the book comparison links back to the author guide. The coffee, books, and self-help hubs and normal sibling modules provide additional paths. Dynamic sitemaps include the three canonical URLs. Existing shared article metadata, Article/Breadcrumb structured data, disclosure, and responsive layout are reused. No FAQ, invented hands-on testing, fixed marketplace price, or review score was added.

## What the traffic evidence establishes

Read-only Data Bloo/GA4 queries for property 471286075, September 24–30, reproduce the supplied 97 Direct sessions with zero engaged sessions. All reported hostnames were `bestpickzone.com`; this report did not find preview or localhost visits in that period. Singapore's 66 Direct desktop Chrome visits spread across current and legacy URLs, with empty referrers and widely varying browser versions. China included eight Android WebView visits reporting version 75.0.3770.156 and older desktop Chrome. Other Direct rows include old Safari versions. These patterns are consistent with automated external browsing but do not identify an operator or prove that every Direct visitor is a bot.

No IP/ASN/request-log evidence was available to tie those sessions to a named crawler, monitor, or browser agent. Do not claim the 97 sessions have been eliminated. Client code cannot stop external browsers that impersonate ordinary visitors or forged analytics collection requests. No country, device, Direct-channel, or user-agent-string blocking was introduced.

Repository searches covered GA/gtag/GTM IDs, events, shared utilities, global listeners, route/layout effects, monitoring, crawler code, and deployment workflows. There is one gtag integration, no GTM container or server-side Measurement Protocol sender, and no application-level scheduled JavaScript monitor found. Existing Python HTTP crawl checks do not execute JavaScript. Vercel's production GA measurement variable was production-scoped already; the old code nevertheless lacked explicit production-environment/hostname protection and suppression for controlled browser tests. Those risks are now guarded; they are not asserted to be the historical cause.

## Implemented analytics behavior

`lib/visitor-analytics.ts` allows initialization only when the root layout passes both production Node and production Vercel environment checks, the browser is HTTPS on the canonical apex `bestpickzone.com`, a measurement ID exists, and no automation opt-out applies. Localhost, preview deployment hosts, development/test builds, webdriver browsers, explicit monitoring flags, and opted-out sessions do not load gtag or send application events. The www host redirects to the apex.

For controlled browser monitoring, set `window.__BPZ_DISABLE_ANALYTICS__ = true` in an initialization script before application JavaScript, or make the first visit with `?bpz_analytics=off`. The query opt-out persists in sessionStorage for that tab. Start with a fresh context; adding a flag after a tag has already loaded cannot undo earlier hits. These controls do not use geographic or user-agent guesses.

A window singleton prevents repeat initialization. One gtag config owns the initial page view. Production Enhanced Measurement already has browser-history page changes enabled; it owns SPA/back/forward page views. The former route-level manual page-view calls are removed. Do not add manual route events while this setting remains enabled.

The global affiliate listener previously emitted both `affiliate_click` and a network-specific event such as `amazon_click` for one physical activation. That is the confirmed duplicate source. GA4's matching page totals (Gaggia 5+5, Brené 2+2) represent seven apparent affiliate actions, not fourteen independent conversions.

The listener now sends only `affiliate_click`, with `affiliate_network`, `destination_domain`, `page_path`, `page_location`, `link_url`, `link_text`, `product_name`, `product_category`, and `article_slug`. Existing compatibility parameters remain where useful. A reference-counted subscription and idempotent cleanup prevent duplicate listeners across mounts. Primary/keyboard clicks and middle-click auxclick are mutually exclusive. No preventDefault, navigation timer, or redirect wrapper is used.

All new Amazon links retain `althcu-20`, `target="_blank"`, and `rel="sponsored noopener"`. Direct publisher/manufacturer-backed destinations are used for Daring Greatly (1592407331) and the KNODOS Gaggia rosewood handle (B0C7CY4RRQ); exact-model Amazon searches follow the existing fallback architecture for other recommendations. The IMS B682TH24.5M search is explicitly identified as an availability fallback: its exact listing was not confirmed in current results, and the article warns against buying the different IMS/Breville models returned instead.

## Required GA4 administration (not changed by repository deployment)

The connected analytics capability is read-only. Perform these changes in the BestPickZone GA4 property; repository deployment cannot modify them:

1. Open **Admin → Data display → Events → Key events** (or the Key events list in the current Admin UI). Remove the key-event designation from `amazon_click`. Keep `affiliate_click` marked as a key event, with counting method **Once per event**. Do not add the generic Enhanced Measurement `click` event as a second affiliate key event. If eBay's old `ebay_click` is marked, retire its key-event designation too; the canonical event covers both networks.
2. Inspect **Events → Create event / Modify event** rules for any rule copying `affiliate_click` into `amazon_click` or copying generic outbound clicks into another business conversion. Disable only a confirmed duplicate rule. No such rule was proven from the read-only reporting API. The downloaded production tag also marks `manual_event_PAGE_VIEW` as a conversion: if that remains marked in Admin, remove its key-event designation so page viewing is not reported as a purchase-intent action.
3. Under **Data collection and modification → Data streams → BestPickZone web stream → Enhanced measurement → gear → Page views → advanced settings**, retain page-load tracking and **Page changes based on browser history events**. The application intentionally relies on this auto page-view owner. If switching to manual page views later, disable the automatic owner first and test both initial load and SPA navigation.
4. Under **Data display → Custom definitions → Create custom dimension**, register event-scoped `affiliate_network`, `product_name`, `product_category`, `article_slug`, and `destination_domain` if they are not present. Use existing built-in Link URL and Page path/location dimensions where available. Avoid registering complete URLs as extra custom dimensions solely for counting; they can create high cardinality.
5. In **Reports → Acquisition → Traffic acquisition**, set the date range and add comparisons for **Session default channel group = Organic Search** and **Direct**. Restrict the analysis to **Host name exactly matches bestpickzone.com** (use an Exploration segment/filter if the report's comparison picker does not expose hostname). Select `affiliate_click` in the Key events selector instead of “All events.” Report organic engagement and Direct engagement separately. This isolates interpretation; it does not delete Direct traffic or prove it fraudulent.
6. Create an **Explore → Free form** diagnostic table with Host name, Session default channel group/source/medium, Landing page + query string, Country, Browser, Browser version, and Device category, plus Sessions, Engaged sessions, Engagement rate, Views, and Event count. For affiliate analysis use Event name exactly `affiliate_click` and Page path + query string. Use date/hour breakdowns alongside request logs if investigating another spike. Do not sum `amazon_click` and `affiliate_click` for the historical duplicate period.
7. Only for confirmed staff/monitor IP addresses, use **Data streams → web stream → Configure tag settings → Show all → Define internal traffic**, set `traffic_type=internal`, then **Admin → Data collection and modification → Data filters → Internal traffic**, Exclude with initial state **Testing**. Validate the Test data filter name dimension before making it Active. Never use whole countries or all Direct traffic as internal-traffic definitions. Developer traffic filtering requires actual debug-mode traffic; it is not a substitute for the code's preview/hostname guard.

Key-event changes and data filters do not repair historical reports, and active exclusion is prospective and irreversible for collected data. No property filter was activated as part of this release. A future seven-day comparison is needed before claiming improved traffic quality.

References: [Google page-view guidance](https://developers.google.com/analytics/devguides/collection/ga4/views), [SPA measurement](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications), [Enhanced Measurement history events](https://support.google.com/analytics/answer/13128484?hl=en).

## Verification method

`npm run lint`, `npm run typecheck`, and a production build are required. Lint has existing warning-only findings in legacy content. The browser regression script uses the actual production gtag configuration but intercepts every analytics/advertising collection endpoint, so tests do not create real visitor sessions. Amazon navigation is captured in that suite; actual Amazon destinations are separately inspected in the in-app browser at desktop and mobile widths. Search listings can change after verification.

Run the suite with an installed Playwright or set `PLAYWRIGHT_MODULE_PATH` to the bundled workspace Playwright directory, and `PLAYWRIGHT_CHANNEL=chrome` when using the installed Chrome binary:

```sh
node scripts/verify-analytics.cjs http://localhost:3107
node scripts/verify-analytics.cjs https://bestpickzone.com
```

The local fixture must be built with `VERCEL_ENV=production` and the production measurement ID to exercise the positive path; it is served through an intercepted HTTPS apex in an isolated browser. The script separately verifies localhost, preview hostname, false production flag, webdriver, explicit monitoring flag, and persistent query opt-out. No test hits are submitted to GA4.

For each new page and each viewport, the suite checks HTTP 200, one H1, one self-canonical, index/follow, Open Graph URL, Article schema, meaningful body length, no viewport overflow, sponsored tagged links with product context, and one canonical event for every affiliate activation. Desktop also tests middle-click, Shift/Meta modifiers, keyboard activation, SPA navigation, repeat initialization, and listener cleanup. GA4 `/g/collect` is counted separately from Google's additional Ads conversion transport: two network endpoints for the same event are not two GA4 business events.

Production deployment evidence and final results are recorded after release in the companion verification JSON. The website being live and sitemap-listed is not proof of Google indexing.

## Verified production outcome

Commit `59ea8eb802de87cdd38dde30c04f8229bec0ed08` deployed Ready as `dpl_Fa91vSNUK4ZkmYpZG46kn237wKY9`, with both apex and www aliases. The live-domain browser suite passed: 21 desktop activations produced 21 GA4 affiliate events, and 16 mobile activations produced 16; neither emitted `amazon_click`. Initial, SPA, and back-navigation page views were counted once each (five desktop page views across the tested transitions, three mobile page loads). No application runtime errors or horizontal overflow were recorded. The source built successfully; lint and typecheck passed, with existing lint warnings.

The production crawl checked 295 HTTP-200 URLs and all 293 unique sitemap entries. It found no sitemap problems, broken or redirecting internal URLs, or orphaned sitemap pages. All three new articles have one sitemap occurrence, unique titles, self-canonicals, index/follow, and verified inbound links from their specified parent and category pages. The crawl also lists the pre-existing disclosure page and a root-URL spelling variant outside the sitemap; neither affects these new articles. `analytics-production-verification-2026-09-30.json` contains the detailed evidence.
