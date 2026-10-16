const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

function harness({ exact = {}, discovered = {} } = {}) {
  const calls = { exact: [], discovered: [] };
  const Article = () => null;
  const filename = path.join(__dirname, '../components/article/AmazonAuthorRankingArticlePage.tsx');
  const source = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const module = { exports: {} };
  const localRequire = specifier => {
    if (specifier === 'react/jsx-runtime') return require(specifier);
    if (specifier === './AuthorRankingArticlePage') return { __esModule: true, default: Article };
    if (specifier === '@/lib/amazon-creators-api') return {
      getAmazonBooks: async requests => { calls.exact.push(requests); return exact; },
      getAmazonBooksByTitle: async requests => { calls.discovered.push(requests); return discovered; },
    };
    throw Error(`Unexpected dependency (network access is not allowed): ${specifier}`);
  };
  vm.runInThisContext(`(function(require, module, exports) {${source}\n})`, { filename })(localRequire, module, module.exports);
  return { render: module.exports.default, calls, Article };
}
const article = { author: 'Sample Author', books: [{ title: 'First Work' }, { title: 'Second Work' }, { title: 'Third Work' }] };
const work = title => ({ title, author: article.author });
const product = (title, asin) => ({ title, asin });

test('without an edition map every work uses one title-discovery call', async () => {
  const discovered = { 'First Work': product('First Work', 'B000TEST01') };
  const state = harness({ discovered });
  const element = await state.render({ article });
  assert.equal(element.type, state.Article);
  assert.equal(element.props.article, article);
  assert.deepEqual(state.calls.exact, []);
  assert.deepEqual(state.calls.discovered, [[work('First Work'), work('Second Work'), work('Third Work')]]);
  assert.deepEqual(element.props.bookProducts, discovered);
});

test('partial maps fetch pinned editions and discover only unpinned works without losing recommendations', async () => {
  const exact = { 'Second Work': product('Second Work', 'B000TEST02') };
  const discovered = { 'First Work': product('First Work', 'B000TEST01'), 'Third Work': product('Third Work', 'B000TEST03') };
  const state = harness({ exact, discovered });
  const element = await state.render({ article, editions: { 'Second Work': 'B000TEST02', 'Unrelated Work': 'B000OTHER1' } });
  assert.deepEqual(state.calls.exact, [[{ ...work('Second Work'), asin: 'B000TEST02' }]]);
  assert.deepEqual(state.calls.discovered, [[work('First Work'), work('Third Work')]]);
  assert.deepEqual(element.props.bookProducts, { ...discovered, ...exact });
  assert.equal(element.props.article, article);
  assert.equal(element.props.article.books.length, 3);
});

test('complete maps retain the existing GetItems-only author-page behavior', async () => {
  const exact = { 'First Work': product('First Work', 'B000TEST01') };
  const state = harness({ exact });
  const editions = { 'First Work': 'B000TEST01', 'Second Work': 'B000TEST02', 'Third Work': 'B000TEST03' };
  const element = await state.render({ article, editions });
  assert.deepEqual(state.calls.exact, [article.books.map(book => ({ ...work(book.title), asin: editions[book.title] }))]);
  assert.deepEqual(state.calls.discovered, []);
  assert.deepEqual(element.props.bookProducts, exact);
});

test('empty API responses preserve every recommendation and supply the existing fallback renderer an empty map', async () => {
  const state = harness();
  const element = await state.render({ article, editions: { 'First Work': 'B000TEST01' } });
  assert.equal(element.props.article, article);
  assert.deepEqual(element.props.bookProducts, {});
  assert.equal(state.calls.exact.length, 1);
  assert.equal(state.calls.discovered.length, 1);
  // Pinned lookup failures are not silently substituted with a different discovered edition.
  assert.ok(state.calls.discovered[0].every(request => request.title !== 'First Work'));
});

test('duplicate work references create neither duplicate lookups nor a second query for a pinned work', async () => {
  const state = harness();
  const repeated = { ...article, books: [article.books[0], article.books[1], article.books[0], article.books[1]] };
  const element = await state.render({ article: repeated, editions: { 'First Work': 'B000TEST01' } });
  assert.deepEqual(state.calls.exact, [[{ ...work('First Work'), asin: 'B000TEST01' }]]);
  assert.deepEqual(state.calls.discovered, [[work('Second Work')]]);
  assert.equal(element.props.article, repeated);
});

test('empty maps and empty catalogs avoid unnecessary calls', async () => {
  const state = harness();
  await state.render({ article, editions: {} });
  assert.deepEqual(state.calls.exact, []);
  assert.equal(state.calls.discovered.length, 1);
  const empty = harness();
  const element = await empty.render({ article: { ...article, books: [] }, editions: {} });
  assert.deepEqual(empty.calls, { exact: [], discovered: [] });
  assert.deepEqual(element.props.bookProducts, {});
});
