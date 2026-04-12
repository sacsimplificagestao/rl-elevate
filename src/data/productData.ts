export interface ProductColor {
  id: string;
  name: string;
  hex: string;
  images: string[];
}

export interface ProductSize {
  label: string;
  available: boolean;
}

export interface ProductReview {
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
}

export interface ProductData {
  name: string;
  brand: string;
  price: number;
  currency: string;
  description: string;
  badges: string[];
  breadcrumb: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  personalization: { label: string; price: number };
  details: string[];
  delivery: string;
  payments: { cards: string[]; other: string[] };
  reviews: { average: number; count: number; items: ProductReview[] };
}

const placeholderImg = (color: string, n: number) =>
  `https://placehold.co/800x1000/${color}/ffffff?text=Image+${n}`;

export const productData: ProductData = {
  name: "Cable-Knit Cotton Quarter-Zip Jumper",
  brand: "Polo Ralph Lauren",
  price: 245.0,
  currency: "€",
  description:
    "This chunky-knit cotton layer features our iconic cable design and signature embroidered Pony.",
  badges: ["NEW ARRIVAL", "TRENDING"],
  breadcrumb: ["MEN", "CLOTHING", "JUMPERS & CARDIGANS", "JUMPERS"],
  colors: [
    {
      id: "off-white",
      name: "Off-White",
      hex: "#F5F0E8",
      images: Array.from({ length: 6 }, (_, i) => placeholderImg("F5F0E8", i + 1)),
    },
    {
      id: "black",
      name: "Black",
      hex: "#1A1A1A",
      images: Array.from({ length: 6 }, (_, i) => placeholderImg("1A1A1A", i + 1)),
    },
    {
      id: "grey-marl",
      name: "Grey Marl",
      hex: "#B0AFA8",
      images: Array.from({ length: 6 }, (_, i) => placeholderImg("B0AFA8", i + 1)),
    },
    {
      id: "camel",
      name: "Camel",
      hex: "#C4A77D",
      images: Array.from({ length: 6 }, (_, i) => placeholderImg("C4A77D", i + 1)),
    },
    {
      id: "hunter-navy",
      name: "Hunter Navy",
      hex: "#1B2A4A",
      images: Array.from({ length: 6 }, (_, i) => placeholderImg("1B2A4A", i + 1)),
    },
    {
      id: "sage-green",
      name: "Sage Green",
      hex: "#A8B5A0",
      images: Array.from({ length: 6 }, (_, i) => placeholderImg("A8B5A0", i + 1)),
    },
  ],
  sizes: [
    { label: "XS", available: true },
    { label: "S", available: true },
    { label: "M", available: true },
    { label: "L", available: true },
    { label: "XL", available: true },
    { label: "XXL", available: false },
  ],
  personalization: { label: "ADD YOUR INITIALS", price: 10.0 },
  details: [
    "Regular Fit: wider at the chest while maintaining a modern silhouette.",
    "Size M has a 67.5 cm body length (front and back), a 42.5 cm shoulder, a 104 cm chest and a 64 cm sleeve length.",
    "Rib-knit mockneck. Quarter-zip placket. Custom-developed suede zip pull with a \"Polo\" logo.",
    "Long sleeves with rib-knit cuffs.",
    "Rib-knit hem.",
    "Signature embroidered Pony on the left chest.",
    "100% cotton.",
    "Machine washable. Imported.",
    "Model is 1.85 m and wears a size M.",
    "Style Number: 546351",
  ],
  delivery:
    'We currently offer 3 methods of delivery: Standard, Express and Next Day (all deliveries are made from Monday to Friday from 8am to 7pm).\n\nIf you are not satisfied with an item purchased online at Ralph Lauren, you can return it to us within thirty (30) days of receipt of item(s) free of charge. Items must be unwashed, unworn, and unaltered with the original tags. Personalized items and gift boxes cannot be returned.\n\nOur team of experts are ready to assist you with attentive one-on-one service in-store or online.',
  payments: {
    cards: ["Visa", "Mastercard", "American Express", "Cartes Bancaires", "Ralph Lauren Gift Cards"],
    other: ["PayPal", "Apple Pay", "Klarna or Klarna Express"],
  },
  reviews: {
    average: 4.6,
    count: 102,
    items: [
      {
        author: "James T.",
        rating: 5,
        date: "2026-03-15",
        title: "Exceptional quality",
        body: "The cable knit pattern is beautifully crafted and the cotton feels premium. True to size.",
        verified: true,
      },
      {
        author: "Michael R.",
        rating: 4,
        date: "2026-03-02",
        title: "Great jumper, runs slightly large",
        body: "Beautiful quality as expected from Ralph Lauren. I'd recommend sizing down if between sizes.",
        verified: true,
      },
      {
        author: "Sophie L.",
        rating: 5,
        date: "2026-02-20",
        title: "Perfect gift",
        body: "Bought this for my husband and he absolutely loves it. The navy colour is gorgeous.",
        verified: true,
      },
    ],
  },
};
