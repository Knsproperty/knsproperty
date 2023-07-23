import React from "react";

export default function Banner({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative table w-full py-32 lg:py-36 bg-[url('/bg-1.webp')] bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-black opacity-60 -z-25" />
      <div className="container -z-26 max-w-[1320px] lg:mx-auto">
        {children}
        {/*end grid*/}
      </div>
      {/*end container*/}
    </section>
  );
}
