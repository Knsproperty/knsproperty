interface Props {
    options: {
        text: string,
        href: string
    }[],
    text: string, href: string
}

import Link from "next/link"
import { FiChevronDown } from "react-icons/fi"

const HeaderDropdown: React.FC<Props> = ({ options, text, href }) => {
    return (
        <div className="dropdown dropdown-hover">

            <Link href={href}>
                <button
                    tabIndex={0}
                    className="text-md font-medium hover:underline capitalize flex items-center text-white">
                    {text}<FiChevronDown className="ml-2 !stroke-white" />
                </button>
            </Link>

            <div tabIndex={0}
                className="dropdown-content z-[1] menu w-[250px] pt-[30px]">
                <ul className="flex flex-col bg-lightgray p-5 rounded-md shadow">
                    {options.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} className="text-md font-medium hover:underline capitalize py-2">{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    )
}

export default HeaderDropdown