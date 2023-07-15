import Link from "next/link";
import Logo from "@/blocks/atoms/logo";
import { FiPhone } from "react-icons/fi";
import Drawer from "@/blocks/atoms/drawer";
import Container from "@/blocks/atoms/container";
import HeaderDropdown from "@/blocks/atoms/dropdown/header";

const Headar = () => {
  return (
    <>
      <header className="px-3 fixed top-0 w-full bg-white border-b border-b-[#8080804a] z-50">
        <Container>
          <div className=" h-[70px] grid lg:grid-cols-[1fr_2fr_1fr] grid-cols-[1fr_1fr] ">
            <div className="flex items-center lg:justify-center">
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>

            <nav className="xl:flex items-center justify-around ml-5 hidden">
              {__meta.map((link, index) =>
                link.options ? (
                  <HeaderDropdown
                    key={index}
                    href={link.href}
                    text={link.text}
                    options={link.options}
                  />
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-sm font-light hover:underline capitalize"
                  >
                    {link.text}
                  </Link>
                )
              )}
            </nav>
            <Drawer />

            <div className="_center hidden lg:flex">
              <a className="bg-primary py-4 text-white hover:bg-white group hover:border hover:border-primary hover:text-primary font-medium text-sm rounded-full capitalize px-8 flex gap-2 items-center">
                <FiPhone
                  color="white"
                  className="stroke-white group-hover:stroke-primary"
                />
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </header>

      <div className="h-[70px]">&nbsp;</div>
    </>
  );
};

export default Headar;

const __meta = [
  {
    text: "buy",
    href: "/property/buy",
    options: [
      { text: "apartment for sale", href: "/property/buy?type=AP" },
      { text: "villas for sale", href: "/property/buy?type=VH" },
      { text: "townhouses for sale", href: "/property/buy?type=TH" },
    ],
  },
  {
    text: "rent",
    href: "/property/rent",
    options: [
      { text: "apartment for rent", href: "/property/rent?type=AP" },
      { text: "villas for rent", href: "/property/rent?type=VH" },
      { text: "townhouses for rent", href: "/property/rent?type=TH" },
    ],
  },
  { text: "property management", href: "/property/management" },
  { text: "off plan", href: "/property/offplan" },
  {
    text: "explore more",
    href: "/",
    options: [
      { text: "careers", href: "/about-us/careers" },
      { text: "our team", href: "/about-us/team" },
      { text: "contact us", href: "/contact" },
    ],
  },
];
