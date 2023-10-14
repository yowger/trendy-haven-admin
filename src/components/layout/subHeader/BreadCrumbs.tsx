"use client"

import clsx from "clsx"
import Link from "next/link"

import type { BreadcrumbItem } from "@/types/breadCrumbTypes"

interface BreadcrumbProps {
    breadcrumbItems?: BreadcrumbItem[]
}

export default function Breadcrumbs({
    breadcrumbItems,
}: BreadcrumbProps): JSX.Element {
    return (
        <div className="flex items-center mb-3">
            <nav aria-label="breadcrumb">
                <ol className="flex">
                    {breadcrumbItems?.map((breadcrumbItem, index) => (
                        <li
                            key={index}
                            className={clsx(
                                "text-sm",
                                index === breadcrumbItems.length - 1
                                    ? "text-primary pointer-events-none"
                                    : "text-muted-foreground"
                            )}
                        >
                            {index === breadcrumbItems.length - 1 ? (
                                breadcrumbItem.label
                            ) : (
                                <>
                                    <Link href={breadcrumbItem.href}>
                                        <span className="hover:underline">
                                            {breadcrumbItem.label}
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
