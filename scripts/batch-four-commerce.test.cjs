const assert = require('node:assert/strict');
const test = require('node:test');
const path = require('node:path');
const { loadSeoModule } = require('./lib/load-seo-module.cjs');
const { articleCommerce } = loadSeoModule(path.join(__dirname, '../lib/article-commerce.ts'));
const { matchAmazonProduct } = loadSeoModule(path.join(__dirname, '../lib/amazon-product-match.ts'));
const at = '2026-10-18T22:30:00Z';
const asin = 'B000000001';
function candidate(title, brand, model) {
  return { asin, detailPageURL: `https://www.amazon.com/dp/${asin}?tag=althcu-20`, images: { primary: { large: { url: 'https://m.media-amazon.com/images/I/SYNTHETIC-NOT-A-PRODUCT.jpg', width: 400, height: 300 } } }, itemInfo: { title: { displayValue: title }, byLineInfo: { brand: { displayValue: brand } }, manufactureInfo: { model: { displayValue: model } } } };
}
function request(route, index=0) { return articleCommerce[`/home-kitchen/${route}`].products[index]; }
function match(source, req) { return matchAmazonProduct(source, req, 'althcu-20', 'www.amazon.com', at); }
// Synthetic response titles exercise actual catalog constraints. No remote image is loaded.
test('coffee makers: complete exact models pass; replacement carafes and adjacent models fail', () => {
  for (const [index,title,brand,model] of [[0,'Cuisinart 14 Cup Coffee Maker with Glass Carafe','Cuisinart','DCC-3200NAS'],[1,'Hamilton Beach FlexBrew Trio Coffee Maker with Glass Carafe','Hamilton Beach','49902']]) {
    const req=request('best-coffee-makers-under-100',index);
    assert.ok(match(candidate(title,brand,model),req));
    assert.equal(match(candidate(title,brand,model+'X'),req),null);
    assert.equal(match(candidate(title.replace('with Glass Carafe','Replacement Carafe'),brand,model),req),null);
    assert.equal(match(candidate(title+' 240 V',brand,model),req),null);
  }
});
test('Roomba: original complete j7+ passes; Combo and bags fail even with matching model metadata', () => {
  const req=request('best-robot-vacuums');
  const title='iRobot Roomba j7+ Self-Emptying Robot Vacuum';
  assert.ok(match(candidate(title,'iRobot','j755020'),req));
  for(const variant of [title.replace('Roomba','Roomba Combo'),title+' bags',title+' replacement filter']) assert.equal(match(candidate(variant,'iRobot','j755020'),req),null);
  assert.equal(match(candidate(title,'iRobot','j715020'),req),null);
});
test('Q5: original 2700Pa package passes; Pro, Max and emptying-dock accessories fail', () => {
  const req=request('best-robot-vacuums',1);
  const title='roborock Q5+ 2700Pa Self-Emptying Robot Vacuum';
  assert.ok(match(candidate(title,'roborock','Q5'),req));
  for(const variant of [title.replace('Q5+','Q5 Pro+'),title.replace('Q5+','Q5 Max+'),title+' replacement bags',title+' filter']) assert.equal(match(candidate(variant,'roborock','Q5'),req),null);
});
test('Duo: standard 6QT identity passes; Crisp, Plus, overseas variant and lid-only do not', () => {
  const req=request('instant-pot-vs-ninja-foodi');
  const title='Instant Pot Duo 6 Qt Pressure Cooker';
  assert.ok(match(candidate(title,'Instant Pot','112-0170-01'),req));
  for(const variant of [title.replace('Duo','Duo Crisp'),title.replace('Duo','Duo Plus'),title+' 220 V',title+' lid']) assert.equal(match(candidate(variant,'Instant Pot','112-0170-01'),req),null);
  assert.equal(articleCommerce['/home-kitchen/instant-pot-vs-ninja-foodi'].products.length,1);
});
test('avocado: documented OXO tool passes; SoftWorks, generic brand and multipack fail', () => {
  const req=request('oxo-vs-fullstar-avocado-slicer');
  const title='OXO Good Grips 3-in-1 Avocado Slicer';
  assert.ok(match(candidate(title,'OXO','1252180'),req));
  assert.equal(match(candidate(title,'Generic','1252180'),req),null);
  for(const variant of [title+' SoftWorks',title+' 2 pack']) assert.equal(match(candidate(variant,'OXO','1252180'),req),null);
  assert.equal(articleCommerce['/home-kitchen/oxo-vs-fullstar-avocado-slicer'].products.length,1);
});
test('original monitor arms: exact LX kit and Basics identity pass; newer LX Pro and accessories fail', () => {
  const [lx, basics]=articleCommerce['/wfh/ergotron-lx-vs-amazon-basics-monitor-arm'].products;
  assert.ok(match(candidate('Ergotron LX Desk Monitor Arm','Ergotron','45-241-026'),lx));
  assert.equal(match(candidate('Ergotron LX Pro Desk Monitor Arm','Ergotron','45-241-026'),lx),null);
  assert.equal(match(candidate('Ergotron LX Desk Monitor Arm Extension Accessory','Ergotron','45-241-026'),lx),null);
  assert.equal(match(candidate('Ergotron LX Desk Monitor Arm','Ergotron','45-682'),lx),null);
  const full=candidate('Amazon Basics Single Monitor Stand Lift Engine Arm Mount','Amazon Basics','');
  full.asin='B00MIBN16O'; full.detailPageURL='https://www.amazon.com/dp/B00MIBN16O?tag=althcu-20';
  assert.ok(match(full,basics));
  full.itemInfo.title.displayValue='Amazon Basics Single Monitor Stand Pole Mount';
  assert.equal(match(full,basics),null);
});
test('seat cushions: complete named products pass; adjacent designs and covers fail', () => {
  const [purple,lab]=articleCommerce['/wfh/purple-royal-seat-cushion-vs-cushion-lab'].products;
  assert.ok(match(candidate('Purple Royal Seat Cushion','Purple',''),purple));
  assert.equal(match(candidate('Purple Royal Seat Cushion Replacement Cover','Purple',''),purple),null);
  assert.equal(match(candidate('Purple Double Seat Cushion','Purple',''),purple),null);
  assert.ok(match(candidate('Cushion Lab Pressure Relief Seat Cushion','Cushion Lab',''),lab));
  assert.equal(match(candidate('Cushion Lab Pressure Relief Seat Cushion Lumbar Bundle','Cushion Lab',''),lab),null);
});
test('chairs: current Aeron size identity and Gesture chair pass; Classic and stools fail', () => {
  const [aeron,gesture]=articleCommerce['/wfh/herman-miller-aeron-vs-steelcase-gesture'].products;
  assert.ok(match(candidate('Herman Miller Aeron Remastered Chair Size B','Herman Miller',''),aeron));
  assert.equal(match(candidate('Herman Miller Aeron Classic Chair Size B','Herman Miller',''),aeron),null);
  assert.equal(match(candidate('Herman Miller Aeron Remastered Chair Size C','Herman Miller',''),aeron),null);
  assert.ok(match(candidate('Steelcase Gesture Office Chair','Steelcase',''),gesture));
  assert.equal(match(candidate('Steelcase Gesture Office Chair Stool','Steelcase',''),gesture),null);
  assert.equal(match(candidate('Steelcase Gesture Office Chair Replacement Arm Pads','Steelcase',''),gesture),null);
});
test('input devices: exact generations pass and similar keyboards/mice fail', () => {
 const [keys,apple]=articleCommerce['/wfh/logitech-mx-keys-s-vs-apple-magic-keyboard'].products;
 assert.ok(match(candidate('Logitech MX Keys S keyboard','Logitech',''),keys));
 assert.equal(match(candidate('Logitech MX Keys Mini keyboard','Logitech',''),keys),null);
 assert.ok(match(candidate('Apple Magic Keyboard USB C US English','Apple','MJLX4LL/A'),apple));
 assert.equal(match(candidate('Apple Magic Keyboard USB C Touch ID','Apple','MJLX4LL/A'),apple),null);
 assert.equal(match(candidate('Apple Magic Keyboard USB C US English','Apple','MXCL3LL/A'),apple),null);
 const [mx,magic]=articleCommerce['/wfh/logitech-mx-master-3s-vs-apple-magic-mouse'].products;
 assert.ok(match(candidate('Logitech MX Master 3S Bluetooth Mouse','Logitech',''),mx));
 assert.equal(match(candidate('Logitech MX Master 3 Bluetooth Mouse','Logitech',''),mx),null);
 assert.ok(match(candidate('Apple Magic Mouse USB C white','Apple','MXK53AM/A'),magic));
 assert.equal(match(candidate('Apple Magic Mouse Lightning white','Apple','MXK53AM/A'),magic),null);
});
test('converters: manual widths/models pass; electric and adjacent VIVO models fail', () => {
 const [vari,vivo]=articleCommerce['/wfh/vari-desk-converter-vs-vivo-desk-riser'].products;
 assert.ok(match(candidate('VariDesk Pro Plus 36 desk converter','Vari',''),vari));
 assert.equal(match(candidate('VariDesk Pro Plus 36 Electric desk converter','Vari',''),vari),null);
 assert.ok(match(candidate('VIVO 42 inch desk converter','VIVO','DESK-V000VL'),vivo));
 assert.equal(match(candidate('VIVO 42 inch desk converter','VIVO','DESK-V000V'),vivo),null);
});
test('microcurrent: intended Starter and standard facial BEAR pass; adjacent packages and body device fail', () => {
 const [nu,foreo]=articleCommerce['/beauty/nuface-trinity-plus-vs-foreo-bear-2-vs-myolift-qt'].products;
 assert.ok(match(candidate('NuFACE TRINITY+ Starter Kit','NuFACE',''),nu));
 for(const title of ['NuFACE Trinity Starter Kit','NuFACE TRINITY+ Complete Kit','NuFACE TRINITY+ Starter Kit replacement charger']) assert.equal(match(candidate(title,'NuFACE',''),nu),null);
 assert.ok(match(candidate('FOREO BEAR 2 Facial Toning Device','FOREO',''),foreo));
 for(const title of ['FOREO BEAR 2 go Facial Toning Device','FOREO BEAR 2 body Device','FOREO BEAR 2 eyes & lips Device','FOREO BEAR 2 charger']) assert.equal(match(candidate(title,'FOREO',''),foreo),null);
});
test('coffee station: exact pinned candidates pass; adjacent variants, import voltage and accessories fail', () => {
 const [machine,grinder,scale]=articleCommerce['/coffee/complete-small-kitchen-home-coffee-bar-setup'].products;
 function pinned(title,brand,req) {const item=candidate(title,brand,'');item.asin=req.asin;item.detailPageURL=`https://www.amazon.com/dp/${req.asin}?tag=althcu-20`;return item;}
 for(const [req,title,brand,bad] of [
  [machine,'Breville Bambino Plus Espresso Machine','Breville',['Breville Bambino BES450 Espresso Machine','Breville Bambino Plus Espresso Machine 240 V','Breville Bambino Plus replacement water tank']],
  [grinder,'Baratza Encore ESP Coffee Grinder','Baratza',['Baratza Encore ESP Pro Coffee Grinder','Baratza Encore ESP Coffee Grinder 220V','Baratza Encore ESP replacement burr']],
  [scale,'TIMEMORE Black Mirror Nano Coffee Scale','TIMEMORE',['TIMEMORE Black Mirror Mini Coffee Scale','TIMEMORE Black Mirror Nano replacement cover']]
 ]) {
  assert.ok(match(pinned(title,brand,req),req),title);
  for(const title of bad)assert.equal(match(pinned(title,brand,req),req),null,title);
 }
});
test('independent review: bare accessory nouns cannot become complete products, including pinned ASINs', () => {
 const cases=[
 ['/wfh/purple-royal-seat-cushion-vs-cushion-lab',0,'Purple Royal Seat Cushion','cover'],
 ['/wfh/purple-royal-seat-cushion-vs-cushion-lab',1,'Cushion Lab Pressure Relief Seat Cushion','cover'],
 ['/wfh/herman-miller-aeron-vs-steelcase-gesture',1,'Steelcase Gesture Chair','headrest'],
 ['/beauty/nuface-trinity-plus-vs-foreo-bear-2-vs-myolift-qt',1,'FOREO BEAR 2 Device','stand'],
 ['/wfh/ergotron-lx-vs-amazon-basics-monitor-arm',0,'Ergotron LX Desk Monitor Arm','grommet mount'],
 ['/home-kitchen/best-robot-vacuums',1,'roborock Q5 2700Pa Self Emptying Robot Vacuum','dock'],
 ['/home-kitchen/best-robot-vacuums',0,'iRobot Roomba j7 Self Emptying Robot Vacuum','base'],
 ['/coffee/complete-small-kitchen-home-coffee-bar-setup',0,'Breville Bambino Plus Espresso Machine','water tank'],
 ['/coffee/complete-small-kitchen-home-coffee-bar-setup',2,'TIMEMORE Black Mirror Nano Scale','protective silicone pad'],
 ];
 for(const [route,index,title,part] of cases){
  const req=articleCommerce[route].products[index];
  function item(t){const i=candidate(t,req.brand,req.model||'');if(req.asin){i.asin=req.asin;i.detailPageURL=`https://www.amazon.com/dp/${req.asin}?tag=althcu-20`;}return i;}
  assert.equal(match(item(`${title} ${part}`),req),null,`${title} ${part}`);
  assert.equal(match(item(`${title} ${part} only`),req),null);
  assert.ok(match(item(`${title} with ${part}`),req),`${title} with ${part}`);
 }
 for(const route of ['/coffee/best-gaggia-classic-pro-upgrades','/coffee/what-to-buy-with-your-breville-bambino-plus'])assert.deepEqual(articleCommerce[route].products[1].accessoryOnlyTitleTerms,articleCommerce['/coffee/complete-small-kitchen-home-coffee-bar-setup'].products[2].accessoryOnlyTitleTerms);
 const req=request('best-coffee-makers-under-100');assert.equal(match(candidate('Cuisinart 14 Cup Coffee Maker','Cuisinart','DCC-3200P1'),req),null);
});
