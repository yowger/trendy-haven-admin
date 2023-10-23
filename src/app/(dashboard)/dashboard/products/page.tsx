import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

// import { dehydrate } from "@tanstack/react-query"

// import HydrateClient from "@/components/tanstack/HydrateClient"
// import getQueryClient from "@/lib/getQueryClient"
// import { getProducts } from "@/hooks/api/useGetProduct"
import { Separator } from "@/components/ui/separator"
import DashboardTitle from "@/components/dashboard/DashboardTitle"
import { DollarSign, MessageSquare, TrendingUp, Users } from "lucide-react"
import ProductDataTable from "./components/ProductDataTable"
// import { PRODUCT_QUERY_KEY } from "@/constants/queryKeys"

// import DataTable from "./components/DataTable"

export default async function Products(): Promise<JSX.Element> {
    //     const queryClient = getQueryClient()
    //     const page = 0
    //     const pageSize = 10

    //     await queryClient.prefetchQuery([PRODUCT_QUERY_KEY, page, pageSize], () =>
    //         getProducts(page, pageSize)
    //     )
    //     const dehydratedState = dehydrate(queryClient)

    return (
        <>
            {/* <HydrateClient state={dehydratedState}> */}
            <DashboardTitle
                title="Overview of Your Products"
                description="Make updates or add new products as needed to keep your store inventory up-to-date."
            />
            <Separator />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Revenue
                        </CardTitle>
                        <TrendingUp className="w-4 h-4 shrink-0 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">
                            +$10,500 from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Sales
                        </CardTitle>
                        <DollarSign className="w-4 h-4 shrink-0 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12,234</div>
                        <p className="text-xs text-muted-foreground">
                            +300 from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Products
                        </CardTitle>
                        <Users className="w-4 h-4 shrink-0 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2350</div>
                        <p className="text-xs text-muted-foreground">
                            +250 from last month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Product Reviews
                        </CardTitle>
                        <MessageSquare className="w-4 h-4 shrink-0 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2500</div>
                        <p className="text-xs text-muted-foreground">
                            +201 since last week
                        </p>
                    </CardContent>
                </Card>
            </div>

            <ProductDataTable />

            {/* </HydrateClient> */}
        </>
    )
}
