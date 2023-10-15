"use client"

import dynamic from "next/dynamic"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const LazyProductOverview = dynamic(() => import("./ProductOverviewPage"))
const LazyCreateProductPage = dynamic(() => import("./CreateProductPage"))

export default function ProductTabs(): JSX.Element {
    return (
        <div>
            <Tabs defaultValue="product-overview">
                <TabsList className="-mx-3">
                    <TabsTrigger value="product-overview">Overview</TabsTrigger>
                    <TabsTrigger value="new-product">Create Product</TabsTrigger>
                </TabsList>
                <TabsContent value="product-overview">
                    <LazyProductOverview />
                </TabsContent>
                <TabsContent value="new-product">
                    <LazyCreateProductPage />
                </TabsContent>
            </Tabs>
        </div>
    )
}
