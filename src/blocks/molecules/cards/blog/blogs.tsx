import React from "react";
import Blogcard from "./blogcard";

export default function Latest_Blogs() {
  return (
    <div className="mx-auto max-w-8xl px-4 my-8 md:mb-10 lg:mb-16">
      <h2 className="mb-4 md:mb-6 text-3xl font-semibold">Latest articles</h2>
      <div className="grid grid-cols-1 gap-y-4 gap-x-5 lg:gap-x-12 lg:gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        <Blogcard />
        <Blogcard />
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>
    </div>
  );
}
