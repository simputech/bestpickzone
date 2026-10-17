const assert = require('node:assert/strict');
const test = require('node:test');
const path = require('node:path');
const { loadSeoModule } = require('./lib/load-seo-module.cjs');
const { articleCommerce } = loadSeoModule(path.join(__dirname, '../lib/article-commerce.ts'));
const { matchAmazonProduct, selectAmazonProduct } = loadSeoModule(path.join(__dirname, '../lib/amazon-product-match.ts'));
const picks = articleCommerce['/beauty/dyson-airwrap-vs-shark-flexstyle'].products;
// Fictional fixtures exercise identity boundaries; they are not catalog evidence.
function candidate(title, brand, model, asin = 'B000TEST01') {
 return { asin, detailPageURL: `https://www.amazon.com/dp/${asin}?tag=althcu-20`,
 images: {primary: {large: {url: 'https://m.media-amazon.com/images/I/SYNTHETIC.jpg', width: 300, height: 300}}},
 itemInfo: {title: {displayValue: title}, byLineInfo: {brand: {displayValue: brand}}, manufactureInfo: {model: {displayValue: model}}} };
}
const goodDyson = () => candidate('Dyson Airwrap i.d. Multi-Styler and Dryer Straight+Wavy', 'Dyson', 'SYNTHETIC');
const goodShark = () => candidate('Shark FlexStyle HD430 Air Styling & Drying System', 'Shark', 'HD430');
const match = (item, pick) => matchAmazonProduct(item, pick, 'althcu-20', 'www.amazon.com', '2026-10-17T00:00:00Z');
test('Airwrap mapping accepts i.d. Straight+Wavy and rejects other generations and accessories', () => {
 assert.ok(match(goodDyson(), picks[0]));
 for (const title of [
  'Dyson Airwrap Origin Multi-Styler and Dryer Straight+Wavy',
  'Dyson Airwrap Co-anda2x Multi-Styler and Dryer Straight+Wavy',
  'Dyson Airwrap i.d. Multi-Styler and Dryer Curly+Coily',
  'Dyson Airwrap i.d. Straight+Wavy Storage Case',
  'Dyson Airwrap i.d. Straight+Wavy Replacement Barrel',
  'Dyson Airwrap i.d. Multi-Styler and Dryer Straight+Wavy Renewed',
 ]) assert.equal(match(candidate(title, 'Dyson', 'SYNTHETIC'), picks[0]), null, title);
});
test('FlexStyle mapping requires original HD430 title and returned model', () => {
 assert.ok(match(goodShark(), picks[1]));
 for (const [title, model] of [
  ['Shark FlexStyle HD435 Air Styling & Drying System', 'HD435'],
  ['Shark FlexStyle HD430 Air Styling & Drying System', 'HD435'],
  ['Shark FlexStyle HD430 Air Styling & Drying System', ''],
  ['Shark FlexStyle HD430 Replacement Styling Concentrator', 'HD430'],
  ['Shark FlexStyle HD430 IonCurl Air Styling & Drying System', 'HD430'],
 ]) assert.equal(match(candidate(title, 'Shark', model), picks[1]), null, title);
});
test('ambiguous air-styler discovery and wrong affiliate tags fail closed', () => {
 for (const [i, make] of [goodDyson, goodShark].entries()) {
  const a = make(), b = make(); b.asin = 'B000TEST02'; b.detailPageURL = 'https://www.amazon.com/dp/B000TEST02?tag=althcu-20';
  assert.equal(selectAmazonProduct([a,b], picks[i], 'althcu-20', 'www.amazon.com', '2026-10-17'), null);
  a.detailPageURL = a.detailPageURL.replace('althcu-20','wrong-20');
  assert.equal(match(a, picks[i]), null);
 }
});
test('wet-to-dry mappings reject adjacent tools and accessory-only listings', () => {
 const [dyson,ghd] = articleCommerce['/beauty/dyson-airstrait-vs-ghd-duet-style'].products;
 assert.ok(match(candidate('Dyson Airstrait Straightener', 'Dyson', 'TEST'), dyson));
 assert.ok(match(candidate('ghd Duet Style 2-in-1 Hot Air Styler', 'ghd', 'TEST'), ghd));
 for (const title of ['Dyson Corrale Straightener','Dyson Airstrait Straightener Storage Case','Dyson Airstrait Straightener 240V'])
  assert.equal(match(candidate(title,'Dyson','TEST'),dyson),null,title);
 for (const title of ['ghd Duet Blowdry Hair Styler','ghd Duet Style Styler Stand','ghd Duet Style Styler 220V'])
  assert.equal(match(candidate(title,'ghd','TEST'),ghd),null,title);
});
test('facial-device and lip mappings reject wrong generations, kit contents and flavors', () => {
 const [nuface, sola] = articleCommerce['/beauty/nuface-trinity-vs-solawave-wand'].products;
 const [laneige] = articleCommerce['/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide'].products;
 assert.ok(match(candidate('NuFACE TRINITY+ Starter Kit','NuFACE','TEST'),nuface));
 assert.ok(match(candidate('Solawave Radiant Renewal 4-in-1 Skincare Wand','Solawave','TEST'),sola));
 assert.ok(match(candidate('LANEIGE Lip Sleeping Mask Berry 20g','LANEIGE','TEST'),laneige));
 for (const title of ['NuFACE Trinity Starter Kit','NuFACE TRINITY+ Complete Kit','NuFACE TRINITY+ Starter Kit Replacement Attachment'])
  assert.equal(match(candidate(title,'NuFACE','TEST'),nuface),null,title);
 for (const title of ['Solawave Advanced 4-in-1 Skincare Wand','Solawave Radiant Renewal 4-in-1 Skincare Wand Charger Only'])
  assert.equal(match(candidate(title,'Solawave','TEST'),sola),null,title);
 for (const title of ['LANEIGE Lip Sleeping Mask Vanilla 20g','LANEIGE Lip Sleeping Mask Berry 3g','LANEIGE Lip Sleeping Mask Berry 20g Gift Set','LANEIGE Lip Sleeping Mask Berry 20g Applicator'])
  assert.equal(match(candidate(title,'LANEIGE','TEST'),laneige),null,title);
});
test('air fryer picks keep recalled and adjacent model identities separate', () => {
 const [cosori,ninja] = articleCommerce['/home-kitchen/best-air-fryers'].products;
 assert.ok(match(candidate('COSORI CP358-AF 5.8QT Air Fryer Non-Smart','COSORI','CP358-AF'),cosori));
 assert.ok(match(candidate('Ninja AF101 4 Qt Air Fryer','Ninja','AF101','B07FDJMC9Q'),ninja));
 for (const title of ['COSORI CP158-AF 5.8QT Air Fryer','COSORI CS358-AF 5.8QT Smart Air Fryer','COSORI CP358-AF Replacement Basket'])
  assert.equal(match(candidate(title,'COSORI','TEST'),cosori),null,title);
 for (const title of ['Ninja AF101C 4 Qt Air Fryer','Ninja AF101 4 Qt Air Fryer Replacement Basket','Ninja AF101 4 Qt Air Fryer 240V'])
  assert.equal(match(candidate(title,'Ninja','TEST','B07FDJMC9Q'),ninja),null,title);
});
