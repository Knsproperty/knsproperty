import { Search } from "@/blocks/sections";
import dynamic from "next/dynamic";
import QuizComponent from "@/blocks/sections/quiz";
const Trendings = dynamic(() => import("@/blocks/sections/trending"), {
  ssr: true,
});

// import Trendings from "@/blocks/sections/trending";
import Testimonals from "@/blocks/molecules/testimonals";
import Book_Valuation from "@/blocks/sections/book-valuation";
import { Metadata } from "next";

export default async function Home() {
  return (
    <main>
      <Search />
      <Trendings title="Properties for Sale" type="buy" />
      <Trendings title="Properties for Rent" type="rent" />
      <Book_Valuation />
      <QuizComponent />
      <Testimonals />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Dubai Properties | Buy, Rent, and Invest in Real Estate",
  description:
    "Explore a wide range of properties for sale, rent, and investment in Dubai. Find luxury villas, apartments, commercial spaces, and more.",
  keywords: [
    "Dubai properties",
    "real estate",
    "buy property in Dubai",
    "rent property in Dubai",
    "investment properties",
  ],
  authors: [{ name: "", url: "" }],
  abstract: "",
  publisher: "KSN PROPERTIES",

  // url: "",
  // image: "https://www.yourwebsite.com/images/property-thumbnail.jpg",
  // siteName: "Your Website Name",
  // twitterUsername: "@YourTwitterUsername",
  // facebookAppID: "YourFacebookAppID",
  // type: "website",
  // locale: "en_US",
  // propertyType: ["Villas", "Apartments", "Commercial Spaces", "Land"],
  // location: "Dubai, United Arab Emirates",
  // currency: "AED",
};
