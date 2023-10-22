import { dehydrate } from "@tanstack/react-query"

import getQueryClient from "@/lib/getQueryClient"
import { getCategories } from "@/hooks/api/useGetCategories"
import { getSizes } from "@/hooks/api/useGetSizes"
import { getColors } from "@/hooks/api/useGetColors"
import {
    CATEGORY_QUERY_KEY,
    COLOR_QUERY_KEY,
    SIZE_QUERY_KEY,
} from "@/constants/queryKeys"
import HydrateClient from "@/components/tanstack/HydrateClient"
import { Separator } from "@/components/ui/separator"
import DashboardTitle from "@/components/dashboard/DashboardTitle"

import CreateProductForm from "../components/CreateProductForm"

export default async function page() {
    const queryClient = getQueryClient()

    await queryClient.prefetchQuery([CATEGORY_QUERY_KEY], () => getCategories())
    await queryClient.prefetchQuery([SIZE_QUERY_KEY], () => getSizes())
    await queryClient.prefetchQuery([COLOR_QUERY_KEY], () => getColors())

    const dehydratedState = dehydrate(queryClient)
    return (
        <HydrateClient state={dehydratedState}>
            <DashboardTitle
                title="Create a New Product"
                description=" Enter the details of your new product below."
            />
            <Separator />
            <div className="lg:max-w-2xl">
                <CreateProductForm />
            </div>
        </HydrateClient>
    )
}
