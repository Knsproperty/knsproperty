'use client'

import React from 'react'
import BookAView from '../book-a-view'
import { FiClock, FiCalendar, FiHome } from 'react-icons/fi'
import { useState } from 'react'
const ContactCard = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className=' px-10 pb-8 pt-6 bg-[#E3ECEE] grid gap-5 rounded-md '>
            <div>
                <h4 className='text-xl'>Contact</h4>
            </div>
            <div className='grid gap-2'>
                <p className='text-sm font-light flex items-center gap-2'><FiClock />Arrange a viewing, 24/7</p>
                <p className='text-sm font-light flex items-center gap-2'><FiCalendar />Choose a date & time</p>
                <p className='text-sm font-light flex items-center gap-2'><FiHome />Need to sell first? Book a valuation</p>
            </div>
            <div>
                <button onClick={openModal} className="bg-primary w-full py-3.5 text-white hover:bg-transparent border hover:border-primary hover:text-primary font-semibold text-sm rounded-full capitalize px-8 mt-3">Book a Viewing</button>
            </div>


            <BookAView isOpen={isOpen} closeModal={closeModal} />

        </div>
    )
}

export default ContactCard