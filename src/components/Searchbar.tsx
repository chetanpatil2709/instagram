import Image from 'next/image'
import React from 'react'

const Searchbar = () => {
    return (
        <>
            <h1 className='text-2xl font-extrabold'>Search</h1>
            <div>
                <input type="search"
                    className='w-full px-3 py-2 outline-none border border-gray-300 rounded-md font-medium my-3'
                    name="" id=""
                    placeholder='search..' />
            </div>
            <div className='w-full h-full mt-3 space-y-3'>
                <div className='w-full flex gap-3'>
                    <Image src={"/tony.jpg"}
                        className='w-[40px] h-[40px] max-w-[40px] max-h-[40px] rounded-full cursor-pointer'
                        width={40} height={40} alt='image' />
                    <div>
                        <p className='text-sm'>
                            <span className='font-bold cursor-pointer'>_tony_</span>
                            <span>&nbsp;</span>
                            liked your photo
                        </p>
                        <p className='text-sm opacity-70'>2D</p>
                    </div>
                </div>
                <div className='w-full flex gap-3'>
                    <Image src={"/tony.jpg"}
                        className='w-[40px] h-[40px] max-w-[40px] max-h-[40px] rounded-full'
                        width={40} height={40} alt='image' />
                    <div>
                        <p className='text-sm'>
                            <span className='font-bold'>_tony_</span>
                            <span>&nbsp;</span>
                            liked your photo
                        </p>
                        <p className='text-sm opacity-70'>2D</p>
                    </div>
                </div>
                <div className='w-full flex gap-3'>
                    <Image src={"/tony.jpg"}
                        className='w-[40px] h-[40px] max-w-[40px] max-h-[40px] rounded-full'
                        width={40} height={40} alt='image' />
                    <div>
                        <p className='text-sm'>
                            <span className='font-bold'>_tony_</span>
                            <span>&nbsp;</span>
                            liked your photo
                        </p>
                        <p className='text-sm opacity-70'>2D</p>
                    </div>
                </div>
                <div className='w-full flex gap-3'>
                    <Image src={"/tony.jpg"}
                        className='w-[40px] h-[40px] max-w-[40px] max-h-[40px] rounded-full'
                        width={40} height={40} alt='image' />
                    <div>
                        <p className='text-sm'>
                            <span className='font-bold'>_tony_</span>
                            <span>&nbsp;</span>
                            liked your photo
                        </p>
                        <p className='text-sm opacity-70'>2D</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchbar
