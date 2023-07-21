import React from "react";
import Container from "@/blocks/atoms/container";
import services from "@/config/services"
const Service = () => {
    return (
        <section>
            <Container>
                <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
                    <div className="container">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4">
                                <div className=" mb-12 max-w-[510px] text lg:mb-20">
                                    <span className="block mb-2 text-sm font-semibold text-primary">
                                        Our Services
                                    </span>
                                    <h2 className="mb-4 text-3xl">
                                        What We Offer
                                    </h2>
                                    <p className="font-light text-sm">
                                        There are many variations of passages of Lorem Ipsum available
                                        but the majority have suffered alteration in some form
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 bg-gradient-to-r from-[cyan] to-[blue] gap-[2px] p-[2px]">
                            {services.services.map((data) => <ServiceCard {...data} />)}
                        </div>
                    </div>
                </section>
            </Container>
        </section>
    );
};

export default Service;

import Image from "next/image";

const ServiceCard = ({ icon, title, details }: any) => {
    return (
        <>
            <div className="h-full bg-white group hover:scale-105 duration-200 hover:shadow-lg-- hover:drop-shadow-2xl ease-linear">
                <div className=" p-10 md:px-7 xl:px-10">
                    <div className={`mb-8 `}>
                        <Image className="group-hover:scale-150 group-hover:-translate-y-2 duration-200 ease-linear" src={icon} alt="icon" width={50} height={50} />
                    </div>
                    <h4 className="mb-3  text-xl  text-dark">{title}</h4>
                    <p className="text-sm  font-light">{details}</p>
                </div>
            </div>
        </>
    );
};
