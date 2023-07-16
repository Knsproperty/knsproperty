'use client'

type Props = {
    media: string[]
}

import Slider from "react-slick"
import Image from "./AspectImage"
import ImagePreviewer from "@/blocks/molecules/image-preview-slider"


const slider_settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

};

const ImagePreviwSlider: React.FC<Props> = ({ media }) => {

    const [media1, media2, media3] = media
    const handleClick = () => {
        if (typeof window !== undefined) {
            (window as any)?.my_modal_1?.showModal()
        }
    }
    return (
        <>
            <ImagePreviewer media={media} />
            <section className=" md:grid grid-cols-[2fr_1fr] gap-5 my-5 hidden md:px-5 xl:px-2" onClick={handleClick}>
                <Image rounded src={media1} alt={media1} />
                <section className="grid gap-5">
                    <Image rounded src={media2} alt={media2} />
                    <Image rounded src={media3} alt={media3} />
                </section>
            </section>

            <section className="grid md:hidden my-5">
                <div className="max-w-[100vw]">
                    <Slider {...slider_settings}>
                        {media.splice(0, 5).map((src) => (
                            <Image {...{ src, alt: src }} />
                        ))}
                    </Slider>
                </div>
            </section>


        </>
    )
}

export default ImagePreviwSlider


