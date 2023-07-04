"use client";
import React, { useState } from "react";
import { beds_options, price_min_max, property_types } from "./filterbar/data";

const Filterbar = () => {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [propertyType, setPropertyType] = useState("");

    return (
        <div className="bg-white w-full grid gap-2 p-5 max-w-lg lg:hidden mx-auto rounded-md mt-3">

            <input
                type="text"
                className="w-full h-full py-4 px-2.5 rounded-md  bg-white border border-primary font-light text-sm placeholder:text-sm placeholder:font-light "
                placeholder="Community or Building"
            />

            <Select
                data={price_min_max}
                value={minPrice}
                onChange={setMinPrice}
                disabledOption="Minimum Price"
            />
            <Select
                data={price_min_max}
                value={maxPrice}
                onChange={setMaxPrice}
                disabledOption="Maximum Price"
            />



            <Select
                data={property_types}
                value={propertyType}
                onChange={setPropertyType}
                disabledOption="Property Type"
            />
            <Select
                data={beds_options}
                value={bedrooms}
                onChange={setBedrooms}
                disabledOption="Bedrooms"
            />

            <div className="mt-5 flex justify-center">
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
            className="select !w-full border-primary p-2.5 text-gray-500 bg-white border rounded-md  outline-none appearance-none focus:border-indigo-600 !font-[400] !text-sm"
            value={value}
            onChange={handleChange}>
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
