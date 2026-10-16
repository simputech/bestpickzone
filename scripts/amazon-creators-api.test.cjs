const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

function product(asin = 'B000TEST01', tag = 'althcu-20') {
  return {
    asin, detailPageURL: `https://www.amazon.com/dp/${asin}?tag=${tag}&linkCode=ogi&th=1&psc=1`,
    images: { primary: { large: { url: 'https://m.media-amazon.com/images/I/example.jpg', width: 300, height: 500 } } },
    itemInfo: {
      title: { displayValue: 'Example Aero 2 Coffee Grinder' },
      byLineInfo: { brand: { displayValue: 'Example' } },
      manufactureInfo: { model: { displayValue: 'EA2' } },
    },
  };
}
function book(asin, title = 'Example Book', author = 'Sample Author', tag = 'althcu-20') {
  const result = product(asin, tag);
  result.itemInfo = {
    title: { displayValue: `${title}: A Novel` },
    byLineInfo: { contributors: [{ name: author, roleType: 'author' }] },
    classifications: { binding: { displayValue: 'Paperback' }, productGroup: { displayValue: 'Book' } },
    contentInfo: { languages: { displayValues: [{ displayValue: 'English', type: 'Published' }] } },
  };
  return result;
}
function response(payload, status = 200, headers = {}) {
  return { ok: status >= 200 && status < 300, status, headers: new Headers(headers), json: async () => payload };
}
function harness(catalog, env = {}) {
  let now = Date.parse('2026-10-16T22:00:00.000Z');
  let noStoreCalls = 0; const calls = []; const warnings = [];
  class FakeDate extends Date {
    constructor(...args) { super(...(args.length ? args : [now])); }
    static now() { return now; }
  }
  const context = vm.createContext({
    URL, AbortSignal, Date: FakeDate,
    process: { env: { AMAZON_CREATORS_API_CLIENT_ID: 'test-client', AMAZON_CREATORS_API_CLIENT_SECRET: 'test-secret', ...env } },
    console: { warn: (...args) => warnings.push(args.join(' ')) },
    setTimeout: callback => { queueMicrotask(callback); return 1; },
    fetch: async (url, options) => {
      const call = { url, options, body: JSON.parse(options.body) }; calls.push(call);
      if (url.includes('/auth/o2/token')) return response({ access_token: 'test-token', expires_in: 3600 });
      return catalog(call, calls);
    },
  });
  const modules = new Map();
  function load(filename) {
    filename = path.resolve(filename);
    if (modules.has(filename)) return modules.get(filename).exports;
    const module = { exports: {} }; modules.set(filename, module);
    const source = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
    const localRequire = specifier => {
      if (specifier === 'server-only') return {};
      if (specifier === 'next/cache') return { unstable_noStore: () => noStoreCalls++ };
      if (specifier === './amazon-creators-runtime') {
        const runtime = load(path.resolve(path.dirname(filename), `${specifier}.ts`));
        return { ...runtime, AmazonRequestGate: class extends runtime.AmazonRequestGate {
          constructor() { super(() => now, async ms => { now += ms; }); }
        } };
      }
      if (!specifier.startsWith('.')) throw new Error(`Unexpected import ${specifier}`);
      return load(path.resolve(path.dirname(filename), `${specifier}.ts`));
    };
    vm.runInContext(`(function(require, module, exports) { ${source}\n})`, context, { filename })(localRequire, module, module.exports);
    return module.exports;
  }
  return { api: load(path.join(__dirname, '../lib/amazon-creators-api.ts')), calls, warnings, advance: ms => { now += ms; }, get noStoreCalls() { return noStoreCalls; } };
}
const catalogCalls = state => state.calls.filter(call => !call.url.includes('/auth/o2/token'));

test('unconfigured or invalid credentials fail closed, without any network operation, but still force dynamic rendering', async () => {
  for (const env of [{ AMAZON_CREATORS_API_CLIENT_ID: '' }, { AMAZON_CREATORS_API_CREDENTIAL_VERSION: '4.9' }, { AMAZON_MARKETPLACE: 'evil.example' }]) {
    const state = harness(() => { throw Error('must not fetch'); }, env);
    assert.equal(state.api.isAmazonCreatorsApiConfigured(), false);
    assert.equal(await state.api.searchAmazonProduct('Example Aero 2'), null);
    assert.equal(Object.keys(await state.api.getAmazonBooksByTitle([{ title: 'Example Book', author: 'Sample Author' }])).length, 0);
    assert.equal(state.calls.length, 0);
    assert.equal(state.noStoreCalls, 2);
  }
});

test('concurrent equivalent queries share token and product requests; cache hits remain dynamic', async () => {
  const state = harness(call => response({ searchResult: { items: [product('B000TEST01', call.body.partnerTag)] } }));
  const results = await Promise.all(Array.from({ length: 8 }, () => state.api.searchAmazonProduct('Example Aero 2 coffee grinder')));
  assert.ok(results.every(item => item?.asin === 'B000TEST01'));
  assert.equal(state.calls.length, 2);
  assert.equal(state.noStoreCalls, 8);
  assert.ok(catalogCalls(state)[0].body.resources.every(resource => !resource.toLowerCase().includes('offer')));
  assert.ok(state.calls.every(call => call.options.cache === 'no-store' && call.options.redirect === 'error' && call.options.signal));
  assert.equal(await state.api.searchAmazonProduct('Example Aero 2 coffee grinder'), results[0]);
  assert.equal(state.calls.length, 2);
  assert.equal(state.noStoreCalls, 9);
});

test('partner tags are sent to Amazon, isolated in the cache and never rewritten afterward', async () => {
  const state = harness(call => response({ itemsResult: { items: [product('B000TEST01', call.body.partnerTag)] } }));
  const request = { asin: 'B000TEST01', brand: 'Example', requiredTitleTerms: ['Aero 2'] };
  const normal = await state.api.searchAmazonProduct('coffee grinder', request);
  const pilot = await state.api.searchAmazonProduct('coffee grinder', { ...request, partnerTag: 'grandparentsgift-20' });
  assert.ok(normal.detailPageURL.includes('tag=althcu-20&linkCode=ogi&th=1&psc=1'));
  assert.ok(pilot.detailPageURL.includes('tag=grandparentsgift-20&linkCode=ogi&th=1&psc=1'));
  assert.equal(catalogCalls(state).length, 2);
  assert.ok(catalogCalls(state).every(call => call.url.endsWith('/getItems')));
  assert.equal(pilot.price, undefined);
});

test('expired product metadata is not served when refresh fails', async () => {
  let available = true;
  const state = harness(() => available ? response({ searchResult: { items: [product()] } }) : response({}, 503));
  const result = await state.api.searchAmazonProduct('Example Aero 2 coffee grinder');
  assert.ok(result);
  state.advance(6 * 60 * 60 * 1000 + 1); available = false;
  assert.equal(await state.api.searchAmazonProduct('Example Aero 2 coffee grinder'), null);
  assert.equal(catalogCalls(state).length, 2);
});

test('a throttled request pauses other lookups and never logs credentials or tokens', async () => {
  const state = harness(() => response({}, 429, { 'Retry-After': '120' }));
  assert.equal(await state.api.searchAmazonProduct('Example Aero 2 coffee grinder'), null);
  assert.equal(await state.api.searchAmazonProduct('Example Aero 3 coffee grinder'), null);
  assert.equal(catalogCalls(state).length, 1);
  state.advance(120000);
  assert.equal(await state.api.searchAmazonProduct('Example Aero 4 coffee grinder'), null);
  assert.equal(catalogCalls(state).length, 2);
  assert.ok(state.warnings.every(message => !/test-client|test-secret|test-token/.test(message)));
});

test('book discovery validates returned ASIN, title, author, language and print format', async () => {
  const wrongAuthor = book('B000TEST02', 'Example Book', 'Wrong Author');
  const wrongWork = book('B000TEST03', 'Example Book Two');
  const wrongLanguage = book('B000TEST04'); wrongLanguage.itemInfo.contentInfo.languages.displayValues[0].displayValue = 'Spanish';
  const wrongFormat = book('B000TEST05'); wrongFormat.itemInfo.classifications.binding.displayValue = 'Kindle Edition';
  const malformed = { asin: 'B000TEST06', itemInfo: { title: { displayValue: 7 } } };
  const state = harness(() => response({ searchResult: { items: [wrongAuthor, wrongWork, wrongLanguage, wrongFormat, malformed, book('B000TEST01')] } }));
  const request = [{ title: 'Example Book', author: 'Sample Author' }];
  const [a, b] = await Promise.all([state.api.getAmazonBooksByTitle(request), state.api.getAmazonBooksByTitle(request)]);
  assert.equal(a['Example Book'].asin, 'B000TEST01');
  assert.equal(a['Example Book'].detailPageURL, b['Example Book'].detailPageURL);
  assert.equal(catalogCalls(state).length, 1);
  assert.equal(catalogCalls(state)[0].body.searchIndex, 'Books');
  assert.equal(catalogCalls(state)[0].body.author, 'Sample Author');
});

test('book discovery does not accept duplicated affiliate tags or malformed images', async () => {
  const badLink = book('B000TEST01'); badLink.detailPageURL += '&tag=other-20';
  const badImage = book('B000TEST02'); badImage.images.primary.large.url = 'https://u:p@m.media-amazon.com/images/I/test.jpg';
  const state = harness(() => response({ searchResult: { items: [badLink, badImage] } }));
  assert.equal(Object.keys(await state.api.getAmazonBooksByTitle([{ title: 'Example Book', author: 'Sample Author' }])).length, 0);
});

test('exact book editions batch ten IDs per request, preserve existing matching and cache per work', async () => {
  const requests = Array.from({ length: 12 }, (_, i) => ({ asin: `B000TEST${String(i).padStart(2, '0')}`, title: `Example Book ${i}`, author: 'Sample Author' }));
  const state = harness(call => response({ itemsResult: { items: call.body.itemIds.map(asin => {
    const request = requests.find(request => request.asin === asin); return book(asin, request.title, request.author);
  }) } }));
  const results = await state.api.getAmazonBooks(requests);
  assert.equal(Object.keys(results).length, 12);
  assert.deepEqual(catalogCalls(state).map(call => call.body.itemIds.length), [10, 2]);
  assert.equal(Object.keys(await state.api.getAmazonBooks(requests.slice(3, 7))).length, 4);
  assert.equal(catalogCalls(state).length, 2);
});

test('mismatched and malformed product responses degrade to the search fallback', async () => {
  for (const payload of [null, {}, { searchResult: { items: null } }, { searchResult: { items: [null, {}, { asin: 1 }] } }]) {
    const state = harness(() => response(payload));
    assert.equal(await state.api.searchAmazonProduct('Example Aero 2 coffee grinder'), null);
  }
});

test('blank optional default tag environment does not disable valid API credentials', async () => {
  const state = harness(call => response({ searchResult: { items: [product('B000TEST01', call.body.partnerTag)] } }), { AMAZON_ASSOCIATE_TAG: '', NEXT_PUBLIC_AMAZON_TRACKING_ID: '' });
  assert.equal(state.api.isAmazonCreatorsApiConfigured(), true);
  assert.ok(await state.api.searchAmazonProduct('Example Aero 2 coffee grinder'));
  assert.equal(catalogCalls(state)[0].body.partnerTag, 'althcu-20');
  assert.equal(await state.api.searchAmazonProduct('Example Aero 2 coffee grinder', { partnerTag: '' }), null);
});
