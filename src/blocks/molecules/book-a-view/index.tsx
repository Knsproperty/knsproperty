'use client'
import { Fragment } from 'react'
import DatePicker from "./picker"
import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';

interface Props {
    isOpen: boolean,
    closeModal: any,
}

const BookAView: React.FC<Props> = ({ isOpen, closeModal }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedHour, setSelectedHour] = useState('8AM');

    const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDate(event.target.value);
    };

    const handleHourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedHour(event.target.value);
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-5 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="xl:text-xl text-lg font-semibold text-secondary pb-3 text-center">
                                    Take a tour with our agent
                                </Dialog.Title>
                                <div className="mt-2">
                                    <DatePicker
                                        {...{
                                            selectedDate,
                                            selectedHour,
                                            handleDateChange,
                                            handleHourChange
                                        }}
                                    />
                                    <div className='grid gap-2'>
                                        <input
                                            type="text"
                                            placeholder='Your name'
                                            className='text-sm bg-lightgray border border-lightgreen p-2 rounded-md placeholder:text-sm placeholder:font-light' />
                                        <input
                                            type="text"
                                            placeholder='Your email'
                                            className='text-sm bg-lightgray border border-lightgreen p-2 rounded-md placeholder:text-sm placeholder:font-light' />
                                        <input
                                            type="text"
                                            placeholder='Your Phone'
                                            className='text-sm bg-lightgray border border-lightgreen p-2 rounded-md placeholder:text-sm placeholder:font-light' />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button
                                        onClick={closeModal}
                                        className="bg-primary px-5 py-2.5 rounded-full text-white text-sm w-full" >Request this time</button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
export default BookAView


