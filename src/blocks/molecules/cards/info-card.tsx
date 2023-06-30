import { CardData } from "@/blocks/sections/info";
import { MdOutlineAttachEmail } from "react-icons/md";
const Info_Card = ({ Icon, action, color, desc, title }: CardData) => {
  return (
    <div
      className={`flex flex-col justify-center items-center p-[30px]  rounded-lg   h-[400px] text-center ${
        color === "green" ? "bg-[#e5ebe9]" : "bg-[#e8e5ea]"
      }`}
    >
      <Icon className="text-3xl mb-5 text-primary" />
      <h5 className="text-primary font-medium text-2xl">{title}</h5>
      <p className="mt-5 font-light text-base mb-6 text-black ">{desc}</p>
      <button className="bg-transparent  border hover:text-white group flex items-center  py-4 text-primary hover:bg-primary   font-semibold text-sm rounded-full capitalize px-12">
        {action}
      </button>
    </div>
  );
};
export default Info_Card;
