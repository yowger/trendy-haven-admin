"use client"

import { useMemo, useState } from "react"
import {
    PaginationState,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"
import clsx from "clsx"

import useGetProducts from "@/hooks/api/useGetProduct"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { columns } from "./columns"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Trash } from "lucide-react"
import { DataTable } from "@/components/ui/data-table"

export default function Test() {
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    })

    const { isLoading, isError, error, data, isFetching, isPreviousData } =
        useGetProducts({ page: pageIndex, pageSize })

    const [rowSelection, setRowSelection] = useState({})

    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
    )

    const productCount = data?.totalCount ?? 0
    const totalPages = Math.ceil(productCount / pageSize) || 1

    const onDeleteSelectedItem = (items: any) => {
        console.log("items deleted: ", items)
    }

    const onCancelSelectedItems = () => {
        setRowSelection({})
    }

    const table = useReactTable({
        data: data?.products ?? [],
        columns,
        pageCount: totalPages,
        state: {
            pagination,
            rowSelection,
        },
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        getRowId: (row) => row.id,
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
    })

    return (
        <div className="">
            <div className="mb-4">
                <div className="space-y-4">
                    <div>
                        <Select
                            onValueChange={(pageSize) =>
                                table.setPageSize(Number(pageSize))
                            }
                            defaultValue="10"
                        >
                            <SelectTrigger className="w-28">
                                <SelectValue placeholder="Page size" />
                            </SelectTrigger>
                            <SelectContent className="w-28">
                                {[10, 20, 30, 40, 50].map((pageSize) => (
                                    <SelectItem
                                        key={pageSize}
                                        value={pageSize + ""}
                                    >
                                        Show {pageSize}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {Object.keys(rowSelection).length > 0 && (
                        <div className="flex justify-between items-center">
                            <span>
                                <div>
                                    <div className="text-sm">
                                        {Object.keys(rowSelection).length}{" "}
                                        <span>items Selected</span>
                                    </div>
                                </div>
                            </span>

                            <div className="space-x-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className=""
                                >
                                    Delete <Trash className="h-4 w-4 ml-2" />
                                </Button>
                                <Button
                                    onClick={onCancelSelectedItems}
                                    variant="ghost"
                                    size="sm"
                                    className=""
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id} className="py-3">
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell
                                            key={cell.id}
                                            className="py-3 selected"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between space-x-2 py-4">
                <div className="text-sm">
                    {table.getState().pagination.pageIndex *
                        table.getState().pagination.pageIndex +
                        1}
                    -
                    {Math.min(
                        (table.getState().pagination.pageIndex + 1) * pageSize,
                        productCount
                    )}{" "}
                    of {productCount} items
                </div>

                <div className="space-x-2 flex items-center">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* {data && <DataTable columns={columns} data={data.products} />} */}
        </div>
    )
}

{
    /* {data && <DataTable columns={columns} data={data.products} />} */
}
