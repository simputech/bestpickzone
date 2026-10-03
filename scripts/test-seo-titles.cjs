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
