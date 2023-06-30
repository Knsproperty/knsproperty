import PropertyCard, { Props } from "@/blocks/molecules/cards/property";
import React from "react";
const _meta: Props[] = [
  {
    bedroom: 3,
    area: 1500,
    bathroom: 2,
    title: "Cozy Family Home",
    price: "$300,000",
    image: "https://example.com/home1.jpg",
    description:
      "A cozy family home featuring three bedrooms, two bathrooms, and a spacious living area.",
  },
  {
    bedroom: 4,
    area: 2000,
    bathroom: 3,
    title: "Modern Luxury Villa",
    price: "$1,200,000",
    image: "https://example.com/villa.jpg",
    description:
      "Experience modern luxury living in this exquisite villa boasting four bedrooms, three bathrooms, and elegant interior design.",
  },
  {
    bedroom: 1,
    area: 800,
    bathroom: 1,
    title: "Charming Studio Apartment",
    price: "$150,000",
    image: "https://example.com/apartment.jpg",
    description:
      "This charming studio apartment offers a comfortable living space, one bedroom, and one bathroom, perfect for singles or couples.",
  },
  {
    bedroom: 5,
    area: 3000,
    bathroom: 4,
    title: "Spacious Family Residence",
    price: "$500,000",
    image: "https://example.com/home2.jpg",
    description:
      "A spacious family residence with five bedrooms, four bathrooms, and ample room for entertainment and relaxation.",
  },
  {
    bedroom: 3,
    area: 1500,
    bathroom: 2,
    title: "Cozy Family Home",
    price: "$300,000",
    image: "https://example.com/home1.jpg",
    description:
      "A cozy family home featuring three bedrooms, two bathrooms, and a spacious living area.",
  },
  {
    bedroom: 4,
    area: 2000,
    bathroom: 3,
    title: "Modern Luxury Villa",
    price: "$1,200,000",
    image: "https://example.com/villa.jpg",
    description:
      "Experience modern luxury living in this exquisite villa boasting four bedrooms, three bathrooms, and elegant interior design.",
  },
  {
    bedroom: 1,
    area: 800,
    bathroom: 1,
    title: "Charming Studio Apartment",
    price: "$150,000",
    image: "https://example.com/apartment.jpg",
    description:
      "This charming studio apartment offers a comfortable living space, one bedroom, and one bathroom, perfect for singles or couples.",
  },
  {
    bedroom: 5,
    area: 3000,
    bathroom: 4,
    title: "Spacious Family Residence",
    price: "$500,000",
    image: "https://example.com/home2.jpg",
    description:
      "A spacious family residence with five bedrooms, four bathrooms, and ample room for entertainment and relaxation.",
  },
];
export default async function Buy() {
  const data = await getData();
  return _meta.map((property, index) => (
    <PropertyCard key={index} {...property} />
  ));
}
async function getData() {
  let buy_properties = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/buy`, {
    cache: "force-cache",
  });
  return await buy_properties.json();
}
