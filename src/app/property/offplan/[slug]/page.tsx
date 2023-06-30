import React from "react";

const getProperty = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/offplan/${slug}`,
    {
      cache: "force-cache",
    }
  );
  return await res.json();
};

export default async function page({ params }: any) {
  const { slug } = params;
  const property = await getProperty(slug);

  console.log(property);
  return <div>{JSON.stringify(property)}</div>;
}
