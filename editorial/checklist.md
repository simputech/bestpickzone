# BestPickZone editorial review policy — pilot v1

Editorial sources: BESTPICKZONE_OPERATING_PLAYBOOK_JUNE_2026.md (updated
September 19, 2026), and BOOK_CONTENT_WORKFLOW_TRACKER_2026-08-07.md.
The newer playbook controls conflicts with the June project brief. Review each
affected rendered route, including every route affected by shared data/templates.
Drafting in Work or Codex does not bypass review after files enter this repository.

## Checklist and evidence

| Dimension | Required judgment and recorded evidence |
| --- | --- |
| readerIntent | State the actual search/reader decision; show how the first paragraph answers it, names a best fit and key tradeoff. Explain who should skip the recommendation. |
| specificUsefulness | Cite topic/product/book-specific details, useful examples and a worked decision path. Reject interchangeable product-name swaps, filler, one-line book blurbs, drafting/SEO instructions, or decorative depth. Would the page deserve to rank without affiliate links? |
| primarySourceSupport | Map material factual claims to current primary sources. Manufacturer for specifications; publisher/author for book facts; retailer only for price and availability; review labs only for explicitly attributed measurements. Record exact URL, claim, support, and actual retrieval time. Check safety/health claims carefully. Do not invent evidence or treat a source's existence as support. Unavailable, contradictory or unverified evidence blocks. |
| originalValue | Compare the complete rendered page with the existing corpus and nearest intent siblings, naming the routes and distinct reader value. Check repeated sections within the page, including template-generated duplication. Flag cannibalization, near duplicates and paraphrased boilerplate. Document corpus limits; never claim universal originality. |
| honestCommerce | No invented testing, hands-on experience, objective measurements, ratings, urgency or savings. Attribute claims and qualify uncertainty. Confirm current Amazon fit and availability; flag direct-only/discontinued mismatches. Check above-fold disclosure, correct althcu-20 tag, sponsored noopener and _blank on Amazon links; no Amazon image hotlinks or misleading exact-product visuals. |
| structureAndDepth | Classify article/hub/service truthfully. For this conservative pilot, reviewed articles must have >=1,000 visible editorial words, excluding navigation, disclosures, titles, CTAs, schema and code. Never pad to reach the floor. New/materially rebuilt articles have no FAQ section or FAQPage schema; record why any legacy FAQ is allowed. One rendered H1. Apply the format-specific checks below, and inspect mobile/desktop visual hierarchy and disclosure placement before a production decision. |
| metadataAndLinks | Direct title-query match, unique title/description, truthful dates, correct canonical/indexability/schema and social metadata. Real, relevant internal destinations; silo hub and sibling discovery, child-sitemap inclusion, no orphans or fabricated links. Validate source and affiliate destinations without treating HTTP 200 as factual support. |

## Format-specific checks

Shared coffee/beauty/WFH comparisons: affiliate disclosure; answer-first winner by
buyer type; table and honest hero/original visual; substantial product A/B sections
with early contextual product links, two real paragraphs each, pros, cons, bold
"Skip this if", and "Click Here to Buy on Amazon" CTA. Primary H2s are real search
questions followed by a direct answer of roughly 40–50 words. Finish with Start Here /
Skip This First verdict and related links.

Commerce showdown: apply playbook section 27 to appropriate two-product commerce
pages: breadcrumb, dark answer-first hero, disclosure, quick verdict, intro,
product A, useful callout/safety note, product B, comparison table, verdict CTAs,
related links and sticky CTA. Its example permits "Click Here to Check Price on
Amazon"; do not incorrectly force the shared-renderer CTA onto this format.

Books: author, genre, tone and reader-fit reasons; meaningful recommendation
descriptions, clear starting point and skip logic. Do not require a two-product shell.
Custom pages should add topic-specific value and layout variation.

## Review output and outcomes

Use review.schema.json plus scripts/editorial/core.mjs validation. Each route needs
all seven judgments with concrete evidence, claim-level sources, an existing-route
comparison, editorial word count and findings. Pass requires every dimension pass
and no unresolved finding. "revise" means a concrete bounded editorial repair is
possible. "block" covers insufficient evidence, unsafe scope, unresolved intent or
a policy/control change. Missing data, invalid JSON, stale evidence, exhausted
budget and tool errors block; never convert them to "not applicable" success.

Freshness thresholds (pilot operating bounds, not guarantees): report <=24 hours,
price/availability evidence <=24 hours, other sources <=30 days; volatile facts may
need fresher checks. Every output is bound to base/head/policy commits, corpus digest
and a new review invocation ID. The validator checks structure and consistency;
it cannot prove evidence truthful or exhaustive. No model or heuristic guarantees
factual correctness or universal originality.
