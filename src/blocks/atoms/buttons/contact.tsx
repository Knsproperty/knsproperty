import { FiPhone } from "react-icons/fi"
const Contact = () => {
    return (
        <>
            <button className="_center hidden lg:flex">
                <a className="bg-primary py-4 text-white hover:bg-white group hover:border hover:border-primary hover:text-primary font-medium text-sm rounded-full capitalize px-8 flex gap-2 items-center">
                    <FiPhone
                        color="white"
                        className="stroke-white group-hover:stroke-primary"
                    />
                    Contact Us
                </a>
            </button>
            {/* Small  */}
            <button className="lg:hidden bg-primary mt-5 py-4 w-max text-white hover:bg-white group hover:border hover:border-primary hover:text-primary font-medium text-sm rounded-full capitalize px-8 flex gap-2 items-center">
                <FiPhone color="white" className="stroke-white group-hover:stroke-primary" />
                Contact Us
            </button>
        </>
    )
}

export default Contact