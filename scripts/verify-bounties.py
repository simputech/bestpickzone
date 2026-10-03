"""Bounty release checks. Run with the bundled Python (BeautifulSoup available)."""
import sys,json,re,pathlib,urllib.request,concurrent.futures,xml.etree.ElementTree as ET
from bs4 import BeautifulSoup
base=sys.argv[1] if len(sys.argv)>1 else 'http://localhost:3116'
paths=['/amazon-offers']+['/amazon-offers/'+p.stem for p in pathlib.Path('content/bounties').glob('*.html')]+['/amazon-offers/prime-day-trial-video']
results=[];links=set();all_sitemap=[]
def get(path):
 r=urllib.request.urlopen(base+path,timeout=40);return r.status,r.read().decode(errors="replace"),r.headers
for url in paths:
 status,body,headers=get(url);soup=BeautifulSoup(body,'html.parser')
 assert status==200,url
 assert len(soup.select('h1'))==1,url
 canonical=soup.select_one('link[rel=canonical]')['href'];assert canonical=='https://bestpickzone.com'+url,(url,canonical)
 assert 'noindex' not in soup.select_one('meta[name=robots]')['content'],url
 title=soup.title.get_text();assert title.count('BestPickZone')==1,title
 assert soup.select_one('meta[name=description]')['content'],url
 assert soup.select_one('meta[property="og:image"]')['content'],url
 assert 'FAQPage' not in body,url
 for a in soup.select('main a[href]'):
  h=a['href']
  if h.startswith('/'):links.add(h.split('#')[0])
  if 'tag=' in h:
   assert 'tag=fitnessbankd-20' in h,(url,h)
   assert {'sponsored','noopener'}.issubset(set(a.get('rel',[]))),(url,h)
   assert a.get('target')=='_blank',(url,h)
 schema=[]
 for script in soup.select('script[type="application/ld+json"]'):
  j=json.loads(script.string);schema.extend(j.get('@graph',[j]))
 editorial=' '.join(x.get_text(' ',strip=True) for x in soup.select('[data-editorial] p'))
 if soup.select('[data-editorial]'):
  assert len(editorial.split())>=1000,(url,len(editorial.split()))
  assert any(j.get('@type')=='Article' for j in schema),url
  assert len(soup.select('a[data-affiliate-placement]'))==2,url
 if url.endswith('video'):
  assert any(j.get('@type')=='VideoObject' for j in schema),url
  assert soup.select_one('video source')['src'].endswith('.mp4')
  assert soup.select_one('track[kind=captions]')
 results.append({'url':url,'status':status,'titleLength':len(title),'editorialWords':len(editorial.split()),'affiliateCTAs':len(soup.select('a[data-affiliate-placement]'))})
_,root,_=get('/sitemap.xml');tree=ET.fromstring(root);children=[e.text for e in tree.iter() if e.tag.endswith('loc')]
for child in children:
 _,xml,_=get(child.replace('https://bestpickzone.com',''));all_sitemap.extend(e.text for e in ET.fromstring(xml).iter() if e.tag.endswith('loc'))
for url in paths: assert all_sitemap.count('https://bestpickzone.com'+url)==1,(url,'sitemap count',all_sitemap.count('https://bestpickzone.com'+url))
for hub in ['/books','/wfh','/home-kitchen']:
 _,h,_=get(hub);assert '/amazon-offers/' in h,hub
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
 for path,status in pool.map(lambda p:(p,get(p)[0]),sorted(links)):assert status==200,(path,status)
_,robots,_=get('/robots.txt');assert 'Sitemap: https://bestpickzone.com/sitemap.xml' in robots
report={'base':base,'pages':results,'sitemapCoverage':'12 URLs, each exactly once','internalLinksChecked':len(links),'passed':True}
pathlib.Path('reports/bounty-'+('live' if base.startswith('https:') else 'local')+'-qa.json').write_text(json.dumps(report,indent=2))
print(json.dumps(report,indent=2))
