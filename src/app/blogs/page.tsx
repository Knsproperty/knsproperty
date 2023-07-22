import Latest_Blogs from "@/blocks/molecules/cards/blog/blogs";
import Blog_Header from "@/blocks/molecules/cards/blog/header";
import { Main } from "@/types/blog";
import strapi from "@/utils/strapi";
import React from "react";

export default async function page() {
  const blogs = await strapi.find("blogs", {
    populate: ["*", "thumbnail"],
  });
  return (
    <div className="mt-20">
      <Blog_Header />
      <Latest_Blogs />
    </div>
  );
}

export const revalidate = 3600;
