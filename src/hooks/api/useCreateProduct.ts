import { AxiosError } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import axiosPublic from "@/lib/axios"
import { PRODUCT_QUERY_KEY } from "@/constants/queryKeys"
import type { ProductInput } from "@/schemas/productSchema"

const createProduct = (product: ProductInput): Promise<any> => {
    return axiosPublic.post("/api/product", product)
}

const useCreateProduct = () => {
    const queryClient = useQueryClient()

    return useMutation<ProductInput, AxiosError, ProductInput>({
        mutationFn: createProduct,
        onSuccess: (userPost) =>
            queryClient.invalidateQueries({
                queryKey: [PRODUCT_QUERY_KEY],
            }),
    })
}

export default useCreateProduct
