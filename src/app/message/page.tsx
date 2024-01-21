import MessageSidebar from '@/components/MessageSidebar'
import Image from 'next/image'
import React from 'react'
import { FiMessageCircle } from 'react-icons/fi'
interface IMsg {
    isSender: boolean;
    text: string;
    time: string;
}
const Message = () => {
    const msgData = [
        {
            isSender: true,
            text: "Hii there",
            time: "1 min ago",
        },
        {
            isSender: true,
            text: "Hii",
            time: "1 min ago",
        },
        {
            isSender: false,
            text: "Hii false",
            time: "1 min ago",
        },
        {
            isSender: true,
            text: "true Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem libero nobis impedit! Amet odio, ducimus nesciunt veritatis eveniet autem! Aliquid est excepturi nihil totam ex accusamus officia sapiente porro!",
            time: "1 min ago",
        },
        {
            isSender: false,
            text: "Hii",
            time: "1 min ago",
        },
        {
            isSender: true,
            text: "Hii",
            time: "1 min ago",
        },
        {
            isSender: false,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nisi dolorem libero nobis impedit! Amet odio, ducimus nesciunt veritatis eveniet autem! Aliquid est excepturi nihil totam ex accusamus officia sapiente porro!",
            time: "1 min ago",
        },
        {
            isSender: true,
            text: "Hii",
            time: "1 min ago",
        },
        {
            isSender: false,
            text: "Hii",
            time: "1 min ago",
        },
        {
            isSender: true,
            text: "Hii",
            time: "1 min ago",
        },
        {
            isSender: false,
            text: "Hii",
            time: "1 min ago",
        },
        {
            isSender: false,
            text: "Hii",
            time: "1 min ago",
        },
        {
            isSender: true,
            text: "Hii",
            time: "1 min ago",
        },
        {
            isSender: false,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem libero nobis impedit! Amet odio, ducimus nesciunt veritatis eveniet autem! Aliquid est excepturi nihil totam ex accusamus officia sapiente porro!",
            time: "1 min ago",
        },
        {
            isSender: false,
            text: "Hii",
            time: "1 min ago",
        },
        {
            isSender: true,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorem libero nobis impedit! Amet odio, ducimus nesciunt veritatis eveniet autem! Aliquid est excepturi nihil totam ex accusamus officia sapiente porro!",
            time: "1 min ago",
        },
        {
            isSender: false,
            text: "Hii",
            time: "1 min ago",
        },
    ]
    const MessageContainer = ({ data }: any) => {
        return (
            <>
                <div className={`w-full flex ${data.isSender ? ' justify-end ' : ' justify-start '}`}>
                    <div className='py-1'>
                        <div className='max-w-[70%] font-normal px-3 py-1 rounded-[10px] bg-gray-200'>
                            <p className='text-[15px]'>{data.text}</p>
                        </div>
                        <p className='text-[11px] opacity-70'>{data.time}</p>
                    </div>
                </div>
                {/* <div className='w-fit min-w-[100x] font-normal px-3 py-1 rounded-[10px] bg-gray-300'>
                    <p className='text-[15px]'>{data.text}</p>
                </div>
                <p className='text-[11px] opacity-70'>{data.time}</p> */}
            </>
        )
    }
    return (
        <div className='flex w-full  h-[100vh] overflow-y-scroll transition-all duration-400 ease-in-out'>
            <div>
                <MessageSidebar />
            </div>
            <div className='w-full h-full'>
                {/* No Message  */}
                {/* <div className='w-full h-full flex'>
                    <div className='m-auto flex flex-col items-center'>
                        <div className='w-[80px] h-[80px] border-2 border-gray-950 rounded-full flex '>
                            <FiMessageCircle className='text-5xl m-auto' />
                        </div>
                        <h1>Your Messages</h1>
                    </div>
                </div> */}
                <div className='w-full h-full relative'>
                    <div className='w-full pt-3'>
                        <div className='gap-3 flex px-5'>
                            <Image src="/hania.jpg" width={40} height={40} alt='image'
                                className='w-[40px] h-[40px] rounded-full cursor-pointer'
                            />
                            <div>
                                <h1 className='text-md font-medium cursor-pointer'>Hania Amir</h1>
                                <p className='text-[12px] opacity-70'>Active 3h ago</p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-200 my-2'></div>
                    <div className='w-full border border-gray-300'>
                        <div className='w-full h-[100vh] overflow-y-scroll px-2 md:px-5 py-1'>
                            {
                                msgData.reverse().map((data, index) => (
                                    <MessageContainer key={index} data={data} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full absolute bottom-0 py-2 px-3 bg-white'>
                        <div className='rounded-full'>
                            <input type='text'
                                data-content="send"
                                id='send_message'
                                className='w-full text-md font-medium py-2 px-3 outline-none border border-gray-300 rounded-full'
                                placeholder='Add a message' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
