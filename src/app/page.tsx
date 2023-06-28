import { Search } from "@/blocks/sections";
import strapi from "@/utils/strapi";
import Trendings from "@/blocks/sections/trending";


export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Search />
      <Trendings />
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
