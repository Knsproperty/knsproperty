"use client";
import Slider from "react-slick";
import Container from "../atoms/container";

export default function Trusted() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
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
    <section className="py-10 bg-white sm:py-16 lg:py-24 overflow-hidden border-2">
      <Container>
        <div className="">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight mb-3">
              Our Partners
            </h2>
            <hr className="my-10" />

          </div>
          <div className=" mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16">
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
        </div>
      </Container>
    </section>
  );
}
