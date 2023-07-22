import React from "react";
import Landing from "@/blocks/sections/landing";
const para = {
  styles:
    "mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-7xl text-left",
};
const About = () => {
  return (
    <div className="">
      <Landing background="url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydHklMjBkdWJhaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60')">
        <div>
          <h1 className="text-5xl font-semibold text-white text-center">
            About Us
          </h1>
        </div>
      </Landing>

      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="relative mb-12">
              <img
                className="w-full rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                alt=""
              />
              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-white rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">
                        37%
                      </p>
                      <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                        High Conversions <br />
                        on Landing Pages
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <svg
                  className="w-8 h-8 text-orange-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Build a perfect team within hours.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia conse duis enim velit mollit.
                Exercitation veniam.
              </p>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Explore more{" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Grow business with Celebration.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
              <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                <img
                  className="ml-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg"
                  alt=""
                />
                <img
                  className="absolute -top-4 -left-12"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                  alt=""
                />
                <div className="absolute -bottom-10 -left-16">
                  <div className="bg-yellow-300">
                    <div className="px-8 py-10">
                      <span className="block text-4xl font-bold text-black lg:text-5xl">
                        {" "}
                        53%{" "}
                      </span>
                      <span className="block mt-2 text-base leading-tight text-black">
                        {" "}
                        High Conversions
                        <br />
                        Everything{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20  md:px-6 py-3 px-4 ">
        <section className="bg-white ">
          <div className="container px-6 py-16 mx-auto ">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold mt-24">About Us</h1>
              <p className=" text-gray-700 ">
                <p className={para.styles}>
                  Incancestry is a social enterprise with a mission to empower
                  Andean communities and preserve their ancestral textile
                  traditions. We do this by giving visibility to the finest
                  artisans in these communities and sharing their handcrafted
                  products with the world.
                  <p className={para.styles}>
                    Our focus is on sustainability and fair trade values, which
                    means we work to create positive social and economic impact
                    while being environmentally responsible. We believe that by
                    supporting these artisans and their traditional crafts, we
                    can make a real difference not just in their lives but in
                    the Andean communities they are part of.
                  </p>
                  <p className={para.styles}>
                    At Incancestry, we are passionate about connecting people
                    with products that tell a story and preserve cultural
                    traditions. We are committed to being a force for good, both
                    for the artisans we work with and the supporters who share
                    our beliefs.
                  </p>
                </p>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
