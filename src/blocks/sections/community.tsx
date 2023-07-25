import React from "react";
import Container from "../atoms/container";
import Link from "next/link";

export default function Community() {
  return (
    <Container>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold ">Our Community</h3>
            <p className=" mx-auto mt-4">Locate your home in either a luxurious or a family-friendly community.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">

            <Link href={'/property/buy'}>
              <div className="relative group hover:-translate-y-10 ease-in-out duration-500 transition-all">
                <div className="absolute top-0 left-0 w-full h-full _center bg-black bg-opacity-40 px-5 text-white hidden group-hover:flex ease-in-out duration-200 transition-all">
                  <h1 className="text-white font-bold text-3xl translate-x-5 group-hover:-translate-x-5">DownTown Dubai</h1>
                </div>
                <img className="w-full" src="/pic2.jpg" alt="" />
              </div>
            </Link>

            <Link href={'/property/buy'}>
              <div className="relative group hover:-translate-y-10 ease-in-out duration-500 transition-all">
                <div className="absolute top-0 left-0 w-full h-full _center bg-black bg-opacity-40 px-5 text-white hidden group-hover:flex ease-in-out duration-200 transition-all">
                  <h1 className="text-white font-bold text-3xl  group-hover:translate-x-0">Dubai Marina</h1>
                </div>
                <img className="w-full" src="/pic3.jpg" alt="" />
              </div>
            </Link>


            <Link href={'/property/buy'}>
              <div className="relative group hover:-translate-y-10 ease-in-out duration-500 transition-all">
                <div className="absolute top-0 left-0 w-full h-full _center bg-black bg-opacity-40 px-5 text-white hidden group-hover:flex ease-in-out duration-200 transition-all">
                  <h1 className="text-white font-bold text-3xl translate-x-5 group-hover:-translate-x-5">Business Bay</h1>
                </div>
                <img className="w-full" src="/pic4.jpg" alt="" />
              </div>
            </Link>
          </div>


          <div className="mt-8 text-center md:mt-16">
            <a href="#" title="" className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700" role="button"> Join our team </a>
          </div>
        </div>
      </section>
    </Container >
  );
}
