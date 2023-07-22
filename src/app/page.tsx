import { Metadata } from "next";
import dynamic from "next/dynamic";
import Service from "@/blocks/sections/services";
import Testimonals from "@/blocks/molecules/testimonals";
// dynamic imports
const Trendings = dynamic(() => import("@/blocks/sections/trending"), {
  ssr: true,
});

import QuizComponent from "@/blocks/sections/quiz";


import Blog_Main from "@/blocks/sections/blog/main";

import NewsletterSection from "@/blocks/sections/newsletter-section";
import Trusted from "@/blocks/sections/trusted";
import ContactUs from "@/blocks/sections/contact-us";
import PropertyType from "@/blocks/sections/property-type";
import Featured from "@/blocks/sections/featured";
import Features from "@/blocks/sections/features";
import Booking from "@/blocks/sections/book";

export default async function Home() {
  return (
    <main>
      <QuizComponent />

      <Service />
      <Trendings title="Properties for Sale" type="buy" />
      <Trendings title="Properties for Rent" type="rent" />

      <Trusted />
      <ContactUs />
      <Testimonals />
      <Features />
      <Featured />
      <Booking />
      <NewsletterSection />
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
