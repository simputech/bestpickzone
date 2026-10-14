import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/lib/deals/recommend";
import DealAgent from "@/components/deals/DealAgent";
import { withSeo } from "@/lib/seo-metadata";
export const dynamicParams = false;
export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = categories.find((c) => c.slug === params.slug);
  return c
    ? withSeo(
        { title: `${c.title}: Find Your Best Fit`, description: c.description },
        `/deals/${c.slug}`,
      )
    : {};
}
export default function Page({ params }: { params: { slug: string } }) {
  const c = categories.find((c) => c.slug === params.slug);
  if (!c) notFound();
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
      <section className="shopping-next">
        <div>
          <h2>Want the deeper comparison?</h2>
          <ul>
            {c.related.map((href) => (
              <li key={href}>
                <Link href={href}>
                  {href.split("/").pop()?.replaceAll("-", " ")} →
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
                name: c.title,
                description: c.description,
                url,
                dateModified: "2026-10-13",
                publisher: { "@type": "Organization", name: "BestPickZone" },
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
