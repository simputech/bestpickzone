// Publish only source-backed offers from a provider licensed for alerts, or permitted editorial observations.
// Amazon API content is intentionally excluded from this feed and from email.
export type VerifiedOffer = {
  id: string;
  topic: string;
  model: string;
  price: number;
  currency: "USD";
  condition: string;
  retailer: string;
  sourceUrl: string;
  checkedAt: string;
  expiresAt: string;
  emailPermitted: boolean;
};
export const verifiedOffers: VerifiedOffer[] = [];
export function usableOffer(o: VerifiedOffer, now = Date.now()) {
  let url: URL;
  try {
    url = new URL(o.sourceUrl);
  } catch {
    return false;
  }
  return (
    o.emailPermitted &&
    url.protocol === "https:" &&
    !/(^|\.)amazon\./i.test(url.hostname) &&
    o.currency === "USD" &&
    Number.isFinite(o.price) &&
    o.price > 0 &&
    Date.parse(o.checkedAt) <= now &&
    now - Date.parse(o.checkedAt) < 24 * 3600000 &&
    Date.parse(o.expiresAt) > now
  );
}
