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
function harness(catalog, env = {}, tokenResponse) {
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
      if (url.includes('/auth/o2/token')) return tokenResponse ? tokenResponse(call) : response({ access_token: 'test-token', expires_in: 3600 });
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

test('book search and exact-ASIN lookup reject altered works even with matching author and print metadata', async () => {
  const rejected = ['Abridged', 'Graphic-Novel', 'Study—Guide', 'Young Readers’ Edition'].map((suffix, i) => {
    const candidate = book(`B000TEST0${i}`);
    candidate.itemInfo.title.displayValue = `Example Book: ${suffix}`;
    return candidate;
  });
  const request = [{ title: 'Example Book', author: 'Sample Author' }];
  const onlyAltered = harness(call => response(call.url.endsWith('/searchItems')
    ? { searchResult: { items: rejected } } : { itemsResult: { items: rejected } }));
  assert.equal(Object.keys(await onlyAltered.api.getAmazonBooksByTitle(request)).length, 0);
  assert.equal(Object.keys(await onlyAltered.api.getAmazonBooks([{ ...request[0], asin: rejected[0].asin }])).length, 0);
  const mixed = harness(() => response({ searchResult: { items: [...rejected, book('B000TEST09')] } }));
  assert.equal((await mixed.api.getAmazonBooksByTitle(request))['Example Book'].asin, 'B000TEST09');
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

test('known Gillian edition mapping preserves baseline GetItems authentication and resources', async () => {
  // Synthetic responses exercise production's existing identifiers; not live Amazon evidence.
  const requests = [
    { asin: '0307588378', title: 'Gone Girl', author: 'Gillian Flynn' },
    { asin: '0307341550', title: 'Sharp Objects', author: 'Gillian Flynn' },
    { asin: '0307341577', title: 'Dark Places', author: 'Gillian Flynn' },
    { asin: '0804188971', title: 'The Grownup', author: 'Gillian Flynn' },
  ];
  const state = harness(call => response({ itemsResult: { items: requests.map(request => book(request.asin, request.title, request.author, call.body.partnerTag)) } }));
  const results = await state.api.getAmazonBooks(requests);
  assert.equal(Object.keys(results).length, 4);
  const token = state.calls[0]; const catalog = catalogCalls(state)[0];
  assert.equal(token.url, 'https://api.amazon.com/auth/o2/token');
  assert.deepEqual(token.body, { grant_type: 'client_credentials', client_id: 'test-client', client_secret: 'test-secret', scope: 'creatorsapi::default' });
  assert.equal(catalog.url, 'https://creatorsapi.amazon/catalog/v1/getItems');
  assert.deepEqual(catalog.body, {
    itemIds: requests.map(request => request.asin), itemIdType: 'ASIN',
    resources: ['images.primary.large', 'itemInfo.title', 'itemInfo.byLineInfo', 'itemInfo.classifications', 'itemInfo.contentInfo'],
    marketplace: 'www.amazon.com', partnerTag: 'althcu-20',
  });
  assert.equal(catalog.options.headers.Authorization, 'Bearer test-token');
  assert.equal(catalog.options.headers['x-marketplace'], 'www.amazon.com');
});

test('pilot book requests use their exact tag and do not accept differently tagged responses', async () => {
  for (const returnedTag of ['grandparentsgift-20', 'althcu-20']) {
    const state = harness(() => response({ itemsResult: { items: [book('1250301696', 'The Silent Patient', 'Alex Michaelides', returnedTag)] } }));
    const result = await state.api.getAmazonBooks([{ asin: '1250301696', title: 'The Silent Patient', author: 'Alex Michaelides' }], { partnerTag: 'grandparentsgift-20' });
    assert.equal(catalogCalls(state)[0].body.partnerTag, 'grandparentsgift-20');
    assert.equal(Boolean(result['The Silent Patient']), returnedTag === 'grandparentsgift-20');
  }
});

test('credential versions use the current regional OAuth endpoints', async () => {
  for (const [version, host] of [['3.1', 'api.amazon.com'], ['3.2', 'api.amazon.co.uk'], ['3.3', 'api.amazon.co.jp']]) {
    const state = harness(() => response({ searchResult: { items: [product()] } }), { AMAZON_CREATORS_API_CREDENTIAL_VERSION: version });
    assert.ok(await state.api.searchAmazonProduct('Example Aero 2 coffee grinder'));
    assert.equal(state.calls[0].url, `https://${host}/auth/o2/token`);
    assert.equal(state.calls[0].body.scope, 'creatorsapi::default');
  }
});

test('bad authentication responses fail closed and are short-term negative cached', async () => {
  for (const payload of [null, {}, { access_token: '' }, { access_token: 'bad', expires_in: -1 }, { access_token: 'bad', expires_in: '3600' }]) {
    const state = harness(() => { throw Error('catalog must not be called'); }, {}, () => response(payload));
    assert.equal(await state.api.searchAmazonProduct('Example Aero 2'), null);
    assert.equal(await state.api.searchAmazonProduct('Example Aero 3'), null);
    assert.equal(state.calls.length, 1);
    assert.ok(state.warnings.every(message => !/test-secret|test-client|test-token/.test(message)));
  }
});

test('malformed public lookup arguments safely return fallback without network access', async () => {
  const state = harness(() => { throw Error('must not fetch'); });
  for (const query of [null, undefined, 42, {}, []]) assert.equal(await state.api.searchAmazonProduct(query), null);
  for (const options of [null, 7, { partnerTag: 42 }]) assert.equal(await state.api.searchAmazonProduct('Example', options), null);
  for (const input of [null, undefined, 17, {}, [null, {}, { title: 1, author: 'A' }, { title: 'Title', author: null }]]) {
    assert.equal(Object.keys(await state.api.getAmazonBooks(input)).length, 0);
    assert.equal(Object.keys(await state.api.getAmazonBooksByTitle(input)).length, 0);
  }
  assert.equal(await state.api.lookupAmazonProduct(null), null);
  assert.equal(state.calls.length, 0);
});

const diagnosticPrefix = 'Amazon Creators API product fallback: ';
const productDiagnostics = state => state.warnings.filter(message => message.startsWith(diagnosticPrefix)).map(message => JSON.parse(message.slice(diagnosticPrefix.length)));

test('fallback diagnostics distinguish empty results and match rejections without catalog content', async () => {
  const privateTitle = 'UniqueReturnedAmazonTitle';
  const source = product(); source.itemInfo.title.displayValue = privateTitle;
  const state = harness(() => response({ itemsResult: { items: [source] } }));
  const request = { asin: 'B000TEST01', expectedTitle: 'Editorial expectation' };
  await Promise.all(Array.from({ length: 5 }, () => state.api.searchAmazonProduct('Our curated request', request)));
  await state.api.searchAmazonProduct('Our curated request', request);
  assert.deepEqual(productDiagnostics(state), [{ expectedAsin: 'B000TEST01', candidateCount: 1, reasons: ['title_mismatch'] }]);
  assert.equal(catalogCalls(state).length, 1);
  const logged = state.warnings.join(' ');
  assert.doesNotMatch(logged, /UniqueReturnedAmazonTitle|Example|Our curated request|https:|images|test-client|test-secret|test-token/);
  state.advance(60001);
  await state.api.searchAmazonProduct('Our curated request', request);
  assert.equal(productDiagnostics(state).length, 2, 'one additional diagnostic after the negative cache expires');

  for (const payload of [{ searchResult: { items: [] } }, { errors: [{ message: 'PRIVATE RAW API ERROR' }] }]) {
    const empty = harness(() => response(payload));
    await empty.api.searchAmazonProduct('Our curated query');
    assert.deepEqual(productDiagnostics(empty), [{ query: 'Our curated query', candidateCount: 0, reasons: ['no_candidates'] }]);
    assert.doesNotMatch(empty.warnings.join(' '), /PRIVATE RAW API ERROR/);
  }
});

test('diagnostics aggregate rejection enums once, skip successful matches and distinguish unavailable catalog', async () => {
  const badTitle = product(); badTitle.itemInfo.title.displayValue = 'Private incorrect title';
  const badBrand = product('B000TEST02'); badBrand.itemInfo.byLineInfo.brand.displayValue = 'Private incorrect brand';
  const rejected = harness(() => response({ searchResult: { items: [badTitle, badTitle, badBrand] } }));
  await rejected.api.searchAmazonProduct('Example Aero 2 coffee grinder', { brand: 'Example' });
  assert.deepEqual(productDiagnostics(rejected), [{ query: 'Example Aero 2 coffee grinder', candidateCount: 3, reasons: ['brand_mismatch', 'title_mismatch'] }]);
  assert.doesNotMatch(rejected.warnings.join(' '), /Private incorrect|B000TEST0[12]|https:/);
  const accepted = harness(() => response({ searchResult: { items: [badTitle, product('B000TEST03')] } }));
  assert.ok(await accepted.api.searchAmazonProduct('Example Aero 2 coffee grinder'));
  assert.deepEqual(productDiagnostics(accepted), []);
  const unavailable = harness(() => response({}, 503));
  assert.equal(await unavailable.api.searchAmazonProduct('Our curated query'), null);
  assert.deepEqual(productDiagnostics(unavailable), [{ query: 'Our curated query', candidateCount: 0, reasons: ['catalog_unavailable'] }]);
});

test('budget offers request OffersV2 separately, deduplicate, preserve URLs and expire after five minutes', async () => {
  let available = true;
  const item = product();
  item.offersV2 = { listings: [{price:{money:{amount:19.99,currency:'USD',displayAmount:'$19.99'}},availability:{type:'IN_STOCK',minOrderQuantity:1},condition:{value:'New'},isBuyBoxWinner:true,violatesMAP:false}] };
  const state = harness(() => available ? response({itemsResult:{items:[item]}}) : response({},503));
  const expected={query:'Example Aero 2 coffee grinder',asin:'B000TEST01',brand:'Example'};
  const results=await Promise.all([state.api.lookupAmazonBudgetOffer(expected),state.api.lookupAmazonBudgetOffer(expected)]);
  assert.equal(results[0].amount,19.99);assert.equal(results[0].url,item.detailPageURL);assert.equal(results[0],results[1]);
  assert.equal(catalogCalls(state).length,1);
  const call=catalogCalls(state)[0];assert.equal(call.body.condition,'New');assert.ok(call.body.resources.includes('offersV2.listings.price'));
  assert.equal(call.options.headers['User-Agent'],'Agent/BestPickZoneDealAgent');
  state.advance(5*60*1000+1);available=false;
  assert.equal(await state.api.lookupAmazonBudgetOffer(expected),null);
  assert.equal(catalogCalls(state).length,2);
});
test('budget checking does not fetch without US credentials and never guesses a missing price',async()=>{
  for(const env of [{AMAZON_CREATORS_API_CLIENT_ID:''},{AMAZON_MARKETPLACE:'www.amazon.ca'}]){
    const state=harness(()=>{throw Error('no network expected')},env);
    assert.equal(await state.api.lookupAmazonBudgetOffer({query:'Example Aero'}),null);assert.equal(state.calls.length,0);
  }
  const state=harness(()=>response({searchResult:{items:[product()]}}));
  assert.equal(await state.api.lookupAmazonBudgetOffer({query:'Example Aero 2 coffee grinder'}),null);
});

test('search and pinned-ASIN paths reject play editions and preserve an ordinary novel candidate', async () => {
  for (const suffix of ['(Play)', '(Modern Plays)', ': A Play', '(Screenplay)', ': Stage Script', '(Dramatisation)']) {
    const stage=book('B000TEST01');stage.itemInfo.title.displayValue=`Example Book ${suffix}`;
    const request={title:'Example Book',author:'Sample Author'};
    const onlyStage=harness(call=>response(call.url.endsWith('/searchItems')?{searchResult:{items:[stage]}}:{itemsResult:{items:[stage]}}));
    assert.equal(Object.keys(await onlyStage.api.getAmazonBooksByTitle([request])).length,0,suffix);
    assert.equal(Object.keys(await onlyStage.api.getAmazonBooks([{...request,asin:stage.asin}])).length,0,suffix);
    const mixed=harness(()=>response({searchResult:{items:[stage,book('B000TEST09')]}}));
    assert.equal((await mixed.api.getAmazonBooksByTitle([request]))['Example Book'].asin,'B000TEST09');
  }
});
