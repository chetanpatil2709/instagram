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
import SidebarPannel from './SidebarPannel';

const SidebarFull = ({ path }: any) => {
    const { handleSidebar, sidebarCollapsed, setSidebarCollapsed, setSidebarPannel, sidebarPannel } = useContext(GlobalContext)
    return (
        <>
            <div className='hidden md:block w-[250px] min-w-[250px] h-[100vh] border-r border-neutral-200 px-3 transition-all duration-400 ease-in-out bg-white'>
                <div className='w-full h-full '>
                    <h1 className='text-2xl font-serif pt-5 px-6'>
                        <Link href="/">
                            Instagram
                        </Link>
                    </h1>
                    <ul className='mt-5 space-y-2'>
                        <li
                            onClick={() => { setSidebarCollapsed(false); setSidebarPannel(false) }}
                        >
                            <Link href="/" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/" ? <GoHomeFill /> : <GoHome />}
                                </span>
                                Home
                            </Link>
                        </li>
                        <li className='sidebar_items'
                            onClick={() => { setSidebarCollapsed(!sidebarCollapsed); setSidebarPannel(!sidebarPannel) }}
                        >
                            <span className='text-2xl'>
                                {path === "/" ? <IoIosSearch /> : <IoSearch />}
                            </span>
                            Search
                        </li>
                        <li
                            onClick={() => { setSidebarCollapsed(false); setSidebarPannel(false) }}
                        >
                            <Link href="/explore" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/explore" ? <MdOutlineExplore /> : <MdExplore />}
                                </span>
                                Explore
                            </Link>
                        </li>
                        <li
                            onClick={() => { setSidebarCollapsed(true); setSidebarPannel(false) }}
                        >
                            <Link href="/message" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/message" ? <FiMessageCircle /> : <TbMessageCircle2Filled />}
                                </span>
                                Message
                            </Link>
                        </li>
                        <li className='sidebar_items'
                            onClick={() => { setSidebarCollapsed(!sidebarCollapsed); setSidebarPannel(!sidebarPannel) }}
                        >
                            <span className='text-2xl'>
                                {path === "/" ? <FaRegHeart /> : <FaHeart />}
                            </span>
                            Notifications
                        </li>
                        <li className='sidebar_items'
                            onClick={() => { setSidebarCollapsed(true); setSidebarPannel(false) }}
                        >
                            <span className='text-2xl'>
                                {path === "/" ? <MdOutlineAddBox /> : <MdOutlineAddCircle />}
                            </span>
                            Create
                        </li>
                        <li
                            onClick={() => { setSidebarCollapsed(false); setSidebarPannel(false) }}
                        >
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
const SidebarCollapsedLayout = ({ path }: any) => {
    const { handleSidebar, sidebarCollapsed, setSidebarCollapsed, handleSidebarPannel, setSidebarPannel, sidebarPannel } = useContext(GlobalContext)

    return (
        <>
            <div className='sm:block w-[70px] min-w-[70px] h-[100vh] bg-white border-r border-neutral-200 px-3 transition-all duration-400 ease-in-out'>
                <div className='w-full h-full '>
                    <h1 className='text-3xl font-serif pt-5 px-3 cursor-pointer'>
                        <Link href="/">
                            <FaInstagram />
                        </Link>
                    </h1>
                    <ul className='mt-5 space-y-2'
                        onClick={() => { setSidebarCollapsed(false); setSidebarPannel(false) }}
                    >
                        <li>
                            <Link href="/" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/" ? <GoHomeFill /> : <GoHome />}
                                </span>
                            </Link>
                        </li>
                        <li className='sidebar_items'
                            onClick={() => { setSidebarCollapsed(!sidebarCollapsed); setSidebarPannel(!sidebarPannel) }}
                        >
                            <span className='text-2xl'>
                                {path === "/" ? <IoIosSearch /> : <IoSearch />}
                            </span>
                        </li>
                        <li
                            onClick={() => { setSidebarCollapsed(true); setSidebarPannel(false) }}
                        >
                            <Link href="/explore" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/explore" ? <MdOutlineExplore /> : <MdExplore />}
                                </span>
                            </Link>
                        </li>
                        <li
                            onClick={() => { setSidebarCollapsed(true); setSidebarPannel(false) }}
                        >
                            <Link href="/message" className='sidebar_items'>
                                <span className='text-2xl'>
                                    {path === "/message" ? <FiMessageCircle /> : <TbMessageCircle2Filled />}
                                </span>
                            </Link>
                        </li>
                        <li className='sidebar_items'
                            onClick={() => { setSidebarCollapsed(!sidebarCollapsed); setSidebarPannel(!sidebarPannel) }}
                        >
                            <span className='text-2xl'>
                                {path === "/" ? <FaRegHeart /> : <FaHeart />}
                            </span>
                        </li>
                        <li className='sidebar_items'
                            onClick={() => { setSidebarCollapsed(true); setSidebarPannel(false) }}
                        >
                            <span className='text-2xl'>
                                {path === "/" ? <MdOutlineAddBox /> : <MdOutlineAddCircle />}
                            </span>
                        </li>
                        <li
                            onClick={() => { setSidebarCollapsed(true); setSidebarPannel(false) }}
                        >
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
            {/* <SidebarPannel />
            <Notifications /> */}
            {sidebarPannel && <SidebarPannel />}
        </>
    )
}

function Sidebar() {
    const { sidebarCollapsed, handleSidebar } = useContext(GlobalContext)
    let path;
    if (typeof window !== 'undefined') {
        path = window.location.pathname
    }
    return (
        <>
            {
                sidebarCollapsed
                    ? <SidebarCollapsedLayout path={path} />
                    : <SidebarFull path={path} />
            }
            <div className='hidden sm:block md:hidden bg-white'>
                <SidebarCollapsedLayout path={path} />
            </div>

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
