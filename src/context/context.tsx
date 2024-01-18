'use client'
import { ReactNode, createContext, useContext, useState } from "react";

export const GlobalContext = createContext<any>(null)
interface Props {
    children: ReactNode
}
const GlobalState = ({ children }: Props) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(true)
    const [notificationPannel, setNotificationPannel] = useState<boolean>(false)
    const handleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed)
    }
    const handleNotificationPannel = () => {
        setNotificationPannel(!notificationPannel)
    }
    return <GlobalContext.Provider
        value={{
            sidebarCollapsed,
            setSidebarCollapsed,
            notificationPannel,
            setNotificationPannel,

            handleNotificationPannel,
            handleSidebar
        }}
    >
        {children}
    </GlobalContext.Provider>
}

export default GlobalState