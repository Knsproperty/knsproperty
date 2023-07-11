"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Container from "../atoms/container";

import PropertyCard, { Props } from "../molecules/cards/property";

import Slider from "../molecules/slider";

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


interface Trendings {
  title: string,
  type: 'buy' | 'rent' | 'offplan'
}


const Trendings: React.FC<Trendings> = ({ title, type }) => {
  return (
    <section>
      <Container>
        <div className=" flex-col pt-10 pb-10">
          <div className="flex items-center justify-between px-6">
            <h2 className="text-3xl text-primary mb-4 ">{title}</h2>
            <button className="text-sm  text-secondary hover:underline">Explore more</button>
          </div>

          <div className="2xl:max-w-[1320px] xl:max-w-[1320px] lg:max-w-[80vw] md:max-w-[80vw] max-w-[100vw] ">
            <Slider>
              {_meta.map((property, index) => (
                <PropertyCard key={index} {...property} />
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Trendings;
