import { Search } from "@/blocks/sections";
import Trendings from "@/blocks/sections/trending";
import Book_Valuation from "@/blocks/sections/book-valuation";
import Testimonals from "@/blocks/molecules/testimonals";
export default async function Home() {
  let data = await getData();
  return (
    <main>
      {/* {JSON.stringify(data)} */}
      <Search />
      <Trendings title="Properties for Sale" type="buy" />
      <Trendings title="Properties for Rent" type="rent" />

      <Book_Valuation />
      <Testimonals />
    </main>
  );
}
// Exclusive Properties
const getData = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/exclusive/buy`, {
    cache: "no-cache",
  });
  return await data.json();
};
