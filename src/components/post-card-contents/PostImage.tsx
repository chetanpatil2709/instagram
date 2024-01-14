import Image from 'next/image'
import React from 'react'

const PostImage = ({ image }: any) => {
    return (
        <>
            <div className='flex justify-center items-center h-full bg-black'>
                <Image src={image}
                    width={300}
                    height={0}
                    className=' w-full max-h-[600px]'
                    alt='post-image' />
            </div>
        </>
    )
}

export default PostImage
