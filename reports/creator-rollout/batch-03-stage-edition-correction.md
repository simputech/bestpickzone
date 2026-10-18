# Production-discovered stage edition correction

Batch-three PR16 is live at merge commit `6df351dabe38c156f23c5c93ab378806d7b816ae`, deployment `dpl_AwE5Zk9vhkbR1wWUoeC7ALe2SFo2`, with both canonical production aliases confirmed. Initial live QA returned 59 cards and 11 honest fallbacks. All 20 routes passed desktop/mobile layout, loaded-image, disclosure, canonical and attribution checks. Sixteen substantive sitemap/metadata/visible dates aligned; four minor dates were preserved.

The live identity review found two blockers: `And Then There Were None (Play)` (`0573702314`) and `Hamnet (Modern Plays)` (`1350455490`) are stage versions, whereas the articles recommend the novels. Original-author metadata is insufficient to distinguish these editions. Batch three is therefore NOT runtime verified and cumulative completion stays 40/299.

The correction rejects play, screenplay, stage/theatre/theater-script and dramatization qualifiers after the requested title. Looking only at the suffix avoids rejecting a requested title such as *Play It As It Lays*. Existing altered-edition checks, author/language/format checks, verified links/images and affiliate tags remain unchanged. No dates advance for this technical correction.

Tests reproduce both production titles with matching original-author metadata, confirm ordinary novel controls and a title containing Play, and exercise search and pinned-ASIN paths plus selection of a valid novel after a rejected play. All 201 tests, typecheck and production build pass; 335 indexable URLs, zero errors/warnings, 14 runtime assets and both inventory gates pass. Independent review and corrected preview/production verification remain pending.

Evidence: `batch-03-production-http.json`, `batch-03-production-initial.json`, and `batch-03-release-preview-qa.json`. No denied or uncertain mutation; PR16 merge is confirmed, and the corrective publication has not been attempted.

Independent corrective review found three additional ambiguous suffixes: Acting Edition, Stage Edition and Performance Edition. All now reject, including a punctuation-normalization probe, with coverage through direct matching, search and pinned-ASIN lookup. Ordinary novels and title words containing Play retain positive controls. No original-play schema support added. Re-review remains pending.

Final independent re-review APPROVED exact head `269d9034dba3cb431208d82f420b3b3f1a36a9e9`; all 39 probes passed, covering both observed stage editions, acting/stage/performance punctuation variants, other script qualifiers and ordinary novel/unabridged/Play It As It Lays controls. PR20 merged at `809f41ee2262ba21604237ca176748c7dc69739a`; production verification remains pending.

Corrected production verification PASSED: `809f41ee2262ba21604237ca176748c7dc69739a`, `dpl_EvYaka6C7jY54wtPp54Yb3KpxDyk`. All 20 routes and 40 desktop/mobile checks passed; 58 exact live cards/images, 12 honest fallbacks, 16 substantive dates aligned. Both stage ASINs absent; Hamnet novel 1984898876 live, And Then There Were None uses safe fallback. See `batch-03-production-final.json`. Cumulative verified rollout: 60/299.
