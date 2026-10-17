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
 for(const text of ['$-20','$20.123','$100001'])assert.equal(readBudget([text],state).budgetIssue,'invalid',text);
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
test('impossible budgets, rejected features, and unrecognized replies terminate clearly',()=>{
 assert.equal(recommend('coffee grinder under $0').status,'no-match');
 assert.equal(recommend('coffee grinder $-1').status,'invalid-budget');
 const r=recommend('I do not know','coffee-grinders',['coffee grinder']);assert.equal(r.status,'no-match');assert.doesNotMatch(r.message,/Will you make/);
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
