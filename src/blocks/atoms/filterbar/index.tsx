
const Filterbar = () => {
    return (
        <div className="bg-white w-full mt-5 absolute p-5 border-2 rounded-3xl">

            <div className="grid-cols-2 grid gap-5">

                <div>
                    <h4 className="mb-3">Minimum Price</h4>
                    <Select />
                </div>

                <div>
                    <h4 className="mb-3">Maximum Price</h4>
                    <Select />
                </div>

            </div>

            <div className="grid-cols-2 grid gap-5 mt-5">

                <div>
                    <h4 className="mb-3">Property Type</h4>
                    <Select />
                </div>

                <div>
                    <h4 className="mb-3">Bedrooms</h4>
                    <Select />
                </div>

            </div>


            <div className="mt-5 flex justify-end">
                <button className="py-3.5 px-20 text-white text-sm bg-primary rounded-full ">Search</button>
            </div>



        </div>
    )
}

export default Filterbar



const Select = () => {
    return (
        <select className="select w-full max-w-xs border border-primary rounded-full">
            <option disabled selected>Price Min</option>
            <option>AED 75,000 PA</option>
            <option>AED 75,000 PA</option>
            <option>AED 75,000 PA</option>
            <option>AED 75,000 PA</option>
            <option>AED 75,000 PA</option>
        </select>
    )
}