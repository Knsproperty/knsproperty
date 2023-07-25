import React from "react";
import Image from "next/image";
import services from "@/config/services";
import FadeIn from "@/blocks/animation/fade-in";
const Services2 = () => (
  <FadeIn>
    <section className="py-5 mt-5 mb-20">
      <h3 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold ">
        Our Services
      </h3>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <hr className="my-10" />
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          {services.services.map((data) => (
            <Element
              key={data.title}
              t={data.title}
              d={data.details}
              I={data.icon}
            />
          ))}
        </div>
      </div>
    </section>
  </FadeIn>
);
export default Services2;

const Element = ({ t, d, I }: any) => {
  return (
    <div>
      <div className="relative flex items-center justify-center mx-auto group ">
        <Image src={I} alt="image" width={50} height={50} />
      </div>
      <h3 className="mt-8 md:text-xl text-lg group-hover:text-2xl transition-all duration-200  font-semibold text-black">
        {t}
      </h3>
      <p className="mt-4 text-sm   text-gray-600">{d}</p>
    </div>
  );
};
