import Landing from "@/blocks/sections/landing"
import Container from "@/blocks/atoms/container"

export default function Page() {
    return (
        <div>

            <Landing background="url('https://www.allsoppandallsopp.com/images/banners/career.jpg')">
                <div>
                    <h5 className="text-white text-center mb-10">Join us</h5>
                    <h1 className="text-5xl font-semibold text-white text-center">Careers at Allsopp </h1>
                </div>
            </Landing>


            <Container>
                <section className="grid lg:grid-cols-2 grid-cols-1 py-20 gap-5">
                    <div className="px-10 ">
                        <h2 className="text-2xl font-semibold mb-5 capitalize">work with us</h2>
                        <p className="text">Dubai is diverse. So are we. We employ people from a variety of backgrounds and levels of experience. After your induction, we invest heavily in your ongoing development. We help you maximize your existing skills whilst teaching you new skill sets, ensuring you are fully confident in your job and future career.</p>
                    </div>

                    <div className="px-10">

                        <form>
                            <label className="label">
                                <span className="label-text text-black">Full Name*</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-full " />


                            <label className="label">
                                <span className="label-text text-black">Email*</span>
                            </label>
                            <input type="email" placeholder="Enter email" className="input input-bordered w-full max-w-full" />


                            <label className="label">
                                <span className="label-text text-black">Phone*</span>
                            </label>
                            <input type="number" placeholder="Enter your Mobile No." className="input input-bordered w-full max-w-full" />


                            <label className="label">
                                <span className="label-text text-black">Resume</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-full" />
                            <label className="label">
                                <span className="label-text-alt text-black">MAX 10MB, PDF, DOC, DOCX</span>
                            </label>

                            <button className="btn mt-3">Submit</button>

                        </form>

                    </div>

                </section>




            </Container>

        </div>
    )
}   