"use client"

import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"

import { Product } from "@/hooks/api/useGetProduct"

export const columns: ColumnDef<Product>[] = [
    // {
    //     accessorKey: "id",
    //     header: "ID",
    // },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right">Price</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"))
            const formattedAmount = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return (
                <div className="text-right font-medium">{formattedAmount}</div>
            )
        },
    },
    {
        accessorKey: "createdAt",
        header: "Date created",
        cell: ({ row }) => {
            const createdAt: Date = row.getValue("createdAt")
            const formattedCreatedAt = format(new Date(createdAt), "dd/MM/yyyy h:m 	aaa")

            return formattedCreatedAt
        },
    },
    // {
    //     accessorKey: "amount",
    //     header: () => <div className="text-right">Amount</div>,
    //     cell: ({ row }) => {
    //         const amount = parseFloat(row.getValue("amount"))
    //         const formatted = new Intl.NumberFormat("en-US", {
    //             style: "currency",
    //             currency: "USD",
    //         }).format(amount)

    //         return <div className="text-right font-medium">{formatted}</div>
    //     },
    // },
]
