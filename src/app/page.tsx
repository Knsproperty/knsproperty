import { Metadata } from "next";
import Booking from "@/blocks/sections/book";
// import Service from "@/blocks/sections/services";
// import Trusted from "@/blocks/sections/trusted";
// import Trendings from "@/blocks/sections/trending";
import FadeIn from "@/blocks/animation/fade-in";
// import Testimonals from "@/blocks/molecules/testimonals";
// import QuizComponent from "@/blocks/sections/quiz";
import Featured from "@/blocks/sections/featured";
import Features from "@/blocks/sections/features";
import NewsletterSection from "@/blocks/sections/newsletter-section";
import Blog from "@/blocks/sections/blog/home";
import Community from "@/blocks/sections/community";
import dynamic from "next/dynamic";
import Loader from "@/blocks/molecules/loader";

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
      <Blog />
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
  publisher: "KSN PROPERTIES",
};
