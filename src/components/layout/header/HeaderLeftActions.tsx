"use client"

import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

import SidebarSheet from "@/components/layout/sidebar/SidebarSheet"

import StoreSwitcher from "./StoreSwitcher"

export default function HeaderLeftActions() {
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

            <StoreSwitcher />
        </>
    )
}
