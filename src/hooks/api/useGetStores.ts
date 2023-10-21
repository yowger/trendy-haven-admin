import { useQuery } from "@tanstack/react-query"
import type { Store } from "@prisma/client"
import type { AxiosError, AxiosResponse } from "axios"

import axiosPublic from "@/lib/axios"
import { STORE_QUERY_KEY } from "@/constants/queryKeys"

interface StoreResponse {
    stores: Store
}

export const getStores = async (): Promise<StoreResponse> => {
    const response: AxiosResponse<StoreResponse> = await axiosPublic.get(
        `api/store`
    )

    return response.data
}

const useGetStores = () => {
    return useQuery<StoreResponse, AxiosError>({
        queryKey: [STORE_QUERY_KEY],
        queryFn: () => getStores(),
    })
}

export default useGetStores
