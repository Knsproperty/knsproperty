interface Props {
    selected: string,
    setSelected: any,
}
const categories = ["residental", "commercial", "off-plan"];
const PropertySelection: React.FC<Props> = ({ setSelected, selected }) => {
    return (
        <div className="grid-cols-3 mt-8 gap-5  rounded-full p-1.5 inline-grid">
            {categories.map((ctgr, index) => (
                <button
                    key={index}
                    onClick={() => setSelected(ctgr)}
                    className={`py-3  font-medium text-sm rounded-full capitalize px-8 ${selected === ctgr ? " bg-white border border-primary text-black" : "bg-black bg-opacity-30 text-white border"}`}> {ctgr} </button>
            ))}
        </div>
    )
}
export default PropertySelection