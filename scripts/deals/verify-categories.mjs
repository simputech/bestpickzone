import assert from 'node:assert/strict';
import fs from 'node:fs';
const base=process.argv[2] || 'http://localhost:3106';
const categories=JSON.parse(fs.readFileSync('lib/deals/categories.json','utf8'));
const sitemap=await(await fetch(base+'/sitemap-main.xml')).text();
let questions=0;
for(const c of categories){
 const old=await fetch(`${base}/deals/${c.oldSlug}?from=check`,{redirect:'manual'});
 assert.equal(old.status,308,c.oldSlug);
 const location=new URL(old.headers.get('location'),base);
 assert.equal(location.pathname,`/deals/${c.slug}`);assert.equal(location.search,'?from=check');
 const response=await fetch(`${base}/deals/${c.slug}`);assert.equal(response.status,200);
 const html=await response.text();assert.equal((html.match(/<h1\b/g)||[]).length,1);
 assert.ok(html.includes(`rel="canonical" href="https://bestpickzone.com/deals/${c.slug}"`));
 assert.ok(html.includes('id="shopping-question"'));assert.ok(html.includes('WHY WE CAN HELP'));
 assert.ok(!html.includes('Your offer checklist'));
 assert.ok(sitemap.includes(`/deals/${c.slug}</loc>`));assert.ok(!sitemap.includes(`/deals/${c.oldSlug}</loc>`));
 for(const q of c.examples){
  const r=await fetch(base+'/api/deal-agent',{method:'POST',headers:{'Content-Type':'application/json',origin:base},body:JSON.stringify({query:q,category:c.slug})});
  assert.equal(r.status,200);
  const answer=await r.json();assert.ok(answer.products[0]?.reason,c.slug+q);assert.ok(answer.products[0].tradeoff);assert.equal(answer.livePrices,false);questions++;
 }
}
for(const body of [{query:'x'},{query:'Valid question',category:'not-a-category'},{query:'Valid question',history:['x'.repeat(401)]},{query:'Valid question',history:Array(7).fill('old')}]){
 const r=await fetch(base+'/api/deal-agent',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});assert.equal(r.status,400);
}
const foreign=await fetch(base+'/api/deal-agent',{method:'POST',headers:{'Content-Type':'application/json',origin:'https://unrelated.example'},body:JSON.stringify({query:'coffee grinder'})});assert.equal(foreign.status,400);
console.log(JSON.stringify({base,categories:10,permanentRedirects:10,promptResponses:questions,sitemap:'new categories only',metadata:'self-canonicals and single H1',invalidRequests:'rejected'},null,2));
