'use client'
import { ReactNode, createContext, useContext, useState } from "react";

export const GlobalContext = createContext<any>(null)
interface Props {
    children: ReactNode
}
const GlobalState = ({ children }: Props) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(true)
    return <GlobalContext.Provider
        value={{
            sidebarCollapsed,
            setSidebarCollapsed
        }}
    >
        {children}
    </GlobalContext.Provider>
}

export default GlobalState