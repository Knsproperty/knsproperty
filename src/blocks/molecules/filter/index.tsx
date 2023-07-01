"use client";
import Container from "@/blocks/atoms/container";
import { FiSearch } from "react-icons/fi";
import { Dropdown, DropdownBuyRent } from "./dropdown";
import {
  property_types,
  beds_options,
  price_min_max,
} from "../search/filterbar/data";
import { useState } from "react";
import { deleteSearchParams, updateSearchParams } from "@/utils/param";
import { useRouter } from "next/navigation";

const Filter = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState(""); // State for the search input
  const [type, setPropertyType] = useState(""); // State for property type
  const [min, setPriceMin] = useState(""); // State for minimum price
  const [max, setPriceMax] = useState(""); // State for maximum price
  const [bedrooms, setBeds] = useState(""); // State for number of beds

  const handleUpdateParams = (title: string, value: string) => {
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
          newPathName = updateSearchParams("type", value.toLowerCase());
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
  };

  return (
    <div className="bg-[#e3effa]">
      <Container>
        <div className="h-[88px] grid grid-cols-[1fr_2fr] gap-5 items-center px-10">
          <div className="bg-white rounded-full flex items-center py-3 px-5 gap-4 relative">
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
          </div>

          <div className="w-full flex gap-5">
            <DropdownBuyRent />
            <Dropdown
              title="Property type"
              options={property_types}
              setter={setPropertyType} // Pass the setter function for property type
              handleUpdateParams={handleUpdateParams} // Pass the handleUpdateParams function as a prop
            />
            <Dropdown
              title="Price Min"
              options={price_min_max}
              setter={setPriceMin} // Pass the setter function for minimum price
              handleUpdateParams={handleUpdateParams} // Pass the handleUpdateParams function as a prop
            />
            <Dropdown
              title="Price Max"
              options={price_min_max}
              setter={setPriceMax} // Pass the setter function for maximum price
              handleUpdateParams={handleUpdateParams} // Pass the handleUpdateParams function as a prop
            />
            <Dropdown
              title="Beds"
              options={beds_options}
              setter={setBeds} // Pass the setter function for number of beds
              handleUpdateParams={handleUpdateParams} // Pass the handleUpdateParams function as a prop
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Filter;
