'use client'
import Parallax from "@/blocks/animation/parallex";
import { usePathname } from "next/navigation";
export default function PropertyHalfPage({ title, bg }: any) {
    const pathname = usePathname()
    if (!['/property/buy', '/property/rent', '/property/offplan'].includes(pathname)) {
        return null
    }
    return (
        <section
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")' }}
            className={`h-[50vh] bg-center bg-no-repeat bg-cover`}>
            <div className="w-full h-full _center  bg-[#00000047] backdrop-brightness-75">
                <Parallax>
                    <h1 className="text-white xl:text-5xl lg:text-3xl md:text-2xl text-3xl font-semibold">{title}</h1>
                </Parallax>
            </div>
        </section>
    )
}