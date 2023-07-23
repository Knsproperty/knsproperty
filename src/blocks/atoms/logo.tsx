import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <button aria-label="logo" className="flex items-center gap-2 ">
        <Image src="/white-logo.png" alt="logo" width={100} height={100} />
      </button>
    </Link>
  );
};
export default Logo;
