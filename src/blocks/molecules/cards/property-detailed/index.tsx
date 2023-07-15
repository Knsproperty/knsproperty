interface Props {
  bed: number;
  slug: string;
  area: number;
  title: string;
  price: string;
  media: string[];
  bathroom: number;
  discription: string;
  parking: number,
  property_type: "rent" | "buy" | "offplan";
}

import Link from "next/link";
import Image from "next/image";
import { FiPhoneOutgoing } from "react-icons/fi";
import { LuBedDouble, LuBath, LuMaximize, LuParkingSquare } from "react-icons/lu";

const PropertyDetailed: React.FC<Props> = ({ title, discription, price, bed, bathroom, area, media, slug, property_type, parking }) => {
  const [media1, media2, media3] = media;
  const href = `/property/${property_type}/${slug}`
  return (
    <Link href={href}>
      <div className="lg:h-[328px] h-auto w-full grid lg:grid-cols-[1.5fr_1fr] my-5 md:border md:border-[#eef0f6] md:rounded-md overflow-hidden md:shadow-md bg-white hover:bg-[#F3F8FD] relative border-b border-[#80808027]">
        <div className="grid md:grid-cols-[2fr_1fr]  gap-2 lg:h-full p-2">
          <div className="overflow-hidden rounded-md bg-lightgray aspect-w-16 aspect-h-9">
            <Image blurDataURL="/circle.png" placeholder="blur" alt={title} src={media1} fill />
          </div>
          <div className="hidden md:grid gap-2">
            <div className="relative overflow-hidden rounded-md bg-lightgray aspect-w-16 aspect-h-9">
              <Image blurDataURL="/circle.png" placeholder="blur" alt={title} src={media2} fill />
            </div>
            <div className="relative overflow-hidden rounded-md bg-lightgray aspect-w-16 aspect-h-9">
              <Image blurDataURL="/circle.png" placeholder="blur" alt={title} src={media3} fill />
            </div>
          </div>
        </div>

        <div className=" lg:pt-4 grid lg:grid-rows-[auto_70px] pb-3">
          <div className="px-5">
            <p className="font-light text-sm md:my-2 mb-2 lg:hidden"> AED {price}</p>
            <h2 className="lg:text-xl md:text-lg text-md font-medium text-secondary mb-2 capitalize">
              {title}
            </h2>
            <p className="text-sm capitalize hidden md:block">{discription}</p>

            <p className="font-light text-sm my-5 hidden lg:block">
              AED {price} Per Annum
            </p>
            <div className="flex lg:my-5 my-2 ">
              <div className="_center pr-5">
                <LuBedDouble className="mr-2 stroke-primary stroke-[2px]" />{" "}
                <span className="font-light text-primary">{bed}</span>
              </div>
              <div className="_center border-l border-r border-[#00000010] px-5">
                <LuBath className="mr-2 stroke-primary stroke-[2px] " />{" "}
                <span className="font-light text-primary">{bathroom}</span>
              </div>
              <div className="_center border-l border-r border-[#00000010] px-5">
                <LuParkingSquare className="mr-2 stroke-primary stroke-[2px] " />
                <span className="font-light text-primary">{parking}</span>
              </div>
              <div className="_center pl-5">
                <LuMaximize className="mr-2 stroke-primary stroke-[2px]" />{" "}
                <span className="font-light text-primary">{area} sq.ft</span>
              </div>
            </div>

            <p className="text-sm font-light text-secondary mb-5 lg:mb-0 hidden lg:block">
              {bed} Bedrooms <br /> {bathroom} Bathrooms <br /> {area} sq.ft{" "}
            </p>
          </div>

          <div className="border-t border-[#eef0f6]  lg:flex items-center px-5 hidden">
            <button className="px-5 flex items-center text-sm bg-secondary py-3 rounded-full text-white">
              <FiPhoneOutgoing className="mr-2 stroke-white" /> Call Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default PropertyDetailed;
