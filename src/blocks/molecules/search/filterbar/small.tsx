'use client'
import React, { useState } from "react";
import { beds_options, price_min_max, property_types } from "./data";

const Filterbar = () => {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [propertyType, setPropertyType] = useState("");

    return (
        <div className="bg-white w-full p-5">
            <div className="grid-cols-2 grid gap-5">
                <Select data={price_min_max} value={minPrice} onChange={setMinPrice} disabledOption="Minimum Price" />
                <Select data={price_min_max} value={maxPrice} onChange={setMaxPrice} disabledOption="Maximum Price" />
            </div>

            <div className="grid-cols-2 grid gap-5 mt-5">
                <Select data={property_types} value={propertyType} onChange={setPropertyType} disabledOption="Property Type" />
                <Select data={beds_options} value={bedrooms} onChange={setBedrooms} disabledOption="Bedrooms" />
            </div>

            <div className="mt-5 flex justify-center">
                <button className="py-3.5 px-20 text-white text-sm bg-primary rounded-full">Search</button>
            </div>
        </div>
    );
};

export default Filterbar;

export const Select = ({ data, value, onChange, disabledOption }: { data: string[]; value: string; onChange: (value: string) => void; disabledOption: string }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };
    return (
        <select className="select w-full max-w-xs border-primary p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600" value={value} onChange={handleChange}>
            <option disabled value=""> {disabledOption} </option>
            {data.map((item, index) => (<option key={index} value={item}>{item}</option>))}
        </select>
    );
};
