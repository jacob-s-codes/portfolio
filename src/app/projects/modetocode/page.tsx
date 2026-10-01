import Bottombuttons from '@/app/components/Bottombuttons'
import NoStyleCryptotext from '@/app/components/NoStyleCryptotext'
import CryptoText from '@/app/components/NoStyleCryptotext'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className=''>
            <div className="bg-gray-800 -mt-[70px] pt-32 pb-6 -mx-6 xl:mx-0">
                <div className="mx-auto w-full max-w-6xl px-6 xl:px-0 lg:text-2xl text-xl">
                    <p>PROJECT / 2026</p>
                    <h1 className='lg:text-7xl text-5xl mt-6 w-fit '>Mode to Code</h1>
                </div>
            </div>
            <div className="mx-auto w-full max-w-6xl lg:text-2xl text-xl">
                <div className='w-full flex items-center justify-center mt-8'>
                    <img src="/mtc/teachingimg17.jpg" alt="Mode to Code logo" className='rounded-lg' />
                </div>

                <div className='py-12 '>
                    <p>This was a project that I started during my Sophomore year. I had my first experience with web development, building out the Mode to Code website which took many iterations (and many failed attempts). Mode to Code taught students of all ages about coding and technology. We partnered with over 30 different institutions, teaching middle schoolers about web development and senior citizens about AI and cybersecurity.</p>
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
                    <p>Together, we have taught more than 1,500 students across 5 continents. We also partnered with Breakthrough Summerbridge, a non-profit that helps under-privleged students gain access to education. You can check out some news pieces written about the program: </p>
                </div>

                <div>
                    <ul className='list-disc list-inside space-y-2'>
                        <li><a href="https://www.cnn.com/2025/09/27/tech/sillicon-valley-seniors-ai-course" target='_blank' className='underline '><CryptoText text="CNN" /></a></li>
                        <li><a href="https://www.nbcbayarea.com/video/news/local/sf-teen-is-helping-other-students-learn-computer-coding/3953420/" target='_blank' className='underline '><CryptoText text="NBC Bay Area" /></a></li>
                        <li><a href="https://dillerteenawards.org/recipient/jacob-shaul/" target='_blank' className='underline '><CryptoText text="Diller Teen Tikkun Olam Award" /></a></li>
                        <li><a href="https://www.sfchronicle.com/college-admissions/article/college-application-university-california-20889356.php" target='_blank' className='underline '><CryptoText text="San Francisco Chronicle" /></a></li>
                        <li><a href="https://www.ktvu.com/news/teen-teaching-ai-free-grows-program-international-movement" target='_blank' className='underline '><CryptoText text="KTVU Fox" /></a></li>
                    </ul>
                </div>
                <div className='py-12'>
                    <p>You can learn more <a href="https://modetocode.com" target="_blank" className='underline '><NoStyleCryptotext text="here"/></a>.</p>
                </div>

                <Bottombuttons link='/projects/uhshacks' />
            </div>

        </div>
    )
}

export default page