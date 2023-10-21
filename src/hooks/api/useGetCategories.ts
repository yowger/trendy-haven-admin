import { useQuery } from "@tanstack/react-query"
import type { Category } from "@prisma/client"
import type { AxiosError, AxiosResponse } from "axios"

import axiosPublic from "@/lib/axios"
import { CATEGORY_QUERY_KEY } from "@/constants/queryKeys"

interface categoriesResponse {
    categories: Category[]
}

export const getCategories = async (): Promise<categoriesResponse> => {
    const response: AxiosResponse<categoriesResponse> = await axiosPublic.get(
        `api/category`
    )

    return response.data
}

const useGetCategories = () => {
    return useQuery<categoriesResponse, AxiosError>({
        queryKey: [CATEGORY_QUERY_KEY],
        queryFn: () => getCategories(),
    })
}

export default useGetCategories
