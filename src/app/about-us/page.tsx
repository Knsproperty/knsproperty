'use client'
import React from "react";
import Link from "next/link";
import { GiKey } from "react-icons/gi";
import { BsHouseHeart } from "react-icons/bs";
import Parallax from "@/blocks/animation/parallex";
import Service from "@/blocks/sections/services";
import Container from "@/blocks/atoms/container";
import Banner from "@/blocks/molecules/banner/banner";
import { PiSuitcaseSimpleThin } from "react-icons/pi";

const About = () => {
  return (
    <>
      <Banner>
        <div className="grid grid-cols-1 text-center mt-10">
          <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium !text-white z-50">
            About Us
          </h3>
        </div>
      </Banner>
      <Container>
        <section className="relative lg:py-24 py-16">
          <div className="container">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
              <div className="md:col-span-5">
                <div className="relative">
                  <Parallax>
                    <img src="/about.jpg" className="rounded-xl shadow-md" alt="image" />
                  </Parallax>
                  <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center"></div>
                </div>
              </div>
              {/*end col*/}
              <div className="md:col-span-7">
                <div className="lg:ms-4 px-5 lg:px-0">
                  <h3 className="text-primary lg:text-4xl md:text-3xl text-2xl font-bold mb-10">
                    Find the home of your dreams, <br />
                    with us.
                  </h3>
                  <p className="text-slate-400 max-w-xl">
                    The United Arab Emirates is a crossroads for individuals from all over the world.
                    Housing and commercial properties in this futuristic city are profitable; therefore,
                    investing in real estate in Dubai gives an opportunity to maximize profits.
                  </p>
                  <div className="mt-4">
                    <Link className="btn bg-primary hover:bg-green-700 text-white rounded-md mt-3" href={"/"}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end grid*/}
          </div>
          {/*end container*/}
          <div className="container lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h4 className="mb-6 md:text-3xl text-primary text-2xl lg:leading-normal leading-normal font-semibold">
                How It Works
              </h4>
              <p className="text-slate-400 max-w-xl mx-auto">K&amp;S is a great place to buy and rent properties.</p>
            </div>
            {/*end grid*/}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
              {/* Content */}
              <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
                <div className="relative overflow-hidden text-transparent -m-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-hexagon h-32 w-32 fill-primary/5 mx-auto text-primary"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                  <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-primary rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                    <BsHouseHeart className="text-secondary" />
                  </div>
                </div>
                <div className="mt-6">
                  <h5 className="text-xl font-bold">Evaluate Property</h5>
                  <p className="text-slate-400 mt-3">
                    Our expert team conducts thorough assessments of properties, from location and amenities to structural integrity, empowering you to make informed decisions.
                  </p>
                </div>
              </div>
              {/* Content */}
              {/* Content */}
              <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
                <div className="relative overflow-hidden text-transparent -m-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-hexagon h-32 w-32 fill-primary/5 mx-auto text-primary"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                  <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-primary rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                    <PiSuitcaseSimpleThin className="text-secondary" />
                  </div>
                </div>
                <div className="mt-6">
                  <h5 className="text-xl font-bold">Meeting with Agent</h5>
                  <p className="text-slate-400 mt-3">
                    Experience personalized service as our agents understand your needs, guiding you through property searches with tailored options.
                  </p>
                </div>
              </div>
              {/* Content */}
              {/* Content */}
              <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
                <div className="relative overflow-hidden text-transparent -m-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-hexagon h-32 w-32 fill-primary/5 mx-auto text-primary"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                  <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-primary rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                    <GiKey className="text-secondary" />
                  </div>
                </div>
                <div className="mt-6">
                  <h5 className="text-xl font-bold">Close the Deal</h5>
                  <p className="text-slate-400 mt-3">
                    Our skilled negotiators work tirelessly to secure the best terms, ensuring a smooth and transparent closing process for your property investment.
                  </p>
                </div>
              </div>
              {/* Content */}
            </div>
            {/*end grid*/}
          </div>
          {/*end container*/}
        </section>
        <Award />
        <Service />
      </Container>
    </>
  );
};

export default About;

const Award = () => {
  return (
    <section className="relative -z-10 py-24 bg-[url('/01.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="absolute inset-0 bg-black/60 -z-20" />
      <div className="container ">
        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-left text-center justify-center">
          <div className="lg:col-start-2 lg:col-span-10">
            <div className="grid md:grid-cols-3 grid-cols-1 items-center z-10">
              <div className="counter-box text-center">
                <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                  <span className="counter-value text-white" data-target={1548}>
                    1548
                  </span>
                  +
                </h1>
                <h5 className="counter-head text-white text-lg font-medium">
                  Properties Sold
                </h5>
              </div>
              {/*end counter box*/}
              <div className="counter-box text-center">
                <h1 className="!text-white lg:text-5xl text-4xl font-semibold mb-2">
                  <span className="counter-value text-white" data-target={25}>
                    25
                  </span>
                  +
                </h1>
                <h5 className="counter-head text-white text-lg font-medium">
                  Awards Gained
                </h5>
              </div>
              {/*end counter box*/}
              <div className="counter-box text-center">
                <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                  <span className="counter-value text-white" data-target={9}>
                    9
                  </span>
                  +
                </h1>
                <h5 className="counter-head text-white text-lg font-medium">
                  Years Experience
                </h5>
              </div>
              {/*end counter box*/}
            </div>
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
    </section>
  );
};

