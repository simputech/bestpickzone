import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash, randomUUID } from 'node:crypto';
import { scopeChanges } from './core.mjs';
import { inspectHtml, duplicateCandidates } from './quality.mjs';

const [baseSha, headSha, policySha, output] = process.argv.slice(2);
if (![baseSha, headSha, policySha].every(s => /^[a-f0-9]{40}$/.test(s || '')) || !output) throw new Error('Usage: node prepare.mjs BASE_SHA HEAD_SHA POLICY_SHA OUTPUT_DIRECTORY');
const git = (...args) => execFileSync('git', args, { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 }).trim();
if (git('rev-parse','HEAD') !== headSha) throw new Error('Checkout is not expected head');
if (git('status','--porcelain','--untracked-files=no')) throw new Error('Tracked checkout has uncommitted changes');
const walk = root => fs.existsSync(root) ? fs.readdirSync(root,{withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(path.join(root,e.name)) : [path.join(root,e.name)]) : [];
const root = '.next/server/app';
const pages = walk(root).filter(p => p.endsWith('.html') && !/\/(?:_not-found|_global-error)\.html$/.test(p))
  .filter(p => { const meta = p.replace(/\.html$/,'.meta'); return !fs.existsSync(meta) || ![301,302,303,307,308,404,410].includes(JSON.parse(fs.readFileSync(meta,'utf8')).status); })
  .map(p => ({route:'/' + path.relative(root,p).replace(/\.html$/,'').replace(/^index$/,''), html:fs.readFileSync(p,'utf8')}))
  .sort((a,b) => a.route.localeCompare(b.route));
if (!pages.length) throw new Error('No rendered pages: run npm run build first');
const inventory = pages.map(p => p.route);
const changedFiles = git('diff','--name-only','--no-renames',baseSha,headSha,'--').split('\n').filter(Boolean);
const scope = scopeChanges(changedFiles, inventory);
const manifest = JSON.parse(fs.readFileSync('.next/prerender-manifest.json','utf8'));
const appPaths = JSON.parse(fs.readFileSync('.next/server/app-paths-manifest.json','utf8'));
const unsupported = Object.keys(appPaths).filter(p => p.endsWith('/page')).map(p => p.replace(/\/page$/,'') || '/')
  .filter(p => !p.includes('[') && !p.startsWith('/_') && !inventory.includes(p));
if (scope.routes.length) scope.missing.push(...unsupported.map(p => 'unrendered:' + p));
for (const [r,v] of Object.entries(manifest.dynamicRoutes || {})) {
  if (scope.routes.length && v.fallback !== false) scope.missing.push('dynamic-fallback:' + r);
}
const corpusSha = createHash('sha256').update(JSON.stringify(pages)).digest('hex');
const context = { ...scope, version:1, reviewId:randomUUID(), baseSha, headSha, policySha, corpusSha, inventory };
const assets = walk('public').map(p => '/' + path.relative('public',p));
const inspected = pages.filter(p => scope.routes.includes(p.route)).map(p => inspectHtml(p.route,p.html,inventory,assets));
const errors = inspected.flatMap(x => x.errors);
const deterministic = { headSha, corpusSha, status:errors.length ? 'fail':'pass', errors,
  warnings:inspected.flatMap(x => x.warnings), scope,
  wordCountNotice:'Approximate HTML text counts are diagnostic only. Reviewer must count visible editorial copy excluding boilerplate, titles, buttons and schema.',
  duplicates:duplicateCandidates(pages,scope.routes) };
fs.mkdirSync(output,{recursive:true});
for (const [name,data] of Object.entries({context, deterministic, corpus:pages, changes:{changedFiles}})) {
  fs.writeFileSync(path.join(output,name + '.json'),JSON.stringify(data,null,2) + '\n');
}
console.log(JSON.stringify({ headSha, routes:scope.routes.length, policyChanged:scope.policyChanged, missing:scope.missing, errors:errors.length, warnings:deterministic.warnings.length,
  publishing:'BLOCKED: inactive pilot; output is diagnostic, not release authorization' }));
if (errors.length || scope.missing.length) process.exitCode = 1;
