const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

// Synthetic fixtures only. No network, credentials, catalog payloads or real images.
function load(relative, mocks) {
  const filename = path.join(__dirname, '..', relative);
  const source = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const module = { exports: {} };
  const localRequire = name => {
    if (name === 'react/jsx-runtime') return require(name);
    if (name === '@/lib/amazon-link-labels') return load('lib/amazon-link-labels.ts', {});
    if (Object.hasOwn(mocks, name)) return mocks[name];
    throw Error(`Unexpected dependency: ${name}`);
  };
  vm.runInThisContext(`(function(require, module, exports) {${source}\n})`, { filename })(localRequire, module, module.exports);
  return module.exports;
}
const component = name => `components/article/${name}.tsx`;
const empty = { __esModule: true, default: () => null };
const search = (query, tag = 'althcu-20') => `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${tag}`;
const product = name => ({ name, shortName: name, amazonQuery: `${name} legacy query`, question: `${name} fit`, snippetAnswer: 'Specific answer', verdict: 'For this use', paragraphs: ['Specific context.'], pros: ['Specific strength'], cons: ['Specific limit'], skipIf: 'The fit is wrong.' });
const data = () => ({ title: 'A versus B', disclosure: 'Affiliate disclosure', lastVerified: 'Historical date', intro: ['Answer first.'], heroImage: { src: '/fixture.svg', alt: 'Fixture', width: 800, height: 400 }, specsQuestion: 'Which specs matter?', specsAnswer: 'These specs.', specs: [], productA: product('A'), productB: product('B'), faqQuestion: 'Legacy FAQ', faqAnswer: 'Legacy answer', faq: [], relatedLinks: [], closing: { title: 'Start here', paragraphs: ['Choose by use.'] } });
function comparisonHarness(registry, response = null) {
  const calls = [];
  const Page = load(component('ProductComparisonPage'), {
    '@/lib/product-comparisons': { amazonSearchUrl: search },
    '@/lib/article-commerce': { articleCommerce: registry },
    '@/lib/amazon-creators-api': { searchAmazonProduct: async (query, options) => { calls.push({ query, options }); return response; } },
    './AmazonProductCard': { __esModule: true, default: props => React.createElement('aside', { 'data-card-query': props.query, 'data-card-tag': props.partnerTag }) },
    './AmazonContentDisclaimer': empty,
    '@/components/seo/FaqJsonLd': { __esModule: true, default: () => React.createElement('script', { type: 'application/ld+json' }, 'FAQPage') },
  }).default;
  return { Page, calls };
}

test('existing comparison cards receive exact opt-in identities and preserve fallback partner tags without duplicate shelves', async () => {
  const picks = [
    { query: 'A curated query', label: 'A', note: 'Exact model', asin: 'B000TEST01', brand: 'Example', requiredTitleTerms: ['A'] },
    { query: 'B curated query', label: 'B', note: 'Exact model', asin: 'B000TEST02', brand: 'Example', model: 'B2' },
  ];
  const state = comparisonHarness({ '/coffee/fixture': { batch: 2, partnerTag: 'grandparentsgift-20', products: picks } });
  const html = renderToStaticMarkup(await state.Page({ data: data(), path: '/coffee/fixture' }));
  assert.equal(state.calls.length, 2);
  assert.deepEqual(state.calls.map(call => call.query), picks.map(pick => pick.query));
  assert.deepEqual(state.calls.map(call => call.options.asin), ['B000TEST01', 'B000TEST02']);
  assert.ok(state.calls.every(call => call.options.partnerTag === 'grandparentsgift-20'));
  assert.equal((html.match(/data-card-query=/g) || []).length, 2);
  assert.equal((html.match(/data-card-tag="grandparentsgift-20"/g) || []).length, 2);
  assert.doesNotMatch(html, /Legacy FAQ|FAQPage|data-creator-article-path/);
});

test('unregistered comparison behavior remains two legacy queries and existing FAQ is conditional', async () => {
  const state = comparisonHarness({});
  const source = data(); source.faq = [{ question: 'Old question', answer: 'Old answer' }];
  const html = renderToStaticMarkup(await state.Page({ data: source, path: '/coffee/not-opted-in' }));
  assert.deepEqual(state.calls.map(call => call.query), ['A legacy query', 'B legacy query']);
  assert.match(html, /Old question/);
  assert.match(html, /FAQPage/);
});

test('article commerce opt-in returns nothing and performs no lookup for an unregistered article', async () => {
  const fail = () => { throw Error('Unregistered article must not fetch'); };
  const Shelf = load(component('ArticleAmazonProducts'), {
    '@/lib/article-commerce': { articleCommerce: {} },
    '@/lib/amazon-creators-api': { getAmazonBooks: fail, getAmazonBooksByTitle: fail, searchAmazonProduct: fail },
    './AmazonProductCard': empty, './AmazonBookCard': empty, './AmazonContentDisclaimer': empty,
  }).default;
  assert.equal(await Shelf({ path: '/coffee/not-opted-in' }), null);
});

test('HTML comparison shelf uses the precise silo and slug rather than global rollout scope', () => {
  const Page = load(component('HtmlComparisonArticlePage'), {
    'next/link': { __esModule: true, default: props => React.createElement('a', { href: props.href }, props.children) },
    '@/components/seo/BreadcrumbJsonLd': empty,
    '@/components/seo/FaqJsonLd': { ...empty, extractFaqPairs: () => [] },
    './ArticleAmazonProducts': { __esModule: true, default: ({ path }) => React.createElement('aside', { 'data-shelf-path': path }) },
  }).default;
  const html = renderToStaticMarkup(React.createElement(Page, { article: { silo: 'coffee', slug: 'fixture', title: 'Fixture title', bodyHtml: '<p>Editorial first.</p>' } }));
  assert.match(html, /data-shelf-path="\/coffee\/fixture"/);
  assert.ok(html.indexOf('Editorial first.') < html.indexOf('data-shelf-path'));
  assert.equal((html.match(/<h1/g) || []).length, 1);
});

test('raw beauty article keeps complete editorial markup before commerce and its local footer after commerce', () => {
  const page = load('app/beauty/dr-dennis-gross-vs-omnilux-contour/page.tsx', {
    '@/lib/seo-metadata': { withSeo: value => value },
    '@/lib/article-metadata': { withArticleMetadataDefaults: value => value },
    '@/lib/raw-html-article': { loadRawHtmlArticle: () => ({ metadata: {}, rawCss: '.fixture{}', rawHtml: '<article><h1>Editorial heading</h1><p>Full article.</p></article><footer>Local footer</footer>' }) },
    '@/components/article/ArticleAmazonProducts': { __esModule: true, default: ({ path }) => React.createElement('aside', { 'data-shelf-path': path }) },
  });
  const html = renderToStaticMarkup(React.createElement(page.default));
  assert.equal(page.dynamic, 'force-dynamic');
  assert.ok(html.indexOf('</article>') < html.indexOf('data-shelf-path'));
  assert.ok(html.indexOf('data-shelf-path') < html.indexOf('<footer>'));
  assert.match(html, /data-shelf-path="\/beauty\/dr-dennis-gross-vs-omnilux-contour"/);
  assert.equal((html.match(/<h1/g) || []).length, 1);
});

test('substantively rebuilt HTML comparisons disclose first and lead with the decision and scrollable table', () => {
  const Page = load(component('HtmlComparisonArticlePage'), {
    'next/link': { __esModule: true, default: props => React.createElement('a', { href: props.href }, props.children) },
    '@/components/seo/BreadcrumbJsonLd': empty,
    '@/components/seo/FaqJsonLd': { ...empty, extractFaqPairs: () => [] },
    './ArticleAmazonProducts': { __esModule: true, default: ({ path }) => React.createElement('aside', { 'data-shelf-path': path }) },
  }).default;
  const article = { silo: 'coffee', slug: 'fixture', title: 'Fixture title', modifiedDate: '2026-10-16', heroImage: { src: '/fixture-hero.svg', alt: 'Illustration', width: 800, height: 400 }, bodyHtml: '<p><em>Affiliate disclosure: fixture.</em></p><p>Answer first.</p><table><tbody><tr><td>Decision detail</td></tr></tbody></table><h2>Ownership detail</h2><p>Rest of article.</p>' };
  const html = renderToStaticMarkup(React.createElement(Page, { article }));
  assert.ok(html.indexOf('Affiliate disclosure') < html.indexOf('<h1'));
  assert.ok(html.indexOf('Answer first.') < html.indexOf('<img'));
  assert.ok(html.indexOf('Decision detail') < html.indexOf('<img'));
  assert.ok(html.indexOf('<img') < html.indexOf('Ownership detail'));
  assert.equal((html.match(/Affiliate disclosure/g) || []).length, 1);
  assert.equal((html.match(/<h1/g) || []).length, 1);
  assert.match(html, /role="region"[^>]*tabindex="0"/);
  assert.match(html, /<time dateTime="2026-10-16">October 16, 2026<\/time>/i);
});

test('rebuilt LED source keeps one affiliate disclosure before its hero', () => {
  const source = fs.readFileSync(path.join(__dirname, '../app/beauty/dr-dennis-gross-vs-omnilux-contour/article-source.html'), 'utf8');
  assert.equal((source.match(/class="disc"/g) || []).length, 1);
  assert.ok(source.indexOf('class="disc"') < source.indexOf('<div class="hero">'));
});

test('undated comparisons retain their editorial order and dates while exposing keyboard-scrollable tables', () => {
  const Page = load(component('HtmlComparisonArticlePage'), {
    'next/link': { __esModule: true, default: props => React.createElement('a', { href: props.href }, props.children) },
    '@/components/seo/BreadcrumbJsonLd': empty,
    '@/components/seo/FaqJsonLd': { ...empty, extractFaqPairs: () => [] },
    './ArticleAmazonProducts': empty,
  }).default;
  const article = { silo: 'beauty', slug: 'fixture', title: 'Fixture title', heroImage: { src: '/fixture.svg', alt: 'Illustration', width: 800, height: 400 }, bodyHtml: '<p>Existing introduction.</p><table><thead><tr><th>Exact model name</th></tr></thead><tbody><tr><td>Compatibility details</td></tr></tbody></table>' };
  const html = renderToStaticMarkup(React.createElement(Page, { article }));
  assert.match(html, /role="region"[^>]*aria-label="Comparison table: scroll horizontally to see all columns"[^>]*tabindex="0"/);
  assert.match(html, /overflow-x-auto/);
  assert.match(html, /<th>Exact model name<\/th>/);
  assert.ok(html.indexOf('<img') < html.indexOf('Existing introduction.'));
  assert.doesNotMatch(html, /<time|Updated /);
});
