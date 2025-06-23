import React from 'react'
import Projects from '../components/Projects'

const page = () => {
    return (
        <div>
            <h1 className="text-6xl font-semibold uppercase pt-6">projects:</h1>
            <hr className="border-2 border-white" />
            <Projects />
            <div className=" my-12 rounded-4xl flex items-stretch justify-between overflow-hidden">
                <img
                    src="/PSlogo.png"
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
                    <div>
                        <a href="/pokemonorsoftware"><button className="w-fit mx-4 hover:cursor-pointer border-white border px-6 py-2 hover:bg-darkbg duration-200 ease-in hover:rounded-r-xl">Read more</button></a>
                        <a href="https://pokemonorosoft.vercel.app/" target='_blank'><button className="w-fit mx-4 hover:cursor-pointer border-white border px-6 py-2 hover:bg-darkbg duration-200 ease-in hover:rounded-r-xl">Website</button></a>
                    </div>
                    <div className="flex flex-row items-stretch justify-between gap-x-8 px-4 border-t-16 border-darkbg h-full">
                        <div className="flex flex-col items-start border-darkbg border-r-16 pt-6 h-full">
                            <h5 className="font-extrabold text-4xl uppercase">Tech</h5>
                            <p>Built using NextJS calling the Pokemon API</p>
                        </div>
                        <div className="flex flex-col items-start pt-6 h-full">
                            <h5 className="font-black text-4xl uppercase">Inspiration</h5>
                            <p>Inspired by Mewtru <a href="">this</a> Mewtru video.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default page