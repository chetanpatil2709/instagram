import Card from '@/components/Card'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='w-full flex h-[100vh] overflow-y-scroll py-4 transition-all duration-400 ease-in-out'>
                <div className='w-full'>
                    <div className='m-auto w-[100%] px-2 sm:px-0 sm:w-[80%] justify-center grid grid-cols-3 gap-1'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
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
            </div>
        </>
    )
}

export default page
