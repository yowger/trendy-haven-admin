import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { Store } from "@prisma/client"
import type { AxiosError, AxiosResponse } from "axios"

import axiosPublic from "@/lib/axios"
import { STORE_QUERY_KEY } from "@/constants/queryKeys"
import type { StoreInput } from "@/schemas/storeSchema"

interface createdStoreResponse {
    stores: Store[]
}

const createStore = async (
    store: StoreInput
): Promise<createdStoreResponse> => {
    const response: AxiosResponse<createdStoreResponse> =
        await axiosPublic.post("/api/store", store)
    return response.data
}

const useCreateStore = () => {
    const queryClient = useQueryClient()

    return useMutation<createdStoreResponse, AxiosError, StoreInput>({
        mutationFn: createStore,
        onSuccess: (product) =>
            queryClient.invalidateQueries({
                queryKey: [STORE_QUERY_KEY],
            }),
    })
}

export default useCreateStore
