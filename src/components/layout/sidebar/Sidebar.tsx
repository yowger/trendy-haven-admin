"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavigationLink {
    href: string
    label: string
}

interface SidebarProps {
    navigationLinks: NavigationLink[]
}

export default function Sidebar({ navigationLinks }: SidebarProps) {
    const pathname = usePathname()

    return (
        <div className="border-r w-60 flex flex-col">
            <div className="h-14 flex items-center pl-10">
                <span className="text-xl font-bold">TrendyHaven</span>
            </div>
            <div className="pt-0.5 flex pl-10 pr-5 flex-1 flex-col gap-0.5">
                <ul>
                    {navigationLinks.map((link, index) => {
                        const isActivePathName = pathname === link.href
                        return (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className={clsx(
                                        "font-medium py-1.5 block",
                                        isActivePathName
                                            ? "text-primary cursor-default pointer-events-none"
                                            : "text-muted-foreground hover:underline"
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
