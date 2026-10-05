"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import CryptoText from './NoStyleCryptotext';

interface BottombuttonsProps {
    currentProject: '24live' | 'modetocode' | 'pokemonorsoftware' | 'uhshacks';
}

const projects = [
    { id: 'modetocode', title: 'Mode to Code', image: '/mtc/teachingimg17.jpg', href: '/projects/modetocode' },
    { id: 'uhshacks', title: 'UHS Hacks', image: '/uhshacks/fullimage.jpg', href: '/projects/uhshacks' },
    { id: 'pokemonorsoftware', title: 'Pokémon or Software?', image: '/PSlogo.png', href: '/projects/pokemonorsoftware' },
    { id: '24live', title: '24 Live', image: '/24home.png', href: '/projects/24live' },
] as const

const Bottombuttons: React.FC<BottombuttonsProps> = ({ currentProject }) => {
    const otherProjects = projects.filter((project) => project.id !== currentProject)
    const [hoveredProject, setHoveredProject] = useState<string | null>(null)

    return (
        <section className='relative left-1/2 mt-16 w-screen -translate-x-1/2 mb-[-48px] bg-lessdarkbg py-12' aria-labelledby='more-projects-heading'>
            <div className='mx-auto max-w-6xl p-6'>
                <h3 className="lg:text-4xl md:text-3xl text-2xl lg:pt-0 pt-4 uppercase">M<span className="lg:text-3xl md:text-2xl text-xl">ore</span> P<span className="lg:text-3xl md:text-2xl text-xl">rojects</span></h3>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    {otherProjects.map((project) => (
                        <Link
                            key={project.id}
                            href={project.href}
                            className='group min-w-0'
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className='aspect-video w-full rounded-md object-cover transition-opacity duration-200 '
                            />
                            <span className='mt-2 block '>
                                <CryptoText text={project.title} isActive={hoveredProject === project.id} />
                            </span>
                        </Link>
                    ))}
                </div>
                <Link href='/projects' className='mt-6 inline-block underline '>
                    <CryptoText text="All projects" />
                </Link>
            </div>
        </section>
    )
}

export default Bottombuttons