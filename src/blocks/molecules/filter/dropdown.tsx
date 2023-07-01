import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  title: string;
  options: string[];
  setter: (name: string) => void;
}

export const Dropdown: React.FC<Props> = ({ title, options, setter }) => {
  // please code here for set query parameters

  return (
    <div className="dropdown ">
      <label tabIndex={0}>
        <button className=" py-2.5 px-5 rounded-full border border-primary  text-primary  w-full  capitalize flex items-center justify-center font-[300] text-sm">
          {title}
          <FiChevronDown className="ml-5" />{" "}
        </button>
      </label>
      <ul
        tabIndex={0}
        className=" custom-scrollbar dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 mt-8 max-h-80 grid overflow-y-scroll"
      >
        {options.map((name) => (
          <li
            key={name}
            onClick={() => {
              setter(name);
            }}
          >
            <a className="capitalize">{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Special Dropdown for Buy & Rent

export const DropdownBuyRent: React.FC = () => {
  const pathname = usePathname();
  const title = pathname.includes("rent") ? "rent" : "buy";
  return (
    <div className="dropdown">
      <label tabIndex={0}>
        <button className=" py-2.5 px-5 rounded-full border border-primary  text-primary  w-full  capitalize flex items-center justify-center font-[300] text-sm">
          {title}
          <FiChevronDown className="ml-5" />{" "}
        </button>
      </label>
      <ul
        tabIndex={0}
        className=" custom-scrollbar dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 mt-8 max-h-80 grid overflow-y-scroll"
      >
        <li>
          <Link href={"/property/buy"}>Buy</Link>
        </li>
        <li>
          <Link href={"/property/rent"}>Rent</Link>
        </li>
      </ul>
    </div>
  );
};

// Special Dropdown for BookValuation Card

export const DropdownBookValuation: React.FC = () => {
  const pathname = usePathname();
  const title = pathname.includes("rent") ? "rent" : "buy";
  return (
    <div className="dropdown ">
      <label tabIndex={0}>
        <button className=" py-2.5 px-5 rounded-full border border-primary  text-primary  w-full  capitalize flex items-center justify-center font-[300] text-sm">
          {title}
          <FiChevronDown className="ml-5" />{" "}
        </button>
      </label>
      <ul
        tabIndex={0}
        className=" custom-scrollbar dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 mt-8 max-h-80 grid overflow-y-scroll"
      >
        <li>
          <Link href={"/property/buy"}>Buy</Link>
        </li>
        <li>
          <Link href={"/property/rent"}>Rent</Link>
        </li>
      </ul>
    </div>
  );
};

// Special Dropdown for Extra Filters

const amenities = [
  "Balcony",
  "Water View",
  "Golf Course View",
  "Close to Park",
  "Upgraded",
  "Private Garden",
  "Rented",
  "Private Pool",
  "Maids Room",
  "Beach Acces",
  "gym",
];

export const BigDropdown: React.FC = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0}>
        <button className=" py-2.5 px-5 rounded-full border border-primary  text-primary  w-full  capitalize flex items-center justify-center font-[300] text-sm">
          More Filters
          <FiChevronDown className="ml-5" />{" "}
        </button>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-[600px]"
      >
        <div className="p-5">
          <h2 className="text-lg mb-3">Amenities</h2>

          <div className="grid grid-cols-3 gap-1">
            {amenities.map((aminity) => (
              <Cheakbox cheaked={true} onChange={() => {}} title={aminity} />
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

interface Cheakbox {
  cheaked: boolean;
  onChange: any;
  title: string;
}

const Cheakbox: React.FC<Cheakbox> = ({ cheaked, onChange, title }) => {
  return (
    <label
      style={{ userSelect: "none" }}
      className="flex gap-3 p-1 items-center cursor-pointer "
      htmlFor={title}
    >
      <input id={title} type="checkbox" className="broder-2" />
      <h5 className="text-md capitalize">{title}</h5>
    </label>
  );
};
