import React from 'react'

import { FiClock, FiCalendar, FiHome } from 'react-icons/fi'

import { FaLocationDot } from 'react-icons/fa6'

const LocationCard = () => {
    return (
        <div className=' px-10 pb-8 pt-6 bg-[#E3ECEE] grid gap-5 rounded-md  bg-[url("/mapbg.webp")] bg-center bg-cover '>




            <div>


                <div className='_center py-10'>
                    <FaLocationDot color='blue' size={50} />

                </div>

                <button className=" w-full py-3.5 bg-opacity-50 border border-primary text-primary font-semibold text-sm rounded-full capitalize px-8 bg-[#E3ECEE]">Location Map</button>

            </div>




        </div>
    )
}

export default LocationCard