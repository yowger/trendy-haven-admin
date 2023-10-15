"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

interface NavigationLink {
    href: string
    label: string
}

interface SidebarProps {
    navigationLinks: NavigationLink[]
}

export default function Sidebar({
    navigationLinks,
}: SidebarProps): JSX.Element {
    const pathname = usePathname()

    return (
        <div className="flex flex-col pr-5">
            <div className="h-14 flex items-center pl-10">
                <span className="text-xl font-bold">TrendyHaven</span>
            </div>
            <div className="pt-0.5 pl-6">
                <ul className="space-y-1 flex flex-col w-full">
                    {navigationLinks.map((link, index) => {
                        const isActivePathName: boolean = pathname === link.href
                        return (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className={clsx(
                                        "font-medium block items-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none hover:text-accent-foreground disabled:opacity-50 justify-start h-9 px-4 py-2",
                                        isActivePathName
                                            ? "bg-muted hover:bg-muted  cursor-default pointer-events-none"
                                            : "hover:text-accent-foreground hover:bg-transparent hover:underline"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
