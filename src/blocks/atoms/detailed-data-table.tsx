const Table = () => {
    return (
        <table className="table border border-lightgreen bg-lightgray  max-w-[500px]-- mt-3">
            <tbody>
                <tr className="border-b border-b-lightgreen">
                    <td className="text-secondary">Property Type</td>
                    <td className="font-light text-sm">Apartment</td>
                </tr>
                <tr className="border-b border-b-lightgreen">
                    <td className="text-secondary">Purpose</td>
                    <td className="font-light text-sm">For Sale</td>
                </tr>
                <tr className="border-b border-b-lightgreen">
                    <td className="text-secondary">Bedrooms(s)</td>
                    <td className="font-light text-sm">3</td>
                </tr>
                <tr className="border-b border-b-lightgreen">
                    <td className="text-secondary">Bath(s)</td>
                    <td className="font-light text-sm">2</td>
                </tr>
                <tr>
                    <td className="text-secondary">Area Size</td>
                    <td className="font-light text-sm">2000 SQFT</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table