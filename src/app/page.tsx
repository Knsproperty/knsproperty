import { Search } from "@/blocks/sections";
import Trendings from "@/blocks/sections/trending";
import Testimonals from "@/blocks/molecules/testimonals";
import Book_Valuation from "@/blocks/sections/book-valuation";

export default async function Home() {
  return (
    <main>
      <Search />
      <Trendings title="Properties for Sale" type="buy" />
      <Trendings title="Properties for Rent" type="rent" />
      <Book_Valuation />
      <Testimonals />
    </main>
  );
}
