'use client'

import Link from "next/link"
import { useRef } from "react";
import { FiX } from "react-icons/fi";
import { config } from "@/config/links";
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import Contact from "@/blocks/atoms/buttons/contact";

const Drawer = () => {
    const overlayRef = useRef<any>(null)
    const handleClose = () => {
        overlayRef.current.click()
    }

    const list = config.menu.map((link, index) => (
        <li>
            <Link
                key={index}
                href={link.href}
                onClick={handleClose}
                className="text-[16px] font-light pl-5 py-2.5 text-primary capitalize border-b border-[#d3d3d32e]">
                {link.text}
            </Link>
        </li>
    ))

    return (
        <nav className="xl:hidden flex">
            <div className="drawer drawer-end">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex items-center justify-end">
                    <button aria-label="menu-toggle">
                        <label htmlFor="my-drawer" className="drawer-button px-3">
                            <HiOutlineMenuAlt3 size={28} className="stroke-primary" />
                        </label>
                    </button>
                </div>
                <div className="drawer-side fixed z-[9999] left-0">
                    <label ref={overlayRef} htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu w-80 h-full bg-white">
                        <li className="h-[60px] bg-primary- flex justify-center">
                            <button aria-label="menu-close" tabIndex={0} onClick={handleClose}>
                                <FiX size={22} className="stroke-primary" />
                            </button>
                        </li>
                        {list}
                        <Contact />
                    </ul>
                </div>
            </div>
        </nav >

    )
}
export default Drawer
