import { Metadata } from "next";
import Image from "next/image";
import Container from "@/blocks/atoms/container";
import Landing from "@/blocks/sections/landing";
import Book_Valuation from "@/blocks/sections/book-valuation";

export default function Management() {
  return (
    <div>
      <Landing background="url('/property-management.jpg')">
        <div>
          <h1 className="lg:text-5xl md:text-3xl text-xl  font-semibold text-white text-center">
            Property Management
          </h1>
        </div>
      </Landing>

      <Container>
        <Service />
        <Book_Valuation />
        {/* form goes here */}
      </Container>
    </div>
  );
}

const Service = () => {
  return (
    <section className="pt-[80px] pb-[120px] lg:py-[120px] px-5">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="mb-[30px] lg:mb-[60px] text-center">
              <span className="text-secondary text-tiny inline-block mb-2">
                Our Services
              </span>
              <h2 className="font-lora text-primary text-[24px] sm:text-3xl font-medium">
                Services that we Provide
                <span className="text-secondary">.</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          <div className="relative group hover:-translate-y-10 transition-all d duration-200 ease-linear h-full">
            <a className="block">
              <Image
                width={235}
                height={157}
                src="/sale.jpg"
                className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                loading="lazy"
                alt="Sale Property"
              />
              <div className="drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_8px_20px_rgba(0,0,0,0.15)] bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[25px] py-[25px]">
                <h3 className="font-lora font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all mb-[5px]">
                  Sale Property
                  <span className="text-secondary group-hover:text-primary">
                    .
                  </span>{" "}
                </h3>
                <p className="  text-tiny">
                  Provide prorpery Sale options opportunity to find the best{" "}
                </p>
              </div>
            </a>
          </div>
          <div className="relative group hover:-translate-y-10 transition-all d duration-200 ease-linear h-full">
            <a className="block">
              <Image
                width={235}
                height={157}
                src="/buy.jpg"
                className="w-full h-[200px] block mx-auto rounded-[6px_6px_0px_0px]"
                loading="lazy"
                alt="Buy Property"
              />
              <div className="drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_8px_20px_rgba(0,0,0,0.15)] bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[25px] py-[25px]">
                <h3 className="font-lora font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all mb-[5px]">
                  Buy Property
                  <span className="text-secondary group-hover:text-primary">
                    .
                  </span>
                </h3>
                <p className="  text-tiny">
                  Provide prorpery Sale options opportunity to find the best{" "}
                </p>
              </div>
            </a>
          </div>
          <div className="relative group hover:-translate-y-10 transition-all d duration-200 ease-linear h-full">
            <a className="block">
              <Image
                width={235}
                height={157}
                src="/rent.jpg"
                className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                loading="lazy"
                alt="Rent Property"
              />
              <div className="drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_8px_20px_rgba(0,0,0,0.15)] bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[25px] py-[25px]">
                <h3 className="font-lora font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all mb-[5px]">
                  Rent Property
                  <span className="text-secondary group-hover:text-primary">
                    .
                  </span>{" "}
                </h3>
                <p className="  text-tiny">
                  Provide prorpery Sale options opportunity to find the best{" "}
                </p>
              </div>
            </a>
          </div>
          <div className="relative group hover:-translate-y-10 transition-all d duration-200 ease-linear h-full">
            <a className="block">
              <Image
                width={235}
                height={157}
                src="/mortage.jpg"
                className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                alt="Mortgage"
              />
              <div className="drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_8px_20px_rgba(0,0,0,0.15)] bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[25px] py-[25px]">
                <h3 className="font-lora font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all mb-[5px]">
                  Mortgage
                  <span className="text-secondary group-hover:text-primary">
                    .
                  </span>{" "}
                </h3>
                <p className="  text-tiny">
                  Provide prorpery Sale options opportunity to find the best{" "}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const metadata: Metadata = {
  title: "Buy Properties | K&S Properties",
  description:
    "Explore a wide range of properties for sale, rent, and investment in Dubai. Find luxury villas, apartments, commercial spaces, and more.",
  keywords: [
    "Dubai properties",
    "real estate",
    "buy property in Dubai",
    "rent property in Dubai",
    "investment properties",
  ],
  authors: [{ name: "", url: "" }],
  abstract: "",
  publisher: "K&N PROPERTIES",
};
