import { Main } from "@/types/job";
import Link from "next/link";
import React from "react";

import { FiMapPin, FiDollarSign } from "react-icons/fi";

export default function Job_Card({
  attributes: {
    description,
    location,
    position,
    responsibilities,
    requirements,
    salary,
    unpublicationDate,
    slug,
  },
}: Main) {
  return (
    <>
      <div className="rounded-md w-full bg-lightgreen  text-primary px-4 py-4  transition transform duration-500  border-2 border-lightgray">
        <div className="flex flex-col justify-start">
          <div className="flex justify-between items-center lg:w-96">
            <div className="text-lg font-medium text-secondary flex space-x-1 items-center mb-2">
              <h3>{position}</h3>
            </div>
            <span className="bg-primary text-white rounded-full uppercase text-sm px-4 py-1 font-bold shadow-md">
              Remote
            </span>
          </div>
          <div className="text-sm text-[gray] flex space-x-1 items-center">
            <FiMapPin />
            <h5>{location}</h5>
          </div>

          <div className="text-sm text-[gray] flex space-x-1 items-center">
            <FiDollarSign />
            <h5>{salary}</h5>
          </div>
          <div>
            <div className="mt-5 space-y-5">
              <p className="text-sm">{description}</p>
              <hr className="opacity-10" />
              <p className="line-clamp-3 text-sm">{requirements}</p>
              <p className="line-clamp-3 text-sm">{responsibilities}</p>
              <Link href={`/about-us/careers/${slug}`}>
                <button className=" mt-5 bg-secondary text-white tracking-wider px-5 text-indigo-600 border-indigo-600  border text-sm  rounded-full py-2  cursor-pointer">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
