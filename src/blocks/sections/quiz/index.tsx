'use client'
import React, { useState } from 'react';
import Container from '@/blocks/atoms/container';
import { motion, AnimatePresence } from 'framer-motion'
import { useLocalStorage } from '@mantine/hooks';

const Continue = ({ onClick }: any) => {
    return (
        <button className='bg-primary px-10 py-2.5 rounded-md text-white mx-auto block md:text-md text-sm' onClick={onClick}>Continue →</button>
    )
}

interface Props {
    set: any,
    next: any,
    state: any
}

const varient = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    }
}

const First: React.FC<Props> = ({ set, next, state }) => {
    return (
        <motion.div variants={varient} initial="initial" animate="animate" exit={'exit'} transition={{
            duration: 1
        }} className='flex flex-col gap-8'>
            <h1 className='text-3xl font-medium text-primary text-center mt-5'>I am interested to</h1>
            <div className='_center gap-5 '>
                <button className={`capitalize px-10 py-2.5 text-sm border border-secondary rounded-full ${state.first == 'buy' ? 'bg-secondary text-white' : ''}`} onClick={() => { set('first', 'buy') }}>buy</button>
                <button className={`capitalize px-10 py-2.5 text-sm border border-szecondary rounded-full ${state.first == 'rent' ? 'bg-secondary text-white' : ''}`} onClick={() => { set('first', 'rent') }}>rent</button>
            </div>
            <Continue onClick={next} />
        </motion.div>
    )
}

const Second: React.FC<Props> = ({ set, next, state }) => {
    return (
        <motion.div variants={varient} initial="initial" animate="animate" exit={'exit'} transition={{
            duration: 1
        }} className=' p-5  flex-col h-full gap-5'>
            <h1 className='text-3xl font-medium text-primary text-center'>I am looking for</h1>
            <div className='_center gap-5 flex-wrap py-5'>
                <button className={`capitalize px-10 py-2.5 text-sm border border-secondary rounded-full ${state.second == '1' ? 'bg-secondary text-white' : ''}`} onClick={() => { set('second', '1') }}>1 Bed</button>
                <button className={`capitalize px-10 py-2.5 text-sm border border-secondary rounded-full ${state.second == '2' ? 'bg-secondary text-white' : ''}`} onClick={() => { set('second', '2') }}>2 Bed</button>
                <button className={`capitalize px-10 py-2.5 text-sm border border-secondary rounded-full ${state.second == '3' ? 'bg-secondary text-white' : ''}`} onClick={() => { set('second', '3') }}>3 Bed</button>
                <button className={`capitalize px-10 py-2.5 text-sm border border-secondary rounded-full ${state.second == '4' ? 'bg-secondary text-white' : ''}`} onClick={() => { set('second', '4') }}>4 Bed</button>
                <button className={`capitalize px-10 py-2.5 text-sm border border-secondary rounded-full ${state.second == '5+' ? 'bg-secondary text-white' : ''}`} onClick={() => { set('second', '5+') }}>5+ Bed</button>
            </div>
            <Continue onClick={next} />
        </motion.div>
    )
}

const Third: React.FC<Props> = ({ set, next, state }) => {
    return (
        <motion.div variants={varient} initial="initial" animate="animate" exit={'exit'} transition={{
            duration: 1
        }} className=' p-5  flex-col h-full gap-5'>
            <h1 className='text-3xl font-medium text-primary text-center'>Price range (AED)</h1>
            <div className='_center gap-5 flex-wrap py-5'>
                <input value={state.min} placeholder='Min' className='p-2 rounded-md border border-secondary text-sm md:text-md' onChange={(evt) => { set('min', evt.target.value) }} type="number" />
                <input value={state.max} placeholder='Max' className='p-2 rounded-md border border-secondary text-sm md:text-md' onChange={(evt) => { set('max', evt.target.value) }} type="number" />
            </div>
            <Continue onClick={next} />
        </motion.div>
    )
}

const Fourth: React.FC<Props> = ({ set, next, state }) => {
    return (
        <motion.div variants={varient} initial="initial" animate="animate" exit={'exit'} transition={{
            duration: 1
        }} className=' p-5 flex-col h-full gap-5'>
            <h1 className='text-3xl font-medium text-primary text-center'>Amazing, give us a way to contact you</h1>
            <div className='_center gap-5 flex-wrap py-5'>
                <input value={state.name} placeholder='Name' className='p-2 rounded-md border border-secondary md:text-md text-sm' onChange={(evt) => { set('name', evt.target.value) }} type="text" />
                <input value={state.email} placeholder='Email' className='p-2 rounded-md border border-secondary md:text-md text-sm' onChange={(evt) => { set('email', evt.target.value) }} type="email" />
                <input value={state.mobile} placeholder='Mobile' className='p-2 rounded-md border border-secondary md:text-md text-sm' onChange={(evt) => { set('mobile', evt.target.value) }} type="number" />
            </div>
            <Continue onClick={next} />
        </motion.div>
    )
}

const QuizComponent: React.FC = () => {

    const [storage, setStorage] = useLocalStorage({ key: 'knsproperty', defaultValue: false })

    const [state, setState] = useState({
        first: '',
        second: '',
        // third
        min: '',
        max: '',
        //fourth
        name: '',
        email: '',
        mobile: ''
    })

    const [index, setIndex] = useState(0)

    const set = (name: string, value: string) => {
        setState(state => {
            return { ...state, [name]: value }
        })
    }

    const next = () => {
        if (index == 3) {
            setStorage(true)
        }
        setIndex(index + 1)
    }

    return (
        <div className='py-10 px-2'>
            <Container>
                {storage && (
                    <div>
                        <h1 className='text-center md:text-xl text-lg bg-lightgreen py-10 rounded-md'>Quiz is completed</h1>
                    </div>
                )}
                {!storage && (
                    <div className='flex justify-center'>
                        <div className='px-5 pb-10 bg-white border rounded-md max-w-[500px] lg:min-w-[500px] w-full'>
                            <div className='grid grid-cols-4 gap-5 mb-5 mt-10 mx-auto max-w-[200px]'>
                                {[0, 1, 2, 3].map((j) => <button key={j} onClick={() => { setIndex(j) }} className={`${index == j ? 'bg-primary' : 'bg-[#80808080]'} h-[5px] rounded-md`}></button>)}
                            </div>
                            <AnimatePresence>
                                {index == 0 && <First set={set} next={next} state={state} />}
                                {index == 1 && <Second set={set} next={next} state={state} />}
                                {index == 2 && <Third set={set} next={next} state={state} />}
                                {index == 3 && <Fourth set={set} next={next} state={state} />}
                            </AnimatePresence>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    )
};

export default QuizComponent;

