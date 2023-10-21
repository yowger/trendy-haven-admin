import { useQuery } from "@tanstack/react-query"
import type { Size } from "@prisma/client"
import type { AxiosError, AxiosResponse } from "axios"

import axiosPublic from "@/lib/axios"
import { SIZE_QUERY_KEY } from "@/constants/queryKeys"

interface sizesResponse {
    sizes: Omit<Size, "productIds">[]
}

export const getSizes = async (): Promise<sizesResponse> => {
    const response: AxiosResponse<sizesResponse> = await axiosPublic.get(
        `api/size`
    )

    return response.data
}

const useGetSizes = () => {
    return useQuery<sizesResponse, AxiosError>({
        queryKey: [SIZE_QUERY_KEY],
        queryFn: () => getSizes(),
    })
}

export default useGetSizes
