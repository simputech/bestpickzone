const {test}=require('node:test');
const assert=require('node:assert/strict');
const ts=require('typescript');
const fs=require('node:fs');
const path=require('node:path');
const mod={exports:{}};
const code=ts.transpileModule(fs.readFileSync('lib/deals/recommend.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true}}).outputText;
new Function('require','module','exports',code)(s=>require(path.resolve('lib/deals',s)),mod,mod.exports);
const {recommend,categories}=mod.exports;
const pick=r=>r.products[0]?.id;
test('every category can clarify and answer each starter prompt with a source and tradeoff',()=>{
 assert.equal(categories.length,10);
 for(const c of categories){
  const vague=recommend('I need help choosing',c.slug);
  assert.equal(vague.products.length,0,c.slug);
  assert.equal(vague.message,c.question);
  for(const q of c.examples){
   const r=recommend(q,c.slug);
   assert.ok(r.products.length,c.slug+': '+q);
   assert.ok(r.products[0].reason && r.products[0].tradeoff);
   assert.equal(new URL(r.products[0].source).protocol,'https:');
   assert.equal(new URL(r.products[0].search).searchParams.get('tag'),'althcu-20');
   assert.equal(r.livePrices,false);
  }
 }
});
test('a follow-up replaces a brewing preference without losing the budget',()=>{
 const first='I need espresso under $300';
 assert.equal(pick(recommend(first,'coffee-grinders')),'espresso');
 const later=recommend('Actually filter coffee only, not espresso','coffee-grinders',[first]);
 assert.equal(pick(later),'filter');assert.equal(later.budget,300);
});
test('new budget follow-up retains context without claiming price fit',()=>{
 const r=recommend('My budget is $50','espresso-machines',['I want automatic milk']);
 assert.equal(pick(r),'automatic');assert.equal(r.budget,50);assert.match(r.message,/cannot confirm/);
});
test('negative preferences do not become reasons to recommend that feature',()=>{
 assert.equal(pick(recommend('No dials, just shortcut keys','desktop-controllers')),'keys');
 assert.equal(pick(recommend('Not automatic, I want manual milk','espresso-machines')),'manual');
});
test('unknown categories and cross-category requests do not fabricate recommendations',()=>{
 assert.equal(recommend('a telescope for the balcony').products.length,0);
 const r=recommend('I need wireless earbuds','coffee-grinders');assert.equal(r.products.length,0);assert.equal(r.switchCategory.slug,'wireless-earbuds');
});
test('links are never represented as inspected and adult sets are not offered for children',()=>{
 assert.equal(recommend('https://example.com/product','pizza-ovens').products.length,0);
 assert.equal(recommend('A small shelf display for my 8 year old child','lego-display-sets').products.length,0);
});
test('Kindle library requests receive a Kindle option rather than incompatible Kobo advice',()=>assert.equal(pick(recommend('I want my Kindle library','e-readers')),'kindle'));
test('rejecting a prior choice never brings it back from chat history',()=>{
 const r=recommend("I don't want espresso",'coffee-grinders',['I want espresso']);
 assert.equal(r.products.length,0);
});
