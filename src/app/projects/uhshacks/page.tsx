import Bottombuttons from '@/app/components/Bottombuttons'
import NoStyleCryptotext from '@/app/components/NoStyleCryptotext'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className=''>
            <div className="bg-gray-800 -mt-[70px] pt-32 pb-6 -mx-6 xl:mx-0">
                <div className="mx-auto w-full max-w-6xl px-6 xl:px-0 lg:text-2xl text-xl">
                    <p>PROJECT / 2026</p>
                    <h1 className='lg:text-7xl text-5xl mt-6 w-fit '>UHS Hacks</h1>
                </div>
            </div>
            <div className="relative mx-auto w-full max-w-6xl lg:text-2xl text-xl z-10 overflow-hidden">
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
                    <p>I also developed the website using NextJS and the internal software for the project. You can check out the wesite <span className='underline '><a href="https://uhshacks.com" target='_blank'><NoStyleCryptotext text="here" /></a></span>.</p>
                </div>

                <Bottombuttons link='/projects/pokemonorsoftware' />
            </div>




        </div>
    )
}

export default page