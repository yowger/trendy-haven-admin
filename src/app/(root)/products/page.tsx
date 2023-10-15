import { dehydrate } from "@tanstack/react-query"

import HydrateClient from "@/components/tanstack/HydrateClient"
import getQueryClient from "@/lib/getQueryClient"
import { getProducts } from "@/hooks/api/useGetProduct"
import { Separator } from "@/components/ui/separator"
import DashboardTitle from "@/components/dashboard/DashboardTitle"
import { PRODUCT_QUERY_KEY } from "@/constants/queryKeys"

import DataTable from "./components/DataTable"

export default async function Products(): Promise<JSX.Element> {
    const queryClient = getQueryClient()
    const page = 0
    const pageSize = 10

    await queryClient.prefetchQuery([PRODUCT_QUERY_KEY, page, pageSize], () =>
        getProducts(page, pageSize)
    )
    const dehydratedState = dehydrate(queryClient)

    return (
        <>
            <HydrateClient state={dehydratedState}>
                <DashboardTitle
                    title="Overview of Your Products"
                    description="Make updates or add new products as needed to keep your store inventory up-to-date."
                />
                <Separator />
                <DataTable />
            </HydrateClient>
        </>
    )
}
