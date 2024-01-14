import Image from 'next/image'
import React from 'react'
const MessageTemplate = () => {
    return (
        <>
            <div className='flex gap-3 cursor-pointer hover:bg-gray-100'>
                <Image src="/scarlet.jpeg" className='rounded-full w-[50px] h-[50px]' width={40} height={40} alt="profile image" />
                <div>
                    <h1 className='text-md font-semibold'>John Doe</h1>
                    <p className='text-sm opacity-70'>message</p>
                </div>
            </div>
        </>
    )
}
const MessageSidebar = () => {
    return (
        <>
            <div className='w-[350px] max-w-[350px] h-[100%] overflow-hidden border border-gray-400 pt-10'>
                <div className=' pl-3 pr-2'>
                    <h1 className='text-lg font-bold'>john_doe</h1>
                    <p className='text-sm font-semibold mt-2'>Message</p>
                </div>
                <div className='w-full h-full mt-1 space-y-2 py-3 overflow-y-auto px-3 pb-[80px]'>
                    <MessageTemplate />
                    <MessageTemplate />
                    <MessageTemplate />
                    <MessageTemplate />
                    <MessageTemplate />
                    <MessageTemplate />
                    <MessageTemplate />
                    <MessageTemplate />
                    <MessageTemplate />
                    <MessageTemplate />
                    <MessageTemplate />
                    <MessageTemplate />
                    <MessageTemplate />
                </div>
            </div>
        </>
    )
}

export default MessageSidebar
