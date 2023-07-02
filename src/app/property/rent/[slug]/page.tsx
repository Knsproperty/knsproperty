import React from "react";
import Container from "@/blocks/atoms/container";
const getProperty = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/rent/${slug}`, {
    cache: "force-cache",
  });
  return await res.json();
};


import Image from "next/image";
import ImageUrlExtractor from "@/lib/imageUrlExtractor";
import addCommasToNumber from "@/app/lib/addCommasToNumbers";
import { LuBedDouble, LuBath, LuMaximize } from "react-icons/lu";

import ContactCard from "@/blocks/molecules/cards/contact";
import LocationCard from "@/blocks/molecules/cards/location";


export default async function page({ params }: any) {
  const { slug } = params;
  const [{ attributes }] = await getProperty(slug);
  const media = ImageUrlExtractor(attributes)

  return <Container>


    <div className="">


      <section className="h-[400px] bg-white grid lg:grid-cols-2 my-5">

        <div className="relative rounded-md overflow-hidden">
          <Image fill src={media[0]} alt="propery" />
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-5 pl-5">

          <div className="relative overflow-hidden rounded-md">
            <Image fill src={media[1]} alt="propery" />
          </div>

          <div className="relative overflow-hidden rounded-md">
            <Image fill src={media[2]} alt="propery" />
          </div>

          <div className="relative overflow-hidden rounded-md">
            <Image fill src={media[0]} alt="propery" />
          </div>

          <div className="relative overflow-hidden rounded-md">
            <Image fill src={media[1]} alt="propery" />
          </div>
        </div>

      </section>


      <section className="grid lg:grid-cols-[3fr_1fr] gap-10 ">

        <div>
          <h2 className="text-2xl font-semibold text-secondary">AED {addCommasToNumber(attributes.Price)}</h2>
          <div className="flex my-4 ">
            <div className="_center pr-5"><LuBedDouble className="mr-2 stroke-primary stroke-[2px]" /> <span className="font-light text-primary">{12}</span></div>
            <div className="_center border-l border-r border-[#00000010] px-5"><LuBath className="mr-2 stroke-primary stroke-[2px] " /> <span className="font-light text-primary">{12}</span></div>
            <div className="_center px-5"><LuMaximize className="mr-2 stroke-primary stroke-[2px]" /> <span className="font-light text-primary">{12} sq.ft</span></div>
          </div>


          <p className="font-light mb-5">{attributes.Short_Address}</p>

          <hr className="opacity-10" />


          <h3 className="text-xl font-semibold text-secondary mt-5 mb-2.5">Description</h3>

          <p className=" font-[300] text-primary">{attributes.Description}</p>


        </div>


        <div className="grid gap-5 mb-5 min-w-[320px]">

          <ContactCard />

          <LocationCard />

        </div>

      </section>






    </div>



  </Container>
}