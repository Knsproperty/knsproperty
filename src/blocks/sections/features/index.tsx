import Container from "@/blocks/atoms/container";
import React from "react";

export default function Features() {
  return (
    <Container>
      <section className="bg-white py-10 md:py-16 xl:relative">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col xl:flex-row justify-end">
            <div className="hidden xl:block xl:absolute left-0 bottom-0 w-full">
              <img src="/feature-img.png" alt="Feature img" />
            </div>
            <div className="">
              <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
                Choice of various types of <br /> house
              </h1>
              <p className="font-normal text-gray-400 text-md md:text-xl text-center mb-16">
                We provide a wide of selection of home types for you and your{" "}
                <br /> family and are free to choose a home model
              </p>
              <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
                <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
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
                    className="feather feather-check-circle  text-green-900"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                    Best Home Guarantee
                  </h4>
                  <p className="font-normal text-gray-400 text-xl leading-relaxed">
                    We guarantees the quality of your home you bought <br />{" "}
                    from D’house
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
                <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
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
                    className="feather feather-lock  text-green-900"
                  >
                    <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                    Safe Transaction
                  </h4>
                  <p className="font-normal text-gray-400 text-xl leading-relaxed">
                    Your transactions will always be kept confidential <br />{" "}
                    and will get discounted
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4">
                <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
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
                    className="feather feather-credit-card  text-green-900"
                  >
                    <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                    <line x1={1} y1={10} x2={23} y2={10} />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                    Low and Cost Home Taxes
                  </h4>
                  <p className="font-normal text-gray-400 text-xl leading-relaxed">
                    By buying a house from D’house, you will get a tax <br />{" "}
                    discount
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* container.// */}
      </section>
    </Container>
  );
}
