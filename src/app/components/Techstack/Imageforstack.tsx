import React from 'react'

interface BasicButtonProps {
    src: string,
    
}

const BasicButton = ({ src}: BasicButtonProps) => {
    return (
        <div className=" flex lg:mx-10 mx-7 flex-col justify-center items-center ">
           <img src={src} className="w-32 h-auto" alt="" />
        </div>
    )
}

export default BasicButton