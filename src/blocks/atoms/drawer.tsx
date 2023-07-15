'use client'
import Link from "next/link"
import { useRef } from "react";
import { FiX, FiPhone } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi"

const Drawer = () => {
    const overlayRef = useRef<any>(null)
    const handleClose = () => {
        overlayRef.current.click()
    }

    const list = links.map((link, index) => (
        <Link
            key={index}
            href={link.href}
            onClick={handleClose}
            className="text-[16px] font-light pl-5 py-2.5 text-primary capitalize border-b border-[#d3d3d32e]">
            {link.text}
        </Link>
    ))

    return (
        <nav className="xl:hidden flex">
            <div className="drawer drawer-end">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex items-center justify-end">
                    <label htmlFor="my-drawer" className="drawer-button px-3">
                        <HiOutlineMenuAlt3 size={28} className="stroke-primary" />
                    </label>
                </div>
                <div className="drawer-side fixed z-[9999] left-0">
                    <label ref={overlayRef} htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu w-80 h-full bg-white">
                        <li className="h-[60px] bg-primary- flex justify-center">
                            <button name="close" tabIndex={0} onClick={handleClose}>
                                <FiX size={22} className="stroke-primary" />
                            </button>
                        </li>
                        {list}
                        <button className="bg-primary mt-5 py-4 w-max text-white hover:bg-white group hover:border hover:border-primary hover:text-primary font-medium text-sm rounded-full capitalize px-8 flex gap-2 items-center">
                            <FiPhone color="white" className="stroke-white group-hover:stroke-primary" />
                            Contact Us
                        </button>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default Drawer

const links = [
    { text: 'Home', href: '/' },
    { text: 'buy', href: '/property/buy' },
    { text: 'rent', href: '/property/rent' },
    { text: 'offplan', href: '/property/offplan' },
    { text: 'contact us', href: "/contact" },
    { text: 'careers', href: "/about-us/careers" },
    { text: 'our team', href: "/about-us/team" },
    { text: 'property management', href: '/property/management' },
]
