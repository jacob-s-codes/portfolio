import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='top-4 sticky z-50 border border-white px-8 py-4 rounded-xl backdrop-blur-xl'>
        <div>
            <ul className='flex items-center justify-between text-white text-lg font-semibold'>
                <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                    <Link href="/">J.S.</Link>
                </li>
                <div className='flex items-center lg:gap-x-24 gap-x-4'>
                    {/* <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                        <Link href="/about">About</Link>
                    </li> */}
                    <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                        <Link href="/contact">Contact</Link>
                    </li>
                </div>
            </ul>

        </div>
    </div>
  )
}

export default Navbar