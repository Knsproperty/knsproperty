interface Props {
    geopoint: string
}

import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const LocationCard: React.FC<Props> = ({ geopoint }) => {
    const href = `https://www.google.co.in/maps/place/${geopoint}`
    return (
        <div className='px-10 pb-8 pt-6 bg-[#E3ECEE] grid gap-5 rounded-md  bg-[url("/mapbg.webp")] bg-center bg-cover '>
            <div>
                <div className='_center py-10'>
                    <FaLocationDot color='blue' size={50} />
                </div>
                <a target='_' href={href} className="w-full block text-center py-3.5 bg-opacity-50 border border-primary text-primary font-semibold text-sm rounded-full capitalize px-8 bg-[#E3ECEE]">Location Map</a>
            </div>
        </div>
    )
}

export default LocationCard