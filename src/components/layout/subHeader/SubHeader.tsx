"use client"

import { usePathname } from "next/navigation"

import Breadcrumbs from "./BreadCrumbs"
import { navigationLinks } from "@/data/navigationLinks"
import generateBreadcrumbs from "@/lib/generateBreadcrumbs"

export default function SubHeader() {
    const pathname = usePathname()
    const breadcrumbItems = generateBreadcrumbs(pathname, navigationLinks)

    return (
        <div className="h-10 px-5 flex items-center">
            <Breadcrumbs items={breadcrumbItems} />
        </div>
    )
}
