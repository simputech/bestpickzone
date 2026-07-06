`bestpickzone-monetization-tracker.xlsx` is generated from repo state.

Key columns:
- `Index Status (Repo)`: whether the page is currently indexable in code, not whether Google has indexed it.
- `Indexed In Google (Verified)`: leave blank until you verify in Search Console or a live inspection workflow.
- `Added To Sitemap` and `Sitemap File`: derived from the repo's sitemap config and generated route sources.
- `Ads Created`: manual status field for paid campaigns.

Workbook tabs:
- `Pages`: route-level tracker for sitemap, indexability, and monetization state.
- `Partner Programs`: current affiliate-program notes for programs worth testing beyond Amazon and eBay.

Additional exports:
- `bestpickzone-partner-programs.csv`: flat export of the partner-program worksheet.

Regenerate after page changes with:

```bash
python3 scripts/generate_monetization_tracker.py
```

Policy note:
- Paid-search rules can change inside affiliate dashboards or network terms. Treat the worksheet as a shortlist and re-check the live merchant rules before launching Google Ads.
