'use client'

import Container from "../atoms/container";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { motion } from 'framer-motion'
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"
export default function LetUsKnow() {

    const controls = useAnimation();


    //aniamte all three block


    const c1 = useAnimation()
    const c2 = useAnimation()
    const c3 = useAnimation()

    const [ref, inView] = useInView({ triggerOnce: false });

    useEffect(() => {
        if (inView) {
            c1.start({ y: 0, opacity: 1 })
            c2.start({ x: 0, opacity: 1 })
            c3.start({ x: 0, opacity: 1 })
        }
    }, [controls, inView]);

    return (
        <motion.div ref={ref} className="bg-lightgray overflow-hidden mt-5 ">
            <Container>
                <div className="px-4 py-16 md:px-24 lg:px-8 lg:py-20 ">
                    <div className="grid gap-10 lg:grid-cols-2 ">
                        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                                <Image src="/skyline.png" alt="iamge" width={50} height={50} />
                            </div>
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    Let us handle
                                    <br className="hidden md:block" />
                                    your next{' '}
                                    <span className="inline-block text-deep-purple-accent-400">
                                        destination
                                    </span>
                                </h2>
                                <p className=" text-gray-700 text-light">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae. explicabo.
                                </p>
                            </div>
                            <div>


                                <a href="#_" className=" rounded-full mt-5 px-10 py-3 overflow-hidden group bg-[tomato] relative text-white hover:ring-2 hover:ring-offset-2 hover:ring-[tomato] transition-all ease-out duration-300">
                                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative  text-sm text-white stroke-white">Contact us  <BsArrowRight className="ml-2 inline-block stroke-white" /></span>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center -mx-4 lg:pl-8 md:order-1 -order-1">
                            <div className="flex flex-col items-end px-3">
                                <motion.img
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 hover:shadow-2xl hover:scale-105 ease-linear transition duration-200"
                                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                    alt=""
                                />
                                <motion.img
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={c2}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 hover:shadow-2xl hover:scale-105 ease-linear transition duration-200"
                                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                    alt=""
                                />
                            </div>
                            <div className="px-3">
                                <motion.img
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={c3}

                                    transition={{ duration: 1, delay: 1 }}
                                    className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 hover:shadow-2xl hover:scale-105 ease-linear transition duration-200"
                                    src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </motion.div>
    )
}