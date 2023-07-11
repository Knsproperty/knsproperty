import Link from "next/link";
import { BsTiktok } from "react-icons/bs"
import { FaFacebookF } from 'react-icons/fa'
import Container from "@/blocks/atoms/container";
import { FiInstagram, FiMapPin } from "react-icons/fi";

const __meta = {
  social: [
    {
      Icon: BsTiktok,
      href: "https://www.tiktok.com/@knsproperties?is_from_webapp=1&sender_device=pc",
    },
    {
      Icon: FaFacebookF,
      href: "https://www.facebook.com/kspropertiesOfficial/",
    },
    {
      Icon: FiInstagram,
      href: "https://www.instagram.com/kspropertiesofficial/",
    },
    {
      Icon: FiMapPin,
      href: "/",
    },

  ],
  links: {
    services: [
      { text: "buy", href: "/property/buy" },
      { text: "rent", href: "/property/rent" },
      { text: "off plan", href: "/property/offplan" },
      { text: "commercial", href: "/property/commercial" },
      { text: "property management", href: "/property/property-management" },
    ],
    abouts: [
      { text: "meet the team", href: "/about-us/team" },
      { text: "Careers at Knsproperty", href: "/about-us/careers" },
    ],
    "contact us": [
      { text: "(+971) 5022652650", href: "https://wa.me/+971502265265" },
      { text: "Info@knsproperty.com", href: "mailto:Info@knsproperty.com" },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="bg-lightgray p-5 lg:p-0">
      <Container>

        <section className="grid lg:grid-cols-2 w-full py-10 gap-5 lg:gap-0">

          <div className="order-2 lg:order-1">


            <div className="flex gap-3 flex-wrap mb-5">
              {__meta.social.map((links, index) => <SocialIcon key={index} links={links} />)}
            </div>


            <p className="text-sm font-light max-w-md">
              <b>Office address - </b>Office #106, KIA Flagship Building, 1 Al Safeena Street, Near Al Quoz Cemetery, Al Quoz 1 - Dubai.
            </p>

            <p className="text-[13px] font-light  capitalize mt-2">
              Copyright © k&sproperty
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 lg:gap-0 order-1 lg:order-2">
            <List />
          </div>
        </section>

      </Container>
    </footer>
  );
};
export default Footer;


const SocialIcon = ({ links }: any) => {
  return (
    <a href={links.href} target="_">
      <button className=" bg-white shadow-md py-3.5 group font-semibold text-sm rounded-full capitalize px-3.5">
        <links.Icon className="stroke-black" size={18} />
      </button>
    </a>
  )
}

const List = () => {
  return (
    <>
      {
        Object.keys(__meta.links).map((key, index) => (
          <div key={index}>
            <h5 className="capitalize font-medium py-2">{key}</h5>
            <div className="flex flex-col gap-1">

              {(__meta.links as any)[key].map(
                (links: any, index2: number) => (
                  <Link
                    key={index2}
                    href={links.href}
                    className="text-sm font-light hover:underline capitalize">
                    {links.text}
                  </Link>
                )
              )}
            </div>
          </div>
        ))
      }
    </>
  )
}