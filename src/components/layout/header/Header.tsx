"use client"

import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

import SidebarSheet from "@/components/layout/sidebar/SidebarSheet"

import StoreSwitcher from "./StoreSwitcher"
import AccountMenu from "./AccountMenu"

interface HeaderProps {
    stores: []
}

export default function Header({ stores }: HeaderProps): JSX.Element | null {
    const hasStore: boolean = stores.length > 0
    
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <div className="h-14 px-4 md:px-5 flex items-center border-b justify-between">
            <div className="flex items-center gap-x-4">
                {isMobile && (
                    <div className="block md:hidden">
                        <SidebarSheet />
                    </div>
                )}

                {hasStore && <StoreSwitcher />}
            </div>

            <div className="flex items-center">
                <AccountMenu />
            </div>
        </div>
    )
}
