import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

const __meta = [
  { text: "buy", href: "/" },
  { text: "rent", href: "/" },
  { text: "commercial", href: "/" },
  { text: "property management", href: "/" },
  { text: "off plan", href: "/" },
  {
    text: "explore more",
    href: "/",
    options: [
      { text: "carrier", href: "/" },
      { text: "our team", href: "/" },
      { text: "careers", href: "/about-us/careers" },
      { text: "our team", href: "/about-us/team" },
      { text: "about us", href: "/" },
      { text: "contact us", href: "/" },
      { text: "contact us", href: "/contact" },
    ],
  },
];

const Dropdown = ({
  options,
  text,
}: {
  options: { text: string; href: string }[];
  text: string;
}) => {
  return (
    <div className="dropdown dropdown-hover ">
      <label
        tabIndex={0}
        className="text-sm font-light hover:underline capitalize flex items-center"
      >
        {text} <FiChevronDown className="ml-2" />{" "}
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-[1]  menu  w-[250px]  pt-[25px]"
      >
        <div className="flex flex-col bg-lightgray p-5 rounded-md shadow">
          {options.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm font-light hover:underline capitalize py-2"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Headar = () => {
  return (
    <header>
      <div className="max-w-[1320px] mx-auto h-[70px] grid grid-cols-[1fr_2fr_1fr] ">
        <div className="_center">
          <img src="/logo.svg" alt="..." className="w-[250px]" />
        </div>

        <nav className="flex items-center justify-around ml-5">
          {__meta.map((link) => {
            if (link.options) {
              return <Dropdown text={link.text} options={link.options} />;
            }
            return (
              <Link
                href={link.href}
                className="text-sm font-light hover:underline capitalize"
              >
                {link.text}
              </Link>
            );
          })}
        </nav>

        <div className="_center">
          <button className="bg-primary py-4 text-white hover:bg-white hover:border hover:border-primary hover:text-primary font-semibold text-sm rounded-full capitalize px-8">
            List your property
          </button>
        </div>
      </div>
    </header>
  );
};

export default Headar;
