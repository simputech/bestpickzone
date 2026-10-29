const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

function loader(react = React) {
  const cache = new Map();
  const load = filename => {
    filename = path.resolve(filename);
    if (cache.has(filename)) return cache.get(filename).exports;
    const module = { exports: {} }; cache.set(filename, module);
    const source = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX } }).outputText;
    const localRequire = specifier => {
      if (specifier === 'react') return react;
      if (specifier === 'react/jsx-runtime') return require(specifier);
      if (specifier === 'next/link') return { default: ({ children, ...props }) => React.createElement('a', props, children) };
      if (['@/lib/affiliate-links', '@/lib/amazon-link-labels'].includes(specifier)) return load(path.join(__dirname, '../', specifier.slice(2) + '.ts'));
      if (!specifier.startsWith('.')) throw Error(`Unexpected import: ${specifier}`);
      return load(path.resolve(path.dirname(filename), specifier + '.tsx'));
    };
    vm.runInThisContext(`(function(require, module, exports) {${source}\n})`, { filename })(localRequire, module, module.exports);
    return module.exports;
  };
  return load;
}
const component = filename => path.join(__dirname, '../components/article/', filename + '.tsx');

test('failed Amazon image has an explicit QA marker and does not poison a replacement image URL', () => {
  let state = null;
  const load = loader({ useState: () => [state, value => { state = value; }] });
  const Image = load(component('AmazonProductImage')).default;
  const props = { src: 'https://m.media-amazon.com/images/I/one.jpg', alt: 'Product' };
  const initial = Image(props);
  assert.equal(initial.type, 'img');
  assert.equal(initial.props.src, props.src);
  initial.props.onError();
  const failed = Image(props);
  assert.equal(failed.type, 'span');
  assert.equal(failed.props['data-amazon-image-status'], 'unavailable');
  assert.match(failed.props.children, /Image unavailable/);
  const updated = Image({ ...props, src: 'https://m.media-amazon.com/images/I/two.jpg' });
  assert.equal(updated.type, 'img');
});

test('product cards preserve returned links and dimensions, while fallbacks are explicitly searches', () => {
  const Card = loader()(component('AmazonProductCard')).default;
  const item = { asin: 'B000TEST01', title: 'Exact model', detailPageURL: 'https://www.amazon.com/exact/dp/B000TEST01?tag=grandparentsgift-20&linkCode=ogi&th=1&psc=1', imageUrl: 'https://m.media-amazon.com/images/I/test.jpg', imageWidth: 350, imageHeight: 500, fetchedAt: '2026-10-16T22:00:00Z' };
  const props = { item, label: 'Editorial label', query: 'Exact model', partnerTag: 'grandparentsgift-20', placement: 'test' };
  const html = renderToStaticMarkup(React.createElement(Card, props));
  assert.match(html, /data-amazon-source="creators-api"/);
  assert.match(html, /data-amazon-asin="B000TEST01"/);
  assert.equal((html.match(/tag=grandparentsgift-20&amp;linkCode=ogi&amp;th=1&amp;psc=1/g) || []).length, 3);
  assert.match(html, /width="350" height="500"/);
  assert.match(html, /<a[^>]+><img /);
  assert.doesNotMatch(html, /\$\s*\d/);
  const fallback = renderToStaticMarkup(React.createElement(Card, { ...props, item: null }));
  assert.match(fallback, /data-amazon-source="fallback"/);
  assert.match(fallback, /Live product data is unavailable/);
  assert.match(fallback, /\/s\?k=Exact%20model&amp;tag=grandparentsgift-20/);
  assert.doesNotMatch(fallback, /<img /);
});

test('runtime verifier rejects recovered image failures, missing images and wrong image-ASIN links', () => {
  const source = fs.readFileSync(path.join(__dirname, 'verify-creator-rollout.cjs'), 'utf8');
  assert.match(source, /!result\.imageFailureFallbacks/);
  assert.match(source, /!result\.missingImages/);
  assert.match(source, /result\.imageCount === result\.liveCards/);
  assert.match(source, /url\.pathname\.split\('\/'\)\.filter\(Boolean\)\.at\(-1\) !== asin/);
  assert.match(source, /pilotTag && u\.searchParams\.get\('tag'\) !== pilotTag/);
  assert.doesNotMatch(source, /closest\('a\[href\*="amazon\.com\/dp\/"\]'/);
});

test('book CTA search labels override purchase wording without rewriting destinations', () => {
 const CTA=loader()(component('BookCTA')).default;
 const props={title:'Example Book',author:'Author',trackingId:'test'};
 const search=renderToStaticMarkup(React.createElement(CTA,{...props,ctaLabel:'Buy now'}));
 assert.match(search,/Search Amazon for Example Book editions/);
 assert.match(search,/tag=althcu-20/);
 assert.doesNotMatch(search,/Buy now/);
 for(const [url,platform,label] of [['https://www.amazon.com/dp/B000TEST01?tag=grandparentsgift-20','amazon','View this edition'],['https://www.ebay.com/itm/123','ebay','See current eBay listings']]) {
  const html=renderToStaticMarkup(React.createElement(CTA,{...props,affiliateUrl:url,affiliatePlatform:platform,ctaLabel:label}));
  assert.ok(html.includes(label)); assert.doesNotMatch(html,/Search Amazon/);
 }
});
