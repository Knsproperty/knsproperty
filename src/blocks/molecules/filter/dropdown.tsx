interface dropdown {
    value: string | null,
    name: string,
    options: {
        value: string,
        label: string
    }[]
}
import { useRouter } from "next/navigation"
import { FiChevronDown } from "react-icons/fi"

const Dropdown: React.FC<dropdown> = ({ value, name, options }) => {
    const router = useRouter()
    const valueFiltered = value ? options.filter((ele) => ele.value == value)[0].label : null;
    const title = valueFiltered ?? (name == 'type' ? 'property type' : name)
    return (
        <div className="dropdown">
            <label tabIndex={0}>
                <button tabIndex={-1} className="py-2.5 px-5 rounded-full border border-primary text-primary w-full capitalize flex items-center justify-center font-[300] text-sm">
                    {title}
                    <FiChevronDown className="ml-5" />
                </button>
            </label>
            <ul
                tabIndex={0}
                className="w-full custom-scrollbar dropdown-content z-[1] menu p-2 shadow bg-white rounded-box lg:w-52 lg:mt-8 max-h-80 grid overflow-y-scroll">
                {options.map((opt) => (
                    <li
                        key={opt.value}
                        onClick={() => {
                            if (opt.value !== 'Show All') {
                                router.push(updateSearchParams(name, opt.value))
                            } else {
                                router.push(deleteSearchParams(name))
                            }
                        }}>
                        <a className="capitalize">{opt.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown

// func : query update
export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
    return `${window.location.pathname}?${searchParams.toString()}`;
};

export const deleteSearchParams = (type: string) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete(type.toLocaleLowerCase());
    return `${window.location.pathname
        }?${newSearchParams.toString()}`;

};

