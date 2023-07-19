const Hero = () => {
    return (
        <div className="relative w-full h-[calc(100vh-70px)] bg-black">

            <div className="absolute w-full h-full top-0 left-0 z-30  bg-black bg-opacity-40 _center flex-col">
                <div className=" p-10 rounded-md max-w-[600px] -mt-[100px]">
                    <h1 className=" text-white md:text-3xl text-xl text-center mb-2 special-font">"To Build true long-term wealth. <br /> You must buy and hold real estate"</h1>
                    <p className="text-sm text-[lightgray] text-center " >Warren Buffett</p>
                </div>
            </div>

            <video autoPlay muted loop className="absolute top-0 z-20 left-0 w-full h-full object-cover"  >
                <source src="video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
export default Hero