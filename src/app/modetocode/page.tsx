import React from 'react'

const page = () => {
    return (
        <div className='mx-auto w-full max-w-6xl'>
            <h1 className='text-7xl  pt-6'>Mode to Code</h1>
            <hr className='border-2 border-white' />
            <div className='w-full flex items-center justify-center mt-8'>
                <img src="/mtc/teachingimg17.jpg" alt="Mode to Code logo" className='rounded-lg' />
            </div>

            <div className='py-12 text-2xl'>
                <p>This was a project that I started during my Sophmore year. I had my first experience with web development, building out the Mode to Code website which took many iterations (and many failed attempts). Mode to Code taught students of all ages about coding and technology. We partnered with over 25 different institutions, teaching middle schoolers about web development and senior citizens about AI and cybersecurity.</p>
            </div>

            <div className='flex lg:flex-row flex-col justify-between items-center gap-x-4 gap-y-4 overflow-hidden'>
                <img src="/mtc/khalilteachinglong.jpg" alt="khalil teaching" className='w-xl h-auto rounded-lg' />
                <img src="/mtc/teachingimg28.jpg" alt="khalil teaching" className='w-xl h-auto rounded-lg' />
            </div>

            <div className='py-12 text-2xl'>
                <p>I also had the privlege of working alongside more than 15 volunteers, who helped teach, organize social media, and help with outreach.</p>
            </div>

            <div>
                <img src="/mtc/meettheteambg.jpg" alt="meet the team" className=' rounded-lg' />
            </div>



            <div className='pt-12 text-2xl flex md:flex-row flex-col items-center justify-evenly gap-x-8'>
                <div className='flex flex-col gap-y-6'>
                    <p>Together, we have taught more than 900 students across 5 continents. We also partnered with Breakthrough Summerbridge, a non-profit that helps under-privleged students gain access to education.</p>
                    <p>You can check out a news piece written in the Ingleside Light about the program: </p>
                </div>
                <div className='md:w-[2000px] w-full md:mt-0 mt-4'>
                    <a href="https://www.inglesidelight.com/mode-to-code-jacob-shaul/" target='_blank'>
                        <img src="/mtc/inglesidepiece.png" alt="ingleside piece" className='rounded-lg hover:shadow-xl hover:shadow-white duration-500' />
                    </a>
                </div>
            </div>



        </div>
    )
}

export default page