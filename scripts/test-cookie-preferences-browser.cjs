// Run against a local production build with G-COOKIE-TEST and VERCEL_ENV=production.
// All Google requests are intercepted; nothing is sent to Google or the live site.
// NODE_PATH may point to an external Playwright installation; no app dependency needed.
const { chromium } = require('playwright')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const base = process.env.COOKIE_TEST_BASE || 'http://127.0.0.1:3107'
const screenshots = process.env.COOKIE_SCREENSHOTS || '/tmp/bpz-cookie-screenshots'
const origin = 'https://bestpickzone.com'
const key = 'bpz_analytics_consent'
const results = []
fs.mkdirSync(screenshots, { recursive: true })
;(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.COOKIE_TEST_BROWSER })
  async function setup({ width = 1440, height = 1000, consent, blocked, writeBlocked, sessionBlocked, webdriver = false, host = origin } = {}) {
    const context = await browser.newContext({ viewport: { width, height } })
    const google = []
    const outbound = []
    await context.addInitScript(({ consent, blocked, writeBlocked, sessionBlocked, webdriver, key }) => {
      Object.defineProperty(navigator, 'webdriver', { get: () => webdriver })
      if (consent && !localStorage.getItem(key)) localStorage.setItem(key, consent)
      if (blocked) Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked') } })
      if (sessionBlocked) Object.defineProperty(window, 'sessionStorage', { get() { throw new Error('Storage blocked') } })
      if (writeBlocked) Storage.prototype.setItem = () => { throw new Error('Write blocked') }
    }, { consent, blocked, writeBlocked, sessionBlocked, webdriver, key })
    await context.route('**/*', async route => {
      const url = new URL(route.request().url())
      if (/google-analytics|googletagmanager/.test(url.hostname)) {
        google.push(url.toString())
        await route.fulfill({ contentType: 'application/javascript', body: '// Intercepted Google script; no remote collection.' })
      } else if (url.origin === host) {
        const response = await context.request.fetch(base + url.pathname + url.search)
        await route.fulfill({ response })
      } else { outbound.push(url.toString()); await route.abort() }
    })
    const page = await context.newPage()
    await page.goto(host + '/books/authors/best-alex-michaelides-books')
    await page.getByRole('button', { name: 'Cookie preferences', exact: true }).waitFor()
    // Wait for hydration without assuming a saved choice always shows a banner.
    await page.waitForFunction(() => document.querySelector('button') && typeof window.next !== 'undefined')
    return { context, page, google, outbound, host }
  }
  const banner = page => page.getByRole('region', { name: 'Cookie preferences' })
  const dialog = page => page.getByRole('dialog', { name: 'Cookie preferences' })
  const choice = page => page.evaluate(key => localStorage.getItem(key), key)
  const hrefs = page => page.locator('a[href*="amazon."]').evaluateAll(nodes => nodes.map(a => a.href))
  async function check(name, run) { await run(); results.push(name); console.log('PASS', name) }
  try {
    for (const [width, height] of [[1440,1000], [390,844], [320,568], [844,390]]) {
      await check(`layout, equal buttons, keyboard dialog and default off: ${width}x${height}`, async () => {
        const {context,page,google} = await setup({width,height})
        await banner(page).waitFor()
        assert.equal(google.length,0)
        const accept = await banner(page).getByRole('button',{name:'Accept',exact:true}).boundingBox()
        const reject = await banner(page).getByRole('button',{name:'Reject',exact:true}).boundingBox()
        assert.equal(accept.width,reject.width); assert.equal(accept.height,reject.height); assert.ok(accept.height >= 44)
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
        if (width === 1440 || width === 390) await page.screenshot({path:`${screenshots}/banner-${width}.png`})
        const opener = banner(page).getByRole('button',{name:'Preferences',exact:true})
        await opener.focus(); await page.keyboard.press('Enter')
        assert.equal(await dialog(page).getByRole('switch',{name:'Analytics',exact:true}).isChecked(), false)
        assert.equal(await dialog(page).locator('input').count(),1)
        assert.equal(await page.getByRole('button',{name:'Close cookie preferences'}).evaluate(el => el === document.activeElement),true)
        // Native modal excludes background controls; browser chrome may receive focus between cycles.
        for (let i=0; i<9; i++) { await page.keyboard.press('Tab'); assert.ok(await page.evaluate(() => document.activeElement === document.body || document.activeElement.closest('dialog') !== null)) }
        await page.keyboard.press('Escape')
        assert.equal(await opener.evaluate(el => el === document.activeElement),true)
        await opener.click()
        if (width === 1440 || width === 390) await page.screenshot({path:`${screenshots}/preferences-${width}.png`})
        const toggle = dialog(page).getByRole('switch',{name:'Analytics',exact:true})
        await toggle.focus(); await page.keyboard.press('Space'); assert.equal(await toggle.isChecked(),true)
        await page.keyboard.press('Escape'); await opener.click(); assert.equal(await toggle.isChecked(),false)
        await dialog(page).getByRole('button',{name:'Save preferences'}).click()
        assert.equal(await choice(page),'denied'); assert.equal(google.length,0)
        await context.unrouteAll({behavior:'ignoreErrors'}); await context.close()
      })
    }
    await check('Accept, reload persistence, reopen, revoke, and re-accept with isolated Google requests', async () => {
      const {context,page,google} = await setup()
      await banner(page).getByRole('button',{name:'Accept',exact:true}).click()
      await page.waitForFunction(() => window.__bpzAnalyticsInitialized)
      assert.equal(await choice(page),'granted'); assert.equal(google.length,1)
      await page.reload(); await page.waitForFunction(() => window.__bpzAnalyticsInitialized)
      assert.equal(google.length,2); assert.equal(await banner(page).count(),0)
      await page.getByRole('button',{name:'Cookie preferences',exact:true}).click()
      assert.equal(await dialog(page).getByRole('switch').isChecked(),true)
      await dialog(page).getByRole('switch').focus(); await page.keyboard.press('Space')
      await Promise.all([page.waitForEvent('load'),dialog(page).getByRole('button',{name:'Save preferences'}).click()])
      assert.equal(await choice(page),'denied'); assert.equal(google.length,2)
      assert.equal(await page.locator('#bpz-google-analytics').count(),0)
      await page.getByRole('button',{name:'Cookie preferences',exact:true}).click()
      await dialog(page).getByRole('switch').focus(); await page.keyboard.press('Space')
      await dialog(page).getByRole('button',{name:'Save preferences'}).click()
      await page.waitForFunction(() => window.__bpzAnalyticsInitialized)
      assert.equal(google.length,3)
      await page.getByRole('button',{name:'Cookie preferences',exact:true}).click()
      await Promise.all([page.waitForEvent('load'),dialog(page).getByRole('button',{name:'Reject',exact:true}).click()])
      assert.equal(await choice(page),'denied'); assert.equal(google.length,3)
      await context.unrouteAll({behavior:'ignoreErrors'}); await context.close()
    })
    await check('Reject leaves Amazon hrefs/tags and native navigation unchanged on both pilot articles', async () => {
      const {context,page,google,outbound} = await setup()
      for (const path of ['/books/authors/best-alex-michaelides-books','/wfh/elgato-stream-deck-mk2-vs-logitech-mx-creative-console']) {
        await page.goto(origin+path)
        const before = await hrefs(page)
        assert.ok(before.some(h => h.includes('grandparentsgift-20')))
        assert.ok(before.some(h => h.includes('althcu-20')))
        if (await banner(page).isVisible()) await banner(page).getByRole('button',{name:'Reject',exact:true}).click()
        else {
          await page.getByRole('button',{name:'Cookie preferences',exact:true}).click()
          await dialog(page).getByRole('button',{name:'Reject',exact:true}).click()
        }
        assert.equal(await choice(page),'denied')
        assert.deepEqual(await hrefs(page), before)
        const link = page.locator('[data-organic-pilot] a').first()
        const destination = await link.getAttribute('href')
        const [popup] = await Promise.all([page.waitForEvent('popup'),link.click()])
        await popup.waitForLoadState().catch(()=>{})
        // Request is deliberately aborted externally; the native popup still targets the original URL.
        assert.ok(outbound.includes(destination), 'native navigation requests the unchanged Amazon href')
        await popup.close()
        await page.reload(); assert.deepEqual(await hrefs(page),before)
        assert.equal(google.length,0)
      }
      await context.unrouteAll({behavior:'ignoreErrors'}); await context.close()
    })
    for (const consent of ['granted','denied']) await check(`existing ${consent} choice is preserved`, async () => {
      const {context,page} = await setup({consent})
      await page.getByRole('button',{name:'Cookie preferences',exact:true}).click()
      assert.equal(await dialog(page).getByRole('switch').isChecked(),consent === 'granted')
      await page.keyboard.press('Escape'); assert.equal(await choice(page),consent)
      assert.equal(await banner(page).count(),0)
      await context.unrouteAll({behavior:'ignoreErrors'}); await context.close()
    })
    for (const method of ['Accept','Reject','Save preferences']) await check(`blocked storage: ${method} stays off and explains failure`, async () => {
      const {context,page,google} = await setup({blocked:true})
      await banner(page).getByRole('button',{name:'Preferences',exact:true}).click()
      if (method === 'Save preferences') { await dialog(page).getByRole('switch').focus(); await page.keyboard.press('Space') }
      await dialog(page).getByRole('button',{name:method,exact:true}).click()
      assert.ok((await page.getByRole('status').textContent()).includes('could not be saved'))
      assert.equal(google.length,0); assert.equal(await page.locator('#bpz-google-analytics').count(),0)
      await page.reload(); await banner(page).waitFor(); assert.equal(google.length,0)
      await context.unrouteAll({behavior:'ignoreErrors'}); await context.close()
    })
    await check('failed revocation write disables an already-loaded GA instance without restoring old permission', async () => {
      const {context,page,google} = await setup({consent:'granted',writeBlocked:true})
      await page.waitForFunction(() => window.__bpzAnalyticsInitialized)
      await page.getByRole('button',{name:'Cookie preferences',exact:true}).click()
      await dialog(page).getByRole('button',{name:'Reject',exact:true}).click()
      assert.equal(await page.evaluate(() => window['ga-disable-G-COOKIE-TEST']),true)
      assert.equal(await page.evaluate(() => window.__bpzAnalyticsConsentBlocked),true)
      assert.equal(google.length,1)
      await context.unrouteAll({behavior:'ignoreErrors'}); await context.close()
    })
    for (const config of [{sessionBlocked:true},{webdriver:true},{host:'http://localhost'}]) await check(`exclusion remains off: ${JSON.stringify(config)}`, async () => {
      const {context,page,google} = await setup(config)
      await banner(page).getByRole('button',{name:'Accept',exact:true}).click()
      assert.equal(google.length,0); assert.equal(await page.locator('#bpz-google-analytics').count(),0)
      await context.unrouteAll({behavior:'ignoreErrors'}); await context.close()
    })
    fs.writeFileSync(`${screenshots}/results.json`,JSON.stringify(results,null,2))
    console.log(`${results.length} browser scenarios passed; screenshots: ${screenshots}`)
  } finally { await browser.close() }
})().catch(error => { console.error(error); process.exitCode=1 })
