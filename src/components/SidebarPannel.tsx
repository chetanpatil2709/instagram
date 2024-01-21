import React from 'react'
import Notifications from './Notifications'
import Searchbar from './Searchbar'

const SidebarPannel = () => {
    return (
        <div>
            <div className={`w-[350px] h-[100vh] transition-all ease-out duration-500 border bg-white border-gray-200 bg-whit shadow-large p-3 z-10 absolute `}>
                {/* <Notifications /> */}
                <Searchbar />
            </div>
        </div>
    )
}

export default SidebarPannel
