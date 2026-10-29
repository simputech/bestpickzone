# Shared book search labels and mobile layout

This is a shared-template correction, not an additional content-refresh batch. The rollout count remains 100 deployed / 199 remaining.

The Tana French pilot regression exposed search links labeled “Find editions.” `BookCTA` now derives an explicit “Search Amazon” label from the actual search URL, even when a caller supplies purchase wording. Direct Amazon and eBay labels/destinations remain unchanged. Dynamic book comparison buttons now distinguish search from direct editions; search-linked title text is plain text, with the labeled shopping action retained. Existing tracking IDs and sponsored attributes remain.

A mobile check of the dynamic Malcolm Gladwell guide found table and long-badge overflow. The shared comparison table now has a labeled, keyboard-focusable horizontal scroll region; review headers stack on small screens and badges wrap.

Pre-release checks: production build and gates pass; 182 tests passed before the added component regression, and all six focused UI/link tests pass including the new direct/search/eBay distinction. Browser checks passed 32 views (390 and 1440 widths) across all ten author-ranking guides, a standalone book guide and five dynamic-book categories. All 136 sampled Amazon search links per viewport explicitly say search; no document overflow.

The batch-five receipt/model follow-up `ed3d7ea5e2aab6b57acca9052a5dd562dbac5fd6` is READY at `dpl_3Un6g2J86DTDYW4ZLPBbSgayshcj`, with public Samsung T7 and Keter fallback checks confirmed. Book-template production verification follows this correction's release; this pre-release note does not claim it has shipped yet.
