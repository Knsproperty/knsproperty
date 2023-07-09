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
import clampText from "@/app/lib/clampText";
import { LuBedDouble, LuBath, LuMaximize } from "react-icons/lu";

const PropertyCard: React.FC<Props> = ({
    area, bathroom, title, price, description, bedroom, image
}) => {
    return (
        // <Link href={'/'}>
        <div className=" h-[400px] group rounded-md shadow-md overflow-hidden hover:bg-[#F3F8FD] m-2">
            <header className="relative h-[200px] overflow-hidden">
                <Image className="w-full h-full group-hover:scale-150 transition ease-in-out" src={'/property.webp'} alt="property image" fill />
            </header>
            <main>
                <p className="text-sm ml-3 mt-4 font-light inline-block bg-secondary p-1 px-3 rounded-full text-white ">AED {price} Per Annum</p>
                <div className="px-5">
                    <h5 className="text-md text-primary font-medium my-3">{title}</h5>

                    <p className="text-sm font-light  text-primary mb-2">{clampText(description, 50)}</p>


                    <div className="grid grid-cols-[1fr_1fr_2fr] my-5 ">
                        <div className="_center "><LuBedDouble className="mr-2 stroke-primary stroke-[2px]" /> <span className="font-light text-primary">{bedroom}</span></div>
                        <div className="_center border-l border-r border-[#00000010]"><LuBath className="mr-2 stroke-primary stroke-[2px]" /> <span className="font-light text-primary">{bathroom}</span></div>
                        <div className="_center "><LuMaximize className="mr-2 stroke-primary stroke-[2px]" /> <span className="font-light text-primary">{area} sq.ft</span></div>
                    </div>
                </div>
            </main>
        </div>
        // </Link>
    )
}

export default PropertyCard