import React from 'react'
import { IoMdMore } from "react-icons/io";
import { PiShareFat } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { BsSave } from "react-icons/bs";
const Actions = () => {
    return (
        <>
            <div className='flex justify-between text-2xl'>
                <div className='flex gap-3'>
                    <span className='cursor-pointer hover:opacity-60'><FaRegHeart /></span>
                    <span className='cursor-pointer hover:opacity-60'><AiOutlineMessage /></span>
                    <span className='cursor-pointer hover:opacity-60'><PiShareFat /></span>
                </div>
                <span className='cursor-pointer hover:opacity-60'><BsSave /></span>
            </div>
            <p className='text-sm mt-1'>1,920 likes</p>
        </>
    )
}

export default Actions
