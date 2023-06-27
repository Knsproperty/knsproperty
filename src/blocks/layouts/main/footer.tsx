import Link from "next/link"
import BtnHoverOutline from "@/blocks/atoms/buttons/hover-outline"
import { FiTwitter, FiInstagram, FiMapPin } from "react-icons/fi"

const __meta = {
    social: [
        {
            Icon: FiTwitter,
            href: '/'
        },
        {
            Icon: FiInstagram,
            href: '/'
        }, {
            Icon: FiMapPin,
            href: '/'
        },
        {
            Icon: FiTwitter,
            href: '/'
        },
        {
            Icon: FiInstagram,
            href: '/'
        }, {
            Icon: FiMapPin,
            href: '/'
        }
    ],
    links: {
        services: [
            { text: 'buy', href: '/' },
            { text: 'ren', href: '/' },
            { text: 'off plan', href: '/' },
            { text: 'commercial', href: '/' },
            { text: 'property management', href: '/' },
        ],
        abouts: [
            { text: 'our services', href: '/' },
            { text: 'meet the team', href: '/' },
            { text: 'Careers at Allsopp & Allsopp', href: '/' },
        ],
        'contact us': [
            { text: '(+971) 4 559 8030', href: '/' },
            { text: 'info@knsproperty.com', href: '/' },
        ]
    }
}


const Footer = () => {
    return (
        <footer className="bg-lightgray">

            <div className="max-w-[1320px] mx-auto">
                <section className="grid grid-cols-2 w-full py-10">
                    <div >
                        <div className="flex gap-3 mb-5">
                            {__meta.social.map((links) => (
                                <BtnHoverOutline><links.Icon className="stroke-black group-hover:stroke-white" size={20} /></BtnHoverOutline>
                            ))}
                        </div>

                        <div className="flex gap-2 items-center">
                            <Link href={'/'} className="text-[13px] font-light hover:underline capitalize">Terms & Condition</Link> ,
                            <Link href={'/'} className="text-[13px] font-light hover:underline capitalize">Privacy & Cookies</Link>
                        </div>

                        <p className="text-[13px] font-light hover:underline capitalize">Copyright © Allsopp & Allsopp</p>

                    </div>

                    <div className="grid grid-cols-3">
                        {
                            Object.keys(__meta.links).map((key) => (
                                <div>
                                    <h5 className="capitalize font-medium py-2">{key}</h5>
                                    <div className="flex flex-col gap-1">
                                        {(__meta.links as any)[key].map((links: any) => (<Link href={links.href} className="text-sm font-light hover:underline capitalize">{links.text}</Link>))}
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </section>


                <section className="py-5 border-t border-[#efefef]">
                    <p className="text-sm font-light text-center">Allsopp & Allsopp Real Estate Broker is a company registered in Dubai, United Arab Emirates (License No. 613873), 26th Floor, Vision Tower, Business Bay, Dubai, PO Box 55720. We are regulated by the Real Estate Regulatory Agency under office number 1815.</p>
                </section>
            </div >

        </footer >
    )
}
export default Footer




