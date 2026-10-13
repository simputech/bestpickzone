#!/usr/bin/env python3
"""Read-only sitemap/corpus audit. API wiring and live data are separate evidence."""
import concurrent.futures, hashlib, json, re, sys, time, urllib.request, urllib.parse, urllib.error
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path

ORIGIN = 'https://bestpickzone.com'
BASE = sys.argv[1].rstrip('/') if len(sys.argv) > 1 else ORIGIN
OUT = Path(sys.argv[2] if len(sys.argv) > 2 else 'reports/article-api-audit-2026-10-12/live-before.json')
CACHE = Path('/tmp/bpz-article-audit-html'); CACHE.mkdir(exist_ok=True)
HUBS = {'/books','/books/authors','/books/genre-fiction','/books/self-help','/books/kids-and-ya','/books/reader-picks','/mahjong'}
VOID = set('area base br col embed hr img input link meta param source track wbr'.split())
API_ROUTES = {
 '/coffee/breville-bambino-plus-vs-gaggia-classic-pro': 'ProductComparisonPage',
 '/books/authors/best-alex-michaelides-books': 'OrganicPilotProductCard',
 '/wfh/elgato-stream-deck-mk2-vs-logitech-mx-creative-console': 'OrganicPilotProductCard',
}
class NoRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self, *args): return None

class Page(HTMLParser):
 def __init__(self):
  super().__init__(); self.stack=[]; self.meta={}; self.links=[]; self.blocks=[]; self.api=[]; self.h1=''; self.text=[]; self.canonical=''
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if t=='meta': self.meta[a.get('property',a.get('name',''))]=a.get('content','')
  if t=='link' and a.get('rel')=='canonical': self.canonical=a.get('href','')
  if a.get('data-amazon-source'): self.api.append(a['data-amazon-source'])
  scope=any(x['scope'] for x in self.stack) or t in ('main','article') or bool(a.get('data-organic-pilot')) or a.get('class') == 'flex-1'
  if t not in VOID: self.stack.append({'tag':t,'attrs':a,'text':[],'scope':scope,'position':len(' '.join(self.text).split())})
 def handle_endtag(self,t):
  idx=next((i for i in range(len(self.stack)-1,-1,-1) if self.stack[i]['tag']==t),None)
  if idx is None:return
  for el in self.stack[idx:]:
   s=' '.join(' '.join(el['text']).split()); tag=el['tag']
   if tag=='h1': self.h1=s
   if el['scope'] and tag in ('p','h1','h2','h3','h4','li'): self.blocks.append({'tag':tag,'text':s})
   if tag=='a' and el['scope']:self.links.append({'href':el['attrs'].get('href',''),'text':s,'wordsBefore':el['position']})
  self.stack=self.stack[:idx]
 def handle_data(self,d):
  if any(el['tag'] in ('script','style') for el in self.stack):return
  for el in self.stack:el['text'].append(d)
  if any(el['scope'] for el in self.stack):self.text.append(d)

def get(path):
 cache = CACHE / (hashlib.sha256((BASE+path).encode()).hexdigest()+'.json')
 if '--cache' in sys.argv and cache.exists(): return json.loads(cache.read_text())
 for attempt in range(3):
  try:
   req=urllib.request.Request(BASE+path,headers={'User-Agent':'BestPickZone-EditorialAudit/1.0'})
   try: response = urllib.request.build_opener(NoRedirect).open(req,timeout=20)
   except urllib.error.HTTPError as e: response = e
   with response as r:
    result=[r.status,r.read().decode('utf-8'),r.url];cache.write_text(json.dumps(result));return result
  except Exception as e:
   if attempt==2:return 0,str(e),''
   time.sleep(1)

urls=set(); sitemaps={}
def sitemap(path):
 if path in sitemaps:return
 status,xml,_=get(path);sitemaps[path]=status
 if status!=200:raise RuntimeError(f'Sitemap failed: {path} {status}')
 locs=re.findall(r'<loc>\s*([^<]+)\s*</loc>',xml)
 if '<sitemapindex' in xml:
  for loc in locs:sitemap(urllib.parse.urlsplit(loc).path)
 else:urls.update(urllib.parse.urlsplit(loc).path for loc in locs)

def source_for(route):
 path=Path('app'+route+'/page.tsx')
 if path.exists():return str(path)
 if route.startswith('/es/'):return 'app/es/[[...slug]]/page.tsx'
 for section in ('books','coffee','wfh','beauty','deals','amazon-offers'):
  if route.startswith('/'+section+'/'):return 'app/'+section+'/[slug]/page.tsx'
 return ''

def audit(route):
 status,html,url=get(route);p=Page();p.feed(html)
 links=[]
 for link in p.links:
  u=urllib.parse.urlsplit(link['href']);host=(u.hostname or '').lower()
  if host=='amazon.com' or host.endswith('.amazon.com') or host=='amzn.to':
   links.append({**link,'tag':urllib.parse.parse_qs(u.query).get('tag',[''])[0], 'destination':'search' if u.path=='/s' else 'product' if re.search(r'/(dp|gp/product)/',u.path) else 'other'})
 text=' '.join(' '.join(p.text).split())
 article=(p.meta.get('og:type')=='article' and route not in HUBS) or route.startswith('/deals/')
 return {'route':route,'url':ORIGIN+route,'status':status,'article':article,'title':p.h1,'source':source_for(route),'apiTemplate':API_ROUTES.get(route,''),'apiCards':dict(Counter(p.api)),'amazonLinks':links,'wordCount':len(text.split()),'blocks':p.blocks,'canonical':p.canonical,'text':text}

if __name__=='__main__':
 sitemap('/sitemap.xml')
 # Include indexable built routes, so an article missing from the sitemap is not silently skipped.
 manifest=Path('.next/prerender-manifest.json')
 built=[]
 if manifest.exists():built=[r for r in json.loads(manifest.read_text())['routes'] if not re.search(r'\.[a-zA-Z0-9]+$',r) and not r.startswith('/api/')]
 candidates=urls|set(built)|set(API_ROUTES)
 rows=[]
 with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:
  for i,row in enumerate(ex.map(audit,sorted(candidates)),1):
   rows.append(row)
   if i%50==0:print(f'Checked {i}/{len(candidates)} pages',flush=True)
 for row in rows:row['inSitemap']=row['route'] in urls
 articles=[r for r in rows if r['article']]
 summary={'pages':len(rows),'sitemapURLs':len(urls),'articles':len(articles),'apiWired':sum(bool(r['apiTemplate']) for r in articles),'apiDataCards':sum(r['apiCards'].get('creators-api',0) for r in articles),'fallbackCards':sum(r['apiCards'].get('fallback',0) for r in articles),'sitemapFailures':[r['route'] for r in rows if r['inSitemap'] and r['status']!=200], 'extraRoutes':[{'route':r['route'],'status':r['status']} for r in rows if not r['inSitemap']]}
 OUT.parent.mkdir(parents=True,exist_ok=True);OUT.write_text(json.dumps({'base':BASE,'checkedAt':time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime()),'summary':summary,'sitemaps':sitemaps,'rows':rows},ensure_ascii=False,indent=2)+'\n')
 print(json.dumps(summary,indent=2))
