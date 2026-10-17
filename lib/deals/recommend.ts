import { readBudget, emptyBudget, type BudgetState } from "./budget";
import type { AmazonBudgetOffer } from "../amazon-budget-offer";
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
export function recommend(
  query: string,
  slug?: string,
  history: string[] = [],
  previousBudget?: BudgetState,
) {
  const category = slug ? findCategory(slug) : detectCategory([...history, query].join(" "));
  const messages = [...history, query];
  const budgetState = previousBudget ? readBudget([query], previousBudget) : readBudget(messages, emptyBudget);
  const { budget } = budgetState;
  const base = {
    category: category?.slug || null,
    ...budgetState,
    status: "clarify" as "clarify" | "recommendation" | "no-match" | "verification-unavailable" | "invalid-budget",
    candidateIds: [] as string[],
    retailerSearch: category ? `https://www.amazon.com/s?k=${encodeURIComponent(category.title)}&tag=althcu-20` : null,
    livePrices: false,
    priceCheckExpiresAt: null as string | null,
    products: [] as Array<{
      id: string;
      name: string;
      reason: string;
      tradeoff: string;
      source: string;
      search: string;
      offer?: AmazonBudgetOffer;
    }>,
    suggestions: [] as string[],
    message: "",
  };
  if (budgetState.budgetIssue)
    return { ...base, status: "invalid-budget" as const, message: budgetState.budgetIssue === "currency"
      ? "Price checks support US dollars only. Please give a USD budget, or say ‘no budget’ to compare features. I have not converted your amount."
      : "Please enter a budget between $0 and $100,000 with no more than two decimal places. I have not removed your budget constraint." };
  if (!category)
    return {
      ...base,
      message:
        "I do not have a curated match for that request. Choose a supported category, or name the type of product you need.",
      status: "no-match" as const,
    };
  const other = detectCategory(query);
  if (
    other &&
    other.slug !== category.slug &&
    !category.terms.some((t) => mentioned(query, t))
  )
    return {
      ...base,
      status: "no-match" as const,
      message: `That sounds like ${other.title.toLowerCase()}. Open that category to start a new recommendation.`,
      switchCategory: { slug: other.slug, title: other.title },
    };
  // A URL is not retrieved; do not imply its contents were checked.
  if (/https?:\/\//i.test(query))
    return {
      ...base,
      status: "no-match" as const,
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
      status: "no-match" as const,
      message:
        "This shortlist covers adult display sets, so I do not have a suitable child’s playset recommendation here. Use LEGO’s age guidance to choose an age-appropriate set.",
    };
  const grinderType = [...messages].reverse().find(text => /\b(manual|hand grinder|hand crank|blade|cordless|battery powered|electric)\b/i.test(text));
  if (category.slug === "coffee-grinders" && grinderType &&
    ["manual", "hand grinder", "hand crank", "blade", "cordless", "battery powered"].some(term => mentioned(grinderType, term)))
    return { ...base, status: "no-match" as const, message: "Our grinder shortlist covers two electric burr grinders. I do not have a verified manual, blade or cordless option here. Check retailer listings for that type, or read the category guide before choosing." };
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
  if (budget !== null) {
    const candidates = selected ? [selected] : category.products.filter(p => !rejected.has(p.id));
    return {
      ...base,
      status: budget === 0 || !candidates.length ? "no-match" as const : "verification-unavailable" as const,
      candidateIds: budget === 0 ? [] : candidates.map(p => p.id),
      message: budget === 0
        ? "I have no verified free products in this shortlist. Enter a positive budget, or check retailer listings yourself."
        : !candidates.length
          ? "None of our curated choices matches those preferences. Browse the category guide or check retailer listings for other models."
          : `I cannot verify a match ${budgetState.budgetExclusive ? "below" : "within"} $${budget.toLocaleString("en-US")} right now. No unverified product is being recommended against your budget. Check current retailer listings and the final total, including shipping and tax, or try again later.`,
    };
  }
  if (!selected)
    return {
      ...base,
      status: history.length ? "no-match" as const : "clarify" as const,
      message: history.length ? "I could not match that answer to our curated choices. Choose one of the options below, or browse the category guide for other needs." : category.question,
      suggestions: category.examples,
    };
  const priceQuestion =
    /\b(price|cheaper|cheapest|cost|deal|discount|sale|budget)\b|\$/.test(
      query.toLowerCase(),
    );
  return {
    ...base,
    status: "recommendation" as const,
    message: priceQuestion
      ? "Here’s a fit to compare. I cannot confirm its current price or whether it meets your budget."
      : "This is my starting recommendation from our curated shortlist.",
    products: [
      {
        ...selected,
        offer: undefined as AmazonBudgetOffer | undefined,
        search: `https://www.amazon.com/s?k=${encodeURIComponent(selected.name)}&tag=althcu-20`,
      },
    ],
    suggestions: category.examples.filter(
      (e) => !selected!.terms.some((t) => mentioned(e, t)),
    ),
  };
}
export type RecommendationResult = ReturnType<typeof recommend>;
