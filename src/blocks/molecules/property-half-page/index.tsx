export default function PropertyHalfPage({ title, bg }: any) {
    return (
        <section
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")' }}
            className={`h-[50vh] bg-center bg-no-repeat bg-cover`}>
            <div className="w-full h-full _center  bg-[#00000047] backdrop-brightness-75">
                <h1 className="text-white text-5xl font-semibold">{title}</h1>
            </div>
        </section>
    )
}