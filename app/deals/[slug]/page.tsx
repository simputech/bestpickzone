import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/lib/deals/recommend";
import guidanceData from "@/lib/deals/category-guidance.json";
import DealAgent from "@/components/deals/DealAgent";
import { withSeo } from "@/lib/seo-metadata";
const guidance = guidanceData as Record<string, (typeof guidanceData)["coffee-grinders"]>;
export const dynamicParams = false;
export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = categories.find((c) => c.slug === params.slug);
  return c
    ? withSeo(
        { title: guidance[c.slug].title, description: guidance[c.slug].description },
        `/deals/${c.slug}`,
      )
    : {};
}
export default function Page({ params }: { params: { slug: string } }) {
  const c = categories.find((c) => c.slug === params.slug);
  if (!c) notFound();
  const guide = guidance[c.slug];
  const url = `https://bestpickzone.com/deals/${c.slug}`;
  return (
    <main className="shopping-shell">
      <nav className="shopping-breadcrumb" aria-label="Breadcrumb">
        <Link href="/deals">Find a product</Link>
        <span>/</span>
        <span>{c.title}</span>
      </nav>
      <header className="shopping-hero">
        <h1>{c.heading}</h1>
        <p>{c.intro}</p>
      </header>
      <div className="shopping-layout">
        <DealAgent
          key={c.slug}
          initialCategory={{
            slug: c.slug,
            title: c.title,
            oldSlug: c.oldSlug,
            examples: c.examples,
          }}
        />
        <aside className="shopping-why">
          <span className="shopping-kicker">WHY WE CAN HELP</span>
          <h2>A reason behind every recommendation.</h2>
          <p>
            We match your preferences to a curated product shortlist, using
            manufacturer information and our buying guides.
          </p>
          <h3>For {c.title.toLowerCase()}, we consider:</h3>
          <ul>
            {c.criteria.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Each suggestion explains its fit and tradeoff. Affiliate commission
            does not decide the match.
          </p>
          <details>
            <summary>See our current shortlist</summary>
            <p>
              Product information checked October 13, 2026. This shortlist does
              not cover every product on the market.
            </p>
            <ul>
              {c.products.map((p) => (
                <li key={p.id}>
                  <a href={p.source} target="_blank" rel="noopener noreferrer">
                    {p.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </aside>
      </div>
      <article className="shopping-guide" aria-labelledby="category-guide-title">
        <header className="shopping-guide-intro">
          <span className="shopping-kicker">YOUR BUYING GUIDE</span>
          <h2 id="category-guide-title">{guide.title}</h2>
          <p className="shopping-guide-answer">{guide.answer}</p>
          <p>{guide.overview}</p>
        </header>
        <nav className="shopping-guide-nav" aria-label="Buying guide sections">
          <a href="#compare-options">Compare options</a>
          <a href="#how-to-choose">How to choose</a>
          <a href="#before-buying">Before buying</a>
          <a href="#shopping-questions">Common questions</a>
        </nav>
        <section id="compare-options">
          <h2>Which {c.title.toLowerCase()} should you consider?</h2>
          <p>These are starting recommendations by use case, not a ranking of the entire market. Check the reason and the reason to skip before choosing.</p>
          <div className="shopping-comparison">
            {c.products.map((product) => {
              const pick = guide.picks.find((p) => p.id === product.id)!;
              return (
                <section className="shopping-option" key={product.id} id={`option-${product.id}`}>
                  <p className="shopping-option-fit">{pick.fit}</p>
                  <h3>{product.name}</h3>
                  <p><strong>Why consider it:</strong> {product.reason}</p>
                  <p><strong>The tradeoff:</strong> {product.tradeoff}</p>
                  <p className="shopping-option-skip">{pick.skip}</p>
                  <a href={product.source} target="_blank" rel="noopener noreferrer">Manufacturer details for {product.name} ↗</a>
                </section>
              );
            })}
          </div>
        </section>
        <section id="how-to-choose">
          <h2>How to choose {c.title.toLowerCase()}</h2>
          <div className="shopping-guide-prose">
            {guide.sections.map((section) => <section key={section.heading}>
              <h3>{section.heading}</h3>
              <p>{section.text}</p>
            </section>)}
          </div>
        </section>
        <aside className="shopping-guide-cta" aria-label="Get a recommendation">
          <h2>Make the shortlist yours.</h2>
          <p>{guide.prompt}</p>
          <a href="#shopping-question">Ask the Deal Agent for your recommendation ↑</a>
        </aside>
        <section id="before-buying" className="shopping-guide-prose">
          <h2>Before you buy</h2>
          <ul className="shopping-checklist">{guide.checks.map((check) => <li key={check}>{check}</li>)}</ul>
          <p>Live prices, stock and price history are not checked here. If you already have an offer, <a href="https://winblackfriday.com/deal-checker">check your offer on WinBlackFriday</a>; its result depends on the information you enter.</p>
        </section>
        <section id="shopping-questions" className="shopping-guide-prose">
          <h2>Questions about {c.title.toLowerCase()}</h2>
          {guide.faqs.map((faq) => <section key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </section>)}
        </section>
        <footer className="shopping-guide-method">
          <h2>How we made this shortlist</h2>
          <p>BestPickZone’s editorial guidance matches the uses described above to manufacturer-documented features. Product sources are linked with each option and were reviewed on October 13, 2026. The recommendations are our interpretation of those features, not hands-on testing or a complete market comparison.</p>
          <p>The Deal Agent helps narrow this same curated list; it does not verify every preference or budget against live offers. Affiliate links may earn us a commission at no extra cost to you. <Link href="/disclosure">Read our affiliate disclosure</Link>.</p>
        </footer>
      </article>
      <section className="shopping-next">
        <div>
          <h2>Want the deeper comparison?</h2>
          <ul>
            {guide.links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>
                  {label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Looking for something else?</h2>
          <Link href="/deals">Explore all shopping categories →</Link>
          <p>
            <Link href="/deal-alerts">Save a product target</Link> ·{" "}
            <a href="https://winblackfriday.com/deal-checker">Check an offer</a>
          </p>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                name: guide.title,
                description: guide.description,
                url,
                dateModified: "2026-10-13",
                publisher: { "@type": "Organization", name: "BestPickZone" },
                mainEntity: {
                  "@type": "ItemList",
                  itemListOrder: "https://schema.org/ItemListUnordered",
                  numberOfItems: c.products.length,
                  itemListElement: c.products.map((product, index) => ({
                    "@type": "ListItem", position: index + 1,
                    name: product.name, url: `${url}#option-${product.id}`,
                  })),
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    name: "Find a product",
                    item: "https://bestpickzone.com/deals",
                  },
                  { name: c.title, item: url },
                ].map((v, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  ...v,
                })),
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
