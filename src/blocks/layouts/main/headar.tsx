import Link from "next/link"
import { FiMenu } from "react-icons/fi";
import Container from "@/blocks/atoms/container";
import { FiChevronDown, FiX } from "react-icons/fi";

const __meta = [
  { text: 'buy', href: '/property/buy' },
  { text: 'rent', href: '/property/rent' },
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

const Dropdown = ({ options, text }: { options: { text: string, href: string }[], text: string }) => {
  return (
    <div className="dropdown dropdown-hover ">
      <label tabIndex={0} className="text-sm font-light hover:underline capitalize flex items-center">{text} <FiChevronDown className="ml-2" /> </label>
      <div tabIndex={0} className="dropdown-content z-[1]  menu  w-[250px]  pt-[25px]">
        <div className="flex flex-col bg-lightgray p-5 rounded-md shadow">
          {options.map((link, index) => <Link key={index} href={link.href} className="text-sm font-light hover:underline capitalize py-2">{link.text}</Link>)}
        </div>
      </div>
    </div>
  )
}


const Headar = () => {

  const linksMap = __meta.map((link, index) => link.options
    ? <Dropdown key={index} text={link.text} options={link.options} />
    : <Link key={index} href={link.href} className="text-sm font-light hover:underline capitalize">{link.text}</Link>)

  const linksMap2 = __meta.map((link, index) => link.options
    ? <>
      {link.options.map((otp, index) => <Link key={index} style={{ borderBottom: '1px whitesmoke solid' }} href={otp.href} className="text-[16px] font-light pl-5  py-2.5 text-primary capitalize">{otp.text}</Link>)}
    </>
    : <Link key={index} style={{ borderBottom: '1px whitesmoke solid' }} href={link.href} className="text-[16px] font-light pl-5  py-2.5 text-primary capitalize">{link.text}</Link>)

  return (
    <header>
      <Container>
        <div className=" h-[70px] grid lg:grid-cols-[1fr_2fr_1fr] grid-cols-[1fr_1fr] ">
          <div className="_center">
            <Link href={'/'}>  <img src="/logo.svg" alt="..." className="w-[250px]" /></Link>
          </div>

          <nav className="xl:flex items-center justify-around ml-5 hidden">
            {linksMap}
          </nav>

          <nav className="xl:hidden flex">

            <div className="drawer drawer-end">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex items-center justify-end">
                <label htmlFor="my-drawer" className=" drawer-button"><FiMenu size={25} /></label>
              </div>
              <div className="drawer-side fixed z-[9999] left-0">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu  w-80 h-full bg-white ">

                  <li className="h-[60px] bg-primary- flex  justify-center">
                    <button ><FiX size={22} className=" stroke-black" /></button>
                  </li>

                  {linksMap2}

                  <button className="ml-5 bg-primary w-max mt-5 py-4 text-white hover:bg-white hover:border hover:border-primary hover:text-primary font-semibold text-sm rounded-full capitalize px-8">List your property</button>

                </ul>
              </div>
            </div>
          </nav>



          <div className="_center hidden lg:flex">
            <button className="bg-primary py-4 text-white hover:bg-white hover:border hover:border-primary hover:text-primary font-semibold text-sm rounded-full capitalize px-8">List your property</button>
          </div>

        </div>
      </Container>
    </header >
  )
}

export default Headar