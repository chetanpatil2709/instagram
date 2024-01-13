import Image from 'next/image'
import React from 'react'
import { IoMdMore } from 'react-icons/io'

const Header = () => {
    const profileImageStyle = {
        width: '30px',
        height: '30px'
    }
    return (
        <>
            <div className='w-full flex items-center justify-between'>
                <div className="flex items-center">
                    <Image src="/tony.jpg" width={30} height={30} style={profileImageStyle} className='rounded-full cursor-pointer' alt='profile-image' />
                    <div className='px-3'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-md font-semibold cursor-pointer'>john_doe </h1>
                            <p className='text-sm opacity-50'><span className='items-center'>.</span> 10h</p>
                        </div>
                        <p className='text-sm'>Delhi</p>
                    </div>
                </div>
                <span className='text-xl pr-3 cursor-pointer'><IoMdMore /></span>
            </div>
        </>
    )
}

export default Header
