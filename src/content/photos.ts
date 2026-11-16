/**
 * Central photo registry. Every image used on the site is referenced by key here,
 * so the resort team can swap in Orwood's own photography by replacing files in
 * /public/images while keeping the same names (or editing the paths below).
 */
export type PhotoAsset = { src: string; alt: string };

export const photos = {
  heroDelta: {
    src: "/images/hero-delta-sunset.jpg",
    alt: "Aerial view of boats on a calm Delta waterway at sunset",
  },
  marinaAerial: {
    src: "/images/marina-aerial-twilight.jpg",
    alt: "Aerial view of a marina with boats docked at twilight",
  },
  coastalAerial: {
    src: "/images/coastal-aerial-sunset.jpg",
    alt: "Aerial view of wetlands and boats moored at sunset",
  },
  deltaRiverAerial: {
    src: "/images/delta-river-aerial.jpg",
    alt: "Aerial view of a winding river meeting the bay at twilight",
  },
  launchRamp: {
    src: "/images/launch-ramp-suv.jpg",
    alt: "A boat being launched down a ramp into the river",
  },
  boatTrailer: {
    src: "/images/boat-trailer-lakeside.jpg",
    alt: "A boat on a trailer beside a tranquil waterside",
  },
  wakeboard: {
    src: "/images/wakeboard-lake.jpg",
    alt: "A wakeboarder carving across the water",
  },
  wakeAerial: {
    src: "/images/wake-aerial-trick.jpg",
    alt: "A rider performing an aerial trick above the water",
  },
  speedboat: {
    src: "/images/speedboat-sunset.jpg",
    alt: "A speedboat cruising across open water at sunset",
  },
  fishing: {
    src: "/images/fishing-sunrise-river.jpg",
    alt: "An angler on a river at sunrise",
  },
  rvWater: {
    src: "/images/rv-by-water.jpg",
    alt: "An RV parked near the water on a bright day",
  },
  rvSeashore: {
    src: "/images/rv-seashore.jpg",
    alt: "Trees and a camper at a shoreline campground",
  },
  rvString: {
    src: "/images/rv-string-lights.jpg",
    alt: "Campers and trailers on grass under festive string lights",
  },
  steak: {
    src: "/images/steak-dinner.jpg",
    alt: "A plated steak dinner with sides in a warm dining room",
  },
  grilledSteak: {
    src: "/images/grilled-steak-outdoor.jpg",
    alt: "A grilled steak dinner served outdoors in the sunshine",
  },
  diningTable: {
    src: "/images/dining-wine-table.jpg",
    alt: "A dinner table with wine and plated dishes",
  },
  patio: {
    src: "/images/waterside-patio.jpg",
    alt: "A waterside patio with trees and calm water beyond",
  },
  group: {
    src: "/images/group-dining-bar.jpg",
    alt: "A group of friends enjoying a meal together",
  },
  restaurantWood: {
    src: "/images/restaurant-interior-wood.jpg",
    alt: "Restaurant interior with a wooden ceiling and warm decor",
  },
  dryDock: {
    src: "/images/dry-dock-boats.jpg",
    alt: "Rows of boats in dry storage beneath a blue sky",
  },
  boatRows: {
    src: "/images/boats-rows-grass.jpg",
    alt: "Boats lined up in neat rows on dry grass",
  },
  storeCounter: {
    src: "/images/store-counter.jpg",
    alt: "A shopper at a general store checkout counter",
  },
  garden: {
    src: "/images/garden-party-food.jpg",
    alt: "Guests serving food at an outdoor garden party",
  },
  familyBbq: {
    src: "/images/family-bbq.jpg",
    alt: "A family gathered around an outdoor barbecue",
  },
  grilling: {
    src: "/images/grilling-outdoors.jpg",
    alt: "A young cook grilling food outdoors at a family gathering",
  },
  marinaYachts: {
    src: "/images/marina-yachts.jpg",
    alt: "Yachts and boats moored at a marina under clear skies",
  },
  marinaSailboats: {
    src: "/images/marina-sailboats.jpg",
    alt: "Boats moored in a busy marina beside green trees",
  },
  riverDusk: {
    src: "/images/river-dusk-pampas.jpg",
    alt: "Tall grasses on a riverbank at dusk",
  },
  marsh: {
    src: "/images/marsh-reeds.jpg",
    alt: "Golden reeds reflected in calm marsh water",
  },
  houseboat: {
    src: "/images/houseboat-deck-couple.jpg",
    alt: "A couple standing on a houseboat deck beside the water",
  },
} satisfies Record<string, PhotoAsset>;

export type PhotoKey = keyof typeof photos;
