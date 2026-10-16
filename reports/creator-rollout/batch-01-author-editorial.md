# Batch 01: Author-ranking editorial review

Review date: 2026-10-16 UTC
Scope: all ten `content/author-rankings/*.json` files.
Standard: `BESTPICKZONE_OPERATING_PLAYBOOK_JUNE_2026.md`, including the September 19 update. This is a focused re-review of articles already published and verified on October 14, not a rewrite exercise.

## Outcome

- **10 of 10 pass the content re-review. No author JSON changes needed.**
- **Substantial editorial refresh: false for every article.** Keep the October 14 publication/verification dates and existing sitemap last-modified dates. Creator API wiring alone does not justify presenting these articles as newly researched editorial work.
- All ten answer the starting-point question immediately, state the shortlist's scope, explain title-specific reader fit and tradeoffs, distinguish ranking from series order, and include relevant source/internal links.
- No fabricated first-hand reading/testing anecdote, unsupported sales ranking, price guarantee, availability claim, FAQ section, or duplicate H1 was found in these JSON bodies. Rankings are explicitly editorial recommendations, not measured scores or a claim to have reviewed every title.
- All bodies exceed 1,000 words comfortably. An independent whitespace count of HTML body text, excluding template/navigation/disclosure but including in-body labels, ranges from 1,547 to 1,749 words. Existing `words` metadata uses a somewhat different counting convention; it was not changed for cosmetic churn.
- Book ranks, titles, section anchors, article paths and canonical URLs are internally consistent. All body/related internal links match existing static routes or article data. In particular, `/books/best-psychological-thrillers` is supplied by `lib/books-data-part2.ts` through the dynamic book route, not a missing page.
- No author-content blocker remains. Creator API product matching, edition/format accuracy, affiliate disclosure rendering, API fallback behavior, build tests and live verification remain the integration owner's release gates; this report does not certify those separate checks.

## Per-article findings

### 1. Anthony Horowitz

File: `content/author-rankings/best-anthony-horowitz-books.json`

Result: retain. The adult-mystery scope prevents a misleading all-catalog claim. The six-book Hawthorne sequence and the separate Susan Ryeland path are already included. A Deadly Episode is correctly treated as a 2026 release, and the text correctly distinguishes its fictional screen adaptation from real-world adaptation news. The Magpie Murders embedded-manuscript premise matches the author description.

Primary sources checked:
- https://www.anthonyhorowitz.com/books/title/magpie-murders
- https://www.anthonyhorowitz.com/books/list/series/hawthorne-horowitz
- https://www.penguin.co.uk/books/454827/a-deadly-episode-by-horowitz-anthony/9781804957660 (publication: April 23, 2026)

Changes: none. Substantial refresh: **no**. Preserve dates.

### 2. Freida McFadden

File: `content/author-rankings/best-freida-mcfadden-books.json`

Result: retain. The official catalog confirms the three numbered Housemaid novels, with The Housemaid's Wedding separately labeled a short story. The author's note supports reading that bonus story between books two and three or after book three. The five other ranked titles remain cataloged as standalone thrillers. Newer titles do not invalidate this explicitly selected six-entry starting guide.

Primary sources checked:
- https://www.freidamcfadden.com/books/
- https://www.freidamcfadden.com/books/the-housemaid-series/the-housemaid/
- https://www.freidamcfadden.com/books/the-housemaid-series/the-housemaids-wedding/

Changes: none. Substantial refresh: **no**. Preserve dates.

### 3. Gillian Flynn

File: `content/author-rankings/best-gillian-flynn-books.json`

Result: retain. The official site still distinguishes the three novels, The Grownup and the collected-edition packaging. The publisher confirms The Grownup's short standalone form and its original appearance in Rogues under a different title. The guide's prominent warning against buying it expecting a fourth full-length novel is useful and accurate.

Primary sources checked:
- https://gillian-flynn.com/
- https://www.penguinrandomhouse.com/books/536348/the-grownup-by-gillian-flynn/

Changes: none. Substantial refresh: **no**. Preserve dates.

### 4. Jane Harper

File: `content/author-rankings/best-jane-harper-books.json`

Result: retain. The official catalog has the six titles covered. Exiles is explicitly the third and final Aaron Falk book. Last One Out is a standalone; its missing-son and mining-affected town premise matches the publisher description. The guide sensibly avoids conflating Australian and overseas edition years when explaining reading order.

Primary sources checked:
- https://janeharper.com.au/books
- https://janeharper.com.au/books/exiles
- https://janeharper.com.au/about-jane
- https://www.panmacmillan.com/authors/jane-harper/last-one-out/9781035033973 (this UK edition: April 23, 2026)

Changes: none. Substantial refresh: **no**. Preserve dates.

### 5. Lisa Jewell

File: `content/author-rankings/best-lisa-jewell-books.json`

Result: retain. The page is expressly six thriller entry points, not the full bibliography. Its two important connections remain correct: The Family Remains follows The Family Upstairs, and the 2026 It Could Have Been Her reintroduces Jane Trevally from Don't Let Him In. Avoiding a blanket claim that every Jewell thriller is unrelated is the right editorial choice.

Primary sources checked:
- https://www.simonandschuster.com/p/lisa-jewell-books?appRedirect=True
- https://www.penguin.co.uk/discover/articles/extract-it-could-have-been-her-by-lisa-jewell

Changes: none. Substantial refresh: **no**. Preserve dates.

### 6. Lucy Foley

File: `content/author-rankings/best-lucy-foley-books.json`

Result: retain. The four contemporary standalone thrillers are correctly separated from historical fiction and the newer Miss Marple continuation. Agatha Christie Limited identifies Murder at the Grand Alpine Hotel as a 2026 novel by Foley, with the Swiss-hotel/gondola setup already described in the article. It is not a newly discovered Christie manuscript. The guide avoids inventing a ranked verdict on this separately scoped title.

Primary sources checked:
- https://www.lucy-foley.com/books
- https://www.agathachristie.com/en/stories/murder-at-the-grand-alpine-hotel
- https://www.agathachristie.com/en/news/read-an-extract-from-murder-at-the-grand-alpine-hotel

Changes: none. Substantial refresh: **no**. Preserve dates.

### 7. Riley Sager

File: `content/author-rankings/best-riley-sager-books.json`

Result: retain. The six-book shortlist is explicitly non-exhaustive and already acknowledges The Unknown. The publisher confirms the August 4, 2026 release, so the article has not mistaken it for an upcoming title. The page avoids promising that every apparently supernatural premise resolves in the same way and does not create a false series order among these standalone choices.

Primary source checked:
- https://www.penguinrandomhouse.com/books/776075/the-unknown-by-riley-sager/

Changes: none. Substantial refresh: **no**. Preserve dates.

### 8. Ruth Ware

File: `content/author-rankings/best-ruth-ware-books.json`

Result: retain. The important reading-order exception remains correct: The Woman in Suite 11 is the follow-up to The Woman in Cabin 10 and returns to Lo Blacklock. The six-entry scope is clear, with setting-specific alternatives rather than an unsupported exhaustive ranking. No date-sensitive adaptation or bestseller claim needs refreshing.

Primary sources checked:
- https://ruthware.com/books/
- https://ruthware.com/books/the-woman-in-suite-11/

Changes: none. Substantial refresh: **no**. Preserve dates.

### 9. Shari Lapena

File: `content/author-rankings/best-shari-lapena-books.json`

Result: retain. Getting Away with Murder is already included and correctly described as a 2026 release. Both author and publisher confirm the Jill-and-Ted brownstone/financial-pressure premise and the shared criminal plan. The page appropriately distinguishes this setup from a conventional unknown-culprit investigation rather than ranking it higher merely because it is newer.

Primary sources checked:
- https://www.sharilapena.com/getting-away-with-murder
- https://www.penguinrandomhouse.com/books/754974/getting-away-with-murder-by-shari-lapena/ (US publication: July 28, 2026)

Changes: none. Substantial refresh: **no**. Preserve dates.

### 10. Tana French

File: `content/author-rankings/best-tana-french-books.json`

Result: retain. The publisher's Dublin Murder Squad order matches the guide, and the separate Cal Hooper sequence is correctly described as The Searcher, The Hunter and The Keeper. The author identifies The Keeper as the third/final volume; the publisher confirms its March 31, 2026 publication. The existing guide already includes this conclusion without pretending its six recommendations constitute the entire catalog.

Primary sources checked:
- https://tanafrench.com/
- https://www.penguinrandomhouse.com/series/MSQ/dublin-murder-squad/
- https://www.penguinrandomhouse.com/books/713573/the-keeper-by-tana-french/9780593493465/

Changes: none. Substantial refresh: **no**. Preserve dates.

## Review boundaries and handoff

All ten complete article bodies were read. Current primary-source checks prioritized recent publications, catalog scope, series relationships and short-work/edition distinctions, rather than unnecessarily recreating the October 14 verification from scratch. The sources listed above were accessible during this review; this is not an exhaustive HTTP audit of every outbound source link.

No content JSON, metadata dates, slugs, shared renderer, sitemap, guide, or API code was edited by this reviewer. Only this report was created. No commit or deployment was performed.
