"use client";
import React from "react";
import Container from "../atoms/container";
import Book_Input from "../atoms/inputs/book-v-input";
import {
  DropdownBookValuation,
  DropdownBuyRent,
} from "../molecules/filter/dropdown";
import Country_Input from "../atoms/inputs/country-input";

export default function Book_Valuation() {
  return (
    <Container>
      <div className="pt-[60px] pb-[80px] rounded-lg bg-[#e3ecee] px-10 sm:px-[75px] text-center mb-14">
        <div className="w-full">
          <div className="pb-6">
            <h2 className="text-secondary font-medium pb-[1.5rem] text-3xl">
              Book a property valuation
            </h2>
            <p className="col-md-7 col-11 mx-auto text-primary text-base sm:w-[60%] pb-[10px] font-light ">
              <span className="text-base">
                We have a waitlist of clients ready to view properties,
                extensive comparable community data and a trusted reputation.{" "}
              </span>
              Just three of the reasons why people choose us.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:items-center  ">
          <div className="lg:w-1/2 lg:mx-10">
            <form className="mt-12 space-y-4">
              <Book_Input type="text" placeholder="Full Name*" />
              <Book_Input type="email" placeholder="Email*" />
              <DropdownBookValuation />
              <Country_Input />
              <Book_Input type="phone" placeholder="Phone Number*" />
              <Book_Input type="text" placeholder="Property Address*" />

              <button className="bg-primary group flex items-center mt-5 py-4 text-white hover:bg-white  hover:text-primary font-semibold text-sm rounded-full capitalize px-8 w-full justify-center">
                {" "}
                Submit Details
              </button>
            </form>
          </div>
          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
              className="hidden object-cover mx-auto rounded-lg lg:block shrink-0 "
              src="https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2Fmedium_Girl_Cover_allsopp_fb80624339.jpg%3Fupdated_at%3D2023-05-30T07%3A33%3A54.345Z&w=1920&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
