'use client'

import { MdFilterAltOff } from "react-icons/md"
import { usePathname, useRouter } from "next/navigation"
const DataNotFound = () => {
    const pathname = usePathname()
    const router = useRouter()
    const handleClearFilters = () => {
        router.push(pathname)
    }
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-2xl tracking-tight font-extrabold lg:text-5xl text-primary-600 dark:text-primary-500">
                        Please refine your search and try again
                    </h1>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        Meanwhile, here are some of our other properties
                    </p>
                    <a
                        onClick={handleClearFilters}
                        className=" cursor-pointer inline-flex bg-lightgray gap-3  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  my-4 items-center">
                        <MdFilterAltOff color="white" className=" !stroke-white !text-white" size={22} />  Clear All Filters
                    </a>
                </div>
            </div>
        </section>

    )
}
export default DataNotFound