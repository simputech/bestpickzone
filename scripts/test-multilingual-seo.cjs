const assert = require('node:assert/strict');
const test = require('node:test');
const path = require('node:path');
const { loadSeoModule } = require('./lib/load-seo-module.cjs');
const load = (name) => loadSeoModule(path.join(__dirname, '../lib', `${name}.ts`));
const { localizedUrlPairs: pairs, getLocalizedLanguages, SITE_ORIGIN } = load('localized-urls');
const { getSpanishStaticPaths, getSpanishSitemapEntries } = load('spanish-site-data');
const { withArticleMetadataDefaults } = load('article-metadata');
const redirects = require('../lib/legacy-redirects.json');

test('mapping covers every Spanish route and sitemap URL exactly once', () => {
  const spanishPaths = getSpanishStaticPaths().map(parts => `/es${parts.length ? '/' + parts.join('/') : ''}`);
  assert.deepEqual(pairs.map(pair => pair.es).sort(), spanishPaths.sort());
  assert.deepEqual(pairs.map(pair => SITE_ORIGIN + pair.es).sort(), getSpanishSitemapEntries().map(entry => entry.url).sort());
  assert.equal(new Set(pairs.flatMap(pair => [pair.en, pair.es])).size, pairs.length * 2);
  for (const pair of pairs) for (const route of [pair.en, pair.es]) {
    assert.equal(redirects[route], undefined, `Mapped URL redirects: ${route}`);
  }
});

test('both sides render identical en/es/x-default and retain their own canonical', () => {
  for (const pair of pairs) {
    const expected = { en: new URL(pair.en, SITE_ORIGIN).href, es: SITE_ORIGIN + pair.es, 'x-default': new URL(pair.en, SITE_ORIGIN).href };
    for (const route of [pair.en, pair.es]) {
      const canonical = new URL(route, SITE_ORIGIN).href;
      const metadata = withArticleMetadataDefaults({ alternates: { canonical } });
      assert.deepEqual(metadata.alternates.languages, expected, route);
      assert.equal(metadata.alternates.canonical, canonical, route);
      assert.equal(metadata.robots.index, true);
    }
  }
});

test('homepage, URL objects, trailing slash and fallback URL work', () => {
  assert.equal(getLocalizedLanguages('/es')['x-default'], SITE_ORIGIN + '/');
  assert.deepEqual(getLocalizedLanguages('/books/'), getLocalizedLanguages(SITE_ORIGIN + '/es/libros'));
  const canonical = new URL(SITE_ORIGIN + '/es');
  const result = withArticleMetadataDefaults({ alternates: { canonical } });
  assert.equal(result.alternates.canonical, canonical);
  assert.deepEqual(result.alternates.languages, getLocalizedLanguages('/es'));
  assert.deepEqual(withArticleMetadataDefaults({}, { url: SITE_ORIGIN + '/books' }).alternates.languages, getLocalizedLanguages('/books'));
});

test('untranslated, invalid and external URLs do not acquire Spanish alternates', () => {
  for (const route of ['/coffee', '/books/not-translated', '/es/not-published', 'https://example.com/books', 'http://[', undefined]) {
    assert.equal(getLocalizedLanguages(route), undefined, route);
  }
  const original = { canonical: SITE_ORIGIN + '/coffee', languages: { fr: 'https://example.com/fr' }, types: { 'application/rss+xml': '/feed.xml' } };
  const result = withArticleMetadataDefaults({ alternates: original, robots: { index: false } });
  assert.deepEqual(result.alternates, original);
  assert.equal(result.robots.index, false);
});
