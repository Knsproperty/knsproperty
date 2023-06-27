import Image from "next/image";
import { cache } from "react";
import { Search } from "@/blocks/sections";
import strapi from "@/utils/strapi";

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Search />
    </main>
  );
}
async function getData() {
  let populate = ["*", "agent"];
  const buy_properties = await strapi.find("buy-properties", { populate });
  const rent_properties = await strapi.find("rent-properties", { populate });
  return {
    buy_properties,
    rent_properties,
  };
}
