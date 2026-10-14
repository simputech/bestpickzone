import data from "./categories.json";
export const categories = data;
export type ShoppingCategory = (typeof data)[number];
export const findCategory = (slug: string) =>
  categories.find((c) => c.slug === slug || c.oldSlug === slug);

const normalize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9$.,\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
function rejection(term: string) {
  const phrase = normalize(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(
    `\\b(?:no|not|without|dont want|do not want|dont need|do not need|dont make|do not make|not interested in)\\s+(?:(?:any|a|an)\\s+)?${phrase}\\b`,
    "g",
  );
}
function mentioned(text: string, term: string) {
  const words = normalize(text),
    phrase = normalize(term);
  // Do not treat “not espresso” or “without dials” as positive preferences.
  return new RegExp(
    `\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
  ).test(words.replace(rejection(term), ""));
}
function detectCategory(query: string) {
  return categories
    .map((c) => ({
      c,
      score: c.terms.reduce(
        (sum, t) => sum + (mentioned(query, t) ? t.length : 0),
        0,
      ),
    }))
    .filter((x) => x.score)
    .sort((a, b) => b.score - a.score)[0]?.c;
}
function budgetFrom(messages: string[]) {
  for (const text of [...messages].reverse()) {
    const match = text.match(
      /(?:under|below|budget(?:\s+of|\s+is)?|up to|max(?:imum)?|\$)\s*\$?\s*([\d,]+(?:\.\d{1,2})?)/i,
    );
    const amount = match ? Number(match[1].replace(/,/g, "")) : NaN;
    if (Number.isFinite(amount) && amount > 0 && amount <= 100000)
      return amount;
  }
  return null;
}
export function recommend(
  query: string,
  slug?: string,
  history: string[] = [],
) {
  const category = slug ? findCategory(slug) : detectCategory(query);
  const messages = [...history, query];
  const budget = budgetFrom(messages);
  const base = {
    category: category?.slug || null,
    budget,
    livePrices: false as const,
    products: [] as Array<{
      id: string;
      name: string;
      reason: string;
      tradeoff: string;
      source: string;
      search: string;
    }>,
    suggestions: [] as string[],
    message: "",
  };
  if (!category)
    return {
      ...base,
      message:
        "Which kind of product are you looking for? Choose a category below so I can ask the right questions.",
    };
  const other = detectCategory(query);
  if (
    other &&
    other.slug !== category.slug &&
    !category.terms.some((t) => mentioned(query, t))
  )
    return {
      ...base,
      message: `That sounds like ${other.title.toLowerCase()}. Open that category to start a new recommendation.`,
      switchCategory: { slug: other.slug, title: other.title },
    };
  // A URL is not retrieved; do not imply its contents were checked.
  if (/https?:\/\//i.test(query))
    return {
      ...base,
      message:
        "I cannot read a product link here. Tell me the model name and what you need it to do, or use WinBlackFriday to check the offer details.",
      suggestions: category.examples,
    };
  if (
    category.slug === "lego-display-sets" &&
    /\b(child|kid|toddler|playset|play set)\b|\b(?:[1-9]|1[0-7])\s*(?:year|yr)/i.test(
      messages.join(" "),
    )
  )
    return {
      ...base,
      message:
        "This shortlist covers adult display sets, so I do not have a suitable child’s playset recommendation here. Use LEGO’s age guidance to choose an age-appropriate set.",
    };
  let selected: ShoppingCategory["products"][number] | undefined;
  const rejected = new Set<string>();
  // The newest explicit preference replaces earlier choices; a budget-only follow-up keeps the prior choice.
  for (const text of [...messages].reverse()) {
    for (const product of category.products) {
      if (product.terms.some((term) => rejection(term).test(normalize(text))))
        rejected.add(product.id);
    }
    const scores = category.products
      .map((p) => ({
        p,
        score: p.terms.reduce((n, t) => n + (mentioned(text, t) ? 1 : 0), 0),
      }))
      .filter((x) => x.score > 0 && !rejected.has(x.p.id))
      .sort((a, b) => b.score - a.score);
    if (scores.length) {
      selected = scores[0].p;
      break;
    }
  }
  if (!selected)
    return {
      ...base,
      message: category.question,
      suggestions: category.examples,
    };
  const priceQuestion =
    /\b(price|cheaper|cheapest|cost|deal|discount|sale|budget)\b|\$/.test(
      query.toLowerCase(),
    );
  return {
    ...base,
    message: priceQuestion
      ? "Here’s a fit to compare. I cannot confirm its current price or whether it meets your budget."
      : "This is my starting recommendation from our curated shortlist.",
    products: [
      {
        ...selected,
        search: `https://www.amazon.com/s?k=${encodeURIComponent(selected.name)}&tag=althcu-20`,
      },
    ],
    suggestions: category.examples.filter(
      (e) => !selected!.terms.some((t) => mentioned(e, t)),
    ),
  };
}
export type RecommendationResult = ReturnType<typeof recommend>;
