const assert = require('node:assert/strict');
const test = require('node:test');
const path = require('node:path');
const { loadSeoModule } = require('./lib/load-seo-module.cjs');
const { articleCommerce } = loadSeoModule(path.join(__dirname, '../lib/article-commerce.ts'));
const { matchAmazonProduct, selectAmazonProduct } = loadSeoModule(path.join(__dirname, '../lib/amazon-product-match.ts'));

// All titles, images and response objects below are deliberately synthetic.
// Public source identity checks are documented in batch-01-runtime-corrections.md.
// ASINs/models are curated identity constraints, not stored Amazon API content.
const fixtures = [
  { asin: 'B01DBGQR1K', brand: 'KitchenAid', title: 'KitchenAid KSMPRA pasta roller set; fits stand mixers', wrongTitle: 'KitchenAid KSMPSA pasta roller; fits stand mixers', terms: ['KSMPRA', 'pasta'] },
  { asin: 'B01ENK4UV2', brand: 'KitchenAid', title: 'KitchenAid KSMPEXTA pasta press; for use with mixers', wrongTitle: 'KitchenAid KSM3PPA pasta press accessories', terms: ['KSMPEXTA', 'pasta', 'press'] },
  { asin: 'B07T1JPCNK', brand: 'Ooni', title: 'Ooni 12 perforated peel accessories', wrongTitle: 'Ooni 14 perforated peel accessories', terms: ['12', 'perforated', 'peel'] },
  { asin: 'B0821NDN33', brand: 'Ooni', title: 'Ooni 7 turning peel accessories', wrongTitle: 'Ooni 9 turning peel accessories', terms: ['7', 'turning', 'peel'] },
  { asin: 'B07TB9LBHR', brand: 'Ooni', title: 'Ooni 12 bamboo peel accessories', wrongTitle: 'Ooni 14 bamboo peel accessories', terms: ['12', 'bamboo', 'peel'] },
  { asin: 'B0B9CJLVY5', brand: 'Ninja', title: 'Ninja CREAMi XL tubs XSKPNTLD2; compatible with NC500', wrongTitle: 'Ninja CREAMi Original pints XSKPLID2CD; compatible with NC300', terms: ['CREAMi', 'XSKPNTLD2'] },
  { asin: 'B0D5FRQXWZ', brand: 'Logitech', title: 'Logitech MX Creative Console; editing accessories', wrongTitle: 'Logitech MX Keypad; editing accessories', terms: ['MX Creative Console'] },
  { asin: 'B084QF1F6M', brand: 'Cosco', model: '14036BLK1E', title: 'COSCO XL 38.5 resin fold-in-half card table black', wrongTitle: 'COSCO 34 vinyl folding card table black' },
  { asin: 'B00SOWJUO8', brand: 'Cosco', model: '14696BLK1E', title: 'COSCO 34 square vinyl folding card table black', wrongTitle: 'COSCO XL 38.5 resin fold-in-half card table black' },
  { asin: 'B0BW272XCV', brand: 'Baratza', title: 'Baratza Encore ESP grinder in black', wrongTitle: 'Baratza Encore standard grinder in black', forbidden: 'Pro' },
  { asin: 'B07GFV6HM8', brand: 'Eureka', title: 'Eureka Mignon Specialita matte black grinder', wrongTitle: 'Eureka Mignon Silenzio matte black grinder', forbidden: 'Smart' },
];
const fetchedAt = '2026-10-16T23:20:00.000Z';

function entry(fixture) {
  const found = Object.entries(articleCommerce).flatMap(([route, config]) =>
    (config.batch === 1 ? config.products || [] : []).filter(pick => pick.asin === fixture.asin).map(request => ({ route, request, tag: config.partnerTag || 'althcu-20' }))
  );
  assert.equal(found.length, 1, `one curated entry for ${fixture.asin}`);
  return found[0];
}

function item(fixture, asin = fixture.asin) {
  const { tag } = entry(fixture);
  return {
    asin,
    detailPageURL: `https://www.amazon.com/dp/${asin}?tag=${tag}`,
    // Nonexistent test image. No remote request is made by this test suite.
    images: { primary: { large: { url: 'https://m.media-amazon.com/images/I/SYNTHETIC-NOT-A-PRODUCT.jpg', width: 320, height: 240 } } },
    itemInfo: {
      title: { displayValue: fixture.title },
      byLineInfo: { brand: { displayValue: fixture.brand } },
      ...(fixture.model ? { manufactureInfo: { model: { displayValue: fixture.model } } } : {}),
    },
  };
}

function match(fixture, source = item(fixture), request = entry(fixture).request) {
  return matchAmazonProduct(source, request, entry(fixture).tag, 'www.amazon.com', fetchedAt);
}

test('all eleven reviewed identities are pinned in the real article registry', () => {
  assert.equal(fixtures.length, 11);
  for (const fixture of fixtures) {
    const { request } = entry(fixture);
    assert.equal(request.brand, fixture.brand);
    if (fixture.terms) {
      assert.equal(request.allowAccessory, true);
      assert.deepEqual(request.requiredTitleTerms, fixture.terms);
    } else {
      assert.equal(request.model, fixture.model);
      assert.notEqual(request.allowAccessory, true);
    }
    if (fixture.forbidden) assert.deepEqual(request.forbiddenTitleTerms, [fixture.forbidden]);
  }
});

for (const fixture of fixtures) {
  test(`${fixture.asin}: intended synthetic identity matches`, () => {
    const source = item(fixture);
    const result = match(fixture, source);
    assert.ok(result);
    assert.equal(result.asin, fixture.asin);
    assert.equal(result.detailPageURL, source.detailPageURL);
    assert.equal(result.price, undefined);
  });

  test(`${fixture.asin}: wrong ASIN, wrong/missing brand and adjacent product title fail closed`, () => {
    // Keep URL internally consistent so this specifically exercises the ASIN pin.
    assert.equal(match(fixture, item(fixture, 'B000WRONG1')), null);
    const wrongBrand = item(fixture);
    wrongBrand.itemInfo.byLineInfo.brand.displayValue = 'Unrelated Maker';
    assert.equal(match(fixture, wrongBrand), null);
    const missingBrand = item(fixture);
    delete missingBrand.itemInfo.byLineInfo;
    assert.equal(match(fixture, missingBrand), null);
    const adjacent = item(fixture);
    adjacent.itemInfo.title.displayValue = fixture.wrongTitle;
    assert.equal(match(fixture, adjacent), null);
  });

  test(`${fixture.asin}: misleading compatible accessory listings do not substitute for the pinned pick`, () => {
    const accessory = item(fixture, 'B000WRONG1');
    accessory.itemInfo.title.displayValue = `Storage cover compatible with ${fixture.title}`;
    assert.equal(match(fixture, accessory), null);
    // A third-party item retaining every title keyword is not first-party identity.
    const thirdParty = item(fixture);
    thirdParty.itemInfo.title.displayValue = `Replacement part compatible with ${fixture.title}`;
    thirdParty.itemInfo.byLineInfo.brand.displayValue = 'Unrelated Maker';
    assert.equal(match(fixture, thirdParty), null);
    const { request, tag } = entry(fixture);
    assert.equal(selectAmazonProduct([accessory, item(fixture)], request, tag, 'www.amazon.com', fetchedAt)?.asin, fixture.asin);
  });

  test(`${fixture.asin}: accessory allowance does not allow used stock or bundles`, () => {
    for (const condition of ['Renewed', 'Refurbished', 'Used', 'Bundle']) {
      const source = item(fixture);
      source.itemInfo.title.displayValue += ` ${condition}`;
      assert.equal(match(fixture, source), null, condition);
    }
  });
}

test('the seven title corrections remain narrow ASIN/brand/title exceptions', () => {
  for (const fixture of fixtures.filter(candidate => candidate.terms)) {
    const { request } = entry(fixture);
    assert.equal(match(fixture, item(fixture), { ...request, allowAccessory: false }), null);
    assert.equal(match(fixture, item(fixture), { ...request, asin: undefined }), null);
    assert.equal(match(fixture, item(fixture), { ...request, requiredTitleTerms: [] }), null);
    for (const term of fixture.terms) {
      const source = item(fixture);
      source.itemInfo.title.displayValue = fixture.title.replace(term, 'not-the-requested-term');
      assert.equal(match(fixture, source), null, `${fixture.asin}: missing ${term}`);
    }
  }
});

test('COSCO exact model gates reject other variants and require returned model evidence', () => {
  for (const fixture of fixtures.filter(candidate => candidate.model)) {
    for (const model of ['OTHER-MODEL', fixture.model.replace('BLK', 'GRAY'), `${fixture.model}-2PACK`]) {
      const source = item(fixture);
      source.itemInfo.manufactureInfo.model.displayValue = model;
      assert.equal(match(fixture, source), null, model);
    }
    const absent = item(fixture);
    delete absent.itemInfo.manufactureInfo;
    assert.equal(match(fixture, absent), null);
    const partNumber = item(fixture);
    partNumber.itemInfo.manufactureInfo = { itemPartNumber: { displayValue: fixture.model } };
    assert.ok(match(fixture, partNumber));
  }
});

test('new grinder pins retain Pro/Smart exclusions and the default accessory guard', () => {
  for (const fixture of fixtures.filter(candidate => candidate.forbidden)) {
    const { request } = entry(fixture);
    assert.equal(request.model, undefined, 'no unsupported model-label gate added');
    assert.notEqual(request.allowAccessory, true);
    for (const suffix of [fixture.forbidden, 'replacement burrs', 'compatible accessories']) {
      const source = item(fixture);
      source.itemInfo.title.displayValue += ` ${suffix}`;
      assert.equal(match(fixture, source), null, `${fixture.asin}: ${suffix}`);
    }
  }
});

test('My Fair Mahjong stays unpinned and generic racks remain an honest fallback', () => {
  const requests = articleCommerce['/mahjong/best-mahjong-racks-pushers-oversized-tiles'].products;
  assert.equal(requests.length, 2);
  for (const request of requests) {
    assert.equal(request.asin, undefined);
    assert.notEqual(request.allowAccessory, true);
    const source = item(fixtures[0], 'B000WRONG1');
    source.itemInfo.title.displayValue = 'Generic 18 inch mahjong racks with pushers';
    source.itemInfo.byLineInfo.brand.displayValue = 'Generic';
    assert.equal(matchAmazonProduct(source, request, 'althcu-20', 'www.amazon.com', fetchedAt), null);
    assert.equal(selectAmazonProduct([], request, 'althcu-20', 'www.amazon.com', fetchedAt), null);
  }
});
