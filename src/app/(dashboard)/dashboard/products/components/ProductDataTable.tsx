"use client"

import { useState } from "react"

import { PaginationState } from "@tanstack/react-table"

import useGetProducts from "@/hooks/api/useGetProduct"

import { productColumns } from "./productColumns"
import DataTable from "./DataTable"

type Props = {}

export default function ProductDataTable({}: Props) {
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    })

    const {
        isLoading: productsLoading,
        isError: productsError,
        error: productsErrorMessage,
        data: productsData,
        isFetching: productsIsFetching,
        isPreviousData: productsIsPreviousData,
    } = useGetProducts({ page: pageIndex, pageSize })

    console.log(
        "🚀 ~ file: ProductDataTable.tsx:28 ~ ProductDataTable ~ productsData:",
        productsData
    )

    return (
        <div>
            <DataTable
                data={productsData?.products ?? []}
                columns={productColumns}
            />
        </div>
    )
}
