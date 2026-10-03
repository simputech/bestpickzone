const assert = require('node:assert/strict');
const test = require('node:test');
const path = require('node:path');
const fs = require('node:fs');
const { loadSeoModule } = require('./lib/load-seo-module.cjs');
const { resolveTitle } = require('next/dist/lib/metadata/resolvers/resolve-title');
const { withArticleMetadataDefaults } = loadSeoModule(path.join(__dirname, '../lib/article-metadata.ts'));
const template = fs.readFileSync(path.join(__dirname, '../app/layout.tsx'), 'utf8').match(/template: '([^']+)'/)[1];

test('legacy and new article titles render one brand through the actual Next title resolver', () => {
  for (const title of ['Buyer Guide', 'Buyer Guide | BestPickZone', 'Buyer Guide | BestPickZone | BestPickZone', 'Buyer Guide | bestpickzone  ']) {
    const input = { title, alternates: { canonical: 'https://bestpickzone.com/coffee/example' } };
    const metadata = withArticleMetadataDefaults(input);
    assert.equal(resolveTitle(metadata.title, template).absolute, 'Buyer Guide | BestPickZone');
    assert.equal(withArticleMetadataDefaults(metadata).title, metadata.title);
    assert.equal(input.title, title);
  }
});

test('absolute titles and missing titles retain their Next semantics', () => {
  const title = { absolute: 'Custom title | BestPickZone' };
  assert.equal(resolveTitle(withArticleMetadataDefaults({ title }).title, template).absolute, title.absolute);
  assert.equal(withArticleMetadataDefaults({}).title, undefined);
  assert.equal(withArticleMetadataDefaults({ title: null }).title, null);
  assert.equal(withArticleMetadataDefaults({ title: 'BestPickZone buying guide | Other publication' }).title, 'BestPickZone buying guide | Other publication');
});

test('title normalization preserves explicit social titles, canonical and robots', () => {
  const metadata = withArticleMetadataDefaults({
    title: 'Buyer Guide | BestPickZone',
    openGraph: { title: 'Social headline' },
    twitter: { title: 'Twitter headline' },
    alternates: { canonical: 'https://bestpickzone.com/coffee/example' },
    robots: { index: false },
  });
  assert.equal(metadata.openGraph.title, 'Social headline');
  assert.equal(metadata.twitter.title, 'Twitter headline');
  assert.equal(metadata.alternates.canonical, 'https://bestpickzone.com/coffee/example');
  assert.equal(metadata.robots.index, false);
});

const { SEO_TITLES, getSeoTitle } = loadSeoModule(path.join(__dirname, '../lib/seo-titles.ts'));

test('all curated document titles render under 70 characters with one suffix', () => {
  assert.equal(Object.keys(SEO_TITLES).length, 57);
  for (const [route, title] of Object.entries(SEO_TITLES)) {
    const metadata = withArticleMetadataDefaults({
      title: 'Original editorial heading',
      alternates: { canonical: new URL(route, 'https://bestpickzone.com') },
      openGraph: { title: 'Original social headline' },
      twitter: { title: 'Original Twitter headline' },
    });
    const rendered = resolveTitle(metadata.title, template).absolute;
    assert.equal(rendered, `${title} | BestPickZone`, route);
    assert.ok(rendered.length < 70, `${route}: ${rendered.length}`);
    assert.equal(rendered.match(/BestPickZone/g).length, 1, route);
    assert.equal(metadata.openGraph.title, 'Original social headline', route);
    assert.equal(metadata.twitter.title, 'Original Twitter headline', route);
  }
});

test('curated titles match canonical paths and leave other sites and routes alone', () => {
  const route = '/books/best-stephen-king-books';
  assert.equal(getSeoTitle(route), SEO_TITLES[route]);
  assert.equal(getSeoTitle(`https://bestpickzone.com${route}/?test=1`), SEO_TITLES[route]);
  assert.equal(withArticleMetadataDefaults({ title: 'Heading' }, { url: `https://bestpickzone.com${route}` }).title, SEO_TITLES[route]);
  for (const url of [undefined, 'http://[', 'https://example.com' + route, 'https://bestpickzone.com/books/unknown']) {
    assert.equal(getSeoTitle(url), undefined);
  }
});
