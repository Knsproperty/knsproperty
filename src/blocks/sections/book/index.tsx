import React from "react";
import Container from "@/blocks/atoms/container";
import Booking_Form from "@/blocks/molecules/forms/booking";
export default function Booking() {
  return (
    <section className=" py-10 md:py-16 bg-primary group">
      <Container>
        <div className="px-4 xl:relative">
          <div className=" flex flex-col lg:flex-row items-center justify-evenly py-14 rounded-3xl">
            <div className=" lg:text-left mb-10 lg:mb-0 max-w-md">
              <h1 className="font-semibold text-white md:text-5xl text-2xl  mb-4">
                Talk to us <br /> to discuss
              </h1>
              <p className="font-normal text-white">
                Need more time to discuss? Won’t worry, we are  ready to
                help you. You can fill in the column on the  right to book
                a meeting with us. Totally free.
              </p>
            </div>
            <div className="hidden xl:block xl:absolute right-0">
              <img
                className=" group-hover:scale-125 transition-all duration-500 ease-linear group-hover:animate-pulse"
                src="/book.png"
                alt="Image"
              />
            </div>
            <Booking_Form />
          </div>
        </div>
      </Container>
    </section>
  );
}
