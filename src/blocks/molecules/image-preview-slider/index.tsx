'use client'

interface Props {
    media: string[]
}

import { useRef } from "react"
import SlickSlider from "react-slick";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import AspectImage from "@/blocks/atoms/image-preview/AspectImage";

const ImagePreviewer: React.FC<Props> = ({ media }) => {

    const ref = useRef<HTMLButtonElement>(null)
    const handleClose = () => {
        ref.current?.click()
    }
    const handleStopPropagation = (event: any) => {
        return event.stopPropagation()
    }

    return (
        <div className="hidden md:block">
            <dialog id="my_modal_1" className="modal bg-black bg-opacity-50">
                <form method="dialog" className="  _center relative h-full w-screen" onClick={handleClose}>

                    <main className="md:w-[80vw] w-[100vw] md:max-w-[80vw]" onClick={handleStopPropagation}>
                        <SlickSlider {...settings}>
                            {media.map((src) => <AspectImage src={src} alt={src} />)}
                        </SlickSlider>
                    </main>

                    <footer className="modal-action opacity-0 top-0 absolute">
                        <button ref={ref} className="btn">Close</button>
                    </footer>
                </form>
            </dialog>
        </div>
    )
}
export default ImagePreviewer







const settings = {
    dots: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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


function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} before:hidden  `}
            style={{
                ...style, display: "block", background: "transparent"
            }}
            onClick={onClick}>
            <FiArrowRight size={20} className=" w-[40px] h-[40px] bg-white shadow-md p-2.5 z-[99999] absolute rounded-full" />
        </div >
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} before:hidden z-50`}
            style={{
                ...style, display: "block", background: "transparent"
            }}
            onClick={onClick}>
            <FiArrowLeft size={20} className=" -ml-5 w-[40px] h-[40px] bg-white shadow-md p-2.5  rounded-full" />
        </div >
    );
}