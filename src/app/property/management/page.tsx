import Container from "@/blocks/atoms/container";
import Book_Valuation from "@/blocks/sections/book-valuation";
import Landing from "@/blocks/sections/landing";

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
        <Plan />
        <Service />
        <Book_Valuation />
        {/* form goes here */}
      </Container>
    </div>
  );
}

const Plan = () => {
  return (
    <>
      <section className="Floor-plan pt-[80px] lg:pt-[120px] mb-20">
        <div className="container">
          <div className="grid gap-x-[30px]">
            <div className="col-span-12 relative pb-[45px] text-center max-w-[480px] mx-auto">
              <span className="text-secondary text-tiny inline-block mb-2">
                Floor Plan
              </span>
              <h2 className="font-lora text-primary text-[24px] sm:text-3xl capitalize mb-3 font-medium">
                Check our Floor Plan<span className="text-secondary">.</span>
              </h2>
              <p>
                Huge number of propreties availabe here for buy, sell and Rent.
                Also you find here co-living property, lots opportunity
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[30px] mb-[-30px]">
            <div className="text-center">
              <img
                src="/floor2.webp"
                width={370}
                height={484}
                alt="Floor Plan"
              />
              <p>Ground floor</p>
            </div>
            <div className="text-center">
              <img
                src="/floor1.webp"
                width={361}
                height={491}
                alt="Floor Plan"
              />
              <p>Single flat</p>
            </div>
            <div className="text-center">
              <img
                src="/floor3.webp"
                width={370}
                height={484}
                alt="Floor Plan"
              />
              <p>1st Floor</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <section className="pt-[80px] pb-[120px] lg:py-[120px]">
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
          <div className="relative group">
            <a href="properties-details.html" className="block">
              <img
                src="/service1.webp"
                className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                loading="lazy"
                width={270}
                height={290}
                alt="Sale Property"
              />
              <div className="drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_8px_20px_rgba(0,0,0,0.15)] bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[25px] py-[25px]">
                <h3 className="font-lora font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all mb-[5px]">
                  Sale Property
                  <span className="text-secondary group-hover:text-primary">
                    .
                  </span>{" "}
                </h3>
                <p className="font-light text-tiny">
                  Provide prorpery Sale options opportunity to find the best{" "}
                </p>
              </div>
            </a>
          </div>
          <div className="relative group">
            <a href="properties-details.html" className="block">
              <img
                src="/service2.webp"
                className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                loading="lazy"
                width={270}
                height={290}
                alt="Buy Property"
              />
              <div className="drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_8px_20px_rgba(0,0,0,0.15)] bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[25px] py-[25px]">
                <h3 className="font-lora font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all mb-[5px]">
                  Buy Property
                  <span className="text-secondary group-hover:text-primary">
                    .
                  </span>{" "}
                </h3>
                <p className="font-light text-tiny">
                  Provide prorpery Sale options opportunity to find the best{" "}
                </p>
              </div>
            </a>
          </div>
          <div className="relative group">
            <a href="properties-details.html" className="block">
              <img
                src="/service3.webp"
                className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                loading="lazy"
                width={270}
                height={290}
                alt="Rent Property"
              />
              <div className="drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_8px_20px_rgba(0,0,0,0.15)] bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[25px] py-[25px]">
                <h3 className="font-lora font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all mb-[5px]">
                  Rent Property
                  <span className="text-secondary group-hover:text-primary">
                    .
                  </span>{" "}
                </h3>
                <p className="font-light text-tiny">
                  Provide prorpery Sale options opportunity to find the best{" "}
                </p>
              </div>
            </a>
          </div>
          <div className="relative group">
            <a href="properties-details.html" className="block">
              <img
                src="/service4.webp"
                className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]"
                loading="lazy"
                width={270}
                height={290}
                alt="Mortgage"
              />
              <div className="drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_8px_20px_rgba(0,0,0,0.15)] bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[25px] py-[25px]">
                <h3 className="font-lora font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all mb-[5px]">
                  Mortgage
                  <span className="text-secondary group-hover:text-primary">
                    .
                  </span>{" "}
                </h3>
                <p className="font-light text-tiny">
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
