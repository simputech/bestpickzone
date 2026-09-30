/* Verify the dated release against SSR, sitemaps, and mobile table rendering.
 * Analytics is disabled and all third-party requests are blocked in this suite.
 */
const fs=require('node:fs'), assert=require('node:assert/strict')
const {chromium}=require(process.env.PLAYWRIGHT_MODULE_PATH||'playwright')
const base=process.argv[2]||'http://localhost:3107'
const out=process.env.QA_OUTPUT||'/tmp/bpz-buying-decisions'
const guides=JSON.parse(fs.readFileSync('reports/buying-decisions-manifest-2026-09-30.json','utf8'))
fs.mkdirSync(out,{recursive:true})
;(async()=>{
 const sitemaps=await Promise.all(['main','wfh'].map(async name=>({name,xml:await(await fetch(`${base}/sitemap-${name}.xml`)).text()})))
 const robots=await(await fetch(base+'/robots.txt')).text();assert.ok(!robots.includes('Disallow: /\n'))
 const browser=await chromium.launch({headless:true,channel:process.env.PLAYWRIGHT_CHANNEL})
 const results=[]
 try{
 const c=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true})
 await c.addInitScript(()=>{window.__BPZ_DISABLE_ANALYTICS__=true;window.__layoutShifts=0;new PerformanceObserver(list=>list.getEntries().forEach(e=>{if(!e.hadRecentInput)window.__layoutShifts+=e.value})).observe({type:'layout-shift',buffered:true})})
 await c.route('**/*',r=>new URL(r.request().url()).origin===base?r.continue():r.abort())
 const p=await c.newPage()
 for(const g of guides){
  const path=`/${g.silo}/${g.slug}`,canonical='https://bestpickzone.com'+path
  const response=await fetch(base+path,{redirect:'manual'});assert.equal(response.status,200);assert.ok(!/noindex|none/i.test(response.headers.get('x-robots-tag')||''))
  const html=await response.text();assert.ok(html.includes(g.title.replaceAll('&','&amp;'))||html.includes(g.title));assert.ok(/<table[ >]/.test(html));assert.ok(html.includes('Affiliate disclosure:'))
  const entries=sitemaps.flatMap(s=>[...s.xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m=>({map:s.name,body:m[1]}))).filter(e=>e.body.includes(`<loc>${canonical}</loc>`));assert.equal(entries.length,1);assert.ok(entries[0].body.includes('<lastmod>2026-09-30'))
  await p.goto(base+path);await p.waitForLoadState('networkidle')
  const info=await p.evaluate(()=>({h1:[...document.querySelectorAll('h1')].map(e=>e.textContent),canonical:[...document.querySelectorAll('link[rel="canonical"]')].map(e=>e.href),description:document.querySelector('meta[name="description"]')?.content,ogImage:document.querySelector('meta[property="og:image"]')?.content,schema:[...document.querySelectorAll('script[type="application/ld+json"]')].map(e=>JSON.parse(e.textContent)),tables:[...document.querySelectorAll('article table')].map(e=>({caption:e.caption?.textContent,width:e.clientWidth,scrollWidth:e.scrollWidth,overflow:getComputedStyle(e).overflowX,region:e.parentElement.getAttribute('role'),regionWidth:e.parentElement.clientWidth,regionScroll:e.parentElement.scrollWidth,regionOverflow:getComputedStyle(e.parentElement).overflowX,regionTabIndex:e.parentElement.tabIndex,regionRight:e.parentElement.getBoundingClientRect().right})),cls:window.__layoutShifts,js:performance.getEntriesByType('resource').filter(e=>e.name.includes('.js')).length,headings:[...document.querySelectorAll('article h1,article h2,article h3')].map(e=>({level:Number(e.tagName.slice(1)),text:e.textContent})),images:[...document.images].map(e=>({src:e.src,loaded:e.complete&&e.naturalWidth>0})),analytics:!!window.gtag}))
  assert.equal(info.h1.length,1);assert.deepEqual(info.canonical,[canonical]);assert.ok(info.description);assert.ok(info.ogImage);assert.equal(info.analytics,false);assert.ok(info.cls<0.1);assert.ok(info.images.every(e=>e.loaded));
  const article=info.schema.find(e=>e['@type']==='Article');assert.equal(article.dateModified,g.date);assert.equal(article.datePublished,g.publishedDate||g.date);assert.ok(!info.schema.some(e=>e['@type']==='FAQPage'||e.aggregateRating))
  for(let i=1;i<info.headings.length;i++)assert.ok(info.headings[i].level<=info.headings[i-1].level+1)
  for(let i=0;i<info.tables.length;i++){assert.ok(info.tables[i].caption);assert.equal(info.tables[i].region,'region');assert.equal(info.tables[i].regionOverflow,'auto');assert.equal(info.tables[i].regionTabIndex,0);assert.ok(info.tables[i].regionRight<=390);assert.ok(info.tables[i].regionWidth<=350);await p.locator('article table').nth(i).scrollIntoViewIfNeeded();await p.screenshot({path:`${out}/${g.slug}-table-${i}-mobile.png`})}
  results.push({path,status:response.status,ssrBytes:Buffer.byteLength(html),sitemap:entries[0].map,metadata:info})
 }
 const parentChecks=[
  ['/home-kitchen/best-kitchenaid-attachments-worth-buying',['/home-kitchen/kitchenaid-pasta-roller-vs-pasta-press','/home-kitchen/ninja-creami-containers-compatibility']],
  ['/home-kitchen/ooni-vs-gozney-best-outdoor-pizza-oven',['/home-kitchen/best-pizza-peels-ooni-koda-12']],
  ['/mahjong/best-mahjong-accessories',['/mahjong/best-mahjong-racks-pushers-oversized-tiles']],
  ['/home-kitchen',guides.filter(g=>g.silo==='home-kitchen').map(g=>`/${g.silo}/${g.slug}`)],
  ['/mahjong',['/mahjong/best-mahjong-racks-pushers-oversized-tiles']],
  ['/wfh',['/wfh/elgato-stream-deck-mk2-vs-logitech-mx-creative-console']]
 ]
 const parents=[]
 for(const viewport of [{width:390,height:844},{width:1440,height:1000}]){
  await p.setViewportSize(viewport)
  for(const [route,targets] of parentChecks){
   const res=await p.goto(base+route);assert.equal(res.status(),200);assert.equal(await p.locator('h1').count(),1)
   for(const target of targets)assert.equal(await p.locator(`main a[href="${target}"]`).count(),1,`${route} must link once to ${target}`)
   await p.locator(`main a[href="${targets[0]}"]`).scrollIntoViewIfNeeded();await p.screenshot({path:`${out}/parent-${route.split('/').pop()}-${viewport.width}.png`})
   parents.push({path:route,viewport,targets,status:res.status()})
  }
 }
 fs.writeFileSync(`${out}/parents.json`,JSON.stringify(parents,null,2))
 await c.close();fs.writeFileSync(`${out}/technical.json`,JSON.stringify(results,null,2));console.log(JSON.stringify({passed:true,pages:results.length,output:out}))
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1})
