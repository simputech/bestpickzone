const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')

const compile = source => ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
const analyticsSource = compile(fs.readFileSync('lib/visitor-analytics.ts', 'utf8'))
const trackerSource = compile(fs.readFileSync('components/analytics/AffiliateClickTracker.tsx', 'utf8')
  .replace(/^import .*$/mg, '').replace(/export default function AffiliateClickTracker[\s\S]*/, ''))
const pilotHref = 'https://www.amazon.com/s?k=The+Silent+Patient&tag=grandparentsgift-20'

function setup({ consent = 'granted', blocked = false, production = true, webdriver = false } = {}) {
  const storage = new Map(consent ? [['bpz_analytics_consent', consent]] : [])
  const listeners = new Map()
  const scripts = []
  class Element {}
  class HTMLAnchorElement extends Element {
    constructor(href) { super(); this.href = href; this.dataset = {}; this.textContent = 'View on Amazon' }
    closest() { return this }
  }
  const context = vm.createContext({
    exports: {}, URL, URLSearchParams, Element, HTMLAnchorElement,
    process: { env: { NEXT_PUBLIC_GA_MEASUREMENT_ID: 'G-TEST' } },
    window: {
      location: { hostname: 'bestpickzone.com', protocol: 'https:', search: '', pathname: '/books/authors/best-alex-michaelides-books', href: 'https://bestpickzone.com/books/authors/best-alex-michaelides-books' },
      navigator: { webdriver },
      localStorage: { getItem(key) { if (blocked) throw Error('blocked storage'); return storage.get(key) } },
      sessionStorage: { getItem() { return null } },
    },
    document: {
      createElement: () => ({}), head: { appendChild: script => scripts.push(script) },
      addEventListener: (name, handler) => { const handlers = listeners.get(name) || new Set(); handlers.add(handler); listeners.set(name, handlers) },
      removeEventListener: (name, handler) => listeners.get(name)?.delete(handler),
    },
  })
  vm.runInContext(analyticsSource, context)
  const analytics = context.exports
  context.trackEvent = analytics.trackEvent
  vm.runInContext(trackerSource, context)
  analytics.initializeAnalytics(production)
  const release = context.exports.subscribeToAffiliateClicks()
  function activate(href = pilotHref, button = 0, type = 'click', nested = false) {
    const link = new HTMLAnchorElement(href)
    const target = nested ? Object.assign(new Element(), { closest: () => link }) : link
    const event = { type, button, target, preventDefault() { assert.fail('Tracking must not cancel navigation') }, stopPropagation() { assert.fail('Tracking must not stop propagation') } }
    for (const handler of listeners.get(type) || []) handler(event)
    assert.equal(link.href, href, 'Tracking must not mutate the affiliate destination')
  }
  const events = () => (context.window.dataLayer || []).map(args => Array.from(args)).filter(args => args[0] === 'event')
  return { activate, events, storage, scripts, release, subscribe: context.exports.subscribeToAffiliateClicks }
}

test('pilot search and product links emit one affiliate_click with their original URL and article context', () => {
  for (const href of [pilotHref, 'https://www.amazon.com/dp/125030170X?tag=grandparentsgift-20']) {
    const state = setup(); state.activate(href, 0, 'click', true)
    assert.equal(state.events().length, 1)
    const [, name, payload] = state.events()[0]
    assert.equal(name, 'affiliate_click')
    assert.equal(payload.affiliate_network, 'amazon')
    assert.equal(payload.link_url, href)
    assert.equal(payload.event_label, href)
    assert.equal(payload.article_slug, 'best-alex-michaelides-books')
  }
})
test('primary/keyboard activation and middle-click each emit once; secondary clicks emit nothing', () => {
  for (const [button, type] of [[0, 'click'], [1, 'auxclick']]) {
    const state = setup(); state.activate(pilotHref, button, type)
    assert.equal(state.events().length, 1)
  }
  const state = setup()
  state.activate(pilotHref, 1, 'click'); state.activate(pilotHref, 2, 'click'); state.activate(pilotHref, 2, 'auxclick')
  assert.equal(state.events().length, 0)
})
test('pilot tracking respects unknown/denied consent, blocked storage, production and webdriver exclusions', () => {
  for (const config of [{consent:null}, {consent:'denied'}, {blocked:true}, {production:false}, {webdriver:true}]) {
    const state = setup(config); state.activate()
    assert.equal(state.scripts.length, 0)
    assert.equal(state.events().length, 0)
  }
})
test('revoking consent blocks subsequent pilot clicks', () => {
  const state = setup(); state.activate()
  assert.equal(state.events().length, 1)
  state.storage.set('bpz_analytics_consent', 'denied'); state.activate()
  assert.equal(state.events().length, 1)
})
test('multiple subscribers and cleanup cannot duplicate events', () => {
  const state = setup(); const releaseSecond = state.subscribe()
  state.activate(); assert.equal(state.events().length, 1)
  state.release(); state.release(); state.activate(); assert.equal(state.events().length, 2)
  releaseSecond(); state.activate(); assert.equal(state.events().length, 2)
})
test('existing Amazon tags, storefront and eBay remain recognized', () => {
  for (const href of ['https://www.amazon.com/s?k=book&tag=althcu-20', 'https://business.amazon.com/prime?tag=fitnessbankd-20', 'https://www.amazon.com/shop/althcu', 'https://www.ebay.com/itm/123?campid=5339164184']) {
    const state = setup(); state.activate(href); assert.equal(state.events().length, 1)
  }
})
test('unrecognized tags, untagged links and lookalike hosts remain ignored', () => {
  for (const href of ['https://www.amazon.com/s?k=book&tag=unrecognized-20', 'https://www.amazon.com/s?k=book', 'https://amazon.com.evil.test/?tag=grandparentsgift-20', 'https://evilamazon.com/?tag=grandparentsgift-20', 'https://example.com/?tag=grandparentsgift-20']) {
    const state = setup(); state.activate(href); assert.equal(state.events().length, 0)
  }
})
