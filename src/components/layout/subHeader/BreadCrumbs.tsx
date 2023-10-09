"use client"

import clsx from "clsx"
import Link from "next/link"

interface BreadcrumbItem {
    href: string
    label: string
}

interface BreadcrumbProps {
    items?: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbProps) {
    return (
        <div className="flex items-center mb-3">
            <nav aria-label="breadcrumb">
                <ol className="flex">
                    {items?.map((item, index) => (
                        <li
                            key={index}
                            className={clsx(
                                "text-sm",
                                index === items.length - 1
                                    ? "text-primary pointer-events-none"
                                    : "text-muted-foreground"
                            )}
                        >
                            {index === items.length - 1 ? (
                                item.label
                            ) : (
                                <>
                                    <Link href={item.href}>
                                        <span className="hover:underline">
                                            {item.label}
                                        </span>
                                    </Link>
                                    <span className="mx-2">/</span>
                                </>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    )
}
