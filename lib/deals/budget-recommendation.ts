import type { AmazonProductRequest } from '../amazon-product-match';
import type { AmazonBudgetOffer } from '../amazon-budget-offer';
import { findCategory, type RecommendationResult } from './recommend';

// Reuse the exact grinder identities already verified in the article commerce rollout.
const grinderRequests: Record<string, AmazonProductRequest> = {
  espresso: { query: 'Baratza Encore ESP coffee grinder black', asin: 'B0BW272XCV', brand: 'Baratza', expectedTitle: 'Baratza Encore ESP', requiredTitleTerms: ['Encore', 'ESP'], forbiddenTitleTerms: ['Pro'] },
  filter: { query: 'Baratza Encore standard coffee grinder black', asin: 'B007F183LK', brand: 'Baratza', expectedTitle: 'Baratza Encore coffee grinder', requiredTitleTerms: ['Encore', 'grinder'], forbiddenTitleTerms: ['ESP', 'Pro'], model: 'ENCORE' },
};
export function offerRequest(category: string, product: { id: string; name: string }): AmazonProductRequest {
  if (category === 'coffee-grinders') return grinderRequests[product.id];
  // Strict full-name/brand agreement and a single result are required for discovery.
  return { query: product.name, expectedTitle: product.name, brand: product.name.startsWith('Kindle') ? 'Amazon' : product.name.split(' ')[0] };
}
export async function verifyBudget(result: RecommendationResult, lookup: (request: AmazonProductRequest) => Promise<AmazonBudgetOffer | null>, now?: number): Promise<RecommendationResult> {
  const category = result.category ? findCategory(result.category) : undefined;
  if (!category || result.budget === null || result.status !== 'verification-unavailable' || !result.candidateIds.length) return result;
  const candidates = category.products.filter(p => result.candidateIds.includes(p.id));
  const offers = await Promise.all(candidates.map(async product => {
    try { return await lookup(offerRequest(category.slug, product)); } catch { return null; }
  }));
  const checkedNow = now ?? Date.now();
  const valid = offers.map(offer => offer && Date.parse(offer.checkedAt) <= checkedNow && Date.parse(offer.expiresAt) > checkedNow ? offer : null);
  const products = candidates.flatMap((product, i) => {
    const offer = valid[i];
    const within = offer && (result.budgetExclusive ? offer.amount < result.budget! : offer.amount <= result.budget!);
    return within ? [{ ...product, search: offer.url, offer }] : [];
  });
  if (products.length) return { ...result, products, priceCheckExpiresAt: new Date(Math.min(...products.map(p => Date.parse(p.offer.expiresAt)))).toISOString(), livePrices: true, status: 'recommendation',
    message: `These curated options have a verified Amazon item price ${result.budgetExclusive ? 'below' : 'within'} your budget. Compare the use cases below; shipping and tax may put the checkout total above your limit.`,
    suggestions: category.examples,
  };
  if (valid.every(Boolean) && valid.length) return { ...result, status: 'no-match', priceCheckExpiresAt: new Date(Math.min(...valid.map(o => Date.parse(o!.expiresAt)))).toISOString(),
    message: `None of the checked offers for our ${candidates.length} curated ${candidates.length === 1 ? 'choice is' : 'choices are'} ${result.budgetExclusive ? 'below' : 'within'} $${result.budget.toLocaleString('en-US')}. This is a limited shortlist, not a search of every product or retailer. Check retailer listings for other models, or change your budget.`,
  };
  return result;
}
