'use client'

export interface Props {
  slug: string;
  area: number;
  title: string;
  price: string;
  image: string[];
  bedroom: number;
  bathroom: number;
  description: string;
  type: "buy" | "rent" | "offplan";
}

// import Link from "next/link";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import clampText from "@/lib/clampText";
import { LuBedDouble, LuBath, LuMaximize } from "react-icons/lu";

const PropertyCard: React.FC<Props> = ({
  area,
  bathroom,
  title,
  price,
  description,
  bedroom,
  image,
  type,
  slug,
}) => {
  const [hovered, setHovered] = useState(false)
  const settings = {
    nextArrow: hovered ? <SampleNextArrow /> : undefined,
    prevArrow: hovered ? <SamplePrevArrow /> : undefined,
    arrow: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      onMouseEnter={() => { setHovered(true) }}
      onMouseLeave={() => { setHovered(false) }}
      className=" h-full group rounded-md shadow-md hover:shadow-lg transition duration-500 hover:border-[tomato] border-transparent border-2 ease-in-out hover:-translate-y-5 overflow-hidden bg-white m-2">
      <header className="overflow-hidden bg-lightgray ">
        <Slider {...settings}
          className="h-full">
          {image.map(url => (
            <div className="relative h-[200px]">
              <Image
                className="w-full"
                src={url}
                alt="property image"
                fill
              />
            </div>
          ))}
        </Slider>
      </header>
      <main>

        <div className="px-5">
          <Link href={`/property/${type}/${slug}`}>
            <h2 className="text-md text-primary font-semibold my-3 hover:underline">{title}</h2>
          </Link>

          <p className="text-sm  text-primary mb-2">
            {clampText(description, 50)}
          </p>
          <div className="grid grid-cols-[1fr_1fr_2fr] my-5 ">
            <div className="_center ">
              <LuBedDouble className="mr-2 stroke-primary stroke-[2px]" />{" "}
              <span className="text-primary">{bedroom}</span>
            </div>
            <div className="_center border-l border-r border-[#00000010]">
              <LuBath className="mr-2 stroke-primary stroke-[2px]" />{" "}
              <span className="text-primary">{bathroom}</span>
            </div>
            <div className="_center ">
              <LuMaximize className="mr-2 stroke-primary stroke-[2px]" />{" "}
              <span className="text-primary">{area} sq.ft</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyCard;

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
export function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:hidden  `}
      style={{
        ...style, display: "block", background: "transparent"
      }}
      onClick={(event) => {
        event.stopPropagation()
        onClick()
      }}>
      <FiArrowRight size={12} className=" -mt-5 -ml-[50px] w-[40px] h-[40px] bg-white shadow-md p-2.5 z-[99999] absolute rounded-full" />
    </div >
  );
}

export function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} before:hidden z-50`}
      style={{
        ...style, display: "block", background: "transparent"
      }}
      onClick={(event) => {
        event.stopPropagation()
        onClick()
      }}>
      <FiArrowLeft size={12} className=" -mt-5 ml-[30px] w-[40px] h-[40px] bg-white shadow-md p-2.5  rounded-full" />
    </div >
  );
}