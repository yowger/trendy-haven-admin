import { dehydrate } from "@tanstack/react-query"

import HydrateClient from "@/components/tanstack/HydrateClient"
import getQueryClient from "@/lib/getQueryClient"
import { PRODUCT_QUERY_KEY } from "@/constants/queryKeys"
import { getProducts } from "@/hooks/api/useGetProduct"

import ProductTabs from "./components/ProductTabs"

export default async function Products(): Promise<JSX.Element> {
    const queryClient = getQueryClient()
    const page = 0
    const pageSize = 10

    await queryClient.prefetchQuery([PRODUCT_QUERY_KEY, page, pageSize], () =>
        getProducts(page, pageSize)
    )
    const dehydratedState = dehydrate(queryClient)

    return (
        <div>
            <HydrateClient state={dehydratedState}>
                <ProductTabs />
            </HydrateClient>
        </div>
    )
}
