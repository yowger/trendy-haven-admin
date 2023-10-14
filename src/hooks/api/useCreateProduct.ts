import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { AxiosError, AxiosResponse } from "axios"

import axiosPublic from "@/lib/axios"
import { PRODUCT_QUERY_KEY } from "@/constants/queryKeys"
import type { ProductInput } from "@/schemas/productSchema"
import type { Product } from "@/types/productTypes"

interface CreatedProductResponse {
    product: Product
}

const createProduct = async (
    product: ProductInput
): Promise<CreatedProductResponse> => {
    const response: AxiosResponse<CreatedProductResponse> =
        await axiosPublic.post("/api/product", product)
    return response.data
}

const useCreateProduct = () => {
    const queryClient = useQueryClient()

    return useMutation<CreatedProductResponse, AxiosError, ProductInput>({
        mutationFn: createProduct,
        onSuccess: (product) =>
            queryClient.invalidateQueries({
                queryKey: [PRODUCT_QUERY_KEY],
            }),
    })
}

export default useCreateProduct
