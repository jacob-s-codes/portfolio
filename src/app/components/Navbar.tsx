import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='top-4 sticky z-50 border border-white lg:px-8 px-2 py-4 rounded-xl backdrop-blur-xl'>
            <div>
                <ul className='flex items-center justify-between text-white lg:text-lg text-base font-semibold'>
                    <Link href="/">
                        <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                            J.S.
                        </li>
                    </Link>
                    <div className='flex items-center lg:gap-x-24 gap-x-4'>
                        {/* <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                        <Link href="/about">About</Link>
                    </li> */}
                        <Link href="/projects">
                            <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                                Projects
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                                Contact
                            </li>
                        </Link>
                    </div>
                </ul>

            </div>
        </div>
    )
}

export default Navbar