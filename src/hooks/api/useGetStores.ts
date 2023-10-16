import { useQuery } from "@tanstack/react-query"
import type { AxiosError, AxiosResponse } from "axios"

import axiosPublic from "@/lib/axios"
import { STORE_QUERY_KEY } from "@/constants/queryKeys"

interface Store {
    id: string
    name: string
    country: string | null
    address: string | null
    email: string | null
    city: string | null
    zipCode: string | null
    phoneNumber: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
}

interface StoreResponse {
    stores: Store[]
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
        keepPreviousData: true,
    })
}

export default useGetStores
