import Link from "next/link";
import { config } from "@/config/links";
import SocialIcon from "./social-icon";
import Container from "@/blocks/atoms/container";

const Footer = () => {
  return (
    <footer className="bg-lightgray p-5 lg:p-3">
      <Container>
        <section className="grid lg:grid-cols-2 w-full py-10 gap-5 lg:gap-0">
          <div className="order-2 lg:order-1">
            <div className="flex gap-3 flex-wrap mb-5">
              {config.footer.social.map((links, index) => (
                <SocialIcon key={index} links={links} />
              ))}
            </div>

            <p className="text-sm  max-w-md">
              <b>Office address - </b>Office #106, KIA Flagship Building, 1 Al
              Safeena Street, Near Al Quoz Cemetery, Al Quoz 1 - Dubai.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 lg:gap-0 order-1 lg:order-2">
            <List />
          </div>
        </section>
        <p className="text-sm">Copyright© K&S PROPERTIES L.L.C. All Rights Reserved</p>
      </Container>
    </footer>
  );
};
export default Footer;

const List = () => {
  const keys = Object.keys(config.footer.links);
  return (
    <>
      {keys.map((key, index) => (
        <div key={index}>
          <h6 className="capitalize font-medium py-2 md:text-md text-md">{key}</h6>
          <ul className="flex flex-col gap-1">
            {(config.footer.links as any)[key].map(
              (links: any, index2: number) => (
                <li key={index2}>
                  <Link
                    href={links.href}
                    className="text-sm  hover:underline capitalize">
                    {links.text}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </>
  );
};
