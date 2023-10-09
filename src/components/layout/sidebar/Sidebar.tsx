"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { href: "/", label: "Dashboard" },
    { href: "/categories", label: "Categories" },
    { href: "/products", label: "Products" },
    { href: "/sizes", label: "Sizes" },
    { href: "/colors", label: "Colors" },
    { href: "/orders", label: "Orders" },
    { href: "/settings", label: "Settings" },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="border-r w-60 flex flex-col">
            <div className="h-14 flex items-center pl-10">
                <span className="text-xl font-bold">TrendyHaven</span>
            </div>
            <div className="pt-2 flex pl-10 pr-5 flex-1 flex-col gap-0.5">
                <ul>
                    {links.map((link, index) => {
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
