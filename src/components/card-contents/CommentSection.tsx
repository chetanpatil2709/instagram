import Image from 'next/image'
import React from 'react'
import { CiHeart } from 'react-icons/ci'

const CommentSection = () => {
    const Comments = () => {
        return (
            <>
                <div className='w-full flex justify-between space-x-3 space-y-1 items-center pr-2'>
                    <Image src={'/scarlet.jpeg'}
                        className='w-[36px] h-[30px] rounded-full'
                        width={30} height={30} alt='profile image' />
                    <div className='w-full'>
                        <div className='flex gap-1'>
                            <p className='text-[13px]'>
                                <span className='text-sm font-semibold pr-1'>_john_doe</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In nostrum quas ad quasi dolore? </p>
                        </div>
                        <div className='text-[12px] opacity-80 flex gap-2 mt-1'>
                            <span>1D</span>
                            <span>42 likes</span>
                            <span className='cursor-pointer'>Reply</span>
                        </div>
                    </div>
                    <span className='text-xl cursor-pointer'><CiHeart /></span>
                </div>
            </>
        )
    }
    return (
        <>
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
        </>
    )
}

export default CommentSection
