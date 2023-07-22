import React from "react";

export default function Banner({ heading }: { heading: string }) {
  return (
    <section className="relative table w-full py-32 lg:py-36 bg-[url('/01.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-black opacity-60 -z-25" />
      <div className="container -z-26">
        <div className="grid grid-cols-1 text-center mt-10 ">
          <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium !text-white z-50">
            Blogs & News
          </h3>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
    </section>
  );
}
