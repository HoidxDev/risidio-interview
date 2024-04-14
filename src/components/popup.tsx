import React from 'react'
import { useSnapshot } from 'valtio';
import store from '../store';

const dummy = [{
    title: 'Loremups',
}]


export default function Popup() {
    const snap = useSnapshot(store);
    const { popupOpen } = snap
    const poster = dummy[0]

    return (
        <div className={`absolute top-0 -z-10 flex items-start px-5 lg:px-20 pt-8 justify-center w-full h-screen ${popupOpen && '!z-20'}`}>{popupOpen &&
            <div className='z-50 flex flex-col w-[80rem] items-center justify-between h-[81vh] font-poppins'>
                <nav className='w-full h-12 rounded-t-2.5xl bg-red-100 bg-opacity-50 justify-between backdrop-blur-3xl flex items-center'>
                    <h4 className='w-24 ml-5 text-xs font-medium sm:w-32 sm:text-sm sm:ml-11 text-tertiary'> {poster.title} info</h4>
                    <div className='flex flex-col gap-1 cursor-pointer'>
                        <div className='w-8 h-0.5 rounded-full bg-tertiary' />
                        <div className='w-8 h-0.5 rounded-full bg-tertiary' />
                        <div className='w-8 h-0.5 rounded-full bg-tertiary' />
                    </div>
                    <div onClick={() => store.popupOpen = false}
                        className='flex flex-col items-end w-24 mr-5 cursor-pointer sm:mr-7 sm:w-36'>
                        <div className='relative w-6 h-1 rotate-45 rounded-full top-1 bg-tertiary' />
                        <div className='w-6 h-1 -rotate-45 rounded-full bg-tertiary' />
                    </div>
                </nav>
                <div className='flex items-center justify-center px-5 w-full rounded-b-2.5xl bg-white grow shadow-2xl'>
                    <h1 className='text-2xl font-bold sm:text-4xl md:text-5xl text-popupText'>You opened the popup</h1>
                </div>
            </div>
        }</div>
    )
}
