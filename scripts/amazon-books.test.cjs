const assert = require('node:assert/strict');
const test = require('node:test');
const path = require('node:path');
const { loadSeoModule } = require('./lib/load-seo-module.cjs');
const { matchAmazonBook } = loadSeoModule(path.join(__dirname, '../lib/amazon-book-match.ts'));

const expected = { asin: 'B000TEST01', title: 'Example Book', author: 'Sample Author' };
const fetchedAt = '2026-10-14T22:00:00.000Z';
function item() {
  return {
    asin: expected.asin,
    detailPageURL: 'https://www.amazon.com/dp/B000TEST01?tag=althcu-20&linkCode=osi&th=1&psc=1',
    images: { primary: { large: { url: 'https://m.media-amazon.com/images/I/example.jpg', width: 325, height: 500 } } },
    itemInfo: {
      title: { displayValue: 'Example Book: A Novel' },
      byLineInfo: { contributors: [{ name: 'Author, Sample', roleType: 'author' }] },
      classifications: { binding: { displayValue: 'Paperback' }, productGroup: { displayValue: 'Book' } },
      contentInfo: { languages: { displayValues: [{ displayValue: 'English', type: 'Published' }] } },
    },
  };
}
const match = value => matchAmazonBook(value, expected, 'althcu-20', fetchedAt);

test('matching English edition preserves Amazon link, image and proportions without prices or reviews', () => {
  const source = item();
  const result = match(source);
  assert.ok(result);
  assert.equal(result.detailPageURL, source.detailPageURL);
  assert.equal(result.imageUrl, source.images.primary.large.url);
  assert.equal(result.imageWidth / result.imageHeight, 325 / 500);
  assert.equal(result.binding, 'Paperback');
  assert.equal(result.fetchedAt, fetchedAt);
  assert.equal(result.price, undefined);
  assert.equal(result.reviews, undefined);
});

test('sequels, bundles and study guides cannot pass as the requested work', () => {
  for (const title of ['Example Book Two', 'Example Book: Study Guide', 'Example Book: Collection Set', 'Example Book: Summary']) {
    const source = item(); source.itemInfo.title.displayValue = title;
    assert.equal(match(source), null, title);
  }
});

test('author and published language must match; missing evidence does not become a product card', () => {
  for (const alter of [
    source => { source.itemInfo.byLineInfo.contributors[0].name = 'Another Writer'; },
    source => { source.itemInfo.byLineInfo.contributors[0].roleType = 'editor'; },
    source => { source.itemInfo.contentInfo.languages.displayValues[0].displayValue = 'Spanish'; },
    source => { delete source.itemInfo.byLineInfo; },
    source => { delete source.itemInfo.contentInfo; },
  ]) { const source = item(); alter(source); assert.equal(match(source), null); }
});

test('subtitle and parenthetical edition qualifiers fail closed after punctuation normalization', () => {
  for (const edition of [
    'Study-Guide', 'Study—Guide', 'Boxed-Set', 'Collection/Set', 'Abridged',
    'Graphic-Novel', 'Graphic—Novel', 'Graphic Edition', 'Graphic Adaptation',
    'Adapted for Young Readers', 'Young Readers’ Edition', 'Young Reader’s Edition',
    'Young Adult Edition', 'Junior Edition', 'Condensed Edition', 'Simplified Edition',
    'Retold', 'Retelling', 'Comic', 'Manga', 'Easy Reader',
  ]) {
    for (const title of [`Example Book: ${edition}`, `Example Book (${edition})`]) {
      const source = item(); source.itemInfo.title.displayValue = title;
      assert.equal(match(source), null, title);
    }
  }
});

test('ordinary novel subtitles and explicitly unabridged print editions remain eligible', () => {
  for (const title of ['Example Book', 'Example Book: A Novel', 'Example Book (Complete and Unabridged)', 'Example Book: Anniversary Edition']) {
    const source = item(); source.itemInfo.title.displayValue = title;
    assert.ok(match(source), title);
  }
});

test('only verified print formats and exact returned ASIN are accepted', () => {
  for (const alter of [
    source => { source.asin = 'B000OTHER1'; },
    source => { source.itemInfo.classifications.binding.displayValue = 'Kindle Edition'; },
    source => { source.itemInfo.classifications.productGroup.displayValue = 'Video'; },
  ]) { const source = item(); alter(source); assert.equal(match(source), null); }
  const hardback = item(); hardback.itemInfo.classifications.binding.displayValue = 'Hardcover';
  assert.equal(match(hardback).binding, 'Hardcover');
});

test('product links require HTTPS, exact Amazon host/ASIN and authorized affiliate tag', () => {
  for (const url of ['https://www.amazon.com.evil.example/dp/B000TEST01?tag=althcu-20', 'https://www.amazon.com/dp/B000OTHER1?tag=althcu-20', 'https://www.amazon.com/dp/B000TEST01?tag=other-20', 'http://www.amazon.com/dp/B000TEST01?tag=althcu-20', 'javascript:alert(1)', 'https://user:pass@www.amazon.com/dp/B000TEST01?tag=althcu-20']) {
    const source = item(); source.detailPageURL = url; assert.equal(match(source), null, url);
  }
});

test('missing, invalid or off-origin image data cannot be labeled API product content', () => {
  for (const alter of [
    source => { delete source.images; },
    source => { source.images.primary.large.url = 'https://example.com/cover.jpg'; },
    source => { source.images.primary.large.height = 0; },
  ]) { const source = item(); alter(source); assert.equal(match(source), null); }
});

// Production returned these stage editions for requests for the novels.
// The remaining metadata here is synthetic so the title boundary is tested alone.
test('stage and screen editions cannot satisfy a novel request even with matching original-author metadata', () => {
  for (const [work, author, edition] of [
    ['And Then There Were None', 'Agatha Christie', 'And Then There Were None (Play)'],
    ['Hamnet', 'Maggie O Farrell', 'Hamnet (Modern Plays)'],
    ['Example Book', 'Sample Author', 'Example Book: A Play'],
    ['Example Book', 'Sample Author', 'Example Book (Screenplay)'],
    ['Example Book', 'Sample Author', 'Example Book: Stage Script'],
    ['Example Book', 'Sample Author', 'Example Book (Dramatisation)'],
    ['Example Book', 'Sample Author', 'Example Book (Acting Edition)'],
    ['Example Book', 'Sample Author', 'Example Book (Stage Edition)'],
    ['Example Book', 'Sample Author', 'Example Book (Performance Edition)'],
    ['Example Book', 'Sample Author', 'Example Book: Performance—Edition'],
  ]) {
    const source=item();source.itemInfo.title.displayValue=edition;source.itemInfo.byLineInfo.contributors[0].name=author;
    const request={...expected,title:work,author};
    assert.equal(matchAmazonBook(source,request,'althcu-20',fetchedAt),null,edition);
    source.itemInfo.title.displayValue=work+': A Novel';
    assert.ok(matchAmazonBook(source,request,'althcu-20',fetchedAt),work);
  }
});
test('a requested title containing play remains eligible without a script edition qualifier', () => {
  const source=item();source.itemInfo.title.displayValue='Play It As It Lays: A Novel';
  assert.ok(matchAmazonBook(source,{...expected,title:'Play It As It Lays'},'althcu-20',fetchedAt));
});
