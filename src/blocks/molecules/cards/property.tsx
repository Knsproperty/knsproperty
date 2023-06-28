export interface Props {
    bedroom: number,
    area: number,
    bathroom: number,
    title: string,
    price: string,
    image: string,
    description: string,
}

import Image from "next/image";
import Link from "next/link";
import clampText from "@/app/lib/clampText";
import { LuBedDouble, LuBath, LuMaximize } from "react-icons/lu";

const PropertyCard: React.FC<Props> = ({
    area, bathroom, title, price, description, bedroom, image
}) => {
    return (
        // <Link href={'/'}>
        <div className=" h-[400px] rounded-md shadow-md overflow-hidden hover:bg-[#F3F8FD] m-2">
            <header className="relative h-[200px]">
                <Image className="w-full h-full" src={'/property.webp'} alt="property image" fill />
            </header>
            <main className="p-5">
                <h5 className="text-md text-primary font-medium mb-3">{title}</h5>
                <p className="text-sm font-light  text-primary">{clampText(description, 50)}</p>

                <div className="grid grid-cols-[1fr_1fr_2fr] my-5 ">
                    <div className="_center "><LuBedDouble className="mr-2 stroke-primary stroke-[2px]" /> <span className="font-light text-primary">{bedroom}</span></div>
                    <div className="_center border-l border-r border-[#00000010]"><LuBath className="mr-2 stroke-primary stroke-[2px]" /> <span className="font-light text-primary">{bathroom}</span></div>
                    <div className="_center "><LuMaximize className="mr-2 stroke-primary stroke-[2px]" /> <span className="font-light text-primary">{area} sq.ft</span></div>
                </div>
                <p className="text-sm font-light  text-primary">AED {price} Per Annum</p>
            </main>
        </div>
        // </Link>
    )
}

export default PropertyCard