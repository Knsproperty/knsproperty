import Image from "next/image";
import React from "react";
import Container from "../atoms/container";

export default function Featured() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <Container>
        <div className="px-4">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl">
                Featured Properties
              </h2>
              <p className="hidden max-w-screen-sm text-gray-500 md:block">
                Explore the most popular and sought-after properties with our
                exclusive Range Concierge service. We provide this cost-free
                service to help you find the best real estate to invest in Dubai,
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 "
            >
              <Image
                src="https://range.ae/frontend/assets/images/property/img_1394305377.jpg"
                fill
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 opacity-100 bg-gradient-to-t from-black to-transparent"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                The Heart of Europe
              </span>
              <p className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                AED 1,800,000
              </p>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <Image
                src="https://range.ae/frontend/assets/images/property/img_1656664970.jpg"
                fill
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 opacity-100 bg-gradient-to-t from-black to-transparent"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Six Senses Residences
              </span>
              <p className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                AED 9,400,000
              </p>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <Image
                src="https://range.ae/frontend/assets/images/property/img_1681212060.jpg"
                fill
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 opacity-100 bg-gradient-to-t from-black to-transparent"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                DAMAC Cavalli Estates Villas
              </span>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                19,796,630
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                fill
                src="https://range.ae/frontend/assets/images/property/img_11633276.jpg"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 opacity-100 bg-gradient-to-t from-black to-transparent"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                DAMAC Safa Two by de GRISOGONO
              </span>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                AED 750,000
              </span>
            </a>
            {/* image - end */}
          </div>
        </div>
      </Container>
    </div>
  );
}
