'use client';
import React, { useState } from 'react'
import { useDisclosure } from "@nextui-org/react";
import Actions from './post-card-contents/Actions';
import Header from './post-card-contents/Header';
import PostImage from './post-card-contents/PostImage';
import PostModal from './PostModal';

const Post = ({ username, location, image }: IPostData) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [comment, setComment] = useState<string>('')
    const profileImageStyle = {
        width: '30px',
        height: '30px'
    }
    return (
        <>
            <div className='w-full space-y-3 border-b border-gray-300 mt-3 pb-3'>
                <Header username={username} location={location} />
                <PostImage image={image} />
                <div>
                    <Actions />
                    <div>
                        <p className='text-sm opacity-60 cursor-pointer' onClick={onOpen}>View all comments</p>
                        <form>
                            <div className='flex items-center'>
                                <input type="search"
                                    className='text-sm outline-none w-full py-1'
                                    placeholder='Add a comment'
                                    onChange={(e) => setComment(e.target.value)} />
                                {comment && <span className='text-blue-500 text-sm px-1 cursor-pointer'>Post</span>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <PostModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    )
}

export default Post
