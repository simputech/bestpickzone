const assert = require('node:assert/strict');
const test = require('node:test');
const path = require('node:path');
const { loadSeoModule } = require('./lib/load-seo-module.cjs');
const { articleCommerce } = loadSeoModule(path.join(__dirname, '../lib/article-commerce.ts'));
const { matchAmazonProduct, selectAmazonProduct } = loadSeoModule(path.join(__dirname, '../lib/amazon-product-match.ts'));
const entries = Object.entries(articleCommerce).filter(([, config]) => config.batch === 2);
const now = '2026-10-16T23:42:00.000Z';
// Deliberately synthetic data, never fetched or stored Amazon content.
function item(pick, asin = pick.asin || 'B000TEST01') {
  return {
    asin,
    detailPageURL: `https://www.amazon.com/dp/${asin}?tag=althcu-20`,
    images: { primary: { large: { url: 'https://m.media-amazon.com/images/I/SYNTHETIC-NOT-A-PRODUCT.jpg', width: 320, height: 240 } } },
    itemInfo: {
      title: { displayValue: [pick.expectedTitle || pick.query, ...(pick.requiredTitleTerms || [])].join(' ') },
      byLineInfo: { brand: { displayValue: pick.brand } },
      manufactureInfo: { model: { displayValue: pick.model || (pick.modelPrefix ? `${pick.modelPrefix}-292` : 'TEST-MODEL') } },
    },
  };
}
function match(pick, source = item(pick)) { return matchAmazonProduct(source, pick, 'althcu-20', 'www.amazon.com', now); }
for (const [route, config] of entries) {
  test(`${route}: curated identities match synthetic responses and reject unsafe substitutes`, () => {
    assert.ok(config.products.length > 0 && config.products.length <= 3);
    for (const pick of config.products) {
      assert.ok(pick.brand, 'explicit brand required');
      assert.ok(pick.query && pick.label && pick.note);
      assert.ok(match(pick), `${pick.label}: intended identity`);
      if (pick.allowAccessory) assert.ok(pick.asin && pick.brand && pick.requiredTitleTerms.length);
      const wrongBrand = item(pick);
      wrongBrand.itemInfo.byLineInfo.brand.displayValue = 'Unrelated Maker';
      assert.equal(match(pick, wrongBrand), null);
      const missingBrand = item(pick);
      delete missingBrand.itemInfo.byLineInfo;
      assert.equal(match(pick, missingBrand), null);
      if (pick.asin) assert.equal(match(pick, item(pick, 'B000WRONG1')), null);
      else assert.equal(selectAmazonProduct([item(pick), item(pick, 'B000TEST02')], pick, 'althcu-20', 'www.amazon.com', now), null, 'ambiguous discovery fails closed');
      if (pick.model || pick.modelPrefix) {
        const wrongModel = item(pick);
        wrongModel.itemInfo.manufactureInfo.model.displayValue = 'OTHER-VARIANT';
        assert.equal(match(pick, wrongModel), null);
        delete wrongModel.itemInfo.manufactureInfo;
        assert.equal(match(pick, wrongModel), null);
      }
      for (const suffix of ['Renewed', 'Refurbished', 'Bundle', ...(pick.forbiddenTitleTerms || [])]) {
        const wrong = item(pick);
        wrong.itemInfo.title.displayValue += ` ${suffix}`;
        assert.equal(match(pick, wrong), null, `${pick.label}: ${suffix}`);
      }
      if (!pick.allowAccessory) {
        const replacement = item(pick);
        replacement.itemInfo.title.displayValue += ' replacement accessories';
        assert.equal(match(pick, replacement), null);
      }
      const wrongTag = item(pick);
      wrongTag.detailPageURL = wrongTag.detailPageURL.replace('althcu-20', 'wrong-20');
      assert.equal(match(pick, wrongTag), null);
    }
  });
}

test('batch 2 opt-in covers exactly twenty reviewed routes', () => {
  const queue = require('../reports/creator-rollout/inventory/rollout-queue.json');
  const batch = queue.batches.find(value => value.batch === 2);
  const paths = batch.pages.map(value => typeof value === 'string' ? value : value.path);
  assert.deepEqual(entries.map(([route]) => route).sort(), paths.sort());
});

test('unpinned named accessories and pinned brewer substitutes fail closed', () => {
  const cases = [
    ['/coffee/breville-bambino-plus-vs-gaggia-classic-pro', 1, 'Gaggia Classic E24 120V Brass Boiler Heating Element'],
    ['/beauty/dr-dennis-gross-vs-omnilux-contour', 0, 'Dr Dennis Gross SpectraLite FaceWare Pro Charger'],
    ['/coffee/timemore-chestnut-c3-vs-kingrinder-k6', 0, 'TIMEMORE Chestnut C3 Grinder Handle'],
    ['/coffee/1zpresso-jx-pro-vs-comandante-c40', 1, 'Comandante C40 MK4 Nitro Blade Grinder Glass Jar'],
    ['/coffee/acaia-lunar-vs-timemore-black-mirror-nano', 0, 'Acaia Lunar 2021 Scale Carrying Case'],
    ['/coffee/aeropress-original-vs-aeropress-premium', 0, 'AeroPress Original Coffee Paper Filters'],
    ['/coffee/aeropress-original-vs-aeropress-premium', 1, 'AeroPress Premium Coffee Filter Cap'],
  ];
  for (const [route, index, title] of cases) {
    const pick = articleCommerce[route].products[index];
    const source = item(pick);
    source.itemInfo.title.displayValue = title;
    assert.equal(match(pick, source), null, title);
  }
});

test('official-store-first products are not forced into unverified Amazon cards', () => {
  const lighting = articleCommerce['/wfh/best-video-call-lighting-for-glasses'].products;
  const led = articleCommerce['/beauty/dr-dennis-gross-vs-omnilux-contour'].products;
  assert.equal(lighting.length, 1);
  assert.ok(lighting[0].label.includes('Neo'));
  assert.equal(led.length, 1);
  assert.ok(led[0].label.includes('Dennis Gross'));
});
