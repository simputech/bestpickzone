const assert = require('node:assert/strict');
const test = require('node:test');
const path = require('node:path');
const { loadSeoModule } = require('./lib/load-seo-module.cjs');
const { matchAmazonProduct, selectAmazonProduct } = loadSeoModule(path.join(__dirname, '../lib/amazon-product-match.ts'));
const { AmazonMemoryCache, AmazonRequestGate, amazonRetryDelay } = loadSeoModule(path.join(__dirname, '../lib/amazon-creators-runtime.ts'));

const expected = { query: 'Example Aero 2 coffee grinder', brand: 'Example', model: 'EA2' };
const fetchedAt = '2026-10-16T22:00:00.000Z';
function item(asin = 'B000TEST01') {
  return {
    asin,
    detailPageURL: `https://www.amazon.com/dp/${asin}?tag=althcu-20&linkCode=ogi&th=1&psc=1`,
    images: { primary: { large: { url: 'https://m.media-amazon.com/images/I/example.jpg', width: 300, height: 500 } } },
    itemInfo: {
      title: { displayValue: 'Example Aero 2 Coffee Grinder, Stainless Steel' },
      byLineInfo: { brand: { displayValue: 'Example' } },
      manufactureInfo: { model: { displayValue: 'EA2' } },
    },
  };
}
const match = (source, request = expected) => matchAmazonProduct(source, request, 'althcu-20', 'www.amazon.com', fetchedAt);

test('exact product identity preserves all returned URLs and dimensions, without offers', () => {
  const source = item();
  source.offersV2 = { listings: [{ price: { displayAmount: '$199.99' } }] };
  const result = match(source);
  assert.ok(result);
  assert.equal(result.detailPageURL, source.detailPageURL);
  assert.equal(result.imageUrl, source.images.primary.large.url);
  assert.equal(result.imageWidth / result.imageHeight, 300 / 500);
  assert.equal(result.fetchedAt, fetchedAt);
  assert.equal(result.price, undefined);
});

test('wrong brand, model, ASIN, absent title evidence and category-only searches fail closed', () => {
  for (const alter of [
    source => { source.itemInfo.byLineInfo.brand.displayValue = 'Counterfeit'; },
    source => { source.itemInfo.manufactureInfo.model.displayValue = 'EA3'; },
    source => { source.itemInfo.title.displayValue = 'Example Aero 3 coffee grinder'; },
    source => { delete source.itemInfo.byLineInfo; },
  ]) { const source = item(); alter(source); assert.equal(match(source), null); }
  assert.equal(match(item(), { ...expected, asin: 'B000OTHER1' }), null);
  assert.equal(match(item(), { query: 'coffee grinder' }), null);
  assert.ok(match(item(), { query: 'Example Aero 2 coffee grinder' }));
  assert.ok(match(item(), { query: 'Example Aero 2', expectedTitle: 'Aero 2', brand: 'Example' }));
});

test('accessories, bundles, refurbished items and unrequested variants cannot become the pick', () => {
  for (const title of [
    'Example Aero 2 coffee grinder replacement burrs',
    'Example Aero 2 coffee grinder compatible burrs',
    'Example Aero 2 coffee grinder bundle',
    'Example Aero 2 coffee grinder renewed',
    'Example Aero 2 Plus coffee grinder',
    'Example Aero 2 coffee grinder Mini',
  ]) { const source = item(); source.itemInfo.title.displayValue = title; assert.equal(match(source), null, title); }
});

test('ambiguous search results never silently select the first product', () => {
  assert.equal(selectAmazonProduct([item(), item('B000TEST02')], expected, 'althcu-20', 'www.amazon.com', fetchedAt), null);
  assert.equal(selectAmazonProduct([null, { itemInfo: { title: { displayValue: 17 } } }, item()], expected, 'althcu-20', 'www.amazon.com', fetchedAt).asin, 'B000TEST01');
  assert.equal(selectAmazonProduct([item(), item()], expected, 'althcu-20', 'www.amazon.com', fetchedAt).asin, 'B000TEST01');
  assert.equal(selectAmazonProduct([item(), item('B000TEST02')], { ...expected, asin: 'B000TEST02' }, 'althcu-20', 'www.amazon.com', fetchedAt).asin, 'B000TEST02');
});

test('direct-link validation rejects spoofed hosts, mismatched ASINs, duplicate tags and credentials', () => {
  for (const url of [
    'https://www.amazon.com.evil.example/dp/B000TEST01?tag=althcu-20',
    'https://www.amazon.com/dp/B000OTHER1?tag=althcu-20',
    'https://www.amazon.com/dp/B000TEST01?tag=other-20',
    'https://www.amazon.com/dp/B000TEST01?tag=althcu-20&tag=other-20',
    'http://www.amazon.com/dp/B000TEST01?tag=althcu-20',
    'javascript:alert(1)',
    'https://user:pass@www.amazon.com/dp/B000TEST01?tag=althcu-20',
    'https://www.amazon.com:8443/dp/B000TEST01?tag=althcu-20',
  ]) { const source = item(); source.detailPageURL = url; assert.equal(match(source), null, url); }
  const slugged = item(); slugged.detailPageURL = 'https://www.amazon.com/example/dp/B000TEST01/?tag=althcu-20&th=1';
  assert.ok(match(slugged));
});

test('only original Amazon-hosted HTTPS image links and positive dimensions are accepted', () => {
  for (const alter of [
    source => { delete source.images; },
    source => { source.images.primary.large.url = 'https://example.com/image.jpg'; },
    source => { source.images.primary.large.url = 'https://user:pass@m.media-amazon.com/images/example.jpg'; },
    source => { source.images.primary.large.height = Infinity; },
    source => { source.images.primary.large.width = 0; },
  ]) { const source = item(); alter(source); assert.equal(match(source), null); }
});

test('memory cache expires without stale reads and bounds both size and lifetime', () => {
  let now = 0;
  const cache = new AmazonMemoryCache(2, () => now);
  cache.set('a', 'one', 1000); cache.set('b', null, 2000);
  assert.equal(cache.get('b'), null);
  now = 1000; assert.equal(cache.get('a'), undefined);
  cache.set('c', 'three', 1000); cache.set('d', 'four', 1000);
  assert.equal(cache.get('b'), undefined);
  cache.set('e', 'five', Infinity);
  now += 6 * 60 * 60 * 1000;
  assert.equal(cache.get('e'), undefined);
});

test('gate serializes concurrent requests, honors cooldowns and enforces local daily budget', async () => {
  let now = Date.parse(fetchedAt); const starts = [];
  const gate = new AmazonRequestGate(() => now, async ms => { now += ms; }, 1100, 3);
  for (const _ of [1, 2, 3]) { assert.equal(await gate.acquire(), true); starts.push(now); }
  assert.deepEqual(starts.slice(1).map((value, index) => value - starts[index]), [1100, 1100]);
  assert.equal(await gate.acquire(), false);
  now += 24 * 60 * 60 * 1000;
  gate.pause(60000); assert.equal(await gate.acquire(), false);
  now += 60000; assert.equal(await gate.acquire(), true);
});

test('Retry-After supports seconds and HTTP dates, with a safe minimum', () => {
  const now = Date.parse(fetchedAt);
  assert.equal(amazonRetryDelay('120', now), 120000);
  assert.equal(amazonRetryDelay(new Date(now + 120000).toUTCString(), now), 120000);
  assert.equal(amazonRetryDelay('0', now), 60000);
  assert.equal(amazonRetryDelay('not a date', now), 60000);
});

test('explicit curated accessories require ASIN, brand and discriminating title evidence', () => {
  const source = item();
  source.itemInfo.title.displayValue = 'Example Replacement Burrs Compatible with Aero 2';
  const request = { query: 'replacement burr set', asin: source.asin, brand: 'Example', requiredTitleTerms: ['burrs', 'Aero 2'], allowAccessory: true };
  assert.ok(match(source, request));
  assert.equal(match(source, { ...request, allowAccessory: false }), null);
  assert.equal(match(source, { ...request, asin: undefined }), null);
  assert.equal(match(source, { ...request, brand: 'Other' }), null);
  assert.equal(match(source, { ...request, requiredTitleTerms: ['burrs', 'Aero 3'] }), null);
  source.itemInfo.title.displayValue += ' Renewed';
  assert.equal(match(source, request), null);
});

test('editorial forbidden terms reject adjacent models, including pinned ASINs', () => {
  for (const term of ['Pro', 'Smart', 'Unibody', 'dual', 'stacking', 'tall pole']) {
    const source = item(); source.itemInfo.title.displayValue += ` ${term}`;
    assert.equal(match(source, { ...expected, forbiddenTitleTerms: [term] }), null);
    assert.equal(match(source, { ...expected, asin: source.asin, requiredTitleTerms: ['Aero 2'], forbiddenTitleTerms: [term] }), null);
  }
  const source = item(); source.itemInfo.title.displayValue += ' Professional grinder';
  assert.ok(match(source, { ...expected, forbiddenTitleTerms: ['Pro'] }));
  source.itemInfo.title.displayValue += ' Tall-Pole';
  assert.equal(match(source, { ...expected, forbiddenTitleTerms: ['tall pole'] }), null);
});

test('model family prefixes require identifier boundaries and returned metadata', () => {
  const request = { ...expected, model: undefined, modelPrefix: '45-682' };
  for (const identifier of ['45-682', '45-682-292', '45-682-216']) {
    const source = item(); source.itemInfo.manufactureInfo.model.displayValue = identifier;
    assert.ok(match(source, request), identifier);
  }
  for (const identifier of ['45-6820', '45-682A', '145-682', '45-686-292', 'A45-682']) {
    const source = item(); source.itemInfo.manufactureInfo.model.displayValue = identifier;
    assert.equal(match(source, request), null, identifier);
  }
  const partNumber = item(); delete partNumber.itemInfo.manufactureInfo.model;
  partNumber.itemInfo.manufactureInfo.itemPartNumber = { displayValue: '45-682-292' };
  assert.ok(match(partNumber, request));
  delete partNumber.itemInfo.manufactureInfo;
  assert.equal(match(partNumber, request), null);
});

test('pinned ASINs still require requested dimensions and reject forbidden configurations', () => {
  const source = item(); source.itemInfo.title.displayValue = 'Example portafilter 54mm Dual Spout';
  const request = { query: 'portafilter', asin: source.asin, brand: 'Example', requiredTitleTerms: ['portafilter', '54mm'] };
  assert.ok(match(source, request));
  assert.equal(match(source, { ...request, requiredTitleTerms: ['portafilter', '58mm'] }), null);
  assert.equal(match(source, { ...request, forbiddenTitleTerms: ['dual'] }), null);
});
