import { Search } from "@/blocks/sections";
import Trendings from "@/blocks/sections/trending";

import Book_Valuation from "@/blocks/sections/book-valuation";
export default function Home() {
  // const data = await getData();
  // console.log(data);

  return (
    <main>
      {/* {JSON.stringify(data)} */}
      <Search />
      <Trendings />
      <Book_Valuation />
    </main>
  );
}
// async function getData() {
//   let buy_properties = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/buy`, {
//     cache: "force-cache",
//   });
//   return await buy_properties.json();
// }
