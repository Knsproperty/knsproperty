import { Metadata } from "next";
import Booking from "@/blocks/sections/book";
import Service from "@/blocks/sections/services";
import Trusted from "@/blocks/sections/trusted";
import Trendings from "@/blocks/sections/trending";
import FadeIn from "@/blocks/animation/fade-in";
import Testimonals from "@/blocks/molecules/testimonals";
import QuizComponent from "@/blocks/sections/quiz";
import Featured from "@/blocks/sections/featured";
import Features from "@/blocks/sections/features";
import NewsletterSection from "@/blocks/sections/newsletter-section";
import Blog from "@/blocks/sections/blog/home";
export default async function Home() {
  return (
    <main>
      <FadeIn>
        <QuizComponent />
      </FadeIn>

      <Trendings title="Properties for Sale" type="buy" />
      <Trendings title="Properties for Rent" type="rent" />

      <FadeIn>
        <Service />
      </FadeIn>

      <FadeIn>
        <Testimonals />
      </FadeIn>
      <Booking />

      <FadeIn>
        <Trusted />
      </FadeIn>
      <Blog />
      <Features />
      <Featured />
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
