import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../atoms/container";

export default function Community() {
  return (
    <Container>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-center lg:text-4xl md:text-3xl text-2xl font-bold ">
              Our Community
            </h3>
            <p className="mx-auto mt-4">
              Locate your home in either a luxurious or a family-friendly
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <Comp
              href="/property/buy"
              title="DownTown Dubai"
              image="/Downtown-dubai.png"
            />
            <Comp
              href="/property/buy"
              title="Dubai Marina"
              image="/Dubai-marina.png"
            />
            <Comp
              href="/property/buy"
              title="Business Bay"
              image="/Business-bay.png"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}

const Comp = ({ href, image, title }: any) => {
  return (
    <Link href={href}>
      <div className="relative h-full group md:hover:-translate-y-10 ease-in-out duration-500 transition-all">
        <div className="absolute top-0 left-0 w-full h-full _center bg-black bg-opacity-40 px-5 text-white hidden group-hover:flex ease-in-out duration-200 transition-all">
          <h1 className="text-white font-bold text-3xl translate-x-5 group-hover:-translate-x-5">
            {title}
          </h1>
        </div>
        <Image
          width={370}
          src={image}
          alt={title}
          height={530}
          className="w-full h-full"
        />
      </div>
    </Link>
  );
};
