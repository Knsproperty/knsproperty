import { Search } from "@/blocks/sections";
import Trendings from "@/blocks/sections/trending";


export default async function Home() {

  return (
    <main>
      <Search />
      <Trendings />
    </main>
  );
}
