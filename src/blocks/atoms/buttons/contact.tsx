import Link from "next/link";
import { FiPhone } from "react-icons/fi";
const Contact = () => {
  return (
    <>
      <button aria-label="contact" className="_center hidden lg:flex">
        <a
          target="tel:+971 42582592"
          className="bg-primary py-4 text-white hover:bg-white group hover:border hover:border-primary duration-100 hover:text-primary font-medium text-sm rounded-full capitalize px-8 flex gap-2 items-center"
          href="https://api.whatsapp.com/send?phone=+971502265265&text=Hi%20There%2C%20%0A%0AI%20am%20interested%20in%20the%20listing%2C%20https://www.knsproperty.com/%2C%20from%20your%20website.%20I%20would%20like%20to%20get%20more%20information%2C%20please.%0A%0AThank%20you."
        >
          <FiPhone
            color="white"
            className="stroke-white group-hover:stroke-primary"
          />
          Contact Us
        </a>
      </button>
    </>
  );
};

export default Contact;

export const SmallContact = () => {
  return (
    <Link
      href={
        "https://api.whatsapp.com/send?phone=+971502265265&text=Hi%20There%2C%20%0A%0AI%20am%20interested%20in%20the%20listing%2C%20https://www.knsproperty.com/%2C%20from%20your%20website.%20I%20would%20like%20to%20get%20more%20information%2C%20please.%20%0A%0ARef%3A%20L-214762%0A%0AThank%20you."
      }
    >
      <button
        aria-label="contact"
        className="lg:hidden bg-primary mt-5 py-4 w-max text-white hover:bg-white group hover:border hover:border-primary hover:text-primary font-medium text-sm rounded-full capitalize px-8 flex gap-2 items-center"
      >
        <FiPhone
          color="white"
          className="stroke-white group-hover:stroke-primary"
        />
        Contact Us
      </button>
    </Link>
  );
};
