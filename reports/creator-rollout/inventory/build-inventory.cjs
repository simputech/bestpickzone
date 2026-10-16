// Read-only repository inventory. It deliberately reads the pinned git commit, not concurrent worktree edits.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const {load,readSource,files,commit}=require('./inspect-data.cjs');
const out=path.join(process.cwd(),'reports/creator-rollout/inventory');
const base='https://bestpickzone.com';
const books=load('lib/books-data.ts');
const comps=load('lib/comparison-html-articles.ts');
const guides=load('lib/buying-guide-data.ts');
const authors=load('lib/author-ranking-guides.ts');
const spanish=load('lib/spanish-site-data.ts');
const bounties=load('lib/bounty-data.ts');
const sitemap=load('lib/sitemap-data.ts');
const seoOverrides=JSON.parse(readSource('lib/seo-overrides.json'));
const redirects=JSON.parse(readSource('lib/legacy-redirects.json'));
const categoryData=JSON.parse(readSource('lib/deals/categories.json'));
const routes=new Map();
const allSitemap=[...sitemap.mainPages,...sitemap.booksPages,...sitemap.beautyPages,...sitemap.coffeePages,...sitemap.wfhPages,...spanish.getSpanishSitemapEntries()];
const sitemapMap=new Map();for(const x of allSitemap){const p=new URL(x.url).pathname;const a=sitemapMap.get(p)||[];a.push(x);sitemapMap.set(p,a);}
const strings=/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`/gs;
function scalar(s){try{if(s.startsWith('`')&&s.includes('${'))return null;return vm.runInNewContext(s,Object.create(null),{timeout:50});}catch{return null;}}
function literalProperty(source,key){const pat=new RegExp('\\b'+key+'[\"\']?\\s*(?:=|:)\\s*("(?:\\\\.|[^"\\\\])*"|\'(?:\\\\.|[^\'\\\\])*\'|`(?:\\\\.|[^`\\\\])*`)','g');return [...source.matchAll(pat)].map(m=>scalar(m[1])).filter(v=>typeof v==='string');}
function textOf(x){return typeof x==='string'?x:JSON.stringify(x);}
function clean(s){return s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&apos;|&#39;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();}
function links(source){return [...new Set((source.match(/https?:\/\/[^\s<>"'`\\]+/g)||[]).map(s=>s.replace(/&amp;/g,'&').replace(/[),;]+$/,'')))];}
function staticObjects(source){
 const tokens=source.match(/\/\*[\s\S]*?\*\/|\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|[A-Za-z_$][\w$]*|\d+(?:\.\d+)?|[^\s]/g)||[];
 const objs=[],stack=[];
 for(let i=0;i<tokens.length;i++){
  const t=tokens[i];if(t.startsWith('//')||t.startsWith('/*'))continue;
  if(t==='{'){const o={};stack.push(o);objs.push(o);continue;}
  if(t==='}'){stack.pop();continue;}
  if(!stack.length||tokens[i+1]!==':')continue;
  const key=/^["'`]/.test(t)?scalar(t):t; const val=/^["'`]/.test(tokens[i+2]||'')?scalar(tokens[i+2]):null;
  if(key&&typeof val==='string')stack.at(-1)[key]=val;
 }
 return objs;
}
function literalArrays(source){
 const result=[];
 for(const m of source.matchAll(/\bconst\s+(\w+)\s*(?::[^=\n]+)?=\s*\[/g)){
  const start=m.index+m[0].lastIndexOf('[');let depth=0,quote=null,escape=false,end=null;
  for(let i=start;i<source.length;i++){const c=source[i];if(quote){if(escape)escape=false;else if(c==='\\')escape=true;else if(c===quote)quote=null;continue;}if(c==='"'||c==="'"||c==='`'){quote=c;continue;}if(c==='[')depth++;if(c===']'&&!--depth){end=i;break;}}
  if(end){try{const arr=vm.runInNewContext('('+source.slice(start,end+1)+')',Object.create(null),{timeout:50});if(Array.isArray(arr))result.push({name:m[1],value:arr});}catch{}}
 }
 return result;
}
function candidates(source,obj){
 const result=[];
 const add=(query,title,author,asin,evidence,platform='amazon')=>{if(query||asin)result.push({title:title||null,author:author||null,query:query||null,asin:asin||null,platform,evidence,match_status:'unverified_source_candidate'});};
 function walk(v){if(!v||typeof v!=='object')return;if(Array.isArray(v)){v.forEach(walk);return;}
  const q=v.amazonSearchQuery||v.amazonQuery||v.query;
  if(q&&typeof q==='string')add(q,v.title||v.name,v.author,v.asin,'structured_content',v.affiliatePlatform||'amazon');
  else if(v.title&&v.author&&!v.canonical&&!v.metaTitle&&!v.publishedDate&&!v.published)add(`${v.title} ${v.author}`,v.title,v.author,null,'title_author_derived',v.affiliatePlatform||'amazon');
  Object.values(v).forEach(walk);
 }
 if(obj)walk(obj);
 for(const {name,value} of literalArrays(source)){
  if(!value.every(Array.isArray)){walk(value);continue;}
  const match=source.match(new RegExp('\\b'+name+'\\.map\\(\\s*\\(\\s*\\[([^\\]]+)\\]'));
  const fields=match?match[1].split(',').map(x=>x.trim()):[];
  const qi=fields.indexOf('query'),ti=fields.indexOf('title')>=0?fields.indexOf('title'):fields.indexOf('name'),ai=fields.indexOf('author');
  for(const row of value){if(qi>=0&&typeof row[qi]==='string')add(row[qi],row[ti],row[ai],null,'source_tuple_query');else if(ti>=0&&ai>=0)add(row[ti]+' '+row[ai],row[ti],row[ai],null,'source_tuple_title_author');}
 }
 const fixedAuthor=source.match(/encodeURIComponent\(`\$\{title\}\s+([^`$]+)`\)/)?.[1];
 if(fixedAuthor)for(const o of staticObjects(source))if(o.title&&(o.fit||o.label||o.skipIf||o.text||o.body))add(o.title+' '+fixedAuthor,o.title,fixedAuthor,null,'source_fixed_author_helper');
 for(const m of source.matchAll(/<BookCTA\b([^>]+)>/g)){const title=m[1].match(/\btitle=("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/),author=m[1].match(/\bauthor=("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/);if(title&&author)add(scalar(title[1])+' '+scalar(author[1]),scalar(title[1]),scalar(author[1]),null,'source_book_cta_props');}
 for(const m of source.matchAll(/\bamazonProduct\(\s*['"]([A-Z0-9]{10})['"]/g))add(null,null,null,m[1],'existing_amazon_product_helper');
 for(const o of staticObjects(source)){
  const q=o.amazonSearchQuery||o.amazonQuery||o.query||o.search;
  if(q)add(q,o.title||o.name,o.author,o.asin,'source_literal',o.affiliatePlatform||'amazon');
  else if(o.title&&o.author&&!o.canonical&&!o.metaTitle&&!o.publishedDate&&!o.published)add(`${o.title} ${o.author}`,o.title,o.author,null,'title_author_derived',o.affiliatePlatform||'amazon');
  for(const [k,v]of Object.entries(o))if(/^[A-Z0-9]{10}$/.test(v)&&(/\d/.test(v)))add(null,k,null,v,'existing_explicit_asin');
 }
 for(const u of links(source)){try{const url=new URL(u);if(/(^|\.)ebay\./.test(url.hostname)&&url.searchParams.get('_nkw'))add(url.searchParams.get('_nkw'),null,null,null,'existing_ebay_link','ebay');if(/(^|\.)amazon\./.test(url.hostname)){const q=url.searchParams.get('k');const asin=url.pathname.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})(?:[/?]|$)/)?.[1];if(q&&!q.includes('${'))add(q,null,null,asin,'existing_amazon_link');else if(asin)add(null,null,null,asin,'existing_amazon_link');} }catch{}}
 for(const m of source.matchAll(/\b(?:amazon|amz|amazonSearch|amazonSearchUrl|amazonLink)\(\s*("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g)){const q=scalar(m[1]);if(q)add(q,null,null,null,'existing_amazon_helper_call');}
 for(const q of [...literalProperty(source,'query'),...literalProperty(source,'amazonQuery'),...literalProperty(source,'amazonSearchQuery')])add(q,null,null,null,'source_query_literal');
 const seen=new Set();return result.filter(x=>{const k=x.asin?'asin:'+x.asin:'query:'+x.query; if(seen.has(k))return false;seen.add(k);return true;});
}
function dateEvidence(source,obj){const result=[];function add(field,value,location){if(value)result.push({field,value,source:location});}
 for(const key of ['publishedDate','updatedDate','published','verified','lastVerified','date','publishedTime','modifiedTime','datePublished','dateModified']){if(obj&&obj[key])add(key,obj[key],'content_record');for(const v of literalProperty(source,key))add(key,v,'source_literal');}
 return result.filter((x,i,a)=>a.findIndex(y=>y.field===x.field&&y.value===x.value)===i);
}
function classify(p){if(p==='/privacy'||p==='/disclosure')return 'legal';if(p==='/deal-agent'||p.startsWith('/deal-alerts'))return 'deal_tool';if(p==='/deals'||p.startsWith('/deals/'))return 'deal_discovery_hub';if(p==='/'||p==='/es'||p.split('/').filter(Boolean).length===1||/^\/books\/(authors|genre-fiction|self-help|kids-and-ya|reader-picks)$/.test(p)||/^\/es\/[^/]+$/.test(p))return 'navigation_hub';return 'article';}
function add(p,sourceFile,kind,obj=null,extra={}){const existing=routes.get(p);routes.set(p,{path:p,url:base+p,language:p.startsWith('/es/')?'es':'en',section:p.split('/')[1]||'home',content_type:classify(p),route_kind:kind,page_source:sourceFile,record:obj,...extra,...(existing?{shadowed_dynamic_sources:[...existing.shadowed_dynamic_sources||[],existing.page_source]}:{})});}
for(const a of books.articlesData)add(books.getBookPath(a.slug),'app/books/[slug]/page.tsx','dynamic-book',a,{data_source:files.find(f=>/^lib\/books-data-part\d\.ts$/.test(f)&&readSource(f).includes(`slug: "${a.slug}"`))||'lib/books-data-part*.ts',data_key:a.slug,requested_dynamic_path:`/books/${a.slug}`});
for(const a of comps.allHtmlComparisonArticles)add(`/${a.silo}/${a.slug}`,`app/${a.silo}/[slug]/page.tsx`,'dynamic-comparison',a,{data_source:'lib/comparison-html-articles.ts',data_key:a.slug});
for(const a of spanish.spanishArticles)add(`/es/${a.section}/${a.slug}`,'app/es/[[...slug]]/page.tsx','dynamic-spanish',a,{data_source:'lib/spanish-site-data.ts',data_key:a.section+'/'+a.slug,english_path:a.englishPath});
for(const a of bounties.bountyArticles)add('/amazon-offers/'+a.slug,'app/amazon-offers/[slug]/page.tsx','dynamic-amazon-service',a,{data_source:'content/bounties/'+a.slug+'.html',data_key:a.slug});
for(const a of categoryData)add('/deals/'+a.slug,'app/deals/[slug]/page.tsx','dynamic-deal-hub',a,{data_source:'lib/deals/categories.json',data_key:a.slug});
add('/es','app/es/[[...slug]]/page.tsx','dynamic-spanish-hub');for(const a of spanish.spanishSections)add('/es/'+a.slug,'app/es/[[...slug]]/page.tsx','dynamic-spanish-hub',a);
for(const f of files.filter(f=>/^app\/.+\/page\.tsx$/.test(f)&&!f.includes('[')))add('/'+f.slice(4,-9),f,'standalone');add('/','app/page.tsx','standalone');
const sourceFor=(f)=>files.includes(f)?readSource(f):'';
for(const r of routes.values()){
 let source=sourceFor(r.page_source),record=r.record;
 const author=authors.authorRankingGuides.find(x=>x.path===r.path),guide=guides.buyingGuides.find(x=>`/${x.silo}/${x.slug}`===r.path);
 if(author){record=JSON.parse(sourceFor('content/author-rankings/'+r.path.split('/').pop()+'.json'));r.data_source='content/author-rankings/'+r.path.split('/').pop()+'.json';r.data_key=r.path.split('/').pop();r.renderer='AuthorRankingArticlePage';}
 else if(guide){record=guide;r.data_source='content/buying-guides/'+guide.slug+'.html';r.data_key=guide.slug;r.renderer='ResearchedBuyingGuide';source+='\n'+sourceFor(r.data_source);}
 else if(r.route_kind==='dynamic-comparison'){source=JSON.stringify(record);r.renderer='HtmlComparisonArticlePage';}
 else if(r.route_kind==='dynamic-book'){source=JSON.stringify(record);r.renderer='DynamicBookArticlePage';}
 else if(r.route_kind==='dynamic-spanish'){record={...record,recommendations:spanish.getSpanishArticleRecommendations(record)};source=JSON.stringify(record);r.renderer='SpanishArticlePage';}
 else if(r.route_kind==='dynamic-amazon-service'){source=JSON.stringify(record)+'\n'+sourceFor(r.data_source);r.renderer='AmazonServiceArticlePage';}
 else if(source.includes('loadRawHtmlArticle')){r.data_source=literalProperty(source,'relativeSourcePath')[0]||source.match(/loadRawHtmlArticle\(\s*['"]([^'"]+)['"]/)?.[1];source+='\n'+sourceFor(r.data_source);r.renderer='RawHtmlArticle';}
 else if(source.includes('ProductComparisonPage'))r.renderer='ProductComparisonPage';
 else if(source.includes('CommerceShowdownArticlePage')){r.renderer='CommerceShowdownArticlePage';record=load('lib/home-kitchen-showdowns.ts').avocadoShowdownArticle;r.data_source='lib/home-kitchen-showdowns.ts';source+='\n'+JSON.stringify(record);}
 else if(r.path==='/amazon-offers/prime-day-trial-video'){r.renderer='AmazonServiceVideoPage';r.data_source='lib/bounty-video.ts';source+='\n'+sourceFor(r.data_source);}
 else r.renderer=r.content_type==='article'?'StandaloneJsxArticlePage':'NonArticlePage';
 const page=sourceFor(r.page_source);
 const siblingHtml=r.page_source.replace(/page\.tsx$/, 'article-source.html');
 if(files.includes(siblingHtml)&&!source.includes(sourceFor(siblingHtml))){source+='\n'+sourceFor(siblingHtml);r.data_source=siblingHtml;if(r.renderer==='StandaloneJsxArticlePage')r.renderer='StandaloneHtmlArticlePage';}
 let coverage='none',mechanism=null;
 if(page.includes("from '@/lib/amazon-creators-api'")){coverage='direct';mechanism='direct-module-call';}
 else if(page.includes('<AmazonAuthorRankingArticlePage')){coverage='indirect';mechanism='AmazonAuthorRankingArticlePage → getAmazonBooks';}
 else if(page.includes('<ProductComparisonPage')){coverage='indirect';mechanism='ProductComparisonPage → searchAmazonProduct';}
 else if(page.includes('<OrganicPilotProductCard')){coverage='indirect-partial';mechanism='OrganicPilotProductCard → searchAmazonProduct';}
 const metadataSource=page.slice(Math.max(0,page.indexOf('export const metadata')));
 r.title=record?.title||source.match(/<title>([\s\S]*?)<\/title>/i)?.[1]||scalar(page.match(/const\s+title\s*=\s*("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/)?.[1]||'')||literalProperty(metadataSource,'title')[0]||clean(source.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]||'')||r.path.split('/').pop();
 r.title=clean(r.title);
 r.seo_title_override=seoOverrides[r.path]?.title||null;
 r.creator_api={coverage,mechanism,runtime_verified:false,scope:coverage==='indirect-partial'?'selected supplemental cards only':coverage==='none'?'no API invocation in active renderer':'renderer has API-backed product cards; successful API response not established by source inspection'};
 r.product_candidates=candidates(source,record);
 if(author){r.product_candidates=record.books.map(b=>({title:b.title,author:record.author,query:b.title+' '+record.author,asin:r.product_candidates.find(c=>c.title===b.title&&c.asin)?.asin||null,platform:'amazon',evidence:'author_ranking_book_title_and_existing_edition_if_present',match_status:'unverified_source_candidate'}));}
 r.date_evidence=dateEvidence(source+'\n'+page,record);
 r.date_evidence_known=r.date_evidence.length>0;
 if(guide)r.date_evidence.push({field:'effective-guide-date',value:guide.date||guides.guideDate,source:'lib/buying-guide-data.ts'});
 if(r.path.startsWith('/amazon-offers/'))r.date_evidence.push({field:'effective-service-date',value:bounties.bountyDate,source:'lib/bounty-data.ts'});
 const entries=sitemapMap.get(r.path)||[];
 r.sitemap={included:entries.length>0,duplicate_entry_count:Math.max(0,entries.length-1),source_dates:[...new Set(entries.map(e=>e.lastModified))],rendered_lastmod:entries.reduce((a,e)=>e.lastModified>a?e.lastModified:a,'')||null};
 if(r.sitemap.rendered_lastmod===sitemap.contentRefreshDate){r.sitemap.rendered_lastmod=null;r.sitemap.note='Historical sitewide fallback 2026-07-01 is deliberately omitted in rendered XML; not evidence of page-level refresh.';}
 const urlList=links(source),tags=[...new Set(urlList.flatMap(u=>{try{return [new URL(u).searchParams.get('tag')].filter(v=>v&&/^[a-z0-9-]+$/i.test(v))}catch{return[]}}))];
 const sourceTags=[...source.matchAll(/['"]([a-z][a-z0-9-]+-20)['"]/gi)].map(m=>m[1]).filter(t=>t.length<50);for(const t of sourceTags)if(!tags.includes(t))tags.push(t);
 const hasEbay=!!(record?.affiliatePlatform==='ebay'||/ebay\.com|rover\.ebay\.com|ebay\.us/.test(source)||r.path.includes('-ebay'));
 const hasAmazon=!!(/amazon\.(?:com|co\.)|amazonSearchQuery|amazonQuery/.test(source)||r.product_candidates.some(x=>x.platform==='amazon')||page.includes('BookCTA')||author||guide);
 if((hasAmazon||coverage!=='none')&&!tags.length&&!r.path.startsWith('/amazon-offers/'))tags.push('althcu-20');
 if(r.path.startsWith('/amazon-offers/'))tags.push(bounties.bountyTag);
 r.affiliate={platforms:[hasAmazon?'amazon':null,hasEbay?'ebay':null].filter(Boolean),amazon_tags:[...new Set(tags)],tag_resolution:r.path.startsWith('/amazon-offers/')?'bountyTag=fitnessbankd-20':coverage!=='none'?'API: AMAZON_ASSOCIATE_TAG → NEXT_PUBLIC_AMAZON_TRACKING_ID → althcu-20; static fallback may hardcode althcu-20':'source literal or shared BookCTA/renderer fallback',ebay_campaign_ids:[...new Set(urlList.flatMap(u=>{try{return [new URL(u).searchParams.get('campid')].filter(Boolean)}catch{return[]}}))],external_commerce_links:urlList.filter(u=>/amazon\.|ebay\./.test(u))};
 const concept=['/mahjong/how-to-choose-a-mahjong-set','/mahjong/mahjong-set-vs-mahjong-card','/beauty/vitamin-c-vs-niacinamide','/beauty/retinol-vs-bakuchiol-for-sensitive-skin','/beauty/salicylic-acid-vs-benzoyl-peroxide'];
 if(r.content_type!=='article')r.creator_disposition={type:'excluded-non-article',reason:r.content_type};
 else if(r.path.startsWith('/amazon-offers/'))r.creator_disposition={type:'exception-amazon-service',reason:'Membership, trial, business-account, or gift-program intent; keep the existing bounty CTA and do not substitute unrelated retail product cards.'};
 else if(hasEbay&&!hasAmazon||r.path.includes('-ebay'))r.creator_disposition={type:'exception-ebay',reason:'Used, vintage, refurbished or eBay-specific intent. Preserve eBay listings and tracking; add Amazon only if editorially relevant, not to meet API coverage.'};
 else if(r.path==='/mahjong/best-mahjong-cards')r.creator_disposition={type:'exception-official-source',reason:'Primary recommendations are official current-year NMJL standard/large-print cards bought directly from the League. Preserve those official links; Creator API may support only the optional accompanying set, not replace the official card.'};
 else if(concept.includes(r.path))r.creator_disposition={type:'review-informational-intent',reason:'Educational/rules-selection or skincare-ingredient intent. Product API cards are optional only where a concrete recommended product improves the decision; no monetization requirement.'};
 else if(!hasAmazon&&!r.product_candidates.length)r.creator_disposition={type:'review-no-product-candidate',reason:'No source-grounded retail product candidate extracted; review intent before adding product cards.'};
 else r.creator_disposition={type:'eligible-product-review',reason:r.language==='es'?'Match the existing Spanish-language recommendation and exact edition/marketplace; never replace it with an English edition by default.':'Use the existing editorial recommendations, verify exact product/edition fit, and retain safe non-price fallback if API data is unavailable.'};
 r.review_flags=[r.language==='es'?'preserve_spanish_language_and_edition':null,(/melasma|hyperpigmentation|retinol|bakuchiol|salicylic|benzoyl|niacinamide|sciatica|acne|anti-aging|medical|mental.health/i.test(r.title+' '+r.path))?'health_claims_need_current_primary_sources':null,/2026|2025/.test(r.title+' '+r.path)?'year_sensitive_content':null,r.creator_disposition.type==='exception-ebay'?'preserve_used_vintage_or_refurbished_intent':null].filter(Boolean);
 r.legacy_redirect_sources=Object.entries(redirects).filter(([a,b])=>b===r.path).map(([a])=>a);
 if(redirects[r.path])r.redirect_target=redirects[r.path];
 r.source_snapshot_commit=commit;delete r.record;
}
const articles=[...routes.values()].filter(r=>r.content_type==='article'&&!r.redirect_target).sort((a,b)=>a.path.localeCompare(b.path));
const excluded=[...routes.values()].filter(r=>r.content_type!=='article'||r.redirect_target).sort((a,b)=>a.path.localeCompare(b.path));
function counts(a,key){return a.reduce((o,v)=>{const k=key(v);o[k]=(o[k]||0)+1;return o;},{});}
const first20=[...authors.authorRankingGuides.map(a=>a.path),...guides.buyingGuides.slice(0,9).map(g=>`/${g.silo}/${g.slug}`),'/books/authors/best-alex-michaelides-books'];
const remainingGuides=guides.buyingGuides.slice(9).map(g=>`/${g.silo}/${g.slug}`);
function priority(a){if(a.path==='/wfh/best-monitor-arms-for-shallow-desks')return -1;if(remainingGuides.includes(a.path))return 0;if(a.route_kind==='dynamic-comparison'&&a.section==='coffee')return 1;if(a.creator_api.coverage!=='none')return 2;if(['dynamic-comparison','CommerceShowdownArticlePage','RawHtmlArticle','ProductComparisonPage'].includes(a.route_kind)||['CommerceShowdownArticlePage','RawHtmlArticle','ProductComparisonPage'].includes(a.renderer))return 3;if(a.section!=='books'&&a.language==='en'&&a.creator_disposition.type==='eligible-product-review')return 4;if(a.section==='books'&&a.route_kind==='standalone')return 5;if(a.route_kind==='dynamic-book')return 6;if(a.language==='es')return 7;return 8;}
const ordered=[...first20.map(p=>articles.find(a=>a.path===p)),...articles.filter(a=>!first20.includes(a.path)).sort((a,b)=>priority(a)-priority(b)||a.path.localeCompare(b.path))];
if(ordered.some(x=>!x)||new Set(ordered.map(x=>x.path)).size!==articles.length)throw Error('Queue completeness or uniqueness failed');
const batches=[];for(let i=0;i<ordered.length;i+=20)batches.push({batch:i/20+1,reviewed_page_target:Math.min(20,ordered.length-i),status:'pending',publish_gate:'Publish after editorial, identity, technical and runtime checks; verify production before the next batch.',pages:ordered.slice(i,i+20).map(a=>({path:a.path,url:a.url,title:a.title,renderer:a.renderer,page_source:a.page_source,data_source:a.data_source||null,baseline_creator_coverage:a.creator_api.coverage,disposition:a.creator_disposition.type,review_status:'pending',refresh_scope:null,sitemap_update_required:false,notes:a.creator_disposition.reason}))});
const summary={canonical_article_count:articles.length,non_article_route_count:excluded.length,by_language:counts(articles,a=>a.language),by_section:counts(articles,a=>a.section),by_renderer:counts(articles,a=>a.renderer),by_route_kind:counts(articles,a=>a.route_kind),creator_coverage:counts(articles,a=>a.creator_api.coverage),by_disposition:counts(articles,a=>a.creator_disposition.type),non_article_by_type:counts(excluded,a=>a.content_type),sitemap_missing_articles:articles.filter(a=>!a.sitemap.included).map(a=>a.path),sitemap_paths_missing_route:[...sitemapMap.keys()].filter(p=>!routes.has(p)),article_paths_with_duplicate_sitemap_entries:articles.filter(a=>a.sitemap.duplicate_entry_count).map(a=>a.path),batch_count:batches.length,last_batch_size:batches.at(-1).pages.length};
const meta={generated_at:new Date().toISOString(),source_snapshot_commit:commit,base_url:base,method:'Enumerated all concrete app page routes plus all exported dynamic book, comparison, Spanish, bounty and deal category records. Applied standalone renderer precedence, getBookPath migrations and middleware redirect exclusions. Cross-checked independently against all six sitemap data groups. Coverage is source-level wiring, not a claim of runtime API success.',scope:'All canonical editorial articles and service/video explainers are included. Navigation/category hubs, legal pages and deal tools/category discovery pages are separately inventoried and excluded from the article rollout.',candidate_warning:'Queries and ASINs are source-grounded candidates, not newly verified catalog matches. Existing ASINs still require exact edition/product and runtime revalidation.',date_policy:'Only genuine material content refreshes justify changed dateModified/lastmod. API wiring alone and baseline historical fallback dates are not evidence of a substantial refresh.',summary};
fs.writeFileSync(path.join(out,'canonical-article-inventory.json'),JSON.stringify({...meta,articles,excluded_routes:excluded},null,2)+'\n');
const queuePath=path.join(out,'rollout-queue.json');
// Preserve review/publication progress when regenerating the source inventory.
if(fs.existsSync(queuePath)){
 const previous=JSON.parse(fs.readFileSync(queuePath,'utf8'));
 const oldPages=new Map((previous.batches||[]).flatMap(b=>b.pages.map(p=>[p.path,p])));
 const progressFields=['review_status','refresh_scope','sitemap_update_required','reviewed_at','review_evidence','publication_status','published_at','deployment_url','status_notes'];
 for(const batch of batches){
  const oldBatch=(previous.batches||[]).find(b=>b.pages.map(p=>p.path).join('|')===batch.pages.map(p=>p.path).join('|'));
  if(oldBatch)for(const field of ['status','completed_at','published_at','deployment_url'])if(oldBatch[field]!==undefined)batch[field]=oldBatch[field];
  for(const page of batch.pages){const old=oldPages.get(page.path);if(old)for(const field of progressFields)if(old[field]!==undefined)page[field]=old[field];}
 }
}
fs.writeFileSync(queuePath,JSON.stringify({...meta,batches},null,2)+'\n');
console.log(JSON.stringify(summary,null,2));
