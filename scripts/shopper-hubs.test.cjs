const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSeoModule } = require('./lib/load-seo-module.cjs')
const { getShopperHubDirectory } = loadSeoModule(path.join(__dirname, '../lib/shopper-hub-directory.ts'))
const { buyingGuides } = loadSeoModule(path.join(__dirname, '../lib/buying-guide-data.ts'))
const { coffeeComparisonArticles } = loadSeoModule(path.join(__dirname, '../lib/comparison-html-articles.ts'))
const baseline = require('../reports/shopper-hubs-2026-10-15/before-inventory.json')

test('each current hub keeps every previously linked article exactly once', () => {
 for (const key of Object.keys(baseline)) {
  const groups = getShopperHubDirectory(key)
  const links = groups.flatMap(group => group.items.map(item => item.href))
  assert.equal(new Set(groups.map(group => group.id)).size, groups.length)
  assert.equal(new Set(links).size, links.length)
  for (const item of baseline[key]) assert.ok(links.includes(item.href), `${key}: missing ${item.href}`)
 }
})

test('new registry entries surface once without changing curated groups or crossing hubs', () => {
 const guide = { slug: 'test-new-coffee-guide', silo: 'coffee', title: 'New coffee guide' }
 buyingGuides.push(guide)
 coffeeComparisonArticles.push(guide)
 try {
  const coffee = getShopperHubDirectory('coffee')
  const matches = coffee.flatMap(group => group.items).filter(item => item.href === '/coffee/test-new-coffee-guide')
  assert.equal(matches.length, 1)
  assert.equal(coffee.at(-1).id, 'more-guides')
  assert.ok(!getShopperHubDirectory('wfh').flatMap(group => group.items).some(item => item.title === guide.title))
 } finally { buyingGuides.pop(); coffeeComparisonArticles.pop() }
})
