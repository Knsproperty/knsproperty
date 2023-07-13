import React from "react";
import Container from "@/blocks/atoms/container";
import Image from "@/blocks/atoms/image-preview";
import ContactCard from "@/blocks/molecules/cards/contact";
import addCommasToNumber from "@/app/lib/addCommasToNumbers";
import LocationCard from "@/blocks/molecules/cards/location";
import { LuBedDouble, LuBath, LuMaximize } from "react-icons/lu";

export default async function page({ params }: any) {
  const { slug } = params;
  const [{ attributes }] = await getProperty(slug);
  return (
    <Container>
      <div>
        <Image media={[...attributes.Cron_Images.data.map((e: any) => e.url)]} />

        <section className="grid lg:grid-cols-[3fr_1fr] gap-10 lg:px-0 px-5 ">
          <main>
            <h2 className="text-2xl font-semibold text-secondary"> AED {addCommasToNumber(attributes.Price)}</h2>

            <div className="flex my-4 ">
              <div className="_center pr-5">
                <LuBedDouble className="mr-2 stroke-primary stroke-[2px]" />
                <span className="font-light text-primary">{12}</span>
              </div>
              <div className="_center border-l border-r border-[#00000010] px-5">
                <LuBath className="mr-2 stroke-primary stroke-[2px] " />
                <span className="font-light text-primary">{12}</span>
              </div>
              <div className="_center px-5">
                <LuMaximize className="mr-2 stroke-primary stroke-[2px]" />
                <span className="font-light text-primary">{12} sq.ft</span>
              </div>
            </div>

            <p className="font-light mb-5">{attributes.Short_Address}</p>
            <hr className="opacity-10" />
            <h2 className="text-xl font-semibold text-secondary mt-5 mb-2.5">Description</h2>
            <p className="font-light text-primary">{attributes.Description}</p>
          </main>

          <aside className="grid gap-5 mb-5 min-w-[320px]">
            <ContactCard />
            <LocationCard />
          </aside>
        </section>
      </div>
    </Container>
  );
}

// fetcher component
const getProperty = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/buy/${slug}`, {
    cache: "force-cache",
  });
  return await res.json();
};