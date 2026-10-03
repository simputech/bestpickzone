import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
export function parseHtml(html) {
 const withoutSvg = html.replace(/<svg\b[\s\S]*?<\/svg>/gi, '');
 const markup = withoutSvg.replace(/<script\b[\s\S]*?<\/script>/gi, '');
 const decode = s => s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n));
 const attrs = s => Object.fromEntries([...s.matchAll(/([\w:-]+)=["']([^"']*)["']/g)].map(m=>[m[1].toLowerCase(),decode(m[2])]));
 const meta = {};
 for (const m of markup.matchAll(/<meta\b[^>]*>/gi)) { const a=attrs(m[0]);const k=a.name||a.property;if(k)meta[k.toLowerCase()]=a.content||''; }
 const titles = [...markup.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/gi)].map(m=>decode(m[1]).trim());
 const canonicals = [...markup.matchAll(/<link\b[^>]*>/gi)].map(m=>attrs(m[0])).filter(a=>a.rel==='canonical').map(a=>a.href);
 const schemas=[...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]);
 return { titles, canonicals, meta, schemas };
}
export function validatePages(pages, origin, brand) {
 const errors=[],warnings=[],titles=new Map(),descriptions=new Map();let checked=0;
 const norm=u=>new URL(u,origin).toString().replace(/\/$/,'');
 for(const {route,html} of pages){
  const {titles:t,canonicals:c,meta,schemas}=parseHtml(html);
  if(/noindex/i.test((meta.robots||'')+' '+(meta.googlebot||'')))continue;
  checked++;
  const fail=s=>errors.push(`${route}: ${s}`), warn=s=>warnings.push(`${route}: ${s}`);
  if(t.length!==1||!t[0])fail('Expected exactly one nonempty title');
  if((t[0]||'').length>70)fail(`Title exceeds 70 characters (${t[0].length}): ${t[0]}`);
  if(brand&&((t[0]||'').toLowerCase().split(brand.toLowerCase()).length-1)>1)fail('Duplicate site-name branding');
  if(c.length!==1)fail('Expected exactly one canonical');
  else {try{if(norm(c[0])!==norm(route))fail(`Canonical does not match route: ${c[0]}`)}catch{fail('Invalid canonical URL')}}
  const d=meta.description||'';
  if(!d)fail('Missing description');
  else if(d.length<70||d.length>170)warn(`Description length ${d.length}; review for clarity`);
  for(const key of ['og:title','og:description','og:url','og:image','twitter:card','twitter:title','twitter:description','twitter:image'])if(!meta[key])warn(`Missing ${key}`);
  for(const raw of schemas){try{JSON.parse(raw)}catch{fail('Invalid JSON-LD')}}
  for(const [value,map,label] of [[t[0],titles,'title'],[d,descriptions,'description']]){
   if(!value)continue;
   if(map.has(value)&&map.get(value)!==route)fail(`Duplicate ${label} also used by ${map.get(value)}`);
   else map.set(value,route);
  }
 }
 return {checked,errors,warnings};
}
function walk(p){return fs.readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(p,e.name)):[path.join(p,e.name)])}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const config=JSON.parse(fs.readFileSync('seo-validation.json','utf8'));
 const root='.next/server/app';
 if(!fs.existsSync(root))throw new Error('Build output is missing. Run next build first.');
 const pages=walk(root).filter(p=>p.endsWith('.html')&&!/\/(?:_not-found|_global-error)\.html$/.test(p)).filter(p=>{const meta=p.replace(/\.html$/,'.meta');return !fs.existsSync(meta)||![301,302,303,307,308,404,410].includes(JSON.parse(fs.readFileSync(meta,'utf8')).status)}).map(p=>({route:'/'+path.relative(root,p).replace(/\.html$/,'').replace(/^index$/,''),html:fs.readFileSync(p,'utf8')}));
 const result=validatePages(pages,config.origin,config.brand);
 console.log(`Metadata validation: ${result.checked} rendered indexable pages, ${result.errors.length} errors, ${result.warnings.length} warnings.`);
 for(const line of result.errors)console.error(line);
 for(const line of result.warnings)console.warn(line);
 if(!result.checked)throw new Error('No indexable pages checked.');
 if(result.errors.length)process.exitCode=1;
}
