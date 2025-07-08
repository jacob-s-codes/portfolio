import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='mx-auto w-full max-w-6xl'>
            <h1 className='text-7xl mt-6 w-fit '>Pokemon or Software?</h1>
            <hr className='border-2 border-white' />
            <div className='w-full flex items-center justify-center mt-8'>
                <img src="/psscreen.png" alt="UHS Hacks Pic" className='rounded-lg' />
            </div>

            <div className='py-12 text-2xl'>
                <p>This is a fun little project that I built, inspired by <a href="https://www.youtube.com/shorts/b-CaKFaefAM" className=" hover:text-blue-500 underline" target="_blank">this video</a>. I built the project using NextJS + the Pokemon API. I created a list of ~30 tech companies/techonlogies and then randomly choose between fetching from the API or from the tech list.</p>
            </div>

            <div className='w-full flex justify-center'>
                <img src="/pslong.png" alt="UHS Hacks logo" className='rounded-lg' />
            </div>

            <div className='py-12 text-2xl'>
                <p>You can try playing it on your own <span className='underline hover:text-blue-500'><a href="https://pokemonorosoft.vercel.app/" target='_blank'>here</a></span>!</p>
            </div>

            <div className='mt-12 border border-white px-8 py-4 rounded-xl backdrop-blur-2xl'>
                <div>
                    <ul className='flex items-center justify-between text-white text-lg font-semibold'>

                        {/* <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                        <Link href="/about">About</Link>
                    </li> */}
                        <Link href="/projects">
                            <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                                Back
                            </li>
                        </Link>
                        <Link href="/projects/modetocode">
                            <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                                Read more
                            </li>
                        </Link>
                    </ul>

                </div>
            </div>



        </div>
    )
}

export default page