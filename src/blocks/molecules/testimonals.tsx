import Container from "../atoms/container"

const Testimonals = () => {
    return (
        <div className="lg:pt-[60px] lg:pb-[80px] py-10 ">
            <Container>
                <section className="text-center">
                    <div className="">
                        <h2 className="text-secondary font-medium pb-[1.5rem] lg:text-2xl md:text-xl text-xl">
                            Testimonals
                        </h2>
                        <p className="col-md-7 col-11 mx-auto text-primary text-base sm:w-[60%] pb-[10px] font-light">
                            We have a waitlist of clients ready to view properties,
                            extensive comparable community data and a trusted reputation.
                            Just three of the reasons why people choose us.
                        </p>
                    </div>
                    <div className="grid gap-x-6 md:grid-cols-3  lg:gap-x-12">
                        <User />
                        <User />
                        <User />
                    </div>
                </section>
            </Container >
        </div>

    )
}

export default Testimonals


const User = () => {
    return (
        <div className="mb-12 md:mb-0 bg-lightgray px-5 py-10 rounded-md ">
            <div className="mb-6 flex justify-center">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                    className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                />
            </div>
            <h5 className="mb-2 text-lg">Maria Smantha</h5>
            <h6 className="mb-4 font-medium text-sm text-primary dark:text-primary-400">
                Web Developer
            </h6>
            <p className="mb-4 font-light text-sm px-5 md:px-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                officiis hic tenetur quae quaerat ad velit ab hic.
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="inline-block w-6"
                >
                    <path
                        fill="currentColor"
                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                    />
                </svg>
            </p>
            <ul className="mb-0 flex justify-center">
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                    >
                        <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                    </svg>
                </li>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                    >
                        <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                    </svg>
                </li>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                    >
                        <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                    </svg>
                </li>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                    >
                        <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                    </svg>
                </li>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-warning"
                    >
                        <path
                            fill="currentColor"
                            d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                    </svg>
                </li>
            </ul>
        </div>
    )
}