# GA4 affiliate and traffic-quality reporting

BestPickZone measures outbound affiliate intent, not Amazon orders, items, or commission. Use the single `affiliate_click` event for Amazon and eBay reporting. Filter with `affiliate_platform` rather than combining older platform-specific events with the new event.

Before using the event parameters in Explorations, register these **event-scoped custom dimensions** in GA4 Admin: `affiliate_platform`, `destination_host`, `content_slug`, `cta_placement`, `product_title`, and `link_type`. The site will send the values immediately, but GA4 only makes new parameter values available as report dimensions after they are registered, and registration is not retroactive. This is GA4 measurement configuration, not an advertising or billing setting.

## Which landing pages generate Amazon clicks?

In **Explore > Free form**, add `page_path` as the row dimension and `Event count` as the metric. Add a filter for `event_name = affiliate_click` and `affiliate_platform = amazon`. Use a landing-page exploration separately for sessions, then compare the two by the same path; this avoids treating a later page in a session as its landing page.

## Which templates and CTA placements work?

For the same event, use `cta_placement`, `link_type`, and `content_slug` as dimensions. Typical placements include `primary-recommendation`, `direct-answer`, `comparison-table`, `product-card`, `decision-verdict`, and `mobile-sticky`. Use `product_title` only for product-level comparisons; it is a label, not a product-price or availability feed.

## Which traffic pages produce no affiliate intent?

Create a landing-page exploration for the selected date range with `Sessions`, `Engaged sessions`, and `Average engagement time`. Export or note pages with meaningful sessions. Compare that list to the `affiliate_click` exploration above; pages with sessions but no matching affiliate clicks are candidates for intent, CTA placement, or internal-link review. Do not judge a page only by raw click count.

## Which 404 paths receive visits?

In **Reports > Engagement > Pages and screens**, filter `Page title` for `Page Not Found`, then add `Page path and screen class`. Review the path before creating a redirect. Add a permanent redirect only when that path has a clear, semantically equivalent canonical destination; otherwise leave the helpful 404 recovery page in place.

## Which sources bring meaningful engagement?

In **Reports > Acquisition > Traffic acquisition**, compare `Session source / medium` using `Sessions`, `Engaged sessions`, `Engagement rate`, and `Average engagement time`. Then apply a comparison or filter for Google organic traffic and evaluate it separately from Direct. Use the same 28-day range each week so changes are comparable. Short-duration Direct traffic is a diagnostic signal, not a reason to buy traffic or change ad-account settings.

## QA checklist for the event

With GA4 DebugView or Tag Assistant open, click one tagged Amazon link and one tagged eBay link. Each click should produce exactly one `affiliate_click` event with `affiliate_platform`, `destination_host`, `page_path`, `content_slug`, `cta_placement`, `product_title`, and `link_type`. Confirm navigation still opens normally. Do not use this event to report Amazon orders or commissions.
