# BestPickZone Operating Playbook

Updated: June 14, 2026
Primary site: https://bestpickzone.com
Repo: `/Users/derekconicello/Library/Mobile Documents/com~apple~CloudDocs/SimpuTechBuild/bestpickzone-fixed`
Deployment: Vercel production on `bestpickzone.com`

## 1. Purpose

This file is the working operating document for BestPickZone.

Use it as the default reference for:

- content strategy
- content standards
- monetization rules
- site architecture
- sitemap rules
- publishing workflow
- QA and deploy checks
- category expansion decisions

This playbook replaces the need to re-explain the project every session.

## 2. Project Definition

BestPickZone is a commercially focused editorial affiliate site.

The site is not trying to become a generic review farm.

It is trying to do three things well:

1. rank for high-intent search terms
2. satisfy the search quickly and credibly
3. convert that trust into Amazon clicks without looking spammy

The site currently has two major operating tracks:

- books and reading-intent editorial content
- product-comparison silos built for stronger buying intent

## 3. North Star

The core BestPickZone test is:

"Would this page deserve to rank even if the affiliate links were removed?"

If the answer is no, the page is too thin, too generic, too templated, or too commercially forced.

The commercial layer should sit on top of real usefulness, not replace it.

## 4. Business Priorities

In order:

1. get pages indexed and crawled reliably
2. publish pages strong enough to rank
3. increase Amazon click-through rate
4. build internal-linking depth inside category silos
5. expand only into categories that fit the Amazon model

Important implication:

- traffic alone is not enough
- pages that get impressions but no clicks to Amazon are underperforming
- pages that are commercially perfect but too thin to rank are also failures

## 5. Current Strategic Direction

### Legacy core

The strongest historical content footprint is books.

Books still matter, but the site is no longer only a books site.

### Current growth path

BestPickZone is now expanding into higher-intent comparison silos:

- `/coffee`
- `/beauty`
- `/wfh`

This is the current preferred expansion model because it supports:

- clearer search intent
- easier snippet-first structure
- stronger internal linking
- higher Amazon commercial alignment
- reusable rendering architecture

### Current category logic

- `books` is editorial and authority-building
- `coffee` is enthusiast commerce with clean Amazon fit
- `beauty` is hybrid commerce with stronger attention to device vs ingredient intent
- `wfh` is selective commerce because some subcategories monetize poorly on Amazon

## 6. What “Good” Looks Like

BestPickZone pages should feel:

- direct
- useful
- complete
- visually intentional
- human-written
- commercially aware without sounding desperate

The reference feel is:

- answer-first intro
- sharp section hierarchy
- clear recommendation logic
- honest tradeoffs
- strong skimmability
- useful comparison structure
- visible but not obnoxious CTA placement

## 7. Core Editorial Rules

These rules apply across all content types.

### 7.1 Answer first

Do not warm up slowly.

The reader should know within the first paragraph:

- what the page is about
- who the best pick is for
- what the key tradeoff is

### 7.2 No filler

Do not publish padding, abstract advice, or interchangeable copy.

Bad phrases to avoid:

- "when it comes to"
- "it is important to note"
- "game-changer"
- "look no further"
- "masterpiece"
- "everyone is different"
- "in conclusion"

### 7.3 Specificity test

Every sentence should be specific to the page.

If a sentence could survive after swapping in different products or different books, it is probably too generic.

### 7.4 Human tone

The site should sound like a sharp human editor, not a content engine.

That means:

- decisive recommendations
- clean prose
- no fake enthusiasm
- no fake testing claims
- no jargon for its own sake

### 7.5 Trust through boundaries

Every page should clearly say who should skip the recommendation.

This improves:

- trust
- readability
- conversion quality

## 8. Content Type Rules

## 8.1 Comparison pages

Comparison pages are the current gold-standard format for non-book expansion.

### Mandatory structural pattern

Each comparison page should include:

1. above-the-fold affiliate disclosure
2. strong intro that names the winner by buyer type
3. comparison table
4. hero image or original visual
5. product A section
6. product B section
7. FAQ
8. related internal links
9. closing that gives a Start Here and Skip This First verdict

### Required product-section elements

Each product section should contain:

- contextual product-name affiliate link early in the copy
- at least 2 real paragraphs
- pros list
- cons list
- bolded `Skip this if`
- CTA link with exact text:
  `Click Here to Buy on Amazon`

### Heading rules

- The rendered page H1 is handled by the React template.
- In the raw article body, do not add another H1.
- Each H2 should be a real search question.
- The first paragraph under each primary H2 should answer directly in roughly 40 to 50 words.

### Comparison-page goals

Comparison pages exist to do all three of these:

- win search intent
- reduce uncertainty
- earn the click to Amazon

## 8.2 Books and editorial pages

Books pages do not need to follow the exact comparison-page shell, but they should follow the same strategic principles.

For books pages:

- lead with the answer or best starting point
- explain why each recommendation belongs
- give real descriptions, not listicles with one-line blurbs
- use author, genre, tone, and reader-fit logic
- vary layout so the entire books section does not feel cookie-cutter

For higher-priority books pages, prefer custom standalone pages over generic dynamic-template output when the topic has real ranking potential.

## 9. Verification Hierarchy

This is one of the most important parts of the project.

### Hardware and product specs

Use this order:

1. manufacturer product page
2. live retailer listing for price and availability only
3. established review lab only for explicitly attributed measured results

### Do not do this

- do not guess specs
- do not pull technical specs from random retailers if the brand page exists
- do not convert review impressions into fake objective facts
- do not imply hands-on testing if none happened

### Approved honesty framing

Good phrasing:

- "Dyson lists..."
- "Logitech says..."
- "Apple lists the standard Magic Keyboard at..."
- "NuFACE positions the Trinity+ around..."
- "At last check, Amazon listed..."

Bad phrasing:

- "in our testing"
- "when we used both"
- "lab data proves"
- "long-term user testing shows"

## 10. Amazon Monetization Rules

BestPickZone is currently optimized around Amazon Associates.

### Required affiliate tag

Use:

- `althcu-20`

Do not use:

- `bestpickzone-20`

### Link format rules

Standard comparison-page Amazon search links should use:

- `https://www.amazon.com/s?k=[query]&tag=althcu-20`

Required attributes:

- `target="_blank"`
- `rel="sponsored noopener"`

### CTA rule

The exact CTA text on comparison pages should be:

- `Click Here to Buy on Amazon`

### Disclosure rule

An affiliate disclosure must appear above the fold.

### Commercial-fit filter

Do not force articles into the Amazon model when the category does not fit.

If the product pair is primarily:

- direct-to-consumer only
- discontinued
- badly represented on Amazon
- heavily mismatched with searcher expectations

then do not publish it under the Amazon template.

## 11. Commercial-Fit Triage Rules

Before drafting any new comparison page, classify it:

### Green

Publish freely if:

- both products are sold on Amazon
- listings are stable enough to support reasonable click conversion
- search intent aligns with a product-comparison outcome

### Yellow

Use caution if:

- one product has inconsistent Amazon availability
- the model is stale or likely outdated
- the comparison is more ingredient-led than product-led

Yellow pages can still work, but they need better verification and stronger framing.

### Red

Do not publish under current monetization if:

- the products are effectively direct-only
- the product is discontinued
- the Amazon path is poor enough that the page would create a bad reader experience

Examples of pages to avoid or defer under the current Amazon-only model:

- `fully-jarvis-vs-uplift-v2-standing-desk`
- `secretlab-titan-evo-vs-ergotune-supreme`
- `autonomous-ergochair-pro-vs-hinomi-h1-pro`
- discontinued pairings like the old Loupedeck comparison

## 12. Images and Visual Rules

### Comparison-page image policy

Prefer:

- self-hosted original SVG or illustration assets
- generic, non-misleading hero images
- category visuals that improve polish without pretending to be the actual product

Do not:

- hotlink Amazon product images
- wrap decorative images in affiliate links
- use generic images that imply they are the exact product
- use placeholders on live pages

### Why this matters

The visual layer is doing several jobs:

- improving perceived quality
- differentiating the site from boilerplate affiliate pages
- supporting readability
- keeping trust intact

## 13. Internal Linking Rules

Internal linking must be deliberate.

### Always do

- link comparison pages up to their silo hub
- link to homepage where helpful
- cross-link only to real published sibling pages

### Do not do

- fabricate sibling links
- add “coming soon” links
- link pages into dead ends

### Internal linking purpose

Internal linking should help:

- crawlability
- topic clustering
- session depth
- ranking support for hubs and spokes

## 14. Sitemap Strategy

The site now uses a sitemap index plus child sitemaps.

Current sitemap structure:

- `/sitemap.xml`
- `/sitemap-main.xml`
- `/sitemap-books.xml`
- `/sitemap-beauty.xml`
- `/sitemap-coffee.xml`
- `/sitemap-wfh.xml`

### Sitemap rule

Submit only the top-level sitemap index to Search Console.

### Why this is the right current strategy

- it keeps one root submission point
- it separates topical inventory cleanly
- it scales better than a single flat sitemap
- it makes QA easier by silo

### URL inclusion rule

Every important page should be:

- in the correct child sitemap
- linked from at least one real hub or sibling page

The sitemap is not a substitute for internal linking.

## 15. Current Site Architecture

### Core routes

- `/`
- `/books`
- `/tech`
- `/home-kitchen`
- `/coffee`
- `/beauty`
- `/wfh`

### Comparison architecture

Reusable comparison routes currently exist at:

- `app/coffee/[slug]/page.tsx`
- `app/beauty/[slug]/page.tsx`
- `app/wfh/[slug]/page.tsx`

Shared rendering and content sources:

- `components/article/HtmlComparisonArticlePage.tsx`
- `lib/comparison-html-articles.ts`
- `lib/sitemap-data.ts`

Legacy but still important richer comparison model:

- `components/article/ProductComparisonPage.tsx`
- `lib/product-comparisons.ts`
- `app/coffee/breville-bambino-plus-vs-gaggia-classic-pro/page.tsx`

### Books architecture

Books currently use two patterns:

- dynamic data-backed book articles
- custom standalone book pages

Important book infrastructure:

- `lib/books-data*.ts`
- `app/books/[slug]/page.tsx`

## 16. Current Live Comparison Inventory

### Coffee

- `/coffee/breville-bambino-plus-vs-gaggia-classic-pro`
- `/coffee/breville-barista-express-vs-delonghi-la-specialista`
- `/coffee/fellow-stagg-ekg-vs-cosori-gooseneck`
- `/coffee/baratza-virtuoso-plus-vs-fellow-ode-gen-2`
- `/coffee/1zpresso-jx-pro-vs-comandante-c40`
- `/coffee/timemore-chestnut-c3-vs-kingrinder-k6`
- `/coffee/aeropress-original-vs-aeropress-premium`
- `/coffee/hario-v60-vs-chemex-classic`
- `/coffee/acaia-lunar-vs-timemore-black-mirror-nano`

### Beauty

- `/beauty/dyson-airwrap-vs-shark-flexstyle`
- `/beauty/nuface-trinity-vs-solawave-wand`
- `/beauty/dyson-airstrait-vs-ghd-duet-style`
- `/beauty/revlon-one-step-vs-loreal-steampod`

### WFH

- `/wfh/herman-miller-aeron-vs-steelcase-gesture`
- `/wfh/logitech-mx-master-3s-vs-apple-magic-mouse`
- `/wfh/elgato-stream-deck-mk2-vs-logitech-mx-creative-console`
- `/wfh/logitech-mx-keys-s-vs-apple-magic-keyboard`
- `/wfh/vari-desk-converter-vs-vivo-desk-riser`

## 17. Current Silo Positioning

### Coffee

Coffee is one of the strongest commerce silos because it has:

- strong enthusiast intent
- clean Amazon fit
- lots of good comparison angles
- natural cluster depth

Priority page types:

- espresso machines
- grinders
- kettles
- brewers
- scales

### Beauty

Beauty works best when split cleanly between:

- device comparisons
- ingredient or treatment comparisons

Device pages are usually easier to monetize and easier to make commercially sharp.

Ingredient pages need stronger anchoring if they are not tied to real products.

### WFH

WFH is useful but must be selective.

Good WFH lanes:

- mice
- keyboards
- converters
- creator gear
- some premium chairs where Amazon fit is good enough

Riskier WFH lanes:

- direct-to-consumer ergonomic brands
- standing desk pairs where Amazon is not the real shopping destination

## 18. Recommended Topic Selection Process

Before starting a new page:

1. confirm the target keyword and buyer intent
2. check whether the page already exists
3. test Amazon-fit and product availability
4. confirm the category belongs in the current silo strategy
5. verify that the page can be made specific and useful

If any of those fail, do not force the page.

## 19. Publishing Workflow

Use this workflow for new pages.

### Step 1: topic validation

- confirm the article does not already exist
- confirm commercial fit
- confirm the page belongs to the right silo

### Step 2: verification

- collect manufacturer specs
- collect live price and availability
- remove anything unverifiable

### Step 3: drafting

- write answer-first intro
- build the comparison table
- write two substantial product sections
- add FAQ
- add related internal links
- add Start Here / Skip This First close

### Step 4: architecture

- add the article entry to `lib/comparison-html-articles.ts` if using the shared renderer
- ensure the route already supports the silo
- ensure the hubs can surface the page

### Step 5: sitemap inclusion

- confirm the page flows into the correct child sitemap via `lib/sitemap-data.ts`

### Step 6: build

Run:

```bash
npm run build
```

### Step 7: deploy

Run:

```bash
vercel --prod --yes
```

### Step 8: live verification

At minimum:

- confirm the live page returns `200`
- confirm the child sitemap returns `200`
- confirm the page is present in the correct hub or child sitemap logic

### Step 9: source control

```bash
git add ...
git commit -m "..."
git push origin main
```

## 20. QA Checklist

Before shipping a page, verify:

- no markdown artifacts in the rendered HTML body
- affiliate disclosure is above the fold
- `althcu-20` is used in Amazon links
- no `bestpickzone-20`
- product sections have pros and cons
- each product has a `Skip this if`
- the close has Start Here and Skip This First logic
- headings are clear and useful
- page copy does not imply fake testing
- internal links point to real pages only
- page builds locally
- page is live after deploy

## 21. SEO Rules That Matter Most

The project’s indexing and ranking strategy should focus on:

- direct title-query match
- strong intros
- better-than-average completeness
- internal linking
- honest freshness dates
- topical cluster development

Do not assume that “more pages” alone solves anything.

The site has to earn indexing and then earn rank.

## 22. Conversion Rules That Matter Most

For commercial pages:

- show the best pick early
- make skimming easy
- place the CTA where interest is highest
- make tradeoffs obvious
- reduce confusion before asking for the click

The site should optimize for qualified Amazon clicks, not indiscriminate clicks.

## 23. What To Avoid Going Forward

Avoid:

- publishing direct-to-consumer mismatches under an Amazon-only template
- building large batches without checking Amazon fit first
- leaving pages orphaned from their hubs
- using placeholder images on live pages
- writing pages that all feel identical
- overusing one design pattern to the point the whole site looks machine-generated

## 24. Recommended Next-Step Priorities

Highest-value continuation paths:

1. expand coffee with more green-fit comparisons
2. deepen beauty with more device-first comparisons
3. expand WFH only where Amazon fit is real
4. continue improving high-potential book pages that already attract search traffic

## 25. Repo Files To Check First In Future Sessions

Start with these:

- `BESTPICKZONE_OPERATING_PLAYBOOK_JUNE_2026.md`
- `BESTPICKZONE_PROJECT_BRIEF_JUNE_2026.md`
- `lib/comparison-html-articles.ts`
- `lib/sitemap-data.ts`
- `components/article/HtmlComparisonArticlePage.tsx`
- `components/article/ProductComparisonPage.tsx`
- `app/coffee/page.tsx`
- `app/beauty/page.tsx`
- `app/wfh/page.tsx`
- `app/robots.ts`

## 26. Default Working Rule

If a future request is ambiguous, default to this:

- choose the page format that best fits ranking and conversion
- prefer useful specificity over volume
- prefer commercially aligned topics over impressive-sounding but weak-fit topics
- prefer a smaller number of better pages over a larger number of shallow ones

This is the operating rule for BestPickZone until explicitly changed.
