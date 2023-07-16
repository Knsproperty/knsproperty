import Link from "next/link"

const Logo = () => {
    return (
        <Link href={"/"}>
            <button aria-label="logo" className="flex items-center gap-2">
                <img src="/ksn.png" alt="logo" className="w-[50px]" />
            </button>
        </Link>
    )
}
export default Logo