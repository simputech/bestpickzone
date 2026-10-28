const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const vm = require('node:vm');
const source = ts.transpileModule(fs.readFileSync('lib/amazon-link-labels.ts','utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
const moduleExports = {};
vm.runInNewContext(source, {exports:moduleExports, URL});
const label = moduleExports.labelAmazonSearchLinks;
test('search CTAs and contextual links are honest without changing tags or destinations', () => {
 const a='<a href="https://www.amazon.com/s?k=Dock&amp;tag=grandparentsgift-20" rel="sponsored noopener">Click Here to Buy on Amazon</a>';
 assert.equal(label(a), a.replace('Click Here to Buy on Amazon','Search Amazon for this product'));
 assert.match(label(a.replace('Click Here to Buy on Amazon','CalDigit TS4')), /CalDigit TS4.*Amazon search/);
 assert.equal(label(label(a)), label(a));
 for (const url of ['https://www.amazon.com/dp/B000TEST01?tag=althcu-20','/wfh','https://notamazon.com/s?k=Dock']) {
  const direct=`<a href="${url}">View product</a>`;
  assert.equal(label(direct),direct);
 }
});
