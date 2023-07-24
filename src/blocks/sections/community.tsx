import React from "react";
import Container from "../atoms/container";
import Link from "next/link";

export default function Community() {
  return (
    <Container>
      {" "}
      <section className="relative -z-10 py-20 bg-[url('/commune.jpg')] bg-no-repeat bg-center bg-fixed bg-cover mb-10">
        <div className="absolute inset-0 bg-black/60 -z-20" />
        <div className="container ">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl sm:leading-tight mb-3">
              Community Guide
            </h2>
            <p className="text-white">
              We are partnered with the leading developers of Dubai to provide
              you top quality properties guaranteed to satisfy your expectations
              in both terms; your Living Standards as well a Sound Investment
            </p>
          </div>
          <section className="py-10  ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-4 md:mt-16 lg:gap-x-12">
                <Link href={"/buy"}>
                  <img className="w-full h-96" src="/pic2.jpg" alt="" />
                  <p className="bg-primary text-white text-center font-semibold py-1">
                    DownTown Dubai
                  </p>
                </Link>
                <Link href={"/buy"}>
                  <img className="w-full h-96" src="/pic3.jpg" alt="" />
                  <p className="bg-primary text-white text-center font-semibold py-1">
                    Dubai Marina
                  </p>
                </Link>
                <Link href={"/buy"}>
                  <img className="w-full h-96" src="/pic4.jpg" alt="" />
                  <p className="bg-primary text-white text-center font-semibold py-1">
                    Business Bay
                  </p>
                </Link>
                <Link href={"/buy"}>
                  <img className="w-full h-96" src="/pic5.jpg" alt="" />
                  <p className="bg-primary text-white text-center font-semibold py-1">
                    Meydan
                  </p>
                </Link>
              </div>
            </div>
          </section>

          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
    </Container>
  );
}
