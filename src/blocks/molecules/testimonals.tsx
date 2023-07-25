'use client'

import Container from "../atoms/container";
import Parallax from "../animation/parallex";
import { testimonials } from "@/config/testimonals";
const Testimonals = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold leading-tight">Reviews by customers</h2>
        </div>
        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
          <Element {...testimonials[0]} />
          <Parallax>
            <Element {...testimonials[1]} />
          </Parallax>
          <Element {...testimonials[2]} />


        </div>
      </Container>
    </section>

  );
};

export default Testimonals;


const Element = ({ name, review }: any) => (
  <div className="overflow-hidden bg-white rounded-md hover:drop-shadow-md hover:-translate-y-10 duration-500 ease-in-out group md:skew-x-12 relative">
    <div className="px-8 py-12 md:-skew-x-12">
      <p className="text-base font-semibold tex-tblack">
        {name}
      </p>
      <blockquote className="mt-7">
        <p className=" text-sm text-black">
          “{review}”
        </p>
      </blockquote>

    </div>
  </div>
)