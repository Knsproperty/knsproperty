import Link from "next/link"
import { FiChevronDown } from "react-icons/fi"
const HeaderDropdown = ({ options, text }: { options: { text: string, href: string }[], text: string }) => {
    return (
        <div className="dropdown dropdown-hover ">
            <label tabIndex={0} className="text-sm font-light hover:underline capitalize flex items-center">{text} <FiChevronDown className="ml-2" /> </label>
            <div tabIndex={0} className="dropdown-content z-[1]  menu  w-[250px]  pt-[30px]">
                <div className="flex flex-col bg-lightgray p-5 rounded-md shadow">
                    {options.map((link, index) => <Link key={index} href={link.href} className="text-sm font-light hover:underline capitalize py-2">{link.text}</Link>)}
                </div>
            </div>
        </div>
    )
}

export default HeaderDropdown