import Bottombuttons from '@/app/components/Bottombuttons'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='relative mx-auto w-full max-w-6xl lg:text-2xl text-xl z-10 overflow-hidden'>
             
            <h1 className='lg:text-7xl text-5xl mt-6'>UHS Hacks</h1>
            <hr className='border-2 border-white' />
            <div className='w-full flex items-center justify-center mt-8'>
                <img src="/uhshacks/fullimage.jpg" alt="UHS Hacks Pic" className='rounded-lg' />
            </div>

            <div className='py-12'>
                <p>This is a hackathon that I hosted at my school, University High School. I helped to raise over $18,000 in funds and prizes. The hackathon was free for any high schooler in the Bay Area interested!</p>
            </div>

            <div>
                <img src="/uhshacks/image1.jpg" alt="UHS Hacks logo" className='rounded-lg' />
            </div>

            <div className='py-12'>
                <p>I also developed the website using NextJS and the internal software for the project. You can check out the wesite <span className='underline hover:text-paleslate'><a href="https://uhshacks.com" target='_blank'>here</a></span>.</p>
            </div>

            <Bottombuttons link='/projects/pokemonorsoftware' /> 



        </div>
    )
}

export default page