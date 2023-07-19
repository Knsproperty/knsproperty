'use client'
import React from 'react';
import { FiX } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

interface Props {
    onclose: any
}

const NewsLetter: React.FC<Props> = ({ onclose }) => {
    return (
        <div className='grid lg:grid-cols-2'>
            <div className='bg-primary text-white pt-5 pb-10 px-5 relative lg:static  rounded-t-md'>
                <button onClick={onclose} tabIndex={0} aria-label="close" className='absolute top-1.5 right-1.5 bg-white p-2 rounded-full lg:hidden inline-block'><FiX className=' stroke-primary' /></button>
                <div className='bg-secondary p-3 inline-block rounded-md _center'>
                    <HiOutlineMail className='stroke-white' size={20} />
                </div>
                <h1 className='text-white text-3xl font-light mb-2'> Sign Up <br /> and stay updated</h1>
                <p className='text-sm font-light text-[#e4e4e4]'>Lorem ipsum dolor <b className='text-[#e4e4e4]'>sit amet consectetur adipisicing</b> elit. Alias illo itaque ab consequuntur. Dolorem quam aperiam repudiandae. Odit, perspiciatis dolore?</p>
            </div>

            <div className='px-5 py-10 bg-white lg:relative rounded-b-md'>
                <button onClick={onclose} tabIndex={0} aria-label="close" className='absolute top-0 right-1 bg-primary  p-2 -mr-5 -mt-3 rounded-full lg:inline-block hidden'><FiX className=' stroke-white' /></button>
                <form>
                    <input type="text" className='text-sm placeholder:text border border-[lightgray] px-5 py-2.5 block w-full mb-2 rounded-md' placeholder='Name' />
                    <input type="text" className='text-sm placeholder:text border border-[lightgray] px-5 py-2.5 block w-full mb-2 rounded-md' placeholder='Email' />
                    <button type='submit' className='px-5 py-2.5 w-full block bg-secondary text-white rounded-md font-light text-sm mb-2'>Subscribe</button>
                    <p className='text-sm font-light '>Zero span, Unsubcribe any time</p>
                </form>
            </div>
        </div>
    )
}
export default NewsLetter