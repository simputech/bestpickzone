export const dealGuides = [
  { slug: "breville-bambino-deals", product: "Breville Bambino" },
  { slug: "ninja-creami-deals", product: "Ninja CREAMi" },
  { slug: "kitchenaid-stand-mixer-deals", product: "KitchenAid stand mixer" },
  { slug: "ooni-koda-12-deals", product: "Ooni Koda 12" },
  {
    slug: "dyson-airwrap-refurbished-deals",
    product: "Dyson Airwrap refurbished",
  },
  { slug: "baratza-encore-esp-deals", product: "Baratza Encore ESP" },
  { slug: "elgato-stream-deck-mk2-deals", product: "Elgato Stream Deck MK.2" },
  { slug: "kindle-paperwhite-deals", product: "Kindle Paperwhite" },
  { slug: "airpods-pro-deals", product: "Apple AirPods Pro" },
  { slug: "lego-millennium-falcon-deals", product: "LEGO Millennium Falcon" },
];
export const findGuide = (slug: string) =>
  dealGuides.find((g) => g.slug === slug);
