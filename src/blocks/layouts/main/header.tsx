"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "@/blocks/atoms/container";
import Drawer from "@/blocks/molecules/menu-drawer";
import Contact from "@/blocks/atoms/buttons/contact";
import Dropdown from "@/blocks/layouts/main/dropdown";
import Hero from "@/blocks/molecules/hero";
import { config } from "@/config/links";
import CountrySelector from "@/blocks/atoms/selector";
import GoogleTranslate from "@/blocks/molecules/translate/GoogleTranslate";
const Header: React.FC = () => {
  const pathname = usePathname();

  if (
    [
      "/property/buy",
      "/property/rent",
      "/property/offplan",
      "/",
      "/contact",
    ].includes(pathname)
  ) {
    return (
      <>
        <header className="px-3 absolute top-0 left-0 w-full bg-transparent z-50">
          <Container>
            <div className="h-[100px] grid lg:grid-cols-[1fr_3fr_1fr] grid-cols-[1fr_1fr] ">
              <div className="flex items-center lg:justify-center">
                <Link href={"/"} className="hidden md:block">
                  <button
                    aria-label="logo"
                    className=" relative flex items-center gap-2 "
                  >
                    <Image
                      src="/white-logo.png"
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </button>
                </Link>
                <Link href={"/"} className="block md:hidden">
                  <button
                    aria-label="logo"
                    className=" relative flex items-center gap-2 "
                  >
                    <Image
                      src="/white-logo.png"
                      alt="logo"
                      width={80}
                      height={80}
                    />
                  </button>
                </Link>
              </div>

              <nav className="xl:flex items-center justify-around ml-5 hidden">
                {config.desktop.map((link, index) =>
                  link.options ? (
                    <Dropdown
                      key={index}
                      href={link.href}
                      text={link.text}
                      color="white"
                      options={link.options}
                    />
                  ) : (
                    <Link key={index} href={link.href}>
                      <button className="hover:bg-secondary px-5 py-2 text-md font-medium hover:underline capitalize text-white">
                        {link.text}
                      </button>
                    </Link>
                  )
                )}
              </nav>
              <Drawer color="white" />
              <Contact />
            </div>
          </Container>
        </header>

        <Hero />
      </>
    );
  }

  return (
    <>
      <header className="px-3  w-full  bg-lightgray z-50">
        <Container>
          <div className="h-[100px] grid lg:grid-cols-[1fr_2fr_1fr] grid-cols-[1fr_1fr] ">
            <div className="flex items-center lg:justify-center">
              <Link href={"/"} className="hidden md:block">
                <button
                  aria-label="logo"
                  className=" relative flex items-center gap-2 "
                >
                  <Image src="/ks.png" alt="logo" width={50} height={50} />
                </button>
              </Link>
              <Link href={"/"} className="block md:hidden">
                <button
                  aria-label="logo"
                  className=" relative flex items-center gap-2 "
                >
                  <Image src="/ks.png" alt="logo" width={30} height={30} />
                </button>
              </Link>
            </div>

            <nav className="xl:flex items-center justify-around ml-5 hidden">
              {config.desktop.map((link, index) =>
                link.options ? (
                  <Dropdown
                    color="black"
                    key={index}
                    href={link.href}
                    text={link.text}
                    options={link.options}
                  />
                ) : (
                  <Link key={index} href={link.href}>
                    <button className="text-md font-medium hover:underline capitalize text-black">
                      {link.text}
                    </button>
                  </Link>
                )
              )}
            </nav>
            <Drawer color="black" />
            <Contact />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
