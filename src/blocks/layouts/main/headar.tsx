import Link from "next/link"
import { FiPhone } from "react-icons/fi";
import Drawer from "@/blocks/atoms/drawer";
import Container from "@/blocks/atoms/container";
import HeaderDropdown from "@/blocks/atoms/dropdown/header";

const Headar = () => {
  return (
    <header>
      <Container>
        <div className=" h-[70px] grid lg:grid-cols-[1fr_2fr_1fr] grid-cols-[1fr_1fr] ">
          <div className="_center">
            <Link href={'/'}>  <img src="/logo.svg" alt="logo" className="w-[250px]" /></Link>
          </div>

          <nav className="xl:flex items-center justify-around ml-5 hidden">
            {__meta.map((link, index) => link.options
              ? <HeaderDropdown
                key={index}
                text={link.text}
                options={link.options} />
              : <Link
                key={index}
                href={link.href}
                className="text-sm font-light hover:underline capitalize">{link.text}</Link>
            )}
          </nav>
          <Drawer />

          <div className="_center hidden lg:flex">
            <button className="bg-primary py-4 text-white hover:bg-white group hover:border hover:border-primary hover:text-primary font-medium text-sm rounded-full capitalize px-8 flex gap-2 items-center"><FiPhone color="white" className="stroke-white group-hover:stroke-primary" />Contact Us</button>
          </div>

        </div>
      </Container>
    </header >
  )
}

export default Headar

const __meta = [
  {
    text: 'buy', href: '/property/buy', options: [
      { text: 'apartment for sale', href: "/about-us/careers" },
      { text: 'villas for sale', href: "/about-us/team" },
      { text: 'townhouses for sale', href: "/" },
      { text: 'commercial for sale', href: "/contact" },
    ]
  },
  {
    text: 'rent', href: '/property/rent', options: [
      { text: 'apartment for rent', href: "/about-us/careers" },
      { text: 'villas for rent', href: "/about-us/team" },
      { text: 'townhouses for rent', href: "/" },
      { text: 'commercial for rent', href: "/contact" },
    ]
  },
  { text: 'commercial', href: '/' },
  { text: 'property management', href: '/' },
  { text: 'off plan', href: '/' },
  {
    text: 'explore more', href: '/', options: [
      { text: 'careers', href: "/about-us/careers" },
      { text: 'our team', href: "/about-us/team" },
      { text: 'about us', href: "/" },
      { text: 'contact us', href: "/contact" },
    ]
  },
]
