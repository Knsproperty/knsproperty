'use client'

interface Props {
    children: any
}

import React from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import SlickSlider from "react-slick";

export function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} before:hidden  `}
            style={{
                ...style, display: "block", background: "transparent"
            }}
            onClick={(event) => {
                event.stopPropagation()
                onClick()
            }}>
            <FiArrowRight size={20} className=" -mt-5 -ml-[30px] w-[40px] h-[40px] bg-white shadow-md p-2.5 z-[99999] absolute rounded-full" />
        </div >
    );
}

export function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} before:hidden z-50`}
            style={{
                ...style, display: "block", background: "transparent"
            }}
            onClick={(event) => {
                event.stopPropagation()
                onClick()
            }}>
            <FiArrowLeft size={20} className=" -mt-5 ml-[15px] w-[40px] h-[40px] bg-white shadow-md p-2.5  rounded-full" />
        </div >
    );
}

const Slider: React.FC<Props> = ({ children }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true

                }
            }
        ],
    };
    return (
        <div className="px-5" >
            <SlickSlider {...settings}>
                {children}
            </SlickSlider>
        </div>
    );
}


export default Slider