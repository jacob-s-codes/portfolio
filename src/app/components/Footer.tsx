import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className=' mt-12 border-t-2 border-white px-8 py-4 rounded-xl backdrop-blur-2xl'>
            <div className='max-w-7xl mx-auto flex justify-center'>
                <p className='text-white font-bold text-center'>© {year} Jacob Shaul. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer