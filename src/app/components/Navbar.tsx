import React from 'react'

const Navbar = () => {
  return (
    <div className='top-4 sticky z-50 border border-white px-8 py-4 rounded-xl backdrop-blur-xl'>
        <div>
            <ul className='flex items-center justify-between text-white text-lg font-semibold'>
                <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg transition-colors duration-200'>
                    <a href="/">Home</a>
                </li>
                <div className='flex items-center gap-24'>
                    <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                        <a href="/about">About</a>
                    </li>
                    <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                        <a href="/projects">Projects</a>
                    </li>
                    <li className='hover:bg-white hover:text-black px-3 py-1 rounded-lg duration-200'>
                        <a href="/contact">Contact</a>
                    </li>
                </div>
            </ul>

        </div>
    </div>
  )
}

export default Navbar