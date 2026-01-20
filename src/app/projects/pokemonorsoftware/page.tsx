import Bottombuttons from '@/app/components/Bottombuttons'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='mx-auto w-full lg:text-2xl text-xl max-w-6xl'>
            <h1 className='lg:text-7xl text-5xl mt-6 w-fit '>Pokemon or Software?</h1>
            <hr className='border-2 border-white' />
            <div className='w-full flex items-center justify-center mt-8'>
                <img src="/psscreen.png" alt="UHS Hacks Pic" className='rounded-lg' />
            </div>

            <div className='py-12'>
                <p>This is a fun little project that I built, inspired by <a href="https://www.youtube.com/shorts/b-CaKFaefAM" className=" hover:text-paleslate underline" target="_blank">this video</a>. I built the project using NextJS + the Pokemon API. I created a list of ~30 tech companies/techonlogies and then randomly choose between fetching from the API or from the tech list.</p>
            </div>

            <div className='w-full flex justify-center'>
                <img src="/pslong.png" alt="UHS Hacks logo" className='rounded-lg' />
            </div>

            <div className='py-12'>
                <p>The goal of the game is to guess if a name is a Pokemon or a piece of software. You can try playing it on your own <span className='underline hover:text-paleslate'><a href="https://pokemonorosoft.vercel.app/" target='_blank'>here</a></span>!</p>
            </div>
            <Bottombuttons link='/projects/modetocode' />



        </div>
    )
}

export default page