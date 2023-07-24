import { formatDate } from "@/utils/helpers";
import strapi from "@/utils/strapi";
import React from "react";

export default async function Recentposts() {
  const blogs = await strapi.find<any>("blogs", {
    populate: ["*", "thumbnail"],
    pagination: {
      start: 0,
      limit: 3,
    },
  });

  return (
    <div className="lg:col-span-4 md:order-2 order-1">
      <div className="sticky top-20">
        <h5 className="font-medium text-lg mt-[30px]">Recent post</h5>
        {blogs.data.map(({ attributes }: any, index: number) => (
          <div className="flex items-center mt-4" key={index}>
            <img
              src={attributes.thumbnail.data.attributes.formats.small.url}
              className="h-16 rounded-md shadow dark:shadow-gray-800"
              alt=""
            />
            <div className="ms-3">
              <a href="" className="font-medium hover:text-green-600">
                {attributes.title}
              </a>
              <p className="text-sm text-slate-400">
                {formatDate(attributes.updatedAt)}
              </p>
            </div>
          </div>
        ))}

        {/*end icon*/}
      </div>
    </div>
  );
}

export const fetchCache = "force-cache";
