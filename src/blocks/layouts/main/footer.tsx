// Sementication : start from footer



import Link from "next/link";
import Container from "@/blocks/atoms/container";
import { config } from "@/config/links";

const Footer = () => {
  return (
    <footer className="bg-lightgray p-5 lg:p-3">
      <Container>
        <section className="grid lg:grid-cols-2 w-full py-10 gap-5 lg:gap-0">
          <div className="order-2 lg:order-1">
            <div className="flex gap-3 flex-wrap mb-5">
              {config.footer.social.map((links, index) => <SocialIcon key={index} links={links} />)}
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
        Object.keys(config.footer.links).map((key, index) => (
          <div key={index}>
            <h5 className="capitalize font-medium py-2 md:text-md text-md">{key}</h5>
            <ul className="flex flex-col gap-1">
              {(config.footer.links as any)[key].map(
                (links: any, index2: number) => (
                  <li key={index2} >
                    <Link
                      href={links.href}
                      className="text-sm font-light hover:underline capitalize">
                      {links.text}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))
      }
    </>
  )
}