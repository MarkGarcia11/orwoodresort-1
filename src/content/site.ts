/**
 * Single source of truth for Orwood Resort's business information.
 * Operational details that change often (hours, storage rates, availability,
 * specials, events) live here so they can be updated in one place — and later
 * connected to a CMS without touching page components.
 *
 * Items marked VERIFY should be confirmed with the resort team before launch.
 */
import { photos, type PhotoAsset } from "./photos";

export type ThemeKey =
  | "brand"
  | "marina"
  | "sports"
  | "fishing"
  | "camp"
  | "dining"
  | "store"
  | "storage"
  | "events";

export const site = {
  name: "Orwood Resort",
  tagline: "Where the Delta Feels Like Home.",
  description:
    "A family-run waterfront destination on the California Delta in Brentwood, with a three-lane boat launch, marina and gas docks, Bar & Grill, General Store, RV camping, and boat and RV storage.",
  established: 1955, // VERIFY: from public business listings; confirm with Lynne
  city: "Brentwood",
  region: "CA",
  postalCode: "94513",
  street: "4451 Orwood Road",
  fullAddress: "4451 Orwood Road, Brentwood, CA 94513",
  phone: {
    main: { label: "Main resort", display: "(925) 634-7181", tel: "+19256347181" },
    restaurant: { label: "Bar & Grill", display: "(925) 634-2550", tel: "+19256342550" },
    store: { label: "General Store", display: "(925) 634-6812", tel: "+19256346812" },
  },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=4451+Orwood+Road%2C+Brentwood%2C+CA+94513",
  mapViewUrl:
    "https://www.google.com/maps/search/?api=1&query=4451+Orwood+Road%2C+Brentwood%2C+CA+94513",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=4451+Orwood+Road,+Brentwood,+CA+94513&t=&z=14&ie=UTF8&iwloc=&output=embed",
  // Add official social profiles here once supplied. None are published in this build.
  socialProfiles: [] as { label: string; href: string }[],
};

export const telHref = (key: keyof typeof site.phone) => `tel:${site.phone[key].tel}`;

/* ------------------------------------------------------------------ */
/* Bar & Grill hours — VERIFY before launch (current public listings) */
/* ------------------------------------------------------------------ */
export const restaurantHours = [
  { day: "Monday", hours: "8:00 AM – 3:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 3:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 3:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 8:30 PM" },
  { day: "Friday", hours: "8:00 AM – 9:00 PM" },
  { day: "Saturday", hours: "7:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "7:00 AM – 8:00 PM" },
];

export const hoursNote =
  "Hours shown are current public listings. Holiday and seasonal changes apply, so please call the Bar & Grill before you visit.";

/* ------------------------------------------------------------------ */
/* Business categories — each has its own identity, theme and imagery */
/* ------------------------------------------------------------------ */
export type Category = {
  slug: string;
  number: string;
  title: string;
  short: string;
  summary: string;
  href: string;
  theme: ThemeKey;
  photo: PhotoAsset;
};

export const categories: Category[] = [
  {
    slug: "marina",
    number: "01",
    title: "Marina & Boat Launch",
    short: "Marina & Launch",
    summary:
      "A three-lane launch ramp, gas and courtesy docks, and everything you need to start a day on the water.",
    href: "/marina",
    theme: "marina",
    photo: photos.marinaAerial,
  },
  {
    slug: "water-sports",
    number: "02",
    title: "Water Sports",
    short: "Water Sports",
    summary:
      "Wakeboarding and water skiing on the Delta, with channels close at hand and room to ride.",
    href: "/water-sports",
    theme: "sports",
    photo: photos.wakeboard,
  },
  {
    slug: "rv-camping",
    number: "03",
    title: "RV Camping",
    short: "RV Camping",
    summary:
      "Park your rig near the water, with a sandy beach, restrooms and the resort's dining and store close by.",
    href: "/rv-camping",
    theme: "camp",
    photo: photos.rvWater,
  },
  {
    slug: "bar-grill",
    number: "04",
    title: "Bar & Grill",
    short: "Bar & Grill",
    summary:
      "Breakfast, lunch and dinner on the patio or inside, with a full bar and familiar favorites for every appetite.",
    href: "/bar-grill",
    theme: "dining",
    photo: photos.grilledSteak,
  },
  {
    slug: "fishing",
    number: "05",
    title: "Fishing",
    short: "Fishing",
    summary:
      "Launch at dawn and fish the Delta's sloughs and channels, then refuel, rest and tell the tale over a meal.",
    href: "/fishing",
    theme: "fishing",
    photo: photos.fishing,
  },
  {
    slug: "storage",
    number: "06",
    title: "Boat & RV Storage",
    short: "Boat & RV Storage",
    summary:
      "Secure, gated storage for boats, trailers and RVs, so your next trip is always ready to go.",
    href: "/storage",
    theme: "storage",
    photo: photos.dryDock,
  },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */
export type NavGroup = {
  key: string;
  label: string;
  heading: string;
  description: string;
  overviewHref: string;
  photo: PhotoAsset;
  items: { label: string; href: string; desc: string }[];
};

export const navGroups: NavGroup[] = [
  {
    key: "recreation",
    label: "Recreation",
    heading: "Time on the water",
    description: "Launch, ride, fish or stay a little longer on the Delta.",
    overviewHref: "/marina",
    photo: photos.speedboat,
    items: [
      { label: "Marina & Boat Launch", href: "/marina", desc: "Three-lane ramp, docks and fuel" },
      { label: "Water Sports", href: "/water-sports", desc: "Wakeboarding and water skiing" },
      { label: "Fishing", href: "/fishing", desc: "Delta sloughs and channels" },
      { label: "RV Camping", href: "/rv-camping", desc: "Sites near the water" },
    ],
  },
  {
    key: "dining",
    label: "Dining & Services",
    heading: "Eat, shop and store",
    description: "Good food, everyday essentials and secure space for your boat or RV.",
    overviewHref: "/bar-grill",
    photo: photos.patio,
    items: [
      { label: "Bar & Grill", href: "/bar-grill", desc: "Breakfast, lunch and dinner" },
      { label: "General Store", href: "/general-store", desc: "Snacks, drinks and essentials" },
      { label: "Boat & RV Storage", href: "/storage", desc: "Indoor and outdoor storage" },
      { label: "Events & Parties", href: "/events", desc: "Celebrations and group dining" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Storage — VERIFY rates, door sizes and availability before launch  */
/* ------------------------------------------------------------------ */
export const storageOptions = [
  {
    type: "Indoor boat storage",
    unitSize: "12 ft × 30 ft, up to 60 ft in length",
    doorSize: "Confirm with our office",
    monthlyRate: "Call for current rate",
    availability: "Call to check openings",
  },
  {
    type: "Outdoor boat & trailer storage",
    unitSize: "Sized to your boat and trailer",
    doorSize: "Not applicable",
    monthlyRate: "Call for current rate",
    availability: "Call to check openings",
  },
  {
    type: "RV & trailer storage",
    unitSize: "Sized to your RV, call for dimensions",
    doorSize: "Not applicable",
    monthlyRate: "Call for current rate",
    availability: "Call to check openings",
  },
];

export const storageFeatures = [
  "Indoor storage with individually enclosed units",
  "Outdoor storage for boats, trailers and RVs",
  "Gated facility with a locked gate and cameras",
  "Concrete pads for stable, level parking",
  "Individual lighting for every unit",
  "Free weekday launching for stored boats, where applicable",
];

/* ------------------------------------------------------------------ */
/* RV camping                                                          */
/* ------------------------------------------------------------------ */
export const campingAmenities = [
  { title: "Wet berths", text: "Dock your boat close to your campsite." },
  { title: "Fuel dock", text: "Refuel before or after your time on the water." },
  { title: "General Store", text: "Snacks, drinks and everyday essentials on site." },
  { title: "Bar & Grill", text: "Breakfast, lunch and dinner steps from your site." },
  { title: "Restrooms", text: "Clean, convenient facilities throughout the park." },
  { title: "Sandy beach", text: "A place to wade, relax and watch the boats go by." },
];

/* ------------------------------------------------------------------ */
/* FAQ — also used for FAQPage structured data                         */
/* ------------------------------------------------------------------ */
export type FaqItem = { q: string; a: string };
export type FaqGroup = { title: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "Getting here",
    items: [
      {
        q: "Where is Orwood Resort?",
        a: "We're at 4451 Orwood Road, Brentwood, CA 94513, on the California Delta. Visitors arrive by car or by boat.",
      },
      {
        q: "Can I arrive by boat?",
        a: "Yes. Orwood is a waterfront destination, so you can dock for a meal or fuel up. Call the main resort ahead to check current dock and fuel availability.",
      },
    ],
  },
  {
    title: "Boat launch & marina",
    items: [
      {
        q: "How many launch lanes are there?",
        a: "Our boat launch ramp has three lanes, so there's room to launch and retrieve your boat.",
      },
      {
        q: "What does it cost to launch?",
        a: "Launch fees are confirmed by our team. Call the main resort at (925) 634-7181 for the current fee and opening information.",
      },
      {
        q: "Do you have a fuel dock?",
        a: "Yes, we have a fuel dock for boaters. Call the main resort for current fuel dock hours before you travel.",
      },
    ],
  },
  {
    title: "RV camping",
    items: [
      {
        q: "Do I need a reservation for RV camping?",
        a: "We recommend reserving ahead, especially on summer weekends. We don't offer real-time online booking, so send an inquiry or call to check availability.",
      },
      {
        q: "Do sites have water and electricity?",
        a: "Water and electric hookups are available at designated sites. Tell us your rig size and needs when you call so we can match you with the right site.",
      },
    ],
  },
  {
    title: "Dining",
    items: [
      {
        q: "What are the Bar & Grill hours?",
        a: "Our current hours are listed on the Bar & Grill page. Holiday and seasonal changes apply, so please call (925) 634-2550 to confirm before you visit.",
      },
      {
        q: "Do you offer takeout?",
        a: "Yes. Call the Bar & Grill ahead at (925) 634-2550 to place a takeout order.",
      },
      {
        q: "Can you host a group meal or party?",
        a: "Absolutely. Use our Events & Parties inquiry form, or call the Bar & Grill to talk through your group's needs.",
      },
    ],
  },
  {
    title: "Storage",
    items: [
      {
        q: "What kinds of storage do you offer?",
        a: "We offer indoor boat storage, outdoor boat and trailer storage, and RV and trailer storage. Availability and rates are confirmed by our office.",
      },
      {
        q: "Is the storage facility secure?",
        a: "The storage facility is gated and camera-monitored, with individual lighting and concrete pads.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Gallery                                                              */
/* ------------------------------------------------------------------ */
export type GalleryItem = {
  id: string;
  photo: PhotoAsset;
  category: string;
  caption: string;
};

export const galleryCategories = [
  "All",
  "Marina",
  "Boat Launch",
  "Water Sports",
  "Fishing",
  "RV Camping",
  "Bar & Grill",
  "Events",
  "Waterfront",
  "Storage",
];

export const galleryItems: GalleryItem[] = [
  { id: "marina-aerial", photo: photos.marinaAerial, category: "Marina", caption: "Boats at rest at twilight" },
  { id: "marina-yachts", photo: photos.marinaYachts, category: "Marina", caption: "Moored under clear skies" },
  { id: "marina-sailboats", photo: photos.marinaSailboats, category: "Marina", caption: "Docks and waterfront trees" },
  { id: "launch-ramp", photo: photos.launchRamp, category: "Boat Launch", caption: "Launching down the ramp" },
  { id: "boat-trailer", photo: photos.boatTrailer, category: "Boat Launch", caption: "Ready to head out" },
  { id: "wakeboard", photo: photos.wakeboard, category: "Water Sports", caption: "Carving across the wake" },
  { id: "wake-aerial", photo: photos.wakeAerial, category: "Water Sports", caption: "Lifting off the water" },
  { id: "speedboat", photo: photos.speedboat, category: "Water Sports", caption: "Open water at sunset" },
  { id: "fishing", photo: photos.fishing, category: "Fishing", caption: "First light on the river" },
  { id: "rv-water", photo: photos.rvWater, category: "RV Camping", caption: "Camping by the water" },
  { id: "rv-seashore", photo: photos.rvSeashore, category: "RV Camping", caption: "Shoreline stays" },
  { id: "rv-string", photo: photos.rvString, category: "RV Camping", caption: "Evenings under the lights" },
  { id: "grilled-steak", photo: photos.grilledSteak, category: "Bar & Grill", caption: "Dinner outdoors" },
  { id: "steak", photo: photos.steak, category: "Bar & Grill", caption: "Plates from the kitchen" },
  { id: "dining-table", photo: photos.diningTable, category: "Bar & Grill", caption: "A table for good company" },
  { id: "patio", photo: photos.patio, category: "Bar & Grill", caption: "The waterside patio" },
  { id: "group", photo: photos.group, category: "Events", caption: "Group dining with friends" },
  { id: "garden", photo: photos.garden, category: "Events", caption: "Gatherings and celebrations" },
  { id: "family-bbq", photo: photos.familyBbq, category: "Events", caption: "Family cookouts" },
  { id: "grilling", photo: photos.grilling, category: "Events", caption: "Cooking up a crowd" },
  { id: "delta-river", photo: photos.deltaRiverAerial, category: "Waterfront", caption: "The Delta from above" },
  { id: "marsh", photo: photos.marsh, category: "Waterfront", caption: "Reeds and still water" },
  { id: "river-dusk", photo: photos.riverDusk, category: "Waterfront", caption: "Dusk on the riverbank" },
  { id: "houseboat", photo: photos.houseboat, category: "Waterfront", caption: "Life on the water" },
  { id: "dry-dock", photo: photos.dryDock, category: "Storage", caption: "Secure boat storage" },
  { id: "store", photo: photos.storeCounter, category: "Waterfront", caption: "Everyday essentials" },
];
