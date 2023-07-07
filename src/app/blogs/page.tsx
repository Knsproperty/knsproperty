import { Main } from "@/types/blog";
import strapi from "@/utils/strapi";
import React from "react";

export default async function page() {
  const blogs = await strapi.find("blogs", {
    populate: ["*", "thumbnail"],
  });
  return <div>{JSON.stringify(blogs.data)}</div>;
}

export const revalidate = 3600;
