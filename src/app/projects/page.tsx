import React from 'react'
import ProjectsClient from './ProjectsClient'

export const metadata = { 
    title: "Jacob Shaul | Projects",
    description: "Check out some of the projects I've built/am currently working on.",
  }

const page = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <ProjectsClient/>
        </div>
    )
}

export default page