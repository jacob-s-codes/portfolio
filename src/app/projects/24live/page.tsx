import Bottombuttons from '@/app/components/Bottombuttons'
import CryptoText from '@/app/components/NoStyleCryptotext'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className=''>
            <div className="bg-lessdarkbg -mt-[70px] pt-32 pb-6 -mx-6 xl:mx-0">
                <div className="mx-auto w-full max-w-6xl px-6 xl:px-0 lg:text-2xl text-xl">
                    <p>PROJECT / 2026</p>
                    <h1 className="lg:text-7xl md:text-6xl text-5xl lg:pt-0 pt-4 uppercase">2<span className="lg:text-6xl md:text-5xl text-4xl">4</span> L<span className="lg:text-6xl md:text-5xl text-4xl">ive</span></h1>
                </div>
            </div>
            <div className="mx-auto w-full max-w-6xl lg:text-2xl text-xl'">
                <div className='w-full flex items-center justify-center mt-8'>
                    <img src="/24home.png" alt="24 Live logo" className='rounded-lg' />
                </div>

                <div className='py-12 '>
                    <p>This was a project that I built to allow people to learn how to make 24 using four numbers and basic operations. It was a fun way to teach math and logic skills. I built it using NextJS for the frontend and NodeJS with Firebase and SocketIO for the backend. This allowed real-time features.</p>
                </div>

                {/* <div className='flex lg:flex-row flex-col justify-between items-center gap-x-4 gap-y-4 overflow-hidden'>
                <img src="/mtc/khalilteachinglong.jpg" alt="khalil teaching" className='w-xl h-auto rounded-lg' />
                <img src="/mtc/teachingimg28.jpg" alt="khalil teaching" className='w-xl h-auto rounded-lg' />
            </div> */}

                {/* <div className='py-12'>
                <p>I also had the privlege of working alongside more than 15 volunteers, who helped teach, organize social media, and help with outreach.</p>
            </div> */}

                {/* <div>
                <img src="/mtc/meettheteambg.jpg" alt="meet the team" className=' rounded-lg' />
            </div> */}

                <div className=''>
                    <p>The game was a lot of fun to build, and I certainly learned a lot!</p>
                </div>


                <div className='py-12'>
                    <p>You can try out the game <a href="https://24live.vercel.app" target="_blank" className='underline '><CryptoText text="here" /></a>.</p>
                </div>

                <Bottombuttons currentProject='24live' />
            </div>




        </div>
    )
}

export default page