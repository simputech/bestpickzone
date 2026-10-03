#!/usr/bin/env python3
"""Audit every published language pair against a local server or production.

Usage: npm run verify:multilingual -- https://bestpickzone.com --output report.json
Requires Node with installed project dependencies and Python's standard library.
"""
import argparse
import concurrent.futures
from datetime import datetime, timezone
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import subprocess
import urllib.error
import urllib.parse
import urllib.request
import urllib.robotparser
import xml.etree.ElementTree as ET

ORIGIN = 'https://bestpickzone.com'
ROOT = Path(__file__).resolve().parents[1]


class MetadataParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonicals, self.robots, self.outside_head = [], [], []
        self.languages = {}
        self.in_head = False

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == 'head':
            self.in_head = True
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonicals.append(attrs.get('href'))
        if tag == 'link' and attrs.get('rel') == 'alternate' and attrs.get('hreflang'):
            self.languages.setdefault(attrs['hreflang'], []).append(attrs.get('href'))
            if not self.in_head:
                self.outside_head.append(attrs['hreflang'])
        if tag == 'meta' and attrs.get('name', '').lower() in ('robots', 'googlebot'):
            self.robots.append(attrs.get('content', ''))

    def handle_endtag(self, tag):
        if tag == 'head':
            self.in_head = False


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args):
        return None


def fetch(url):
    request = urllib.request.Request(url, headers={'User-Agent': 'BestPickZoneSEOAudit/1.0'})
    try:
        response = urllib.request.build_opener(NoRedirect).open(request, timeout=45)
    except urllib.error.HTTPError as error:
        response = error
    with response:
        return response.status, dict(response.headers.items()), response.read().decode('utf-8')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('base', nargs='?', default=ORIGIN)
    parser.add_argument('--output', type=Path)
    args = parser.parse_args()
    base = args.base.rstrip('/')
    pairs = json.loads(subprocess.check_output(
        ['node', str(ROOT / 'scripts/lib/load-seo-module.cjs')], cwd=ROOT, text=True))
    status, _, robots_text = fetch(base + '/robots.txt')
    if status != 200:
        raise RuntimeError(f'robots.txt returned {status}')
    robots = urllib.robotparser.RobotFileParser()
    robots.parse(robots_text.splitlines())
    sitemap_urls, sitemap_errors = set(), []
    visited = set()

    def read_sitemap(path):
        if path in visited:
            return
        visited.add(path)
        status, _, body = fetch(base + path)
        if status != 200:
            sitemap_errors.append(f'{path}: HTTP {status}')
            return
        root = ET.fromstring(body)
        locations = [item.text for item in root.findall('.//{*}loc')]
        if root.tag.endswith('sitemapindex'):
            for location in locations:
                if urllib.parse.urlsplit(location).netloc != 'bestpickzone.com':
                    sitemap_errors.append(f'Unexpected sitemap host: {location}')
                else:
                    read_sitemap(urllib.parse.urlsplit(location).path)
        else:
            sitemap_urls.update(locations)

    read_sitemap('/sitemap.xml')

    def audit(item):
        path, pair = item
        expected = {key: [(ORIGIN + value).rstrip('/')] for key, value in pair.items()}
        expected['x-default'] = [(ORIGIN + pair['en']).rstrip('/')]
        errors = []
        try:
            status, headers, body = fetch(base + path)
            headers = {key.lower(): value for key, value in headers.items()}
            metadata = MetadataParser()
            metadata.feed(body)
            if status != 200:
                errors.append(f'HTTP {status}, location={headers.get("location")}')
            # The origin with and without a root slash are the same canonical URL.
            canonicals = [url.rstrip('/') if url else url for url in metadata.canonicals]
            if canonicals != [(ORIGIN + path).rstrip('/')]:
                errors.append(f'Non-self or duplicate canonical: {metadata.canonicals}')
            normalized_languages = {key: [url.rstrip('/') if url else url for url in values]
                                    for key, values in metadata.languages.items()}
            if normalized_languages != expected:
                errors.append(f'Hreflang mismatch: {metadata.languages}')
            if metadata.outside_head:
                errors.append('Hreflang outside HTML head')
            directives = metadata.robots + [headers.get('x-robots-tag', '')]
            if any(re.search(r'\b(noindex|none)\b', value, re.I) for value in directives):
                errors.append(f'Indexing blocked: {directives}')
            if not all(robots.can_fetch(bot, base + path) for bot in ('Googlebot', '*')):
                errors.append('Blocked by robots.txt')
            if ORIGIN + path not in sitemap_urls and not (path == '/' and ORIGIN in sitemap_urls):
                errors.append('Missing from sitemap coverage')
            return dict(path=path, status=status, canonical=metadata.canonicals,
                        languages=metadata.languages, robots=directives, errors=errors)
        except Exception as error:
            return dict(path=path, errors=[str(error)])

    items = [(path, pair) for pair in pairs for path in pair.values()]
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as executor:
        pages = list(executor.map(audit, items))
    failures = [page for page in pages if page['errors']]
    result = dict(checkedAt=datetime.now(timezone.utc).isoformat(), base=base, pairs=pairs,
                  pages=pages, sitemaps=sorted(visited), sitemapErrors=sitemap_errors,
                  summary=dict(pairs=len(pairs), pages=len(pages), failedPages=len(failures)))
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(json.dumps(result, indent=2) + '\n')
    print(f'{len(pairs)} pairs / {len(pages)} pages: {len(failures)} page failures; '
          f'{len(sitemap_errors)} sitemap errors')
    for page in failures:
        print(page['path'] + ': ' + '; '.join(page['errors']))
    for error in sitemap_errors:
        print(error)
    raise SystemExit(1 if failures or sitemap_errors else 0)


if __name__ == '__main__':
    main()
