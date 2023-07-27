import Container from "@/blocks/atoms/container";
import Teams from "@/blocks/sections/teams";
import { Metadata } from "next";
export default function About() {
  return (
    <main>
      <Container>
        <h1 className="text-4xl font-semibold text-center py-10">
          Our Leadership
        </h1>
        <section className="flex gap-5 items-center justify-center flex-wrap">
          <Teams />
        </section>
      </Container>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Our Team | Buy, Rent, and Invest in Real Estate",
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
