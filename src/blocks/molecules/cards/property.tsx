export interface Props {
  slug: string;
  area: number;
  title: string;
  price: string;
  image: string;
  bedroom: number;
  bathroom: number;
  description: string;
  type: "buy" | "rent" | "offplan";
}

// import Link from "next/link";
import Image from "next/image";
import clampText from "@/lib/clampText";
import addCommasToNumber from "@/lib/addCommasToNumbers";
import { LuBedDouble, LuBath, LuMaximize } from "react-icons/lu";

const PropertyCard: React.FC<Props> = ({
  area,
  bathroom,
  title,
  price,
  description,
  bedroom,
  image,
  type,
  slug,
}) => {
  return (
    // <Link href={`/property/${type}/${slug}`}>
    <div className=" h-full  group rounded-md shadow-md hover:shadow-lg transition duration-500 hover:border-[tomato] border-transparent border-2 ease-in-out hover:-translate-y-5 overflow-hidden bg-white m-2">
      <header className="relative h-[200px] overflow-hidden ">
        <Image
          className="w-full h-full group-hover:scale-150 transition duration-500 ease-in-out"
          src={image}
          alt="property image"
          fill
        />
      </header>
      <main>

        <div className="px-5">
          <h2 className="text-md text-primary font-medium my-3">{title}</h2>
          <p className="text-sm font-light  text-primary mb-2">
            {clampText(description, 50)}
          </p>
          <div className="grid grid-cols-[1fr_1fr_2fr] my-5 ">
            <div className="_center ">
              <LuBedDouble className="mr-2 stroke-primary stroke-[2px]" />{" "}
              <span className="font-light text-primary">{bedroom}</span>
            </div>
            <div className="_center border-l border-r border-[#00000010]">
              <LuBath className="mr-2 stroke-primary stroke-[2px]" />{" "}
              <span className="font-light text-primary">{bathroom}</span>
            </div>
            <div className="_center ">
              <LuMaximize className="mr-2 stroke-primary stroke-[2px]" />{" "}
              <span className="font-light text-primary">{area} sq.ft</span>
            </div>
          </div>
        </div>
      </main>
    </div>
    // </Link>
  );
};

export default PropertyCard;
