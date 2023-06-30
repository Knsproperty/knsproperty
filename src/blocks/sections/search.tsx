import Search from "../molecules/search";
import SearchSmall from "../molecules/search/small";


import { FiAlertCircle, FiPhone } from "react-icons/fi";
function SearchSection() {
    return (
        <section className="h-[80vh] bg-center bg-[url('https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]">
            <div className="w-full h-full _center  bg-[#00000047] backdrop-brightness-75">
                <div className="_center flex-col">
                    <h1 className="text-5xl font-medium text-center text-white">
                        Search Properties
                    </h1>

                    <Search />
                    <SearchSmall />


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

export default SearchSection;
