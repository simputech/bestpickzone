const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file='docs/BACKEND_DEPLOYMENT_INVENTORY.md',text=fs.readFileSync(file,'utf8');
for(const token of ['prj_nmIr0ohVP4y08vpuYRFDi6Lgnbao','team_wFkeAj93TVooMQ1IzpbkABSJ','ewqmxrhsajdfgwnbqunw','iuhwwftdvuypmbhfpllr','20261006234356','## Rollback and recovery','## Outstanding approvals and unknowns','## Credentials and configuration locations'])assert.ok(text.includes(token),token);
for(const [,link] of text.matchAll(/\]\(([^)]+)\)/g))if(!link.startsWith('https://'))assert.ok(fs.existsSync(path.resolve(path.dirname(file),link)),link);
assert.ok(fs.readFileSync('BESTPICKZONE_PROJECT_BRIEF_JUNE_2026.md','utf8').includes('docs/BACKEND_DEPLOYMENT_INVENTORY.md'));
console.log('Inventory gate passed: required nonsecret identifiers, local links and project-brief entry point.');
