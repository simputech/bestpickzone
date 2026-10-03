const fs=require('fs'),path=require('path'),ts=require('typescript');
const sharp=require('/Users/derekconicello/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const source=ts.transpileModule(fs.readFileSync('lib/bounty-data.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
const m={exports:{}};new Function('exports','require','module',source)(m.exports,require,m);
const {bountyArticles}=m.exports;
fs.writeFileSync('work/bounty-media/articles.json',JSON.stringify(bountyArticles,null,2));
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
function wrap(s,max){const lines=[''];for(const w of s.split(' ')){if((lines.at(-1)+' '+w).trim().length>max)lines.push(w);else lines[lines.length-1]=(lines.at(-1)+' '+w).trim()}return lines}
(async()=>{for(const [idx,a] of bountyArticles.entries()){
const colors=['#0f766e','#4338ca','#9a3412'];const accent=colors[idx%3];
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#0f172a"/><circle cx="1160" cy="30" r="270" fill="${accent}" opacity=".4"/><text x="60" y="64" fill="#fcd34d" font-family="Arial" font-size="19" font-weight="700" letter-spacing="3">BESTPICKZONE / ${a.group.toUpperCase()}</text><text x="60" y="147" fill="white" font-family="Arial" font-size="48" font-weight="700">${esc(a.visualTitle)}</text><text x="60" y="195" fill="#cbd5e1" font-family="Arial" font-size="23">A practical decision in three checks</text>${a.steps.map((s,i)=>`<g transform="translate(${60+i*365},245)"><rect width="350" height="226" rx="20" fill="#f8fafc"/><circle cx="47" cy="48" r="25" fill="${accent}"/><text x="47" y="56" text-anchor="middle" font-family="Arial" font-weight="700" font-size="23" fill="white">${i+1}</text>${wrap(s,20).map((l,j)=>`<text x="25" y="${112+j*35}" font-family="Arial" font-size="27" font-weight="700" fill="#0f172a">${esc(l)}</text>`).join('')}</g>`).join('')}<path d="M64 525h28" stroke="#fcd34d" stroke-width="5"/><text x="110" y="533" font-family="Arial" font-size="22" fill="#e2e8f0">${esc(a.caution)}</text><text x="60" y="590" font-family="Arial" font-size="16" fill="#94a3b8">Original editorial graphic • No product imagery • bestpickzone.com</text></svg>`;
fs.writeFileSync(`public/media/bounties/${a.slug}.svg`,svg);await sharp(Buffer.from(svg)).png().toFile(`public/media/bounties/${a.slug}.png`);
} console.log('Created 10 original SVG and PNG graphics');})();
