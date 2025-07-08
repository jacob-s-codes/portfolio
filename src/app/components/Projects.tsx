import React from 'react'

const Projects = () => {
    return (
        <div>
            <div className=" my-12 rounded-4xl flex md:flex-row flex-col items-stretch justify-between overflow-hidden">
                <img
                    src="/mtccropped.png"
                    alt="mode to code logo"
                    className="md:rounded-l-4xl rounded-l-none md:border-r-16 border-r-0 border-darkbg object-cover md:w-[40%] w-full"
                />

                <div className="w-full bg-lessdarkbg flex flex-col gap-y-6 justify-center">
                    <h4 className="border mx-4 border-white w-fit px-6 py-1 rounded-3xl text-sm uppercase mt-6">Founder, frontend development</h4>
                    <div className="px-4">
                        <h3 className="lg:text-5xl text-4xl font-semibold uppercase">Mode to Code</h3>
                        <hr className="mr-8" />
                    </div>
                    <p className="text-xl px-4">Founder of Mode to Code, a program that teaches students of all ages about coding and technology.</p>
                    <div className='flex flex-row items-start gap-x-2 '>
                        <a href="/projects/modetocode"><button className="w-fit ml-4 hover:cursor-pointer border-white border lg:px-6 px-3 py-2 hover:bg-darkbg duration-200 ease-in hover:rounded-r-xl">Read more</button></a>
                        <a href="https://www.modetocode.com/" target='_blank'><button className="w-fit hover:cursor-pointer border-white border lg:px-6 px-3 py-2 hover:bg-darkbg duration-200 ease-in hover:rounded-r-xl">Website</button></a>
                        <a href="https://github.com/jacob-s-codes/modetocodefinal" target='_blank'><button className="w-fit hover:cursor-pointer border-white border lg:px-6 px-3 py-2 hover:bg-darkbg duration-200 ease-in hover:rounded-r-xl">Github</button></a>
                    </div>
                    <div className="flex flex-row items-stretch justify-between gap-x-8 px-4 border-t-16 border-darkbg h-full">
                        <div className="flex flex-col items-start border-darkbg border-r-16 pt-6 md:pb-0 pb-4 h-full">
                            <h5 className="font-extrabold text-4xl uppercase">850+</h5>
                            <p>Taught over 850 students around the world about coding.</p>
                        </div>
                        <div className="flex flex-col items-start pt-6 h-full">
                            <h5 className="font-black text-4xl uppercase">15</h5>
                            <p>Worked with 15 student volunteers.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" my-12 rounded-4xl flex lg:flex-row-reverse flex-col items-stretch justify-between overflow-hidden">
                <img
                    src="/uhshacks.png"
                    alt="mode to code logo"
                    className="lg:rounded-r-4xl rounded-r-none lg:border-l-16 border-darkbg object-cover w-full"
                />

                <div className="w-full bg-lessdarkbg flex flex-col gap-y-6 justify-center">
                    <h4 className="border mx-4 border-white w-fit px-6 py-1 rounded-3xl text-sm uppercase mt-12">Organizer, frontend development, outreach</h4>
                    <div className="px-4">
                        <h3 className="text-5xl font-semibold uppercase">UHS Hacks</h3>
                        <hr className="mr-8" />
                    </div>
                    <p className="text-xl px-4">Organized my high school&apos;s inaugural hackathon, bringing high school students from around the bay area to come build.</p>
                    <div className='flex flex-row items-start gap-x-2'>
                        <a href="/projects/uhshacks"><button className="w-fit ml-4 hover:cursor-pointer border-white border lg:px-6 px-3 py-2 hover:bg-darkbg duration-200 ease-in hover:rounded-r-xl">Read more</button></a>
                        <a href="https://www.uhshacks.com/" target='_blank'><button className="w-fit hover:cursor-pointer border-white border lg:px-6 px-3 py-2 hover:bg-darkbg duration-200 ease-in hover:rounded-r-xl">Website</button></a>
                        <a href="https://github.com/jacob-s-codes/uhshacks" target='_blank'><button className="w-fit  hover:cursor-pointer border-white border lg:px-6 px-3 py-2 hover:bg-darkbg duration-200 ease-in hover:rounded-r-xl">Github</button></a>
                    </div>
                    <div className="flex flex-row items-stretch justify-between gap-x-8 px-4 border-t-16 border-darkbg h-full">
                        <div className="flex flex-col items-start border-r-16 border-darkbg h-full pt-4 md:pb-0 pb-4">
                            <h5 className="font-extrabold text-4xl uppercase">50</h5>
                            <p>50 students participated for free at UHS Hacks.</p>
                        </div>
                        <div className="flex flex-col items-start pt-4 h-full">
                            <h5 className="font-black text-4xl uppercase">8</h5>
                            <p>Organized with 8 code support and outreach volunteers.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className=" my-12 rounded-4xl flex items-stretch justify-between overflow-hidden">
                <img
                    src="/mtccropped.png"
                    alt="mode to code logo"
                    className="rounded-l-4xl border-r-16 border-darkbg object-cover w-[40%]"
                />

                <div className="w-full bg-lessdarkbg flex flex-col gap-y-6 justify-center">
                    <h4 className="border mx-4 border-white w-fit px-6 py-1 rounded-3xl text-sm uppercase mt-6">Frontend + backend development</h4>
                    <div className="px-4">
                        <h3 className="text-5xl font-semibold uppercase">Pokemon or software?</h3>
                        <hr className="mr-8" />
                    </div>
                    <p className="text-xl px-4">Calls Pokemon API and uses React usetates to create a fun little game!</p>
                    <a href="/modetocode"><button className="w-fit mx-4 hover:cursor-pointer border-white border px-6 py-2 hover:bg-darkbg duration-200 ease-in hover:rounded-r-xl">Read more</button></a>
                    <div className="flex flex-row items-stretch justify-between gap-x-8 px-4 border-t-16 border-darkbg h-full">
                        <div className="flex flex-col items-start border-darkbg border-r-16 pt-6 h-full">
                            <h5 className="font-extrabold text-4xl uppercase">850+</h5>
                            <p>Taught over 850 students around the world about coding.</p>
                        </div>
                        <div className="flex flex-col items-start pt-6 h-full">
                            <h5 className="font-black text-4xl uppercase">15</h5>
                            <p>Worked with 15 student volunteers.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Projects