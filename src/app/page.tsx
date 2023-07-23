import { Metadata } from "next";
import dynamic from "next/dynamic";
import Service from "@/blocks/sections/services";
import Testimonals from "@/blocks/molecules/testimonals";
// dynamic imports
const Trendings = dynamic(() => import("@/blocks/sections/trending"), {
  ssr: true,
});

import QuizComponent from "@/blocks/sections/quiz";

import Trusted from "@/blocks/sections/trusted";
import Featured from "@/blocks/sections/featured";
import Features from "@/blocks/sections/features";
import Booking from "@/blocks/sections/book";
import NewsletterSection from "@/blocks/sections/newsletter-section";
import FadeIn from "@/blocks/animation/fade-in";
export default async function Home() {
  return (
    <main>
      <Featured />

      {/* <FadeIn>
      <Features />
      <Booking />
      <QuizComponent />
      <Testimonals />
      <Service />
      <Trendings title="Properties for Sale" type="buy" />
      </FadeIn>
      <Trusted />

      <Trendings title="Properties for Rent" type="rent" />

      <FadeIn>
      </FadeIn>

      <FadeIn>
      </FadeIn>

      <FadeIn>
      </FadeIn>

      <NewsletterSection /> */}
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
