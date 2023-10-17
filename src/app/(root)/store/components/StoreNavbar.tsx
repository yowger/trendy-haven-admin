"use client"

import { useStore } from "@/hooks/state/useGetStore"
import Navbar from "@/components/dashboard/Navbar"

interface SidebarNavItem {
    title: string
    href: string
}

const sidebarNavItems = [
    {
        title: "Overview",
        href: "/store",
    },
    {
        title: "Create store",
        href: "/store/create",
    },
]

export default function StoreNavbar() {
    const stores = useStore((state) => state.stores)

    const hasStore: boolean = stores.length > 0

    const filteredSidebarNavItems: SidebarNavItem[] = sidebarNavItems.filter(
        (item) => {
            return item.href === "/store/create" || hasStore
        }
    )

    return (
        <>
            <Navbar items={filteredSidebarNavItems} />
        </>
    )
}
