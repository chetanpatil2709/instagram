'use client'
import Image from 'next/image'
import React, { LegacyRef, useRef, useState } from 'react'

const Card = () => {
    const [divWidth, setDivWidth] = useState<number>()
    // console.log('width: ', `h-[${divWidth}px]`)
    // console.log(typeof divWidth)
    return (
        <>
            <div className='border border-gray-400'
                ref={(e) => { setDivWidth(e?.offsetWidth) }} >
                <Image src="/scarlet.jpeg"
                    className={`w-full h-[${divWidth}px]`}
                    width={100} height={100} alt='image' />
            </div>
        </>
    )
}

export default Card
