import React from "react";
import Image from "next/image";
import services from "@/config/services"
const Services2 = () => (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
        <h3 className="text-center text-4xl font-bold mb-20">Our Services</h3>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
                {services.services.map((data) => <Element key={data.title} t={data.title} d={data.details} I={data.icon} />)}
            </div>
        </div>
    </section>

)
export default Services2;

const Element = ({ t, d, I }: any) => {
    return (
        <div>
            <div className="relative flex items-center justify-center mx-auto">
                <Image src={I} alt="image" width={50} height={50} />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-black">
                {t}
            </h3>
            <p className="mt-4 text-base text-gray-600">
                {d}
            </p>
        </div>
    )
}