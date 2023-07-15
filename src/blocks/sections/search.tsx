"use client";
import { ButtonHTMLAttributes, useRef, useState } from "react";

import { FiArrowRight } from "react-icons/fi";
function SearchSection() {
  return (
    <section className="lg:h-[30vh] h-auto bg-center bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]  bg-no-repeat bg-cover  ">
      <div className="w-full h-full lg:flex lg:items-center lg:justify-center bg-[#00000047] backdrop-brightness-50">
        <div className="lg:flex lg:items-center lg:justify-center flex-col py-5 lg:p-5 p-2 lg:px-0">
          {/* <h1 className="lg:text-5xl text-3xl  font-medium text-center text-white">
                        Search Properties
                    </h1> */}

          <SimpleSearch />
        </div>
      </div>
    </section>
  );
}

export default SearchSection;

import { FiSearch, FiX } from "react-icons/fi";
import strapi, { populate } from "@/utils/strapi";
import { useDebouncedValue } from "@mantine/hooks";
import { useRouter } from "next/navigation";

const SimpleSearch = () => {
  const router = useRouter();
  const [active, setActive] = useState("commercial");
  const [search, setSearch] = useState("");
  const [debounced] = useDebouncedValue(search, 500);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const hadleSearch = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();

    alert("im first");
  };
  const handleOnchange = async (e: any) => {
    const buy_properties = await strapi.find<any>("buy-properties", {
      populate: populate,
      filters: {
        Name: {
          $containsi: debounced,
        },
      },
    });
    return buy_properties.data;
  };
  const handleCloseClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => { };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(
      `/property/${active === "residental"
        ? "buy"
        : active === "commercial"
          ? "rent"
          : "offplan"
      }?query=${search}`
    );
  };
  return (
    <div className=" mt-5  rounded-md  lg:p-2 py-4 ">
      <div className=" grid gap-5 lg:flex">
        <h3 className="text-lg font-medium _center text-white">
          I'm Looking to
        </h3>

        <PropertyType active={active} setActive={setActive} />

        <section className="relative">
          <form
            onSubmit={onSubmit}
            onClick={handleContainerClick}
            className="bg-white shadow-md md:h-[60px] h-[55px] px-3 pl-5 items-center flex rounded-full gap-3 border  border-[#80808039]"
          >
            <FiSearch size={18} className="mr-1" />
            <p className="text-primary hidden lg:block">Where &nbsp; ›</p>
            <input
              ref={inputRef}
              placeholder="Community or Building"
              className="border-none text-sm md:text-mdoutline-none xl:min-w-[400px] placeholder:text-light placeholder:text-sm flex-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="hidden lg:block" onClick={handleCloseClick}>
              <FiX size={18} />
            </button>
            <button
              type="submit"
              // onClick={hadleSearch}
              className="bg-primary text-white px-5 py-2.5 rounded-full capitalize text-sm hidden md:block"
            >
              search
            </button>
            <button
              onClick={hadleSearch}
              className="bg-primary text-white px-5 py-2.5 rounded-full capitalize text-sm block md:hidden"
            >
              <FiArrowRight className=" stroke-white" />
            </button>
          </form>
        </section>
        <section className="bg-white shadow-md rounded-md px-5 hidden">
          <p className="text-sm pt-3 capitalize text-secondary font-semibold">
            results
          </p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          animi nam sit molestiae. Atque quibusdam aliquam eveniet nihil
          deserunt, debitis quisquam dignissimos nemo dolore, odio quam ipsa
          obcaecati porro nulla!
        </section>
      </div>
    </div>
  );
};

const PropertyType = ({ active, setActive }: any) => {
  // const [active, setActive] = useState("commercial");
  const buttons = ["commercial", "residental", "offplan"].map((name) => (
    <button
      onClick={() => {
        setActive(name);
      }}
      className={`text-white px-5 py-2.5 rounded-full md:text-sm text-[13px] capitalize ${active == name ? "bg-primary " : "bg-transparent"
        }`}
      key={name}
    >
      {name}
    </button>
  ));
  return (
    <div className="bg-secondary px-3 rounded-full overflow-hidden sm:flex items-center grid grid-cols-3 h-[60px] mx-auto ">
      {buttons}
    </div>
  );
};
