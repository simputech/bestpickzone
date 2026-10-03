import fs from 'node:fs';
import net from 'node:net';
import {spawn} from 'node:child_process';
import {createRequire} from 'node:module';
import {setTimeout as delay} from 'node:timers/promises';
import {parseHtml,validatePages} from './validate-metadata.mjs';
const require=createRequire(import.meta.url);
const config=JSON.parse(fs.readFileSync('seo-validation.json','utf8'));
const socket=net.createServer();await new Promise(resolve=>socket.listen(0,'127.0.0.1',resolve));const port=socket.address().port;await new Promise(resolve=>socket.close(resolve));
const local=`http://127.0.0.1:${port}`;
const server=spawn(process.execPath,[require.resolve('next/dist/bin/next'),'start','--hostname','127.0.0.1','--port',String(port)],{stdio:['ignore','pipe','pipe'],env:{...process.env,NODE_ENV:'production'}});
let logs='';server.stdout.on('data',d=>logs+=d);server.stderr.on('data',d=>logs+=d);
const errors=[],pages=[],sitemaps=new Set(),urls=new Set();
async function request(path){return fetch(local+path,{redirect:'manual',signal:AbortSignal.timeout(30000)})}
try{
 let ready=false;for(let i=0;i<100;i++){try{const r=await request('/robots.txt');if(r.status<500){ready=true;break}}catch{}if(server.exitCode!==null)break;await delay(200)}
 if(!ready)throw new Error('Local production server could not start for metadata validation.');
 async function sitemap(url){
  const path=new URL(url,config.origin).pathname;if(sitemaps.has(path))return;sitemaps.add(path);
  const r=await request(path);if(r.status!==200){errors.push(`${path}: sitemap HTTP ${r.status}`);return}
  const xml=await r.text();const locs=[...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m=>m[1].replace(/&amp;/g,'&'));
  if(xml.includes('<sitemapindex'))for(const loc of locs)await sitemap(loc);else for(const loc of locs){const u=new URL(loc);if(u.origin!==config.origin)errors.push(`Off-origin sitemap URL: ${loc}`);else urls.add(u.pathname+u.search)}
 }
 await sitemap('/sitemap.xml');
 if(!urls.size)errors.push('No sitemap URLs were checked.');
 const pending=[...urls];let cursor=0;
 await Promise.all(Array.from({length:4},async()=>{while(cursor<pending.length){const route=pending[cursor++];try{const r=await request(route);const html=await r.text();if(r.status!==200){errors.push(`${route}: sitemap URL HTTP ${r.status}`);continue}const p=parseHtml(html);if(/noindex/i.test((p.meta.robots||'')+' '+(p.meta.googlebot||'')+' '+(r.headers.get('x-robots-tag')||'')))errors.push(`${route}: noindex URL included in sitemap`);else pages.push({route,html})}catch(e){errors.push(`${route}: fetch failed: ${e.message}`)}}}));
 const result=validatePages(pages,config.origin,config.brand);errors.push(...result.errors);
 console.log(`Indexability validation: ${urls.size} sitemap URLs, ${result.checked} rendered indexable pages, ${errors.length} errors, ${result.warnings.length} warnings.`);
 for(const e of errors)console.error(e);for(const w of result.warnings)console.warn(w);
 if(errors.length)process.exitCode=1;
}finally{server.kill('SIGTERM');await Promise.race([new Promise(resolve=>server.once('exit',resolve)),delay(3000)]);if(server.exitCode===null)server.kill('SIGKILL')}
