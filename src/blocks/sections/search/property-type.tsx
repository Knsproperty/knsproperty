const PropertyType = ({ active, setActive, clear }: any) => {
    const buttons = ["buy", "rent", "offplan"].map((name) => (
        <button
            key={name}
            onClick={() => {
                setActive(name);
                clear()
            }}
            className={`text-white px-5 py-2.5 rounded-full md:text-sm text-[13px] capitalize ${active == name ? "bg-primary " : "bg-transparent"}`}>
            {name}
        </button>
    ));
    return (
        <div className="bg-secondary px-3 rounded-full overflow-hidden sm:flex items-center grid grid-cols-3 h-[60px] mx-auto ">
            {buttons}
        </div>
    );
};

export default PropertyType