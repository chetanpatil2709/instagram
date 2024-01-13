import Image from 'next/image'
import React from 'react'

const PostImage = () => {
    return (
        <>
            <div className='flex justify-center'>
                <Image src="/tony.jpg"
                    width={300}
                    height={0}
                    className=' w-full max-h-[600px]'
                    alt='post-image' />
            </div>
        </>
    )
}

export default PostImage
