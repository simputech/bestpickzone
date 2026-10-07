import test from 'node:test';
import assert from 'node:assert/strict';
import { DIMENSIONS, scopeChanges, validateReview, publishingDecision, correctionCycle } from './core.mjs';
import { inspectHtml, duplicateCandidates } from './quality.mjs';
const now = new Date('2026-10-06T12:00:00Z');
const sentence = 'Concrete page-specific evidence with a clear explanation.';
function fixture() {
  const context = { reviewId:'review_0001', headSha:'a'.repeat(40), baseSha:'b'.repeat(40), policySha:'c'.repeat(40), corpusSha:'d'.repeat(64), routes:['/books/example'], inventory:['/books/example','/books/sibling'], policyChanged:false, missing:[] };
  const review = {version:1, ...Object.fromEntries(['reviewId','headSha','baseSha','policySha','corpusSha'].map(k=>[k,context[k]])), generatedAt:now.toISOString(), verdict:'pass', limitations:'This review does not guarantee universal originality or factual correctness.', pages:[{route:context.routes[0], checks:Object.fromEntries(DIMENSIONS.map(k=>[k,{status:'pass',evidence:sentence}])), editorialWords:1200, pageType:'article', findings:[], comparisons:[{route:'/books/sibling',difference:sentence}],sources:[{claim:sentence,url:'https://example.com/primary',kind:'primary',checkedAt:now.toISOString(),support:sentence}]}]};
  const deterministic = {headSha:context.headSha,corpusSha:context.corpusSha,status:'pass',errors:[]};
  return {context, review, deterministic, provenance:true, currentHead:context.headSha, now};
}
test('strict complete report validates; inactive gate stays blocked',()=>{
  const f=fixture(); assert.deepEqual(validateReview(f.review,f.context,now),[]);
  assert.equal(publishingDecision(f).reason,'pilot-inactive');
  assert.equal(publishingDecision({...f,enabled:true}).status,'pass');
});
for (const [name, mutate] of [
  ['thin article',f=>f.review.pages[0].editorialWords=999],
  ['stale head',f=>f.review.headSha='e'.repeat(40)],
  ['stale policy',f=>f.review.policySha='e'.repeat(40)],
  ['stale corpus',f=>f.review.corpusSha='e'.repeat(64)],
  ['replayed invocation',f=>f.review.reviewId='review_old1'],
  ['old review',f=>f.review.generatedAt='2026-10-04T00:00:00Z'],
  ['missing route',f=>f.review.pages=[]],
  ['duplicate route',f=>f.review.pages.push(f.review.pages[0])],
  ['missing dimension',f=>delete f.review.pages[0].checks.originalValue],
  ['unknown property',f=>f.review.approved=true],
  ['contradictory pass',f=>f.review.pages[0].checks.readerIntent.status='revise'],
  ['no source',f=>f.review.pages[0].sources=[]],
  ['stale price',f=>{f.review.pages[0].sources[0].kind='retailer-price-availability';f.review.pages[0].sources[0].checkedAt='2026-10-04T00:00:00Z'}],
  ['no corpus comparison',f=>f.review.pages[0].comparisons=[]],
  ['unresolved findings',f=>f.review.pages[0].findings=[sentence]],
]) test(name+' cannot pass',()=>{const f=fixture();mutate(f);assert.notEqual(publishingDecision({...f,enabled:true}).status,'pass')});
for (const [name, mutate] of [
  ['head moved',f=>f.currentHead='e'.repeat(40)],
  ['untrusted producer',f=>f.provenance=false],
  ['policy change',f=>f.context.policyChanged=true],
  ['unmapped route',f=>f.context.missing=['/unknown']],
  ['failed deterministic check',f=>f.deterministic.status='fail'],
  ['different deterministic commit',f=>f.deterministic.headSha='e'.repeat(40)],
]) test(name+' blocks',()=>{const f=fixture();mutate(f);assert.equal(publishingDecision({...f,enabled:true}).status,'blocked')});
test('scope includes shared templates, data, assets and unknown files',()=>{
  const inventory=['/','/books/a','/coffee/b'];
  for (const file of ['components/article/HtmlComparisonArticlePage.tsx','lib/books-data.ts','public/new.svg','app/books/[slug]/page.tsx','app/layout.tsx','new-renderer.js']) assert.deepEqual(scopeChanges([file],inventory).routes,inventory);
  assert.deepEqual(scopeChanges(['app/books/a/page.tsx'],inventory).routes,['/books/a']);
  assert.deepEqual(scopeChanges(['app/books/deleted/page.tsx'],inventory).missing,['/books/deleted']);
  assert.equal(scopeChanges(['.github/workflows/review.yml'],inventory).policyChanged,true);
  assert.deepEqual(scopeChanges(['docs/notes.md'],inventory).routes,[]);
});
test('correction requires a new commit and a fresh invocation',async()=>{
  let f=fixture(), calls=0, corrections=0;
  const result=await correctionCycle({
    prepare:async()=>f, head:async()=>f.context.headSha,
    review:async()=>{calls++;const r=structuredClone(f.review);if(calls===1){r.verdict='revise';r.pages[0].checks.readerIntent.status='revise';r.pages[0].findings=[sentence]}return r},
    correct:async()=>{corrections++;f=fixture();f.context.headSha=f.currentHead=f.review.headSha=f.deterministic.headSha='e'.repeat(40);f.context.reviewId=f.review.reviewId='review_0002';return f.context.headSha}
  },{enabled:true});
  assert.equal(result.status,'pass');assert.equal(calls,2);assert.equal(corrections,1);
  assert.notEqual(result.history[0].headSha,result.history[1].headSha);
});
test('bounded correction loop stops after two attempts',async()=>{
  let round=0;let f=fixture();
  const result=await correctionCycle({
    prepare:async()=>f,head:async()=>f.context.headSha,
    review:async()=>({...f.review,verdict:'revise'}),
    correct:async()=>{round++;f.context.reviewId=f.review.reviewId='review_000'+(round+1);f.context.headSha=f.review.headSha=f.currentHead=f.deterministic.headSha=String(round).repeat(40);return f.context.headSha}
  },{enabled:true});
  assert.equal(result.status,'blocked');assert.equal(round,2);assert.equal(result.history.length,3);
});
test('no correction on invalid report or default inactive pilot',async()=>{
  assert.equal((await correctionCycle({})).reason,'pilot-inactive');
  const f=fixture();let edited=false;
  const result=await correctionCycle({prepare:async()=>f,head:async()=>f.context.headSha,review:async()=>({}),correct:async()=>{edited=true}},{enabled:true});
  assert.equal(result.status,'blocked');assert.equal(edited,false);
});
test('HTML checks find bad Amazon links, placeholders, heading and dead links',()=>{
  const r=inspectHtml('/books/a','<main><h1>A</h1><h1>B</h1><p>TODO</p><a href="https://www.amazon.com/s?k=a&tag=bestpickzone-20">Buy</a><a href="/dead">Dead</a></main>',['/books/a']);
  assert.ok(r.errors.length>=5);
});
test('proper affiliate attributes and internal routes pass',()=>{
  const r=inspectHtml('/books/a','<main><h1>A</h1><a href="https://www.amazon.com/s?k=a&amp;tag=althcu-20" target="_blank" rel="sponsored noopener">Buy</a><a href="/books">Books</a></main>',['/books/a','/books']);
  assert.deepEqual(r.errors,[]);
});
test('duplication diagnostic compares existing rendered corpus',()=>{
  assert.equal(duplicateCandidates([{route:'/a',html:'<p>Repeated content</p>'},{route:'/b',html:'<p>Repeated content</p>'}],['/a'])[0].exact,true);
});
