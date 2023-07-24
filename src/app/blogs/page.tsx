import Banner from "@/blocks/molecules/banner/banner";
import Latest_Blogs from "@/blocks/molecules/cards/blog/blogs";
import Blog_Header from "@/blocks/molecules/cards/blog/header";
import Card from "@/blocks/sections/blog/card";
import Container from "@/blocks/sections/blog/main";
import LandingSection from "@/blocks/sections/landing";
import { cardsdata } from "@/data/blogs";
import { Main } from "@/types/blog";
import strapi from "@/utils/strapi";
import React from "react";

export default async function page() {
  const blogs = await strapi.find<any>("blogs", {
    populate: ["*", "thumbnail"],
  });
  return (
    <>
      <Banner>
        <div className="grid grid-cols-1 text-center mt-10 ">
          <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium !text-white z-50">
            Blogs & News
          </h3>
        </div>
      </Banner>
      <Container>
        {blogs.data.map(({ attributes }: any, index: number) => (
          <Card
            key={index}
            cardData={{
              imageSrc: attributes.thumbnail.data.attributes.url,
              category: attributes.category,
              date: attributes.updatedAt,
              readingTime: "3 min",
              title: attributes.title,
              link: attributes.slug,
            }}
          />
        ))}
      </Container>
    </>
  );
}

export const revalidate = 3600;
