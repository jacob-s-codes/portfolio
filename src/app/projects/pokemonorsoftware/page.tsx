import Bottombuttons from '@/app/components/Bottombuttons'
import CryptoText from '@/app/components/NoStyleCryptotext'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className=''>
            <div className="bg-gray-800 -mt-[70px] pt-32 pb-6 -mx-6 xl:mx-0">
                <div className="mx-auto w-full max-w-6xl px-6 xl:px-0 lg:text-2xl text-xl">
                    <p>PROJECT / 2025</p>
                    <h1 className='lg:text-7xl text-5xl mt-6 w-fit '>Pokémon or Software?</h1>
                </div>
            </div>
            <div className="mx-auto w-full lg:text-2xl text-xl max-w-6xl">
                <div className='w-full flex items-center justify-center mt-8'>
                    <img src="/psscreen.png" alt="UHS Hacks Pic" className='rounded-lg' />
                </div>

                <div className='py-12'>
                    <p>This is a fun little project that I built, inspired by <a href="https://www.youtube.com/shorts/b-CaKFaefAM" className="underline" target="_blank"><CryptoText text="this video"></CryptoText></a>. I built the project using NextJS + the Pokemon API. I created a list of ~30 tech companies/techonlogies and then randomly choose between fetching from the API or from the tech list.</p>
                </div>

                <div className='w-full flex justify-center'>
                    <img src="/pslong.png" alt="UHS Hacks logo" className='rounded-lg' />
                </div>

                <div className='py-12'>
                    <p>The goal of the game is to guess if a name is a Pokemon or a piece of software. You can try playing it on your own <span className='underline '><a href="https://pokemonorosoft.vercel.app/" target='_blank'><CryptoText text="here"></CryptoText></a></span>!</p>
                </div>
                <Bottombuttons link='/projects/24live' />

            </div>


        </div>
    )
}

export default page