import type { AmazonProductRequest } from './amazon-product-match'

export type ArticleProductPick = AmazonProductRequest & { label: string; note: string }
export type ArticleBookPick = { title: string; author: string; asin?: string }
export type ArticleCommerce = { batch: number; partnerTag?: string; products?: ArticleProductPick[]; books?: ArticleBookPick[] }

// Explicit article opt-ins. Adding a card is not a substantive editorial refresh;
// dates and sitemaps remain unchanged unless a separate reviewed edit warrants it.
export const articleCommerce: Record<string, ArticleCommerce> = {
  '/home-kitchen/kitchenaid-pasta-roller-vs-pasta-press': { batch: 1, products: [
    { query: 'KitchenAid KSMPRA pasta roller cutter set', label: 'KitchenAid KSMPRA roller and cutter set', asin: 'B01DBGQR1K', brand: 'KitchenAid', expectedTitle: 'KitchenAid pasta', note: 'For pasta sheets, fettuccine and spaghetti. Confirm the set contents and mixer fit.' },
    { query: 'KitchenAid KSMPEXTA gourmet pasta press', label: 'KitchenAid KSMPEXTA pasta press', asin: 'B01ENK4UV2', brand: 'KitchenAid', expectedTitle: 'KitchenAid pasta press', note: 'For extruded shapes. Use the press-specific dough recipe and allow time for cleaning.' },
  ] },
  '/home-kitchen/best-pizza-peels-ooni-koda-12': { batch: 1, products: [
    { query: 'Ooni 12 inch perforated pizza peel', label: 'Ooni 12-inch perforated peel', asin: 'B07T1JPCNK', brand: 'Ooni', expectedTitle: 'Ooni 12 perforated', note: 'A launching peel. Check the 12-inch option rather than a wider blade.' },
    { query: 'Ooni 7 inch pizza turning peel', label: 'Ooni 7-inch turning peel', asin: 'B0821NDN33', brand: 'Ooni', expectedTitle: 'Ooni turning peel', requiredTitleTerms: ['7', 'turning'], note: 'For rotating a cooking pizza, not a substitute for a launching peel.' },
    { query: 'Ooni 12 inch bamboo pizza peel', label: 'Ooni 12-inch bamboo peel', asin: 'B07TB9LBHR', brand: 'Ooni', expectedTitle: 'Ooni 12 bamboo', note: 'For preparation and launching; keep bamboo away from the flame.' },
  ] },
  '/mahjong/best-mahjong-racks-pushers-oversized-tiles': { batch: 1, products: [
    { query: 'My Fair Mahjong 20 inch acrylic racks magnetic pushers', label: 'My Fair Mahjong 20-inch acrylic racks and pushers', brand: 'My Fair Mahjong', expectedTitle: 'My Fair Mahjong 20 acrylic racks', requiredTitleTerms: ['pushers'], note: 'Check usable rack length and tile thickness. An unverified Amazon match stays a search link.' },
    { query: 'My Fair Mahjong 20 inch wooden racks magnetic pushers', label: 'My Fair Mahjong 20-inch wooden racks and pushers', brand: 'My Fair Mahjong', expectedTitle: 'My Fair Mahjong 20 wooden racks', requiredTitleTerms: ['pushers'], note: 'Check the exposure shelf and full wall layout; generic 18-inch racks are not substitutes.' },
  ] },
  '/home-kitchen/ninja-creami-containers-compatibility': { batch: 1, products: [
    { query: 'Ninja CREAMi XSKPLID2CD replacement pints', label: 'Ninja XSKPLID2CD Original containers', asin: 'B0B7CBNNXC', allowAccessory: true, requiredTitleTerms: ['CREAMi', 'pints'], brand: 'Ninja', expectedTitle: 'Ninja CREAMi pints', note: 'Original container family. Match the machine model, not just the pint capacity.' },
    { query: 'Ninja CREAMi Deluxe XSKPNTLD2 replacement pints', label: 'Ninja XSKPNTLD2 Deluxe containers', asin: 'B0B9CJLVY5', allowAccessory: true, requiredTitleTerms: ['CREAMi', 'Deluxe'], brand: 'Ninja', expectedTitle: 'Ninja CREAMi Deluxe', note: 'Deluxe family. These are not interchangeable with Original or Swirl containers.' },
    { query: 'Ninja CREAMi Swirl XSK7PNTLD2 replacement pints', label: 'Ninja XSK7PNTLD2 Swirl containers', asin: 'B0DTJR3HTL', allowAccessory: true, requiredTitleTerms: ['CREAMi', 'Swirl'], brand: 'Ninja', expectedTitle: 'Ninja CREAMi Swirl', note: 'Swirl family. Confirm the nozzle and lid pieces included in the selected pack.' },
  ] },
  '/wfh/elgato-stream-deck-mk2-vs-logitech-mx-creative-console': { batch: 1, partnerTag: 'grandparentsgift-20', products: [
    { query: 'Elgato Stream Deck MK.2 15 keys', label: 'Elgato Stream Deck MK.2', asin: 'B09738CV2G', brand: 'Elgato', expectedTitle: 'Elgato Stream Deck MK 2', note: 'The 15-key MK.2, not the Mini, XL or dial-equipped Stream Deck +.' },
    { query: 'Logitech MX Creative Console', label: 'Logitech MX Creative Console', asin: 'B0D5FRQXWZ', brand: 'Logitech', expectedTitle: 'Logitech MX Creative Console', note: 'The full keypad-and-dial-console package, not the standalone MX Keypad.' },
  ] },
  '/coffee/best-espresso-grinders-gaggia-classic-pro': { batch: 1, products: [
    { query: 'Baratza Encore ESP coffee grinder', label: 'Baratza Encore ESP', brand: 'Baratza', expectedTitle: 'Baratza Encore ESP', forbiddenTitleTerms: ['Pro'], note: 'Choose the ESP model for the espresso-focused adjustment range, not the standard Encore.' },
    { query: '1Zpresso J-Ultra manual coffee grinder', label: '1Zpresso J-Ultra', brand: '1Zpresso', expectedTitle: '1Zpresso J Ultra', note: 'A manual option for readers comfortable grinding each espresso dose by hand.' },
    { query: 'Eureka Mignon Specialita 55mm 110V espresso grinder', label: 'Eureka Mignon Specialità', brand: 'Eureka', expectedTitle: 'Eureka Mignon Specialita', forbiddenTitleTerms: ['Smart'], note: 'Confirm the US voltage and seller warranty; do not substitute an overseas electrical variant.' },
  ] },
  '/coffee/best-bottomless-portafilters-gaggia-classic-pro': { batch: 1, products: [
    { query: 'KNODOS 58mm Gaggia bottomless portafilter rosewood', label: 'KNODOS Gaggia bottomless portafilter', asin: 'B0C7CY4RRQ', allowAccessory: true, requiredTitleTerms: ['Gaggia', 'portafilter'], brand: 'KNODOS', expectedTitle: 'KNODOS Gaggia portafilter', note: 'Check the exact Gaggia variant, lug fit and basket clearance before ordering.' },
    { query: 'Normcore bottomless portafilter Gaggia 58mm removable basket', label: 'Normcore Gaggia-compatible bottomless portafilter', brand: 'Normcore', expectedTitle: 'Normcore Gaggia portafilter', forbiddenTitleTerms: ['Unibody'], note: 'Select the Gaggia-specific version. A generic 58mm diameter alone does not establish fit.' },
  ] },
  '/books/daring-greatly-vs-the-gifts-of-imperfection': { batch: 1, books: [
    { title: 'Daring Greatly', author: 'Brené Brown', asin: '1592407331' },
    { title: 'The Gifts of Imperfection', author: 'Brené Brown' },
  ] },
  '/mahjong/best-folding-tables-for-mahjong': { batch: 1, products: [
    { query: 'COSCO XL 38.5 fold in half card table 14036', label: 'COSCO XL 38.5-inch fold-in-half table', brand: 'Cosco', expectedTitle: 'COSCO XL 38.5 fold', note: 'For more rack space. Inspect the center seam and verify the folded storage envelope.' },
    { query: 'COSCO 34 vinyl top folding table 14696', label: 'COSCO 34-inch vinyl-top table', brand: 'Cosco', expectedTitle: 'COSCO 34 vinyl', note: 'For a smaller playing footprint. Test the actual four-player layout inside a 34-inch square.' },
  ] },
}
