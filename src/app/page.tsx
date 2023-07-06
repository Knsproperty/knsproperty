import Info from "@/blocks/sections/info";
import { Search } from "@/blocks/sections";
import Trendings from "@/blocks/sections/trending";
import Book_Valuation from "@/blocks/sections/book-valuation";

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <Search />
      <Trendings />
      <Book_Valuation />

      <Info />
    </main>
  );
}

const getData = async () => {
  const data = await fetch("http://localhost:3000/api/getproperties", {
    cache: "force-cache",
  });
  const properties = await data.json();
  return properties;
};
