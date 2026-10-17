import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';

// Check the actual generated function trace, not just configuration. A local
// server can read the checkout even when a deployed function omits this file.
const require = createRequire(import.meta.url);
const includes = require('../next.config.js').experimental.outputFileTracingIncludes;
let checked = 0;
for (const [route, files] of Object.entries(includes)) {
  const tracePath = path.resolve(`.next/server/app${route}/page.js.nft.json`);
  const trace = JSON.parse(fs.readFileSync(tracePath, 'utf8'));
  const packagedPaths = trace.files.map(file => path.resolve(path.dirname(tracePath), file));
  for (const file of files) {
    const assetPath = path.resolve(file);
    assert(packagedPaths.includes(assetPath), `Runtime article missing from function trace: ${assetPath}`);
    assert(fs.statSync(assetPath).size > 0, `Runtime article asset is empty: ${assetPath}`);
    checked++;
  }
}
assert(checked > 0, 'No runtime article assets were checked');
console.log(`Runtime asset validation: ${checked} article assets included in their function traces.`);
