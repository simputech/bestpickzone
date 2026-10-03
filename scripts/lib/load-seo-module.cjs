const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const cache = new Map();

// Load the small, server-only SEO module graph without adding a test runtime.
function loadSeoModule(filename) {
  filename = path.resolve(filename);
  if (cache.has(filename)) return cache.get(filename).exports;
  const module = { exports: {} };
  cache.set(filename, module);
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    fileName: filename,
  }).outputText;
  const localRequire = (specifier) => {
    if (!specifier.startsWith('.')) throw new Error(`Unexpected runtime import: ${specifier}`);
    return loadSeoModule(path.resolve(path.dirname(filename), `${specifier}.ts`));
  };
  vm.runInThisContext(`(function(require, module, exports) {${code}\n})`, { filename })(
    localRequire, module, module.exports
  );
  return module.exports;
}
module.exports = { loadSeoModule };
if (require.main === module) {
  const { localizedUrlPairs } = loadSeoModule(path.join(__dirname, '../../lib/localized-urls.ts'));
  console.log(JSON.stringify(localizedUrlPairs));
}
