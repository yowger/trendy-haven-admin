"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Item {
    href: string
    title: string
}

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: Item[]
}

export default function Navbar({ items }: SidebarNavProps): JSX.Element {
    const pathname = usePathname()

    return (
        <div className="-mx-3 lg:w-1/5">
            <nav className="flex space-x-2">
                {items.map((item: Item) => {
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
                                pathname === item.href
                                    ? "pointer-events-none"
                                    : "text-muted-foreground hover:underline hover:text-primary"
                            )}
                        >
                            {item.title}
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}
