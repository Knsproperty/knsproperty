"use client";

import { useState } from "react";
import Filterbar from "../atoms/filterbar";
const categories = ["residental", "commercial", "off-plan"];
import { FiChevronDown, FiSearch, FiAlertCircle, FiPhone } from "react-icons/fi";

function Search() {
    const [category, setCategory] = useState("residental");
    const [type, setType] = useState<"buy" | "rent">("rent");
    const [filterVisiblity, setFilterVisiblity] = useState(false);

    return (
        <section className="h-[80vh] bg-center bg-[url('https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]">
            <div className="w-full h-full _center  bg-[#00000047] backdrop-brightness-75">
                <div className="_center flex-col">
                    <h1 className="text-5xl font-medium text-center text-white">
                        Search Properties
                    </h1>

                    <div className="grid-cols-3  mt-8 gap-5  rounded-full p-1.5 inline-grid">
                        {categories.map((ctgr) => (
                            <button
                                onClick={() => {
                                    setCategory(ctgr);
                                }}
                                className={`py-3  font-medium text-sm rounded-full capitalize px-8 ${category === ctgr
                                    ? " bg-white border border-primary text-black"
                                    : "bg-black bg-opacity-30 text-white border"
                                    }`}
                            >
                                {ctgr}
                            </button>
                        ))}
                    </div>

                    <div className="w-[720px] bg-white h-[56px] mt-5 rounded-full   relative ">
                        <div className="grid grid-cols-[100px_1fr_1fr_56px]">
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0}>
                                    <button className="h-[56px] w-full text-black capitalize flex items-center justify-center text-sm ">
                                        {type} <FiChevronDown className="ml-2" />
                                    </button>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52"
                                >
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
                                        setFilterVisiblity(true);
                                    }}
                                    onBlur={() => {
                                        setFilterVisiblity(false);
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

                        {filterVisiblity && <Filterbar />}
                    </div>

                    <div className="bg-[#FFF5EB] border-2 border-[#F5973A] rounded-full w-full-- mt-5 grid grid-cols-[50px_auto] p-3 pr-10">
                        <div className="_center">
                            <FiAlertCircle className=" stroke-[#F5973A]" size={22} />
                        </div>

                        <div>
                            <p className="text-[13px] text-primary font-light ">
                                Prices are always changing,find out the value of your property
                                today
                            </p>
                        </div>
                    </div>

                    <button className="bg-primary group flex items-center mt-5 py-4 text-white hover:bg-white  hover:text-primary font-semibold text-sm rounded-full capitalize px-8">
                        {" "}
                        <FiPhone className="mr-2 group-hover:stroke-black stroke-white" />
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Search;
