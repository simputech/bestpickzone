const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')
const source = ts.transpileModule(fs.readFileSync('lib/visitor-analytics.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
function setup(consent, { blocked = false, writeBlocked = false, sessionBlocked = false, host = 'bestpickzone.com', search = '' } = {}) {
  const storage = new Map(consent ? [['bpz_analytics_consent', consent]] : [])
  const session = new Map()
  const scripts = []
  const context = {
    exports: {}, URLSearchParams, process: { env: { NEXT_PUBLIC_GA_MEASUREMENT_ID: 'G-TEST' } },
    window: {
      location: { hostname: host, protocol: 'https:', search }, navigator: {},
      localStorage: { getItem(k) { if (blocked) throw Error('blocked'); return storage.get(k) }, setItem(k,v) { if (writeBlocked) throw Error('blocked write'); storage.set(k,v) } },
      sessionStorage: { getItem: k => { if (sessionBlocked) throw Error('blocked session'); return session.get(k) }, setItem: (k,v) => session.set(k,v) },
    },
    document: { createElement: () => ({}), head: { appendChild: x => scripts.push(x) } },
  }
  vm.runInNewContext(source, context)
  return { ...context, scripts, storage }
}
test('analytics never loads without explicit consent, including blocked storage', () => {
  for (const state of [setup(), setup('denied'), setup('granted', {blocked: true})]) {
    state.exports.initializeAnalytics(true)
    assert.equal(state.scripts.length, 0)
  }
})
test('consented production visitors load once and may revoke event collection', () => {
  const state = setup('granted')
  state.exports.initializeAnalytics(true)
  state.exports.initializeAnalytics(true)
  assert.equal(state.scripts.length, 1)
  state.exports.trackEvent('affiliate_click')
  assert.equal(state.window.dataLayer.length, 3)
  state.storage.set('bpz_analytics_consent', 'denied')
  state.exports.trackEvent('affiliate_click')
  assert.equal(state.window.dataLayer.length, 3)
})
test('monitoring, previews, and non-production builds cannot load analytics', () => {
  for (const state of [setup('granted', {host:'localhost'}), setup('granted', {search:'?bpz_analytics=off'})]) {
    state.exports.initializeAnalytics(true)
    assert.equal(state.scripts.length, 0)
  }
  const state = setup('granted')
  state.exports.initializeAnalytics(false)
  assert.equal(state.scripts.length, 0)
})

test('saved legacy choices survive and unknown values remain unconsented', () => {
  for (const choice of ['granted', 'denied']) assert.equal(setup(choice).exports.readAnalyticsConsent(), choice)
  assert.equal(setup('unknown').exports.readAnalyticsConsent(), null)
  assert.equal(setup('granted', {blocked:true}).exports.readAnalyticsConsent(), null)
})
test('saving preferences preserves the storage contract and immediately disables revoked GA', () => {
  const state = setup()
  assert.equal(state.exports.saveAnalyticsConsent(true), true)
  assert.equal(state.storage.get('bpz_analytics_consent'), 'granted')
  state.exports.initializeAnalytics(true)
  assert.equal(state.scripts.length, 1)
  assert.equal(state.exports.saveAnalyticsConsent(false), true)
  assert.equal(state.storage.get('bpz_analytics_consent'), 'denied')
  assert.equal(state.window['ga-disable-G-TEST'], true)
  state.exports.trackEvent('affiliate_click')
  assert.equal(state.window.dataLayer.length, 2)
  assert.equal(state.exports.saveAnalyticsConsent(true), true)
  assert.equal(state.window['ga-disable-G-TEST'], false)
  state.exports.trackEvent('affiliate_click')
  assert.equal(state.window.dataLayer.length, 3)
})
test('failed saves cannot reuse a prior grant, even with readable storage', () => {
  for (const allow of [true, false]) {
    const state = setup('granted', {writeBlocked:true})
    state.exports.initializeAnalytics(true)
    assert.equal(state.exports.saveAnalyticsConsent(allow), false)
    assert.equal(state.exports.visitorAnalyticsAllowed(), false)
    assert.equal(state.window['ga-disable-G-TEST'], true)
    state.exports.trackEvent('affiliate_click')
    assert.equal(state.window.dataLayer.length, 2)
  }
})
test('all production and test exclusions stay fail-closed', () => {
  const cases = [
    setup('granted', {sessionBlocked:true}),
    setup('granted', {host:'www.bestpickzone.com'}),
    setup('granted', {host:'preview.vercel.app'}),
  ]
  for (const mutate of [s => s.window.location.protocol = 'http:', s => s.window.navigator.webdriver = true, s => s.window.__BPZ_DISABLE_ANALYTICS__ = true, s => s.window.sessionStorage.setItem('bpz_analytics','off')]) {
    const state = setup('granted'); mutate(state); cases.push(state)
  }
  for (const state of cases) {
    state.exports.initializeAnalytics(true)
    state.exports.trackEvent('affiliate_click')
    assert.equal(state.scripts.length, 0)
    assert.equal(state.window.dataLayer, undefined)
  }
})
