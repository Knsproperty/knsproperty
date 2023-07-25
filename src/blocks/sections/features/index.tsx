import React from "react";
import Container from "@/blocks/atoms/container";
import Image from "next/image";

export default function Features() {
  return (
    <div className="bg-lightgray">
      <Container>
        <div className=" py-10 md:py-16 xl:relative">
          <div className="px-4">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-5">
              <div className="_center hidden lg:block">
                <Image
                  width={615}
                  height={516}
                  src="/features.jpg"
                  className="max-h-[600px]"
                  alt="Feature img"
                />
              </div>
              <div className="">
                <h1 className="font-semibold text-gray-900 lg:text-4xl md:text-3xl text-2xl text-center leading-normal mb-6">
                  Choice of various types of <br /> house
                </h1>
                <p className="font-normal  text-center mb-16">
                  We provide a wide of selection of home types for you and your
                  family and are free to choose a home model
                </p>
                <div className="max-w-[450px] mx-auto">
                  <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-5 group">
                    <div className="px-8 h-20 mx-auto md:mx-0 bg-[gray] bg-opacity-10 rounded-lg flex items-center justify-center mb-5 md:mb-0 group-hover:shadow-lg ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check-circle text-green-900 group-hover:scale-150 duration-200 transition-all"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="font-semibold text-gray-900 text-xl mb-2">
                        Best Home Guarantee
                      </h4>
                      <p className="font-normal leading-relaxed">
                        We guarantees the quality of your home you bought from
                        K&S
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-5 group">
                    <div className="px-8 h-20 mx-auto md:mx-0 bg-[gray] bg-opacity-10 rounded-lg flex items-center justify-center mb-5 md:mb-0 group-hover:shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check-circle text-green-900 group-hover:scale-150 duration-200 transition-all"
                      >
                        <rect
                          x={3}
                          y={11}
                          width={18}
                          height={11}
                          rx={2}
                          ry={2}
                        />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="font-semibold text-gray-900 text-xl mb-2">
                        Safe Transaction
                      </h4>
                      <p className="font-normal  leading-relaxed">
                        Your transactions will always be kept confidential{" "}
                        <br /> and will get discounted
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 group">
                    <div className="px-8 h-20 mx-auto md:mx-0 bg-[gray] bg-opacity-10 rounded-lg flex items-center justify-center mb-5 md:mb-0 group-hover:shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth={2}
                        strokeLinecap="round"
                        className="feather feather-check-circle text-green-900 group-hover:scale-150 duration-200 transition-all"
                      >
                        <rect
                          x={1}
                          y={4}
                          width={22}
                          height={16}
                          rx={2}
                          ry={2}
                        />
                        <line x1={1} y1={10} x2={23} y2={10} />
                      </svg>
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="font-semibold text-gray-900 text-xl mb-2">
                        Low and Cost Home Taxes
                      </h4>
                      <p className="font-normal leading-relaxed">
                        By buying a house from D’house, you will get a tax{" "}
                        <br /> discount
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
