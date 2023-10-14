import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { AxiosError, AxiosResponse } from "axios"

import axiosPublic from "@/lib/axios"
import { PRODUCT_QUERY_KEY } from "@/constants/queryKeys"

interface deleteProductsResponse {
    message: string
}

const deleteProducts = async (
    productIds: string[]
): Promise<deleteProductsResponse> => {
    const response: AxiosResponse<deleteProductsResponse> =
        await axiosPublic.delete("/api/product", {
            data: { productIds },
        })
    return response.data
}

const useDeleteProducts = () => {
    const queryClient = useQueryClient()

    return useMutation<deleteProductsResponse, AxiosError, string[]>({
        mutationFn: deleteProducts,
        onSuccess: (product) =>
            queryClient.invalidateQueries({
                queryKey: [PRODUCT_QUERY_KEY],
            }),
    })
}

export default useDeleteProducts
