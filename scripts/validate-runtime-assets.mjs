import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Check the actual generated function trace, not just configuration. A local
// server can read the checkout even when a deployed function omits this file.
const route = 'beauty/dr-dennis-gross-vs-omnilux-contour';
const tracePath = path.resolve(`.next/server/app/${route}/page.js.nft.json`);
const assetPath = path.resolve(`app/${route}/article-source.html`);
const trace = JSON.parse(fs.readFileSync(tracePath, 'utf8'));
const packagedPaths = trace.files.map(file => path.resolve(path.dirname(tracePath), file));
assert(packagedPaths.includes(assetPath), `Runtime article missing from function trace: ${assetPath}`);
assert(fs.statSync(assetPath).size > 0, 'Runtime article asset is empty');
console.log('Runtime asset validation: LED article HTML is included in the function trace.');
