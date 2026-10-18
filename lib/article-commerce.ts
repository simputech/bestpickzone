import type { AmazonProductRequest } from './amazon-product-match'

export type ArticleProductPick = AmazonProductRequest & { label: string; note: string }
export type ArticleBookPick = { title: string; author: string; asin?: string }
export type ArticleCommerce = { batch: number; partnerTag?: string; products?: ArticleProductPick[]; books?: ArticleBookPick[] }

// Explicit article opt-ins. Adding a card is not a substantive editorial refresh;
// dates and sitemaps remain unchanged unless a separate reviewed edit warrants it.
export const articleCommerce: Record<string, ArticleCommerce> = {
  "/home-kitchen/oxo-vs-fullstar-avocado-slicer": {"batch": 4, "products": [{"query": "OXO Good Grips 3 in 1 avocado slicer", "label": "OXO Good Grips 3-in-1 Avocado Slicer", "brand": "OXO", "expectedTitle": "OXO Good Grips avocado slicer", "requiredTitleTerms": ["3 in 1", "avocado"], "forbiddenTitleTerms": ["SoftWorks", "chopper", "apple", "mango", "pack"], "note": "The complete Good Grips avocado tool. The previously named Fullstar product remains unverified and is not a purchase recommendation."}]},
  // Batch 4: exact-model drafts; publication still requires independent review.
  "/home-kitchen/best-coffee-makers-under-100": {"batch": 4, "products": [{"query": "Cuisinart DCC-3200P1 coffee maker", "label": "Cuisinart DCC-3200P1", "brand": "Cuisinart", "model": "DCC-3200P1", "expectedTitle": "Cuisinart 14 cup coffee", "requiredTitleTerms": ["14"], "forbiddenTitleTerms": ["DCC-3200NAS", "220V", "240V", "220 V", "240 V"], "accessoryOnlyTitleTerms": ["carafe", "filter", "filters", "lid"], "note": "Exact DCC-3200P1 complete coffee maker. Check the final price against your $100 budget; this card does not promise a sub-$100 offer."}, {"query": "Hamilton Beach FlexBrew Trio 49902 coffee maker", "label": "Hamilton Beach FlexBrew Trio 49902", "brand": "Hamilton Beach", "model": "49902", "expectedTitle": "Hamilton Beach FlexBrew Trio coffee maker", "requiredTitleTerms": ["Trio"], "forbiddenTitleTerms": ["49904", "49915", "220V", "240V", "220 V", "240 V"], "accessoryOnlyTitleTerms": ["holder", "carafe", "filter", "filters", "lid"], "note": "Exact 49902 complete brewer. Different FlexBrew models and replacement carafes are not equivalent. Verify stock and total cost."}]},
  "/home-kitchen/best-robot-vacuums": {"batch": 4, "products": [{"query": "iRobot Roomba j7+ j755020 self emptying robot vacuum", "label": "Original iRobot Roomba j7+ with Clean Base", "brand": "iRobot", "model": "j755020", "expectedTitle": "iRobot Roomba j7 self emptying robot vacuum", "requiredTitleTerms": ["self emptying"], "forbiddenTitleTerms": ["Combo", "j9", "j5"], "accessoryOnlyTitleTerms": ["bags", "filter", "filters", "brush", "brushes", "battery"], "note": "Original vacuum-only j7+ and Clean Base package. No Combo or robot-only substitution; check condition, seller and current support."}, {"query": "Roborock Q5+ 2700Pa self emptying robot vacuum", "label": "Original Roborock Q5+ with Auto-Empty Dock Pure", "brand": "roborock", "expectedTitle": "Roborock Q5 2700Pa self emptying robot vacuum", "requiredTitleTerms": ["2700Pa", "self emptying"], "forbiddenTitleTerms": ["Pro", "Max", "DuoRoller", "Q5V"], "accessoryOnlyTitleTerms": ["bags", "filter", "filters", "brush", "brushes", "battery"], "note": "Original 2,700-Pa Q5+ package. Q5 Pro+, Max+ and other variants are separate models, not substitutes."}]},
  "/home-kitchen/instant-pot-vs-ninja-foodi": {"batch": 4, "products": [{"query": "Instant Pot Duo 6QT 112-0170-01 pressure cooker", "label": "Instant Pot Duo 6QT, standard model", "brand": "Instant Pot", "model": "112-0170-01", "expectedTitle": "Instant Pot Duo pressure cooker", "requiredTitleTerms": ["6"], "forbiddenTitleTerms": ["Plus", "Crisp", "Pro", "Mini", "8 Quart", "8 Qt", "220V", "240V", "220 V", "240 V"], "accessoryOnlyTitleTerms": ["lid", "ring", "rings", "seal", "seals", "pot only"], "note": "Standard US Duo 6QT; verify complete appliance and model. Recalled Ninja Foodi OP300-family units are not recommended or linked for purchase."}]},

  "/books/reader-picks/best-true-crime-books": {"batch": 3, "books": [{"title": "In Cold Blood", "author": "Truman Capote"}, {"title": "I'll Be Gone in the Dark", "author": "Michelle McNamara"}, {"title": "Killers of the Flower Moon", "author": "David Grann", "asin": "0307742482"}, {"title": "Say Nothing", "author": "Patrick Radden Keefe"}, {"title": "The Stranger Beside Me", "author": "Ann Rule"}, {"title": "Helter Skelter", "author": "Vincent Bugliosi"}, {"title": "The Devil in the White City", "author": "Erik Larson"}, {"title": "Lost Girls", "author": "Robert Kolker"}]},
  "/books/genre-fiction/best-historical-fiction-series-2026": {"batch": 3, "books": [{"title": "The Pillars of the Earth", "author": "Ken Follett"}, {"title": "The Last Kingdom", "author": "Bernard Cornwell"}, {"title": "Wolf Hall", "author": "Hilary Mantel"}, {"title": "The Winter King", "author": "Bernard Cornwell"}, {"title": "Fall of Giants", "author": "Ken Follett"}, {"title": "Ross Poldark", "author": "Winston Graham"}, {"title": "A Morbid Taste for Bones", "author": "Ellis Peters"}]},
  "/books/self-help/best-james-clear-books": {"batch": 3, "books": [{"title": "Atomic Habits", "author": "James Clear"}, {"title": "The Power of Habit", "author": "Charles Duhigg"}, {"title": "Tiny Habits", "author": "BJ Fogg"}, {"title": "Mindset", "author": "Carol S. Dweck"}, {"title": "Deep Work", "author": "Cal Newport"}, {"title": "Grit", "author": "Angela Duckworth"}, {"title": "Thinking, Fast and Slow", "author": "Daniel Kahneman"}, {"title": "The 7 Habits of Highly Effective People", "author": "Stephen R. Covey"}]},
  "/books/genre-fiction/best-historical-fiction-books": {"batch": 3, "books": [{"title": "All the Light We Cannot See", "author": "Anthony Doerr"}, {"title": "The Book Thief", "author": "Markus Zusak"}, {"title": "Hamnet", "author": "Maggie O'Farrell"}, {"title": "The Underground Railroad", "author": "Colson Whitehead"}, {"title": "Cold Mountain", "author": "Charles Frazier"}, {"title": "Girl with a Pearl Earring", "author": "Tracy Chevalier"}, {"title": "The Other Boleyn Girl", "author": "Philippa Gregory"}, {"title": "Beloved", "author": "Toni Morrison"}]},
  "/home-kitchen/best-air-fryers": {"batch": 3, "products": [{"query": "Cosori CP358-AF 5.8 quart air fryer", "label": "Cosori CP358-AF non-smart 5.8-quart air fryer", "brand": "Cosori", "expectedTitle": "Cosori CP358 AF air fryer", "requiredTitleTerms": ["CP358-AF"], "forbiddenTitleTerms": ["CP158", "CS158", "CP258", "CS358", "WiFi", "220V", "240V"], "note": "Exact non-smart CP358-AF only. The official store was sold out when researched; a search fallback does not verify current stock or seller."}, {"query": "Ninja AF101 4 quart air fryer", "label": "Ninja AF101 4-quart air fryer", "asin": "B07FDJMC9Q", "brand": "Ninja", "expectedTitle": "Ninja AF101 air fryer", "requiredTitleTerms": ["AF101", "4"], "forbiddenTitleTerms": ["AF100", "AF150", "AF161", "AF101C", "220V", "240V"], "note": "US AF101 only; check complete appliance, condition and seller. Other Ninja models are not substitutes."}]},
  "/books/lord-of-the-rings-vs-harry-potter": {"batch": 3, "books": [{"title": "Harry Potter and the Sorcerer's Stone", "author": "J. K. Rowling"}, {"title": "The Fellowship of the Ring", "author": "J. R. R. Tolkien"}, {"title": "The Hobbit", "author": "J. R. R. Tolkien"}]},
  "/books/hemingway-vs-fitzgerald": {"batch": 3, "books": [{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald"}, {"title": "The Sun Also Rises", "author": "Ernest Hemingway"}, {"title": "Tender Is the Night", "author": "F. Scott Fitzgerald"}]},
  "/books/stephen-king-vs-dean-koontz": {"batch": 3, "books": [{"title": "The Shining", "author": "Stephen King"}, {"title": "Carrie", "author": "Stephen King"}, {"title": "Watchers", "author": "Dean Koontz"}, {"title": "Intensity", "author": "Dean Koontz"}, {"title": "Odd Thomas", "author": "Dean Koontz"}]},
  "/books/agatha-christie-vs-arthur-conan-doyle": {"batch": 3, "books": [{"title": "The Mysterious Affair at Styles", "author": "Agatha Christie"}, {"title": "The Adventures of Sherlock Holmes", "author": "Arthur Conan Doyle"}, {"title": "The Hound of the Baskervilles", "author": "Arthur Conan Doyle"}, {"title": "And Then There Were None", "author": "Agatha Christie"}, {"title": "The Murder of Roger Ackroyd", "author": "Agatha Christie"}]},
  '/home-kitchen/kitchenaid-pasta-roller-vs-pasta-press': { batch: 1, products: [
    { query: 'KitchenAid KSMPRA pasta roller cutter set', label: 'KitchenAid KSMPRA roller and cutter set', asin: 'B01DBGQR1K', allowAccessory: true, requiredTitleTerms: ['KSMPRA', 'pasta'], brand: 'KitchenAid', expectedTitle: 'KitchenAid pasta', note: 'For pasta sheets, fettuccine and spaghetti. Confirm the set contents and mixer fit.' },
    { query: 'KitchenAid KSMPEXTA gourmet pasta press', label: 'KitchenAid KSMPEXTA pasta press', asin: 'B01ENK4UV2', allowAccessory: true, requiredTitleTerms: ['KSMPEXTA', 'pasta', 'press'], brand: 'KitchenAid', expectedTitle: 'KitchenAid pasta press', note: 'For extruded shapes. Use the press-specific dough recipe and allow time for cleaning.' },
  ] },
  '/home-kitchen/best-pizza-peels-ooni-koda-12': { batch: 1, products: [
    { query: 'Ooni 12 inch perforated pizza peel', label: 'Ooni 12-inch perforated peel', asin: 'B07T1JPCNK', allowAccessory: true, requiredTitleTerms: ['12', 'perforated', 'peel'], brand: 'Ooni', expectedTitle: 'Ooni 12 perforated', note: 'A launching peel. Check the 12-inch option rather than a wider blade.' },
    { query: 'Ooni 7 inch pizza turning peel', label: 'Ooni 7-inch turning peel', asin: 'B0821NDN33', allowAccessory: true, brand: 'Ooni', expectedTitle: 'Ooni turning peel', requiredTitleTerms: ['7', 'turning', 'peel'], note: 'For rotating a cooking pizza, not a substitute for a launching peel.' },
    { query: 'Ooni 12 inch bamboo pizza peel', label: 'Ooni 12-inch bamboo peel', asin: 'B07TB9LBHR', allowAccessory: true, requiredTitleTerms: ['12', 'bamboo', 'peel'], brand: 'Ooni', expectedTitle: 'Ooni 12 bamboo', note: 'For preparation and launching; keep bamboo away from the flame.' },
  ] },
  '/mahjong/best-mahjong-racks-pushers-oversized-tiles': { batch: 1, products: [
    { query: 'My Fair Mahjong 20 inch acrylic racks magnetic pushers', label: 'My Fair Mahjong 20-inch acrylic racks and pushers', brand: 'My Fair Mahjong', expectedTitle: 'My Fair Mahjong 20 acrylic racks', requiredTitleTerms: ['pushers'], note: 'Check usable rack length and tile thickness. An unverified Amazon match stays a search link.' },
    { query: 'My Fair Mahjong 20 inch wooden racks magnetic pushers', label: 'My Fair Mahjong 20-inch wooden racks and pushers', brand: 'My Fair Mahjong', expectedTitle: 'My Fair Mahjong 20 wooden racks', requiredTitleTerms: ['pushers'], note: 'Check the exposure shelf and full wall layout; generic 18-inch racks are not substitutes.' },
  ] },
  '/home-kitchen/ninja-creami-containers-compatibility': { batch: 1, products: [
    { query: 'Ninja CREAMi XSKPLID2CD replacement pints', label: 'Ninja XSKPLID2CD Original containers', asin: 'B0B7CBNNXC', allowAccessory: true, requiredTitleTerms: ['CREAMi', 'pints'], brand: 'Ninja', expectedTitle: 'Ninja CREAMi pints', note: 'Original container family. Match the machine model, not just the pint capacity.' },
    { query: 'Ninja CREAMi Deluxe XSKPNTLD2 replacement pints', label: 'Ninja XSKPNTLD2 Deluxe containers', asin: 'B0B9CJLVY5', allowAccessory: true, requiredTitleTerms: ['CREAMi', 'XSKPNTLD2'], brand: 'Ninja', expectedTitle: 'Ninja CREAMi Deluxe', note: 'Deluxe family. These are not interchangeable with Original or Swirl containers.' },
    { query: 'Ninja CREAMi Swirl XSK7PNTLD2 replacement pints', label: 'Ninja XSK7PNTLD2 Swirl containers', asin: 'B0DTJR3HTL', allowAccessory: true, requiredTitleTerms: ['CREAMi', 'Swirl'], brand: 'Ninja', expectedTitle: 'Ninja CREAMi Swirl', note: 'Swirl family. Confirm the nozzle and lid pieces included in the selected pack.' },
  ] },
  '/wfh/elgato-stream-deck-mk2-vs-logitech-mx-creative-console': { batch: 1, partnerTag: 'grandparentsgift-20', products: [
    { query: 'Elgato Stream Deck MK.2 15 keys', label: 'Elgato Stream Deck MK.2', asin: 'B09738CV2G', brand: 'Elgato', expectedTitle: 'Elgato Stream Deck MK 2', note: 'The 15-key MK.2, not the Mini, XL or dial-equipped Stream Deck +.' },
    { query: 'Logitech MX Creative Console', label: 'Logitech MX Creative Console', asin: 'B0D5FRQXWZ', allowAccessory: true, requiredTitleTerms: ['MX Creative Console'], brand: 'Logitech', expectedTitle: 'Logitech MX Creative Console', note: 'The full keypad-and-dial-console package, not the standalone MX Keypad.' },
  ] },
  '/coffee/best-espresso-grinders-gaggia-classic-pro': { batch: 1, products: [
    { query: 'Baratza Encore ESP coffee grinder', label: 'Baratza Encore ESP', asin: 'B0BW272XCV', brand: 'Baratza', expectedTitle: 'Baratza Encore ESP', forbiddenTitleTerms: ['Pro'], note: 'Choose the ESP model for the espresso-focused adjustment range, not the standard Encore.' },
    { query: '1Zpresso J-Ultra manual coffee grinder', label: '1Zpresso J-Ultra', brand: '1Zpresso', expectedTitle: '1Zpresso J Ultra', note: 'A manual option for readers comfortable grinding each espresso dose by hand.' },
    { query: 'Eureka Mignon Specialita 55mm 110V espresso grinder', label: 'Eureka Mignon Specialità', asin: 'B07GFV6HM8', brand: 'Eureka', expectedTitle: 'Eureka Mignon Specialita', forbiddenTitleTerms: ['Smart'], note: 'Confirm the US voltage and seller warranty; do not substitute an overseas electrical variant.' },
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
    { query: 'COSCO XL 38.5 fold in half card table 14036', label: 'COSCO XL 38.5-inch fold-in-half table', asin: 'B084QF1F6M', model: '14036BLK1E', brand: 'Cosco', expectedTitle: 'COSCO XL 38.5 fold', note: 'For more rack space. Inspect the center seam and verify the folded storage envelope.' },
    { query: 'COSCO 34 vinyl top folding table 14696', label: 'COSCO 34-inch vinyl-top table', asin: 'B00SOWJUO8', model: '14696BLK1E', brand: 'Cosco', expectedTitle: 'COSCO 34 vinyl', note: 'For a smaller playing footprint. Test the actual four-player layout inside a 34-inch square.' },
  ] },
  // Batch 2: explicit reviewed products; missing catalog identities fail closed.
  "/wfh/best-monitor-arms-for-shallow-desks": {
    "batch": 2,
    "products": [
      {
        "query": "VIVO STAND-V001 single monitor desk mount black",
        "label": "VIVO STAND-V001 single monitor arm",
        "note": "For a mostly fixed screen position. Confirm the exact pole arm, desktop construction and clamp clearance.",
        "asin": "B00B21TLQU",
        "brand": "VIVO",
        "expectedTitle": "VIVO STAND V001 monitor",
        "requiredTitleTerms": [
          "STAND-V001",
          "monitor"
        ],
        "forbiddenTitleTerms": [
          "dual",
          "STAND-V001C",
          "STAND-V001VA",
          "STAND-V001T"
        ],
        "model": "STAND-V001"
      },
      {
        "query": "Ergotron LX Pro 45-682 single monitor desk arm",
        "label": "Ergotron LX Pro 45-682 single desk arm",
        "note": "The single-arm two-piece-clamp family, not a dual, tall-pole or wall-mount kit. Check the complete folded envelope.",
        "asin": "B0DSJJMRFL",
        "brand": "Ergotron",
        "expectedTitle": "Ergotron LX Pro single monitor arm",
        "requiredTitleTerms": [
          "LX Pro",
          "single",
          "monitor arm"
        ],
        "forbiddenTitleTerms": [
          "dual",
          "stacking",
          "tall pole",
          "wall mount"
        ],
        "modelPrefix": "45-682",
        "allowAccessory": true
      }
    ]
  },
  "/coffee/best-burr-grinders-french-press-cold-brew": {
    "batch": 2,
    "products": [
      {
        "query": "Baratza Encore standard coffee grinder black",
        "label": "Baratza Encore, standard model",
        "note": "For a simple brew-grinder routine. This is not the Encore ESP; keep grounds below the bin's maximum-fill line.",
        "asin": "B007F183LK",
        "brand": "Baratza",
        "expectedTitle": "Baratza Encore coffee grinder",
        "requiredTitleTerms": [
          "Encore",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "ESP",
          "Pro"
        ],
        "model": "ENCORE"
      },
      {
        "query": "Fellow Ode Gen 2 brew grinder matte black standard burrs",
        "label": "Fellow Ode Gen 2",
        "note": "For weighed brewed-coffee batches. Not an espresso grinder; doses above its 100g capacity need multiple loads.",
        "asin": "B0BLRMCM9Y",
        "brand": "Fellow",
        "expectedTitle": "Fellow Ode Gen 2 grinder",
        "requiredTitleTerms": [
          "Ode",
          "Gen 2",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "SSP"
        ]
      }
    ]
  },
  "/coffee/best-coffee-makers-for-low-cabinets": {
    "batch": 2,
    "products": [
      {
        "query": "Hamilton Beach FrontFill 46310J coffee maker",
        "label": "Hamilton Beach FrontFill 46310J",
        "note": "For front loading beneath a cabinet. An unverified 46310J match stays a search link; do not substitute the older 46310.",
        "brand": "Hamilton Beach",
        "expectedTitle": "Hamilton Beach FrontFill",
        "requiredTitleTerms": [
          "46310J"
        ],
        "model": "46310J"
      },
      {
        "query": "Zojirushi ZUTTO EC-DAC50 coffee maker silver",
        "label": "Zojirushi ZUTTO EC-DAC50, silver",
        "note": "Silver EC-DAC50SA listing. Check the exact version and tank-removal space; five coffee-maker cups are not five large mugs.",
        "asin": "B000EPLK6O",
        "brand": "Zojirushi",
        "expectedTitle": "Zojirushi EC DAC50 Zutto",
        "requiredTitleTerms": [
          "EC-DAC50",
          "Zutto"
        ],
        "model": "EC-DAC50SA"
      }
    ]
  },
  "/coffee/best-espresso-grinders-for-breville-bambino": {
    "batch": 2,
    "products": [
      {
        "query": "Baratza Encore ESP coffee grinder",
        "label": "Baratza Encore ESP",
        "note": "For simple cup-based dosing with espresso-focused adjustment. Choose ESP, not the standard Encore or ESP Pro.",
        "asin": "B0BW272XCV",
        "brand": "Baratza",
        "expectedTitle": "Baratza Encore ESP",
        "requiredTitleTerms": [
          "Encore ESP",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "Pro"
        ]
      },
      {
        "query": "Breville Smart Grinder Pro BCG820BSS",
        "label": "Breville Smart Grinder Pro BCG820BSS",
        "note": "For timed hopper dosing with a 50–54mm cradle. The timer controls duration, not an exact grounds weight.",
        "asin": "B00OXGXW8O",
        "brand": "Breville",
        "expectedTitle": "Breville Smart Grinder Pro",
        "requiredTitleTerms": [
          "BCG820BSS",
          "Smart Grinder Pro"
        ],
        "model": "BCG820BSS"
      }
    ]
  },
  "/coffee/best-low-profile-espresso-scales": {
    "batch": 2,
    "products": [
      {
        "query": "Acaia Lunar 2021 espresso scale",
        "label": "Acaia Lunar 2021",
        "note": "For preserving vertical cup clearance. Confirm the 2021 scale, not a plate, base, carrying case or unrelated compact scale.",
        "brand": "Acaia",
        "expectedTitle": "Acaia Lunar",
        "requiredTitleTerms": [
          "2021",
          "scale"
        ],
        "forbiddenTitleTerms": [
          "Pearl",
          "weighing plate",
          "carrying case",
          "base",
          "protective film"
        ]
      },
      {
        "query": "WACACO Exagram Pro coffee scale",
        "label": "Wacaco Exagram Pro",
        "note": "For a smaller tray footprint with enough cup headroom. Its 22mm body is taller than the Lunar; do not substitute the original Exagram.",
        "asin": "B0D7378WJL",
        "brand": "WACACO",
        "expectedTitle": "WACACO Exagram Pro coffee scale",
        "requiredTitleTerms": [
          "Exagram Pro",
          "scale"
        ]
      }
    ]
  },
  "/mahjong/best-carrying-bags-for-american-mahjong-sets": {
    "batch": 2,
    "products": [
      {
        "query": "Yellow Mountain Imports Mojave soft case YM-XH012-A case only",
        "label": "YMI Mojave case-only bag",
        "note": "Case and packing pouches, not a full tile set. Match rack and tile dimensions; interior and mat fit are unverified.",
        "asin": "B00SR63J2A",
        "brand": "Yellow Mountain Imports",
        "expectedTitle": "Yellow Mountain Imports Mojave soft case",
        "requiredTitleTerms": [
          "Mojave",
          "case only"
        ],
        "model": "YM-XH012-A"
      },
      {
        "query": "Yellow Mountain Imports Pepper soft case DX-XH001-A case only",
        "label": "YMI Pepper case-only bag",
        "note": "The case-only model, not the complete Pepper Mahjong set. No exact US ASIN verified; an unmatched result stays a search link.",
        "brand": "Yellow Mountain Imports",
        "expectedTitle": "Yellow Mountain Imports Pepper soft case",
        "requiredTitleTerms": [
          "case only"
        ],
        "model": "DX-XH001-A"
      }
    ]
  },
  "/mahjong/best-mahjong-mats-for-small-tables": {
    "batch": 2,
    "products": [
      {
        "query": "Yellow Mountain Imports 31.1 table cover YW-TR001-A blue rubber backing",
        "label": "YMI 31.1-inch rubber-backed mat",
        "note": "Roll-up YW-TR001-A, not a fitted cover. Confirm all four corners are supported. No exact US ASIN verified.",
        "brand": "Yellow Mountain Imports",
        "expectedTitle": "Yellow Mountain Imports 31.1 table cover",
        "requiredTitleTerms": [
          "31.1"
        ],
        "model": "YW-TR001-A"
      },
      {
        "query": "Yellow Mountain Imports blue fitted square table cover YM-TR001-B87",
        "label": "YMI blue fitted cover YM-TR001-B87",
        "note": "Exact blue-cover identity; published size fields conflict. Obtain current finished dimensions and table-fit confirmation before ordering.",
        "asin": "B0753FHDC8",
        "brand": "Yellow Mountain Imports",
        "expectedTitle": "Yellow Mountain Imports table cover Mahjong",
        "requiredTitleTerms": [
          "table cover",
          "Mahjong",
          "professional grade"
        ]
      }
    ]
  },
  "/wfh/best-usb-c-docks-for-two-monitors": {
    "batch": 2,
    "products": [
      {
        "query": "CalDigit TS4 Thunderbolt 4 dock 98W",
        "label": "CalDigit TS4",
        "note": "Native displays on a supported host. Does not bypass base M1/M2 limits; plan the DisplayPort and downstream Thunderbolt video connections.",
        "asin": "B09GK8LBWS",
        "brand": "CalDigit",
        "expectedTitle": "CalDigit TS4 Thunderbolt 4 dock",
        "requiredTitleTerms": [
          "TS4",
          "Thunderbolt",
          "dock"
        ]
      },
      {
        "query": "Plugable UD-6950PDH dual monitor docking station",
        "label": "Plugable UD-6950PDH",
        "note": "Office DisplayLink option, with software and permissions required. On macOS, protected video can fail on all screens while connected.",
        "asin": "B09TQY97MJ",
        "brand": "Plugable",
        "expectedTitle": "Plugable docking station dual monitor",
        "requiredTitleTerms": [
          "docking station",
          "dual monitor"
        ],
        "model": "UD-6950PDH"
      }
    ]
  },
  "/wfh/best-video-call-lighting-for-glasses": {
    "batch": 2,
    "products": [
      {
        "query": "Elgato Key Light Neo Black with Monitor Mount",
        "label": "Elgato Key Light Neo with monitor mount, black",
        "note": "Compact with-mount package. Position and power source matter; a diffused panel cannot guarantee reflection-free glasses.",
        "asin": "B0FDBL5MVM",
        "brand": "Elgato",
        "expectedTitle": "Elgato Key Light Neo Black with Monitor Mount",
        "requiredTitleTerms": [
          "Key Light Neo",
          "Black",
          "Monitor Mount"
        ]
      }
    ]
  },

  "/coffee/breville-bambino-plus-vs-gaggia-classic-pro": {
    "batch": 2,
    "products": [
      {
        "query": "Breville Bambino Plus Espresso Machine BES500BSS",
        "label": "Breville Bambino Plus BES500",
        "asin": "B07JVD78TT",
        "brand": "Breville",
        "expectedTitle": "Breville Bambino Plus",
        "requiredTitleTerms": [
          "Bambino",
          "Plus"
        ],
        "forbiddenTitleTerms": [
          "BES450"
        ],
        "note": "US Bambino Plus BES500, not the base Bambino. The ASIN comes from the existing verified Creator API baseline; preserve the API-returned URL and image."
      },
      {
        "query": "Gaggia Classic Pro E24 Espresso Machine US 120V",
        "label": "Gaggia Classic Pro E24 (US brass-boiler model)",
        "brand": "Gaggia",
        "expectedTitle": "Gaggia Classic E24",
        "requiredTitleTerms": [
          "E24",
          "120V",
          "espresso machine"
        ],
        "forbiddenTitleTerms": [
          "220V",
          "230V",
          "240V",
          "220 V",
          "230 V",
          "240 V",
          "heating element",
          "boiler only",
          "replacement boiler",
          "pump",
          "gasket"
        ],
        "note": "Require positive E24 and 120V title evidence for this US brass-boiler comparison. Older Pro/Evo, overseas, or voltage-ambiguous listings are not substitutes. Retain safe fallback when these checks fail."
      }
    ]
  },
  "/beauty/dr-dennis-gross-vs-omnilux-contour": {
    "batch": 2,
    "products": [
      {
        "query": "Dr Dennis Gross DRx SpectraLite FaceWare Pro LED Mask",
        "label": "Dr. Dennis Gross DRx SpectraLite FaceWare Pro",
        "expectedTitle": "Dr Dennis Gross SpectraLite FaceWare Pro",
        "requiredTitleTerms": [
          "SpectraLite",
          "FaceWare",
          "Pro",
          "mask"
        ],
        "forbiddenTitleTerms": [
          "EyeCare",
          "LipWare",
          "BodyWare",
          "replacement",
          "strap",
          "controller",
          "charger",
          "charging cable",
          "power cable",
          "adapter"
        ],
        "note": "Full-face FaceWare Pro device only, not another body-area device or accessory. No ASIN verified for this refresh; retain a search fallback unless Creator API verifies the exact product. A product match does not establish authorized-seller or warranty eligibility.",
        "brand": "Dr. Dennis Gross"
      }
    ]
  },

  "/coffee/1zpresso-jx-pro-vs-comandante-c40": {
    "batch": 2,
    "products": [
      {
        "query": "1Zpresso JX-Pro original manual coffee grinder",
        "label": "1Zpresso JX-Pro (original)",
        "brand": "1Zpresso",
        "expectedTitle": "1Zpresso JX Pro",
        "requiredTitleTerms": [
          "JX Pro",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "JX Pro S",
          "JX ProS",
          "J Ultra",
          "J Max",
          "K Ultra",
          "catch cup",
          "carrying case",
          "handle only",
          "burr set",
          "grinder handle",
          "spare handle"
        ],
        "note": "Legacy original JX-Pro only. Confirm stock, condition and support; JX-Pro S or J-Ultra is not a substitute."
      },
      {
        "query": "Comandante C40 MK4 Nitro Blade manual coffee grinder",
        "label": "Comandante C40 MK4 Nitro Blade",
        "brand": "Comandante",
        "expectedTitle": "Comandante C40 MK4 Nitro Blade",
        "requiredTitleTerms": [
          "C40",
          "MK4",
          "Nitro Blade",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "MK3",
          "C60",
          "Trailmaster",
          "Tigershark",
          "Red Clix",
          "jar",
          "catch cup",
          "carrying case",
          "protective case",
          "handle only",
          "shaft",
          "drivetrain",
          "grinder handle",
          "spare handle"
        ],
        "note": "Standard MK4 Nitro Blade grinder, not a separate jar, drivetrain or another burr edition."
      }
    ]
  },
  "/coffee/acaia-lunar-vs-timemore-black-mirror-nano": {
    "batch": 2,
    "products": [
      {
        "query": "Acaia Lunar 2021 espresso coffee scale",
        "label": "Acaia Lunar 2021",
        "brand": "Acaia",
        "expectedTitle": "Acaia Lunar 2021",
        "requiredTitleTerms": [
          "Lunar",
          "2021",
          "scale"
        ],
        "forbiddenTitleTerms": [
          "Pearl",
          "Pyxis",
          "Cinco",
          "weighing plate",
          "carrying case",
          "protective case",
          "base",
          "protective film",
          "silicone pad",
          "charger",
          "charging cable",
          "adapter"
        ],
        "note": "2021 generation only. Check cup clearance; Lunar is water-resistant, not waterproof."
      },
      {
        "query": "TIMEMORE Black Mirror Nano coffee scale",
        "label": "Timemore Black Mirror Nano, white",
        "brand": "TIMEMORE",
        "expectedTitle": "TIMEMORE Black Mirror Nano",
        "requiredTitleTerms": [
          "Black Mirror",
          "Nano",
          "scale"
        ],
        "forbiddenTitleTerms": [
          "Mini",
          "Basic",
          "Pro"
        ],
        "note": "Exact Nano, not Mini or Basic. Check current availability, side-button clearance and seller support. Pinned white variant; do not substitute a different Nano color ASIN without verification.",
        "asin": "B09KL96K8V"
      }
    ]
  },
  "/coffee/aeropress-original-vs-aeropress-premium": {
    "batch": 2,
    "products": [
      {
        "query": "AeroPress Original standard coffee maker",
        "label": "AeroPress Original",
        "brand": "AeroPress",
        "expectedTitle": "AeroPress Original Coffee Press",
        "requiredTitleTerms": [
          "Original",
          "Coffee Press"
        ],
        "forbiddenTitleTerms": [
          "XL",
          "Clear",
          "Go",
          "Premium",
          "Steel"
        ],
        "note": "Standard-size Original brewer, not Original XL or a filter-only listing.",
        "asin": "B0047BIWSK",
        "model": "85A01"
      },
      {
        "query": "AeroPress Premium glass metal coffee maker",
        "label": "AeroPress Premium, black",
        "brand": "AeroPress",
        "expectedTitle": "AeroPress Premium Coffee Press Glass",
        "requiredTitleTerms": [
          "Premium",
          "Coffee Press",
          "Glass"
        ],
        "forbiddenTitleTerms": [
          "Walnut",
          "XL",
          "Original",
          "Go Plus",
          "Clear",
          "Go"
        ],
        "note": "Glass-and-metal Premium brewer. Handwash only; not the Steel or Premium Walnut model. The verified catalog identity is the black finish.",
        "asin": "B0FRWSKCX6",
        "model": "PR001"
      }
    ]
  },
  "/coffee/baratza-encore-esp-vs-fellow-opus-2": {
    "batch": 2,
    "products": [
      {
        "query": "Baratza Encore ESP coffee grinder black",
        "label": "Baratza Encore ESP",
        "brand": "Baratza",
        "expectedTitle": "Baratza Encore ESP",
        "requiredTitleTerms": [
          "Encore",
          "ESP"
        ],
        "forbiddenTitleTerms": [
          "Pro"
        ],
        "note": "Original Encore ESP in black, not standard Encore or Encore ESP Pro.",
        "asin": "B0BW272XCV"
      },
      {
        "query": "Fellow Opus 2 conical burr coffee grinder",
        "label": "Fellow Opus 2",
        "brand": "Fellow",
        "expectedTitle": "Fellow Opus 2",
        "requiredTitleTerms": [
          "Opus 2",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "Opus 1",
          "Ode",
          "Walnut",
          "wood lid"
        ],
        "note": "Opus 2 with 48 mm burrs and stepless adjustment. The original 40 mm Opus is not a substitute. Pinned black North American model.",
        "asin": "B0FPCHNSX2",
        "model": "1222MB-NA"
      }
    ]
  },
  "/coffee/baratza-virtuoso-plus-vs-fellow-ode-gen-2": {
    "batch": 2,
    "products": [
      {
        "query": "Baratza Virtuoso Plus coffee grinder",
        "label": "Baratza Virtuoso+",
        "brand": "Baratza",
        "expectedTitle": "Baratza Virtuoso+ Coffee Grinder",
        "requiredTitleTerms": [
          "Virtuoso+",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "Encore",
          "Sette",
          "Vario"
        ],
        "note": "Digital-timer Virtuoso+, not the original Virtuoso. Weigh output when calibrating a timed dose.",
        "asin": "B07QMY8GLX",
        "model": "Virtuoso+"
      },
      {
        "query": "Fellow Ode Gen 2 coffee grinder standard brew burrs",
        "label": "Fellow Ode Gen 2, standard burrs",
        "brand": "Fellow",
        "expectedTitle": "Fellow Ode Gen 2 Coffee Grinder",
        "requiredTitleTerms": [
          "Ode",
          "Gen 2",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "SSP",
          "Gen 1",
          "Opus"
        ],
        "note": "Complete Gen 2 grinder with standard Gen 2 Brew Burrs, not a burr-only upgrade or SSP configuration. Not for espresso.",
        "asin": "B0BLRMCM9Y",
        "model": "Ode Gen 2"
      }
    ]
  },
  "/coffee/breville-barista-express-vs-delonghi-la-specialista": {
    "batch": 2,
    "products": [
      {
        "query": "Breville Barista Express BES870XL espresso machine",
        "label": "Breville Barista Express BES870XL",
        "brand": "Breville",
        "expectedTitle": "Breville BES870XL Barista Express Espresso Machine",
        "requiredTitleTerms": [
          "BES870XL",
          "Barista Express",
          "Espresso Machine"
        ],
        "forbiddenTitleTerms": [
          "Impress",
          "Pro",
          "Touch",
          "Bambino"
        ],
        "note": "Original BES870XL, not Express Impress or Barista Pro. Confirm US electrical specification and seller warranty.",
        "asin": "B00CH9QWOU",
        "model": "BES870XL"
      },
      {
        "query": "De'Longhi La Specialista EC9335M espresso machine",
        "label": "De'Longhi La Specialista EC9335M",
        "brand": "De'Longhi",
        "expectedTitle": "De'Longhi La Specialista EC9335M Espresso Machine",
        "requiredTitleTerms": [
          "La Specialista",
          "espresso",
          "EC9335M"
        ],
        "forbiddenTitleTerms": [
          "Arte",
          "Evo",
          "Prestigio",
          "Opera",
          "Maestro",
          "Touch"
        ],
        "note": "Legacy EC9335M only. Verify condition, complete accessories, voltage and warranty; newer La Specialista models are not substitutes.",
        "asin": "B07QMWZ6PT",
        "model": "EC9335M"
      }
    ]
  },
  "/coffee/fellow-stagg-ekg-vs-cosori-gooseneck": {
    "batch": 2,
    "products": [
      {
        "query": "Fellow Stagg EKG original electric kettle",
        "label": "Fellow Stagg EKG (original)",
        "brand": "Fellow",
        "expectedTitle": "Fellow Stagg EKG Electric Gooseneck Kettle",
        "requiredTitleTerms": [
          "Stagg EKG",
          "kettle"
        ],
        "forbiddenTitleTerms": [
          "Pro",
          "Studio",
          "EKG Plus",
          "stovetop",
          "Corvo",
          "EKG+"
        ],
        "note": "Original EKG only. Current Pro and Pro Studio models have different features and are not substitutions.",
        "asin": "B077JBQZPX",
        "model": "1137"
      },
      {
        "query": "COSORI CO108-NK electric gooseneck kettle",
        "label": "COSORI CO108-NK",
        "brand": "Cosori",
        "expectedTitle": "Cosori Gooseneck Electric Kettle",
        "requiredTitleTerms": [
          "Gooseneck",
          "Kettle"
        ],
        "forbiddenTitleTerms": [
          "Smart",
          "Bluetooth",
          "WiFi",
          "Wi-Fi"
        ],
        "note": "CO108-NK with five temperature presets, not a smart kettle. Check the US electrical version.",
        "model": "CO108-NK",
        "asin": "B07T1CH2HH"
      }
    ]
  },
  "/coffee/hario-v60-vs-chemex-classic": {
    "batch": 2,
    "products": [
      {
        "query": "HARIO V60 02 plastic clear VD-02T dripper",
        "label": "Hario V60 02 clear plastic dripper",
        "brand": "Hario",
        "expectedTitle": "Hario V60",
        "requiredTitleTerms": [
          "V60",
          "02",
          "plastic",
          "clear",
          "dripper"
        ],
        "forbiddenTitleTerms": [
          "ceramic",
          "metal",
          "glass",
          "01",
          "03",
          "switch"
        ],
        "note": "Clear plastic size 02, model VD-02T. Needs size 02 papers and a stable mug or server. Require returned VD-02T part/model evidence because listing model fields conflict.",
        "model": "VD-02T",
        "asin": "B001RBTSMM"
      },
      {
        "query": "Chemex Six Cup Classic CM-6A coffee maker",
        "label": "Chemex Six Cup Classic CM-6A",
        "brand": "Chemex",
        "expectedTitle": "Chemex Classic",
        "requiredTitleTerms": [
          "Classic",
          "6-Cup"
        ],
        "forbiddenTitleTerms": [
          "8 cup",
          "10 cup",
          "3 cup",
          "glass handle",
          "handblown"
        ],
        "note": "Six-cup Classic carafe, CM-6A. Capacity is 30 US fl oz, not six large mugs.",
        "model": "CM-6A",
        "asin": "B0000YWF5E"
      }
    ]
  },
  "/coffee/timemore-chestnut-c3-vs-kingrinder-k6": {
    "batch": 2,
    "products": [
      {
        "query": "TIMEMORE Chestnut C3 manual coffee grinder",
        "label": "Timemore Chestnut C3 (standard)",
        "brand": "TIMEMORE",
        "expectedTitle": "TIMEMORE Chestnut C3",
        "requiredTitleTerms": [
          "Chestnut",
          "C3",
          "grinder"
        ],
        "forbiddenTitleTerms": [
          "C3S",
          "C3 S",
          "Pro",
          "ESP",
          "C2",
          "C5",
          "grinder handle",
          "handle only",
          "spare handle",
          "replacement crank",
          "burr set",
          "catch cup",
          "carrying case"
        ],
        "note": "Standard C3 with classic internal adjustment. Do not substitute C3S, Pro or ESP editions."
      },
      {
        "query": "KINGrinder K6 manual coffee grinder",
        "label": "KINGrinder K6, straight handle silver",
        "brand": "KINGrinder",
        "expectedTitle": "KINGrinder K6",
        "requiredTitleTerms": [
          "K6",
          "grinder",
          "straight handle"
        ],
        "forbiddenTitleTerms": [
          "K4",
          "K2",
          "K7"
        ],
        "note": "Complete K6 grinder with external adjustment, not another K-series model or a replacement part. The pinned current catalog identity has a straight handle and silver finish.",
        "asin": "B0GKFDZ725"
      }
    ]
  },

  // Batch 3: mappings are added after primary-source identity review.
  '/beauty/revlon-one-step-vs-loreal-steampod': { batch: 3, products: [
    { query: 'Revlon One-Step Volumizer PLUS 2.4 inch US', label: 'Revlon One-Step Volumizer PLUS', accessoryOnlyTitleTerms: ['case', 'cases', 'stand', 'stands', 'charger', 'chargers', 'cable', 'cables', 'holder', 'cover', 'pouch', 'bag', 'dock', 'adapter'], brand: 'REVLON', expectedTitle: 'Revlon One Step Volumizer Plus', requiredTitleTerms: ['Volumizer', 'PLUS', '2.4'], forbiddenTitleTerms: ['Air Straight', '220V', '240V', '220 V', '240 V', '220 volt', '240 volt', 'head only', 'replacement head'], note: 'PLUS with the 2.4-inch oval head, not the original Volumizer or Air Straight. Confirm US electrical compatibility. SteamPod remains linked to its official US source in the article.' },
  ] },
  '/beauty/nuface-trinity-vs-solawave-wand': { batch: 3, products: [
    { query: 'NuFACE TRINITY+ Starter Kit', label: 'NuFACE TRINITY+ Starter Kit', accessoryOnlyTitleTerms: ['case', 'cases', 'stand', 'stands', 'charger', 'chargers', 'cable', 'cables', 'holder', 'cover', 'pouch', 'bag', 'dock', 'adapter'], brand: 'NuFACE', expectedTitle: 'NuFACE Trinity+ Starter Kit', requiredTitleTerms: ['Trinity+', 'Starter Kit'], forbiddenTitleTerms: ['Complete', 'Mini', 'FIX', 'refill', 'attachment only'], note: 'TRINITY+ Starter Kit, not Classic Trinity or Complete. Check the included activator and read the exact device manual before buying.' },
    { query: 'Solawave Radiant Renewal 4 in 1 Skincare Wand', label: 'Solawave Radiant Renewal 4-in-1 Wand', accessoryOnlyTitleTerms: ['case', 'cases', 'stand', 'stands', 'charger', 'chargers', 'cable', 'cables', 'holder', 'cover', 'pouch', 'bag', 'dock', 'adapter'], brand: 'Solawave', expectedTitle: 'Solawave Radiant Renewal Skincare Wand', requiredTitleTerms: ['Radiant Renewal', '4-in-1', 'Wand'], forbiddenTitleTerms: ['Advanced', 'mini', 'mask', 'serum only', 'charger only'], note: 'Radiant Renewal generation, not the earlier Advanced wand. Check the full 12-minute routine and contraindications; serum may be separate.' },
  ] },
  '/beauty/laneige-lip-sleeping-mask-vs-rhode-peptide': { batch: 3, products: [
    { query: 'LANEIGE Lip Sleeping Mask Berry 20g', label: 'Laneige Lip Sleeping Mask, Berry 20g', brand: 'LANEIGE', expectedTitle: 'LANEIGE Lip Sleeping Mask Berry', requiredTitleTerms: ['Berry', '20g'], forbiddenTitleTerms: ['Vanilla', 'Gummy', 'Candy', 'Grapefruit', 'mini', 'set', 'pack', 'duo', 'topper', 'holder', 'applicator'], note: 'Standard Berry 20g jar only. If the returned title does not establish the flavor and size, the card remains a search link. Rhode is official-store-first in the article.' },
  ] },
  '/books/genre-fiction/best-historical-epics-2026': { batch: 3, books: [
    { title: 'The Pillars of the Earth', author: 'Ken Follett' },
    { title: 'Shōgun', author: 'James Clavell', asin: '1982537523' },
    { title: 'Lonesome Dove', author: 'Larry McMurtry' },
    { title: 'The Covenant of Water', author: 'Abraham Verghese' },
    { title: 'Wolf Hall', author: 'Hilary Mantel' },
  ] },
  '/books/genre-fiction/best-new-spy-thriller-books-2026': { batch: 3, books: [
    { title: 'The Taper Man', author: 'Nick Harkaway' },
    { title: 'Icarus 17', author: 'Charles Cumming' },
    { title: 'Ransom', author: 'Daniel Silva' },
  ] },
  '/beauty/dyson-airstrait-vs-ghd-duet-style': { batch: 3, products: [
    { query: 'Dyson Airstrait straightener US 120V', label: 'Dyson Airstrait', brand: 'Dyson', expectedTitle: 'Dyson Airstrait straightener', requiredTitleTerms: ['Airstrait', 'straightener'], forbiddenTitleTerms: ['Airwrap', 'Corrale', '220V', '240V', '220 V', '240 V', '220 volt', '240 volt', 'case', 'stand', 'holder', 'filter'], note: 'Airstrait, not Airwrap or Corrale. Confirm the selected US electrical version and seller support before buying.' },
    { query: 'ghd Duet Style 2 in 1 hot air styler US', label: 'ghd Duet Style', brand: 'ghd', expectedTitle: 'ghd Duet Style styler', requiredTitleTerms: ['Duet Style', 'styler'], forbiddenTitleTerms: ['Blowdry', '220V', '240V', '220 V', '240 V', '220 volt', '240 volt', 'case', 'stand', 'holder'], note: 'Duet Style, not the Duet Blowdry brush. US version is not universal voltage; Shine Shot is for fully dry hair only.' },
  ] },
  '/beauty/dyson-airwrap-vs-shark-flexstyle': { batch: 3, products: [
    { query: 'Dyson Airwrap i.d. Straight Wavy multi styler', label: 'Dyson Airwrap i.d. Straight+Wavy', accessoryOnlyTitleTerms: ['case', 'cases', 'stand', 'stands', 'charger', 'chargers', 'cable', 'cables', 'holder', 'cover', 'pouch', 'bag', 'dock', 'adapter'], brand: 'Dyson', expectedTitle: 'Dyson Airwrap i d multi styler dryer Straight+Wavy', requiredTitleTerms: ['i.d.', 'Straight', 'Wavy'], forbiddenTitleTerms: ['Co-anda2x', 'Origin', 'Curly', 'Coily', '220V', '240V', '220 V', '240 V', '220 volt', '240 volt'], note: 'The i.d. Straight+Wavy kit. Verify the selected color and included tools against the article; do not substitute Origin, Complete or Co-anda2x.' },
    { query: 'Shark FlexStyle HD430 hair styling system', label: 'Shark FlexStyle HD430', accessoryOnlyTitleTerms: ['case', 'cases', 'stand', 'stands', 'charger', 'chargers', 'cable', 'cables', 'holder', 'cover', 'pouch', 'bag', 'dock', 'adapter'], brand: 'Shark', model: 'HD430', expectedTitle: 'Shark FlexStyle styling system', requiredTitleTerms: ['HD430'], forbiddenTitleTerms: ['IonCurl', 'Glam', 'HD435', 'HD440', '220V', '240V', '220 V', '240 V', '220 volt', '240 volt'], note: 'Original US HD430: two directional curlers, oval brush, paddle brush and concentrator. A diffuser is not included in this kit.' },
  ] },
  '/books/best-mark-manson-books': { batch: 3, books: [
    { title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson' },
    { title: 'Everything Is F*cked', author: 'Mark Manson' },
    { title: 'Models', author: 'Mark Manson' },
    { title: 'Will', author: 'Will Smith' },
    { title: 'The Subtle Art of Not Giving a F*ck Journal', author: 'Mark Manson' },
  ] },
}
