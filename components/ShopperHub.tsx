import Link from 'next/link'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import ItemListJsonLd from '@/components/seo/ItemListJsonLd'

type GuideLink = { href: string; title: string }
export type ShopperHubContent = {
  path: string
  name: string
  title: string
  intro: string
  choices: Array<GuideLink & { need: string; check: string }>
  comparison: { title: string; rows: Array<{ choice: string; fit: string; tradeoff: string }> }
  checklist: string[]
  related: Array<GuideLink & { description: string }>
}
type Group = { id: string; title: string; note: string; items: GuideLink[] }

export default function ShopperHub({ content, groups, children }: {
  content: ShopperHubContent; groups: Group[]; children?: React.ReactNode
}) {
  const items = groups.flatMap(group => group.items.map(item => ({ name: item.title, path: item.href })))
  return (
    <main id="main-content" className="hub-shell">
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: content.name }]} />
      <ItemListJsonLd name={`${content.name} guides`} items={items} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'CollectionPage',
        name: content.title, description: content.intro, url: `https://bestpickzone.com${content.path}`,
      }) }} />
      <nav aria-label="Breadcrumb" className="hub-breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{content.name}</span></nav>
      <header className="hub-hero">
        <p className="hub-kicker">{content.name} buying guides</p>
        <h1>{content.title}</h1>
        <p className="hub-lead">{content.intro}</p>
        <a className="hub-button" href="#guides">Browse all {content.name} guides <span aria-hidden="true">↓</span></a>
      </header>
      <section aria-labelledby="start-heading" className="hub-section">
        <h2 id="start-heading">Start with the decision in front of you</h2>
        <div className="hub-choice-grid">
          {content.choices.map(choice => <article key={choice.href} className="hub-choice">
            <h3>{choice.need}</h3><p>{choice.check}</p>
            <Link href={choice.href}>{choice.title} <span aria-hidden="true">→</span></Link>
          </article>)}
        </div>
      </section>
      <section aria-labelledby="compare-heading" className="hub-section">
        <h2 id="compare-heading">{content.comparison.title}</h2>
        <div className="hub-table-wrap" role="region" aria-labelledby="compare-heading" tabIndex={0}>
          <table className="hub-table">
            <caption>Compare the purchase paths before choosing a model.</caption>
            <thead><tr><th scope="col">Your choice</th><th scope="col">Start here if…</th><th scope="col">Check before committing</th></tr></thead>
            <tbody>{content.comparison.rows.map(row => <tr key={row.choice}><th scope="row">{row.choice}</th><td>{row.fit}</td><td>{row.tradeoff}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
      <section className="hub-checklist hub-section" aria-labelledby="check-heading">
        <h2 id="check-heading">Before you buy</h2>
        <ul>{content.checklist.map(item => <li key={item}>{item}</li>)}</ul>
      </section>
      <section id="guides" className="hub-section" aria-labelledby="guides-heading">
        <h2 id="guides-heading">All {content.name} guides</h2>
        <nav aria-label={`${content.name} guide topics`} className="hub-topics">{groups.map(group => <a key={group.id} href={`#${group.id}`}>{group.title}</a>)}</nav>
        {groups.map(group => <section key={group.id} id={group.id} className="hub-directory-group">
          <h3>{group.title}</h3><p>{group.note}</p>
          <ul className="hub-directory">{group.items.map(item => <li key={item.href}><Link href={item.href}>{item.title} <span aria-hidden="true">→</span></Link></li>)}</ul>
        </section>)}
      </section>
      <section className="hub-section" aria-labelledby="related-heading">
        <h2 id="related-heading">For the next part of your setup</h2>
        <div className="hub-related">{content.related.map(item => <article key={item.href}><h3><Link href={item.href}>{item.title}</Link></h3><p>{item.description}</p></article>)}</div>
      </section>
      {children}
    </main>
  )
}
