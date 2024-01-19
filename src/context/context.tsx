'use client'
import { ReactNode, createContext, useState } from "react";

export const GlobalContext = createContext<any>(null)
interface Props {
    children: ReactNode
}
const GlobalState = ({ children }: Props) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false)
    const [sidebarPannel, setSidebarPannel] = useState<boolean>(false)
    const handleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed)
    }
    const handleSidebarPannel = () => {
        setSidebarPannel(!sidebarPannel)
    }
    return <GlobalContext.Provider
        value={{
            sidebarCollapsed,
            setSidebarCollapsed,
            sidebarPannel,
            setSidebarPannel,

            handleSidebarPannel,
            handleSidebar
        }}
    >
        {children}
    </GlobalContext.Provider>
}

export default GlobalState