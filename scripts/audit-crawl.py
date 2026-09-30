#!/usr/bin/env python3
"""Crawl all sitemap URLs and reachable internal links; retain evidence for remediation."""
import concurrent.futures, json, sys, time, re, urllib.request, urllib.error, urllib.parse, urllib.robotparser, xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
BASE=sys.argv[1].rstrip('/') if len(sys.argv)>1 else 'https://bestpickzone.com'
OUT=Path(sys.argv[2] if len(sys.argv)>2 else 'reports/crawl-health/live-before.json')
CANON='https://bestpickzone.com'
class NoRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,*a): return None
class HTML(HTMLParser):
 def __init__(self): super().__init__(); self.links=[]; self.canon=[]; self.robots=[]; self.assets=[]; self.title=''; self.in_title=False
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if t=='a' and a.get('href'): self.links.append(a['href'])
  if t=='link' and a.get('rel')=='canonical': self.canon.append(a.get('href',''))
  if t=='meta' and a.get('name','').lower() in ['robots','googlebot']: self.robots.append(a.get('content',''))
  if t=='title': self.in_title=True
  if t in ['img','script'] and a.get('src'): self.assets.append(a['src'])
  if t=='link' and a.get('rel') in ['stylesheet','icon','apple-touch-icon']: self.assets.append(a.get('href',''))
 def handle_endtag(self,t):
  if t=='title': self.in_title=False
 def handle_data(self,d):
  if self.in_title: self.title+=d

def get(url):
 target=BASE+url[len(CANON):] if url.startswith(CANON) else url
 target=urllib.parse.quote(target,safe=":/?=&%+@,;!$'()*[]")
 for attempt in range(3):
  try:
   req=urllib.request.Request(target,headers={'User-Agent':'BestPickZone-CrawlHealthAudit/1.0','Accept':'text/html,application/xml,*/*'})
   try: res=urllib.request.build_opener(NoRedirect).open(req,timeout=25)
   except urllib.error.HTTPError as e: res=e
   b=res.read().decode('utf-8','replace'); h=dict(res.headers); status=res.code
   if status>=500 and attempt<2: time.sleep(1); continue
   row={'url':url,'status':status,'location':res.headers.get('Location'),'xRobots':res.headers.get('X-Robots-Tag',''),'contentType':res.headers.get('Content-Type','')}
   if 'text/html' in row['contentType']:
    p=HTML();p.feed(b);row.update(links=p.links,canonicals=p.canon,robots=p.robots,title=p.title,assets=p.assets)
   return row,b
  except Exception as e:
   if attempt==2:return {'url':url,'status':0,'error':str(e)},''

sitemaps={};entries=[]
def sitemap(url):
 if url in sitemaps:return
 row,b=get(url);sitemaps[url]=row
 try: root=ET.fromstring(b)
 except Exception:return
 locs=[e.text for e in root.iter() if e.tag.endswith('}loc')]
 if root.tag.endswith('sitemapindex'):
  for u in locs:sitemap(u)
 else:entries.extend(locs)
sitemap(CANON+'/sitemap.xml')
robotrow,robots=get(CANON+'/robots.txt');rp=urllib.robotparser.RobotFileParser();rp.parse(robots.splitlines())
seeds=set(entries)|{CANON+'/'}
gsc=Path('reports/crawl-health-gsc-before.json')
if gsc.exists(): seeds.update(x['page'] for x in json.loads(gsc.read_text()).get('pages',[]))
extra=Path('reports/crawl-health/extra-seeds.json')
if extra.exists(): seeds.update(json.loads(extra.read_text()))
rows={}; sources={}; todo=seeds
while todo:
 batch=sorted(todo-set(rows));todo=set()
 if not batch:break
 with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:
  for row,b in ex.map(get,batch):
   u=row['url'];rows[u]=row; row['robotsAllowed']=rp.can_fetch('Googlebot',u)
   targets=row.get('links',[])+row.get('canonicals',[])+([row['location']] if row.get('location') else [])
   for raw in targets:
    dest=urllib.parse.urljoin(u,raw); dest=urllib.parse.urldefrag(dest)[0];p=urllib.parse.urlparse(dest)
    if p.hostname not in ['bestpickzone.com','www.bestpickzone.com'] or p.scheme not in ['https','http']:continue
    if raw in row.get('links',[]) and row['status']==200:sources.setdefault(dest,[]).append(u)
    if not re.search(r'\.(jpg|png|webp|svg|ico|pdf|jpeg|gif|js|css|xml|txt)$',p.path,re.I) and dest not in rows:todo.add(dest)
 print('Crawled',len(rows),'queued',len(todo),flush=True)
 if len(rows)>3000:raise RuntimeError('Unexpectedly large crawl; inspect generated URLs')
valid=set(u for u,r in rows.items() if r['status']==200)
reachable={CANON+'/'};changed=True
while changed:
 changed=False
 for u in valid-reachable:
  if any(s in reachable for s in sources.get(u,[])):reachable.add(u);changed=True
problems=[]
for u in entries:
 r=rows[u]; reasons=[]
 if r['status']!=200:reasons.append('status '+str(r['status']))
 if [c.rstrip('/') for c in r.get('canonicals',[])]!=[u.rstrip('/')]:reasons.append('canonical mismatch')
 if 'noindex' in ' '.join(r.get('robots',[])+[r.get('xRobots','')]).lower():reasons.append('noindex')
 if not r['robotsAllowed']:reasons.append('robots blocked')
 if not u.startswith(CANON+'/') or urllib.parse.urlparse(u).query:reasons.append('noncanonical URL')
 if reasons:problems.append({'url':u,'reasons':reasons})
summary={'sitemapEntries':len(entries),'uniqueSitemapURLs':len(set(entries)),'sitemapProblems':problems,'statusCounts':{str(s):sum(r['status']==s for r in rows.values()) for s in sorted(set(r['status'] for r in rows.values()))},'brokenInternalURLs':[u for u in sources if rows.get(u,{}).get('status')==404],'redirectingInternalURLs':[u for u in sources if 300<=rows.get(u,{}).get('status',0)<400],'orphans':[u for u in entries if u in valid and u not in reachable],'missingFromSitemap':[u for u in valid if u not in entries and rows[u].get('canonicals')==[u] and 'noindex' not in ' '.join(rows[u].get('robots',[])).lower()]}
OUT.parent.mkdir(parents=True,exist_ok=True);OUT.write_text(json.dumps({'base':BASE,'timestamp':time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime()),'summary':summary,'sitemaps':sitemaps,'sitemapURLs':entries,'robots':robots,'rows':rows,'sources':sources},indent=2)); print(json.dumps(summary,indent=2))
if '--check' in sys.argv:
 failures = bool(problems or summary['brokenInternalURLs'] or summary['redirectingInternalURLs'] or summary['orphans'] or len(entries) != len(set(entries)) or any(r['status'] == 0 or r['status'] >= 500 for r in rows.values()))
 sys.exit(1 if failures else 0)
