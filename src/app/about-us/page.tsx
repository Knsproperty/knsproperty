import React from "react";
import Landing from "@/blocks/sections/landing";
import Banner from "@/blocks/molecules/banner/banner";
const para = {
  styles:
    "mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-7xl text-left",
};
const About = () => {
  return (
    <div className="">
      <Banner>
        <div className="grid grid-cols-1 text-center mt-10 ">
          <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium !text-white z-50">
            About Us
          </h3>
        </div>
      </Banner>
      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="md:col-span-5">
              <div className="relative">
                <img
                  src="assets/images/about.jpg"
                  className="rounded-xl shadow-md"
                  alt=""
                />
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <a
                    href="#!"
                    data-type="youtube"
                    data-id="yba7hPeTSjk"
                    className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600"
                  >
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl" />
                  </a>
                </div>
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
                    className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3"
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
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-hexagon h-32 w-32 fill-green-600/5 mx-auto"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-estate" />
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
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-hexagon h-32 w-32 fill-green-600/5 mx-auto"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-bag" />
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
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-hexagon h-32 w-32 fill-green-600/5 mx-auto"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <i className="uil uil-key-skeleton" />
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
    </div>
  );
};

export default About;

const Award = () => {
  return (
    <section className="relative py-24 bg-[url('/01.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="absolute inset-0 bg-black/60" />
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-left text-center justify-center">
          <div className="lg:col-start-2 lg:col-span-10">
            <div className="grid md:grid-cols-3 grid-cols-1 items-center">
              <div className="counter-box text-center">
                <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                  <span className="counter-value" data-target={1548}>
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
                <h1 className="text-white lg:text-5xl text-4xl font-semibold mb-2">
                  <span className="counter-value" data-target={25}>
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
                  <span className="counter-value" data-target={9}>
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
