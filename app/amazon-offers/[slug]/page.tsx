import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { bountyArticles, bountyBase, bountyDate, bountyHref, bountyPath } from '@/lib/bounty-data'
import { getBountyArticle } from '@/lib/bounty-content'
import BountyCTA from '@/components/article/BountyCTA'
export const dynamicParams = false
export function generateStaticParams() { return bountyArticles.map(a=>({slug:a.slug})) }
export function generateMetadata({params}:{params:{slug:string}}): Metadata {
 const a = bountyArticles.find(a=>a.slug===params.slug); if(!a) return {}
 const url=bountyBase+bountyPath(a), image=`${bountyBase}/media/bounties/${a.slug}.png`
 return {title:a.title,description:a.description,alternates:{canonical:url},robots:{index:true,follow:true},openGraph:{title:a.title,description:a.description,type:'article',url,publishedTime:bountyDate,modifiedTime:bountyDate,images:[{url:image,width:1200,height:630,alt:a.visualTitle}]},twitter:{card:'summary_large_image',title:a.title,description:a.description,images:[image]}}
}
export default function BountyPage({params}:{params:{slug:string}}) {
 const a=getBountyArticle(params.slug); if(!a) notFound()
 const url=bountyBase+bountyPath(a), introEnd=a.body.indexOf('</p>')+4
 const schema={'@context':'https://schema.org','@graph':[{'@type':'Article',headline:a.title,description:a.description,datePublished:bountyDate,dateModified:bountyDate,mainEntityOfPage:url,image:`${bountyBase}/media/bounties/${a.slug}.png`,author:{'@type':'Organization',name:'BestPickZone',url:bountyBase},publisher:{'@type':'Organization',name:'BestPickZone',url:bountyBase}}, {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:bountyBase},{'@type':'ListItem',position:2,name:'Amazon membership guides',item:bountyBase+'/amazon-offers'},{'@type':'ListItem',position:3,name:a.title,item:url}]}]}
 return <main className="mx-auto max-w-5xl px-4 py-8 md:py-12"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
 <nav aria-label="Breadcrumb" className="mb-5 text-sm text-teal-800"><Link href="/">Home</Link> / <Link href="/amazon-offers">Amazon membership guides</Link></nav>
 <article><header className="rounded-3xl bg-slate-950 p-6 text-white md:p-10"><p className="text-sm font-bold uppercase tracking-widest text-amber-300">{a.group} • Membership decision guide</p><h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">{a.title}</h1><p className="mt-5 text-sm leading-6 text-slate-200">As an Amazon Associate, BestPickZone earns from qualifying purchases. We may also earn a bounty from eligible sign-ups through our affiliate links, at no extra cost to you.</p><p className="mt-3 text-sm text-slate-300">By BestPickZone • Published October 3, 2026 • U.S. programs • Researched editorial guidance</p></header>
 <div className="comparison-html my-7 text-lg" data-editorial="intro" dangerouslySetInnerHTML={{__html:a.body.slice(0,introEnd)}}/>
 <BountyCTA article={a} placement="intro"/>
 <figure className="my-8"><Image src={`/media/bounties/${a.slug}.png`} width={1200} height={630} sizes="(max-width: 1024px) 100vw, 1024px" alt={`${a.visualTitle}: ${a.steps.join('; ')}. ${a.caution}`} className="h-auto w-full rounded-2xl" priority/><figcaption className="mt-2 text-xs text-slate-600">Original BestPickZone decision graphic. {a.caution}</figcaption></figure>
 <div data-editorial="body" className="comparison-html rounded-3xl border border-slate-200 p-5 md:p-9" dangerouslySetInnerHTML={{__html:a.body.slice(introEnd)}}/>
 <div className="my-8"><BountyCTA article={a} placement="verdict"/></div>
 <aside className="rounded-2xl bg-slate-50 p-6"><h2 className="text-xl font-bold">Compare the next relevant option</h2><ul className="mt-4 grid gap-3 sm:grid-cols-2">{bountyArticles.filter(b=>b.group===a.group&&b.slug!==a.slug).slice(0,4).map(b=><li key={b.slug}><Link className="font-semibold text-teal-800 underline" href={bountyPath(b)}>{b.title}</Link></li>)}<li><Link className="font-semibold text-teal-800 underline" href="/amazon-offers">All Amazon membership guides</Link></li></ul></aside>
 </article></main>
}
