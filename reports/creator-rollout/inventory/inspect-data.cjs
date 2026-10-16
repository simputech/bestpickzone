const fs = require('fs'), path = require('path'), vm = require('vm'), { stripTypeScriptTypes } = require('node:module');
const root = process.cwd(), cache = new Map();
const {execFileSync}=require('node:child_process');
const commit=process.env.INVENTORY_COMMIT || execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
const files=execFileSync('git',['ls-tree','-r','--name-only',commit],{encoding:'utf8'}).trim().split('\n');
const sourceCache=new Map();
function readSource(f){const rel=path.relative(root,path.resolve(root,f));if(!sourceCache.has(rel))sourceCache.set(rel,execFileSync('git',['show',commit+':'+rel],{encoding:'utf8',maxBuffer:15e6}));return sourceCache.get(rel);}
function load(f) {
 f = path.resolve(root, f); if (!fs.existsSync(f)) f += fs.existsSync(f+'.ts')?'.ts':'.tsx';
 if (f.endsWith('.json')) return JSON.parse(readSource(f));
 if(cache.has(f)) return cache.get(f).exports;
 const mod={exports:{}};cache.set(f,mod);
 const exportNames = [];
 let code=stripTypeScriptTypes(readSource(f), {mode:'transform'});
 code=code.replace(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"];?/g,(_,names,spec)=>'const {'+names.replace(/\s+as\s+/g,':')+'} = require('+JSON.stringify(spec)+');');
 code=code.replace(/import\s+(\w+)\s+from\s*['"]([^'"]+)['"];?/g,(_,name,spec)=>'const '+name+' = require('+JSON.stringify(spec)+');');
 code=code.replace(/export\s+(const|let|var|function|class)\s+(\w+)/g,(_,kind,name)=>{exportNames.push(name);return kind+' '+name;});
 code=code.replace(/export\s*\{[^}]*\};?/g,'');
 code+='\nObject.assign(exports,{'+exportNames.join(',')+'});';
 const req=s=>{ if(s.startsWith('@/'))return load(path.join(root,s.slice(2)));if(s.startsWith('.'))return load(path.resolve(path.dirname(f),s)); if(['fs','node:fs','path','node:path'].includes(s))return require(s);throw Error('unexpected import '+s+' in '+f);};
 vm.runInThisContext('(function(require,module,exports){'+code+'\n})',{filename:f})(req,mod,mod.exports);return mod.exports;
}
module.exports={load,readSource,files,commit};
if(require.main===module){for(const f of ['lib/books-data.ts','lib/comparison-html-articles.ts','lib/buying-guide-data.ts','lib/spanish-site-data.ts','lib/bounty-data.ts','lib/sitemap-data.ts','lib/home-kitchen-showdowns.ts']){const d=load(f);console.log(f,Object.fromEntries(Object.entries(d).map(([k,v])=>[k,Array.isArray(v)?v.length:typeof v])));}}
