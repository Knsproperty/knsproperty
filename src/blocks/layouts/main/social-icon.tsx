const SocialIcon = ({ links }: any) => {
    return (
        <a href={links.href} target="_">
            <button
                aria-label={links.name}
                className=" bg-white shadow-md py-3.5 group font-semibold text-sm rounded-full capitalize px-3.5">
                <links.Icon className="stroke-black" size={18} />
            </button>
        </a>
    );
};

export default SocialIcon