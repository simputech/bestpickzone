// Requires Playwright outside the app dependencies. Build with a synthetic
// NEXT_PUBLIC_GA_MEASUREMENT_ID and VERCEL_ENV=production, then start locally.
// PILOT_TEST_BASE can also target the deployed site. Google and retailer requests
// are intercepted, so this verifies client dispatch without sending test events.
const { chromium } = require('playwright')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const origin = 'https://bestpickzone.com'
const base = process.env.PILOT_TEST_BASE || 'http://127.0.0.1:3108'
const paths = ['/books/authors/best-alex-michaelides-books', '/wfh/elgato-stream-deck-mk2-vs-logitech-mx-creative-console']
const results = []
const readEvents = page => page.evaluate(() => (window.dataLayer || []).map(args => Array.from(args)).filter(args => args[0] === 'event'))
const hrefs = page => page.locator('a[href*="amazon."]').evaluateAll(links => links.map(link => link.href))

;(async () => {
  const browser = await chromium.launch({headless:true, executablePath:process.env.PILOT_TEST_BROWSER})
  async function setup(path, consent, blocked = false) {
    const context = await browser.newContext({viewport:{width:1440,height:1000}})
    const google = []
    await context.addInitScript(({consent,blocked}) => {
      Object.defineProperty(navigator,'webdriver',{get:()=>false})
      if (consent && !localStorage.getItem('bpz_analytics_consent')) localStorage.setItem('bpz_analytics_consent',consent)
      if (blocked) Object.defineProperty(window,'localStorage',{get(){throw Error('Storage blocked')}})
    },{consent,blocked})
    await context.route('**/*', async route => {
      if (route.request().headers()['next-router-prefetch']) { await route.abort(); return }
      const url = new URL(route.request().url())
      if (/google-analytics|googletagmanager/.test(url.hostname)) {
        google.push(url.toString())
        await route.fulfill({contentType:'application/javascript',body:'// Intercepted: no live GA collection.'})
      } else if (url.origin === origin) {
        const response = await context.request.fetch(base+url.pathname+url.search)
        await route.fulfill({response})
      } else if (url.hostname === 'amazon.com' || url.hostname.endsWith('.amazon.com')) {
        // A local response keeps the native new tab observable; no retailer request leaves the browser.
        await route.fulfill({contentType:'text/html',body:'<!doctype html><title>Intercepted retailer navigation</title>'})
      } else { await route.abort() }
    })
    const page = await context.newPage()
    await page.goto(origin+path)
    if (consent === 'granted' && !blocked) await page.waitForFunction(()=>window.__bpzAnalyticsInitialized)
    else if (!consent || blocked) await page.getByRole('region',{name:'Cookie preferences'}).waitFor()
    else await page.waitForFunction(()=>typeof window.next !== 'undefined')
    return {context,page,google}
  }
  async function activate(page, link) {
    await page.bringToFront()
    const [popup] = await Promise.all([
      page.context().waitForEvent('page'),
      link.click(),
    ])
    // Verify the native tab destination; the retailer response is a local fixture.
    assert.equal(popup.url(),await link.getAttribute('href'))
    await popup.close()
  }
  async function close(context) { await context.unrouteAll({behavior:'ignoreErrors'}); await context.close() }
  try {
    for (const path of paths) {
      for (const [name,consent,blocked] of [['unknown',null,false],['denied','denied',false],['granted','granted',false],['blocked','granted',true]]) {
        const {context,page,google} = await setup(path,consent,blocked)
        const before = await hrefs(page)
        const pilot = page.locator('[data-organic-pilot="grandparentsgift-20"] a').first()
        const destination = await pilot.getAttribute('href')
        assert.equal(new URL(destination).searchParams.get('tag'),'grandparentsgift-20')
        assert.equal(await page.locator('[data-organic-pilot="grandparentsgift-20"] a').count(),2)
        {
          const count = (await readEvents(page)).length
          await activate(page,pilot)
          const events = await readEvents(page)
          assert.equal(events.length,count+(name==='granted'?1:0))
          if (name==='granted') {
            const [,event,payload] = events.at(-1)
            assert.equal(event,'affiliate_click')
            assert.equal(payload.link_url,destination)
            assert.equal(payload.affiliate_network,'amazon')
            assert.equal(payload.article_slug,path.split('/').pop())
          }
          assert.deepEqual(await hrefs(page),before)
        }
        assert.equal(google.length,name==='granted'?1:0)
        results.push({path,consent:name,result:'PASS',activations:['primary']})
        console.log('PASS',path,name)
        await close(context)
      }
    }
    const {context,page,google} = await setup(paths[0],null)
    const before = await hrefs(page)
    await page.getByRole('region',{name:'Cookie preferences'}).getByRole('button',{name:'Accept',exact:true}).click()
    await page.waitForFunction(()=>window.__bpzAnalyticsInitialized)
    const pilot = page.locator('[data-organic-pilot="grandparentsgift-20"] a').first()
    await activate(page,pilot)
    assert.equal((await readEvents(page)).filter(e=>e[1]==='affiliate_click').length,1)
    await page.getByRole('button',{name:'Cookie preferences',exact:true}).click()
    await Promise.all([page.waitForEvent('load'),page.getByRole('dialog').getByRole('button',{name:'Reject',exact:true}).click()])
    await activate(page,pilot)
    assert.equal((await readEvents(page)).length,0)
    assert.equal(google.length,1)
    assert.deepEqual(await hrefs(page),before)
    results.push({path:paths[0],consent:'accept then revoke',result:'PASS'})
    console.log('PASS Accept then revoke: pilot dispatch stops and navigation remains unchanged')
    await close(context)
    if (process.env.PILOT_TEST_REPORT) fs.writeFileSync(process.env.PILOT_TEST_REPORT,JSON.stringify({base,results},null,2)+'\n')
    console.log(`${results.length} browser scenarios passed; no events sent to Google.`)
  } finally { await browser.close() }
})().catch(error=>{console.error(error);process.exitCode=1})
