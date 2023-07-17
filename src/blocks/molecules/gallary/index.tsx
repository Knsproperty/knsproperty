'use client'

interface Props {
    images: string[]
}

import { useState } from "react"
import AspectImage from "@/blocks/atoms/image-preview/AspectImage"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

const Gallary: React.FC<Props> = ({ images }) => {
    const [visible, setVisible] = useState(false)
    const Icon = !visible ? <FiChevronDown size={22} /> : <FiChevronUp size={22} />;
    const toggle = () => {
        setVisible(!visible)
    }
    return (
        <div>
            <hr className="opacity-10" />
            <button name="media-toggle" onClick={toggle} className="flex justify-between w-full md:w-xl items-center py-3  px-5 rounded-md  "> <h2 className="xl:text-xl text-lg font-semibold text-secondary">Gallary</h2> {Icon}</button>
            {visible && <div className="grid lg:grid-cols-2 gap-5">
                {images.map((src) => (<AspectImage rounded src={src} alt={src} />))}
            </div>}
        </div>
    )
}
export default Gallary