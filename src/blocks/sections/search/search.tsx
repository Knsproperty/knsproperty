"use client";
interface Props {
  url: string;
  args: string;
}

import useSWR from "swr";
import Results from "./result";
import { FiSearch } from "react-icons/fi";
import { useState, useRef } from "react";
import PropertyType from "./property-type";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import { useDebouncedValue } from "@mantine/hooks";

const SimpleSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("buy");
  const inputRef = useRef<HTMLInputElement>(null);
  const [debounced] = useDebouncedValue(search, 500);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const fetcher = async (query: Props) => {
    const contentType =
      active === "buy"
        ? "buy-properties"
        : active === "rent"
        ? "rent-properties"
        : "off-plans";

    if (query) {
      const queryData = await fetch(
        `https://ksnpropertiesstrapi-production.up.railway.app/api/fuzzy-search/search?query=${query.args}&filters[contentTypes]=${contentType}`
      );
      const res = await queryData.json();
      console.log(res);
      console.log(contentType);
      return res[contentType];
    } else {
      return [];
    }
  };

  const { data, isLoading } = useSWR(
    debounced ? { url: "/api/orders", args: debounced } : null,
    fetcher
  );

  const hadleSearch = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  const handleSearchClear = () => {
    setSearch("");
  };

  const onSubmit = (event: React.FormEvent) => {
    event.stopPropagation();
    event.preventDefault();
    router.push(`/property/${active}?query=${search}`);
  };
  return (
    <div className=" mt-5  rounded-md  lg:p-2 py-4 ">
      <div className=" grid gap-5 lg:flex">
        <h3 className="text-lg font-medium _center text-white">
          I'm Looking to
        </h3>

        <PropertyType
          active={active}
          setActive={setActive}
          clear={handleSearchClear}
        />

        <section className="relative">
          <form
            onSubmit={onSubmit}
            onClick={handleContainerClick}
            className="bg-white shadow-md md:h-[60px] h-[55px] px-3 pl-5 items-center flex rounded-full gap-3 border mx-auto  border-[#80808039] "
          >
            <FiSearch size={18} className="mr-1" />
            <p className="text-primary hidden lg:block">Where &nbsp; ›</p>
            <input
              ref={inputRef}
              placeholder="Community or Building"
              className="border-none text-sm md:text-md outline-none xl:min-w-[400px] placeholder:text-light flex-1 placeholder:text-sm focus:border-none focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className=" lg:w-[50px] w-[20px] _center">
              {isLoading && (
                <span className="loading loading-spinner loading-sm" />
              )}
            </div>
            <button
              type="submit"
              onClick={onSubmit}
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
          <Results active={active} data={data} />
        </section>
      </div>
    </div>
  );
};

export default SimpleSearch;
