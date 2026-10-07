import data from "./guides.json";
export const dealGuides = data;
export type DealGuide = (typeof data)[number];
export const findGuide = (slug: string) =>
  dealGuides.find((g) => g.slug === slug);
export function matchGuides(query: string) {
  const words = query.toLowerCase().replace(/[^a-z0-9. ]/g, " ");
  return dealGuides
    .map((guide) => ({
      guide,
      score: guide.terms.reduce(
        (n, term) => n + (words.includes(term) ? term.length : 0),
        0,
      ),
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.guide);
}
export function queryBudget(query: string): number | null {
  const match = query.match(
    /(?:under|below|budget(?: of)?|up to|less than|max(?:imum)?|\$)\s*\$?\s*([\d,]+(?:\.\d{1,2})?)/i,
  );
  const amount = match ? Number(match[1].replace(/,/g, "")) : NaN;
  return Number.isFinite(amount) && amount > 0 && amount <= 100000
    ? amount
    : null;
}
export function queryIntent(query: string) {
  return /\b(wait|buy now|worth|good deal)\b/i.test(query)
    ? "buy-or-wait"
    : /\b(used|refurbished|renewed|open.box)\b/i.test(query)
      ? "condition"
      : /\b(bundle|accessor|include)/i.test(query)
        ? "bundle"
        : "compare-offers";
}
export function retailerSearches(product: string) {
  const q = encodeURIComponent(product);
  return [
    {
      name: "Amazon",
      url: `https://www.amazon.com/s?k=${q}&tag=althcu-20`,
      affiliate: true,
    },
    {
      name: "Walmart",
      url: `https://www.walmart.com/search?q=${q}`,
      affiliate: false,
    },
    {
      name: "Best Buy",
      url: `https://www.bestbuy.com/site/searchpage.jsp?st=${q}`,
      affiliate: false,
    },
  ];
}
