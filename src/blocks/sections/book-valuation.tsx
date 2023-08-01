import React from "react";
import Container from "../atoms/container";
import Book_Input from "../atoms/inputs/book-v-input";
import CountryPhoneNumberInput from "../atoms/inputs/country-input";
import Image from "next/image";
import BookValuationForm from "../molecules/forms/bookValuation";

export default function Book_Valuation() {
  return (
    <section className="bg-[#e3ecee]" id="contact">
      <Container>
        <div className="lg:pt-[60px] lg:pb-[80px] py-10 rounded-lg px-5 text-center">
          <div className="w-full">
            <div className="pb-6">
              <h2
                className={
                  "text-secondary pb-[1.5rem] lg:text-2xl md:text-xl text-xl font-medium"
                }
              >
                Contact Us
              </h2>
              <p className="col-md-7 col-11 mx-auto text-primary text-base sm:w-[60%] pb-[10px]  ">
                We have a waitlist of clients ready to view properties,
                extensive comparable community data, and a trusted reputation.
                We're here to help! Feel free to reach out to us, and we'll
                respond promptly. Let's start a conversation
                today. Contact us now!
              </p>
            </div>
          </div>
          <div className="lg:flex lg:items-center lg:max-w-none lg:mx-0 max-w-[500px] mx-auto">
            <div className="mt-16 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10 ">
              <Image
                width={450}
                height={200}
                className="hidden object-cover mx-auto rounded-lg lg:block shrink-0 mt-6"
                src="/person13.webp"
                alt=""
              />
            </div>
            <div className="lg:w-1/2 lg:mx-10">
              <BookValuationForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
