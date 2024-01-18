'use client'
import { GlobalContext } from '@/context/context'
import React, { useContext } from 'react'

const Notifications = () => {
    const { notificationPannel } = useContext(GlobalContext)
    return (
        <>
            <div className={`w-[250px] h-[100vh] border border-gray-700 bg-gray-600 text-white absolute ml-[${notificationPannel ? '70px' : '-300px'}]`}>
                <h1>Notifications</h1>
            </div>
        </>
    )
}

export default Notifications
