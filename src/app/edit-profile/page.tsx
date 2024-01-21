'use client';
import { TextInput } from '@/components/shared/Shared';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, Textarea, useDisclosure } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const EditProfile = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <div className='w-full h-[100vh] overflow-y-auto'>
                <div className='w-full px-2 md:px-10 lg:px-20 py-4 space-y-5'>
                    <h1 className='text-xl font-bold'>Edit Profile</h1>
                    <div className='bg-neutral-100 p-3 rounded-3xl mt-3'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-3 items-center'>
                                <Image src={"/tony.jpg"} width={70} height={70} alt='image'
                                    className='w-[70px] h-[70px] rounded-full'
                                />
                                <div className=''>
                                    <h1 className='font-bold'>_tony_</h1>
                                    <p>Tony Stark</p>
                                </div>
                            </div>
                            <button type="button" className='bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-md h-fit'
                                onClick={onOpen}>change photo</button>
                            <Modal
                                isOpen={isOpen}
                                onOpenChange={onOpenChange}
                                size='sm'
                                placement='auto'
                            >
                                <ModalContent>
                                    {(onClose) => (
                                        <>
                                            <ModalBody>
                                                <div className='bg-white text-center'>
                                                    <div className='border-b border-b-gray-200'>
                                                        <h1 className='font-bold py-4'>Change Profile Photo</h1>
                                                    </div>
                                                    <div className='[&>*:nth(even)]:bg-blue-700 text-[14px] font-semibold'>
                                                        <div className='border-b border-b-gray-200'>
                                                            <p className='py-3 text-blue-500 cursor-pointer'>Upload Photo</p>
                                                        </div>
                                                        <div>
                                                            <p className='py-3 text-red-500 cursor-pointer'>Remove Current Photo</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button variant="light" onPress={onClose}
                                                    className='w-full bg-transparent hover:bg-transparent'>
                                                    Cancel
                                                </Button>
                                            </ModalFooter>
                                        </>
                                    )}
                                </ModalContent>
                            </Modal>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-[15px] font-bold'>Username</h1>
                        <TextInput
                            id="text"
                            type="text"
                        />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-[15px] font-bold'>Name</h1>
                        <TextInput
                            id="text"
                            type="text"
                        />
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-[15px] font-bold'>Bio</h1>
                        <Textarea
                            variant='bordered'
                            minRows={3}
                            maxRows={6}
                            classNames={{
                                label: "text-black/50 dark:text-white/90 pb-1",
                                input: [
                                    "bg-transparent",
                                    "text-lg font-medium",
                                    "focus:border-none",
                                    "text-black/90 dark:text-white/90",
                                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                ],
                                innerWrapper: "bg-transparent",
                                inputWrapper: "border border-gray-200 focus:border-blue-200 outline-none",
                            }}
                        />
                    </div>
                    <div className='w-full space-y-2'>
                        <h1 className='text-[15px] font-bold'>Gender</h1>
                        <select
                            className='w-full py-3 px-2 rounded-lg outline-none border border-gray-200'
                        >
                            <option>--</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <p className='text-[10px]'>This won’t be part of your public profile.</p>
                    </div>
                    <div className='flex justify-end'>
                        <button type="button" className='text-white py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600'>Update</button>
                    </div>
                </div >
            </div >
        </>
    )
}

export default EditProfile
