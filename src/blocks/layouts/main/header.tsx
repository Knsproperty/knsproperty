'use client'

import Link from "next/link";
import { config } from "@/config/links";
import Logo from "@/blocks/atoms/logo";
import Container from "@/blocks/atoms/container";
import Drawer from "@/blocks/molecules/menu-drawer";
import Contact from "@/blocks/atoms/buttons/contact";
import Dropdown from "@/blocks/layouts/main/dropdown";
import Hero from "@/blocks/molecules/hero";
import { usePathname } from "next/navigation";
import Image from "next/image";
const Header: React.FC = () => {

  const pathname = usePathname()

  if (['/property/buy', '/property/rent', '/property/offplan', '/'].includes(pathname)) {
    return (
      <>
        <header className="px-3 absolute top-0 left-0 w-full bg-transparent hover:bg-black hover:bg-opacity-50  z-50">
          <Container>
            <div className="h-[100px] grid lg:grid-cols-[1fr_2fr_1fr] grid-cols-[1fr_1fr] ">
              <div className="flex items-center lg:justify-center">
                <Logo />
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
                      <button className="text-md font-medium hover:underline capitalize text-white">
                        {link.text}
                      </button>
                    </Link>
                  )
                )}
              </nav>
              <Drawer />
              <Contact />
            </div>
          </Container>
        </header>

        <Hero />
      </>
    )
  }

  return (
    <>
      <header className="px-3  w-full  bg-lightgray z-50">
        <Container>
          <div className="h-[100px] grid lg:grid-cols-[1fr_2fr_1fr] grid-cols-[1fr_1fr] ">
            <div className="flex items-center lg:justify-center">
              <Link href={"/"}>
                <button aria-label="logo" className="flex items-center gap-2">
                  <Image src="/ksnlogo.png" alt="logo" width={50} height={50} />
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
            <Drawer />
            <Contact />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
