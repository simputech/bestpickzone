const test=require('node:test'), assert=require('node:assert/strict');
const load=require('./load.cjs');
const {readBudget,emptyBudget}=load('lib/deals/budget.ts');
const {recommend}=load('lib/deals/recommend.ts');
const {verifyBudget}=load('lib/deals/budget-recommendation.ts');
const {matchBudgetOffer}=load('lib/amazon-budget-offer.ts');
const now=Date.parse('2026-10-17T00:00:00Z');
const offer=amount=>({asin:'B000TEST01',url:'https://www.amazon.com/dp/B000TEST01?tag=althcu-20',amount,currency:'USD',displayAmount:`$${amount.toFixed(2)}`,checkedAt:new Date(now-1000).toISOString(),expiresAt:new Date(now+299000).toISOString()});
test('budget parsing retains, replaces, removes and rejects invalid or foreign amounts',()=>{
 for(const [text,amount] of [['under $20',20],['20 dollars',20],['budget is 30',30],['up to $1,200',1200],['$1.5k',1500],['$0',0],['was $30, now $20',20]])assert.equal(readBudget([text]).budget,amount,text);
 const state=readBudget(['coffee grinder under $20']);
 assert.deepEqual(readBudget(Array(12).fill('filter coffee only'),state),state);
 assert.equal(readBudget(['now $40'],state).budget,40);
 assert.deepEqual(readBudget(['no budget'],state),emptyBudget);
 assert.deepEqual(readBudget(['was $20, now no budget'],state),emptyBudget);
 assert.equal(readBudget(['no budget, actually $50'],state).budget,50);
 for(const text of ['$-20','$20.123','$100001','$1,2'])assert.equal(readBudget([text],state).budgetIssue,'invalid',text);
 assert.equal(readBudget(['under €20']).budgetIssue,'currency');
 assert.equal(readBudget(['filter only'],readBudget(['€20'])).budgetIssue,'currency');
});
test('initial budget query and both chips never expose unverified picks',()=>{
 for(const query of ['coffee grinder under $20','Filter coffee only','Espresso and filter coffee']){
  const r=recommend(query,'coffee-grinders',['coffee grinder under $20']);
  assert.equal(r.budget,20);assert.equal(r.products.length,0);assert.equal(r.status,'verification-unavailable');assert.doesNotMatch(r.message,/Will you make/);
 }
 const retained=recommend('filter only','coffee-grinders',Array(6).fill('filter only'),readBudget(['under $20']));
 assert.equal(retained.budget,20);assert.equal(retained.products.length,0);
});
test('verified item prices obey inclusive and exclusive limits; partial failures never imply exhaustive no-match',async()=>{
 const r=recommend('coffee grinder under $20');
 const none=await verifyBudget(r,async()=>offer(20),now);assert.equal(none.status,'no-match');assert.equal(none.products.length,0);
 const match=await verifyBudget({...r,budgetExclusive:false},async()=>offer(20),now);assert.equal(match.products.length,2);assert.equal(match.livePrices,true);
 const over=await verifyBudget(r,async()=>offer(200),now);assert.equal(over.status,'no-match');assert.equal(over.products.length,0);
 const partial=await verifyBudget(r,async req=>req.asin==='B007F183LK'?null:offer(200),now);assert.equal(partial.status,'verification-unavailable');
 for(const value of [null,{...offer(10),expiresAt:new Date(now-1).toISOString()},{...offer(10),checkedAt:new Date(now+1).toISOString()}])assert.equal((await verifyBudget(r,async()=>value,now)).products.length,0);
 assert.equal((await verifyBudget(r,async()=>{throw Error('offline')},now)).status,'verification-unavailable');
});
test('impossible budgets terminate clearly and vague requests return direct options',()=>{
 assert.equal(recommend('coffee grinder under $0').status,'no-match');
 assert.equal(recommend('coffee grinder $-1').status,'invalid-budget');
 const r=recommend('I do not know','coffee-grinders',['coffee grinder']);assert.equal(r.status,'recommendation');assert.equal(r.products.length,2);assert.doesNotMatch(r.message,/Will you make/);
 assert.equal(recommend('a telescope under $20').products.length,0);
});
const request={query:'Example Aero coffee grinder',brand:'Example'};
const item=()=>({asin:'B000TEST01',detailPageURL:'https://www.amazon.com/dp/B000TEST01?tag=althcu-20&linkCode=ogi',images:{primary:{large:{url:'https://m.media-amazon.com/images/I/example.jpg',width:300,height:300}}},itemInfo:{title:{displayValue:'Example Aero coffee grinder'},byLineInfo:{brand:{displayValue:'Example'}}},offersV2:{listings:[{price:{money:{amount:19.99,currency:'USD',displayAmount:'$19.99'}},availability:{type:'IN_STOCK',minOrderQuantity:1},condition:{value:'New'},isBuyBoxWinner:true,violatesMAP:false}]}});
const parse=x=>matchBudgetOffer([x],request,'althcu-20',new Date(now).toISOString());
test('offer parser only accepts exact unrestricted new in-stock offers and preserves returned attribution',()=>{
 assert.equal(parse(item()).amount,19.99);assert.equal(parse(item()).url,item().detailPageURL);
 for(const patch of [{violatesMAP:true},{violatesMAP:undefined},{isBuyBoxWinner:false},{condition:{value:'Used'}},{availability:{type:'OUTOFSTOCK'}},{availability:{type:'IN_STOCK',minOrderQuantity:2}},{type:'SUBSCRIBEAND_SAVE'},{dealDetails:{accessType:'PRIME_EXCLUSIVE'}},{price:{money:{amount:9,currency:'CAD',displayAmount:'$9.00'}}},{price:{money:{amount:9,currency:'USD',displayAmount:'$19.99'}}}]){
  const x=item();Object.assign(x.offersV2.listings[0],patch);assert.equal(parse(x),null,JSON.stringify(patch));
 }
 const wrong=item();wrong.itemInfo.title.displayValue='Example Aero replacement burr';assert.equal(parse(wrong),null);
 const wrongTag=item();wrongTag.detailPageURL=wrongTag.detailPageURL.replace('althcu-20','wrong-20');assert.equal(parse(wrongTag),null);
});
test('unsupported grinder types survive budget-only follow-ups',()=>{
 const first='manual coffee grinder under $20';
 assert.equal(recommend(first).status,'no-match');
 assert.equal(recommend('now $300','coffee-grinders',[first]).status,'no-match');
 assert.equal(recommend('actually electric, budget to $200','coffee-grinders',[first]).budget,200);
 assert.equal(recommend('actually electric, budget to $200','coffee-grinders',[first]).status,'verification-unavailable');
});

test('measurement constraints never overwrite an explicit monetary budget',()=>{
 const state=readBudget(['coffee grinder under $20']);
 for(const query of [
  'coffee grinder under $20, maximum 200 watts',
  'coffee grinder under $20 and below 500 grams',
  'coffee grinder under $20, maximum 200',
  'coffee grinder under 20, maximum 200',
  'coffee grinder under $20 and below 5 pounds',
  ...['watts','W','grams','g','kg','inch','inches','cm','ml','rpm','dB','years','GB','%'].map(unit=>`coffee grinder under $20 and below 500 ${unit}`),
 ]){
  assert.deepEqual(readBudget([query]),state,query);
  const result=recommend(query);assert.equal(result.budget,20);assert.equal(result.products.length,0);assert.equal(result.status,'verification-unavailable');assert.doesNotMatch(result.message,/\?/);
 }
 for(const query of ['maximum 200 watts','maximum 200-watt motor','below 500 grams','below 500-gram weight','under 5 pounds'])assert.deepEqual(readBudget([query],state),state,query);
});
test('USD and punctuated budget formats remain constrained through direct results and genuine revisions',()=>{
 for(const query of ['coffee grinder under USD 20','coffee grinder budget: 20','coffee grinder under 20 USD','coffee grinder budget: USD 20','coffee grinder under USD$20','coffee grinder under US$20']){
  const result=recommend(query);assert.equal(result.budget,20,query);assert.equal(result.products.length,0);assert.equal(result.status,'verification-unavailable');assert.doesNotMatch(result.message,/\?/);
 }
 assert.equal(readBudget(['coffee grinder under USD 20']).budgetExclusive,true);
 let state=readBudget(['coffee grinder under $20']);
 for(const [query,value] of [['now $30',30],['under USD 40',40],['budget: 50',50],['actually under 60',60],['up to 70',70]]){
  state=readBudget([query],state);assert.equal(state.budget,value,query);
 }
 assert.equal(readBudget(['was $20, now under 40']).budget,40);
 assert.equal(readBudget(['under $20 and budget: 30']).budget,30);
 assert.equal(readBudget(['under GBP 20']).budgetIssue,'currency');
 assert.equal(readBudget(['budget: 20 pounds']).budgetIssue,'currency');
 for(const query of ['under CAD 20','under $20 CAD','under CA$20','under A$20','under CAD$20','under AUD$20'])assert.equal(readBudget([query]).budgetIssue,'currency',query);
});

test('explicit money survives stock, color and dimension language without a follow-up question',()=>{
 const state=readBudget(['coffee grinder under $20']);
 for(const query of [
  'coffee grinder under $20 in stock',
  'coffee grinder under $20 in black',
  'coffee grinder under USD 20 in stock',
  'coffee grinder under 20 USD in black',
  'coffee grinder under $20 in black and below 8 inches tall',
  'coffee grinder under $20 and below 8 in wide',
  'coffee grinder under $20 and below 8 in.',
  'coffee grinder under $20 and below 8-inch height',
  'coffee grinder under $20 and below 8in tall',
  'coffee grinder under $20 and below 8″ tall',
  'coffee grinder under 20 in stock',
  'coffee grinder under 20 in black',
 ]){
  assert.deepEqual(readBudget([query]),state,query);
  const result=recommend(query);assert.equal(result.budget,20,query);assert.equal(result.products.length,0);assert.equal(result.status,'verification-unavailable');assert.doesNotMatch(result.message,/\?/);
 }
 for(const query of ['below 8 inches tall','under 8 in','below 8 in wide','below 8 in. tall','below 8-inch height','below 8in tall','under 8″ tall'])assert.deepEqual(readBudget([query],state),state,query);
 assert.equal(readBudget(['budget: 30 in black'],state).budget,30);
 assert.equal(readBudget(['under $30 in stock'],state).budget,30);
 assert.equal(readBudget(['under €20 in stock']).budgetIssue,'currency');
});
