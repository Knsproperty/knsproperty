import { Metadata } from "next";
import Image from "next/image";
import { Main } from "@/types/team";
import strapi from "@/utils/strapi";
import Teams from "@/blocks/sections/teams";
import Container from "@/blocks/atoms/container";
import slugBasesPosition from "@/lib/slugBasedPosition";
export default async function About() {
  const teams = await strapi.find<Main[]>("teams", {
    populate: ["*", "Profile"],
  });
  return (
    <main>
      <div className="relative md:h-[80vh] max-[768px]:aspect-w-16 max-[768px]:aspect-h-11">
        <Image
          src="/group.jpg"
          alt="peoples"
          fill
          className="md:object-cover"
        />
      </div>
      <Container>
        <h1 className="text-4xl font-semibold text-center py-10">
          Our Leadership
        </h1>

        <section className="flex gap-5 items-center justify-center flex-wrap">
          <Teams teams={slugBasesPosition(teams)} />
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
export const revalidate = 60;
