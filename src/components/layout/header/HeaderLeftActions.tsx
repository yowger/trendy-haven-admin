"use client"

import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

import SidebarSheet from "@/components/layout/sidebar/SidebarSheet"

import StoreSwitcher from "./StoreSwitcher"

interface HeaderLeftActionsProps {
    stores: []
}

export default function HeaderLeftActions({ stores }: HeaderLeftActionsProps) {
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
        <>
            {isMobile && (
                <div className="block md:hidden">
                    <SidebarSheet />
                </div>
            )}

            {hasStore && <StoreSwitcher />}
        </>
    )
}
