import React, { useContext } from 'react'
import Notifications from './Notifications'
import { GlobalContext } from '@/context/context'

const SidebarPannel = () => {
    const { sidebarPannel } = useContext(GlobalContext)
    return (
        <div>
            <div className={`w-[350px] h-[100vh] transition-all ease-out duration-500 border bg-white border-gray-200 bg-whit shadow-large p-3 z-10 absolute ml-[${sidebarPannel ? '70px' : '-300px'}]`}>
                <Notifications />
            </div>
        </div>
    )
}

export default SidebarPannel
