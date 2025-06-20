import React from 'react'

const page = () => {
  return (
    <div>
        <h2 className="text-6xl font-semibold uppercase pt-8">Contact:</h2>
        <hr className="border-2 border-white" />
        <div className='text-2xl mt-12 flex flex-col gap-y-8'>
            <div>
                <h3>You can email me at: <a href="mailto:jacobbshaul@gmail.com" className='hover:text-gray-400'>jacobbshaul@gmail.com</a></h3>
            </div>
            <div>
                <h3>Find my projects on Github: <a href="https://github.com/jacob-s-codes" className='hover:text-gray-400' target='_blank'>@jacob-s-codes</a></h3>
            </div>
            <div>
                <h3>Find me on LinkedIn at: <a href="https://www.linkedin.com/in/jacob-shaul-7729ba29b/" className='hover:text-gray-400' target='_blank'>@Jacob S</a></h3>
            </div>
        </div>
    </div>
  )
}

export default page