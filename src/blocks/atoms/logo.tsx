import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <button aria-label="logo" className="flex items-center gap-2">
        <Image src="/ksn.png" alt="logo" width={50} height={50} />
      </button>
    </Link>
  );
};
export default Logo;
