import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface NavigationLink {
    href: string
    label: string
}

export function useCurrentPage(navigationLinks: NavigationLink[]): string {
    const pathname = usePathname()
    const [currentPageLabel, setCurrentPageLabel] = useState<string>("")

    useEffect(() => {
        const currentLink = navigationLinks.find(
            (link) => link.href === pathname
        )
        setCurrentPageLabel(currentLink ? currentLink.label : "")
    }, [navigationLinks, pathname])

    return currentPageLabel
}
