'use client'

import Container from "../atoms/container";
import Parallax from "../atoms/parallex";
const Testimonals = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-800 ">Reviews by customers</h2>
        </div>
        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
          <Element />
          <Parallax>
            <Element />
          </Parallax>
          <Element />


        </div>
      </Container>
    </section>

  );
};

export default Testimonals;


const Element = ({ n, d, p }: any) => (
  <div className="overflow-hidden bg-white rounded-md hover:drop-shadow-md hover:-translate-y-10 duration-500 ease-in-out group skew-x-12 relative">
    <div className="px-8 py-12 -skew-x-12">
      <p className="text-base font-semibold tex-tblack">
        Jenny Wilson
      </p>
      <p className="mt-1 text-base text-gray-600">
        Project Manager at Microsoft
      </p>
      <blockquote className="mt-7">
        <p className="text-lg text-black">
          “Amet minim mollit non deserunt ullam co est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat”
        </p>
      </blockquote>

    </div>
  </div>
)