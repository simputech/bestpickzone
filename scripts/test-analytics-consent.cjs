const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')
const source = ts.transpileModule(fs.readFileSync('lib/visitor-analytics.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
function setup(consent, { blocked = false, host = 'bestpickzone.com', search = '' } = {}) {
  const storage = new Map(consent ? [['bpz_analytics_consent', consent]] : [])
  const session = new Map()
  const scripts = []
  const context = {
    exports: {}, URLSearchParams, process: { env: { NEXT_PUBLIC_GA_MEASUREMENT_ID: 'G-TEST' } },
    window: {
      location: { hostname: host, protocol: 'https:', search }, navigator: {},
      localStorage: { getItem(k) { if (blocked) throw Error('blocked'); return storage.get(k) }, setItem(k,v) { storage.set(k,v) } },
      sessionStorage: { getItem: k => session.get(k), setItem: (k,v) => session.set(k,v) },
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
