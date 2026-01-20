import React from 'react'

const page = () => {
    return (
        <div className='max-w-7xl mx-auto min-h-screen flex flex-col'>
            <h2 className="text-6xl font-semibold uppercase pt-8">Contact:</h2>
            <hr className="border-2 border-white" />
            <div className='flex justify-between items-center'>

                <div className='text-2xl mt-12 flex flex-col gap-y-8'>
                    <div>
                        <h3>You can email me at: <a href="mailto:jacobbshaul@gmail.com" className='hover:text-gray-400'>jacobbshaul@gmail.com</a></h3>
                    </div>
                    <div>
                        <h3>Find my projects on Github: <a href="https://github.com/jacob-s-codes" className='hover:text-gray-400' target='_blank'>@jacob-s-codes</a></h3>
                    </div>
                    <div>
                        <h3>Find me on LinkedIn at: <a href="https://www.linkedin.com/in/jacob-shaul/" className='hover:text-gray-400' target='_blank'>@Jacob S</a></h3>
                    </div>
                </div>
                <div className='mt-12'>
                    <img src="/jacobbgremove.png" alt="My picture" className='border-4 border-white rounded-lg w-md h-auto' />
                </div>
            </div>
        </div>
    )
}

export default page