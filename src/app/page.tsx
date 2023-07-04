import Info from "@/blocks/sections/info";
import { Search } from "@/blocks/sections";
import Trendings from "@/blocks/sections/trending";
import Book_Valuation from "@/blocks/sections/book-valuation";
export default async function Home() {
  return (
    <main>
      <Search />
      <Trendings />
      <Book_Valuation />













      <Info />
    </main>
  );
}