import React from 'react'
import Header from './post-card-contents/Header'
import CommentSection from './post-card-contents/CommentSection'
import Actions from './post-card-contents/Actions'
import PostImage from './post-card-contents/PostImage'
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";

const PostModal = ({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: any }) => {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size='4xl'
                scrollBehavior='outside'
            >
                <ModalContent className='bg-transparent border-none shadow-none sm:my-0'>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <div className="flex flex-col sm:flex-row w-full">
                                    <div className='w-full'>
                                        <PostImage />
                                    </div>
                                    <div className='w-full bg-white p-2 flex flex-col'>
                                        <div className='h-[50px]'>
                                            <Header username={''} location={''} />
                                        </div>
                                        <div className='border-t border-b border-gray-200 overflow-y-scroll 
                                        h-[367px] max-h-[367px] mt-1'>
                                            <CommentSection />
                                        </div>
                                        <div className='h-[120px] pt-2 bg-white'>
                                            <Actions />
                                            <div className='border-t border-gray-200 mt-3 flex'>
                                                <input type="text"
                                                    className='outline-none p-2 w-full'
                                                    placeholder='Add a comment' />
                                                <span className='text-blue-500 text-sm pr-2 mt-3 cursor-pointer'>Post</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default PostModal
