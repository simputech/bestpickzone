const ts=require('typescript'), fs=require('node:fs'), path=require('node:path');
module.exports=function load(file, overrides={}) {
 const full=path.resolve(file), mod={exports:{}};
 const code=ts.transpileModule(fs.readFileSync(full,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;
 new Function('require','module','exports',code)(s=>{
  if(s in overrides)return overrides[s];
  if(!s.startsWith('.'))return require(s);
  const target=path.resolve(path.dirname(full),s);
  return s.endsWith('.json')?require(target):load(target+'.ts',overrides);
 },mod,mod.exports);return mod.exports;
};
