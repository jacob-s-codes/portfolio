import Link from 'next/link'
import React from 'react'
import CryptoText from './Cryptotext'

const Navbar = () => {
    return (
        <div className='top-4 max-w-7xl mx-auto sticky z-50 border border-white lg:px-8 px-2 py-4 rounded-xl backdrop-blur-xl'>
            <div className='mx-auto'>
                <ul className='flex items-center justify-between text-white lg:text-lg text-base font-semibold'>
                    <Link href="/">
                        <CryptoText text="J.S."/>
                    </Link>
                    <div className='flex items-center lg:gap-x-24 gap-x-1'>
                        {/* <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                        <Link href="/about">About</Link>
                    </li> */}
                        <Link href="/projects">
                            <CryptoText text="Projects"/>
                        </Link>
                        <Link href="/contact">
                            <CryptoText text="Contact"/>


                        </Link>
                    </div>
                </ul>

            </div>
        </div>
    )
}

export default Navbar