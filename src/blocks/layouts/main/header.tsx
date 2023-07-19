import Link from "next/link";
import { config } from "@/config/links";
import Logo from "@/blocks/atoms/logo";
import Container from "@/blocks/atoms/container";
import Drawer from "@/blocks/molecules/menu-drawer";
import Contact from "@/blocks/atoms/buttons/contact";
import Dropdown from "@/blocks/layouts/main/dropdown";

const Header: React.FC = () => {
  const buttons = config.desktop.map((link, index) =>
    link.options ? (
      <Dropdown
        key={index}
        href={link.href}
        text={link.text}
        options={link.options}
      />
    ) : (
      <Link
        key={index}
        href={link.href}>
        <button className="text-sm font-light hover:underline capitalize">{link.text}</button>
      </Link>
    )
  )
  return (
    <>
      <header className="px-3 fixed top-0 w-full bg-white border-b border-b-[#8080804a] z-50">
        <Container>
          <div className="h-[70px] grid lg:grid-cols-[1fr_2fr_1fr] grid-cols-[1fr_1fr] ">
            <div className="flex items-center lg:justify-center">
              <Logo />
            </div>

            <nav className="xl:flex items-center justify-around ml-5 hidden">
              {buttons}
            </nav>

            <Drawer />
            <Contact />

          </div>
        </Container>
      </header>


      <div className="h-[70px]">&nbsp;</div>
    </>
  );
};

export default Header;
