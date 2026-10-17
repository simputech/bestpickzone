import { selectAmazonProduct, type AmazonProductRequest, type AmazonProductResponseItem } from './amazon-product-match';
export const BUDGET_OFFER_TTL_MS = 5 * 60 * 1000;
export type AmazonBudgetOffer = {
  asin: string; url: string; amount: number; currency: 'USD'; displayAmount: string;
  checkedAt: string; expiresAt: string;
};
type Listing = {
  price?: { money?: { amount?: number; currency?: string; displayAmount?: string } };
  availability?: { type?: string; minOrderQuantity?: number };
  condition?: { value?: string }; isBuyBoxWinner?: boolean; violatesMAP?: boolean;
  type?: string; dealDetails?: unknown;
};
export type AmazonOfferResponseItem = AmazonProductResponseItem & { offersV2?: { listings?: Listing[] } };

/** Only unambiguous, new, in-stock, unrestricted featured offers; never savings, unit or member prices. */
export function matchBudgetOffer(items: AmazonOfferResponseItem[], request: AmazonProductRequest, tag: string, checkedAt: string): AmazonBudgetOffer | null {
  const identity = selectAmazonProduct(items, request, tag, 'www.amazon.com', checkedAt);
  if (!identity || !Number.isFinite(Date.parse(checkedAt))) return null;
  const source = items.filter(item => item.asin === identity.asin);
  if (source.length !== 1) return null;
  const listings = source[0].offersV2?.listings;
  if (!Array.isArray(listings)) return null;
  const eligible = listings.filter(listing => {
    const money = listing?.price?.money;
    return listing?.isBuyBoxWinner === true && listing.violatesMAP === false &&
      listing.condition?.value === 'New' && ['IN_STOCK', 'INSTOCK', 'INSTOCKSCARCE'].includes(listing.availability?.type || '') &&
      (listing.availability?.minOrderQuantity === undefined || listing.availability.minOrderQuantity === 1) &&
      !listing.type && !listing.dealDetails && money?.currency === 'USD' &&
      typeof money.amount === 'number' && Number.isFinite(money.amount) && money.amount > 0 &&
      typeof money.displayAmount === 'string' && /^\$[\d,]+\.\d{2}$/.test(money.displayAmount) &&
      Number(money.displayAmount.replace(/[$,]/g, '')) === money.amount;
  });
  if (eligible.length !== 1) return null;
  const money = eligible[0].price!.money!;
  return { asin: identity.asin, url: identity.detailPageURL, amount: money.amount!, currency: 'USD',
    displayAmount: money.displayAmount!, checkedAt, expiresAt: new Date(Date.parse(checkedAt) + BUDGET_OFFER_TTL_MS).toISOString() };
}
