import { AxiosResponse } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import axiosPublic from "@/lib/axios"
import { PRODUCT_QUERY_KEY } from "@/constants/queryKeys"
import type { ProductInput } from "@/schemas/productSchema"
import type { Product } from "@prisma/client"

interface ProductResponse {
    product: Product
}

const createProduct = async (
    product: ProductInput
): Promise<ProductResponse> => {
    const response: AxiosResponse<ProductResponse> = await axiosPublic.post(
        "/api/product",
        product
    )

    return response.data
}

const useCreateProduct = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createProduct,
        onSuccess: (userPost) =>
            queryClient.invalidateQueries({
                queryKey: [PRODUCT_QUERY_KEY],
            }),
    })
}

export default useCreateProduct
