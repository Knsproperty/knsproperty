'use client'
import Container from "@/blocks/atoms/container"
import { FiSearch } from "react-icons/fi"
import { Dropdown, DropdownBuyRent } from "./dropdown"
import { property_types, beds_options, price_min_max } from "../search/filterbar/data"

const Filter = () => {
    return (
        <div className="bg-[#e3effa]">
            <Container>
                <div className="h-[88px] grid grid-cols-[1fr_2fr] gap-5 items-center px-10">
                    <div className="bg-white  rounded-full flex items-center py-3 px-5 gap-4 relative">
                        <div className="_center">
                            <FiSearch size={18} />
                        </div>

                        <input className="border-none outline-none placeholder:text-sm text-sm placeholder:font-light w-full" placeholder="Community or Building" type="text" />

                        {/* <div className="absolute top-[5rem] bg-white p-5 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deserunt non iure, eius facere earum sed aliquid ipsa, perferendis corporis laborum amet ab, delectus cupiditate eum quaerat accusantium. Alias, quod?</div> */}
                    </div>

                    <div className="w-full flex  gap-5">
                        <DropdownBuyRent />
                        <Dropdown title="Property type" options={property_types} setter={(name) => { alert(name) }} />
                        <Dropdown title="Price Min" options={price_min_max} setter={(name) => { alert(name) }} />
                        <Dropdown title="Price Max" options={price_min_max} setter={(name) => { alert(name) }} />
                        <Dropdown title="Beds" options={beds_options} setter={(name) => { alert(name) }} />
                    </div>
                </div>
            </Container>
        </div>

    )
}
export default Filter

