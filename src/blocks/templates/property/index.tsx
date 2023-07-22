interface Props {
  bed: number;
  bath: number;
  area: number;
  price: number;
  parking: number;
  images: string[];
  geopoint: string;
  description: string;
  short_address: string;
  property_type: string;
  type: "buy" | "rent" | "offplan";
}

import RelatedProducts from "./related_products";
import DetailedCards from "./detailed_cards";
import React from "react";
import dynamic from "next/dynamic";
import Gallary from "../../molecules/gallary";
import Table from "./table";
import Container from "@/blocks/atoms/container";
import Formetter from "@/blocks/atoms/text-formatter";
import addCommasToNumber from "@/lib/addCommasToNumbers";
import LocationCard from "@/blocks/molecules/cards/location";
import {
  LuBedDouble,
  LuBath,
  LuMaximize,
  LuParkingSquare,
} from "react-icons/lu";
import ContactCard from "../../molecules/cards/contact";

// Dynamic Imports
const Images = dynamic(() => import("@/blocks/atoms/image-preview"));

const PropertyDetailedPage: React.FC<Props> = ({
  images,
  type,
  price,
  short_address,
  description,
  geopoint,
  bed,
  parking,
  bath,
  area,
  property_type,
}) => {
  return (
    <>
      <Container>
        <div>
          <Images media={images} />
          <section className="grid lg:grid-cols-[3fr_1fr] gap-10 xl:px-2 px-5 ">
            <main>
              <h2 className="text-2xl font-semibold text-secondary mt-2 lg:mt-0">
                AED {addCommasToNumber(price)}
                {type == "rent" && (
                  <span className="text-sm uppercase text-primary">
                    / per year
                  </span>
                )}
              </h2>

              <div className="flex my-4 ">
                <div className="_center md:pr-5  pr-3">
                  <LuBedDouble className="mr-2 stroke-primary stroke-[2px]" />
                  <span className=" text-primary">{bed}</span>
                </div>
                <div className="_center border-l border-r border-[#00000010] md:px-5 px-3 ">
                  <LuBath className="mr-2 stroke-primary stroke-[2px] " />
                  <span className=" text-primary">{bath}</span>
                </div>
                <div className="_center border-l border-r border-[#00000010] md:px-5 px-3">
                  <LuParkingSquare className="mr-2 stroke-primary stroke-[2px] " />
                  <span className=" text-primary">{parking}</span>
                </div>
                <div className="_center md:pl-5 pl-3  ">
                  <LuMaximize className="mr-2 stroke-primary stroke-[2px]" />
                  <span className=" text-primary">
                    {addCommasToNumber(area)} sq.ft
                  </span>
                </div>
              </div>

              <p className=" mb-5">{short_address}</p>
              <hr className="opacity-10" />
              <h2 className="xl:text-xl text-lg font-semibold text-secondary mt-5 mb-2.5">
                Description
              </h2>
              <Table {...{ property_type, type, bed, bath, area, parking }} />

              <Formetter text={description} />

            </main>

            <aside className="flex flex-col gap-5 mb-5 min-w-[320px] h-auto">
              <ContactCard />
              <LocationCard geopoint={geopoint} />
            </aside>
          </section>

          <DetailedCards price={addCommasToNumber(price)} type={type} />
          <Gallary images={images} />


          <RelatedProducts
            property_type={property_type}
            type={`${type}-properties` as any}
          />
        </div>
      </Container>
    </>
  );
};

export default PropertyDetailedPage;
