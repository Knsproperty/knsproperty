'use client'
import Filterbar from './filterbar';
import { useState, useRef } from 'react'
import { Menu, Transition } from '@headlessui/react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import PropertySelection from './property-selection';

const Search = () => {
    const buttonRef = useRef<any>(null)
    const [category, setCategory] = useState("residental");
    const [type, setType] = useState<"buy" | "rent">("rent");
    return (
        <div className='lg:flex items-center flex-col hidden'>
            <PropertySelection selected={category} setSelected={setCategory} />

            <div className="lg:w-[720px] bg-white h-[56px] mt-5 rounded-full relative ">
                <div className="grid grid-cols-[100px_1fr_1fr_56px]">
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0}>
                            <button className="h-[56px] w-full text-black capitalize flex items-center justify-center text-sm">{type} <FiChevronDown className="ml-2" /> </button>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                            <li
                                onClick={() => {
                                    setType("buy");
                                }}
                            >
                                <a>Buy</a>
                            </li>
                            <li
                                onClick={() => {
                                    setType("rent");
                                }}
                            >
                                <a>Rent</a>
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full h-full bg-transparent font-light text-sm placeholder:text-sm placeholder:font-light outline-none border-none"
                            placeholder="Community or Building"
                        />
                        <div className="absolute bg-white hidden">
                            search result goes here
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="border-l border-[#9FA3B7] opacity-50 w-10">
                            &nbsp;
                        </div>
                        <input
                            onFocus={() => {
                                buttonRef?.current.click()
                            }}
                            readOnly
                            type="text"
                            className="w-full h-full bg-transparent font-light text-sm placeholder:text-sm placeholder:font-light outline-none border-none placeholder:capitalize"
                            placeholder="price, type and bedrooms*"
                        />
                    </div>

                    <button className="bg-primary w-[50px] h-[50px] rounded-full _center mx-auto my-auto">
                        <FiSearch className=" stroke-white" />
                    </button>
                </div>

                <Menu>
                    <Menu.Button ref={buttonRef}></Menu.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0">
                        <Menu.Items >
                            <Filterbar />
                        </Menu.Items>
                    </Transition>
                </Menu>

            </div>

        </div>

    )
}
export default Search