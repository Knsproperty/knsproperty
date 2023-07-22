import React from "react";

export default function Booking() {
  return (
    <section className="bg-white py-10 md:py-16 ">
      <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
        <div className="bg-primary flex flex-col lg:flex-row items-center justify-evenly py-14 rounded-3xl">
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="font-semibold text-white text-4xl md:text-5xl lg:text-7xl leading-normal mb-4">
              Talk to us <br /> to discuss
            </h1>
            <p className="font-normal text-white text-md md:text-xl">
              Need more time to discuss? Won’t worry, we are <br /> ready to
              help you. You can fill in the column on the <br /> right to book a
              meeting with us. Totally free.
            </p>
          </div>
          <div className="hidden xl:block xl:absolute right-0">
            <img src="/book.png" alt="Image" />
          </div>
          <div className="hidden md:block bg-white xl:relative px-6 py-3 rounded-3xl">
            <div className="py-3">
              <h3 className="font-semibold text-gray-900 text-3xl">
                Book a meeting
              </h3>
            </div>
            <div className="py-3">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>
            <div className="py-3">
              <input
                type="text"
                placeholder="Email"
                className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>
            <div className="py-3 relative">
              <input
                type="text"
                placeholder="Date"
                className="px-4 py-4 w-96 bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none"
              />
              <div className="absolute inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
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
                  className="feather feather-calendar"
                >
                  <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                  <line x1={16} y1={2} x2={16} y2={6} />
                  <line x1={8} y1={2} x2={8} y2={6} />
                  <line x1={3} y1={10} x2={21} y2={10} />
                </svg>
              </div>
            </div>
            <div className="py-3 relative">
              <input
                type="text"
                placeholder="Virtual Meeting"
                className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
              <div className="absolute inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
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
                  className="feather feather-chevron-down"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <div className="py-3">
              <button className="w-full py-4 font-semibold text-lg text-white bg-green-700 rounded-xl hover:bg-green-900 transition ease-in-out duration-500">
                Booking
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* container.// */}
    </section>
  );
}
