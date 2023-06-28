interface Props {
    children: any
}

import React from "react";
import SlickSlider from "react-slick";

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} before:bg-primary before:p-3 before:rounded-full z-50 before:-ml-[40px] `}
            style={{
                ...style, display: "block", background: "transparent"
            }}
            onClick={onClick}>
        </div >
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} before:bg-primary before:p-3 before:rounded-full z-50`}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        />
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
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div>
            <SlickSlider {...settings}>
                {children}
            </SlickSlider>
        </div>
    );
}


export default Slider