"use client";
import { useState, useCallback, useMemo } from "react";
import { LuFilter } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import Container from "@/blocks/atoms/container";
import { DropdownBuyRent, Dropdown } from "./dropdown";
import { useRouter, usePathname } from "next/navigation";
import { deleteSearchParams, updateSearchParams } from "@/utils/param";
import {
  property_types,
  beds_options,
  price_min_max,
} from "../search/filterbar/data";
import AppliedFilters from "./applied_filters";
import { useSearchParams } from "next/navigation";
const Filter = () => {
  const search = useSearchParams();
  const router = useRouter();

  const pathname = usePathname();

  const [filterVisibility, setFilterVisibility] = useState(false);
  const [searchInput, setSearchInput] = useState(search.get("query") ?? "");
  const [min, setPriceMin] = useState(search.get("min") ?? "");
  const [max, setPriceMax] = useState(search.get("max") ?? "");
  const [bedrooms, setBeds] = useState(search.get("bedrooms") ?? "");
  const [type, setPropertyType] = useState(search.get("type") ?? "");

  // Memoized event handler functions using useCallback
  const handleFilterClick = useCallback(() => {
    setFilterVisibility((prevState) => !prevState);
  }, []);

  // Memoized handleUpdateParams using useCallback
  const handleUpdateParams = useCallback(
    (title: string, value: string) => {
      let newPathName = "";

      // Check if the selected value is "Show All"
      if (value === "Show All") {
        // Delete the corresponding search parameter
        switch (title) {
          case "Property type":
            setPropertyType(value);
            newPathName = deleteSearchParams("type"); // Call the deleteSearchParams function with the parameter name
            break;
          case "Price Min":
            setPriceMin(value);
            newPathName = deleteSearchParams("min");
            break;
          case "Price Max":
            setPriceMax(value);
            newPathName = deleteSearchParams("max");
            break;
          case "Beds":
            setBeds(value);
            newPathName = deleteSearchParams("bedrooms");
            break;
          default:
            break;
        }
      } else {
        // Update the corresponding search parameter
        switch (title) {
          case "Property type":
            setPropertyType(value);
            newPathName = updateSearchParams("type", value);
            break;
          case "Price Min":
            setPriceMin(value);
            newPathName = updateSearchParams("min", value.toLowerCase());
            break;
          case "Price Max":
            setPriceMax(value);
            newPathName = updateSearchParams("max", value.toLowerCase());
            break;
          case "Beds":
            setBeds(value);
            newPathName = updateSearchParams("bedrooms", value.toLowerCase());
            break;
          default:
            break;
        }
      }

      router.push(newPathName);
    },
    [router]
  );
  const handleRemoveFilter = (filter: string) => {
    // Split the filter string to get the filter title and value
    const [title, value] = filter.split(": ");

    // Update the corresponding state based on the filter title
    switch (title) {
      case "Property Type":
        setPropertyType(""); // Set to an empty string to remove the filter
        break;
      case "Min Price":
        setPriceMin(""); // Set to an empty string to remove the filter
        break;
      case "Max Price":
        setPriceMax(""); // Set to an empty string to remove the filter
        break;
      case "Beds":
        setBeds(""); // Set to an empty string to remove the filter
        break;
      default:
        break;
    }

    // Remove the filter from the URL and update the route
    const paramKey = title.toLowerCase().replace(" ", "_");
    const updatedSearchParams = deleteSearchParams(paramKey);
    router.push(updatedSearchParams);
  };
  // Memoize the Dropdown components using useMemo
  const dropdownBuyRent = useMemo(() => <DropdownBuyRent />, []);
  const dropdownPropertyType = useMemo(
    () => (
      <Dropdown
        title="Property type"
        options={property_types}
        setter={setPropertyType}
        handleUpdateParams={handleUpdateParams}
      />
    ),
    [handleUpdateParams]
  );
  const dropdownPriceMin = useMemo(
    () => (
      <Dropdown
        title="Price Min"
        options={price_min_max}
        setter={setPriceMin}
        handleUpdateParams={handleUpdateParams}
      />
    ),
    [handleUpdateParams]
  );
  const dropdownPriceMax = useMemo(
    () => (
      <Dropdown
        title="Price Max"
        options={price_min_max}
        setter={setPriceMax}
        handleUpdateParams={handleUpdateParams}
      />
    ),
    [handleUpdateParams]
  );
  const dropdownBeds = useMemo(
    () => (
      <Dropdown
        title="Beds"
        options={beds_options}
        setter={setBeds}
        handleUpdateParams={handleUpdateParams}
      />
    ),
    [handleUpdateParams]
  );

  const handleFormSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      router.push(updateSearchParams("query", searchInput));
    },
    [router, searchInput]
  );

  if (!["/property/buy", "/property/rent"].includes(pathname)) {
    return null;
  }

  return (
    <div className="bg-[#e3effa]">
      <Container>
        <div className="lg:h-[88px] py-3 lg:py-0 grid lg:grid-cols-[1fr_2fr] grid-cols-[auto_50px] lg:gap-5 gap-2 items-center lg:px-10 px-2">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white rounded-full flex items-center py-3 px-5 gap-4 relative"
          >
            <div className="_center">
              <FiSearch size={18} />
            </div>

            <input
              className="border-none outline-none placeholder:text-sm text-sm placeholder:font-light w-full"
              placeholder="Community or Building"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>

          <button onClick={handleFilterClick} className="_center lg:hidden">
            <LuFilter size={22} />
          </button>

          <div className=" lg:flex w-full hidden gap-5">
            {dropdownBuyRent}
            {dropdownPropertyType}
            {dropdownPriceMin}
            {dropdownPriceMax}
            {dropdownBeds}
          </div>
        </div>

        {filterVisibility && (
          <div className="pb-5 lg:hidden block px-2">
            <div className=" flex w-full flex-col gap-3">
              {dropdownBuyRent}
              {dropdownPropertyType}
              {dropdownPriceMin}
              {dropdownPriceMax}
              {dropdownBeds}
            </div>
          </div>
        )}
      </Container>
      <AppliedFilters
        min={min}
        max={max}
        type={type}
        bedrooms={bedrooms}
        handleUpdateParams={handleUpdateParams}
      />
    </div>
  );
};

export default Filter;
