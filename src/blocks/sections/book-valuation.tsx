import React from "react";
import Container from "../atoms/container";
import Book_Input from "../atoms/inputs/book-v-input";
import CountryPhoneNumberInput from "../atoms/inputs/country-input";

export default function Book_Valuation() {
  return (
    <section className="bg-[#e3ecee]" id="contact">
      <Container>
        <div className="lg:pt-[60px] lg:pb-[80px] py-10 rounded-lg px-5 text-center">
          <div className="w-full">
            <div className="pb-6">
              <h2 className={'text-secondary pb-[1.5rem] lg:text-2xl md:text-xl text-xl font-medium'}>
                Contact Us
              </h2>
              <p className="col-md-7 col-11 mx-auto text-primary text-base sm:w-[60%] pb-[10px] font-light">
                We have a waitlist of clients ready to view properties,
                extensive comparable community data and a trusted reputation.
                Just three of the reasons why people choose us.
              </p>
            </div>
          </div>
          <div className="lg:flex lg:items-center lg:max-w-none lg:mx-0 max-w-[500px] mx-auto">
            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
              <img
                className="hidden object-cover mx-auto rounded-lg lg:block shrink-0 "
                src="https://plus.unsplash.com/premium_photo-1661371767935-aeeb44523816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
            <div className="lg:w-1/2 lg:mx-10">
              <form className="mt-12 space-y-4">
                <Book_Input type="text" placeholder="Full Name*" />
                <Book_Input type="email" placeholder="Email*" />
                <select className="select w-full bg-white rounded-full pl-8 font-light text-[#A7ADB8] ">
                  <option disabled selected className="text-sm ">Property type</option>
                  <option value={'buy'}>Buy</option>
                  <option value={'rent'}>Rent</option>
                </select>

                <CountryPhoneNumberInput />
                <Book_Input type="text" placeholder="Property Address*" />

                <button className="bg-primary group flex items-center mt-5 py-4 text-white hover:bg-white  hover:text-primary font-medium text-sm rounded-full capitalize px-8 w-full justify-center ">
                  Submit Details
                </button>
              </form>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
