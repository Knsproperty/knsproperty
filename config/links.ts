import { BsTiktok } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram, FiMapPin } from "react-icons/fi";

export const config = {
  menu: [
    { text: "Home", href: "/" },
    { text: "buy", href: "/property/buy" },
    { text: "rent", href: "/property/rent" },
    { text: "offplan", href: "/property/offplan" },
    { text: "contact us", href: "/contact" },
    { text: "careers", href: "/about-us/careers" },
    { text: "our team", href: "/about-us/team" },
    { text: "about", href: "/about-us" },
    { text: "blogs", href: "/blogs" },
    { text: "property management", href: "/property/management" },
  ],
  desktop: [
    {
      text: "buy",
      href: "/property/buy",
      options: [
        { text: "apartment for sale", href: "/property/buy?type=AP" },
        { text: "villas for sale", href: "/property/buy?type=VH" },
        { text: "townhouses for sale", href: "/property/buy?type=TH" },
      ],
    },
    {
      text: "rent",
      href: "/property/rent",
      options: [
        { text: "apartment for rent", href: "/property/rent?type=AP" },
        { text: "villas for rent", href: "/property/rent?type=VH" },
        { text: "townhouses for rent", href: "/property/rent?type=TH" },
      ],
    },
    { text: "property management", href: "/property/management" },
    { text: "off plan", href: "/property/offplan" },
    {
      text: "explore more",
      href: "/",
      options: [
        { text: "about", href: "/about-us" },
        { text: "careers", href: "/about-us/careers" },
        { text: "our team", href: "/about-us/team" },
        { text: "contact us", href: "/contact" },
        { text: "blogs", href: "/blogs" },
      ],
    },
  ],
  footer: {
    social: [
      {
        name: "tiktok",
        Icon: BsTiktok,
        href: "https://www.tiktok.com/@knsproperties?is_from_webapp=1&sender_device=pc",
      },
      {
        name: "facebook",
        Icon: FaFacebookF,
        href: "https://www.facebook.com/kspropertiesOfficial/",
      },
      {
        name: "instragram",
        Icon: FiInstagram,
        href: "https://www.instagram.com/kspropertiesofficial/",
      },
      {
        name: "location",
        Icon: FiMapPin,
        href: "https://maps.app.goo.gl/MnAreDemXshaA2XS7?g_st=ic",
      },
    ],
    links: {
      services: [
        { text: "buy", href: "/property/buy" },
        { text: "rent", href: "/property/rent" },
        { text: "off plan", href: "/property/offplan" },
        { text: "property management", href: "/property/property-management" },
      ],
      abouts: [
        { text: "meet the team", href: "/about-us/team" },
        { text: "Careers at Knsproperty", href: "/about-us/careers" },
      ],
      "contact us": [
        { text: "(+971) 42582592", href: "tel:+97142582592" },
        { text: "info@knsproperty.com", href: "mailto:info@knsproperty.com" },
      ],
    },
  },
};
