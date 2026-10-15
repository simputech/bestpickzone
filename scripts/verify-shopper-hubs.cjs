// Read-only verification against a local production server. Playwright may be supplied via NODE_PATH.
const { chromium } = require('playwright')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const base = process.env.HUB_TEST_BASE || 'http://127.0.0.1:3119'
const out = process.env.HUB_TEST_OUT || '/tmp/bpz-shopper-hubs'
const before = require('../reports/shopper-hubs-2026-10-15/before-inventory.json')
const routes = ['/', '/coffee', '/wfh', '/home-kitchen']
const evidence = { pages: [], links: [] }
fs.mkdirSync(out, { recursive: true })
;(async () => {
 const browser = await chromium.launch({ headless: true, ...(process.env.HUB_TEST_BROWSER ? { executablePath: process.env.HUB_TEST_BROWSER } : {}) })
 try {
  const links = new Set()
  for (const width of [320, 390, 768, 1440]) {
   const ctx = await browser.newContext({ viewport: { width, height: 900 } })
   await ctx.route('**/*', route => new URL(route.request().url()).origin === base ? route.continue() : route.abort())
   const page = await ctx.newPage()
   const errors = []
   page.on('pageerror', error => errors.push(error.message))
   for (const route of routes) {
    const response = await page.goto(base + route, { waitUntil: 'networkidle' })
    assert.equal(response.status(), 200)
    assert.equal(await page.locator('h1').count(), 1)
    const data = await page.evaluate(() => {
     const main = document.querySelector('main')
     const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => JSON.parse(s.textContent))
     return {
      title: document.title, canonical: document.querySelector('link[rel="canonical"]').href,
      description: document.querySelector('meta[name="description"]').content,
      ogTitle: document.querySelector('meta[property="og:title"]').content,
      ogDescription: document.querySelector('meta[property="og:description"]').content,
      twitterTitle: document.querySelector('meta[name="twitter:title"]').content,
      ogType: document.querySelector('meta[property="og:type"]').content,
      headings: [...main.querySelectorAll('h1,h2,h3,h4')].map(h => +h.tagName.slice(1)),
      text: main.innerText, overflow: document.documentElement.scrollWidth > innerWidth,
      links: [...main.querySelectorAll('a')].map(a => a.getAttribute('href')),
      directory: [...main.querySelectorAll('.hub-directory a')].map(a => a.getAttribute('href')),
      fragmentTargets: [...main.querySelectorAll('a[href^="#"]')].every(a => document.getElementById(a.hash.slice(1))),
      schemas,
     }
    })
    assert.equal(data.overflow, false, `${route} at ${width}: horizontal page overflow`)
    assert.equal(data.canonical, 'https://bestpickzone.com' + route)
    assert.equal(data.ogType, 'website')
    assert.equal(data.ogTitle, data.title); assert.equal(data.twitterTitle, data.title); assert.equal(data.ogDescription, data.description)
    assert.ok(data.title.length <= 70); assert.ok(data.description.length >= 70 && data.description.length <= 170)
    assert.ok(data.fragmentTargets)
    for (let i=1;i<data.headings.length;i++) assert.ok(data.headings[i] <= data.headings[i-1]+1, 'Skipped heading level')
    assert.ok(!/high.intent|commercial engine|crawl paths|conversion.ready|raw.HTML|buyer intent|coffee silo|brewing lab|most.read|most popular|3 sec|ROI/i.test(data.text))
    assert.equal(await page.getByRole('complementary', { name: 'Affiliate disclosure' }).count(), 1)
    const reject = page.getByRole('button', { name: 'Reject', exact: true })
    if (await reject.isVisible()) await reject.click()
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).click()
    const dialog = page.getByRole('dialog', { name: 'Cookie preferences' })
    await dialog.waitFor()
    await page.keyboard.press('Escape')
    if (await dialog.isVisible()) await dialog.getByRole('button', { name: /close/i }).click()
    if (route !== '/') {
     const expected = before[route.slice(1)].map(i => i.href)
     for (const href of expected) assert.ok(data.directory.includes(href), `Missing existing guide: ${href}`)
     assert.equal(new Set(data.directory).size, data.directory.length, 'Directory destinations must be unique')
     const list = data.schemas.find(s => s['@type'] === 'ItemList')
     assert.equal(list.numberOfItems, data.directory.length)
     assert.deepEqual(list.itemListElement.map(i => new URL(i.url).pathname), data.directory)
     assert.equal(data.schemas.find(s => s['@type'] === 'CollectionPage').url, data.canonical)
     assert.ok(!data.schemas.some(s => ['FAQPage', 'Review', 'AggregateRating'].includes(s['@type'])))
     const tableRegion = page.locator('.hub-table-wrap')
     await tableRegion.focus()
     assert.equal(await tableRegion.evaluate(el => getComputedStyle(el).outlineStyle), 'solid')
     if (width === 320) { await page.keyboard.press('End'); await page.keyboard.press('ArrowRight'); }
    } else {
     assert.equal(data.links.filter(h => /^\/books\/authors\/best-/.test(h)).length, 10)
     for (const href of ['/books','/books/authors','/books/genre-fiction','/books/self-help','/books/kids-and-ya','/books/reader-picks','/coffee','/wfh','/home-kitchen']) assert.ok(data.links.includes(href))
    }
    for (const href of data.links) if (href.startsWith('/') && !href.startsWith('//')) links.add(href)
    await page.evaluate(() => { document.activeElement?.blur(); window.scrollTo({top:0,behavior:'instant'}); document.querySelectorAll('.hub-table-wrap').forEach(el => el.scrollLeft=0) })
    await page.waitForFunction(() => window.scrollY === 0)
    const filename = `after-${route.slice(1)||'home'}-${width}`
    if (width === 390 || width === 1440) {
     await page.screenshot({ path: path.join(out, filename+'.png'), fullPage: true })
     await page.screenshot({ path: path.join(out, filename+'-viewport.png') })
    }
    evidence.pages.push({ route, width, title: data.title, description: data.description, canonical: data.canonical, directoryCount: data.directory.length, overflow: data.overflow })
    console.log('PASS', route, width)
   }
   assert.deepEqual(errors, [])
   await ctx.close()
  }
  const request = await browser.newContext()
  for (const href of links) {
   const response = await request.request.get(base+href, { maxRedirects: 0 })
   assert.equal(response.status(), 200, `${href}: expected a direct 200, got ${response.status()}`)
   evidence.links.push({ href, status: response.status() })
  }
  await request.close()
  fs.writeFileSync(path.join(out,'verification.json'), JSON.stringify(evidence,null,2))
  console.log(`PASS ${evidence.pages.length} page/viewport checks and ${evidence.links.length} direct internal destinations`)
 } finally { await browser.close() }
})().catch(error => { console.error(error); process.exitCode=1 })
