import { useQuery } from "@tanstack/react-query"
import type { AxiosError, AxiosResponse } from "axios"

import axiosPublic from "@/lib/axios"
import { PRODUCT_QUERY_KEY } from "@/constants/queryKeys"
import type { Product } from "@prisma/client"

interface PagedProductResponse {
    products: Product[]
    pageNumber: number
    pageSize: number
    totalCount: number
}

export const getProducts = async (
    page: number = 1,
    pageSize: number = 10
): Promise<PagedProductResponse> => {
    const response: AxiosResponse<PagedProductResponse> = await axiosPublic.get(
        `api/product?pageNumber=${page}&pageSize=${pageSize}`
    )

    return response.data
}

interface ProductProps {
    page?: number
    pageSize?: number
}

const useGetProducts = ({ page = 1, pageSize = 10 }: ProductProps) => {
    return useQuery<PagedProductResponse, AxiosError>({
        queryKey: [PRODUCT_QUERY_KEY, page, pageSize],
        queryFn: () => getProducts(page, pageSize),
        keepPreviousData: true,
    })
}

export default useGetProducts
