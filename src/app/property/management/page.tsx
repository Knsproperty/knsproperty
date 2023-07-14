import Book_Valuation from "@/blocks/sections/book-valuation";
import Landing from "@/blocks/sections/landing";

export default function Management() {
  return (
    <div>
      <Landing background="url('https://www.allsoppandallsopp.com/images/banners/career.jpg')">
        <div>
          <h1 className="text-5xl font-semibold text-white text-center">
            Property Management
          </h1>
        </div>
      </Landing>

      <section>
        <Book_Valuation />
        {/* form goes here */}
      </section>
    </div>
  );
}
