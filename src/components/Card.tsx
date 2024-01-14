'use client'
import Image from 'next/image'
import React, { LegacyRef, useRef } from 'react'

const Card = () => {
    return (
        <>
            <div className='border border-gray-400'>
                <Image src="/scarlet.jpeg"
                    className='w-full h-full'
                    width={100} height={100} alt='image' />
            </div>
        </>
    )
}

export default Card
