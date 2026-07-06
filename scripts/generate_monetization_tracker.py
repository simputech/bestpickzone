#!/usr/bin/env python3

from __future__ import annotations

import csv
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable
from xml.sax.saxutils import escape
from zipfile import ZIP_DEFLATED, ZipFile


REPO_ROOT = Path(__file__).resolve().parents[1]
APP_DIR = REPO_ROOT / "app"
REPORTS_DIR = REPO_ROOT / "reports"
SITEMAP_FILE = REPO_ROOT / "lib" / "sitemap-data.ts"
BOOK_DATA_FILES = sorted(REPO_ROOT.glob("lib/books-data-part*.ts"))
COMPARISON_FILE = REPO_ROOT / "lib" / "comparison-html-articles.ts"
TEXT_EXTENSIONS = {".ts", ".tsx", ".js", ".jsx", ".mjs", ".html", ".md", ".txt"}
PAGES_HEADERS = [
    "URL",
    "Section",
    "Route Type",
    "Monetization Method",
    "Index Status (Repo)",
    "Indexed In Google (Verified)",
    "Added To Sitemap",
    "Sitemap File",
    "Ads Created",
    "Source Hint",
]
PROGRAMS_HEADERS = [
    "Program",
    "Primary Fit",
    "Best Categories",
    "Network / Signup Path",
    "Paid Traffic Status",
    "Recommendation",
    "Official Source",
    "Notes",
]
PARTNER_PROGRAM_ROWS = [
    [
        "Amazon Associates",
        "Mass-market retail",
        "Books, home office, coffee, beauty, tech",
        "Amazon Associates",
        "Usually workable with content-led ads, but watch trademark and direct-linking rules",
        "Keep using for evergreen editorial pages",
        "https://affiliate-program.amazon.com/help/operating/policies",
        "Strong catalog depth, but margins are often thinner than niche partners.",
    ],
    [
        "eBay Partner Network",
        "Marketplace / used / refurbished / vintage",
        "Used office gear, vintage coffee gear, books, collectibles",
        "eBay Partner Network",
        "Paid traffic explicitly supported, subject to campaign rules",
        "Highest-priority non-Amazon program for BestPickZone",
        "https://partnernetwork.ebay.com/page/pla-paid-traffic",
        "Best fit when listings are volatile but buyer intent is strong. Use broader search-result or category-style links when possible.",
    ],
    [
        "Walmart Creator",
        "Mass-market retail",
        "Home office, coffee, tech, home and kitchen",
        "Walmart Creator / Impact",
        "Policy needs merchant-level verification before ad spend",
        "Promising backup to Amazon for mainstream products",
        "https://affiliates.walmart.com/",
        "Useful for value-priced product coverage, but verify paid-search rules inside the live partner dashboard first.",
    ],
    [
        "Best Buy Affiliate",
        "Consumer electronics",
        "Portable monitors, deskside tech, headphones, webcams",
        "Best Buy Affiliate Program",
        "Policy needs current program-level verification before ad spend",
        "Good fit for WFH and tech pages if approval is available",
        "https://www.bestbuy.com/site/advertise-with-us/affiliate-program/pcmcat198500050002.c",
        "Potentially better than Amazon on certain electronics categories, especially refurbished and open-box coverage.",
    ],
    [
        "Back Market Affiliate Program",
        "Refurbished electronics",
        "Portable monitors, laptops, tablets, phones",
        "Back Market Affiliate Program",
        "Policy needs current program-level verification before ad spend",
        "Strong candidate for refurbished tech pages",
        "https://www.backmarket.com/en-us/affiliates",
        "Useful when you want stable refurbished inventory rather than one-off marketplace listings.",
    ],
    [
        "Reverb Affiliate Program",
        "Used / vintage music gear",
        "Vintage audio, speaker, studio, and music-adjacent collector gear",
        "Reverb Affiliate Program",
        "Policy needs current program-level verification before ad spend",
        "Niche opportunity for future vintage audio content",
        "https://reverb.com/affiliates",
        "Not a broad-site monetization layer, but excellent for tightly matched vintage music or recording content.",
    ],
    [
        "Etsy Affiliates",
        "Handmade / vintage marketplace",
        "Vintage decor, giftable goods, handmade office touches",
        "Etsy Affiliates / Creator Collective",
        "Direct paid-search economics are weak and last-click rules are restrictive",
        "Use for organic or social-led content, not Google Ads first",
        "https://www.etsy.com/legal/affiliates/",
        "Worth testing for unique handmade or vintage angles, but not the first PPC program to scale.",
    ],
    [
        "1stDibs Trade / Affiliate",
        "Luxury vintage and antiques",
        "High-end vintage decor and collector pieces",
        "1stDibs",
        "Public paid-search guidance not clear enough yet",
        "Research further before using",
        "https://www.1stdibs.com/answers/does-1stdibs-have-an-affiliate-program/",
        "Interesting for premium vintage editorial, but I would not buy traffic here until terms are clearer.",
    ],
]


@dataclass(frozen=True)
class RouteRecord:
    url: str
    route_type: str
    source_hint: str
    content_files: tuple[Path, ...]


def route_from_page_path(path: Path) -> str:
    rel = path.relative_to(APP_DIR)
    parts = list(rel.parts[:-1])
    if not parts:
        return "/"
    return "/" + "/".join(parts)


def static_routes() -> dict[str, RouteRecord]:
    routes: dict[str, RouteRecord] = {}
    for page in APP_DIR.rglob("page.tsx"):
        rel = page.relative_to(APP_DIR)
        if any(part.startswith("[") and part.endswith("]") for part in rel.parts):
            continue
        if rel.parts[0].startswith("sitemap"):
            continue
        if rel.parts[0] in {"not-found"}:
            continue

        url = route_from_page_path(page)
        route_dir = page.parent
        companion_files = [
            p
            for p in route_dir.iterdir()
            if p.is_file()
            and p.suffix.lower() in TEXT_EXTENSIONS
            and p.name != "page.tsx"
            and ("article-source" in p.name or "source" in p.name)
        ]
        content_files = tuple([page, *sorted(companion_files)])
        routes[url] = RouteRecord(
            url=url,
            route_type="Static page",
            source_hint=str(route_dir.relative_to(REPO_ROOT)),
            content_files=content_files,
        )
    return routes


def extract_object_block(text: str, slug: str) -> str:
    anchor = f'slug: "{slug}"'
    start = text.find(anchor)
    if start == -1:
        return ""
    object_start = text.rfind("{", 0, start)
    if object_start == -1:
        return ""
    depth = 0
    for index in range(object_start, len(text)):
        char = text[index]
        if char == "{":
            depth += 1
        elif char == "}":
            depth -= 1
            if depth == 0:
                return text[object_start : index + 1]
    return ""


def book_slug_records(existing: dict[str, RouteRecord]) -> tuple[set[str], set[str]]:
    book_slugs: set[str] = set()
    ebay_book_slugs: set[str] = set()
    all_text = "\n".join(file.read_text() for file in BOOK_DATA_FILES)
    for slug in re.findall(r'slug:\s*"([^"]+)"', all_text):
      # Static routes take precedence over generated book routes.
        book_slugs.add(slug)
        block = extract_object_block(all_text, slug)
        if 'affiliatePlatform: "ebay"' in block:
            ebay_book_slugs.add(slug)
        url = f"/books/{slug}"
        if url not in existing:
            existing[url] = RouteRecord(
                url=url,
                route_type="Books data",
                source_hint="lib/books-data-part*.ts",
                content_files=tuple(BOOK_DATA_FILES),
            )
    return book_slugs, ebay_book_slugs


def comparison_slug_records(existing: dict[str, RouteRecord]) -> dict[str, set[str]]:
    comparison_map = {"beauty": set(), "coffee": set(), "wfh": set()}
    text = COMPARISON_FILE.read_text()
    for match in re.finditer(
        r"\{\s*slug:\s*'([^']+)'\s*,\s*silo:\s*'([^']+)'", text, re.DOTALL
    ):
        slug, silo = match.groups()
        if silo not in comparison_map:
            continue
        comparison_map[silo].add(slug)
        url = f"/{silo}/{slug}"
        if url not in existing:
            existing[url] = RouteRecord(
                url=url,
                route_type="Comparison data",
                source_hint="lib/comparison-html-articles.ts",
                content_files=(COMPARISON_FILE,),
            )
    return comparison_map


def explicit_sitemap_urls() -> set[str]:
    text = SITEMAP_FILE.read_text()
    matches = re.findall(r"\$\{baseUrl\}(/[^`']*)", text)
    return set(matches)


def section_for_url(url: str) -> str:
    if url == "/":
        return "home"
    return url.strip("/").split("/")[0]


def monetize_method(url: str, record: RouteRecord, ebay_book_slugs: set[str]) -> str:
    if url in {
        "/wfh/best-used-herman-miller-aeron-chairs-ebay",
        "/wfh/best-portable-monitors-under-100-ebay",
        "/coffee/best-vintage-coffee-grinders-ebay",
    }:
        return "eBay"

    if url.startswith("/books/") and url.count("/") == 2:
        slug = url.split("/")[-1]
        if slug in ebay_book_slugs:
            return "eBay"
        if slug:
            return "Amazon"

    text = "\n".join(path.read_text() for path in record.content_files if path.exists())
    if "campid=5339164184" in text or 'affiliatePlatform: "ebay"' in text:
        return "eBay"
    if "tag=althcu-20" in text or "amazonQuery" in text or "amazon.com" in text:
        return "Amazon"
    return "None / editorial"


def index_status(record: RouteRecord) -> str:
    text = "\n".join(path.read_text() for path in record.content_files if path.exists())
    if (
        "index: false" in text
        or "follow: false" in text
        or "robots: { index: false" in text
        or "robots:{index:false" in text.replace(" ", "")
    ):
        return "Noindex"
    return "Indexable"


def sitemap_status(
    url: str,
    explicit_urls: set[str],
    book_slugs: set[str],
    comparison_slugs: dict[str, set[str]],
) -> tuple[str, str]:
    if url in explicit_urls:
        section = section_for_url(url)
        if section == "books":
            return "Yes", "sitemap-books.xml"
        if section == "beauty":
            return "Yes", "sitemap-beauty.xml"
        if section == "coffee":
            return "Yes", "sitemap-coffee.xml"
        if section == "wfh":
            return "Yes", "sitemap-wfh.xml"
        return "Yes", "sitemap-main.xml"

    if url.startswith("/books/") and url.count("/") == 2:
        slug = url.split("/")[-1]
        if slug in book_slugs:
            return "Yes", "sitemap-books.xml"

    for silo, slugs in comparison_slugs.items():
        prefix = f"/{silo}/"
        if url.startswith(prefix):
            slug = url[len(prefix) :]
            if slug in slugs:
                return "Yes", f"sitemap-{silo}.xml"

    return "No", ""


def build_rows() -> list[list[str]]:
    routes = static_routes()
    book_slugs, ebay_book_slugs = book_slug_records(routes)
    comparison_slugs = comparison_slug_records(routes)
    explicit_urls = explicit_sitemap_urls()

    rows: list[list[str]] = []
    for url in sorted(routes):
        record = routes[url]
        in_sitemap, sitemap_name = sitemap_status(url, explicit_urls, book_slugs, comparison_slugs)
        rows.append(
            [
                f"https://bestpickzone.com{url}",
                section_for_url(url),
                record.route_type,
                monetize_method(url, record, ebay_book_slugs),
                index_status(record),
                "",
                in_sitemap,
                sitemap_name,
                "No",
                record.source_hint,
            ]
        )
    return rows


def write_csv(rows: list[list[str]], destination: Path) -> None:
    with destination.open("w", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(PAGES_HEADERS)
        writer.writerows(rows)


def column_name(index: int) -> str:
    result = ""
    while index > 0:
        index, remainder = divmod(index - 1, 26)
        result = chr(65 + remainder) + result
    return result


def worksheet_xml_for_rows(rows: list[list[str]], widths: list[int]) -> str:
    max_row = len(rows)
    max_col = len(rows[0]) if rows else 1

    def cell_xml(row_number: int, column_number: int, value: str) -> str:
        ref = f"{column_name(column_number)}{row_number}"
        if value == "":
            return f'<c r="{ref}" t="inlineStr"><is><t></t></is></c>'
        return f'<c r="{ref}" t="inlineStr"><is><t xml:space="preserve">{escape(value)}</t></is></c>'

    sheet_rows = []
    for row_number, values in enumerate(rows, start=1):
        cells = "".join(cell_xml(row_number, column_number, value) for column_number, value in enumerate(values, start=1))
        sheet_rows.append(f'<row r="{row_number}">{cells}</row>')

    cols = []
    for index, width in enumerate(widths, start=1):
        cols.append(
            f'<col min="{index}" max="{index}" width="{width}" customWidth="1"/>'
        )

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <dimension ref="A1:{column_name(max_col)}{max_row}"/>
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/>
      <selection pane="bottomLeft" activeCell="A2" sqref="A2"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>{''.join(cols)}</cols>
  <sheetData>{''.join(sheet_rows)}</sheetData>
</worksheet>
'''

def write_partner_programs_csv(destination: Path) -> None:
    with destination.open("w", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(PROGRAMS_HEADERS)
        writer.writerows(PARTNER_PROGRAM_ROWS)


def write_xlsx(rows: list[list[str]], destination: Path) -> None:
    pages_sheet_rows = [PAGES_HEADERS, *rows]
    programs_sheet_rows = [PROGRAMS_HEADERS, *PARTNER_PROGRAM_ROWS]
    pages_xml = worksheet_xml_for_rows(
        pages_sheet_rows,
        [48, 16, 16, 18, 18, 22, 14, 18, 12, 28],
    )
    programs_xml = worksheet_xml_for_rows(
        programs_sheet_rows,
        [24, 22, 24, 24, 24, 20, 42, 52],
    )

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
 xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="Pages" sheetId="1" r:id="rId1"/>
    <sheet name="Partner Programs" sheetId="2" r:id="rId2"/>
  </sheets>
</workbook>
'''

    content_types_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>
'''

    rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>
'''

    workbook_rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
</Relationships>
'''

    core_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
 xmlns:dc="http://purl.org/dc/elements/1.1/"
 xmlns:dcterms="http://purl.org/dc/terms/"
 xmlns:dcmitype="http://purl.org/dc/dcmitype/"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>BestPickZone Monetization Tracker</dc:title>
  <dc:creator>Codex</dc:creator>
  <cp:lastModifiedBy>Codex</cp:lastModifiedBy>
</cp:coreProperties>
'''

    app_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"
 xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Codex</Application>
</Properties>
'''

    with ZipFile(destination, "w", compression=ZIP_DEFLATED) as archive:
        archive.writestr("[Content_Types].xml", content_types_xml)
        archive.writestr("_rels/.rels", rels_xml)
        archive.writestr("xl/workbook.xml", workbook_xml)
        archive.writestr("xl/_rels/workbook.xml.rels", workbook_rels_xml)
        archive.writestr("xl/worksheets/sheet1.xml", pages_xml)
        archive.writestr("xl/worksheets/sheet2.xml", programs_xml)
        archive.writestr("docProps/core.xml", core_xml)
        archive.writestr("docProps/app.xml", app_xml)


def main() -> None:
    REPORTS_DIR.mkdir(exist_ok=True)
    rows = build_rows()
    csv_path = REPORTS_DIR / "bestpickzone-monetization-tracker.csv"
    programs_csv_path = REPORTS_DIR / "bestpickzone-partner-programs.csv"
    xlsx_path = REPORTS_DIR / "bestpickzone-monetization-tracker.xlsx"
    write_csv(rows, csv_path)
    write_partner_programs_csv(programs_csv_path)
    write_xlsx(rows, xlsx_path)
    print(f"Wrote {len(rows)} rows to {csv_path}")
    print(f"Wrote {len(PARTNER_PROGRAM_ROWS)} rows to {programs_csv_path}")
    print(f"Wrote {len(rows)} rows to {xlsx_path}")


if __name__ == "__main__":
    main()
