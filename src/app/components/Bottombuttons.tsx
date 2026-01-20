import Link from 'next/link'
import React from 'react'
import CryptoText from './Cryptotext';

interface BottombuttonsProps {
   
    link: string;
}

const Bottombuttons: React.FC<BottombuttonsProps> = ({link }) => {
    return (
        <div className='mt-12 border border-white px-8 py-4 rounded-xl backdrop-blur-2xl'>
            <div>
                <ul className='flex items-center justify-between text-white text-lg font-semibold'>
                    <Link href="/projects">
                        <CryptoText text="Back" />

                    </Link>
                    <Link href={link}>
                        <CryptoText text="Read more" />

                    </Link></ul>
            </div>
        </div>
                )
}

                export default Bottombuttons