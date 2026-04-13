export interface ProductColor {
  id: string;
  name: string;
  hex: string;
  images: string[];
  swatchImage: string;
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

import swatchOffWhite from "@/assets/swatches/off-white.webp";
import swatchBlack from "@/assets/swatches/black.webp";
import swatchGreyMarl from "@/assets/swatches/grey-marl.webp";
import swatchCamel from "@/assets/swatches/camel.jpeg";
import swatchHunterNavy from "@/assets/swatches/hunter-navy.jpeg";
import swatchSageGreen from "@/assets/swatches/sage-green.webp";

import black1 from "@/assets/product-images/black/1.webp";
import black2 from "@/assets/product-images/black/2.webp";
import black3 from "@/assets/product-images/black/3.webp";
import black4 from "@/assets/product-images/black/4.webp";

import greyMarl1 from "@/assets/product-images/grey-marl/1.webp";
import greyMarl2 from "@/assets/product-images/grey-marl/2.webp";
import greyMarl3 from "@/assets/product-images/grey-marl/3.webp";
import greyMarl4 from "@/assets/product-images/grey-marl/4.webp";

import offWhite1 from "@/assets/product-images/off-white/1.webp";
import offWhite2 from "@/assets/product-images/off-white/2.webp";
import offWhite3 from "@/assets/product-images/off-white/3.webp";
import offWhite4 from "@/assets/product-images/off-white/4.webp";
import offWhite5 from "@/assets/product-images/off-white/5.webp";

import camel1 from "@/assets/product-images/camel/1.webp";
import camel2 from "@/assets/product-images/camel/2.webp";
import camel3 from "@/assets/product-images/camel/3.webp";
import camel4 from "@/assets/product-images/camel/4.webp";

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
      images: [offWhite1, offWhite2, offWhite3, offWhite4, offWhite5, offWhite5],
      swatchImage: swatchOffWhite,
    },
    {
      id: "black",
      name: "Black",
      hex: "#1A1A1A",
      images: [black1, black2, black3, black4],
      swatchImage: swatchBlack,
    },
    {
      id: "grey-marl",
      name: "Grey Marl",
      hex: "#B0AFA8",
      images: [greyMarl1, greyMarl2, greyMarl3, greyMarl4],
      swatchImage: swatchGreyMarl,
    },
    {
      id: "camel",
      name: "Camel",
      hex: "#C4A77D",
      images: [camel1, camel2, camel3, camel4],
      swatchImage: swatchCamel,
    },
    {
      id: "hunter-navy",
      name: "Hunter Navy",
      hex: "#1B2A4A",
      images: Array.from({ length: 6 }, (_, i) => placeholderImg("1B2A4A", i + 1)),
      swatchImage: swatchHunterNavy,
    },
    {
      id: "sage-green",
      name: "Sage Green",
      hex: "#A8B5A0",
      images: Array.from({ length: 6 }, (_, i) => placeholderImg("A8B5A0", i + 1)),
      swatchImage: swatchSageGreen,
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
