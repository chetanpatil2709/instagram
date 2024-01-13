import Image from 'next/image'
import React from 'react'

const Aside = () => {
    const SuggestedCard = ({ item }: any) => {
        return (
            <>
                <div className='flex justify-between text-md'>
                    <div className='flex gap-3 items-center'>
                        <Image
                            className='rounded-full w-[40px] h-[40px] cursor-pointer'
                            src={'/tony.jpg'} width={50} height={50} alt='profile image' />
                        <div>
                            <p className='cursor-pointer'>{item.name}</p>
                            <p className='text-[12px] opacity-70'>New to instagram</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-blue-400 text-sm cursor-pointer'>follow</p>
                    </div>
                </div>
            </>
        )
    }
    const items = [
        {
            name: "john_doe",
        },
        {
            name: "_doe",
        },
        {
            name: "john",
        },
        {
            name: "tony_stark",
        },
        {
            name: "captain_amerika",
        },
        {
            name: "avangaers",
        },
    ]
    return (
        <>
            <div className='lg:min-w-[300px] xl:min-w-[350px] hidden lg:block'>
                <div className='w-[90%]'>

                    <div className='flex justify-between text-md'>
                        <div className='flex gap-3'>
                            <Image
                                className='rounded-full w-[50px] h-[50px] cursor-pointer'
                                src={'/tony.jpg'} width={50} height={50} alt='profile image' />
                            <div>
                                <p className='cursor-pointer'>john_doe</p>
                                <p className=' opacity-70'>John Doe</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-blue-400 text-sm cursor-pointer'>switch</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='text-sm flex justify-between'>
                            <h1 className='opacity-70 font-semibold'>Suggested for you</h1>
                            <p className='cursor-pointer'>See All</p>
                        </div>
                        <div className='mt-2 space-y-2'>
                            {
                                items.map((item, index) => (
                                    <SuggestedCard key={index} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aside
