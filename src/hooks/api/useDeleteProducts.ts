import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { AxiosError, AxiosResponse } from "axios"

import axiosPublic from "@/lib/axios"
import { PRODUCT_QUERY_KEY } from "@/constants/queryKeys"
import type { ProductInput } from "@/schemas/productSchema"
import type { Product } from "@/types/productTypes"

const deleteProducts = async (productIds: string[]): Promise<any> => {
    const response: AxiosResponse<any> = await axiosPublic.delete(
        "/api/product",
        {
            data: { productIds },
        }
    )
    return response.data
}

const useDeleteProducts = () => {
    const queryClient = useQueryClient()

    return useMutation<any, AxiosError, string[]>({
        mutationFn: deleteProducts,
        onSuccess: (product) =>
            queryClient.invalidateQueries({
                queryKey: [PRODUCT_QUERY_KEY],
            }),
    })
}

export default useDeleteProducts
