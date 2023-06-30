'use client'
import { useState } from 'react'
import Filterbar from './filterbar/small';
import { FiChevronDown } from 'react-icons/fi';
import PropertySelection from './property-selection';

const Search = () => {
    const [category, setCategory] = useState("residental");
    const [type, setType] = useState<"buy" | "rent">("rent");
    return (
        <div className='w-full lg:hidden flex items-center justify-center flex-col'>
            <PropertySelection selected={category} setSelected={setCategory} />
            <div className='bg-white w-[95%] rounded-md overflow-hidden mt-5'>
                <div className='grid grid-cols-[1fr_2fr] m-5 mb-0 border border-primary rounded-md '>
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0}> <button className="bg-primary h-[56px] w-full text-white capitalize flex items-center justify-center text-sm">{type} <FiChevronDown className="ml-2 stroke-white" /> </button> </label>
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

                    <div>
                        <input type="text" className="w-full h-full bg-transparent font-light text-sm placeholder:text-sm placeholder:font-light outline-none border-none pl-5" placeholder="Community or Building" />
                        <div className="absolute bg-white hidden"> search result goes here</div>
                    </div>
                </div>
                <Filterbar />
            </div>
        </div>

    )
}
export default Search