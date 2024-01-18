'use client'
import React, { useContext } from 'react'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { IoIosSearch } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore, MdOutlineAddBox, MdExplore, MdOutlineAddCircle } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegUser, FaHeart, FaRegHeart, FaHamburger, FaInstagram, FaUserAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchContainer from './SearchContainer';
import Link from 'next/link';
import { GlobalContext } from '@/context/context';
import Notifications from './Notifications';
import { UrlObject } from 'url';
import { TbMessageCircle2Filled } from "react-icons/tb";

const SidebarFull = () => {
    const { handleSidebar, handleNotificationPannel } = useContext(GlobalContext)
    let path;
    if (typeof window !== 'undefined') {
        path = window.location.pathname
    }
    return (
        <>
            <div className='hidden md:block w-[250px] min-w-[250px] h-[100vh] border-r border-neutral-200 px-3 transition-all duration-400 ease-in-out'>
                <div className='w-full h-full '>
                    <h1 className='text-2xl font-serif pt-5 px-6'>
                        <Link href="/">
                            Instagram
                        </Link>
                    </h1>
                    <ul className='mt-5 space-y-2'>
                        <li>
                            <Link href="/" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/" ? <GoHomeFill /> : <GoHome />}
                                </span>
                                Home
                            </Link>
                        </li>
                        <li className='sidebar_items'>
                            <span className='text-2xl'>
                                {path === "/" ? <IoIosSearch /> : <IoSearch />}
                            </span>
                            Search
                        </li>
                        <li>
                            <Link href="/explore" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/explore" ? <MdOutlineExplore /> : <MdExplore />}
                                </span>
                                Explore
                            </Link>
                        </li>
                        <li onClick={handleSidebar}>
                            <Link href="/message" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/message" ? <FiMessageCircle /> : <TbMessageCircle2Filled />}
                                </span>
                                Message
                            </Link>
                        </li>
                        <li className='sidebar_items' onClick={handleNotificationPannel}>
                            <span className='text-2xl'>
                                {path === "/" ? <FaRegHeart /> : <FaHeart />}
                            </span>
                            Notifications
                        </li>
                        <li className='sidebar_items'>
                            <span className='text-2xl'>
                                {path === "/" ? <MdOutlineAddBox /> : <MdOutlineAddCircle />}
                            </span>
                            Create
                        </li>
                        <li>
                            <Link href="/profile" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/profile" ? <FaRegUser /> : <FaUserAlt />}
                                </span>
                                Profile
                            </Link>
                        </li>
                    </ul>
                    <div className='absolute bottom-0 pb-7'>
                        <p className='text-md flex gap-3 px-3'><span className='text-2xl'><RxHamburgerMenu /></span>More</p>
                    </div>
                </div>
            </div >
        </>
    )
}
const SidebarCollapsedLayout = ({ handleNotificationPannel }: any) => {
    let path;
    if (typeof window !== 'undefined') {
        path = window.location.pathname
    }
    const { handleSidebar } = useContext(GlobalContext)
    return (
        <>
            <div className='sm:block w-[70px] min-w-[70px] h-[100vh] border-r border-neutral-200 px-3 transition-all duration-400 ease-in-out'>
                <div className='w-full h-full '>
                    <h1 className='text-3xl font-serif pt-5 px-3 cursor-pointer'>
                        <Link href="/">
                            <FaInstagram />
                        </Link>
                    </h1>
                    <ul className='mt-5 space-y-2'>
                        <li>
                            <Link href="/" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/" ? <GoHomeFill /> : <GoHome />}
                                </span>
                            </Link>
                        </li>
                        <li className='sidebar_items'>
                            <span className='text-2xl'>
                                {path === "/" ? <IoIosSearch /> : <IoSearch />}
                            </span>
                        </li>
                        <li>
                            <Link href="/explore" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/explore" ? <MdOutlineExplore /> : <MdExplore />}
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/message" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/message" ? <FiMessageCircle /> : <TbMessageCircle2Filled />}
                                </span>
                            </Link>
                        </li>
                        <li className='sidebar_items' onClick={handleSidebar}>
                            <span className='text-2xl'>
                                {path === "/" ? <FaRegHeart /> : <FaHeart />}
                            </span>
                        </li>
                        <li className='sidebar_items'>
                            <span className='text-2xl'>
                                {path === "/" ? <MdOutlineAddBox /> : <MdOutlineAddCircle />}
                            </span>
                        </li>
                        <li>
                            <Link href="/profile" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/profile" ? <FaRegUser /> : <FaUserAlt />}
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className='absolute bottom-0 pb-7'>
                        <p className='text-md flex gap-3 px-3'><span className='text-2xl'><RxHamburgerMenu /></span></p>
                    </div>
                </div>
            </div>
            {/* <Notifications /> */}
        </>
    )
}

function Sidebar() {
    const { sidebarCollapsed, handleSidebar } = useContext(GlobalContext)
    return (
        <>
            {
                sidebarCollapsed
                    ? <SidebarFull />
                    : <SidebarCollapsedLayout />
            }
            <div className='hidden sm:block md:hidden'>
                <SidebarCollapsedLayout />
            </div>

            {/* <div className='hidden md:block w-[250px] min-w-[250px] h-[100vh] border-r border-neutral-200 px-3'>
                <div className='w-full h-full '>
                    <h1 className='text-2xl font-serif pt-5 px-6'>Instagram</h1>
                    <ul className='mt-5 space-y-2'>
                        <li>
                            <Link href="/" className='sidebar_items'>
                                <span className='text-2xl'><GoHomeFill /></span>
                                Home
                            </Link>
                        </li>
                        <li className='sidebar_items'><span className='text-2xl'><IoIosSearch /></span>
                            Search
                        </li>
                        <li className='sidebar_items'><span className='text-2xl'><MdOutlineExplore /></span>Explore</li>
                        <li className=''>
                            <Link href="/message" className='sidebar_items'><span className='text-2xl'><FiMessageCircle /></span>Message</Link>
                        </li>
                        <li className='sidebar_items'><span className='text-2xl'><FaRegHeart /></span>Notifications</li>
                        <li className='sidebar_items'><span className='text-2xl'><MdOutlineAddBox /></span>Create</li>
                        <li className='sidebar_items'><span className='text-2xl'><FaRegUser /></span>Profile</li>
                    </ul>
                    <div className='absolute bottom-0 pb-7'>
                        <p className='text-md flex gap-3 px-3'><span className='text-2xl'><RxHamburgerMenu /></span>More</p>
                    </div>
                </div>
            </div> */}
            {/* <div className='hidden sm:block md:hidden w-[70px] min-w-[70px] h-[100vh] border-r border-neutral-200 px-3'>
                <div className='w-full h-full '>
                    <h1 className='text-3xl font-serif pt-5 px-3 cursor-pointer'><FaInstagram /></h1>
                    <ul className='mt-5 space-y-2'>
                        <li className='flex gap-3 text-md font-semibold items-center cursor-pointer py-3 px-3 hover:bg-neutral-200'><span className='text-2xl'><GoHomeFill /></span></li>
                        <li className='sidebar_items'><span className='text-2xl'><IoIosSearch /></span></li>
                        <li className='sidebar_items'><span className='text-2xl'><MdOutlineExplore /></span></li>
                        <li className='sidebar_items'><span className='text-2xl'><FiMessageCircle /></span></li>
                        <li className='sidebar_items'><span className='text-2xl'><FaRegHeart /></span></li>
                        <li className='sidebar_items'><span className='text-2xl'><MdOutlineAddBox /></span></li>
                        <li className='sidebar_items'><span className='text-2xl'><FaRegUser /></span></li>
                    </ul>
                    <div className='absolute bottom-0 pb-7'>
                        <p className='text-md flex gap-3 px-3'><span className='text-2xl'><RxHamburgerMenu /></span></p>
                    </div>
                </div>
            </div> */}
            <div className='sm:hidden w-full fixed bottom-0 bg-white z-10 h-[50px] p-0 border-t-1 border-gray-300'>
                <ul className='w-full justify-between px-3 space-y-2 flex flex-row items-center text-2xl'>
                    <li className='flex gap-3 text-md font-semibold items-center cursor-pointer hover:bg-neutral-200'>
                        <Link href="/">
                            <GoHomeFill />
                        </Link>
                    </li>
                    <li className='flex gap-3 text-md font-medium items-center cursor-pointer rounded-md hover:bg-neutral-200'>
                        <Link href="explore">
                            <MdOutlineExplore />
                        </Link>
                    </li>
                    <li className='flex gap-3 text-md font-medium items-center cursor-pointer rounded-md hover:bg-neutral-200'><FaRegHeart /></li>
                    <li className='flex gap-3 text-md font-medium items-center cursor-pointer rounded-md hover:bg-neutral-200'><MdOutlineAddBox /></li>
                    <li className='flex gap-3 text-md font-medium items-center cursor-pointer rounded-md hover:bg-neutral-200'>
                        <Link href="profile">
                            <FaRegUser />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
