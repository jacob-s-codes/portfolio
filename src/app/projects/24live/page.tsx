import Bottombuttons from '@/app/components/Bottombuttons'
import CryptoText from '@/app/components/NoStyleCryptotext'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='mx-auto w-full max-w-6xl lg:text-2xl text-xl'>
            <h1 className='lg:text-7xl text-5xl pt-6'>24 Live</h1>
            <hr className='border-2 border-white' />
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

           <Bottombuttons link='/projects/modetocode' /> 



        </div>
    )
}

export default page