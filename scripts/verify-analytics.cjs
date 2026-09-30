/* Run with PLAYWRIGHT_MODULE_PATH if Playwright is supplied by the workspace runtime.
 * All collection requests are intercepted. This suite never sends GA test visits.
 */
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright')
const ts = require('typescript')
const base = process.argv[2] || 'http://localhost:3107'
const live = base === 'https://bestpickzone.com'
const paths = ['/coffee/best-espresso-grinders-gaggia-classic-pro', '/coffee/best-bottomless-portafilters-gaggia-classic-pro', '/books/daring-greatly-vs-the-gifts-of-imperfection']
const out = process.env.QA_OUTPUT || '/tmp/bpz-browser-qa'
fs.mkdirSync(out, { recursive: true })
const results = []
let gtag
function compile(file) {
  return ts.transpileModule(fs.readFileSync(file,'utf8').replace(/^import .*$/mg, '').replace(/^'use client'/m, '').replace(/export default function AffiliateClickTracker[\s\S]*/, ''), { compilerOptions: {target: ts.ScriptTarget.ES2017, module: ts.ModuleKind.ESNext} }).outputText.replace(/^export /mg,'')
}
async function context(browser, {mobile=false, human=true, disabled=false}={}) {
  const c = await browser.newContext({viewport: mobile ? {width:390,height:844} : {width:1440,height:1000}, isMobile:mobile, hasTouch:mobile})
  if (human) await c.addInitScript(() => Object.defineProperty(Navigator.prototype,'webdriver',{get:()=>false}))
  if (disabled) await c.addInitScript(() => { window.__BPZ_DISABLE_ANALYTICS__=true })
  const requests = [], errors=[]
  c.on('page',p=>p.on('pageerror',e=>{errors.push(e.message);console.error('Browser runtime error',p.url(),e.stack)}))
  await c.route('**/*',async route=>{
    const r=route.request(), u=new URL(r.url())
    if (u.hostname==='www.googletagmanager.com') return route.fulfill({status:200,contentType:'application/javascript',body:gtag})
    if (/google-analytics\.com$|analytics\.google\.com$|doubleclick\.net$|google\.com$/.test(u.hostname)) {
      requests.push({url:r.url(),body:r.postData()||''});return route.fulfill({status:204})
    }
    if (u.hostname==='www.amazon.com') return route.fulfill({status:200,contentType:'text/html',body:'<h1>Outbound destination captured by test</h1>'})
    if (!live && (u.hostname==='bestpickzone.com'||u.hostname==='preview.vercel.app')) {
      const response = await route.fetch({url:base+u.pathname+u.search});return route.fulfill({response})
    }
    if (u.origin===base || u.hostname==='bestpickzone.com') return route.continue()
    return route.abort() // No external telemetry from test sessions.
  })
  return {c,requests,errors}
}
const sleep=ms=>new Promise(r=>setTimeout(r,ms))
async function until(fn,message){for(let i=0;i<60;i++){if(await fn())return;await sleep(100)}throw new Error(message)}
const events=p=>p.evaluate(()=> (window.dataLayer||[]).filter(x=>x[0]==='event').map(x=>({name:x[1],params:x[2]})))
// Google may also send a separate Ads conversion transport; count only GA4 hits.
const collectionEvents=req=>req.filter(r=>new URL(r.url).pathname==='/g/collect').flatMap(r=>{
 const common=new URL(r.url).searchParams
 return (r.body ? r.body.split('\n') : ['']).map(body=>{const p=new URLSearchParams(common);new URLSearchParams(body).forEach((v,k)=>p.set(k,v));return Object.fromEntries(p)})
}).filter(r=>r.en)
;(async()=>{
 if (process.env.GTAG_FIXTURE) gtag=fs.readFileSync(process.env.GTAG_FIXTURE,'utf8')
 else {const response=await fetch('https://www.googletagmanager.com/gtag/js?id=G-74D5L887X5');assert.ok(response.ok);gtag=await response.text()}
 const browser=await chromium.launch({headless:true, channel:process.env.PLAYWRIGHT_CHANNEL})
 try {
  for(const mobile of [false,true]) {
   const {c,requests,errors}=await context(browser,{mobile});const p=await c.newPage()
   for(const routePath of paths){
    const response=await p.goto('https://bestpickzone.com'+routePath);assert.equal(response.status(),200)
    await p.waitForFunction(()=>window.__bpzAnalyticsInitialized)
    const seo=await p.evaluate(()=>({title:document.title,description:document.querySelector('meta[name="description"]')?.content,h1:[...document.querySelectorAll('h1')].map(x=>x.textContent),canon:[...document.querySelectorAll('link[rel="canonical"]')].map(x=>x.href),robots:document.querySelector('meta[name="robots"]')?.content,og:document.querySelector('meta[property="og:url"]')?.content,overflow:document.documentElement.scrollWidth>innerWidth,words:document.querySelector('article').innerText.split(/\s+/).length,affiliate:[...document.querySelectorAll('article a[href*="amazon.com"]')].map(x=>({url:x.href,rel:x.rel,target:x.target,product:x.dataset.productName})),schema:[...document.querySelectorAll('script[type="application/ld+json"]')].map(x=>JSON.parse(x.textContent)['@type'])}))
    assert.equal(seo.h1.length,1);assert.deepEqual(seo.canon,['https://bestpickzone.com'+routePath]);assert.equal(seo.og,seo.canon[0]);assert.match(seo.robots,/index, follow/);assert.ok(!seo.overflow);assert.ok(seo.words>1200);assert.ok(seo.schema.includes('Article'));assert.ok(!seo.schema.includes('FAQPage'))
    for(const a of seo.affiliate){assert.equal(new URL(a.url).searchParams.get('tag'),'althcu-20');assert.match(a.rel,/sponsored/);assert.match(a.rel,/noopener/);assert.equal(a.target,'_blank');assert.ok(a.product)}
    await p.screenshot({path:path.join(out,routePath.split('/').pop()+(mobile?'-mobile':'-desktop')+'.png'),fullPage:true})
    await p.screenshot({path:path.join(out,routePath.split('/').pop()+(mobile?'-mobile-top':'-desktop-top')+'.png')})
    const links=p.locator('article a[href*="amazon.com"]')
    for(let i=0;i<await links.count();i++) {
      const before=(await events(p)).filter(x=>x.name==='affiliate_click').length
      const popup=c.waitForEvent('page'); if(mobile) await links.nth(i).tap();else await links.nth(i).click()
      const dest=await popup; await dest.waitForLoadState('domcontentloaded');assert.match(dest.url(),/^https:\/\/www.amazon.com\//);await dest.close()
      const after=await events(p);assert.equal(after.filter(x=>x.name==='affiliate_click').length,before+1);assert.equal(after.filter(x=>x.name==='amazon_click').length,0)
      const e=after.filter(x=>x.name==='affiliate_click').at(-1).params
      assert.equal(e.affiliate_network,'amazon');assert.equal(e.destination_domain,'www.amazon.com');assert.equal(e.page_path,routePath);assert.equal(e.article_slug,routePath.split('/').pop());assert.ok(e.product_name);assert.ok(e.product_category)
    }
    results.push({viewport:mobile?'mobile':'desktop',path:routePath,seo,clicks:seo.affiliate.length})
   }
   if(!mobile){
    for(const action of [{button:'middle'},{modifiers:['Shift']},{modifiers:['Meta']},{keyboard:true}]){
      console.log('Testing modifier', action)
      const link=p.locator('article a[href*="amazon.com"]').first();const before=(await events(p)).length
      const popup=c.waitForEvent('page');if(action.keyboard)await link.press('Enter');else await link.click(action)
      const dest=await popup;await dest.waitForLoadState('domcontentloaded');assert.match(dest.url(),/^https:\/\/www.amazon.com\//);await dest.close()
      assert.equal((await events(p)).length,before+1)
    }
    // Real Next Link transition; the root analytics component must not reload.
    const configBefore=await p.evaluate(()=>window.dataLayer.filter(x=>x[0]==='config').length)
    await p.locator('nav[aria-label="Breadcrumb"] a[href="/books"]').click();await p.waitForURL('**/books')
    assert.equal(await p.evaluate(()=>window.dataLayer.filter(x=>x[0]==='config').length),configBefore)
    await until(()=>collectionEvents(requests).some(x=>x.en==='page_view'&&x.dl==='https://bestpickzone.com/books'),'SPA page view missing')
    assert.equal(collectionEvents(requests).filter(x=>x.en==='page_view'&&x.dl==='https://bestpickzone.com/books').length,1)
    await p.goBack();await p.waitForURL('**/daring-greatly-vs-the-gifts-of-imperfection')
    const n=(await events(p)).length;const popup=c.waitForEvent('page');await p.locator('article a[href*="amazon.com"]').first().click();await (await popup).close();assert.equal((await events(p)).length,n+1)
   }
   await sleep(1500)
   fs.writeFileSync(path.join(out, mobile ? 'mobile-network.json' : 'desktop-network.json'), JSON.stringify(requests,null,2))
   const net=collectionEvents(requests)
   assert.equal(net.filter(x=>x.en==='amazon_click').length,0)
   assert.equal(net.filter(x=>x.en==='affiliate_click').length,mobile?16:21)
   assert.ok(net.some(x=>x.en==='affiliate_click'&&x['ep.affiliate_network']==='amazon'))
   for(const routePath of paths.slice(0,2)) assert.equal(net.filter(x=>x.en==='page_view'&&x.dl==='https://bestpickzone.com'+routePath).length,1)
   assert.deepEqual(errors,[]);results.push({viewport:mobile?'mobile':'desktop',networkEventCounts:net.reduce((a,e)=>(a[e.en]=(a[e.en]||0)+1,a),{}),runtimeErrors:errors})
   await c.close()
  }
  for(const scenario of [{name:'webdriver',human:false},{name:'explicit monitor flag',disabled:true},{name:'monitor query',query:'?bpz_analytics=off'},{name:'localhost',origin:live?null:base},{name:'preview hostname',origin:live?null:'https://preview.vercel.app'}]){
   if(scenario.origin===null)continue
   const {c,requests}=await context(browser,scenario);const p=await c.newPage();let gtagLoads=0;p.on('request',r=>{if(r.url().includes('googletagmanager'))gtagLoads++})
   await p.goto((scenario.origin||'https://bestpickzone.com')+paths[0]+(scenario.query||''));await sleep(500)
   assert.equal(gtagLoads,0);assert.equal(requests.length,0);assert.equal(await p.evaluate(()=>!!window.gtag),false)
   if(scenario.query){await p.goto('https://bestpickzone.com'+paths[1]);await sleep(300);assert.equal(gtagLoads,0)}
   results.push({guard:scenario.name,gtagLoads,collectionRequests:requests.length});await c.close()
  }
  // Exercise singleton setup and component subscribe/unsubscribe directly in a
  // real DOM. This catches duplicate mounts, cleanup bugs and event propagation.
  const {c}=await context(browser);const p=await c.newPage();await p.goto('https://bestpickzone.com'+paths[0]+'?bpz_analytics=off')
  await p.evaluate(()=>{sessionStorage.clear();history.replaceState({},'',location.pathname)})
  const visitor=compile('lib/visitor-analytics.ts').replace('process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID',"'G-74D5L887X5'")
  const tracker=compile('components/analytics/AffiliateClickTracker.tsx')
  await p.addScriptTag({content:visitor+'\n'+tracker+'\nwindow.bpzTest={initializeAnalytics,subscribeToAffiliateClicks};'})
  await p.evaluate(()=>{window.bpzTest.initializeAnalytics(false)});assert.equal(await p.evaluate(()=>!!window.gtag),false)
  await p.evaluate(()=>{for(let i=0;i<5;i++)window.bpzTest.initializeAnalytics(true);window.cleanupA=window.bpzTest.subscribeToAffiliateClicks();window.cleanupB=window.bpzTest.subscribeToAffiliateClicks()})
  assert.equal(await p.evaluate(()=>window.dataLayer.filter(x=>x[0]==='config').length),1)
  const before=(await events(p)).length;const popup=c.waitForEvent('page');await p.locator('article a[href*="amazon.com"]').first().click();await(await popup).close()
  // The application listener and test singleton each fire once; two test subscriptions must not add a third.
  assert.equal((await events(p)).length,before+2)
  await p.evaluate(()=>{window.cleanupA();window.cleanupA();window.cleanupB()})
  const after=(await events(p)).length;const pop=c.waitForEvent('page');await p.locator('article a[href*="amazon.com"]').first().click();await(await pop).close();assert.equal((await events(p)).length,after+1)
  results.push({singletonInitialization:'passed',duplicateSubscriptions:'passed',idempotentCleanup:'passed',nonProductionBuild:'disabled'})
  await c.close()
  fs.writeFileSync(path.join(out,'results.json'),JSON.stringify(results,null,2));console.log(JSON.stringify({passed:true,checks:results.length,output:out}))
 } finally {await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1})
