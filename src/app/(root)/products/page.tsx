import { dehydrate } from "@tanstack/react-query"

import HydrateClient from "@/components/tanstack/HydrateClient"
import getQueryClient from "@/lib/getQueryClient"
import { PRODUCT_QUERY_KEY } from "@/constants/queryKeys"
import Breadcrumbs from "@/components/layout/subHeader/BreadCrumbs"
import DashboardTitle from "@/components/dashboard/DashboardTitle"
import ProductDialog from "./components/ProductDialog"
import { getProducts } from "@/hooks/api/useGetProduct"
import Test from "./components/Test"
import type { BreadcrumbItem } from "@/types/breadCrumbTypes"

export default async function Products(): Promise<JSX.Element> {
    const queryClient = getQueryClient()
    const page = 0
    const pageSize = 10

    await queryClient.prefetchQuery([PRODUCT_QUERY_KEY, page, pageSize], () =>
        getProducts(page, pageSize)
    )
    const dehydratedState = dehydrate(queryClient)

    const breadcrumbItems: BreadcrumbItem[] = [
        { href: "/", label: "Dashboard" },
        { href: "/products", label: "Products" },
    ]

    return (
        <div>
            <HydrateClient state={dehydratedState}>
                <Breadcrumbs breadcrumbItems={breadcrumbItems} />

                <DashboardTitle
                    title="Products"
                    description="Ipsum consectetur commodo nisi."
                    rightContent={<ProductDialog />}
                />

                <Test />
            </HydrateClient>
        </div>
    )
}
