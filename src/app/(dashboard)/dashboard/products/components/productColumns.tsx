"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Product } from "@prisma/client"
import { format } from "date-fns"

import { Checkbox } from "@/components/ui/checkbox"

export const productColumns: ColumnDef<Product>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(checked) =>
                    table.toggleAllPageRowsSelected(!!checked)
                }
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(checked) => row.toggleSelected(!!checked)}
            />
        ),
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "Category.name",
        header: "Category",
    },
    {
        accessorKey: "_count.Stock",
        header: "variants",
    },
    {
        accessorKey: "createdAt",
        header: "Date added",
        cell: ({ row }) => {
            const createdAt: Date = row.getValue("createdAt")
            const formattedCreatedAt = format(
                new Date(createdAt),
                "dd/MM/yyyy h:m 	aaa"
            )

            return formattedCreatedAt
        },
    },
]
