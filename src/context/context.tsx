'use client'
import { ReactNode, createContext, useContext, useState } from "react";

export const GlobalContext = createContext<any>(null)
interface Props {
    children: ReactNode
}
const GlobalState = ({ children }: Props) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(true)
    const handleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed)
    }
    return <GlobalContext.Provider
        value={{
            sidebarCollapsed,
            setSidebarCollapsed,
            handleSidebar
        }}
    >
        {children}
    </GlobalContext.Provider>
}

export default GlobalState