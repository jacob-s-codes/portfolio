import React from 'react'

const Buttons = () => {
    return (
        <div className='flex flex-row items-start gap-x-2'>
            <a href="/uhshacks"><button className="w-fit ml-4 hover:cursor-pointer border-white border px-6 py-2 hover:bg-darkbg duration-200 ease-in hover:rounded-r-xl">Read more</button></a>
            <a href="https://www.uhshacks.com/" target='_blank'><button className="w-fit hover:cursor-pointer border-white border px-6 py-2 hover:bg-darkbg duration-200 ease-in hover:rounded-r-xl">Website</button></a>
            <a href="https://github.com/jacob-s-codes/uhshacks" target='_blank'><button className="w-fit  hover:cursor-pointer border-white border px-6 py-2 hover:bg-darkbg duration-200 ease-in hover:rounded-r-xl">Github</button></a>
        </div>
    )
}

export default Buttons