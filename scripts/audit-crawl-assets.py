import concurrent.futures,json,urllib.request,urllib.error,urllib.parse,sys
from pathlib import Path
base=sys.argv[1];x=json.load(open(sys.argv[2]));assets={}
for u,r in x['rows'].items():
 if r['status']!=200:continue
 for raw in r.get('assets',[]):
  a=urllib.parse.urljoin(u,raw)
  if urllib.parse.urlparse(a).hostname=='bestpickzone.com':assets.setdefault(a,set()).add(u)
def fetch(u):
 target=base+u[len('https://bestpickzone.com'):]
 try:
  with urllib.request.urlopen(target,timeout=30) as r:return {'url':u,'status':r.code,'finalURL':r.url}
 except urllib.error.HTTPError as e:return {'url':u,'status':e.code}
 except Exception as e:return {'url':u,'status':0,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:rows=list(ex.map(fetch,assets))
bad=[{**r,'sources':sorted(assets[r['url']])} for r in rows if r['status']!=200];out={'total':len(rows),'failures':bad,'rows':rows};Path(sys.argv[3]).write_text(json.dumps(out,indent=2));print('Assets',len(rows),'failures',bad)
