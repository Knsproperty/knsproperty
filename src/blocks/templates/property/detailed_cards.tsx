import Image from "next/image"
interface Props {
    price: string
    type: string
}
export default function DetailedCards({ price, type }: Props) {
    return (
        <>
            <section className="my-10">
                <div className=" mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3  lg:gap-x-12">
                        <div className="transition-all duration-200  hover:shadow-xl rounded-xl">
                            <div className="py-5 px-20 _center  flex-col">
                                <Image src={'/key.png'} alt="image" width={50} height={50} />
                                <h3 className="mt-5 text-lg font-semibold text-black">
                                    Assured
                                </h3>
                                <p>Support</p>
                            </div>
                        </div>
                        <div className="transition-all duration-200  hover:shadow-xl rounded-xl">
                            <div className="py-5 px-20 _center flex-col">
                                <Image src={'/house.png'} alt="image" width={50} height={50} />

                                <h3 className="mt-5 text-lg font-semibold text-black">
                                    AED {price}
                                </h3>
                                <p>Starting Price</p>
                            </div>
                        </div>
                        <div className="transition-all duration-200  hover:shadow-xl rounded-xl">
                            <div className="py-5 px-20 _center flex-col">
                                <Image src={'/resume.png'} alt="image" width={50} height={50} />

                                <h3 className="mt-5 text-lg font-semibold text-black">
                                    Secured Payments
                                </h3>
                                <p>Options</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>

    )
}