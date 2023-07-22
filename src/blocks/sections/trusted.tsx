"use client";
import Slider from "react-slick";

export default function Trusted() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight mb-3">
            {" "}
            Partners
          </h2>
          <p>
            We are partnered with the leading developers of Dubai to provide you
            top quality properties guaranteed to satisfy your expectations in
            both terms; your Living Standards as well a Sound Investment
          </p>
        </div>
        <div className="  max-w-4xl  mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16">
          <Slider {...settings} className="">
            <div>
              <img
                className="object-contain w-full h-8 mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-contain w-full h-8 mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-contain w-full mx-auto h-7"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png"
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <img
                className="object-contain w-full h-8 mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png"
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <img
                className="object-contain w-full h-8 mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png"
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <img
                className="object-contain w-full h-8 mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png"
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <img
                className="object-contain w-full h-8 mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png"
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <img
                className="object-contain w-full h-8 mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png"
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <img
                className="object-contain w-full mx-auto h-7"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png"
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <img
                className="object-contain w-full h-8 mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png"
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <img
                className="object-contain w-full h-8 mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className="flex items-center justify-center mt-10 space-x-3 md:hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-[red] block" />
          <div className="w-2.5 h-2.5 rounded-full bg-[red] block" />
          <div className="w-2.5 h-2.5 rounded-full bg-[red] block" />
        </div>
      </div>
    </section>
  );
}