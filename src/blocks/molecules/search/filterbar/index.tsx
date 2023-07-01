"use client";

import React, { useState } from "react";
import { beds_options, price_min_max, property_types } from "./data";

const Filterbar = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  return (
    <div className="bg-white w-full absolute p-5 border-2 rounded-3xl">
      <div className="grid-cols-2 grid gap-5">
        <div>
          <h4 className="mb-3">Minimum Price</h4>
          <Select
            data={price_min_max}
            value={minPrice}
            onChange={setMinPrice}
            disabledOption="Minimum Price"
          />
        </div>

        <div>
          <h4 className="mb-3">Maximum Price</h4>
          <Select
            data={price_min_max}
            value={maxPrice}
            onChange={setMaxPrice}
            disabledOption="Maximum Price"
          />
        </div>
      </div>

      <div className="grid-cols-2 grid gap-5 mt-5">
        <div>
          <h4 className="mb-3">Property Type</h4>
          <Select
            data={property_types}
            value={propertyType}
            onChange={setPropertyType}
            disabledOption="Property Type"
          />
        </div>

        <div>
          <h4 className="mb-3">Bedrooms</h4>
          <Select
            data={beds_options}
            value={bedrooms}
            onChange={setBedrooms}
            disabledOption="Bedrooms"
          />
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <button className="py-3.5 px-20 text-white text-sm bg-primary rounded-full">
          Search
        </button>
      </div>
    </div>
  );
};

export default Filterbar;

export const Select = ({
  data,
  value,
  onChange,
  disabledOption,
}: {
  data: {
    value: string;
    label: string;
  }[];
  value: string;
  onChange: (value: string) => void;
  disabledOption: string;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select
      className="select w-full max-w-xs  border-primary  p-2.5 text-gray-500 bg-white border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
      value={value}
      onChange={handleChange}
    >
      <option disabled value="">
        {disabledOption}
      </option>
      {data.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
