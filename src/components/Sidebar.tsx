'use client'
import React, { InsHTMLAttributes, useContext } from 'react'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore, MdOutlineAddBox } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegUser, FaRegHeart, FaHamburger, FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchContainer from './SearchContainer';
import Link from 'next/link';
import { GlobalContext } from '@/context/context';
import Notifications from './Notifications';
import { UrlObject } from 'url';

const list: {
    map(arg0: (item: { url: string | UrlObject; icon: (string | number | boolean | React.ReactPortal | React.PromiseLikeOfReactNode | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined)[]; title: string | number | boolean | React.ReactPortal | React.PromiseLikeOfReactNode | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }, index: React.Key | null | undefined) => React.JSX.Element): React.ReactNode;
    icon: []
    title: string;
    url: string;
} = [
        {
            icon: [<GoHomeFill />, <GoHome />],
            title: 'Home',
            url: "/",
        },
        {
            icon: [<IoIosSearch />],
            title: 'Search',
            url: "/search",
        },
        {
            icon: [<MdOutlineExplore />],
            title: 'Explore',
            url: "/explore",
        },
        {
            icon: [<FiMessageCircle />],
            title: 'Message',
            url: "/message",
        },
        {
            icon: [<FaRegHeart />],
            title: 'Notifications',
            url: "",
        },
        {
            icon: [<MdOutlineAddBox />],
            title: 'Create',
            url: "/create",
        },
        {
            icon: [<FaRegUser />],
            title: 'Profile',
            url: "/profile",
        },
    ]

const SidebarFull = ({ handleNotificationPannel }: any) => {
    const { handleSidebar } = useContext(GlobalContext)
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
                        {
                            list?.map((item: { url: string | UrlObject; icon: (string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined)[]; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => (
                                <li onClick={handleSidebar} key={index}>
                                    <Link href={item?.url ? item?.url : ""} className='sidebar_items'>
                                        <span className='text-2xl'>{item?.icon[window.location.pathname === item?.url ? 1 : 0]}</span>
                                        {item?.title}
                                    </Link>
                                </li>
                            ))
                        }
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
                        {
                            list?.map((item, index) => (
                                <li className='sidebar_items' onClick={handleSidebar} key={index}>
                                    <Link href={item?.url ? item?.url : ""}><span className='text-2xl'>{item?.icon}</span></Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='absolute bottom-0 pb-7'>
                        <p className='text-md flex gap-3 px-3'><span className='text-2xl'><RxHamburgerMenu /></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

function Sidebar() {
    const { sidebarCollapsed, handleSidebar } = useContext(GlobalContext)

    const handleNotificationPannel = () => {
        alert("hii")
        return (
            <>
                <Notifications />
            </>
        )
    }
    return (
        <>
            {/* <SidebarFull /> */}

            {
                sidebarCollapsed
                    ? <SidebarFull handleNotificationPannel={handleNotificationPannel} />
                    : <SidebarCollapsedLayout handleNotificationPannel={handleNotificationPannel} />
            }
            <div className='hidden sm:block md:hidden'>
                <SidebarCollapsedLayout handleNotificationPannel={handleNotificationPannel} />
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
