'use client';
import React from 'react'
import { useDisclosure } from "@nextui-org/react";
import Actions from './card-contents/Actions';
import Header from './card-contents/Header';
import PostImage from './card-contents/PostImage';
import CardModal from './CardModal';

const Card = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const profileImageStyle = {
        width: '30px',
        height: '30px'
    }
    return (
        <>
            <div className='w-full space-y-3 border-b border-gray-300 mt-3 pb-3'>
                <Header />
                <PostImage />
                <div>
                    <Actions />
                    <div>
                        <p className='text-sm opacity-60 cursor-pointer' onClick={onOpen}>View all comments</p>
                        <form>
                            <input type="text" className='text-sm outline-none' placeholder='Add new comment' />
                        </form>
                    </div>
                </div>
            </div>
            <CardModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    )
}

export default Card
