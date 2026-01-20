import Bottombuttons from '@/app/components/Bottombuttons'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='mx-auto w-full max-w-6xl lg:text-2xl text-xl'>
            <h1 className='lg:text-7xl text-5xl pt-6'>Mode to Code</h1>
            <hr className='border-2 border-white' />
            <div className='w-full flex items-center justify-center mt-8'>
                <img src="/mtc/teachingimg17.jpg" alt="Mode to Code logo" className='rounded-lg' />
            </div>

            <div className='py-12 '>
                <p>This was a project that I started during my Sophmore year. I had my first experience with web development, building out the Mode to Code website which took many iterations (and many failed attempts). Mode to Code taught students of all ages about coding and technology. We partnered with over 25 different institutions, teaching middle schoolers about web development and senior citizens about AI and cybersecurity.</p>
            </div>

            <div className='flex lg:flex-row flex-col justify-between items-center gap-x-4 gap-y-4 overflow-hidden'>
                <img src="/mtc/khalilteachinglong.jpg" alt="khalil teaching" className='w-xl h-auto rounded-lg' />
                <img src="/mtc/teachingimg28.jpg" alt="khalil teaching" className='w-xl h-auto rounded-lg' />
            </div>

            <div className='py-12'>
                <p>I also had the privlege of working alongside more than 15 volunteers, who helped teach, organize social media, and help with outreach.</p>
            </div>

            <div>
                <img src="/mtc/meettheteambg.jpg" alt="meet the team" className=' rounded-lg' />
            </div>

            <div className='pt-12 pb-6'>
                <p>Together, we have taught more than 900 students across 5 continents. We also partnered with Breakthrough Summerbridge, a non-profit that helps under-privleged students gain access to education. You can check out some news pieces written about the program: </p>
            </div>

            <div>
                <ul className='list-disc list-inside space-y-2'>
                    <li><a href="https://www.cnn.com/2025/09/27/tech/sillicon-valley-seniors-ai-course" target='_blank' className='underline hover:text-paleslate'>CNN</a></li>
                    <li><a href="https://www.nbcbayarea.com/video/news/local/sf-teen-is-helping-other-students-learn-computer-coding/3953420/" target='_blank' className='underline hover:text-paleslate'>NBC Bay Area</a></li>
                    <li><a href="https://www.sfchronicle.com/college-admissions/article/college-application-university-california-20889356.php" target='_blank' className='underline hover:text-paleslate'>San Francisco Chronicle</a></li>
                    <li><a href="https://www.kron4.com/video/workshop-helps-seniors-spot-online-scams/11341091/" target='_blank' className='underline hover:text-paleslate'>KRON4 News</a></li>
                </ul>
            </div>
            <div className='py-12'>
                <p>You can learn more <a href="https://modetocode.com" target="_blank" className='underline hover:text-paleslate'>here</a>.</p>
            </div>

           <Bottombuttons link='/projects/uhshacks' /> 



        </div>
    )
}

export default page