import Card from '@/components/Card'
import Image from 'next/image'
import React from 'react'

const page = () => {
    const FollowersLayout = () => {
        return (
            <>
                <div className='flex justify-between'>
                    <div className='sm:flex gap-2 items-center'>
                        <h1 className='text-medium font-semibold'>15</h1>
                        <p className='text-[15px]'>post</p>
                    </div>
                    <div className='sm:flex gap-2 items-center'>
                        <h1 className='text-medium font-semibold'>125</h1>
                        <p className='text-[15px]'>followers</p>
                    </div>
                    <div className='sm:flex gap-2 items-center'>
                        <h1 className='text-medium font-semibold'>145</h1>
                        <p className='text-[15px]'>following</p>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className='w-full h-[100vh] overflow-y-auto '>
                <div className='w-[full] h-auto flex pt-8'>
                    <div className='w-[50%]'>
                        <Image
                            src={"/hania.jpg"}
                            className='m-auto w-[70px] h-[70px] sm:w-[150px] sm:h-[150px] rounded-full'
                            width={100} height={100} alt='image'
                        />
                    </div>
                    <div className='w-full space-y-2'>
                        <div className='flex space-x-3'>
                            <h1 className='font-medium'>_hani_amir_</h1>
                            <button className='px-2 py-1 bg-neutral-200 rounded-lg font-semibold flex gap-1'>edit <span className='hidden sm:block'> profile</span></button>
                        </div>
                        <div className='w-full sm:w-[90%] md:w-[80%]'>
                            <FollowersLayout />
                        </div>
                        <div className='text-[15px]'>
                            <h1>Hania Amir</h1>
                            <p>हिंदू🔥
                                !! धर्मो रक्षति रक्षितः !!🚩🚩</p>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-200 mt-4 mx-2'></div>
                <div className='m-auto w-[100%] px-2 sm:px-0 sm:w-[80%] justify-center grid grid-cols-3 gap-1 py-3'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default page
