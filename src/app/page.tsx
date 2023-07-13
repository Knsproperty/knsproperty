import { Search } from "@/blocks/sections";
import Trendings from "@/blocks/sections/trending";
import Book_Valuation from "@/blocks/sections/book-valuation";
import Testimonals from "@/blocks/molecules/testimonals";
export default async function Home() {
  // const data = await getData();
  return (
    <main>
      <Search />
      <Trendings title="Properties for Sale" type="buy" />
      <Trendings title="Properties for Rent" type="rent" />

      <Book_Valuation />
      <Testimonals />
      {/* <Info /> */}
    </main>
  );
}

// const getData = async () => {
//   const data = await fetch("http://localhost:3000/api/getproperties", {
//     cache: "force-cache",
//   });
//   const properties = await data.json();
//   return properties;
// };
