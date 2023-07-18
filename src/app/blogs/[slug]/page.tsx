import React from "react";
import ReactHtmlParser from 'react-html-parser';
export default async function page({ params }: any) {
  const [{ attributes }] = await getProperty(params.slug);
  return (
    <div className="max-w-5xl mx-auto px-5">
      <h1 className="text-2xl font-semibold text-center py-10">{attributes.title}</h1>
      <p className="my-2 text-center font-light">{attributes.description}</p>
      <div id="blog" >{ReactHtmlParser(attributes.cotent)}</div>
    </div>

  );
}

const getProperty = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog/${slug}`, {
    cache: "force-cache",
  });
  return await res.json();
};
