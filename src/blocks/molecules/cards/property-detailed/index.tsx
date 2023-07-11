interface Props {
  bed: number;
  slug: string;
  area: number;
  title: string;
  price: string;
  media: string[];
  bathroom: number;
  discription: string;
  property_type: "rent" | "buy";
}

import Link from "next/link";
import Image from "next/image";
import { BsImages } from "react-icons/bs";
import { FiPhoneOutgoing } from "react-icons/fi";
import { LuBedDouble, LuBath, LuMaximize } from "react-icons/lu";

const PropertyDetailed: React.FC<Props> = ({
  title,
  discription,
  price,
  bed,
  bathroom,
  area,
  media,
  slug,
  property_type,
}) => {
  const [media1, media2, media3] = media;
  return (
    <Link href={`/property/${property_type}/${slug}`}>
      <div className="lg:h-[328px] h-auto w-full grid lg:grid-cols-[1.5fr_1fr] my-5 border border-[#eef0f6] rounded-md overflow-hidden shadow-md bg-white hover:bg-[#F3F8FD] relative">
        <div className="hidden absolute top-0 left-0 bg-white z-50 m-5 px-3 py-2 text-sm font-light drop-shadow-md lg   :flex items-center rounded-md ">
          <BsImages className="mr-2" size={20} /> {media.length}
        </div>
        <div className="bg-white grid md:grid-cols-[2fr_1fr] h-[290px] gap-2 lg:h-full p-2">

          <div className="relative overflow-hidden rounded-md bg-lightgray ">
            <Image alt={title} src={media1} fill />
          </div>
          <div className="hidden  md:grid grid-rows-2 gap-2">

            <div className="relative overflow-hidden rounded-md bg-lightgray">
              <Image alt={title} src={media2} fill />
            </div>

            <div className="relative overflow-hidden rounded-md bg-lightgray">
              <Image alt={title} src={media3} fill />
            </div>
          </div>

        </div>

        <div className=" lg:pt-4 grid lg:grid-rows-[auto_70px] pb-3">
          <div className="px-5">
            <p className="font-light text-sm my-2 lg:hidden">
              AED {price} Per Annum
            </p>
            <h2 className="text-xl font-medium text-secondary mb-1 capitalize   ">
              {title}
            </h2>
            <p className="text-sm capitalize">{discription}</p>

            <p className="font-light text-sm my-5 hidden lg:block">
              AED {price} Per Annum
            </p>
            <div className="flex lg:my-5 my-2 ">
              <div className="_center px-5">
                <LuBedDouble className="mr-2 stroke-primary stroke-[2px]" />{" "}
                <span className="font-light text-primary">{bed}</span>
              </div>
              <div className="_center border-l border-r border-[#00000010] px-5">
                <LuBath className="mr-2 stroke-primary stroke-[2px] " />{" "}
                <span className="font-light text-primary">{bathroom}</span>
              </div>
              <div className="_center px-5">
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
              {" "}
              <FiPhoneOutgoing className="mr-2 stroke-white" /> Call Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default PropertyDetailed;
