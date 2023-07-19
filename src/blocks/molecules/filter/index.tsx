'use client'
import {
    property_types,
    beds_options,
    price_min_max
} from "@/config/params"

import { useState } from "react"
import Dropdown from "./dropdown"
import { FiSearch } from "react-icons/fi"
import { LuFilter } from "react-icons/lu"
import Container from "@/blocks/atoms/container"
import { usePathname, useSearchParams } from "next/navigation"

const Filter = () => {
    const query = useSearchParams()
    const pathname = usePathname()

    const params = {
        'min': query.get('min') ?? null,
        'type': query.get('type') ?? null,
        'max': query.get('max') ?? null,
        'bedrooms': query.get('bedrooms') ?? null
    }

    const [searchInput, setSearchInput] = useState(query.get("query") ?? "");

    const [filterVisibility, setFilterVisibility] = useState(false);

    const handleFilterClick = () => {
        setFilterVisibility((prevState) => !prevState);
    };

    if (!["/property/buy", "/property/rent"].includes(pathname)) {
        return null;
    }

    return (

        <div className="bg-[#e3effa]">
            <Container>
                <div className="lg:h-[88px] py-3 lg:py-0 grid lg:grid-cols-[1fr_2fr] grid-cols-[auto_50px] lg:gap-5 gap-2 items-center lg:px-10 px-2">
                    <form
                        className="bg-white rounded-full flex items-center py-3 px-5 gap-4 relative">
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

                    {/* Large Screen Devices  */}
                    <div className="lg:flex w-full hidden gap-5">
                        <Dropdown
                            name="type"
                            options={property_types}
                            value={params.type} />

                        <Dropdown
                            name="bedrooms"
                            options={beds_options}
                            value={params.bedrooms} />

                        <Dropdown
                            name="min"
                            options={price_min_max}
                            value={params.min} />

                        <Dropdown
                            name="max"
                            options={price_min_max}
                            value={params.max} />
                    </div>
                </div>

                {/* This is for small devices  */}
                {filterVisibility && (
                    <div className="pb-5 lg:hidden block px-2">
                        <div className=" flex w-full flex-col gap-3">
                            <Dropdown
                                name="type"
                                options={property_types}
                                value={params.type} />

                            <Dropdown
                                name="bedrooms"
                                options={beds_options}
                                value={params.bedrooms} />

                            <Dropdown
                                name="min"
                                options={price_min_max}
                                value={params.min} />

                            <Dropdown
                                name="max"
                                options={price_min_max}
                                value={params.max} />
                        </div>
                    </div>
                )}
            </Container>
        </div>
    )
}
export default Filter





