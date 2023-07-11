'use client'
import { useRef, useState } from "react";
import Search from "../molecules/search";
import SearchSmall from "../molecules/search/small";
import { FiAlertCircle, FiPhone } from "react-icons/fi";
function SearchSection() {
    return (
        <section className="lg:h-[30vh] h-auto   bg-center bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]  bg-no-repeat bg-cover  ">
            <div className="w-full h-full lg:flex lg:items-center lg:justify-center bg-[#00000047] backdrop-brightness-50">
                <div className="lg:flex lg:items-center lg:justify-center flex-col py-5 p-5 lg:px-0">
                    {/* <h1 className="lg:text-5xl text-3xl  font-medium text-center text-white">
                        Search Properties
                    </h1> */}


                    <SimpleSearch />

                    {/* <Search /> */}
                    {/* <SearchSmall /> */}

                    {/* <div className="bg-[#FFF5EB] border-2 border-[#F5973A] lg:rounded-full w-full rounded-md mt-5 grid grid-cols-[50px_auto] p-3 pr-10">
                        <div className="_center">
                            <FiAlertCircle className=" stroke-[#F5973A]" size={22} />
                        </div>

                        <div>
                            <p className="text-[13px] text-primary font-light ">
                                Prices are always changing,find out the value of your property
                                today
                            </p>
                        </div>
                    </div> */}

                    {/* <button className=" hidden  bg-primary group lg:flex items-center mt-5 py-4 text-white hover:bg-white  hover:text-primary font-semibold text-sm rounded-full capitalize px-8">
                        {" "}
                        <FiPhone className="mr-2 group-hover:stroke-black stroke-white" />
                        Contact Us
                    </button> */}
                </div>
            </div>
        </section >
    );
}

export default SearchSection;

import { FiSearch, FiX } from "react-icons/fi";

const SimpleSearch = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleContainerClick = () => {
        inputRef.current?.focus()
    }

    const hadleSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation()
        alert('im first')
    }

    const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    }

    return (
        <div className=" mt-5  rounded-md  p-2 py-4 ">

            <div className=" gap-5 lg:max-w-[600px]-- w-auto flex">

                <h3 className="text-lg font-medium _center text-white">I'm Lokking to</h3>

                <PropertyType />

                <section className="relative">
                    <div onClick={handleContainerClick} className="bg-white shadow-md  h-[60px] px-3 pl-5 items-center flex rounded-full gap-3 border  border-[#80808039]">
                        <FiSearch size={20} className="mr-1" />
                        <p className="text-primary">Where &nbsp; ›</p>
                        <input ref={inputRef} placeholder="Community or Building" className="border-none outline-none lg:min-w-[400px] placeholder:text-light placeholder:text-sm flex-1" />
                        <button className="hidden lg:block" onClick={handleCloseClick}><FiX size={20} /></button>
                        <button onClick={hadleSearch} className="bg-primary text-white px-5 py-2.5 rounded-full capitalize text-sm">search</button>
                    </div>
                </section>
                <section className="bg-white shadow-md rounded-md px-5 hidden">
                    <p className="text-sm pt-3 capitalize text-secondary font-semibold">results</p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi nam sit molestiae. Atque quibusdam aliquam eveniet nihil deserunt, debitis quisquam dignissimos nemo dolore, odio quam ipsa obcaecati porro nulla!
                </section>

            </div>

        </div>
    )
}


const PropertyType = () => {
    const [active, setActive] = useState('commercial')
    const buttons = ['commercial', 'residental', 'offplan'].map((name) => <button onClick={() => { setActive(name) }} className={`text-white px-5 py-2.5 rounded-full text-sm capitalize ${active == name ? 'bg-primary ' : 'bg-transparent'}`} key={name}>{name}</button>)
    return (
        <div className="bg-secondary px-3 rounded-full overflow-hidden flex items-center h-[60px] ">
            {buttons}
        </div>
    )
}