import { revalidate } from "@/blocks/sections/teams";
import React from "react";

export default async function page({ params }: any) {
  const blog = await getProperty(params.slug);
  return <div>{JSON.stringify(blog)}</div>;
}

const getProperty = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog/${slug}`, {
    cache: "force-cache",
  });
  return await res.json();
};
