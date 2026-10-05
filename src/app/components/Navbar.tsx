'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CryptoText from './Cryptotext'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const updateScrollState = () => {
            setIsScrolled(window.scrollY > 24)
        }

        updateScrollState()
        window.addEventListener('scroll', updateScrollState, { passive: true })
        return () => window.removeEventListener('scroll', updateScrollState)
    }, [])

    return (
        <div className={`top-4 ${isScrolled ? 'max-w-7xl' : 'max-w-[85rem]'} mx-auto sticky z-50 border border-white lg:px-8 px-2 py-4 rounded-xl backdrop-blur-xl transition-[max-width] duration-300 ease-out`}>
            <div className='mx-auto'>
                <ul className='flex items-center justify-between text-white lg:text-lg text-base font-semibold'>
                    <Link href="/" aria-label={isScrolled ? 'J.S.' : 'Jacob Shaul'}>
                        <span className='lg:hidden'>
                            <CryptoText text="J.S." />
                        </span>
                        <span className='hidden lg:inline-grid'>
                            <span aria-hidden="true" className={`col-start-1 row-start-1 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${isScrolled ? 'pointer-events-none -translate-y-1 opacity-0' : 'translate-y-0 opacity-100'}`}>
                                <CryptoText text="Jacob Shaul" />
                            </span>
                            <span aria-hidden="true" className={`col-start-1 row-start-1 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${isScrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-1 opacity-0'}`}>
                                <CryptoText text="J.S." />
                            </span>
                        </span>
                    </Link>
                    <div className='flex items-center lg:gap-x-24 gap-x-1'>
                        {/* <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                        <Link href="/about">About</Link>
                    </li> */}
                        <Link href="/projects">
                            <CryptoText text="Projects"/>
                        </Link>
                        {/* <Link href="/contact">
                            <CryptoText text="Contact"/>


                        </Link> */}
                    </div>
                </ul>

            </div>
        </div>
    )
}

export default Navbar