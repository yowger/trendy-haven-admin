import { AxiosError } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import axiosPublic from "@/lib/axios"
import { Product } from "@/schemas/productSchema"
import { PRODUCT_QUERY_KEY } from "@/constants/queryKeys"

const createProduct = (product: Product): Promise<any> => {
    return axiosPublic.post("/api/product", product)
}

const useCreateProduct = () => {
    const queryClient = useQueryClient()

    return useMutation<Product, AxiosError, Product>({
        mutationFn: createProduct,
        onSuccess: (userPost) =>
            queryClient.invalidateQueries({
                queryKey: [PRODUCT_QUERY_KEY],
            }),
    })
}

export default useCreateProduct
