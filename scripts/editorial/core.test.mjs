import test from 'node:test';
import assert from 'node:assert/strict';
import { DIMENSIONS, scopeChanges, validateReview, publishingDecision, correctionCycle, validateCorrection } from './core.mjs';
import { inspectHtml, duplicateCandidates } from './quality.mjs';
const now = new Date('2026-10-06T12:00:00Z');
const sentence = 'Concrete page-specific evidence with a clear explanation.';
function fixture() {
  const context = { reviewId:'review_0001', headSha:'a'.repeat(40), baseSha:'b'.repeat(40), policySha:'c'.repeat(40), corpusSha:'d'.repeat(64), routes:['/books/example'], inventory:['/books/example','/books/sibling'], policyChanged:false, missing:[], allowedContentFiles:['app/books/example/page.tsx'] };
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
    prepare:async()=>structuredClone(f), head:async()=>f.context.headSha,
    review:async()=>{calls++;const r=structuredClone(f.review);if(calls===1){r.verdict='revise';r.pages[0].checks.readerIntent.status='revise';r.pages[0].findings=[sentence]}return r},
    propose:async()=>({changes:[{path:'app/books/example/page.tsx',status:'modified',mode:'100644',binary:false}]}),
    commit:async()=>{corrections++;f=fixture();f.context.headSha=f.currentHead=f.review.headSha=f.deterministic.headSha='e'.repeat(40);f.context.reviewId=f.review.reviewId='review_0002';return f.context.headSha}
  },{enabled:true});
  assert.equal(result.status,'pass');assert.equal(calls,2);assert.equal(corrections,1);
  assert.notEqual(result.history[0].headSha,result.history[1].headSha);
});
test('bounded correction loop stops after two attempts',async()=>{
  let round=0;let f=fixture();
  const result=await correctionCycle({
    prepare:async()=>structuredClone(f),head:async()=>f.context.headSha,
    review:async()=>({...f.review,verdict:'revise'}),
    propose:async()=>({changes:[{path:'app/books/example/page.tsx',status:'modified',mode:'100644',binary:false}]}),
    commit:async()=>{round++;f.context.reviewId=f.review.reviewId='review_000'+(round+1);f.context.headSha=f.review.headSha=f.currentHead=f.deterministic.headSha=String(round).repeat(40);return f.context.headSha}
  },{enabled:true});
  assert.equal(result.status,'blocked');assert.equal(round,2);assert.equal(result.history.length,3);
});
test('no correction on invalid report or default inactive pilot',async()=>{
  assert.equal((await correctionCycle({})).reason,'pilot-inactive');
  const f=fixture();let edited=false;
  const result=await correctionCycle({prepare:async()=>structuredClone(f),head:async()=>f.context.headSha,review:async()=>({}),propose:async()=>({changes:[{path:'app/books/example/page.tsx',status:'modified',mode:'100644',binary:false}]}),
    commit:async()=>{edited=true}},{enabled:true});
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

test('corrections cannot change policy, add files, symlinks or expand content scope',()=>{
  const valid={path:'app/books/example/page.tsx',status:'modified',mode:'100644',binary:false};
  const allow=[valid.path,'.github/workflows/deploy.yml'];
  assert.deepEqual(validateCorrection([valid],allow),[]);
  for(const c of [{...valid,path:'.github/workflows/deploy.yml'},{...valid,path:'app/books/unscoped/page.tsx'},{...valid,mode:'120000'},{...valid,status:'added'},{...valid,binary:true}]) assert.ok(validateCorrection([c],allow).length);
  assert.ok(validateCorrection([],allow).length);
});
test('schema dimensions and strict object boundaries agree with validator',async()=>{
  const fs=await import('node:fs/promises');
  const schema=JSON.parse(await fs.readFile(new URL('../../editorial/review.schema.json',import.meta.url),'utf8'));
  assert.deepEqual(schema.properties.pages.items.properties.checks.required,DIMENSIONS);
  assert.equal(schema.additionalProperties,false);
  assert.equal(schema.properties.pages.items.additionalProperties,false);
});
test('release CLI exits blocked with missing evidence',async()=>{
  const {spawnSync}=await import('node:child_process');
  const result=spawnSync(process.execPath,['scripts/editorial/gate.mjs'],{encoding:'utf8'});
  assert.equal(result.status,1);assert.match(result.stderr,/missing-or-malformed-evidence/);
});

test('unsafe proposed correction is rejected before writer invocation',async()=>{
  const f=fixture();let writes=0;
  const result=await correctionCycle({
    prepare:async()=>structuredClone(f),head:async()=>f.context.headSha,
    review:async()=>({...f.review,verdict:'revise'}),
    propose:async()=>({changes:[{path:'.github/workflows/deploy.yml',status:'modified',mode:'100644',binary:false}]}),
    commit:async()=>{writes++;return 'e'.repeat(40)}
  },{enabled:true});
  assert.equal(result.reason,'unsafe-correction');assert.equal(writes,0);
});

for (const dimension of DIMENSIONS) test('revise cannot override blocked dimension: '+dimension,async()=>{
  const f=fixture();let proposals=0,writes=0;
  f.review.verdict='revise';
  f.review.pages[0].checks[dimension].status='block';
  // The report is well formed, but a hard blocker forbids automatic repair.
  assert.deepEqual(validateReview(f.review,f.context,now),[]);
  const result=await correctionCycle({
    prepare:async()=>structuredClone(f),head:async()=>f.context.headSha,
    review:async()=>f.review,
    propose:async()=>{proposals++;return {changes:[{path:'app/books/example/page.tsx',status:'modified',mode:'100644',binary:false}]}},
    commit:async()=>{writes++;return 'e'.repeat(40)}
  },{enabled:true});
  assert.equal(result.reason,'semantic-block');
  assert.equal(result.history.length,1);
  assert.equal(proposals,0);assert.equal(writes,0);
});

test('blocked dimension also overrides aggregate pass',()=>{
  const f=fixture();f.review.pages[0].checks.primarySourceSupport.status='block';
  assert.equal(publishingDecision({...f,enabled:true}).reason,'semantic-block');
});

test('a valid 900-word revise report can be corrected and freshly reviewed',async()=>{
  let f=fixture(),reviews=0,writes=0;
  f.review.verdict='revise';f.review.pages[0].editorialWords=900;
  f.review.pages[0].checks.structureAndDepth.status='revise';
  f.review.pages[0].findings=['Add topic-specific decision guidance to reach the editorial depth requirement.'];
  assert.deepEqual(validateReview(f.review,f.context,now),[]);
  const result=await correctionCycle({
    prepare:async()=>structuredClone(f),head:async()=>f.context.headSha,
    review:async()=>{reviews++;return structuredClone(f.review)},
    propose:async()=>({changes:[{path:'app/books/example/page.tsx',status:'modified',mode:'100644',binary:false}]}),
    commit:async()=>{
      writes++;f=fixture();
      f.context.headSha=f.currentHead=f.review.headSha=f.deterministic.headSha='e'.repeat(40);
      f.context.reviewId=f.review.reviewId='review_0002';
      return f.context.headSha;
    }
  },{enabled:true});
  assert.equal(result.status,'pass');assert.equal(reviews,2);assert.equal(writes,1);
  assert.notEqual(result.history[0].headSha,result.history[1].headSha);
  assert.notEqual(result.history[0].reviewId,result.history[1].reviewId);
});

test('a well-formed short-article pass report cannot authorize publishing',()=>{
  const f=fixture();f.review.pages[0].editorialWords=900;
  assert.deepEqual(validateReview(f.review,f.context,now),[]);
  const result=publishingDecision({...f,enabled:true});
  assert.equal(result.status,'blocked');
  assert.ok(result.errors.includes('Article below 1000 editorial words'));
});

test('negative or non-integer word counts remain invalid even for revise',()=>{
  for(const count of [-1,900.5,'900']) {
    const f=fixture();f.review.verdict='revise';f.review.pages[0].editorialWords=count;
    assert.ok(validateReview(f.review,f.context,now).includes('Invalid editorial word count'));
  }
});

test('shared expansion preserves missing direct routes without treating shared files as routes',()=>{
  const inventory=['/','/books/example','/books/sibling'];
  for(const shared of ['components/article/HtmlComparisonArticlePage.tsx','lib/books-data.ts','app/books/[slug]/page.tsx','app/layout.tsx']) {
    const scope=scopeChanges([shared,'app/books/deleted/page.tsx','app/books/example/page.tsx'],inventory);
    assert.deepEqual(scope.routes,inventory);
    assert.deepEqual(scope.missing,['/books/deleted']);
    assert.deepEqual(scopeChanges([shared,'app/books/example/page.tsx'],inventory).missing,[]);
  }
});

test('a deleted direct route plus shared edit blocks before correction',async()=>{
  const f=fixture();let proposals=0,writes=0;
  Object.assign(f.context,scopeChanges(['app/books/deleted/page.tsx','components/article/HtmlComparisonArticlePage.tsx'],f.context.inventory));
  const result=await correctionCycle({
    prepare:async()=>structuredClone(f),head:async()=>f.context.headSha,
    review:async()=>({...f.review,verdict:'revise'}),
    propose:async()=>{proposals++},commit:async()=>{writes++}
  },{enabled:true});
  assert.equal(result.reason,'policy-or-scope-needs-maintainer');
  assert.equal(proposals,0);assert.equal(writes,0);
});
