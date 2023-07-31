import { Metadata } from "next";
import dynamic from "next/dynamic";
import Booking from "@/blocks/sections/book";
import Blog from "@/blocks/sections/blog/home";
import Featured from "@/blocks/sections/featured";
import Loader from "@/blocks/molecules/loader";
import Features from "@/blocks/sections/features";
import Community from "@/blocks/sections/community";
import NewsletterSection from "@/blocks/sections/newsletter-section";

const QuizComponent = dynamic(() => import("@/blocks/sections/quiz"), {
  loading: () => <Loader />, // Optional loading component
});
const Trendings = dynamic(() => import("@/blocks/sections/trending"), {
  loading: () => <Loader />, // Optional loading component
});
const Service = dynamic(() => import("@/blocks/sections/services"), {
  loading: () => <Loader />, // Optional loading component
});
const Testimonals = dynamic(() => import("@/blocks/molecules/testimonals"), {
  loading: () => <Loader />, // Optional loading component
});
const Trusted = dynamic(() => import("@/blocks/sections/trusted"), {
  loading: () => <Loader />, // Optional loading component
});
export default async function Home() {
  return (
    <main>
      <QuizComponent />
      <Trendings title="Properties for Sale" type="buy" />
      <Trendings title="Properties for Rent" type="rent" />
      <Service />
      <Testimonals />
      <Booking />
      <Trusted />
      {/* <Blog /> */}
      <Features />
      <Featured />
      <Community />
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
  publisher: "K&N PROPERTIES",
};
