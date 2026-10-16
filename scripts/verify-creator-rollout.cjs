// Sequential, read-only QA. Saves status/ASINs, never Amazon payloads or image bytes.
const { chromium } = require('playwright')
const fs = require('node:fs')
const path = require('node:path')
const assert = require('node:assert/strict')
const batchNumber = Number(process.env.CREATOR_BATCH || 1)
const base = process.env.CREATOR_BASE || 'http://127.0.0.1:3108'
const expectLive = process.env.CREATOR_EXPECT_LIVE === '1'
const queue = JSON.parse(fs.readFileSync(path.join(__dirname, '../reports/creator-rollout/inventory/rollout-queue.json'), 'utf8'))
const batch = queue.batches.find(entry => entry.batch === batchNumber)
if (!batch) throw Error(`Unknown batch ${batchNumber}`)
const results = []
;(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CREATOR_BROWSER || '/usr/bin/chromium', args: ['--no-sandbox'] })
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } })
  await context.route(/google-analytics|googletagmanager|doubleclick/, route => route.abort())
  const page = await context.newPage()
  for (const entry of batch.pages) {
    const errors = []
    const onError = error => errors.push(error.message)
    page.on('pageerror', onError)
    try {
      const response = await page.goto(base + entry.path, { waitUntil: 'networkidle', timeout: 90000 })
      await page.locator('h1').waitFor()
      // Trigger lazy images without clicking retailer links or consenting to analytics.
      for (const image of await page.locator('[data-amazon-source="creators-api"] img').all()) {
        await image.scrollIntoViewIfNeeded()
        await image.evaluate(img => img.decode().catch(() => {}))
      }
      const result = await page.evaluate(() => {
        const cards = Array.from(document.querySelectorAll('[data-amazon-source]'))
        const live = cards.filter(card => card.getAttribute('data-amazon-source') === 'creators-api')
        const links = Array.from(document.querySelectorAll('[data-amazon-source] a[href*="amazon."]'))
        const images = live.flatMap(card => Array.from(card.querySelectorAll('img')))
        const metadata = document.querySelector('link[rel="canonical"]')?.href
        const wrongLinks = links.filter(link => {
          const u = new URL(link.href)
          return u.protocol !== 'https:' || u.hostname !== 'www.amazon.com' || !['althcu-20','grandparentsgift-20'].includes(u.searchParams.get('tag')) || !link.rel.includes('sponsored')
        })
        return {
          canonical: metadata, h1Count: document.querySelectorAll('h1').length,
          title: document.title, liveCards: live.length, fallbackCards: cards.length - live.length,
          asins: Array.from(new Set(live.map(card => card.getAttribute('data-amazon-asin')))).filter(Boolean),
          badLinks: wrongLinks.length, imageCount: images.length,
          brokenImages: images.filter(img => !img.complete || !img.naturalWidth).length,
          unlinkedImages: images.filter(img => !img.closest('a[href*="amazon.com/dp/"]')).length,
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          hasDisclaimer: Boolean(document.querySelector('[data-amazon-content-disclaimer]')),
          hasPrice: cards.some(card => /\$\s*\d/.test(card.textContent || '')),
          leakedCredentialNames: /AMAZON_CREATORS_API_CLIENT_SECRET|creatorsapi::default|Bearer\s+Atza/.test(document.documentElement.innerHTML),
        }
      })
      result.path = entry.path; result.status = response.status(); result.pageErrors = errors
      result.pass = result.status === 200 && result.h1Count === 1 && result.canonical === 'https://bestpickzone.com' + entry.path && !result.badLinks && !result.brokenImages && !result.unlinkedImages && !result.overflow && !result.hasPrice && !result.leakedCredentialNames && !errors.length && (entry.disposition.startsWith('exception-') || result.hasDisclaimer)
      results.push(result)
      console.log(`${result.pass ? 'PASS' : 'FAIL'} ${entry.path}: API=${result.liveCards}, fallback=${result.fallbackCards}, images=${result.imageCount}`)
    } catch (error) { results.push({ path: entry.path, pass: false, error: error.message }); console.log(`FAIL ${entry.path}: ${error.message}`) }
    page.off('pageerror', onError)
  }
  // Inspect a representative article at desktop width too.
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto(base + batch.pages[0].path, { waitUntil: 'networkidle', timeout: 90000 })
  const desktopOverflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)
  await browser.close()
  const report = { batch: batchNumber, checkedAt: new Date().toISOString(), base, expectLive, desktopOverflow, results, summary: { pages: results.length, passed: results.filter(r => r.pass).length, pagesWithLiveCards: results.filter(r => r.liveCards > 0).length, pagesWithOnlyFallback: results.filter(r => r.liveCards === 0 && r.fallbackCards > 0).length } }
  const out = process.env.CREATOR_REPORT || path.join(__dirname, `../reports/creator-rollout/batch-${String(batchNumber).padStart(2,'0')}-${expectLive ? 'production' : 'local'}-verification.json`)
  fs.writeFileSync(out, JSON.stringify(report, null, 2) + '\n')
  assert.equal(results.filter(r => !r.pass).length, 0, 'Page verification failures')
  assert.equal(desktopOverflow, false, 'Desktop overflow')
  if (expectLive) assert.ok(results.some(r => r.liveCards > 0), 'No verified live API cards appeared')
})().catch(error => { console.error(error); process.exitCode = 1 })
