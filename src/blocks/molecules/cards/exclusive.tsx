export interface Props {
  title: string;
  price: string;
  image: string;
  slug: string;
  property_type: "buy" | "rent";
}

import Image from "next/image";
import Link from "next/link";

const BuyExclusiveCard: React.FC<Props> = ({ title, price, image, slug }) => {
  return (
    <Link href={"/"}>
      <div className=" h-[350px] rounded-md shadow-md overflow-hidden hover:bg-[#F3F8FD]  m-2">
        <header className="relative h-[200px]">
          <Image
            className="w-full h-full"
            src={image}
            alt="property image"
            fill
          />
        </header>
        <main className="p-5">
          <h5 className="text-md text-primary font-medium mb-3">{title}</h5>
          <p className="text-sm text-primary">AED {price} Per Annum</p>
        </main>
      </div>
    </Link>
  );
};

export default BuyExclusiveCard;
