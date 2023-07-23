import React from "react";
import { GiKey } from "react-icons/gi";
import { BsHouseHeart } from "react-icons/bs";
import Container from "@/blocks/atoms/container";
import Banner from "@/blocks/molecules/banner/banner";
import Testimonals from "@/blocks/molecules/testimonals";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import Contact from "@/blocks/atoms/buttons/contact";
import Service from "@/blocks/sections/services";

const About = () => {
  return (
    <>
      <Banner>
        <div className="grid grid-cols-1 text-center mt-10 ">
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
                  <img src="/about.jpg" className="rounded-xl shadow-md" alt="" />
                  <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center"></div>
                </div>
              </div>
              {/*end col*/}
              <div className="md:col-span-7">
                <div className="lg:ms-4">
                  <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">
                    Efficiency. Transparency. <br /> Control.
                  </h4>
                  <p className="text-slate-400 max-w-xl">
                    Hously developed a platform for the Real Estate marketplace
                    that allows buyers and sellers to easily execute a transaction
                    on their own. The platform drives efficiency, cost
                    transparency and control into the hands of the consumers.
                    Hously is Real Estate Redefined.
                  </p>
                  <div className="mt-4">
                    <a
                      href=""
                      className="btn bg-primary hover:bg-green-700 text-white rounded-md mt-3"
                    >
                      Learn More{" "}
                    </a>
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
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                How It Works
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto">
                A great plateform to buy, sell and rent your properties without
                any agent or commisions.
              </p>
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
                    // fill="none"
                    // stroke="currentColor"
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
                  <h5 className="text-xl font-medium">Evaluate Property</h5>
                  <p className="text-slate-400 mt-3">
                    If the distribution of letters and 'words' is random, the
                    reader will not be distracted from making.
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
                    // fill="none"
                    // stroke="currentColor"
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
                  <h5 className="text-xl font-medium">Meeting with Agent</h5>
                  <p className="text-slate-400 mt-3">
                    If the distribution of letters and 'words' is random, the
                    reader will not be distracted from making.
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
                    // fill="none"
                    // stroke="currentColor"
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
                  <h5 className="text-xl font-medium">Close the Deal</h5>
                  <p className="text-slate-400 mt-3">
                    If the distribution of letters and 'words' is random, the
                    reader will not be distracted from making.
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
        <Agents />
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
                  Properties Sell
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
                  Award Gained
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

const Agents = () => {
  return (
    <section className="relative md:pb-24 pb-16">
      <div className="container lg:mt-24 my-16 ">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Meet The Agent Team
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            A great plateform to buy, sell and rent your properties without any
            agent or commisions.
          </p>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
          <div className="lg:col-span-3 md:col-span-6">
            <div className="group text-center">
              <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                <img src="/04.35463172278c4051b5f4.jpg" className="" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out ms-1 w-full h-full flex justify-center items-center">
                  {/* <li className=" "> */}
                  <Contact />
                  {/* </li> */}
                </ul>
              </div>
              <div className="content mt-3">
                <a
                  className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out"
                  href="/aboutus"
                >
                  Jack John
                </a>
                <p className="text-slate-400">Designer</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6">
            <div className="group text-center">
              <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                <img src="/05.a7ab2c82813cb95da9d6.jpg" className="" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out ms-1 w-full h-full flex justify-center items-center">
                  {/* <li className=" "> */}
                  <Contact />
                  {/* </li> */}
                </ul>
              </div>
              <div className="content mt-3">
                <a
                  className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out"
                  href="/aboutus"
                >
                  Krista John
                </a>
                <p className="text-slate-400">Designer</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6">
            <div className="group text-center">
              <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                <img src="/06.7365b7fa25b4bccc5ff9.jpg" className="" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out ms-1 w-full h-full flex justify-center items-center">
                  {/* <li className=" "> */}
                  <Contact />
                  {/* </li> */}
                </ul>
              </div>
              <div className="content mt-3">
                <a
                  className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out"
                  href="/aboutus"
                >
                  Roger Jackson
                </a>
                <p className="text-slate-400">Designer</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-6">
            <div className="group text-center">
              <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                <img src="/07.e3f0e9f968929876ad53.jpg" className="" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out ms-1 w-full h-full flex justify-center items-center">
                  {/* <li className=" "> */}
                  <Contact />
                  {/* </li> */}
                </ul>
              </div>
              <div className="content mt-3">
                <a
                  className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out"
                  href="/aboutus"
                >
                  Johnny English
                </a>
                <p className="text-slate-400">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End */}
      <Testimonals />
      <div className="container lg:mt-24 mt-16">
        <div className="grid grid-cols-1 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black ">
            Have Question ? Get in touch!
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            A great plateform to buy, sell and rent your properties without any
            agent or commisions.
          </p>
          <div className="mt-6">
            <a
              className="btn bg-primary hover:bg-green-700 text-white rounded-md"
              href="/contact"
            >
              <i className="uil uil-phone align-middle me-2" /> Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
