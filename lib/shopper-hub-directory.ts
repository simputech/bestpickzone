import { buyingGuides } from './buying-guide-data'
import { coffeeComparisonArticles, wfhComparisonArticles } from './comparison-html-articles'

// Existing article destinations, grouped by the decision each guide helps resolve.
export const shopperHubDirectory = {
  "coffee": [
    {
      "id": "fit",
      "title": "Counter space and accessory fit",
      "note": "Measure the cabinet opening and drip tray, then match accessories to the exact machine.",
      "items": [
        {
          "href": "/coffee/best-espresso-grinders-gaggia-classic-pro",
          "title": "Best Espresso Grinders for the Gaggia Classic Pro: Dialing In Without the Guesswork"
        },
        {
          "href": "/coffee/best-bottomless-portafilters-gaggia-classic-pro",
          "title": "Best Bottomless Portafilters for the Gaggia Classic Pro: Fit, Baskets, and What to Buy"
        },
        {
          "href": "/coffee/best-espresso-grinders-for-breville-bambino",
          "title": "Best Espresso Grinders for the Breville Bambino and Bambino Plus"
        },
        {
          "href": "/coffee/best-low-profile-espresso-scales",
          "title": "Best Low-Profile Espresso Scales for Small Drip Trays"
        },
        {
          "href": "/coffee/best-coffee-makers-for-low-cabinets",
          "title": "Best Coffee Makers for Low Kitchen Cabinets"
        },
        {
          "href": "/coffee/complete-small-kitchen-home-coffee-bar-setup",
          "title": "Complete Small-Kitchen Home Coffee Bar Setup"
        },
        {
          "href": "/coffee/what-to-buy-with-your-breville-bambino-plus",
          "title": "What to Buy With Your Breville Bambino Plus"
        },
        {
          "href": "/coffee/best-gaggia-classic-pro-upgrades",
          "title": "Best Gaggia Classic Pro Upgrades"
        }
      ]
    },
    {
      "id": "espresso",
      "title": "Espresso machines and grinders",
      "note": "Compare the steps for grinding, pulling a shot, steaming milk, and cleaning up.",
      "items": [
        {
          "href": "/coffee/best-used-breville-espresso-machines-ebay",
          "title": "Best Used Breville Espresso Machines on eBay in 2026"
        },
        {
          "href": "/coffee/breville-bambino-plus-vs-gaggia-classic-pro",
          "title": "Breville Bambino Plus vs Gaggia Classic Pro"
        },
        {
          "href": "/coffee/breville-barista-express-vs-delonghi-la-specialista",
          "title": "Breville Barista Express vs De'Longhi La Specialista"
        },
        {
          "href": "/coffee/baratza-encore-esp-vs-fellow-opus-2",
          "title": "Baratza Encore ESP vs Fellow Opus 2"
        }
      ]
    },
    {
      "id": "brewing",
      "title": "Filter coffee, manual brewing, and scales",
      "note": "Choose for your usual batch size, preferred brewing method, and willingness to grind by hand.",
      "items": [
        {
          "href": "/coffee/best-burr-grinders-french-press-cold-brew",
          "title": "Best Electric Burr Grinders for French Press and Cold Brew"
        },
        {
          "href": "/coffee/1zpresso-jx-pro-vs-comandante-c40",
          "title": "1Zpresso JX-Pro vs Comandante C40"
        },
        {
          "href": "/coffee/timemore-chestnut-c3-vs-kingrinder-k6",
          "title": "Timemore Chestnut C3 vs Kingrinder K6"
        },
        {
          "href": "/coffee/fellow-stagg-ekg-vs-cosori-gooseneck",
          "title": "Fellow Stagg EKG vs Cosori Gooseneck Kettle"
        },
        {
          "href": "/coffee/hario-v60-vs-chemex-classic",
          "title": "Hario V60 vs Chemex"
        },
        {
          "href": "/coffee/aeropress-original-vs-aeropress-premium",
          "title": "AeroPress Original vs AeroPress Premium"
        },
        {
          "href": "/coffee/baratza-virtuoso-plus-vs-fellow-ode-gen-2",
          "title": "Baratza Virtuoso+ vs Fellow Ode Gen 2"
        },
        {
          "href": "/coffee/acaia-lunar-vs-timemore-black-mirror-nano",
          "title": "Acaia Lunar vs Timemore Black Mirror Nano"
        }
      ]
    },
    {
      "id": "used",
      "title": "Vintage and used equipment",
      "note": "Check condition, missing parts, and repair plans before comparing the asking price.",
      "items": [
        {
          "href": "/coffee/best-vintage-coffee-grinders-ebay",
          "title": "Best Vintage Coffee Grinders on eBay"
        }
      ]
    }
  ],
  "wfh": [
    {
      "id": "displays",
      "title": "Screens, docks, and video calls",
      "note": "Start with the exact laptop, screen connections, available desk depth, and where each light can sit.",
      "items": [
        {
          "href": "/wfh/best-monitor-arms-for-shallow-desks",
          "title": "Best Monitor Arms for Shallow Desks Against a Wall"
        },
        {
          "href": "/wfh/best-usb-c-docks-for-two-monitors",
          "title": "Best USB-C Docks for Two External Monitors: Check Your Laptop Before Buying"
        },
        {
          "href": "/wfh/best-video-call-lighting-for-glasses",
          "title": "Best Video-Call Lighting for People Who Wear Glasses"
        },
        {
          "href": "/wfh/standing-desk-setup-for-dual-monitor-ultrawide-workflow",
          "title": "Standing Desk Setup for a Dual-Monitor Ultrawide Workflow"
        },
        {
          "href": "/wfh/ergotron-lx-vs-amazon-basics-monitor-arm",
          "title": "Ergotron LX vs Amazon Basics Monitor Arm"
        },
        {
          "href": "/wfh/best-portable-monitors-under-100-ebay",
          "title": "Best Portable Monitors Under $100 on eBay"
        }
      ]
    },
    {
      "id": "seating",
      "title": "Chairs and seating",
      "note": "Compare adjustment ranges, seat dimensions, condition, and return terms; a product label cannot establish personal fit.",
      "items": [
        {
          "href": "/wfh/best-ergonomic-chairs-for-sciatica-and-lower-back-pain",
          "title": "Best Ergonomic Chairs for Sciatica & Lower Back Pain"
        },
        {
          "href": "/wfh/herman-miller-aeron-vs-steelcase-gesture",
          "title": "Herman Miller Aeron vs Steelcase Gesture"
        },
        {
          "href": "/wfh/best-used-herman-miller-aeron-chairs-ebay",
          "title": "Best Used Herman Miller Aeron Chairs on eBay"
        },
        {
          "href": "/wfh/secretlab-titan-evo-vs-ergotune-supreme",
          "title": "Secretlab Titan Evo vs Ergotune Supreme"
        },
        {
          "href": "/wfh/autonomous-ergochair-pro-vs-hinomi-h1-pro",
          "title": "Autonomous ErgoChair Pro vs Hinomi H1 Pro"
        },
        {
          "href": "/wfh/purple-royal-seat-cushion-vs-cushion-lab",
          "title": "Purple Royal Seat Cushion vs Cushion Lab"
        }
      ]
    },
    {
      "id": "desk",
      "title": "Desks and daily controls",
      "note": "Choose around the space you have and the tasks you repeat: typing, pointing, switching devices, or adjusting desk height.",
      "items": [
        {
          "href": "/wfh/best-products-for-your-home-office",
          "title": "The Best Products for Your Home Office"
        },
        {
          "href": "/wfh/fully-jarvis-vs-uplift-v2-standing-desk",
          "title": "Fully Jarvis vs Uplift V2 Standing Desk"
        },
        {
          "href": "/wfh/logitech-mx-master-3s-vs-apple-magic-mouse",
          "title": "Logitech MX Master 3S vs Apple Magic Mouse"
        },
        {
          "href": "/wfh/logitech-mx-keys-s-vs-apple-magic-keyboard",
          "title": "Logitech MX Keys S vs Apple Magic Keyboard"
        },
        {
          "href": "/wfh/vari-desk-converter-vs-vivo-desk-riser",
          "title": "VariDesk Converter vs Vivo Desk Riser"
        },
        {
          "href": "/wfh/elgato-stream-deck-mk2-vs-logitech-mx-creative-console",
          "title": "Elgato Stream Deck MK.2 vs Logitech MX Creative Console"
        }
      ]
    }
  ],
  "home-kitchen": [
    {
      "id": "appliances",
      "title": "Kitchen appliances",
      "note": "Compare cooking method, usable capacity, operating space, and the cleaning routine before adding another appliance.",
      "items": [
        {
          "href": "/home-kitchen/is-ge-opal-2-0-nugget-ice-maker-worth-it",
          "title": "Is the GE Opal 2.0 Nugget Ice Maker Worth It? (2026)"
        },
        {
          "href": "/home-kitchen/best-air-fryers",
          "title": "Best Air Fryers in 2026"
        },
        {
          "href": "/home-kitchen/best-vintage-countertop-milkshake-machines-ebay",
          "title": "Best Vintage Countertop Milkshake Machines on eBay"
        },
        {
          "href": "/home-kitchen/best-coffee-makers-under-100",
          "title": "Best Coffee Makers Under $100 in 2026"
        },
        {
          "href": "/home-kitchen/instant-pot-vs-ninja-foodi",
          "title": "Instant Pot vs Ninja Foodi: Which Is Better?"
        }
      ]
    },
    {
      "id": "accessories",
      "title": "Attachments and kitchen tools",
      "note": "Check the model number and storage space first. Choose an accessory for a task you already do.",
      "items": [
        {
          "href": "/home-kitchen/kitchenaid-pasta-roller-vs-pasta-press",
          "title": "KitchenAid Pasta Roller vs. Pasta Press: Which Attachment Should You Buy?"
        },
        {
          "href": "/home-kitchen/best-pizza-peels-ooni-koda-12",
          "title": "Best Pizza Peels for the Ooni Koda 12: Launching vs. Turning"
        },
        {
          "href": "/home-kitchen/ninja-creami-containers-compatibility",
          "title": "Which Ninja CREAMi Containers Fit Your Machine? Original, Deluxe, and Swirl Compared"
        },
        {
          "href": "/home-kitchen/best-kitchenaid-attachments-worth-buying",
          "title": "Best KitchenAid Attachments Worth Buying (2026)"
        },
        {
          "href": "/home-kitchen/best-air-fryer-accessories",
          "title": "Best Air Fryer Accessories (2026)"
        },
        {
          "href": "/home-kitchen/oxo-vs-chefn-corn-stripper",
          "title": "OXO vs Chef'n Corn Stripper"
        },
        {
          "href": "/home-kitchen/oxo-vs-fullstar-avocado-slicer",
          "title": "OXO vs Fullstar Avocado Slicer"
        }
      ]
    },
    {
      "id": "dorm",
      "title": "Dorm rooms and study spaces",
      "note": "Check room rules, supplied furniture, bedding dimensions, and shared items before building your shopping list.",
      "items": [
        {
          "href": "/home-kitchen/best-products-for-your-dorm-room",
          "title": "Best Products for Your Dorm Room (2026)"
        },
        {
          "href": "/home-kitchen/best-dorm-room-essentials",
          "title": "Best Dorm Room Essentials for College (2026)"
        },
        {
          "href": "/home-kitchen/best-study-desk-essentials",
          "title": "Best Study Desk Essentials for Students (2026)"
        },
        {
          "href": "/home-kitchen/best-productivity-products-for-students",
          "title": "Best Productivity Products for Students (2026)"
        },
        {
          "href": "/home-kitchen/best-tech-for-college-students",
          "title": "Best Tech for College Students (2026)"
        },
        {
          "href": "/home-kitchen/best-back-to-school-gadgets",
          "title": "Best Back-to-School Gadgets (2026)"
        },
        {
          "href": "/home-kitchen/best-dorm-organization-products",
          "title": "Best Dorm Organization Products (2026)"
        }
      ]
    },
    {
      "id": "outdoors",
      "title": "Outdoor cooking and gatherings",
      "note": "Plan where equipment will be used, how it will be carried, and where it will be stored after the season.",
      "items": [
        {
          "href": "/home-kitchen/ooni-vs-gozney-best-outdoor-pizza-oven",
          "title": "Ooni vs Gozney: Best Outdoor Pizza Oven for Your Setup (2026)"
        },
        {
          "href": "/home-kitchen/best-picnic-essentials",
          "title": "Best Picnic Essentials (2026)"
        },
        {
          "href": "/home-kitchen/best-products-for-your-backyard",
          "title": "Best Products for Your Backyard (2026)"
        }
      ]
    },
    {
      "id": "home",
      "title": "Home, family, and travel",
      "note": "Match the purchase to the room, surface, passenger, or season it needs to serve.",
      "items": [
        {
          "href": "/home-kitchen/best-fall-clothes-for-couples",
          "title": "Best Fall Clothes for Couples (2026)"
        },
        {
          "href": "/home-kitchen/best-halloween-candy-deals-on-amazon",
          "title": "Best Halloween Candy Deals on Amazon (2026)"
        },
        {
          "href": "/home-kitchen/best-car-cleaning-products",
          "title": "Best Car Cleaning Products (2026)"
        },
        {
          "href": "/home-kitchen/best-pet-travel-products",
          "title": "Best Pet Travel Products (2026)"
        },
        {
          "href": "/home-kitchen/best-solar-powered-attic-fans",
          "title": "Best Solar-Powered Attic Fans"
        },
        {
          "href": "/home-kitchen/best-kids-fort-for-girls-2026",
          "title": "Best Kids Fort for Girls in 2026"
        },
        {
          "href": "/home-kitchen/best-robot-vacuums",
          "title": "Best Robot Vacuums in 2026"
        }
      ]
    }
  ]
}

// Keep the existing automatic discovery of newly registered guides after the curated groups.
export function getShopperHubDirectory(key: keyof typeof shopperHubDirectory) {
  const groups = shopperHubDirectory[key]
  const linked = new Set(groups.flatMap(group => group.items.map(item => item.href)))
  const comparisons = key === 'coffee' ? coffeeComparisonArticles : key === 'wfh' ? wfhComparisonArticles : []
  const candidates = [...buyingGuides.filter(guide => guide.silo === key), ...comparisons]
  const items = candidates.flatMap(guide => {
    const href = 'path' in guide && guide.path ? guide.path : `/${key}/${guide.slug}`
    if (linked.has(href)) return []
    linked.add(href)
    return [{ href, title: guide.title }]
  })
  return items.length ? [...groups, { id: 'more-guides', title: 'More buying guides', note: 'Explore another equipment or setup choice.', items }] : groups
}
